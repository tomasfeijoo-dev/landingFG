/**
 * Postulaciones al Consejo Directivo → Google Sheets
 *
 * Cómo instalarlo (una sola vez):
 * 1. Crear una hoja de cálculo en Google Drive (desde la cuenta de la Fundación).
 * 2. En la hoja: Extensiones → Apps Script. Borrar lo que haya y pegar este archivo.
 * 3. Cambiar SECRET por una clave larga cualquiera (la misma que se carga en Vercel como SHEETS_SECRET).
 * 4. Implementar → Nueva implementación → tipo "Aplicación web":
 *      - Ejecutar como: Yo
 *      - Quién tiene acceso: Cualquier usuario
 *    Autorizar los permisos y copiar la URL que termina en /exec.
 * 5. En Vercel → Settings → Environment Variables cargar:
 *      SHEETS_CONSEJO_URL = la URL /exec
 *      SHEETS_SECRET      = la misma clave del paso 3
 *    y volver a desplegar.
 *
 * La hoja sigue siendo privada: solo la ven las personas con quienes la compartas.
 * La URL solo permite agregar filas (no leer) y exige la clave secreta.
 */

const SECRET = "CAMBIAR-POR-UNA-CLAVE-LARGA";
const HOJA = "Postulaciones";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const body = JSON.parse(e.postData.contents);
    if (body.secret !== SECRET) return json({ ok: false, error: "no autorizado" });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(HOJA) || ss.insertSheet(HOJA);
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

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
