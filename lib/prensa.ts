// Notas de prensa de la página Novedades (títulos tal cual figuran en fundaciongedyt.org.ar).
// TODO: reemplazar los links de búsqueda por el link directo de cada nota.

export type Categoria = "Prevención" | "Noche Azul" | "Campañas" | "Testimonios";
export type Nota = { title: string; image: string; categoria: Categoria; href?: string; destacada?: boolean };

const buscar = (t: string) => `https://www.google.com/search?q=${encodeURIComponent(`${t} Fundación Gedyt`)}`;

const base: Omit<Nota, "image">[] = [
  { title: "Cáncer de Colon: se diagnostican en promedio más de 40 casos por día en la Argentina", categoria: "Prevención" },
  { title: "Histórica campaña de concientización sobre cáncer de colon en el fútbol argentino", categoria: "Campañas" },
  {
    title: "Cáncer de Colon: La baja tasa de testeos pone en riesgo miles de vidas. Fundación Gedyt lanza una campaña de concientización para prevenirlo",
    categoria: "Campañas",
    href: "https://fundaciongedyt.org.ar/cancer-de-colon-la-baja-tasa-de-testeos-pone-en-riesgo-miles-de-vidas-fundacion-gedyt-lanza-una-campana-de-concientizacion-para-prevenirlo/",
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
    href: "https://www.infobae.com/salud/2024/03/29/los-7-mitos-mas-comunes-sobre-el-cancer-de-colon-que-aumentan-el-riesgo-de-la-enfermedad/",
  },
  {
    title: "Día Mundial contra el Cáncer de Colon: se puede prevenir, pero en el país suma 15.000 casos por año y afecta cada vez a gente más joven",
    categoria: "Prevención",
    href: "https://es-us.noticias.yahoo.com/d%C3%ADa-mundial-c%C3%A1ncer-colon-prevenir-150101092.html",
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
    href: "https://salud.misiones.gob.ar/misiones-se-presento-el-programa-de-prevencion-del-cancer-colorrectal/",
  },
  { title: "Noche Azul, la gala benéfica que busca generar conciencia contra el cáncer de colon", categoria: "Noche Azul" },
  { title: "30 fotos: la Fundación Gedyt celebró la 2° edición de la Gala “Noche Azul”", categoria: "Noche Azul" },
];

export const notas: Nota[] = base.map((n, i) => ({
  ...n,
  image: `/prensa/nota-${String(i + 1).padStart(2, "0")}.webp`,
  href: n.href ?? buscar(n.title),
}));

export const categorias: Categoria[] = ["Prevención", "Noche Azul", "Campañas", "Testimonios"];
