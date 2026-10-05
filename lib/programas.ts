// Contenido de la página Programas, tal cual figura hoy en fundaciongedyt.org.ar.

export const iniciativas = {
  before: "Diseñamos, implementamos y evaluamos ",
  bold: "programas de prevención, educación y entrenamiento",
  after: " para fortalecer capacidades y acercar la salud digestiva a más personas.",
};

export const programasEmail = "programas@fundaciongedyt.org.ar";

export type Programa = {
  title: string;
  text?: string;
  image: string;
  icon: string;
  links: { label: string; href: string }[];
  joinCta?: boolean;
};

// TODO: confirmar los links de cada botón con la Fundación.
export const programas: Programa[] = [
  {
    title: "Prevenir es Cuidar",
    text: "El primer Programa de Prevención y Detección Temprana del Cáncer de Colon diseñado especialmente para entornos laborales.",
    image: "/images/prog-prevenir.webp",
    icon: "building",
    links: [{ label: "Ver caso: Panamerican Energy", href: "/novedades" }],
    joinCta: true,
  },
  {
    title: "Mujeres en Salud",
    text: "Liderazgo, workshops y webinars.",
    image: "/images/prog-mujeres.webp",
    icon: "users",
    links: [{ label: "Ver programa", href: "https://fundaciongedyt.org.ar/mujeres-en-gastroenterologia/" }],
  },
  {
    title: "Entrenamiento para profesionales",
    text: "Formación por niveles, hands-on, simulación.",
    image: "/images/prog-entrenamiento.webp",
    icon: "graduation",
    links: [
      { label: "Entrenamiento para entrenadores", href: "https://fundaciongedyt.org.ar/hands-on/" },
      { label: "Entrenamiento para endoscopistas", href: "https://fundaciongedyt.org.ar/hands-on/" },
      { label: "Entrenamiento para asistentes", href: "https://fundaciongedyt.org.ar/entrenamiento-para-asistentes-de-endoscopia/" },
    ],
  },
  {
    title: "Misiones: Alianzas Territoriales",
    image: "/images/prog-misiones.webp",
    icon: "map",
    links: [{ label: "Ver programa", href: "https://fundaciongedyt.org.ar/programa-de-prevencion-del-cancer-colorrectal-en-la-provincia-de-misiones/" }],
  },
];
