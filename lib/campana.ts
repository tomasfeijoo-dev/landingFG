// Contenido de la página Campaña ("¿Cómo está tu Colon?"), según fundaciongedyt.org.ar/comoestatucolon.

export const hero = {
  date: "31 de marzo",
  day: "Día Mundial de Concientización sobre el Cáncer de Colon",
  title: "¿Cómo está tu Colon?",
  text: "El cáncer de colon, también conocido como cáncer colorrectal (CCR), es un tumor maligno que se desarrolla en el intestino grueso, compuesto por el colon y el recto.",
};

export const cifras = {
  intro: "En Argentina es el segundo cáncer más frecuente y el segundo de mayor mortalidad.",
  rings: [
    { value: 29, label: "de la población se realiza el test" },
    { value: 75, label: "de los diagnosticados no presentan antecedentes" },
  ],
  highlight: { value: 90, label: "de los casos pueden prevenirse y curarse si son detectados a tiempo" },
  boxes: [
    { value: "15.000", label: "casos nuevos por año" },
    { value: "7.000", label: "muertes por año" },
  ],
  gender: "Su incidencia es levemente mayor en hombres que en mujeres.",
};

// TODO: link de la encuesta "¿Cómo está tu Colon?"
export const encuestaUrl = "/contacto?motivo=otro";

export const mitos = [
  { q: "El cáncer de colon solo afecta a hombres.", mito: true, a: "Afecta por igual a todas las personas, aunque su incidencia es levemente mayor en hombres." },
  { q: "Una mala alimentación puede provocar cáncer de colon.", mito: false, a: "Una alimentación alta en grasas y carnes rojas, y baja en frutas, verduras y fibra, es un factor de riesgo." },
  { q: "Si no se presentan síntomas, no hay riesgo de cáncer de colon.", mito: true, a: "Es una enfermedad silenciosa que se desarrolla durante muchos años sin síntomas en su etapa inicial." },
  { q: "Todos los pólipos del colon son cancerosos.", mito: true, a: "Solo entre el 10% y el 20% de los pólipos que se originan en el colon se convierten en cáncer." },
  { q: "Si pierdo sangre en la materia fecal puedo no notarlo.", mito: false, a: "Los pólipos sangran en cantidades tan pequeñas que muchas veces no se ve. Para detectarlo se hace un test de sangre oculta." },
  { q: "La colonoscopía es un procedimiento largo y muy doloroso.", mito: true, a: "Es un estudio corto, de unos 20 minutos, que se realiza con sedación: no se siente nada durante ni después." },
];

export const queEs = {
  kicker: "Pólipos en el colon",
  text: "El cáncer de colon es causado por un crecimiento anormal en la mucosa colónica y el recto. Esas anomalías se denominan pólipos, que pueden seguir creciendo y extenderse a otros tejidos del colon o, incluso, invadir otros órganos del cuerpo hasta convertirse en cáncer.",
};

export const factores = [
  "Antecedentes de enfermedades inflamatorias intestinales: enfermedad de Crohn o colitis ulcerosa.",
  "Síndrome hereditario como poliposis adenomatosa familiar (PAF) o síndrome de cáncer colorrectal no polipósico hereditario (síndrome de Lynch).",
  "Antecedentes familiares cercanos con pólipos colorrectales o cáncer colorrectal.",
  "Tener más de 50 años.",
  "Padecer diabetes tipo 2.",
];

export const aQuienes =
  "En Argentina es el segundo cáncer más frecuente. En el 75% de los casos, el CCR se desarrolla en personas que no presentan antecedentes personales ni familiares de la enfermedad.";

export const causas = [
  "Consumo de alcohol y tabaco.",
  "Una alimentación alta en grasas y carnes rojas, y baja en frutas, verduras y fibra.",
  "La obesidad y la vida sedentaria.",
  "Antecedentes de otros tipos de cáncer, como cáncer de mama u ovarios, o tener enfermedades que predisponen a la aparición de pólipos en este órgano.",
];

export const sintomas = {
  intro: "En una etapa inicial el cáncer de colon no suele presentar síntomas. Ante cualquiera de estos signos, consultá con tu médico.",
  items: [
    { label: "Sangrado rectal", icon: "drop" },
    { label: "Sangre en la materia fecal", icon: "drop" },
    { label: "Cambios en el ritmo evacuatorio", icon: "clock" },
    { label: "Dolor, molestias o cólicos abdominales frecuentes", icon: "pulse" },
    { label: "Pérdida de peso sin causa aparente y anemia", icon: "scale" },
  ],
};

export const testearse = {
  kicker: "¿Se puede prevenir?",
  text: "Sí. Por sus lesiones precursoras, es una enfermedad prevenible y curable: cuando se detecta a tiempo, tiene hasta un 90% de probabilidad de curación.",
};

export const prevencion = {
  intro: "Algunos cambios en el estilo de vida pueden ayudar a prevenir la aparición de pólipos y reducir el riesgo de padecer la enfermedad.",
  items: [
    { label: "Llevar una alimentación saludable, rica en vegetales, frutas y fibra.", icon: "leaf" },
    { label: "Reducir el consumo de carnes rojas, embutidos y grasas de origen animal.", icon: "meat" },
    { label: "Evitar el consumo de tabaco.", icon: "smoke" },
    { label: "Realizar actividad física.", icon: "run" },
    { label: "Reducir el consumo de alcohol.", icon: "glass" },
    { label: "Consultar a un especialista si tenés antecedentes, síntomas o a partir de los 50 años.", icon: "stethoscope" },
  ],
};

export const diagnostico = [
  { text: "El diagnóstico comienza siempre con una consulta médica, donde el profesional evalúa los antecedentes, la edad y los factores de riesgo de cada persona para definir el procedimiento más adecuado." },
  { text: "Una de las herramientas clave para la detección temprana es el ", bold: "test inmunoquímico de sangre oculta en materia fecal (qFIT).", after: "" },
  { text: "El qFIT es un ", bold: "estudio simple", after: ", no invasivo y de fácil acceso, que permite detectar la presencia de sangre microscópica en la materia fecal, un posible signo temprano de lesiones o pólipos en el colon. Es especialmente útil como método de tamizaje en personas sin síntomas." },
  { text: "", bold: "Cuando el resultado del qFIT es positivo,", after: " el médico indicará la realización de una colonoscopía para confirmar el diagnóstico." },
  { text: "La ", bold: "colonoscopía", after: " es el método más eficaz para detectar pólipos y lesiones en el colon. Gracias a esta tecnología se pueden identificar pólipos muy pequeños que, en la mayoría de los casos, pueden extirparse en la misma intervención, evitando su progresión a cáncer." },
  { text: "La combinación de detección temprana y consulta oportuna permite prevenir el cáncer de colon y salvar vidas." },
];

export const tratamiento = {
  intro: "Dependerá del tipo y estadio del cáncer. Entre los tratamientos se incluyen:",
  items: ["Intervención quirúrgica", "Radioterapia", "Quimioterapia", "Terapia biológica dirigida", "Inmunoterapia"],
};

// TODO: link de descarga del Toolkit
export const toolkitUrl = "/contacto?motivo=prensa";
