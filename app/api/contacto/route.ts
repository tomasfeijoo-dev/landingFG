import { NextResponse } from "next/server";

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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "secretaria@fundaciongedyt.org.ar";
  const from = process.env.CONTACT_FROM || "Web Fundación Gedyt <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("RESEND_API_KEY no configurada; mensaje no enviado", data);
    return NextResponse.json({ error: "Envío no configurado" }, { status: 503 });
  }

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
    return NextResponse.json({ error: "No se pudo enviar" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
