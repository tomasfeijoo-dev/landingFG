// Comunicados, anuarios, publicaciones e investigación (textos tal cual figuran en fundaciongedyt.org.ar).
// Cada comunicado abre su página interna (/novedades/[slug]); el texto completo está en lib/articulos.ts.


const comunicadoSlugs = [
  "cancer-de-colon-mas-de-40-casos-por-dia",
  "historica-campana-cancer-de-colon-futbol-argentino",
  "baja-tasa-de-testeos-campana-de-concientizacion",
  "cuarta-edicion-noche-azul-gala-de-recaudacion",
  "el-90-de-los-casos-se-puede-prevenir-y-curar",
  "razon-de-la-baja-participacion-en-chequeos-preventivos",
  "claves-del-relevamiento-de-cancer-colorrectal",
  "simposio-anual-de-cancer-de-colon",
  "cena-de-gala-noche-azul-2022",
];

export const comunicados = [
  "Cáncer de Colon: se diagnostican en promedio más de 40 casos por día en la Argentina",
  "Histórica campaña de concientización sobre cáncer de colon en el fútbol argentino",
  "Cáncer de Colon: La baja tasa de testeos pone en riesgo miles de vidas. Fundación Gedyt lanza una campaña de concientización para prevenirlo.",
  "Fundación Gedyt celebra la 4° edición de la Noche Azul, su gala de recaudación de fondos",
  "Cáncer de colon: el 90% de los casos se puede prevenir y curar",
  "¿Cuál es la razón detrás de la baja participación en los chequeos preventivos del segundo cáncer más común entre los argentinos?",
  "Claves del Análisis del Relevamiento de Cáncer Colorrectal para optimizar la comunicación y concientizar a la población",
  "Así fué el simposio anual de Cáncer de Colon organizado por la Fundación Gedyt",
  "Fundación Gedyt realizará su Cena de Gala “Noche Azul”, una noche que busca poner en agenda la prevención del cáncer de colon, y salvar vidas.",
].map((title, i) => ({
  title,
  image: `/prensa-hd/comunicado-${i + 1}.webp`,
  href: `/novedades/${comunicadoSlugs[i]}`,
}));

export const anuarios = [
  { year: "2023", label: "Anuario 2023", image: "/publicaciones/anuario-2023.webp", pdf: "https://drive.google.com/file/d/1K0EaphzBSnUAMwPTgDStBQa8R4dCt8j2/view" },
  {
    year: "2024",
    label: "Anuario 2024",
    image: "/publicaciones/anuario-2024.webp",
    pdf: "https://drive.google.com/file/d/1E_lIViIcn0Lx0E66DDC1hN9eXHSKtzux/view",
  },
  { year: "2024 · 2025", label: "Anuario 2024 · 2025", image: "/publicaciones/anuario-2025.webp", pdf: "https://drive.google.com/file/d/1Q1hVeBBrTrfE0cqfn_uP1yCHNeMucodw/view" },
  { year: "2026", label: "Anuario 2026", image: "/images/anuario-2026-tapa.webp", pdf: "https://drive.google.com/file/d/1yzGB0vsdlE7XWtpkN9RK0qO6r2cbRH57/view" },
];

export const posters = [
  { id: "poster-caba-nacion", title: "Póster CABA Vs NACIÓN", image: "/publicaciones/poster-1.webp", pdf: "https://drive.google.com/file/d/1cRwn_HVJFjzU0ZFo8VRyIxyU6lVBggWo/view?usp=sharing" },
  { id: "poster-factores", title: "Póster Factores De No Realización De Prevención", image: "/publicaciones/poster-2.webp", pdf: "https://drive.google.com/file/d/1lKZp5-N4HxkMJ-PFUJ89QGMdZhvtAI7u/view?usp=sharing" },
  { id: "poster-brecha-genero", title: "Póster – MSAL “Brecha De Género En El Liderazgo De Sistemas De Salud Un Ejemplo En La Gastroenterología”", image: "/publicaciones/poster-3.webp", pdf: "https://drive.google.com/file/d/1MZLwnAWAi20tNCVFFjcCB-XJs0T1gn8J/view?usp=sharing" },
];

export const weo = {
  title: "Cooperación internacional con WEO",
  image: "/publicaciones/gastroenterology.webp",
  paragraphs: [
    "En el último trimestre del 2020 se desarrolló la primera guía de recomendaciones basadas en la evidencia sobre tamizaje poblacional de cáncer colorrectal basada en GRADE.",
    "El panel multidisciplinario contó con la participación de representantes de sociedades científicas y de centros de referencia en la materia de nuestro país. Actualmente se encuentra en etapa de publicación.",
  ],
  paper: "Colorectal Cancer Screening in the Novel Coronavirus Disease-2019 Era",
  authors:
    "Evelien Dekker – Han-Mo Chiu – Iris Lansdorp-Vogelaar. WEO Colorectal Cancer Screening Committee Authors List: Luis Ernesto Caro – Jason A. Dominitz – Stephen Halloran – Cesare Hassan – Julia Ismael – Rodrigo Jover – Michal F. Kaminski – Tim Kortlever – Ernst J. Kuipers – Theodore R. Levin – Takahisa Matsuda – Dominika Novak Mlakar Lix A.R. Oliveira – Susan Parry – Linda Rabeneck – Matthew Rutter – Roque Sáenz – Carlo Senore – Graeme P. Young – Ning Zhang",
  meta: [
    { k: "Published", v: "September 20, 2020" },
    { k: "Revista", v: "Gastroenterology", href: "https://www.gastrojournal.org/article/S0016-5085(20)35169-6/fulltext" },
  ],
  // Artículo completo en la web de la revista.
  url: "https://www.gastrojournal.org/article/S0016-5085(20)35169-6/fulltext",
};

export const guidelines = {
  title: "Clinical Practice Guidelines",
  image: "/publicaciones/clinical-epidemiology.webp",
  paper: "Clinical practice guidelines: Recommendations for CRC screening in Argentinian population with average risk based on iFOBT",
  authors:
    "Julia Ismael, María Celeste Díaz, Carolina Gabay, Luis Ernesto Caro, Cecilio Cerisoli, Ricardo Figueredo, Sandra Canseco, Pablo Rodriguez, Lucio Criado, Ignacio Raffa, Juan O’Connor, Karin Kopitowsky, Jose Adi, Carlos Gonzalez Del Solari",
  meta: [
    { k: "Published", v: "March 10, 2022" },
    { k: "Journal", v: "Clinical Epidemiology and Global Health", href: "https://www.ceghonline.com/article/S2213-3984(22)00038-0/fulltext" },
  ],
  // Artículo completo en la web de la revista.
  url: "https://www.ceghonline.com/article/S2213-3984(22)00038-0/fulltext",
};

export const asistencia = {
  title: "Cooperación internacional con WEO",
  subtitle: "Asistencia financiera a proyectos de investigación e implementación en cáncer de colon y mama de origen nacional",
  image: "/publicaciones/inc-medica.webp",
  paragraphs: [
    "La Fundación Gedyt ha resultado beneficiada de una ASISTENCIA FINANCIERA A PROYECTOS DE INVESTIGACIÓN E IMPLEMENTACIÓN EN CÁNCER DE COLON Y MAMA DE ORIGEN NACIONAL V 2018 otorgada por el Instituto Nacional del Cáncer.",
    "La misma se titula: “Diagnóstico e implementación de estrategias de entrenamiento en la prueba piloto del Programa Nacional de Prevención y Detección Temprana del Cáncer Colorrectal en Mendoza, para la elaboración del programa de acreditación de endoscopías e instituciones participantes para mejorar la calidad de videocolonoscopía y reducir la mortalidad por Cáncer Colorrectal en Argentina”.",
    "Cuenta con la colaboración del Ministerio de Salud de la Provincia de Mendoza y el programa provincial de CCR de la misma provincia.",
  ],
};
