// Guardado de formularios en hojas de Google Sheets (Apps Script publicado como aplicación web).
// - "consejo": hoja de consejo@ (pestaña Postulaciones).
// - "comunicacion": hoja de comunicacion@ (pestañas Newsletter y Contacto). Si no está cargada, usa la del Consejo.
export type Resultado = "ok" | "error" | "sin-configurar";
export type Destino = "consejo" | "comunicacion";

// Quita espacios y comillas sobrantes de lo que se cargó en Vercel
const limpio = (v?: string) => (v ?? "").trim().replace(/^["']|["']$/g, "");

export function sheetsConfig(destino: Destino) {
  if (destino === "comunicacion" && process.env.SHEETS_COMUNICACION_URL) {
    return { url: limpio(process.env.SHEETS_COMUNICACION_URL), secret: limpio(process.env.SHEETS_COMUNICACION_SECRET) };
  }
  return { url: limpio(process.env.SHEETS_CONSEJO_URL), secret: limpio(process.env.SHEETS_SECRET) };
}

export async function guardarEnSheets(hoja: string, campos: [string, string][], destino: Destino = "consejo"): Promise<Resultado> {
  const { url, secret } = sheetsConfig(destino);
  if (!url) return "sin-configurar";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // El secreto evita que cualquiera que conozca la URL cargue filas en la hoja
      body: JSON.stringify({ secret, hoja, fecha: new Date().toISOString(), campos }),
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

// Diagnóstico: agrega una fila "PRUEBA DE CONEXIÓN" en la pestaña indicada y explica qué respondió Google.
export async function diagnosticoSheets(destino: Destino, hoja: string, clave: string, nombres: { url: string; secret: string }) {
  const { url, secret } = sheetsConfig(destino);
  if (!url || !secret) {
    return {
      ok: false,
      problema: "Faltan variables en Vercel (o no se hizo un deploy nuevo después de cargarlas)",
      [nombres.url]: url ? "cargada" : "FALTA",
      [nombres.secret]: secret ? "cargada" : "FALTA",
    };
  }
  if (clave.trim() !== secret) {
    return {
      ok: false,
      problema: `La clave de la dirección no coincide con ${nombres.secret} de Vercel`,
      clave_en_vercel: { caracteres: secret.length, empieza_con: secret.slice(0, 3), termina_con: secret.slice(-2) },
      clave_escrita: { caracteres: clave.length, empieza_con: clave.slice(0, 3), termina_con: clave.slice(-2) },
    };
  }
  if (!url.endsWith("/exec")) return { ok: false, problema: `${nombres.url} tiene que terminar en /exec` };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, hoja, fecha: new Date().toISOString(), campos: [["Nombre", "PRUEBA DE CONEXIÓN"]] }),
      redirect: "follow",
    });
    const body = await res.text();
    let problema: string | undefined;
    if (body.includes('"ok":true')) problema = undefined;
    else if (body.includes("no autorizado")) problema = "La clave del script (const SECRET) no coincide con la de Vercel (o falta implementar una nueva versión del script)";
    else if (/accounts\.google\.com|ServiceLogin|Iniciar sesión|Sign in/i.test(body))
      problema = "Google pide iniciar sesión: en la implementación, 'Quién tiene acceso' tiene que ser 'Cualquier usuario'";
    else if (/getSheetByName|null/i.test(body)) problema = "El script no está vinculado a la hoja: hay que crearlo desde la hoja, en Extensiones → Apps Script";
    else problema = "Respuesta inesperada de Google (ver 'respuesta')";
    return { ok: !problema, problema, estado: res.status, respuesta: body.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").slice(0, 300) };
  } catch (e) {
    return { ok: false, problema: "No se pudo contactar a Google: revisá la URL", detalle: String(e) };
  }
}
