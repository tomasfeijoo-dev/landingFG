// Notas de prensa de la página Novedades (títulos tal cual figuran en fundaciongedyt.org.ar).
// Cada nota abre su página interna (/novedades/[slug]); el contenido está en lib/articulos.ts.

export type Categoria = "Prevención" | "Noche Azul" | "Campañas" | "Testimonios";
export type Nota = { title: string; image: string; categoria: Categoria; href: string; destacada?: boolean };

// Slug de la página interna de cada nota, en el mismo orden que `base`.
const slugs = [
  "cancer-de-colon-mas-de-40-casos-por-dia",
  "historica-campana-cancer-de-colon-futbol-argentino",
  "baja-tasa-de-testeos-campana-de-concientizacion",
  "llega-la-cuarta-edicion-de-la-noche-azul",
  "looks-de-los-famosos-en-la-gala-noche-azul",
  "en-fotos-los-looks-de-la-gala-solidaria",
  "mejores-y-peores-looks-noche-azul",
  "looks-de-los-famosos-en-la-noche-azul",
  "24-fotos-la-noche-azul",
  "los-7-mitos-mas-comunes-sobre-el-cancer-de-colon",
  "dia-mundial-contra-el-cancer-de-colon-15000-casos",
  "emilia-caro-mujeres-infartos-acv-cancer-de-mama",
  "brecha-de-genero-en-salud",
  "cinco-claves-cancer-de-colon-menores-de-55",
  "importancia-de-la-prevencion-del-cancer-colorrectal",
  "fundacion-gedyt-presente-en-el-dia-mundial",
  "fede-bal-y-el-dr-luis-caro",
  "axion-energy-campana-cancer-colorrectal",
  "fede-bal-la-colonoscopia-salva-vidas",
  "cancer-de-colon-claves-de-prevencion",
  "estudios-fundamentales-para-prevenir-el-cancer-de-colon",
  "misiones-programa-de-prevencion-del-cancer-colorrectal",
  "noche-azul-gala-benefica-contra-el-cancer-de-colon",
  "30-fotos-segunda-edicion-gala-noche-azul",
];

const base: Omit<Nota, "image" | "href">[] = [
  { title: "Cáncer de Colon: se diagnostican en promedio más de 40 casos por día en la Argentina", categoria: "Prevención" },
  { title: "Histórica campaña de concientización sobre cáncer de colon en el fútbol argentino", categoria: "Campañas" },
  {
    title: "Cáncer de Colon: La baja tasa de testeos pone en riesgo miles de vidas. Fundación Gedyt lanza una campaña de concientización para prevenirlo",
    categoria: "Campañas",
  },
  { title: "Llega la 4° edición de la Noche Azul, la gala para crear conciencia sobre la prevención del cáncer de colon", categoria: "Noche Azul" },
  { title: "De Araceli González a Luli Fernández, los looks de los famosos en la gala solidaria “Noche Azul”", categoria: "Noche Azul" },
  { title: "En fotos, los looks de Araceli González, Flor Torrente y todos los famosos en una gala solidaria", categoria: "Noche Azul" },
  { title: "De Luli Fernández a Flor Torrente, los mejores y peores looks en la gala de la “Noche Azul”", categoria: "Noche Azul" },
  { title: "De Araceli González y Flor Torrente a Luis Novaresio y Claudia Villafañe: los looks de los famosos en el evento La noche Azul", categoria: "Noche Azul" },
  { title: "24 fotos: la Noche Azul, se llevó a cabo otra edición de la gala a beneficio de Fundación Gedyt", categoria: "Noche Azul" },
  {
    title: "Los 7 mitos más comunes sobre el cáncer de colon que aumentan el riesgo de la enfermedad",
    categoria: "Prevención",
    destacada: true,
  },
  {
    title: "Día Mundial contra el Cáncer de Colon: se puede prevenir, pero en el país suma 15.000 casos por año y afecta cada vez a gente más joven",
    categoria: "Prevención",
  },
  { title: "Emilia Caro: “En la Argentina se mueren más mujeres por infartos y por ACV que por cáncer de mama”", categoria: "Testimonios" },
  { title: "Brecha de género: los hombres llegan a ganar hasta 3 veces más que las mujeres y diversidades", categoria: "Testimonios" },
  { title: "Cinco claves sobre el cáncer de colon que deben tener en cuenta las personas menores de 55 años", categoria: "Prevención" },
  { title: "La importancia de la prevención y concientización del Cáncer Colorrectal", categoria: "Prevención" },
  { title: "Concientización y prevención: Fundación Gedyt presenta en el día mundial sobre el cáncer de colon", categoria: "Campañas" },
  { title: "Fede Bal y el Dr. Luis Caro, quien le salvó la vida: “Hacerse estudios a tiempo te puede salvar”", categoria: "Testimonios" },
  { title: "Axion energy lanza una campaña de concientización sobre el cáncer colorrectal", categoria: "Campañas" },
  { title: "Fede Bal: “La colonoscopía salva vidas”", categoria: "Testimonios" },
  { title: "Cáncer de colon: Claves de prevención", categoria: "Prevención" },
  { title: "Cuáles estudios son fundamentales para prevenir el cáncer de colon", categoria: "Prevención" },
  {
    title: "Misiones presentó el Programa de Prevención del Cáncer Colorrectal",
    categoria: "Campañas",
  },
  { title: "Noche Azul, la gala benéfica que busca generar conciencia contra el cáncer de colon", categoria: "Noche Azul" },
  { title: "30 fotos: la Fundación Gedyt celebró la 2° edición de la Gala “Noche Azul”", categoria: "Noche Azul" },
];

export const notas: Nota[] = base.map((n, i) => ({
  ...n,
  image: `/prensa-hd/nota-${String(i + 1).padStart(2, "0")}.webp`,
  href: `/novedades/${slugs[i]}`,
}));

export const categorias: Categoria[] = ["Prevención", "Noche Azul", "Campañas", "Testimonios"];
