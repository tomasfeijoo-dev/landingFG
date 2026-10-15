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

// Cada botón lleva a la página propia del programa dentro del sitio.
export const programas: Programa[] = [
  {
    title: "Prevenir\nes Cuidar",
    text: "El primer Programa de Prevención y Detección Temprana del Cáncer de Colon diseñado especialmente para entornos laborales.",
    image: "/images/prog-prevenir.webp",
    icon: "building",
    links: [{ label: "Ver caso: Panamerican Energy", href: "/programas/panamerican-energy" }],
    joinCta: true,
  },
  {
    title: "Mujeres\nen Salud",
    text: "Liderazgo, workshops y webinars.",
    image: "/images/prog-mujeres.webp",
    icon: "users",
    links: [{ label: "Ver programa", href: "/programas/mujeres-en-salud" }],
  },
  {
    title: "Entrenamiento para\nprofesionales",
    text: "Formación por niveles, hands-on, simulación.",
    image: "/images/prog-entrenamiento.webp",
    icon: "graduation",
    links: [
      { label: "Entrenamiento para entrenadores", href: "/programas/entrenamiento-para-entrenadores" },
      { label: "Entrenamiento para endoscopistas", href: "/programas/entrenamiento-para-endoscopistas" },
      { label: "Entrenamiento para asistentes", href: "/programas/entrenamiento-para-asistentes" },
    ],
  },
  {
    title: "Misiones: Alianzas\nTerritoriales",
    image: "/images/prog-misiones.webp",
    icon: "map",
    links: [{ label: "Ver programa", href: "/programas/misiones" }],
  },
];
