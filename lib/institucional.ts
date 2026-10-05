// Contenido de la página Institucional, tal cual figura hoy en fundaciongedyt.org.ar.

export const quienesSomos = {
  intro: {
    before: "Somos una organización sin fines de lucro que promueve ",
    bold: "innovación, generación de conocimiento, programas y políticas",
    after: " para inspirar cambios en los sistemas de salud, con foco en equidad y calidad.",
  },
  pillars: [
    { title: "Misión", icon: "shield", text: "Contribuir al acceso equitativo a salud digestiva de calidad, superando barreras sociales, culturales y económicas." },
    { title: "Visión", icon: "sparkle", text: "Ser la organización gastroenterológica líder en innovación, conocimiento y programas que impacten los sistemas de salud." },
    { title: "Valores", icon: "heart", text: "Integridad, Empatía, Fortaleza, Determinación, Equidad." },
  ],
};

export type Person = { role: string; name: string; photo?: string; linkedin?: string };

export const consejo: Person[] = [
  { role: "Presidente", name: "Dr. Luis Caro", photo: "/equipo/luis-caro-v2.webp" },
  { role: "Tesorero", name: "Dr. Cecilio Cerisoli", photo: "/equipo/cecilio-cerisoli.webp" },
];

// TODO: completar foto (/public/equipo/...) y link de LinkedIn de cada persona.
export const equipo: Person[] = [
  { role: "Directora Ejecutiva", name: "Maria Emilia Caro" },
  { role: "Directora Operativa", name: "Isabela Esersky" },
  { role: "Directora Administrativa", name: "Lorena Tokatlian" },
  { role: "Dirección de Comunicación y Asuntos Institucionales", name: "Juliana Casse" },
  { role: "Asistente de Programas", name: "Sofia Chuchurru" },
  { role: "Asistente de Procesos de Programas", name: "Nicolás Padovan" },
  { role: "Dirección de Programa de Mujeres", name: "Marcela González" },
  { role: "Co-Director del Proyecto de Misiones", name: "Gonzalo Coria" },
  { role: "Comité de Fundraising", name: "Florencia Torres" },
];

export const institucionalEmail = "asuntosinstitucionales@fundaciongedyt.org.ar";

// TODO: links a cada anuario y a la página de publicaciones.
export const anuarios = [
  { label: "Anuario edición 2023", href: "https://fundaciongedyt.org.ar/publicaciones/" },
  { label: "Anuario edición 2024", href: "https://fundaciongedyt.org.ar/old/wp-content/uploads/2024/11/fundacion-gedyt-v02-digital.pdf" },
  { label: "Anuario edición 2025", href: "https://fundaciongedyt.org.ar/publicaciones/" },
];
export const publicacionesUrl = "https://fundaciongedyt.org.ar/publicaciones/";
