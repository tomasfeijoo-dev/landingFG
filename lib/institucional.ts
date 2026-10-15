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
  { role: "Directora Ejecutiva", name: "Maria Emilia Caro", photo: "/equipo/emilia-caro.webp", linkedin: "https://ar.linkedin.com/in/emiliacaro" },
  { role: "Directora Operativa", name: "Isabela Esersky", photo: "/equipo/isabela-esersky.webp", linkedin: "https://www.linkedin.com/in/isabelaesersky/" },
  { role: "Directora Administrativa", name: "Lorena Tokatlian", photo: "/equipo/lorena-tokatlian.webp", linkedin: "https://www.linkedin.com/in/lorena-tokatlian-03589922/" },
  { role: "Dirección de Comunicación y Asuntos Institucionales", name: "Juliana Casse", photo: "/equipo/juliana-casse.webp", linkedin: "https://ar.linkedin.com/in/juliana-casse-01934031" },
  { role: "Asistente de Programas", name: "Sofia Chuchurru", photo: "/equipo/sofia-chuchurru.webp", linkedin: "https://www.linkedin.com/in/sofiachuchurru/" },
  { role: "Asistente de Procesos de Programas", name: "Nicolás Padovan", photo: "/equipo/nicolas-padovan.webp", linkedin: "https://www.linkedin.com/in/nicolas-padovan-81b5a6213/" },
  { role: "Dirección de Programa de Mujeres", name: "Marcela González", photo: "/equipo/marcela-gonzalez.webp", linkedin: "https://www.linkedin.com/in/marcela-gonzalez-a3260615/" },
  { role: "Co-Director del Proyecto de Misiones", name: "Gonzalo Coria", photo: "/equipo/gonzalo-coria.webp", linkedin: "https://www.linkedin.com/company/fundacion-gedyt/" },
  { role: "Comité de Fundraising", name: "Florencia Torres", photo: "/equipo/florencia-torres.webp", linkedin: "https://www.linkedin.com/in/florencia-torres-66422378/" },
];

export const institucionalEmail = "asuntosinstitucionales@fundaciongedyt.org.ar";

// TODO: links a cada anuario y a la página de publicaciones.
export const anuarios = [
  { label: "Anuario edición 2023", href: "https://drive.google.com/file/d/1K0EaphzBSnUAMwPTgDStBQa8R4dCt8j2/view" },
  { label: "Anuario edición 2024", href: "https://drive.google.com/file/d/1E_lIViIcn0Lx0E66DDC1hN9eXHSKtzux/view" },
  { label: "Anuario edición 2025", href: "https://drive.google.com/file/d/1Q1hVeBBrTrfE0cqfn_uP1yCHNeMucodw/view" },
];
export const publicacionesUrl = "https://fundaciongedyt.org.ar/publicaciones/";
