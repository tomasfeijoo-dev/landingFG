// Guardado de formularios en la hoja de Google Sheets de la Fundación (Apps Script publicado como aplicación web).
// Cada formulario va a su pestaña: "Postulaciones", "Newsletter", "Contacto".
export type Resultado = "ok" | "error" | "sin-configurar";

// La clave tal como se cargó en Vercel, sin espacios ni comillas sobrantes
export const sheetsSecret = () => (process.env.SHEETS_SECRET ?? "").trim().replace(/^["']|["']$/g, "");
export const sheetsUrl = () => process.env.SHEETS_CONSEJO_URL?.trim();

export async function guardarEnSheets(hoja: string, campos: [string, string][]): Promise<Resultado> {
  const url = sheetsUrl();
  if (!url) return "sin-configurar";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // El secreto evita que cualquiera que conozca la URL cargue filas en la hoja
      body: JSON.stringify({ secret: sheetsSecret(), hoja, fecha: new Date().toISOString(), campos }),
      redirect: "follow",
    });
    const body = await res.text();
    if (!res.ok || !body.includes('"ok":true')) {
      console.error("Error de Google Sheets", hoja, res.status, body.slice(0, 300));
      return "error";
    }
    return "ok";
  } catch (e) {
    console.error("Error de Google Sheets", hoja, e);
    return "error";
  }
}
