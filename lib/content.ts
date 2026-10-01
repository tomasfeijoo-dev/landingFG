// Contenido editable de la landing. Cambiá textos, cifras y links acá
// sin tocar los componentes.

export const site = {
  name: "Fundación Gedyt",
  url: "https://fundaciongedyt.org.ar",
  tagline: "El cáncer colorrectal se puede prevenir. La detección temprana salva vidas.",
  description:
    "Fundación Gedyt trabaja por un acceso equitativo a una salud digestiva de calidad en Argentina: prevención y detección temprana del cáncer colorrectal, formación profesional e investigación.",
};

export const contact = {
  email: "secretaria@fundaciongedyt.org.ar",
  phone: "+54 9 11 4095-6148",
  whatsapp: "5491140956148",
  hours: "Lunes a viernes de 9 a 16 h",
  social: {
    linkedin: "https://ar.linkedin.com/company/fundacion-gedyt",
    facebook: "https://www.facebook.com/Fundacion.Gedyt/",
  },
};

// TODO: reemplazar por el link real de donaciones (Mercado Pago, transferencia, etc.)
export const donateUrl = "#contacto";

export const nav = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#que-hacemos", label: "Qué hacemos" },
  { href: "#empresas", label: "Empresas" },
  { href: "#noche-azul", label: "Noche Azul" },
  { href: "#contacto", label: "Contacto" },
];

export const stats = [
  { value: "90%", label: "de los casos de cáncer colorrectal se curan si se detectan a tiempo" },
  { value: "+10.000", label: "personas testeadas con Q-FIT en el programa de Misiones" },
  { value: "45+", label: "años: la edad a partir de la cual se recomienda el control" },
  { value: "2018", label: "año en que nace la Fundación, con más de 20 años de trayectoria Gedyt" },
];

export const programs = [
  {
    title: "Prevención y detección temprana",
    text: "Campañas de concientización y testeos con test de sangre oculta en materia fecal (Q-FIT), con seguimiento de cada caso positivo hasta su videocolonoscopía.",
    icon: "shield",
  },
  {
    title: "Programas provinciales",
    text: "Articulación público-privada para llevar el screening a las provincias. En Misiones, más de 10.000 personas ya fueron testeadas.",
    icon: "map",
  },
  {
    title: "Formación profesional",
    text: "Hands On con estaciones de simulación para gastroenterólogos y endoscopistas, y entrenamiento para asistentes de endoscopía.",
    icon: "graduation",
  },
  {
    title: "Mujeres en Gastroenterología",
    text: "Un espacio para impulsar el desarrollo, la visibilidad y el liderazgo de las mujeres en la especialidad.",
    icon: "users",
  },
  {
    title: "Investigación y publicaciones",
    text: "Acciones basadas en evidencia: investigación, publicaciones y anuarios para mejorar la eficiencia y el acceso a la atención.",
    icon: "book",
  },
  {
    title: "Comunidad",
    text: "Información clara para pacientes y familias: síntomas, factores de riesgo y cuándo hacerse el control.",
    icon: "heart",
  },
];

export const companySteps = [
  { title: "Charla informativa", text: "Una charla virtual o presencial para toda la comunidad de trabajo." },
  { title: "Testeo voluntario", text: "Entrega de tests Q-FIT a colaboradores mayores de 45 años, simple y no invasivo." },
  { title: "Seguimiento activo", text: "Acompañamos cada resultado positivo hasta el diagnóstico y la atención médica." },
  { title: "Reporte de impacto", text: "Informe de participación y resultados para tu área de RR.HH. y sustentabilidad." },
];

export const helpOptions = [
  {
    title: "Doná",
    text: "Cada aporte financia tests, campañas y seguimiento de pacientes que no tienen acceso.",
    cta: "Quiero donar",
    href: donateUrl,
    interest: "donacion",
  },
  {
    title: "Sumá tu empresa",
    text: "Implementá “Prevenir es cuidar” o acompañá como sponsor de nuestras campañas y de la Noche Azul.",
    cta: "Quiero sumar mi empresa",
    href: "#contacto",
    interest: "empresa",
  },
  {
    title: "Participá como profesional",
    text: "Capacitaciones, Hands On y redes de trabajo para profesionales de la salud digestiva.",
    cta: "Quiero capacitarme",
    href: "#contacto",
    interest: "profesional",
  },
];

export const interests = [
  { value: "empresa", label: "Programa para mi empresa" },
  { value: "donacion", label: "Quiero donar" },
  { value: "profesional", label: "Capacitación profesional" },
  { value: "prensa", label: "Prensa / alianzas" },
  { value: "otro", label: "Otra consulta" },
];
