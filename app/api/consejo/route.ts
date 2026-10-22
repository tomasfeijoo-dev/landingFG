import { NextResponse } from "next/server";
import { competencias, consejoEmail } from "@/lib/consejo";

const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// Postulaciones al Consejo Directivo: llegan por mail a la casilla del Consejo (mismo envío que el formulario de contacto).
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 });

  // Campo trampa: si viene completo es un bot, respondemos OK sin enviar nada.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const data: [string, string][] = [
    ["Nombre", clean(body.nombre, 200)],
    ["Apellido", clean(body.apellido, 200)],
    ["Email", clean(body.email, 200)],
    ["Teléfono", clean(body.telefono, 50)],
    ["Organización actual", clean(body.organizacion, 200)],
    ["País / Provincia", clean(body.pais, 200)],
    ...competencias.map((c, i): [string, string] => {
      const n = String(i + 1).padStart(2, "0");
      return [`${n} · ${c.title}`, clean(body[`competencia_${n}`], 50)];
    }),
    ["Conflicto de interés", clean(body.conflicto, 10)],
    ["Detalle del conflicto", clean(body.conflicto_detalle)],
    ["Acepta los Términos de Referencia", clean(body.acepta, 10)],
  ];
  const get = (k: string) => data.find(([l]) => l === k)?.[1] ?? "";

  if (!get("Nombre") || !get("Apellido") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("Email")) || get("Acepta los Términos de Referencia") !== "Sí") {
    return NextResponse.json({ error: "Faltan datos obligatorios" }, { status: 400 });
  }

  // 1) Guardar en la hoja de Google Sheets (Apps Script publicado como aplicación web).
  // 2) Avisar por mail con Resend. Alcanza con que uno de los dos funcione.
  const results = await Promise.all([guardarEnSheets(data), avisarPorMail(data, get).catch((): Resultado => "error")]);
  if (results.every((r) => r === "sin-configurar")) {
    console.error("Ni Google Sheets ni Resend están configurados; postulación no guardada", data);
    return NextResponse.json({ error: "Envío no configurado" }, { status: 503 });
  }
  if (!results.includes("ok")) return NextResponse.json({ error: "No se pudo enviar" }, { status: 502 });
  return NextResponse.json({ ok: true });
}

type Resultado = "ok" | "error" | "sin-configurar";

// La clave tal como se cargó en Vercel, sin espacios ni comillas sobrantes
const sheetsSecret = () => (process.env.SHEETS_SECRET ?? "").trim().replace(/^["']|["']$/g, "");

async function guardarEnSheets(data: [string, string][]): Promise<Resultado> {
  const url = process.env.SHEETS_CONSEJO_URL?.trim();
  if (!url) return "sin-configurar";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // El secreto evita que cualquiera que conozca la URL cargue filas en la hoja
      body: JSON.stringify({ secret: sheetsSecret(), fecha: new Date().toISOString(), campos: data }),
      redirect: "follow",
    });
    const body = await res.text();
    if (!res.ok || !body.includes('"ok":true')) {
      console.error("Error de Google Sheets", res.status, body.slice(0, 300));
      return "error";
    }
    return "ok";
  } catch (e) {
    console.error("Error de Google Sheets", e);
    return "error";
  }
}

async function avisarPorMail(data: [string, string][], get: (k: string) => string): Promise<Resultado> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return "sin-configurar";
  const to = process.env.CONSEJO_TO || consejoEmail;
  const from = process.env.CONTACT_FROM || "Web Fundación Gedyt <onboarding@resend.dev>";

  const rows = data
    .filter(([, v]) => v)
    .map(([k, v]) => `<p><strong>${escape(k)}:</strong> ${escape(v).replace(/\n/g, "<br>")}</p>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: get("Email"),
      subject: `[Consejo Directivo] Postulación - ${get("Nombre")} ${get("Apellido")}`,
      html: rows,
    }),
  });

  if (!res.ok) {
    console.error("Error de Resend", res.status, await res.text());
    return "error";
  }
  return "ok";
}

// Diagnóstico de la conexión con Google Sheets: /api/consejo?clave=<SHEETS_SECRET>
// Agrega una fila "PRUEBA DE CONEXIÓN" y cuenta qué respondió Google.
export async function GET(req: Request) {
  const url = process.env.SHEETS_CONSEJO_URL?.trim();
  const secret = sheetsSecret();
  const clave = (new URL(req.url).searchParams.get("clave") ?? "").trim();
  if (!url || !secret) {
    return NextResponse.json({
      ok: false,
      problema: "Faltan variables en Vercel (o no se hizo un deploy nuevo después de cargarlas)",
      SHEETS_CONSEJO_URL: url ? "cargada" : "FALTA",
      SHEETS_SECRET: secret ? "cargada" : "FALTA",
    });
  }
  if (clave !== secret) {
    // Pistas para comparar sin mostrar la clave guardada
    return NextResponse.json(
      {
        ok: false,
        problema: "La clave de la dirección no coincide con SHEETS_SECRET de Vercel",
        clave_en_vercel: { caracteres: secret.length, empieza_con: secret.slice(0, 3), termina_con: secret.slice(-2) },
        clave_escrita: { caracteres: clave.length, empieza_con: clave.slice(0, 3), termina_con: clave.slice(-2) },
      },
      { status: 401 },
    );
  }
  if (!url.endsWith("/exec")) return NextResponse.json({ ok: false, problema: "SHEETS_CONSEJO_URL tiene que terminar en /exec" });

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, fecha: new Date().toISOString(), campos: [["Nombre", "PRUEBA DE CONEXIÓN"]] }),
      redirect: "follow",
    });
    const body = await res.text();
    let problema: string | undefined;
    if (body.includes('"ok":true')) problema = undefined;
    else if (body.includes("no autorizado")) problema = "La clave del script (const SECRET) no coincide con SHEETS_SECRET de Vercel";
    else if (/accounts\.google\.com|ServiceLogin|Iniciar sesión|Sign in/i.test(body))
      problema = "Google pide iniciar sesión: en la implementación, 'Quién tiene acceso' tiene que ser 'Cualquier usuario' (no solo la organización)";
    else if (/getSheetByName|null/i.test(body))
      problema = "El script no está vinculado a la hoja: hay que crearlo desde la hoja, en Extensiones → Apps Script";
    else problema = "Respuesta inesperada de Google (ver 'respuesta')";
    return NextResponse.json({ ok: !problema, problema, estado: res.status, respuesta: body.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").slice(0, 300) });
  } catch (e) {
    return NextResponse.json({ ok: false, problema: "No se pudo contactar a Google: revisá la URL", detalle: String(e) });
  }
}
