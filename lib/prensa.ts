// Notas de prensa de la página Novedades (títulos tal cual figuran en fundaciongedyt.org.ar).
// Cada nota abre su página interna (/novedades/[slug]); el contenido está en lib/articulos.ts.

export type Categoria = "Prevención" | "Noche Azul" | "Campañas" | "Testimonios";
export type Nota = {
  title: string;
  /** Sin imagen se muestra una placa con el nombre del medio */
  image?: string;
  categoria: Categoria;
  href: string;
  destacada?: boolean;
  /** Notas publicadas en otros medios: abren el link original en otra pestaña */
  medio?: string;
  fecha?: string;
  externa?: boolean;
};

// Cobertura 2025 y 2026 (reportes de prensa de la campaña del Día Mundial y de la Noche Azul 2026).
// Títulos tal cual los publicó cada medio; van primero por ser las más recientes.
const ext = (title: string, medio: string, fecha: string, categoria: Categoria, href: string, image?: string): Nota => ({
  title,
  medio,
  fecha,
  categoria,
  href,
  image,
  externa: true,
});

const recientes: Nota[] = [
  // Noche Azul 2026
  ext(
    "“Noche Azul”: cómo fue la gala solidaria que impulsa la prevención y detección temprana del cáncer de colon",
    "Infobae",
    "16 de septiembre de 2026",
    "Noche Azul",
    "https://www.infobae.com/tendencias/2026/09/16/noche-azul-como-fue-la-gala-solidaria-que-impulsa-la-prevencion-y-deteccion-temprana-del-cancer-de-colon/",
    "/gala/noche-01.webp",
  ),
  ext(
    "Las fotos de la Noche Azul: famosos y figuras se reunieron por una causa solidaria",
    "Ciudad Magazine",
    "16 de septiembre de 2026",
    "Noche Azul",
    "https://www.ciudad.com.ar/espectaculos/2026/09/16/las-fotos-de-la-noche-azul-famosos-y-figuras-se-reunieron-por-una-causa-solidaria/",
    "/prensa-hd/prensa-2026-ciudad.webp",
  ),
  ext(
    "De Mariana Fabbiani y Guillermina Valdés a Araceli González: los looks de la Noche Azul de la Fundación GEDYT",
    "Caras",
    "Septiembre de 2026",
    "Noche Azul",
    "https://caras.perfil.com/noticias/celebridades/mariana-fabbiani-guillermina-valdes-araceli-gonzalez-looks-noche-azul-fundacion-gedyt.phtml",
    "/prensa-hd/prensa-2026-caras.webp",
  ),
  ext(
    "Vidriera: de Guillermina Valdés a Mariana Fabbiani, los glamorosos looks en color azul en una gala solidaria",
    "Para Ti",
    "Septiembre de 2026",
    "Noche Azul",
    "https://www.parati.com.ar/moda/vidriera-de-guillermina-valdes-a-mariana-fabbiani-los-glamorosos-looks-en-color-azul-en-una-gala-solidaria/",
    "/prensa-hd/prensa-2026-parati.webp",
  ),
  ext(
    "Fundación GEDyT busca llevar la detección y prevención del cáncer de colon a todo el país",
    "Economis",
    "Septiembre de 2026",
    "Prevención",
    "https://economis.com.ar/fundacion-gedyt-busca-llevar-la-deteccion-y-prevencion-del-cancer-de-colon-a-todo-el-pais/",
    "/gala/noche-05.webp",
  ),
  ext(
    "Cáncer de Colon: Fundación GEDyT avanza en el armado de un plan nacional de detección temprana",
    "Diario La Opinión",
    "2026",
    "Prevención",
    "https://diariolaopinion.com.ar/amp/cancer-de-colon-fundacion-gedyt-avanza-en-el-armado-de-un-plan-nacional-de-deteccion-temprana.htm",
    "/banners/plan-federal.webp",
  ),
  // Día Mundial del Cáncer de Colon 2026: campaña “La prevención del cáncer de colon es tu mejor jugada”
  ext(
    "“El 90% de los casos de cáncer de colon pueden curarse”: los últimos avances en pruebas diagnósticas y prevención",
    "Infobae",
    "19 de marzo de 2026",
    "Testimonios",
    "https://www.infobae.com/salud/2026/03/19/el-90-de-los-pacientes-con-cancer-de-colon-pueden-curarse-los-ultimos-avances-en-pruebas-diagnosticas-y-prevencion/",
    "/prensa-hd/caro-infobae.webp",
  ),
  ext(
    "Confirman que el 90% de los casos de cáncer de colon pueden curarse",
    "Radio Nacional",
    "19 de marzo de 2026",
    "Testimonios",
    "https://www.radionacional.com.ar/confirman-que-el-90-de-los-casos-de-cancer-de-colon-pueden-curarse/",
  ),
  ext(
    "Cáncer de colon: cómo es la campaña que impulsa la prevención y la detección temprana en Argentina",
    "Infobae",
    "17 de marzo de 2026",
    "Campañas",
    "https://www.infobae.com/salud/2026/03/17/cancer-de-colon-como-es-la-campana-que-impulsa-la-prevencion-y-la-deteccion-temprana-en-argentina/",
  ),
  ext(
    "Harán un test muy sencillo en puestos callejeros para prevenir el segundo cáncer más frecuente",
    "Clarín",
    "17 de marzo de 2026",
    "Campañas",
    "https://www.clarin.com/sociedad/haran-test-sencillo-puestos-callejeros-prevenir-segundo-cancer-frecuente_0_fNIub3D2gK.html",
  ),
  ext(
    "Cáncer de colon: por qué aconsejan iniciar antes los controles y una buena para los +50",
    "Clarín",
    "31 de marzo de 2026",
    "Prevención",
    "https://www.clarin.com/buena-vida/cancer-colon-45-nuevos-50-aconsejan-adelantar-controles_0_h1YaRnH0Jd.html",
  ),
  ext(
    "Refuerzan la importancia del testeo de uno de los tumores más prevenibles y curables",
    "TV Pública",
    "17 de marzo de 2026",
    "Prevención",
    "https://www.tvpublica.com.ar/post/refuerzan-la-importancia-del-testeo-de-uno-de-los-tumores-mas-prevenibles-y-curables",
    "/prensa-hd/prensa-2026-tvp.webp",
  ),
  ext(
    "Cáncer de colon: lanzan tests gratuitos para detectar la enfermedad a tiempo",
    "El Cronista",
    "19 de marzo de 2026",
    "Campañas",
    "https://www.cronista.com/informacion-gral/cancer-de-colon-lanzan-tests-gratuitos-para-detectar-la-enfermedad/",
  ),
  ext(
    "Refuerzan la importancia del testeo de uno de los tumores más prevenibles y curables",
    "Noticias Argentinas",
    "18 de marzo de 2026",
    "Prevención",
    "https://noticiasargentinas.com/sociedad/refuerzan-la-importancia-del-testeo-de-uno-de-los-tumores-mas-prevenibles-y-curables_a69ba80a3c331fb25189e5a8b",
  ),
  ext(
    "El cáncer de colon: prevención y detección temprana como claves en la lucha",
    "Cadena 3",
    "18 de marzo de 2026",
    "Prevención",
    "https://www.cadena3.com/noticia/sociedad/el-cancer-de-colon-prevencion-y-deteccion-temprana-como-claves-en-la-lucha_530585",
  ),
  ext(
    "Cáncer de colon: LALCEC, GEDyT, Merck y el Gobierno porteño lanzan una campaña",
    "CureCompass",
    "18 de marzo de 2026",
    "Campañas",
    "https://curecompass.com.ar/cancer-de-colon-lalcec-gedyt-merck-y-el-gobierno-porteno-lanzan-una-campana/",
  ),
  // 2025
  ext(
    "El gastroenterólogo Luis Caro fue nombrado Personalidad Destacada de la Ciudad de Buenos Aires",
    "Infobae",
    "3 de septiembre de 2025",
    "Testimonios",
    "https://www.infobae.com/salud/2025/09/03/el-gastroenterologo-luis-caro-fue-nombrado-personalidad-destacada-de-la-ciudad-de-buenos-aires/",
  ),
  ext(
    "El look de las famosas en la Gala Solidaria de Fundación GEDYT: Noche Azul contra el cáncer de colon",
    "Ciudad Magazine",
    "10 de septiembre de 2025",
    "Noche Azul",
    "https://www.ciudad.com.ar/look/2025/09/10/el-look-de-las-famosas-en-la-gala-solidaria-de-fundacion-gedyt-noche-azul-contra-el-cancer-de-colon/",
  ),
  ext(
    "Fundación Gedyt recaudó $ 265 M para prevenir el cáncer de colon",
    "CureCompass",
    "Septiembre de 2025",
    "Noche Azul",
    "https://curecompass.com.ar/fundacion-gedyt-2/",
  ),
  ext(
    "Noche Azul: una gala solidaria para prevenir y detectar el cáncer de colon",
    "La Nación",
    "29 de agosto de 2025",
    "Noche Azul",
    "https://www.lanacion.com.ar/sociedad/noche-azul-una-gala-solidaria-para-prevenir-y-detectar-el-cancer-de-colon-nid29082025/",
  ),
  ext(
    "Cáncer de colon: cómo es el test simple e innovador con el que muchas personas podrían evitar la colonoscopia",
    "Infobae",
    "31 de marzo de 2025",
    "Prevención",
    "https://www.infobae.com/salud/2025/03/31/cancer-de-colon-como-es-el-test-simple-e-innovador-con-el-que-muchas-personas-podrian-evitar-la-colonoscopia/",
  ),
];

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
  { title: "Los 7 mitos más comunes sobre el cáncer de colon que aumentan el riesgo de la enfermedad", categoria: "Prevención" },
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

export const notas: Nota[] = [
  ...recientes,
  ...base.map((n, i) => ({
    ...n,
    image: `/prensa-hd/nota-${String(i + 1).padStart(2, "0")}.webp`,
    href: `/novedades/${slugs[i]}`,
  })),
];

export const categorias: Categoria[] = ["Prevención", "Noche Azul", "Campañas", "Testimonios"];
