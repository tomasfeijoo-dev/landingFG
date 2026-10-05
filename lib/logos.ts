// Logos de sponsors e instituciones de salud (archivos en /public/logos).
// TODO: faltan logos de instituciones: sumar acá los que mande la Fundación.
export type Logo = { name: string; src: string; width: number; height: number };

export const sponsors: Logo[] = [
  { name: "Domínguez", src: "/logos/dominguez.webp", width: 186, height: 85 },
  { name: "Gedyt", src: "/logos/gedyt.webp", width: 235, height: 97 },
  { name: "Buquebus", src: "/logos/buquebus.webp", width: 152, height: 60 },
  { name: "Cibic Laboratorios", src: "/logos/cibic.webp", width: 175, height: 84 },
  { name: "Merck", src: "/logos/merck.webp", width: 247, height: 50 },
  { name: "Amgen", src: "/logos/amgen.webp", width: 244, height: 72 },
  { name: "Boston Scientific", src: "/logos/boston-scientific.webp", width: 192, height: 113 },
  { name: "Acher", src: "/logos/acher.webp", width: 228, height: 133 },
  { name: "Promedon", src: "/logos/promedon.webp", width: 157, height: 60 },
  { name: "Casasco", src: "/logos/casasco.webp", width: 238, height: 46 },
  { name: "Biohelper", src: "/logos/biohelper.webp", width: 256, height: 70 },
];

export const institutions: Logo[] = [
  { name: "CEGED", src: "/logos/ceged.webp", width: 142, height: 130 },
  { name: "CEGO", src: "/logos/cego.webp", width: 195, height: 81 },
  { name: "CNC", src: "/logos/cnc.webp", width: 205, height: 154 },
  { name: "Centro Médico Caballito", src: "/logos/caballito.webp", width: 160, height: 123 },
  { name: "CIGEBA", src: "/logos/cigeba.webp", width: 135, height: 150 },
  { name: "Clínica Privada Centro", src: "/logos/cpc.webp", width: 231, height: 86 },
  { name: "Comunicar Salud", src: "/logos/comunicar-salud.webp", width: 247, height: 49 },
  { name: "Clínica San Jorge", src: "/logos/clinica-san-jorge.webp", width: 194, height: 191 },
  { name: "CMPG", src: "/logos/cmpg.webp", width: 212, height: 105 },
  { name: "Instituto Oncológico Henry Moore", src: "/logos/henry-moore.webp", width: 218, height: 77 },
  { name: "Servicio de Gastroenterología Hospital Durand", src: "/logos/hospital-durand.webp", width: 154, height: 158 },
  { name: "Gastroenterología Hospital Gandulfo", src: "/logos/hospital-gandulfo.webp", width: 162, height: 159 },
  { name: "Hospital Italiano La Plata", src: "/logos/italiano-la-plata.webp", width: 183, height: 60 },
  { name: "Hospital Italiano Rosario", src: "/logos/italiano-rosario.webp", width: 203, height: 87 },
  { name: "D'Agostino Bruno", src: "/logos/dagostino-bruno.webp", width: 168, height: 168 },
  { name: "Laboratorio Dres. Lejtman", src: "/logos/lejtman.webp", width: 201, height: 55 },
  { name: "LAC Laboratorios", src: "/logos/lac.webp", width: 230, height: 90 },
  { name: "Nanni Laboratorios", src: "/logos/nanni.webp", width: 272, height: 207 },
  { name: "OCMI", src: "/logos/ocmi.webp", width: 197, height: 90 },
  { name: "APAeC", src: "/logos/apaec.webp", width: 182, height: 133 },
  { name: "Sanatorio Finochietto", src: "/logos/finochietto.webp", width: 249, height: 70 },
  { name: "Sanatorio Tandil", src: "/logos/sanatorio-tandil.webp", width: 196, height: 56 },
  { name: "Sanatorio Colegiales", src: "/logos/colegiales.webp", width: 214, height: 75 },
  { name: "VIDT Oncología Radiante", src: "/logos/vidt.webp", width: 216, height: 78 },
  { name: "Instituto GEO", src: "/logos/geo.webp", width: 222, height: 113 },
  { name: "Gastroenterología Hospital de Clínicas", src: "/logos/hospital-clinicas.webp", width: 200, height: 160 },
  { name: "GIO Salud Integral", src: "/logos/gio.webp", width: 272, height: 207 },
  { name: "GENDA", src: "/logos/genda.webp", width: 201, height: 52 },
];

// TODO: logos recortados de una captura (baja resolución): reemplazar por los originales.
export const allies: Logo[] = [
  { name: "Racing Solidario", src: "/logos/racing-solidario.webp", width: 174, height: 191 },
  { name: "River Plate", src: "/logos/river-plate.webp", width: 117, height: 172 },
  { name: "Rojo Solidario", src: "/logos/rojo-solidario.webp", width: 245, height: 85 },
  { name: "Liga Profesional de Fútbol", src: "/logos/lpf.webp", width: 257, height: 115 },
  { name: "Argentinos Juniors", src: "/logos/argentinos-juniors.webp", width: 179, height: 210 },
];
