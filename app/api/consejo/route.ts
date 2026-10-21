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

async function guardarEnSheets(data: [string, string][]): Promise<Resultado> {
  const url = process.env.SHEETS_CONSEJO_URL;
  if (!url) return "sin-configurar";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // El secreto evita que cualquiera que conozca la URL cargue filas en la hoja
      body: JSON.stringify({ secret: process.env.SHEETS_SECRET ?? "", fecha: new Date().toISOString(), campos: data }),
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
