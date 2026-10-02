// Contenido editable de la landing. Cambiá textos, cifras y links acá
// sin tocar los componentes. Los "TODO" son datos a confirmar o completar.

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
  hoursShort: "Lun a Vie 9 a 16 h",
  // TODO: completar la dirección de la sede si se quiere mostrar
  address: "",
  social: {
    linkedin: "https://ar.linkedin.com/company/fundacion-gedyt",
    facebook: "https://www.facebook.com/Fundacion.Gedyt/",
  },
};

// TODO: reemplazar por el link real de Mercado Pago (o la plataforma que usen).
export const donateUrl = "#contacto";

// TODO: confirmar montos sugeridos de donación mensual.
export const donationAmounts = [
  { value: "5000", label: "$5.000 / mes" },
  { value: "10000", label: "$10.000 / mes", highlight: "1 test FIT" },
  { value: "25000", label: "$25.000 / mes" },
  { value: "otro", label: "Monto a elección" },
];

export const nav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#programas", label: "Programas" },
  { href: "#que-hacemos", label: "Qué hacemos" },
  { href: "#sumate", label: "Sumate" },
  { href: "#novedades", label: "Novedades" },
  { href: "#contacto", label: "Contacto" },
];

export const features = [
  {
    eyebrow: "Detección precoz",
    title: "Test FIT",
    text: "Test inmunológico de sangre oculta en materia fecal: simple, no invasivo y sin dieta previa. Cada resultado positivo tiene seguimiento médico.",
    cta: "Consultá por el test",
    href: "#contacto",
    interest: "otro",
    icon: "flask",
  },
  {
    eyebrow: "Salud en el trabajo",
    title: "Prevenir es cuidar",
    text: "El primer programa de prevención del cáncer colorrectal para empresas: charlas, testeo voluntario y seguimiento activo.",
    cta: "Sumá tu organización",
    href: "#contacto",
    interest: "empresa",
    icon: "building",
  },
  {
    eyebrow: "Docencia y formación",
    title: "Formación profesional",
    text: "Hands On con estaciones de simulación para gastroenterólogos y endoscopistas, y entrenamiento para asistentes de endoscopía.",
    cta: "Ver capacitaciones",
    href: "#contacto",
    interest: "profesional",
    icon: "graduation",
  },
];

export const impact = [
  {
    value: "+10.000",
    label: "personas testeadas",
    text: "con test Q-FIT en el Programa de Prevención de la Provincia de Misiones.",
    icon: "users",
  },
  {
    value: "90%",
    label: "de los casos se curan",
    text: "cuando el cáncer colorrectal se detecta a tiempo. Por eso insistimos en el control.",
    icon: "shield",
  },
  {
    value: "$290M",
    label: "recaudados en la Noche Azul 2026",
    text: "destinados a sostener y ampliar los programas de detección temprana en el país.",
    icon: "heart",
  },
];

export const campaign = {
  eyebrow: "Campaña permanente de concientización",
  title: "El cáncer colorrectal se puede prevenir",
  text: "El lazo azul une a médicos, pacientes y familias en la lucha contra el cáncer colorrectal. Afecta principalmente a mayores de 45 años, pero detectado a tiempo, 9 de cada 10 casos se curan.",
  cta: "Pedí información sobre el test",
  note: "Simple, no invasivo y sin internación.",
};

export const lines = [
  {
    eyebrow: "Programas provinciales",
    title: "Prevención en Misiones",
    text: "Articulación público-privada con la provincia: más de 10.000 personas testeadas y seguimiento de cada caso positivo con videocolonoscopía.",
    cta: "Llevar el programa a mi provincia",
    interest: "prensa",
  },
  {
    eyebrow: "Alianzas con empresas",
    title: "Prevenir es cuidar",
    text: "Empresas como Pan American Energy ya lo implementaron: más de 160 colaboradores mayores de 50 años participaron del testeo interno.",
    cta: "Implementarlo en mi empresa",
    interest: "empresa",
  },
  {
    eyebrow: "Eventos solidarios",
    title: "Noche Azul",
    text: "Nuestra gala anual reúne a referentes del espectáculo, el deporte y el mundo empresarial para poner en agenda la prevención. Ya van 6 ediciones.",
    cta: "Quiero ser sponsor",
    interest: "empresa",
  },
];

export const network = [
  { title: "Empresas aliadas", text: "RSE y salud de colaboradores", icon: "building" },
  { title: "Gobiernos y municipios", text: "Programas territoriales", icon: "map" },
  { title: "Sociedades médicas", text: "Formación y protocolos", icon: "stethoscope" },
  { title: "Donantes particulares", text: "Aportes que salvan vidas", icon: "heart" },
];

export const news = [
  {
    tag: "Prevención",
    title: "Cáncer de colon: el 90% de los casos se puede prevenir y curar",
    text: "Por qué el control a partir de los 45 años y la detección temprana cambian el pronóstico.",
    href: "https://fundaciongedyt.org.ar/2024/11/22/cancer-de-colon-el-90-de-los-casos-se-puede-prevenir-y-curar/",
  },
  {
    tag: "Institucional",
    title: "Anuario 2024: innovación y compromiso en la tarea de prevenir",
    text: "Los programas, alianzas y resultados de la Fundación durante el último año.",
    href: "https://fundaciongedyt.org.ar/old/wp-content/uploads/2024/11/fundacion-gedyt-v02-digital.pdf",
  },
  {
    tag: "Noche Azul",
    title: "Así fue la sexta edición de la gala solidaria",
    text: "Una noche para impulsar la prevención y la detección temprana del cáncer de colon.",
    href: "https://www.infobae.com/tendencias/2026/09/16/noche-azul-como-fue-la-gala-solidaria-que-impulsa-la-prevencion-y-deteccion-temprana-del-cancer-de-colon/",
  },
];

export const footerLinks = {
  Programas: [
    { label: "Test FIT", href: "#programas" },
    { label: "Prevenir es cuidar", href: "#que-hacemos" },
    { label: "Programas provinciales", href: "#que-hacemos" },
    { label: "Formación profesional", href: "#programas" },
    { label: "Noche Azul", href: "#que-hacemos" },
  ],
  Institucional: [
    { label: "Nuestro impacto", href: "#impacto" },
    { label: "Sumate a la red", href: "#sumate" },
    { label: "Doná", href: "#donar" },
    { label: "Novedades", href: "#novedades" },
  ],
};

export const interests = [
  { value: "empresa", label: "Programa para mi empresa" },
  { value: "donacion", label: "Quiero donar" },
  { value: "profesional", label: "Capacitación profesional" },
  { value: "prensa", label: "Gobierno, prensa o alianzas" },
  { value: "otro", label: "Consulta sobre el test / otra" },
];
