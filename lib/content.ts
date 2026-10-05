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
export const donateUrl = "/contacto?motivo=donacion";

// TODO: pedirle a Juli el link al Anuario 2026 digital (se usa en todos los botones y tarjetas del anuario).
export const anuarioUrl = "https://fundaciongedyt.org.ar/publicaciones/";

// TODO: link del video de Bárbara. Sirve un link de YouTube o el link para compartir
// de un archivo de Google Drive (drive.google.com/file/d/.../view) con acceso
// "Cualquier persona con el enlace". Se abre en un modal dentro del sitio.
export const barbaraVideoUrl = "";

// Opciones de donación: cada test Q-FIT cuesta $95.000.
export type DonationTier = "plata" | "oro" | "platino";
export type DonationOption = { value: string; label: string; tests?: number; tier?: DonationTier };

export const donationOptions: DonationOption[] = [
  { value: "95000", label: "$95.000", tests: 1, tier: "plata" },
  { value: "190000", label: "$190.000", tests: 2, tier: "oro" },
  { value: "475000", label: "$475.000", tests: 5, tier: "platino" },
  { value: "otro", label: "Otro monto" },
];

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/programas", label: "Programas" },
  { href: "/que-hacemos", label: "Qué hacemos" },
  { href: "/sumate", label: "Sumate" },
  { href: "/novedades", label: "Novedades" },
  { href: "/contacto", label: "Contacto" },
];

// Banners del inicio (carrusel). Las fotos van en /public/banners.
export type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  text: string;
  image?: string;
  imageAlt?: string;
  // Encuadre de la foto (CSS object-position) y dónde termina el fundido hacia el texto
  imagePosition?: string;
  fade?: string;
  // Alejar la foto (0.3 = 30% más chica); el espacio libre se completa con la misma foto desenfocada
  zoomOut?: number;
  // Ilustración a usar cuando no hay foto
  art?: "ribbon";
  badge?: { value: string; label: string };
  primary: { label: string; href: string; interest?: string };
  secondary?: { label: string; href: string; interest?: string };
};

export const slides: Slide[] = [
  {
    id: "test-fit",
    eyebrow: "Prevenir también es cuidar",
    title: "Porque detectar a tiempo puede hacer la diferencia,",
    highlight: "trabajamos para que la prevención llegue a más personas.",
    text: "Test FIT simple y no invasivo, con acompañamiento médico para cada resultado.",
    image: "/banners/test-fit-mano.webp",
    imageAlt: "Mano sosteniendo un test FIT de sangre oculta en materia fecal",
    imagePosition: "70% center",
    primary: { label: "Conocé nuestra Fundación", href: "/que-hacemos" },
    secondary: { label: "Hacete el test FIT", href: "/contacto", interest: "otro" },
  },
  {
    id: "noche-azul",
    eyebrow: "Gala a beneficio",
    title: "Noche Azul 2026:",
    highlight: "una noche para salvar vidas.",
    text: "La sexta edición de nuestra gala reunió a referentes del espectáculo, el deporte y las empresas para impulsar la detección temprana.",
    image: "/banners/noche-azul-brindis.webp",
    imageAlt: "Brindis en la gala Noche Azul 2026",
    zoomOut: 0.2,
    imagePosition: "left center",
    fade: "26%",
    badge: { value: "$290M", label: "recaudados para prevención" },
    primary: { label: "Ver más", href: "/que-hacemos" },
    secondary: { label: "Quiero ser sponsor", href: "/contacto", interest: "empresa" },
  },
  {
    id: "fondo-comun",
    eyebrow: "Fondo Común",
    title: "Sé parte del Fondo Común de",
    highlight: "Prevención y Detección Temprana de Cáncer de Colon.",
    text: "Tu aporte se transforma en tests, campañas y seguimiento médico para quienes más lo necesitan.",
    art: "ribbon",
    badge: { value: "9 de 10", label: "casos se curan si se detectan a tiempo" },
    primary: { label: "Quiero aportar", href: "/donar" },
    secondary: { label: "Cómo funciona", href: "/contacto", interest: "donacion" },
  },
  {
    id: "mujeres",
    eyebrow: "Reconocimiento",
    title: "Premio a Mujeres Destacadas en",
    highlight: "Gastroenterología & Endoscopía Digestiva.",
    text: "Visibilizamos y reconocemos el liderazgo de las mujeres que transforman la especialidad.",
    image: "/banners/mujeres-premio.webp",
    imageAlt: "Entrega del Premio a Mujeres Destacadas en Gastroenterología",
    imagePosition: "center 25%",
    primary: { label: "Ver más", href: "/programas" },
    secondary: { label: "Consultanos", href: "/contacto", interest: "profesional" },
  },
  {
    id: "consejo",
    eyebrow: "Gobernanza y liderazgo",
    title: "Integrá el Consejo Directivo de",
    highlight: "Fundación Gedyt.",
    text: "Convocamos a personas con trayectoria, redes y compromiso genuino para conducir la estrategia de la Fundación y el futuro de la prevención.",
    image: "/banners/consejo.webp",
    imageAlt: "Reunión de trabajo alrededor de una mesa",
    imagePosition: "center 40%",
    primary: { label: "Iniciar mi postulación", href: "/contacto", interest: "consejo" },
  },
];

export const features = [
  {
    eyebrow: "Detección precoz",
    title: "Test FIT",
    text: "Test inmunológico de sangre oculta en materia fecal: simple, no invasivo y sin dieta previa. Cada resultado positivo tiene seguimiento médico.",
    cta: "Consultá por el test",
    href: "/contacto",
    interest: "otro",
    icon: "flask",
  },
  {
    eyebrow: "Salud en el trabajo",
    title: "Prevenir es cuidar",
    text: "El primer programa de prevención del cáncer colorrectal para empresas: charlas, testeo voluntario y seguimiento activo.",
    cta: "Sumá tu organización",
    href: "/contacto",
    interest: "empresa",
    icon: "building",
  },
  {
    eyebrow: "Docencia y formación",
    title: "Formación profesional",
    text: "Hands On con estaciones de simulación para gastroenterólogos y endoscopistas, y entrenamiento para asistentes de endoscopía.",
    cta: "Ver capacitaciones",
    href: "/contacto",
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
  cta: "Más info sobre el test",
  note: "Simple, no invasivo y sin preparación.",
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
    image: "/banners/noche-azul-brindis.webp",
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
    title: "Anuario 2026: innovación y compromiso en la tarea de prevenir",
    text: "Los programas, alianzas y resultados de la Fundación durante el último año.",
    href: anuarioUrl,
    image: "/images/anuario-2026.webp",
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
    { label: "Test FIT", href: "/programas" },
    { label: "Prevenir es cuidar", href: "/que-hacemos" },
    { label: "Programas provinciales", href: "/que-hacemos" },
    { label: "Formación profesional", href: "/programas" },
    { label: "Noche Azul", href: "/que-hacemos" },
  ],
  Institucional: [
    { label: "Nuestro impacto", href: "/#impacto" },
    { label: "Sumate a la red", href: "/sumate" },
    { label: "Doná", href: "/donar" },
    { label: "Novedades", href: "/novedades" },
  ],
};

export const interests = [
  { value: "empresa", label: "Programa para mi empresa" },
  { value: "consejo", label: "Postulación al Consejo Directivo" },
  { value: "donacion", label: "Quiero donar" },
  { value: "profesional", label: "Capacitación profesional" },
  { value: "prensa", label: "Gobierno, prensa o alianzas" },
  { value: "otro", label: "Consulta sobre el test / otra" },
];
