import { NextResponse } from "next/server";
import { diagnosticoSheets, guardarEnSheets, type Resultado } from "@/lib/sheets";

const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 });

  // Campo trampa: si viene completo es un bot, respondemos OK sin enviar nada.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const data = {
    nombre: clean(body.nombre, 200),
    email: clean(body.email, 200),
    telefono: clean(body.telefono, 50),
    organizacion: clean(body.organizacion, 200),
    motivo: clean(body.motivo, 50),
    mensaje: clean(body.mensaje),
  };

  if (!data.nombre || !data.mensaje || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: "Faltan datos obligatorios" }, { status: 400 });
  }

  // Newsletter: solo se guarda el mail en su pestaña. Contacto: se guarda y además se avisa por mail.
  if (data.motivo === "newsletter") {
    const r = await guardarEnSheets("Newsletter", [["Email", data.email]], "comunicacion");
    if (r === "ok") return NextResponse.json({ ok: true });
    return NextResponse.json({ error: r === "sin-configurar" ? "Envío no configurado" : "No se pudo guardar" }, { status: r === "sin-configurar" ? 503 : 502 });
  }

  const campos: [string, string][] = [
    ["Nombre", data.nombre],
    ["Email", data.email],
    ["Teléfono", data.telefono],
    ["Organización", data.organizacion],
    ["Motivo", data.motivo],
    ["Mensaje", data.mensaje],
  ];
  const results = await Promise.all([guardarEnSheets("Contacto", campos, "comunicacion"), avisarPorMail(data).catch((): Resultado => "error")]);
  if (results.every((r) => r === "sin-configurar")) {
    console.error("Ni Google Sheets ni Resend están configurados; mensaje no guardado", data);
    return NextResponse.json({ error: "Envío no configurado" }, { status: 503 });
  }
  if (!results.includes("ok")) return NextResponse.json({ error: "No se pudo enviar" }, { status: 502 });
  return NextResponse.json({ ok: true });
}

async function avisarPorMail(data: Record<string, string>): Promise<Resultado> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "secretaria@fundaciongedyt.org.ar";
  const from = process.env.CONTACT_FROM || "Web Fundación Gedyt <onboarding@resend.dev>";

  if (!apiKey) return "sin-configurar";

  const rows = Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `<p><strong>${k}:</strong> ${escape(v).replace(/\n/g, "<br>")}</p>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `[Web] ${data.motivo || "Consulta"} - ${data.nombre}`,
      html: rows,
    }),
  });

  if (!res.ok) {
    console.error("Error de Resend", res.status, await res.text());
    return "error";
  }
  return "ok";
}

// Diagnóstico de la conexión con la hoja de Comunicación: /api/contacto?clave=<SHEETS_COMUNICACION_SECRET>
export async function GET(req: Request) {
  const clave = new URL(req.url).searchParams.get("clave") ?? "";
  return NextResponse.json(
    await diagnosticoSheets("comunicacion", "Newsletter", clave, { url: "SHEETS_COMUNICACION_URL", secret: "SHEETS_COMUNICACION_SECRET" }),
  );
}
