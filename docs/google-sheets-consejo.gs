/**
 * Formularios de la web → Google Sheets (+ aviso por mail)
 * Una pestaña por formulario: "Postulaciones" (hoja de consejo@), "Newsletter" y "Contacto" (hoja de comunicacion@).
 *
 * Cómo instalarlo (una vez por hoja):
 * 1. Abrir la hoja → Extensiones → Apps Script. Borrar lo que haya y pegar este archivo.
 * 2. Cambiar SECRET por la clave de esa hoja (la misma que está en Vercel).
 * 3. En AVISOS dejar la casilla que tiene que recibir el mail de cada pestaña.
 * 4. Implementar → Administrar implementaciones → ✏️ → Versión: Nueva versión → Implementar
 *    (la primera vez: Nueva implementación → Aplicación web, Ejecutar como: Yo, Acceso: Cualquier usuario).
 *    Google pide autorizar el permiso nuevo para enviar mails: aceptarlo.
 */

const SECRET = "CAMBIAR-POR-LA-CLAVE";
const HOJA = "Postulaciones";

// Pestaña → casilla que recibe el aviso. Si una pestaña no está acá, se guarda sin mandar mail.
const AVISOS = {
  Postulaciones: "consejo@fundaciongedyt.org.ar",
  Newsletter: "comunicacion@fundaciongedyt.org.ar",
};

const ASUNTOS = {
  Postulaciones: "Nueva postulación al Consejo Directivo",
  Newsletter: "Nueva suscripción al newsletter",
  Contacto: "Nuevo mensaje desde la web",
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const body = JSON.parse(e.postData.contents);
    if (body.secret !== SECRET) return json({ ok: false, error: "no autorizado" });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const nombreHoja = body.hoja || HOJA;
    const sheet = ss.getSheetByName(nombreHoja) || ss.insertSheet(nombreHoja);
    const campos = body.campos; // [[título, valor], ...]

    // Encabezados la primera vez (y si se suman campos nuevos al formulario)
    const titulos = ["Fecha"].concat(campos.map(function (c) { return c[0]; }));
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(titulos);
      sheet.getRange(1, 1, 1, titulos.length).setFontWeight("bold").setBackground("#01405c").setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }
    const actuales = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    titulos.forEach(function (t) {
      if (actuales.indexOf(t) === -1) {
        actuales.push(t);
        sheet.getRange(1, actuales.length).setValue(t).setFontWeight("bold").setBackground("#01405c").setFontColor("#ffffff");
      }
    });

    const valores = {};
    campos.forEach(function (c) { valores[c[0]] = c[1]; });
    valores["Fecha"] = new Date(body.fecha);
    sheet.appendRow(actuales.map(function (t) { return valores[t] !== undefined ? valores[t] : ""; }));

    // Aviso por mail (si falla, la fila igual quedó guardada)
    if (AVISOS[nombreHoja]) {
      try {
        avisar(nombreHoja, campos, ss.getUrl());
      } catch (err) {
        console.error("No se pudo enviar el aviso: " + err);
      }
    }

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function avisar(nombreHoja, campos, urlHoja) {
  const email = (campos.filter(function (c) { return c[0] === "Email"; })[0] || [])[1];
  const nombre = campos
    .filter(function (c) { return c[0] === "Nombre" || c[0] === "Apellido"; })
    .map(function (c) { return c[1]; })
    .join(" ");
  const filas = campos
    .filter(function (c) { return c[1]; })
    .map(function (c) {
      return "<tr><td style='padding:6px 12px;color:#01405c;font-weight:bold;vertical-align:top'>" + esc(c[0]) +
        "</td><td style='padding:6px 12px'>" + esc(c[1]).replace(/\n/g, "<br>") + "</td></tr>";
    })
    .join("");
  const asunto = (ASUNTOS[nombreHoja] || "Nuevo formulario de la web") + (nombre ? " - " + nombre : email ? " - " + email : "");
  const opciones = {
    to: AVISOS[nombreHoja],
    subject: asunto,
    htmlBody:
      "<div style='font-family:Arial,sans-serif;font-size:14px;color:#222'>" +
      "<p>Llegó un formulario nuevo desde la web.</p>" +
      "<table style='border-collapse:collapse'>" + filas + "</table>" +
      "<p><a href='" + urlHoja + "'>Ver todas las respuestas en la hoja</a></p></div>",
    name: "Web Fundación Gedyt",
  };
  if (email) opciones.replyTo = email;
  MailApp.sendEmail(opciones);
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
