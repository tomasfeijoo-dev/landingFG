// Comunicados, anuarios, publicaciones e investigación (textos tal cual figuran en fundaciongedyt.org.ar).
// TODO: completar los links de cada comunicado y de cada PDF.

const pubs = "https://fundaciongedyt.org.ar/publicaciones/";

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
  image: `/prensa/comunicado-${i + 1}.webp`,
  href:
    i === 2
      ? "https://fundaciongedyt.org.ar/cancer-de-colon-la-baja-tasa-de-testeos-pone-en-riesgo-miles-de-vidas-fundacion-gedyt-lanza-una-campana-de-concientizacion-para-prevenirlo/"
      : i === 4
        ? "https://fundaciongedyt.org.ar/cancer-de-colon-el-90-de-los-casos-se-puede-prevenir-y-curar/"
        : i === 8
          ? "https://fundaciongedyt.org.ar/2022/10/28/fundacion-gedyt-realizara-su-cena-de-gala-noche-azul-una-noche-que-busca-poner-en-agenda-la-prevencion-del-cancer-de-colon-y-salvar-vidas/"
          : `https://www.google.com/search?q=${encodeURIComponent(`${title} Fundación Gedyt`)}`,
}));

export const anuarios = [
  { year: "2023", label: "Anuario 2023", image: "/publicaciones/anuario-2023.webp", pdf: pubs },
  {
    year: "2024",
    label: "Anuario 2024",
    image: "/publicaciones/anuario-2024.webp",
    pdf: "https://fundaciongedyt.org.ar/old/wp-content/uploads/2024/11/fundacion-gedyt-v02-digital.pdf",
  },
  { year: "2024 · 2025", label: "Anuario 2024 · 2025", image: "/publicaciones/anuario-2025.webp", pdf: pubs },
];

export const posters = [
  { title: "Póster CABA Vs NACIÓN", image: "/publicaciones/poster-1.webp", pdf: pubs },
  { title: "Póster Factores De No Realización De Prevención", image: "/publicaciones/poster-2.webp", pdf: pubs },
  { title: "Póster – MSAL “Brecha De Género En El Liderazgo De Sistemas De Salud Un Ejemplo En La Gastroenterología”", image: "/publicaciones/poster-3.webp", pdf: pubs },
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
    { k: "DOI", v: "www.gastrojournal.org", href: "https://www.gastrojournal.org" },
  ],
  pdf: pubs,
};

export const guidelines = {
  title: "Clinical Practice Guidelines",
  image: "/publicaciones/clinical-epidemiology.webp",
  paper: "Clinical practice guidelines: Recommendations for CRC screening in Argentinian population with average risk based on iFOBT",
  authors:
    "Julia Ismael, María Celeste Díaz, Carolina Gabay, Luis Ernesto Caro, Cecilio Cerisoli, Ricardo Figueredo, Sandra Canseco, Pablo Rodriguez, Lucio Criado, Ignacio Raffa, Juan O’Connor, Karin Kopitowsky, Jose Adi, Carlos Gonzalez Del Solari",
  meta: [
    { k: "Published", v: "March 10, 2022" },
    { k: "DOI", v: "www.doi.org", href: "https://www.doi.org" },
    { k: "Journal", v: "Clinical Epidemiology and Global Health" },
  ],
  pdf: pubs,
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
