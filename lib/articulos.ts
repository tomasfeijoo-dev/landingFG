// Contenido completo de cada nota de Novedades (/novedades/[slug]).
// Los comunicados reproducen los textos publicados por la Fundación; las notas de prensa sin texto propio
// se redactaron a partir de los comunicados de Gedyt y de la cobertura pública de cada tema.

export type Bloque =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "quote"; text: string; author: string; role?: string }
  | { t: "list"; items: string[]; ordered?: boolean }
  | { t: "stats"; items: { value: string; label: string }[] }
  | { t: "box"; title: string; text: string };

export type Seccion = "Prevención" | "Noche Azul" | "Campañas" | "Testimonios" | "Comunicado";

export type Articulo = {
  slug: string;
  title: string;
  seccion: Seccion;
  tipo: "Comunicado" | "Prensa";
  fecha?: string;
  bajada: string;
  image: string;
  caption?: string;
  // Imagen recortada (sin fondo): se muestra sobre un degradé de marca.
  cutout?: boolean;
  medio?: string;
  fuente?: string;
  blocks: Bloque[];
};

const p = (text: string): Bloque => ({ t: "p", text });
const h = (text: string): Bloque => ({ t: "h2", text });
const q = (text: string, author: string, role?: string): Bloque => ({ t: "quote", text, author, role });
const ul = (...items: string[]): Bloque => ({ t: "list", items });
const ol = (...items: string[]): Bloque => ({ t: "list", items, ordered: true });
const stats = (...items: [string, string][]): Bloque => ({ t: "stats", items: items.map(([value, label]) => ({ value, label })) });
const box = (title: string, text: string): Bloque => ({ t: "box", title, text });

const img = (n: number) => `/prensa-hd/nota-${String(n).padStart(2, "0")}.webp`;
const com = (n: number) => `/prensa-hd/comunicado-${n}.webp`;

const CARO = "Dr. Luis Caro";
const CARO_ROL = "Presidente de Fundación Gedyt · MN 51.580";
const EMILIA = "Lic. María Emilia Caro";
const EMILIA_ROL = "Directora ejecutiva de Fundación Gedyt";
const ISMAEL = "Dra. Julia Ismael";
const ISMAEL_ROL = "Directora del Programa de Cáncer de Colon de Fundación Gedyt";

const sobreGedyt = box(
  "Acerca de Fundación Gedyt",
  "Organización sin fines de lucro que trabaja para garantizar el acceso equitativo a la salud digestiva de calidad. Su labor se basa en cinco ejes: docencia y entrenamiento médico, investigación e innovación, comunicación y concientización, incidencia en políticas públicas y alineación con los Objetivos de Desarrollo Sostenible de Naciones Unidas.",
);

const sintomas = ul(
  "Cambios en el ritmo evacuatorio, como diarrea o estreñimiento persistentes.",
  "Sangre en la materia fecal o sangrado rectal.",
  "Dolor abdominal, molestias o calambres frecuentes.",
  "Pérdida de peso sin causa aparente.",
  "Cansancio constante o anemia.",
);

const metodos = ul(
  "Test inmunoquímico de sangre oculta en materia fecal (FIT): un método sencillo, económico y no invasivo que detecta sangrados invisibles a simple vista, antes de que aparezcan síntomas.",
  "Videocolonoscopía: el estudio de referencia. Dura alrededor de 20 minutos, se hace con sedación, no genera dolor y permite extirpar los pólipos en el mismo procedimiento.",
);

const ediciones = ul(
  "2019 · Primera edición: se recaudaron $2 millones para la plataforma virtual de docencia y el Programa de Formación en cáncer de colon.",
  "2022 · Segunda edición: $25 millones para la renovación del servicio de gastroenterología del Hospital de Clínicas “José de San Martín”.",
  "2023 · Tercera edición: récord de $55 millones para estudios de prevención y la formación de endoscopistas.",
  "2024 · Cuarta edición: en el Alvear Palace Hotel, con fondos destinados al tamizaje de pacientes de hospitales públicos.",
);

export const articulos: Articulo[] = [
  // ───────────── Comunicados con texto completo ─────────────
  {
    slug: "cancer-de-colon-mas-de-40-casos-por-dia",
    title: "Cáncer de Colon: se diagnostican en promedio más de 40 casos por día en la Argentina",
    seccion: "Campañas",
    tipo: "Comunicado",
    fecha: "18 de marzo de 2025",
    bajada:
      "LALCEC y la Fundación Gedyt, con el apoyo de Merck, lanzan una campaña nacional de prevención. Es el segundo tumor más frecuente del país y causa más de 7.000 muertes por año, aunque detectado a tiempo tiene un alto índice de curación.",
    image: img(1),
    caption: "La campaña “¿Y si hubiera algo dentro tuyo ocultándose en silencio?” recorre varias ciudades del país.",
    fuente: "https://hablemosdelcancerdecolon.org/",
    blocks: [
      p("En pleno mes del Cáncer de Colon, que se conmemora en marzo, y en la antesala del Día Mundial del 31 de marzo, especialistas de la Liga Argentina de Lucha Contra el Cáncer (LALCEC) y de la Fundación de Gastroenterología, Endoscopía Diagnóstica y Terapéutica (GEDyT) destacaron la importancia de la prevención y la detección temprana para mejorar las chances de tratamiento de este tumor. En el país ocupa el segundo lugar en incidencia, solo precedido por el cáncer de mama, y también el segundo en mortalidad, después del cáncer de pulmón."),
      stats(["15.895", "nuevos casos por año en la Argentina"], ["43", "diagnósticos por día, en promedio"], ["7.500", "fallecimientos anuales"]),
      h("Una campaña en medios, redes y vía pública"),
      p("Con el objetivo de sensibilizar a la población, LALCEC y la Fundación GEDyT, con el apoyo de Merck, llevan adelante una campaña en medios de comunicación, redes sociales y vía pública en Córdoba, Rosario, Mendoza, Tucumán, Mar del Plata y la Ciudad de Buenos Aires. Bajo el título “¿Y si hubiera algo dentro tuyo ocultándose en silencio?”, la iniciativa impulsa la prevención como la mejor estrategia para reducir el impacto de la enfermedad: “Con controles periódicos, una vida saludable y más acceso a estudios de detección, podrían salvarse miles de vidas cada año”."),
      p("La propuesta incluye además una cabina de fotos que rota por distintos puntos de la Ciudad de Buenos Aires. Con la ayuda de inteligencia artificial, quienes se acercan reciben material informativo y recomendaciones para consultar con su médico."),
      h("Pocos estudios, muchas vidas en juego"),
      p("Según el Observatorio Global del Cáncer (Globocan) de la Agencia Internacional de Investigación sobre Cáncer (IARC), en la Argentina se producen cada año 15.895 nuevos casos de cáncer de colon: el 12,1% de todos los diagnósticos oncológicos. Aun siendo altamente prevenible, sigue siendo la segunda causa de muerte por cáncer, con casi 7.500 fallecimientos anuales."),
      p("Existen dos métodos principales de detección: la videocolonoscopía y el test de sangre oculta en materia fecal (FIT). Sin embargo, según la 4ª Encuesta Nacional de Factores de Riesgo, solo 3 de cada 10 personas de entre 50 y 75 años (31,6%) se realizaron alguna de estas pruebas."),
      q("Cuando el cáncer de colon se detecta en estadios tempranos, la tasa de curación se acerca al 90%. Mediante estos estudios podemos detectar pólipos potencialmente cancerosos y extirparlos en la misma intervención, evitando el desarrollo futuro de la enfermedad.", CARO, "Presidente de Fundación GEDyT y director de la Carrera de Médico Endoscopista (UBA)"),
      p("“La frecuencia dependerá de la indicación médica en función de las condiciones del paciente; entre otras consideraciones, se tienen en cuenta la edad y los antecedentes familiares de esta enfermedad”, aclaró el Dr. Caro."),
      q("La prevención secundaria, que consiste en detectar precozmente un pólipo y extirparlo antes de que se vuelva canceroso, nos permite salvar más vidas incluso que con la mamografía.", "Dr. Carlos Silva", "Director médico de LALCEC"),
      p("Para los estadios avanzados, explicó Silva, el tratamiento se basa fundamentalmente en quimioterapia y, según el caso, en radioterapia, inmunoterapia, anticuerpos monoclonales y cirugía: “Esta batería de tratamientos ha mejorado notablemente la calidad de vida de los pacientes, retrasando la progresión de la enfermedad y aumentando la tasa de respuesta”."),
      h("Señales de alerta"),
      p("Aunque suelen ser inespecíficos y variar según el estadio, estos son los síntomas que deben motivar una consulta:"),
      sintomas,
      q("Como elemento principal de prevención, la recomendación es realizarse los estudios de acuerdo a la indicación médica, sobre todo a partir de los 45 años. Y también toda mejora en el estilo de vida, que beneficia la salud frente a numerosas enfermedades, no solo el cáncer de colon.", ISMAEL, "Oncóloga clínica, ex directora del Instituto Nacional del Cáncer"),
      box(
        "Factores de riesgo",
        "Edad avanzada, antecedentes familiares, enfermedades inflamatorias del intestino (colitis ulcerosa o enfermedad de Crohn), dieta alta en grasas saturadas y baja en fibras, sedentarismo, abuso de alcohol, sobrepeso y obesidad.",
      ),
    ],
  },
  {
    slug: "historica-campana-cancer-de-colon-futbol-argentino",
    title: "Histórica campaña de concientización sobre cáncer de colon en el fútbol argentino",
    seccion: "Campañas",
    tipo: "Comunicado",
    fecha: "17 de marzo de 2025",
    bajada:
      "El deporte como canal de prevención: Fundación Gedyt, los clubes y la Liga Profesional se unieron en una acción sin precedentes. En la Fecha 10, los equipos salieron a la cancha con el mensaje “Chequeate para prevenir. Cuidá tu colon”.",
    image: img(2),
    caption: "Los equipos de la Liga Profesional salieron al campo con el banner de la campaña.",
    blocks: [
      p("En un hecho histórico para el fútbol argentino, la prevención del cáncer de colon llegó a la cancha. Durante la Fecha 10 de la Liga Profesional de Fútbol, los equipos salieron al campo con un mensaje claro: “Chequeate para prevenir. Cuidá tu colon”, destacando la importancia de los chequeos regulares para prevenir una enfermedad que en la Argentina es el segundo cáncer más común y causa más de 7.000 muertes al año."),
      p("La iniciativa, impulsada por Fundación Gedyt, la Red Solidaria de la Liga y las fundaciones de los principales clubes del país, marcó un punto de inflexión en la lucha contra los tabúes que rodean a esta enfermedad en un ámbito tradicionalmente masculinizado. Por primera vez, el fútbol argentino utilizó su masividad para visibilizar una problemática de salud pública que afecta a miles de personas."),
      h("Unidos por la prevención"),
      p("El mensaje no solo estuvo presente en la salida de los equipos con el banner alusivo. También hubo charlas informativas para socios y socias, y se distribuyeron folletos en los ingresos al estadio y en las Fan Zones de clubes como Independiente, Boca Juniors y Lanús."),
      p("En el Superclásico, Rojo Solidario, Racing Solidario y Fundación Gedyt trabajaron en conjunto para imprimir y distribuir material educativo sobre la prevención y la detección temprana del cáncer de colon."),
      stats(["Fecha 10", "de la Liga Profesional de Fútbol"], ["15.500", "diagnósticos de cáncer de colon por año"], ["90%", "de los casos se previene o trata si se detecta a tiempo"]),
      h("Impacto y acceso a la información"),
      p("La acción permitió que miles de personas accedieran a la página “¿Cómo está tu colon?”, donde encontraron información clave, respondieron una encuesta de concientización y conocieron las formas de colaborar con la campaña. A través del Fondo Común de Tamizaje, además, se busca garantizar el acceso al test de sangre oculta en materia fecal (FIT), una herramienta fundamental para la detección temprana."),
      h("Una enfermedad prevenible"),
      p("Cada año, más de 15.500 personas son diagnosticadas con cáncer de colon en la Argentina. Sin embargo, el 90% de los casos pueden prevenirse o tratarse de manera efectiva si se detectan a tiempo. El desconocimiento, el miedo y los prejuicios siguen siendo barreras para la consulta médica."),
      p("Esta campaña marca un antes y un después en la concientización sobre la salud digestiva en el fútbol argentino. El impacto generado demuestra que el deporte es una herramienta poderosa para romper estigmas y salvar vidas a través de la información y la prevención."),
    ],
  },
  {
    slug: "baja-tasa-de-testeos-campana-de-concientizacion",
    title: "Cáncer de Colon: La baja tasa de testeos pone en riesgo miles de vidas. Fundación Gedyt lanza una campaña de concientización para prevenirlo",
    seccion: "Campañas",
    tipo: "Comunicado",
    fecha: "Febrero de 2025",
    bajada:
      "Solo 3 de cada 10 personas se realizan los chequeos preventivos. Con la campaña “Juntos podemos prevenir el Cáncer de Colon y cambiar las estadísticas”, la Fundación busca derribar las barreras que impiden una prevención efectiva.",
    image: img(3),
    fuente: "https://fundaciongedyt.org.ar/cancer-de-colon-la-baja-tasa-de-testeos-pone-en-riesgo-miles-de-vidas-fundacion-gedyt-lanza-una-campana-de-concientizacion-para-prevenirlo/",
    blocks: [
      p("El cáncer de colon es la segunda causa de muerte por cáncer en la Argentina, con más de 7.000 fallecimientos al año. Sin embargo, la detección temprana reduce hasta en un 90% la tasa de mortalidad. A pesar de ello, solo 3 de cada 10 personas se realizan los chequeos preventivos, lo que expone a miles de argentinos a un riesgo evitable."),
      p("Frente a esta situación, Fundación Gedyt lanza su campaña “Juntos podemos prevenir el Cáncer de Colon y cambiar las estadísticas”, cuyo objetivo es concientizar a la población y derribar las principales barreras que impiden una prevención efectiva."),
      h("Una barrera urgente a derribar"),
      p("Un estudio de Fundación Gedyt entre 4.000 personas reveló que la principal razón por la que no se realizan los chequeos es la falta de recomendación médica (45%), seguida por la falta de información (24%)."),
      stats(["3 de 10", "personas se hacen los chequeos"], ["45%", "no recibió recomendación médica"], ["24%", "no tenía información"]),
      q("Entendemos que los profesionales de la salud enfrentan grandes desafíos en su práctica diaria, con limitaciones de tiempo y recursos. Por eso queremos ser aliados de los médicos, brindándoles herramientas para facilitar la promoción de los estudios preventivos. La detección temprana es una responsabilidad compartida.", EMILIA, EMILIA_ROL),
      h("Información y acción: los dos pilares"),
      ol(
        "Sensibilizar e informar: a través de alianzas con instituciones médicas, clubes de fútbol, laboratorios y celebridades, para llegar a un público más amplio y motivar consultas oportunas.",
        "Fondo de prevención: un fondo que permitirá llevar testeos de sangre oculta en materia fecal (FIT-Q) y actividades de prevención a comunidades vulnerables, reduciendo la desigualdad en el acceso a la detección temprana.",
      ),
      p("La campaña suma la colaboración de la Fundación CED, referente en Mar del Plata en la prevención del cáncer de colon, y de la Universidad FASTA como embajadora del mensaje en el ámbito académico."),
      q("Con una detección temprana podemos salvar vidas. Nuestro compromiso es que cada persona entienda la importancia de hacerse chequeos regulares a partir de los 45 años. A partir de los 45 años, no esperar es la mejor acción.", CARO, CARO_ROL),
      h("¿Cuándo consultar al médico?"),
      p("La Dra. Julia Ismael, directora del Programa de Cáncer de Colon de la Fundación y ex directora del Instituto Nacional del Cáncer, lo resume así:"),
      ul(
        "Personas sin factores de riesgo: comenzar los controles a partir de los 45 años.",
        "Personas con sangrado rectal, cambios en el ritmo evacuatorio, dolor abdominal frecuente, pérdida de peso inexplicada o anemia: consultar inmediatamente.",
        "Personas con antecedentes familiares de cáncer colorrectal o síndromes hereditarios: iniciar los controles antes de los 45 años, con un plan de seguimiento indicado por su médico.",
      ),
      h("Métodos de detección temprana"),
      metodos,
      sobreGedyt,
    ],
  },
  {
    slug: "cuarta-edicion-noche-azul-gala-de-recaudacion",
    title: "Fundación Gedyt celebra la 4° edición de la Noche Azul, su gala de recaudación de fondos",
    seccion: "Noche Azul",
    tipo: "Comunicado",
    fecha: "Septiembre de 2024",
    bajada:
      "La gala anual a beneficio se realizará el martes 24 de septiembre en el Alvear Palace Hotel, con la conducción de Guillermo Andino, un show de tango y subastas en vivo.",
    image: com(4),
    blocks: [
      p("Fundación GEDYT celebrará el martes 24 de septiembre la cuarta edición de la “Noche Azul”, su gala anual a beneficio, en el Alvear Palace Hotel. El evento estará conducido por Guillermo Andino, contará con un show de tango a cargo de la compañía de Lucas Blanco y su obra “38 y siempre”, y se realizarán diferentes subastas en vivo."),
      p("Los fondos recaudados serán destinados a financiar estudios de tamizaje para pacientes de hospitales públicos y a impulsar investigaciones, proyectos y programas de la Fundación, con un enfoque en la prevención y detección temprana del cáncer de colon."),
      p("La noche reunirá a invitados del ámbito de la salud, el espectáculo, el empresariado, el deporte y el periodismo. Los anfitriones serán el Dr. Luis Caro, presidente de la Fundación, junto a la Lic. María Emilia Caro, directora ejecutiva, y distintas autoridades de la institución."),
      q("La Noche Azul representa una oportunidad única para que personas solidarias y líderes de diferentes campos nos reunamos con el objetivo de colaborar con esta noble causa.", CARO, CARO_ROL),
      q("Un año más, la gala será el escenario perfecto para la unión entre la salud, la ciencia y la solidaridad. Juntos podemos marcar una diferencia en la salud digestiva de toda la sociedad.", EMILIA, EMILIA_ROL),
      h("Ediciones anteriores"),
      stats(["$55 M", "récord recaudado en 2023"], ["$25 M", "para el Hospital de Clínicas en 2022"], ["2019", "primera Noche Azul"]),
      p("La edición de 2023 alcanzó una cifra récord de $55 millones, destinados a financiar estudios de prevención y detección temprana y al desarrollo de programas de formación para endoscopistas."),
      p("En 2022 se recaudaron $25 millones para la renovación y puesta en valor del servicio de gastroenterología del Hospital de Clínicas “José de San Martín”, con el fin de ampliar su capacidad y mejorar la calidad de atención."),
      p("La primera Noche Azul se realizó en 2019 y recaudó $2 millones, destinados a la plataforma virtual de docencia y al Programa de Formación en cáncer de colon. En 2020 se realizó un simposio virtual y en 2021, un simposio híbrido en el Complejo La Plaza."),
    ],
  },
  {
    slug: "el-90-de-los-casos-se-puede-prevenir-y-curar",
    title: "Cáncer de colon: el 90% de los casos se puede prevenir y curar",
    seccion: "Prevención",
    tipo: "Comunicado",
    fecha: "Marzo de 2024",
    bajada:
      "Con 15.000 diagnósticos y más de 7.000 muertes por año, es el segundo cáncer más frecuente y de mayor mortalidad en la Argentina. Solo el 30% de la población se hace los chequeos preventivos.",
    image: com(5),
    fuente: "https://fundaciongedyt.org.ar/cancer-de-colon-el-90-de-los-casos-se-puede-prevenir-y-curar/",
    blocks: [
      p("Con 15.000 diagnósticos y más de 7.000 muertes por año, el cáncer de colon es el segundo más frecuente y de mayor mortalidad en la Argentina. Sin embargo, según datos del Ministerio de Salud, solo el 30% de la población se realiza los chequeos preventivos. Fundación GEDYT realizó una encuesta para visibilizar y concientizar sobre la importancia de los controles periódicos para salvar vidas."),
      stats(["29%", "de la población se realiza el test"], ["75%", "de los diagnosticados no tiene antecedentes"], ["90%", "de los casos puede prevenirse y curarse"]),
      p("En un relevamiento entre hombres y mujeres de 40 a 70 años, el 45,4% de quienes no se hicieron estudios de chequeo citó la falta de recomendación médica como razón principal, y un 24,3% señaló la falta de información. Otras razones fueron miedo o vergüenza (13,3%) y falta de tiempo (6,2%). Además, el 37,8% identifica preocupaciones durante el estudio, como el temor a hallazgos inesperados o las incomodidades de la preparación."),
      q("La recomendación del médico de cabecera desempeña un papel crucial en la promoción de los estudios preventivos. Por eso iniciamos una colaboración con la comunidad médica para que cada profesional que atiende a pacientes mayores de 45 años esté informado para orientar sobre la importancia de estos exámenes.", EMILIA, EMILIA_ROL),
      h("Síntomas y cómo prevenir la enfermedad"),
      p("El cáncer de colon es causado por un crecimiento anormal en la mucosa del colon y el recto; por eso también se lo conoce como cáncer colorrectal. Esas anomalías, llamadas pólipos, tienen un período de progresión de 10 a 15 años hasta la aparición del tumor."),
      q("La enfermedad no suele provocar síntomas en sus inicios sino cuando ya se encuentra en un estadio avanzado. Por eso insistimos en la importancia de los chequeos preventivos para salvar vidas. Detectado a tiempo, el cáncer de colon tiene 90% de probabilidades de ser curado.", CARO, "Gastroenterólogo, presidente de Fundación GEDYT"),
      q("La enfermedad afecta tanto a hombres como a mujeres y puede ocurrir a cualquier edad, pero con un claro incremento a partir de los 50 años. Ante síntomas como sangrado rectal, cambios en el ritmo evacuatorio, dolor abdominal, pérdida de peso inexplicada o anemia, hay que consultar inmediatamente.", ISMAEL, ISMAEL_ROL),
      p("El estudio por excelencia es la colonoscopía, que en manos experimentadas y con equipamiento adecuado es un procedimiento seguro. “Permite detectar pólipos muy pequeños. Es un examen de aproximadamente 20 minutos que se realiza con los pacientes sedados y no genera ningún tipo de dolor ni durante ni después”, agrega el Dr. Caro."),
      h("“¿Cómo está tu colon?”"),
      p("Con el objetivo de derribar las barreras para la detección temprana, Fundación GEDYT lanzó “¿Cómo está tu colon?”, una campaña que pone el eje en acercar información clara a la población. “Es un llamado a la acción no solo a la comunidad médica, para reforzar el mensaje con sus pacientes, sino también para que todas las personas en edad adulta o con algún síntoma puedan acudir a su profesional de confianza”, concluye Emilia Caro."),
    ],
  },
  {
    slug: "razon-de-la-baja-participacion-en-chequeos-preventivos",
    title: "¿Cuál es la razón detrás de la baja participación en los chequeos preventivos del segundo cáncer más común entre los argentinos?",
    seccion: "Prevención",
    tipo: "Comunicado",
    fecha: "Marzo de 2024",
    bajada:
      "Un relevamiento de la Fundación revela que el 45,4% de quienes no se hicieron estudios de prevención no recibieron la recomendación de su médico. La falta de información y el miedo completan el cuadro.",
    image: com(6),
    blocks: [
      p("En la Argentina, el cáncer de colon es una preocupación de salud pública, con más de 15.000 nuevos casos diagnosticados por año y una mortalidad que supera las 7.000 personas. Sin embargo, solo el 30% de la población se somete a chequeos y pruebas de detección temprana, según datos relevados por la Fundación."),
      stats(["45,4%", "no recibió recomendación médica"], ["24,3%", "señala falta de información"], ["37,8%", "teme hallazgos inesperados"]),
      p("Un estudio realizado en diversos centros gastroenterológicos revela que el 45,4% de quienes no se hicieron estudios de chequeo cita la falta de recomendación médica como razón principal, una brecha crítica en la orientación profesional. Un 24,3% señala la falta de información, mientras que un 37,8% identifica preocupaciones durante el estudio, como el miedo a hallazgos inesperados y las incomodidades de la preparación."),
      h("El rol del médico de cabecera"),
      p("Desde la Fundación se reconoce que la recomendación del médico de cabecera es crucial para promover los estudios preventivos. Por eso, la institución inició una colaboración con la comunidad médica para que cada profesional que atienda a pacientes mayores de 45 años esté informado para orientar sobre estos exámenes y reducir la incertidumbre asociada a la preparación."),
      p("Con el 90% de los casos de cáncer colorrectal potencialmente prevenibles, la concientización y el abordaje de los aspectos prácticos y emocionales de los estudios pueden desempeñar un papel clave para superar este desafío."),
      h("Una encuesta para orientar a cada persona"),
      p("En el marco del mes de concientización, la Fundación lidera la campaña “¿Cómo está tu colon?”. A través de su web ofrece una encuesta anónima que orienta a las personas sobre sus chequeos. Con los datos recopilados, la Fundación reforzará las acciones para abordar las barreras identificadas y promover una mayor participación en los controles."),
    ],
  },
  {
    slug: "claves-del-relevamiento-de-cancer-colorrectal",
    title: "Claves del Análisis del Relevamiento de Cáncer Colorrectal para optimizar la comunicación y concientizar a la población",
    seccion: "Prevención",
    tipo: "Comunicado",
    fecha: "Marzo de 2024",
    bajada:
      "Una encuesta anónima con 2.736 respuestas, realizada entre febrero de 2023 y febrero de 2024, muestra qué saben los argentinos sobre el cáncer colorrectal y qué les impide hacerse los estudios.",
    image: com(7),
    blocks: [
      p("La detección temprana y la prevención pueden disminuir tanto la incidencia como la mortalidad del cáncer colorrectal. La Organización Mundial de la Salud indica que su impacto puede reducirse significativamente con un modo de vida sano, la reducción de los factores de riesgo y la detección precoz mediante el cribado. Para eso, la comunicación y la concientización cumplen roles fundamentales."),
      h("Acciones determinantes"),
      p("Comprometida a incrementar las tasas de detección temprana, la Fundación Gedyt realizó una encuesta anónima que recabó 2.736 respuestas entre febrero de 2023 y febrero de 2024, distribuida principalmente en centros de gastroenterología de la Ciudad de Buenos Aires y difundida también por canales digitales."),
      p("Esta estrategia puede introducir un sesgo, ya que los participantes provienen mayormente de entornos con acceso más fácil a la atención médica. Aun así, ofrece un buen punto de partida para explorar la conciencia y la participación en la prevención."),
      stats(["2.736", "respuestas"], ["96,9%", "oyó hablar del cáncer colorrectal"], ["90,5%", "sabe que es prevenible"]),
      h("Quiénes respondieron"),
      ul(
        "El grupo más representado tiene entre 61 y 70 años (32,5% de las respuestas).",
        "El 64,8% son mujeres y el 35,1%, hombres.",
        "El 75,8% tiene prepaga; el 21,6%, obra social o mutual; el 1,4% se atiende de forma particular y el 1,2% usa el sistema público o no tiene cobertura.",
        "El 84,2% de las respuestas proviene de CABA y la Provincia de Buenos Aires, lo que plantea la necesidad de una mirada más federal en la difusión.",
      ),
      h("Algunas cifras impactantes"),
      p("Al preguntar por qué no se hicieron pruebas de detección temprana, el 45,4% identificó la falta de recomendación médica como el principal factor, y el 24,3%, la falta de información. Estos hallazgos muestran la necesidad de intervenciones dirigidas tanto a los profesionales de la salud como a la comunidad."),
      h("¿Cuánto pesan los mitos?"),
      p("Entre quienes se hicieron una colonoscopía, las preocupaciones predominantes fueron el miedo a hallazgos inesperados (37,8%), la preparación (32,3%) y la anestesia (27,9%). Es un dato relevante: siempre se creyó que la preparación era la barrera principal."),
      stats(["37,8%", "miedo a hallazgos inesperados"], ["32,3%", "preocupación por la preparación"], ["27,9%", "inquietud por la anestesia"]),
      h("Conclusiones"),
      p("La recomendación del médico de cabecera es fundamental. Es esencial trabajar con otras asociaciones médicas para que cada profesional que atiende a pacientes mayores de 45 años cuente con la información necesaria para orientarlos."),
      p("También es clave abordar la incomodidad de la preparación: la Fundación propone recoger la experiencia de personas que ya se hicieron el estudio para ofrecer una visión más realista y aliviar temores. Información detallada, apoyo psicológico y mejor comunicación médico-paciente pueden aumentar la participación y reducir las barreras emocionales."),
      box("En resumen", "Fomentar la recomendación médica, difundir información y reducir los temores son los tres pilares para transformar el conocimiento en acciones concretas de prevención."),
    ],
  },
  {
    slug: "simposio-anual-de-cancer-de-colon",
    title: "Así fue el simposio anual de Cáncer de Colon organizado por la Fundación Gedyt",
    seccion: "Prevención",
    tipo: "Comunicado",
    fecha: "Abril de 2023",
    bajada:
      "El 31 de marzo, Día Internacional del Cáncer de Colon, más de 500 personas participaron en vivo y por streaming del simposio científico de la Fundación en el Teatro Metropolitan.",
    image: com(8),
    blocks: [
      p("El 31 de marzo, Día Internacional del Cáncer de Colon, la Fundación Gedyt llevó a cabo su Simposio Científico Académico en el Teatro Metropolitan de Buenos Aires. Con más de 500 asistentes en vivo y por streaming, el evento buscó contribuir a aumentar la detección temprana y la prevención de este tipo de cáncer en la Argentina."),
      stats(["+500", "asistentes en vivo y por streaming"], ["4", "sesiones científicas"], ["1 de 3", "mayores de 50 se hace los estudios"]),
      p("El cáncer de colon es el segundo más frecuente en el país, pero es altamente prevenible si se detecta y extirpa el pólipo a tiempo. Pese a esto, solo uno de cada tres adultos mayores de 50 años se realiza los estudios necesarios."),
      h("Innovación, comunicación y casos de éxito"),
      p("La jornada, dirigida a médicos de atención primaria, incluyó mesas de debate y cuatro sesiones que abordaron desde las innovaciones tecnológicas y su impacto en la detección temprana hasta la importancia de la correcta comunicación para la prevención."),
      p("El testimonio del Subsecretario de Salud de la República Oriental del Uruguay sobre el éxito de su programa nacional de detección generó esperanza entre los presentes, por tratarse de un caso de éxito en la región. También se destacó el Programa Provincial de Prevención y Detección Precoz del Cáncer Colorrectal de Misiones, previsto en la Ley XVII N° 146 sancionada en 2021."),
      p("Los profesionales presentes valoraron la información, el conocimiento de escenarios nuevos y la importancia de transmitir el mensaje de prevención a sus pacientes mediante una comunicación efectiva."),
      box("“Estás a tiempo de prevenir”", "Fue el mensaje final del simposio. Desde Fundación Gedyt se reafirma la convicción de que todo es posible cuando hay una causa y un propósito por alcanzar."),
    ],
  },
  {
    slug: "cena-de-gala-noche-azul-2022",
    title: "Fundación Gedyt realizará su Cena de Gala “Noche Azul”, una noche que busca poner en agenda la prevención del cáncer de colon, y salvar vidas",
    seccion: "Noche Azul",
    tipo: "Comunicado",
    fecha: "Septiembre de 2022",
    bajada:
      "La segunda edición de la gala tendrá como objetivo apoyar al Hospital de Clínicas con equipamiento y centros de entrenamiento para profesionales.",
    image: com(9),
    fuente: "https://fundaciongedyt.org.ar/2022/10/28/fundacion-gedyt-realizara-su-cena-de-gala-noche-azul-una-noche-que-busca-poner-en-agenda-la-prevencion-del-cancer-de-colon-y-salvar-vidas/",
    blocks: [
      p("En una noche teñida de azul, el color que identifica al cáncer de colon, el 6 de septiembre la Fundación GEDYT realizará su segunda cena de gala para concientizar sobre esta enfermedad, la importancia de su prevención y recaudar fondos para seguir capacitando profesionales en calidad endoscópica en todo el país."),
      p("La prevención del cáncer de colon presenta dos grandes problemas en nuestro país: el temor y la desinformación en la comunidad, y la dificultad de acceso a equipamiento y procedimientos de calidad en la salud pública."),
      p("A pesar de que puede prevenirse en un 90% con un control temprano, es la segunda causa de muerte por cáncer en la Argentina. Bajo el lema “El cáncer de colon puede prevenirse, acompañanos salvando vidas”, la Fundación buscará fondos para sus programas y, en particular, para equipar y armar centros de entrenamiento en el Hospital de Clínicas."),
      h("Una gala que busca salvar vidas"),
      q("Si bien concientizar, sensibilizar e informar es fundamental, no alcanza si luego hay argentinos que no tienen las mismas oportunidades para hacerse los controles. Nos queda hacer lo que sabemos hacer: llevar calidad y tecnología a cada rincón del país.", EMILIA, EMILIA_ROL),
      p("La gala convocará a figuras del espectáculo, el entretenimiento y la política junto a empresarios y donantes corporativos. En la primera edición acompañaron Guillermo Andino, Pampita Ardohain, Mariana Fabbiani, Florencia Torrente junto a su madre Araceli González, Gladys Florimonte, Cecilia Zuberbuhler, Mora Furtado, Alfredo y Diego Leuco, entre otros."),
      h("Sobre el cáncer de colon en la Argentina"),
      stats(["15.900", "nuevos casos por año"], ["95%", "posibilidad de curación si se detecta temprano"], ["5%", "de los mayores de 50 accede al screening"]),
      q("A pesar de ser una enfermedad silenciosa, es factible prevenirla dado que presenta una lesión precursora, el pólipo adenomatoso, de lento crecimiento. Detectado tempranamente, las posibilidades de curación son cercanas al 95%.", CARO, CARO_ROL),
      q("Es alarmante que en la Argentina un muy bajo porcentaje de la población acceda a las medidas de prevención. La pandemia vino a empeorar un escenario incipiente del 25% de cobertura, con caídas de más del 80% que aún no se recuperan.", ISMAEL, "Directora médica de Fundación Gedyt"),
      p("Hoy están disponibles en el país diversas estrategias: la promoción de un estilo de vida saludable (fibras en la dieta, actividad física, evitar el cigarrillo y el alcohol, mantener un peso adecuado) y la prevención secundaria con test de sangre oculta complementado con videocolonoscopía de alta calidad."),
      box("Sobre la Fundación", "Encabezada por el Dr. Luis Caro, designado por la World Endoscopy Organization como presidente de Latinoamérica en tamizaje de cáncer colorrectal, la Fundación capacitó desde 2021 a más de 100 profesionales en el marco del convenio con Misiones y del tamizaje poblacional de Chubut junto a PAE y BRISA."),
    ],
  },

  // ───────────── Notas de prensa ─────────────
  {
    slug: "llega-la-cuarta-edicion-de-la-noche-azul",
    title: "Llega la 4° edición de la Noche Azul, la gala para crear conciencia sobre la prevención del cáncer de colon",
    seccion: "Noche Azul",
    tipo: "Prensa",
    fecha: "Septiembre de 2024",
    bajada:
      "El Alvear Palace Hotel recibe una nueva edición de la gala solidaria de Fundación Gedyt. Lo recaudado financiará estudios de tamizaje para pacientes de hospitales públicos.",
    image: img(4),
    blocks: [
      p("La Noche Azul vuelve a teñir Buenos Aires del color que identifica la lucha contra el cáncer de colon. El martes 24 de septiembre, el Alvear Palace Hotel recibe la cuarta edición de la gala anual de Fundación Gedyt, que reúne a referentes de la salud, el espectáculo, el empresariado, el deporte y el periodismo detrás de una misma causa: que más personas lleguen a tiempo a un diagnóstico."),
      p("La conducción estará a cargo de Guillermo Andino. La velada incluirá un show de tango de la compañía de Lucas Blanco con su obra “38 y siempre” y subastas en vivo. Los anfitriones serán el Dr. Luis Caro, presidente de la Fundación, y la Lic. María Emilia Caro, su directora ejecutiva."),
      h("Por qué una gala"),
      p("El cáncer de colon es el segundo más frecuente y el segundo de mayor mortalidad en la Argentina: se diagnostican unos 15.000 casos por año y mueren más de 7.000 personas. Al mismo tiempo, es uno de los más prevenibles: el 90% de los casos puede curarse si se detecta a tiempo. La brecha está en el acceso a los estudios, y ahí apunta lo que se recauda cada año."),
      q("La Noche Azul representa una oportunidad única para que personas solidarias y líderes de diferentes campos nos reunamos con el objetivo de colaborar con esta noble causa.", CARO, CARO_ROL),
      h("Lo que dejó cada edición"),
      ediciones,
      p("Además de recaudar, la gala funciona como una plataforma de concientización: cada edición multiplica en medios y redes un mensaje sencillo que puede salvar vidas, hacerse los controles a partir de los 45 años o antes si hay antecedentes o síntomas."),
    ],
  },
  {
    slug: "looks-de-los-famosos-en-la-gala-noche-azul",
    title: "De Araceli González a Luli Fernández, los looks de los famosos en la gala solidaria “Noche Azul”",
    seccion: "Noche Azul",
    tipo: "Prensa",
    fecha: "Septiembre de 2024",
    bajada:
      "La alfombra azul del Alvear Palace Hotel reunió a figuras del espectáculo, la moda y el periodismo que acompañaron la cuarta edición de la gala de Fundación Gedyt.",
    image: img(5),
    blocks: [
      p("La Noche Azul no es solo una cena a beneficio: es también una de las alfombras más fotografiadas de la temporada. En su cuarta edición, la gala de Fundación Gedyt convocó a unas 250 figuras en el Alvear Palace Hotel, y los looks de los invitados ocuparon un lugar destacado en la cobertura de revistas y portales."),
      p("Araceli González, una habitué de la causa desde la primera edición, llegó acompañada por su hija Flor Torrente. Luli Fernández fue otra de las presencias más comentadas de la noche, con un diseño de gala de escote pronunciado. El azul, el color que identifica la lucha contra el cáncer de colon, se repitió en vestidos, accesorios y detalles."),
      h("Moda con propósito"),
      p("Detrás del brillo de la alfombra hay un objetivo concreto. Lo recaudado se destina a financiar estudios de tamizaje para pacientes de hospitales públicos y a sostener los programas de formación y prevención de la Fundación. Cada foto que circula en medios y redes amplifica un mensaje: el cáncer de colon se puede prevenir."),
      stats(["250", "invitados en el Alvear Palace"], ["4ª", "edición de la gala"], ["90%", "de los casos se cura si se detecta a tiempo"]),
      q("Un año más, la gala será el escenario perfecto para la unión entre la salud, la ciencia y la solidaridad. Juntos podemos marcar una diferencia en la salud digestiva de toda la sociedad.", EMILIA, EMILIA_ROL),
    ],
  },
  {
    slug: "en-fotos-los-looks-de-la-gala-solidaria",
    title: "En fotos, los looks de Araceli González, Flor Torrente y todos los famosos en una gala solidaria",
    seccion: "Noche Azul",
    tipo: "Prensa",
    fecha: "Septiembre de 2024",
    bajada:
      "Madre e hija, juntas en la alfombra azul. Un recorrido por los invitados que dijeron presente en la Noche Azul a beneficio de la prevención del cáncer de colon.",
    image: img(6),
    blocks: [
      p("Araceli González y Flor Torrente volvieron a posar juntas en la Noche Azul, la gala con la que Fundación Gedyt recauda fondos para la prevención del cáncer de colon. Madre e hija acompañan a la Fundación desde su primera edición y se convirtieron en dos de las caras más reconocibles de la causa."),
      p("La alfombra reunió a actrices, modelos, conductores y periodistas, junto a médicos, empresarios y autoridades. Entre los presentes hubo representantes de las empresas que sostienen los programas de la Fundación, cuyas marcas acompañaron el photocall de la noche."),
      h("Más allá de la alfombra"),
      p("La velada, conducida por Guillermo Andino, combinó un show de tango, subastas en vivo y momentos de concientización sobre una enfermedad que en la Argentina se diagnostica unas 15.000 veces por año. Los fondos se destinan a estudios de tamizaje en hospitales públicos y a la formación de profesionales."),
      box("El mensaje de la noche", "El cáncer de colon puede prevenirse en el 90% de los casos. Los controles se recomiendan a partir de los 45 años, o antes si hay antecedentes familiares o síntomas."),
    ],
  },
  {
    slug: "mejores-y-peores-looks-noche-azul",
    title: "De Luli Fernández a Flor Torrente, los mejores y peores looks en la gala de la “Noche Azul”",
    seccion: "Noche Azul",
    tipo: "Prensa",
    fecha: "Septiembre de 2024",
    bajada:
      "Revista Caras repasó los estilismos de la cuarta Noche Azul: vestidos de gala, trajes sastreros y apuestas metalizadas en una velada a beneficio.",
    image: img(7),
    medio: "Revista Caras",
    fuente: "https://caras.perfil.com/noticias/celebridades/de-luli-fernandez-a-flor-torrente-los-mejores-y-peores-looks-en-la-gala-de-la-noche-azul.phtml",
    blocks: [
      p("La cuarta edición de la Noche Azul reunió a unas 250 figuras en el Alvear Palace Hotel, y la moda fue protagonista. Según el repaso de Revista Caras, Luli Fernández eligió un diseño de Versace con escote y tajo frontal, acompañado por un clutch de Valentino."),
      p("Flor Torrente apostó por un conjunto sastrero de blazer y pantalón, una alternativa elegante frente a los vestidos largos, mientras que Angie Landaburu se animó con un vestido metalizado con mangas de plumas. Araceli González también dijo presente y posó junto a su hija."),
      h("Una alfombra con causa"),
      p("Más allá de los aciertos y las apuestas de estilo, la noche tuvo un objetivo claro: recaudar fondos para que más personas accedan a estudios de detección temprana del cáncer de colon. La Fundación Gedyt destina lo recaudado al tamizaje de pacientes de hospitales públicos y a sus programas de formación."),
      stats(["250", "figuras invitadas"], ["24/9", "fecha de la 4ª edición"], ["Alvear", "Palace Hotel"]),
    ],
  },
  {
    slug: "looks-de-los-famosos-en-la-noche-azul",
    title: "De Araceli González y Flor Torrente a Luis Novaresio y Claudia Villafañe: los looks de los famosos en el evento La noche Azul",
    seccion: "Noche Azul",
    tipo: "Prensa",
    fecha: "Septiembre de 2024",
    bajada:
      "Periodistas, actrices y conductores se sumaron a la gala solidaria de Fundación Gedyt. Una noche de moda, tango y subastas a favor de la prevención.",
    image: img(8),
    blocks: [
      p("La Noche Azul volvió a demostrar su capacidad de convocatoria. A la presencia de Araceli González y Flor Torrente se sumaron figuras como el periodista Luis Novaresio y Claudia Villafañe, entre muchos otros invitados que se acercaron a acompañar la causa de Fundación Gedyt."),
      p("La gala, conducida por Guillermo Andino, tuvo un show de tango de la compañía de Lucas Blanco y subastas en vivo. Los anfitriones, el Dr. Luis Caro y la Lic. María Emilia Caro, recibieron a invitados del ámbito de la salud, el espectáculo, el empresariado y el periodismo."),
      h("Visibilidad que salva vidas"),
      p("La presencia de rostros conocidos no es un detalle menor: cada foto publicada multiplica el alcance de un mensaje de salud pública. En la Argentina, solo alrededor de 3 de cada 10 personas en edad de riesgo se realizan los estudios de detección, y la falta de información es una de las principales barreras."),
      q("La Noche Azul representa una oportunidad única para que personas solidarias y líderes de diferentes campos nos reunamos con el objetivo de colaborar con esta noble causa.", CARO, CARO_ROL),
    ],
  },
  {
    slug: "24-fotos-la-noche-azul",
    title: "24 fotos: la Noche Azul, se llevó a cabo otra edición de la gala a beneficio de Fundación Gedyt",
    seccion: "Noche Azul",
    tipo: "Prensa",
    fecha: "Septiembre de 2023",
    bajada:
      "La tercera edición de la gala reunió a 250 invitados en la avenida Alvear y alcanzó un récord de recaudación para la prevención del cáncer de colon.",
    image: img(9),
    medio: "La Nación",
    fuente: "https://www.lanacion.com.ar/lifestyle/en-fotos-todos-los-invitados-a-la-noche-azul-de-fundacion-gedyt-en-la-avenida-alvear-nid21092023/",
    blocks: [
      p("La avenida Alvear fue escenario de una nueva edición de la Noche Azul, la gala a beneficio de Fundación Gedyt. Unos 250 invitados, entre figuras del espectáculo, la medicina, el empresariado y el periodismo, se reunieron para apoyar la prevención del cáncer de colon."),
      p("El nombre de la gala remite al color asociado a la lucha contra esta enfermedad. Lo recaudado se destinó principalmente a estudios de tamizaje, prevención y tratamiento, con el Hospital de Clínicas como uno de los grandes beneficiarios."),
      stats(["$55 M", "récord de recaudación"], ["250", "invitados"], ["3ª", "edición de la gala"]),
      h("Un récord para la prevención"),
      p("La edición 2023 alcanzó una cifra récord de $55 millones. Los fondos se destinaron a financiar estudios de prevención y detección temprana del cáncer de colon y a programas de formación para endoscopistas, con el objetivo de mejorar la calidad del diagnóstico en todo el país."),
      h("Ediciones de la Noche Azul"),
      ediciones,
    ],
  },
  {
    slug: "los-7-mitos-mas-comunes-sobre-el-cancer-de-colon",
    title: "Los 7 mitos más comunes sobre el cáncer de colon que aumentan el riesgo de la enfermedad",
    seccion: "Prevención",
    tipo: "Prensa",
    fecha: "Marzo de 2024",
    bajada:
      "Creencias falsas sobre la edad, los síntomas o la colonoscopía hacen que muchas personas posterguen los controles. El Dr. Luis Caro, presidente de Fundación Gedyt, explicó a Infobae por qué derribarlas puede salvar vidas.",
    image: img(10),
    medio: "Infobae",
    fuente: "https://www.infobae.com/salud/2024/03/29/los-7-mitos-mas-comunes-sobre-el-cancer-de-colon-que-aumentan-el-riesgo-de-la-enfermedad/",
    blocks: [
      p("El cáncer de colon es el segundo más frecuente en la Argentina y uno de los más prevenibles. Sin embargo, solo alrededor del 30% de la población en edad de riesgo se hace los estudios. Parte de la explicación está en los mitos: ideas instaladas que llevan a postergar la consulta hasta que aparecen los síntomas, cuando la enfermedad suele estar avanzada."),
      stats(["15.000", "casos por año"], ["90%", "se cura si se detecta a tiempo"], ["75%", "de los casos sin antecedentes familiares"]),
      h("1. “Es una enfermedad de hombres”"),
      p("Falso. Afecta por igual a hombres y mujeres, aunque su incidencia es levemente mayor en los hombres. Las mujeres deben hacerse los mismos controles."),
      h("2. “Si no tengo antecedentes familiares, no tengo riesgo”"),
      p("Falso. En el 75% de los casos, el cáncer colorrectal se desarrolla en personas sin antecedentes personales ni familiares. Por eso los controles se recomiendan a toda la población a partir de los 45-50 años."),
      h("3. “Si no tengo síntomas, estoy sano”"),
      p("Falso. Es una enfermedad silenciosa: los pólipos que la originan tardan años en transformarse y no suelen dar síntomas. Cuando aparecen, como sangrado o cambios en el ritmo evacuatorio, muchas veces el tumor ya está avanzado."),
      q("Entre el 80 y el 90% de los casos se produce a partir de un pólipo. Son asintomáticos y suelen crecer lentamente, por lo que si no se detecta y extirpa a tiempo, puede transformarse en un cáncer.", CARO, CARO_ROL),
      h("4. “Solo les pasa a los mayores”"),
      p("Falso. Aunque el riesgo aumenta con la edad, los diagnósticos en menores de 55 años vienen creciendo. Por eso varias guías internacionales adelantaron el inicio de los controles a los 45 años."),
      h("5. “Todos los pólipos son cáncer”"),
      p("Falso. Solo una parte de los pólipos se vuelve maligna. La colonoscopía permite detectarlos y extirparlos en el mismo procedimiento, antes de que eso ocurra."),
      h("6. “La colonoscopía es larga y dolorosa”"),
      p("Falso. Es un estudio de unos 20 minutos que se hace con sedación y no genera dolor ni durante ni después. Para quienes prefieren empezar por algo más sencillo, existe el test de sangre oculta en materia fecal (FIT)."),
      h("7. “El cáncer de colon es una sentencia”"),
      p("Falso. Detectado en estadios tempranos, la tasa de curación ronda el 90%. Lo que marca la diferencia es llegar a tiempo."),
      box("La clave", "Consultar con el médico y hacerse los controles a partir de los 45 años, o antes si hay antecedentes familiares o síntomas."),
    ],
  },
  {
    slug: "dia-mundial-contra-el-cancer-de-colon-15000-casos",
    title: "Día Mundial contra el Cáncer de Colon: se puede prevenir, pero en el país suma 15.000 casos por año y afecta cada vez a gente más joven",
    seccion: "Prevención",
    tipo: "Prensa",
    fecha: "31 de marzo",
    bajada:
      "Cada 31 de marzo se recuerda la importancia de la detección temprana. En la Argentina se diagnostican unos 15.000 casos por año y crece la proporción de pacientes jóvenes.",
    image: img(11),
    fuente: "https://es-us.noticias.yahoo.com/d%C3%ADa-mundial-c%C3%A1ncer-colon-prevenir-150101092.html",
    blocks: [
      p("El 31 de marzo se conmemora el Día Mundial contra el Cáncer de Colon, una fecha que busca concientizar sobre una enfermedad que, aunque es altamente prevenible, sigue siendo la segunda causa de muerte por cáncer en la Argentina. Cada año se diagnostican unos 15.000 casos nuevos y mueren más de 7.000 personas."),
      stats(["15.000", "casos nuevos por año"], ["7.000", "muertes anuales"], ["20%", "de los casos en EE. UU. ya son menores de 55"]),
      h("Una tendencia que preocupa"),
      p("Aunque la mayoría de los diagnósticos se produce después de los 50 años, los especialistas advierten que el cáncer colorrectal afecta cada vez a personas más jóvenes. Según datos de la Sociedad Americana del Cáncer, la proporción de casos en menores de 55 años pasó del 11% en 1995 al 20% en 2019."),
      p("Entre los factores que se asocian a este aumento están la obesidad, el sedentarismo, el tabaquismo, el consumo de alcohol y las dietas ricas en grasas y carnes procesadas y pobres en fibras. Por eso, varios países adelantaron el inicio de los controles a los 45 años."),
      q("En el primer mundo se está evaluando empezar con los controles un poco antes, a los 45 años, debido a la obesidad, al sedentarismo, el tabaquismo, el alcoholismo y una dieta muy rica en grasas.", CARO, CARO_ROL),
      h("Prevenir es posible"),
      p("La enfermedad se origina, en la mayoría de los casos, en pólipos que tardan años en volverse malignos. Detectarlos y extirparlos a tiempo evita el cáncer. Los métodos disponibles son:"),
      metodos,
      h("Señales de alerta"),
      sintomas,
    ],
  },
  {
    slug: "emilia-caro-mujeres-infartos-acv-cancer-de-mama",
    title: "Emilia Caro: “En la Argentina se mueren más mujeres por infartos y por ACV que por cáncer de mama”",
    seccion: "Testimonios",
    tipo: "Prensa",
    bajada:
      "La directora ejecutiva de Fundación Gedyt y presidenta de Women in Global Health Argentina habla sobre la salud de las mujeres, los sesgos en la atención y la falta de liderazgo femenino en el sistema sanitario.",
    image: img(12),
    blocks: [
      p("María Emilia Caro es directora ejecutiva de Fundación Gedyt y preside el capítulo argentino de Women in Global Health, una red internacional que promueve la equidad de género en el liderazgo sanitario. Desde ese lugar insiste en un dato que suele sorprender: en la Argentina mueren más mujeres por enfermedades cardiovasculares, como el infarto y el ACV, que por cáncer de mama."),
      h("Un problema de percepción"),
      p("Diversas encuestas muestran que la mayoría de las mujeres identifica a los tumores como su principal amenaza de salud, cuando las enfermedades cardiovasculares son la primera causa de muerte femenina. Los síntomas de un infarto en la mujer, además, suelen ser menos típicos que en el hombre, lo que retrasa la consulta y el diagnóstico."),
      p("Para Caro, esa brecha de percepción se explica en parte por cómo se construyó el conocimiento médico, con protocolos pensados históricamente a partir de pacientes varones, y por la escasa presencia de mujeres en los espacios donde se toman las decisiones."),
      stats(["+70%", "de la fuerza laboral en salud son mujeres"], ["<25%", "ocupa cargos de decisión"], ["15", "provincias relevadas por Gedyt"]),
      h("Quién decide en la salud"),
      p("Un relevamiento de Fundación Gedyt en 15 provincias mostró que, aunque las mujeres representan más del 70% de la fuerza laboral del sector, ocupan menos de un cuarto de los puestos de decisión. Esa diferencia se refleja también en la gastroenterología y en las sociedades científicas."),
      q("La recomendación del médico de cabecera desempeña un papel crucial en la promoción de los estudios preventivos.", EMILIA, EMILIA_ROL),
      h("Prevención con perspectiva de género"),
      p("Desde la Fundación, el programa Mujeres en Salud busca formar y visibilizar liderazgos femeninos. Y en materia de prevención, el mensaje se extiende al cáncer de colon: afecta a hombres y mujeres casi por igual, y las mujeres deben realizar los mismos controles a partir de los 45 años."),
    ],
  },
  {
    slug: "brecha-de-genero-en-salud",
    title: "Brecha de género: los hombres llegan a ganar hasta 3 veces más que las mujeres y diversidades",
    seccion: "Testimonios",
    tipo: "Prensa",
    fecha: "Diciembre de 2023",
    bajada:
      "Un relevamiento de Fundación Gedyt sobre el sistema de salud muestra que las mujeres son mayoría en la fuerza laboral, pero minoría en los cargos de decisión y en los ingresos.",
    image: img(13),
    medio: "La Gaceta",
    blocks: [
      p("El sistema de salud argentino está sostenido mayoritariamente por mujeres, pero son los hombres quienes ocupan la mayoría de los lugares de decisión y quienes perciben los ingresos más altos. Esa es la principal conclusión de un relevamiento impulsado por Fundación Gedyt, que muestra que los hombres llegan a ganar hasta tres veces más que las mujeres y las diversidades."),
      stats(["3x", "brecha máxima de ingresos"], ["+70%", "de la fuerza laboral son mujeres"], ["<25%", "de los cargos de decisión"]),
      h("Mayoría que no decide"),
      p("Las mujeres representan más del 70% de la fuerza laboral en salud, pero ocupan menos del 25% de los puestos de liderazgo. El fenómeno, conocido como “techo de cristal”, se repite en hospitales, ministerios y sociedades científicas, y también en especialidades como la gastroenterología."),
      p("Entre las causas se mencionan la carga desigual de las tareas de cuidado, la falta de políticas de conciliación, los sesgos en los procesos de selección y la ausencia de referentes femeninas en los espacios de conducción."),
      h("La mirada de la Fundación"),
      p("María Emilia Caro, directora ejecutiva de Fundación Gedyt y presidenta de Women in Global Health Argentina, sostiene que la equidad en el liderazgo no es solo una cuestión de justicia: sistemas con más diversidad en la toma de decisiones diseñan mejores políticas para toda la población."),
      p("La Fundación presentó estos hallazgos en el póster “Brecha de género en el liderazgo de sistemas de salud: un ejemplo en la gastroenterología”, y desarrolla el programa Mujeres en Salud para formar y visibilizar liderazgos femeninos en todo el país."),
    ],
  },
  {
    slug: "cinco-claves-cancer-de-colon-menores-de-55",
    title: "Cinco claves sobre el cáncer de colon que deben tener en cuenta las personas menores de 55 años",
    seccion: "Prevención",
    tipo: "Prensa",
    bajada:
      "Los diagnósticos en personas jóvenes vienen en aumento. Qué saber sobre los síntomas, los factores de riesgo y cuándo empezar los controles.",
    image: img(14),
    blocks: [
      p("Durante décadas, el cáncer de colon fue considerado una enfermedad de personas mayores. Pero los datos muestran un cambio: la proporción de diagnósticos en menores de 55 años casi se duplicó en las últimas tres décadas. Estas son cinco claves para tener en cuenta."),
      h("1. Los casos en jóvenes están creciendo"),
      p("Según la Sociedad Americana del Cáncer, los diagnósticos en menores de 55 años pasaron del 11% del total en 1995 al 20% en 2019, con un aumento de entre 1% y 2% por año. Además, en los jóvenes la enfermedad suele detectarse en estadios más avanzados."),
      stats(["11% → 20%", "casos en menores de 55 (1995-2019)"], ["1-2%", "de aumento anual"], ["45", "años, edad para empezar los controles"]),
      h("2. Los síntomas no deben minimizarse"),
      p("Sangrado rectal, cambios en el ritmo evacuatorio, dolor abdominal persistente, cansancio o pérdida de peso sin causa aparente son señales que deben motivar una consulta, sin importar la edad. En los jóvenes, muchas veces se atribuyen a otras causas y el diagnóstico se demora."),
      h("3. El estilo de vida pesa"),
      p("La obesidad, el sedentarismo, el tabaco, el alcohol y una dieta rica en carnes rojas y procesadas y pobre en fibras se asocian a un mayor riesgo. Una alimentación con frutas, verduras y fibra y la actividad física regular son factores protectores."),
      h("4. Los antecedentes familiares adelantan los controles"),
      p("Quienes tienen familiares directos con cáncer colorrectal o pólipos, o síndromes hereditarios como el de Lynch, deben consultar para iniciar los controles antes de los 45 años."),
      q("En el caso de tener antecedentes familiares o personales de cáncer de colon o pólipos, debe consultarse a un médico especialista si es necesaria la realización de exámenes a más temprana edad.", CARO, CARO_ROL),
      h("5. A partir de los 45, no esperar"),
      p("Las guías más recientes recomiendan comenzar el tamizaje a los 45 años en personas sin factores de riesgo. Los métodos disponibles son el test de sangre oculta en materia fecal y la videocolonoscopía, que además permite extirpar los pólipos en el mismo procedimiento."),
    ],
  },
  {
    slug: "importancia-de-la-prevencion-del-cancer-colorrectal",
    title: "La importancia de la prevención y concientización del Cáncer Colorrectal",
    seccion: "Prevención",
    tipo: "Prensa",
    bajada:
      "Un cáncer frecuente, silencioso y, a la vez, uno de los más prevenibles. Por qué la información y el acceso a los estudios son las dos llaves para cambiar las estadísticas.",
    image: img(15),
    blocks: [
      p("El cáncer colorrectal tiene una particularidad que lo distingue: casi siempre avisa con años de anticipación, pero en silencio. La gran mayoría de los casos se origina en pólipos que crecen lentamente en la pared del intestino grueso. Si se detectan y se extirpan a tiempo, el cáncer no llega a desarrollarse."),
      stats(["2°", "cáncer más frecuente del país"], ["10-15", "años tarda un pólipo en volverse tumor"], ["90%", "de curación si se detecta a tiempo"]),
      h("Prevención primaria: hábitos"),
      p("Una alimentación rica en frutas, verduras y fibra, la actividad física regular, mantener un peso adecuado y evitar el tabaco y el exceso de alcohol reducen el riesgo, no solo de cáncer de colon sino de muchas otras enfermedades."),
      h("Prevención secundaria: estudios"),
      p("Es la herramienta que más vidas salva. Consiste en buscar lesiones antes de que den síntomas, mediante:"),
      metodos,
      q("Por un lado, la prevención primaria incluye una alimentación saludable, no fumar, moderar el alcohol y hacer actividad física; pero la prevención secundaria, que consiste en detectar precozmente un pólipo y extirparlo antes de que se vuelva canceroso, nos permite salvar más vidas incluso que con la mamografía.", "Dr. Carlos Silva", "Director médico de LALCEC"),
      h("El rol de la concientización"),
      p("Según los relevamientos de Fundación Gedyt, casi la mitad de quienes no se hicieron estudios no los hizo porque ningún médico se los indicó, y uno de cada cuatro por falta de información. Por eso la Fundación trabaja en dos frentes: campañas para la comunidad y herramientas para los profesionales de la salud."),
      sobreGedyt,
    ],
  },
  {
    slug: "fundacion-gedyt-presente-en-el-dia-mundial",
    title: "Concientización y prevención: Fundación Gedyt presente en el día mundial sobre el cáncer de colon",
    seccion: "Campañas",
    tipo: "Prensa",
    fecha: "31 de marzo",
    bajada:
      "Simposios, campañas y acciones en la vía pública: así acompaña la Fundación cada 31 de marzo, el día mundial dedicado a la prevención del cáncer de colon.",
    image: img(16),
    blocks: [
      p("Cada 31 de marzo, el Día Mundial del Cáncer de Colon es una oportunidad para poner en agenda una enfermedad que causa más de 7.000 muertes por año en la Argentina y que, sin embargo, puede prevenirse en el 90% de los casos. Fundación Gedyt acompaña la fecha con acciones dirigidas a la comunidad y a los profesionales de la salud."),
      h("Un simposio para la comunidad médica"),
      p("La Fundación organiza su Simposio Científico Académico sobre cáncer de colon. En la edición realizada en el Teatro Metropolitan, más de 500 personas participaron en vivo y por streaming de sesiones sobre innovación tecnológica, detección temprana y comunicación para la prevención, con la presencia de autoridades sanitarias de Uruguay y el ejemplo del programa de Misiones."),
      h("Campañas que salen a la calle"),
      p("Con “¿Cómo está tu colon?”, la Fundación ofrece información clara sobre síntomas, factores de riesgo y estudios, junto a una encuesta anónima que orienta a cada persona sobre sus controles. La campaña llegó a las canchas de fútbol, a la vía pública de varias ciudades y a las redes sociales."),
      stats(["+500", "asistentes al simposio"], ["31/3", "Día Mundial del Cáncer de Colon"], ["45", "años, edad para empezar los controles"]),
      q("Con una detección temprana podemos salvar vidas. A partir de los 45 años, no esperar es la mejor acción.", CARO, CARO_ROL),
    ],
  },
  {
    slug: "fede-bal-y-el-dr-luis-caro",
    title: "Fede Bal y el Dr. Luis Caro, quien le salvó la vida: “Hacerse estudios a tiempo te puede salvar”",
    seccion: "Testimonios",
    tipo: "Prensa",
    fecha: "31 de marzo",
    bajada:
      "En el Día Mundial de la Prevención del Cáncer de Colon, el actor y el médico que lo diagnosticó compartieron un mensaje: no esperar a tener síntomas para hacerse los controles.",
    image: img(17),
    blocks: [
      p("En 2020, Federico Bal suspendió su temporada teatral en Mar del Plata y contó en sus redes que le habían diagnosticado un tumor en el intestino tras una colonoscopía. Tenía 30 años. Durante los meses siguientes hizo un tratamiento de quimioterapia y rayos, y en julio de ese año anunció que estaba curado."),
      p("El estudio que cambió su historia lo hizo el Dr. Luis Caro, gastroenterólogo y presidente de Fundación Gedyt. Desde entonces, el actor se convirtió en una de las voces más visibles de la prevención del cáncer de colon y comparte su experiencia cada vez que puede."),
      q("Entre el 80 y el 90% de los casos se produce a partir de un pólipo. Son asintomáticos y suelen crecer lentamente, por lo que si no se detecta y extirpa a tiempo, puede transformarse en un cáncer.", CARO, CARO_ROL),
      h("Un caso que encendió alarmas"),
      p("El diagnóstico de una persona joven tuvo un fuerte impacto. Por lo general, el cáncer de colon en pacientes jóvenes aparece cuando hay antecedentes familiares, pero el 75% de los casos se desarrolla en personas sin antecedentes personales ni familiares. Por eso los especialistas insisten en que los controles no deben esperar a los síntomas."),
      stats(["30", "años tenía Fede Bal al ser diagnosticado"], ["75%", "de los casos sin antecedentes"], ["23", "muertes por día por cáncer de colon"]),
      q("Es más espectacular el coronavirus o los accidentes de tránsito, y sin embargo el cáncer de colon mata mucho más: se estima unos 23 pacientes por día.", CARO, CARO_ROL),
      h("El mensaje"),
      p("“Hacerse estudios a tiempo te puede salvar”, repiten el actor y el médico. La recomendación es consultar a partir de los 45 años, o antes si hay antecedentes familiares o síntomas como sangrado, cambios en el ritmo evacuatorio o pérdida de peso."),
    ],
  },
  {
    slug: "axion-energy-campana-cancer-colorrectal",
    title: "Axion energy lanza una campaña de concientización sobre el cáncer colorrectal",
    seccion: "Campañas",
    tipo: "Prensa",
    fecha: "Marzo",
    bajada:
      "Las estaciones de servicio de la compañía se suman al mes de concientización con piezas informativas sobre la prevención del cáncer colorrectal.",
    image: img(18),
    blocks: [
      p("En el marco del mes de concientización sobre el cáncer colorrectal, Axion energy lanzó una campaña para acercar información sobre la prevención a las miles de personas que pasan a diario por sus estaciones de servicio. Las piezas, exhibidas en la red de estaciones de la compañía en torno al 31 de marzo, invitan a consultar al médico y hacerse los controles."),
      p("La iniciativa se suma al esfuerzo de organizaciones como Fundación Gedyt por llevar el mensaje de la prevención a espacios cotidianos, más allá de los consultorios. La lógica es simple: cuanta más gente reciba la información, más personas llegarán a tiempo a un diagnóstico."),
      h("Por qué importa"),
      stats(["2°", "cáncer más frecuente en la Argentina"], ["3 de 10", "personas se hacen los estudios"], ["90%", "de los casos se previene o cura"]),
      p("El cáncer colorrectal es el segundo más frecuente en el país y el segundo en mortalidad. Sin embargo, solo alrededor de 3 de cada 10 personas en edad de riesgo se realiza los estudios de detección. La falta de información es, después de la falta de recomendación médica, la principal barrera."),
      h("Qué hacer"),
      ul(
        "Consultar con el médico y comenzar los controles a partir de los 45 años.",
        "Si hay antecedentes familiares, hablar con un especialista para empezar antes.",
        "Ante sangrado, cambios en el ritmo evacuatorio o pérdida de peso, consultar sin esperar.",
      ),
      p("Las empresas que se suman a la concientización multiplican el alcance de un mensaje que salva vidas. Fundación Gedyt invita a otras compañías a sumarse como aliadas de la prevención."),
    ],
  },
  {
    slug: "fede-bal-la-colonoscopia-salva-vidas",
    title: "Fede Bal: “La colonoscopía salva vidas”",
    seccion: "Testimonios",
    tipo: "Prensa",
    bajada:
      "El actor volvió a contar su experiencia con el cáncer de colon y se filmó durante una videocolonoscopía de control junto al Dr. Luis Caro para derribar miedos.",
    image: img(19),
    blocks: [
      p("Federico Bal se convirtió en uno de los embajadores más comprometidos con la prevención del cáncer de colon. Desde que fue diagnosticado y tratado en 2020, el actor comparte en entrevistas y redes su experiencia, con un mensaje que repite una y otra vez: “La colonoscopía salva vidas”."),
      p("Para mostrar que el estudio no es algo que haya que temer, Bal se filmó durante una videocolonoscopía de control en Gedyt junto al Dr. Luis Caro, el médico que lo diagnosticó. El video recorre la preparación, la sedación y el procedimiento, y busca derribar uno de los mitos que más alejan a las personas de los controles."),
      h("Un estudio de 20 minutos"),
      p("La colonoscopía dura aproximadamente 20 minutos, se realiza con el paciente sedado y no genera dolor ni durante ni después. Además de diagnosticar, permite extirpar pólipos en el mismo procedimiento, antes de que se transformen en cáncer."),
      stats(["20 min", "dura una colonoscopía"], ["0", "dolor: se hace con sedación"], ["90%", "de curación si se detecta a tiempo"]),
      q("La colonoscopía es un estudio que permite detectar pólipos muy pequeños. Es un examen de aproximadamente 20 minutos que se realiza con los pacientes sedados y no genera ningún tipo de dolor ni durante ni después.", CARO, CARO_ROL),
      p("Según el relevamiento de Fundación Gedyt, el 37,8% de quienes se hicieron una colonoscopía temía hallazgos inesperados, y el 32,3% se preocupaba por la preparación. Testimonios como el de Bal ayudan a dar una imagen más real del procedimiento."),
    ],
  },
  {
    slug: "cancer-de-colon-claves-de-prevencion",
    title: "Cáncer de colon: Claves de prevención",
    seccion: "Prevención",
    tipo: "Prensa",
    bajada:
      "Qué es, a quién afecta, cuáles son los síntomas y qué estudios hacer. Una guía para entender cómo prevenir el segundo cáncer más frecuente del país.",
    image: img(20),
    blocks: [
      p("El cáncer de colon, también llamado cáncer colorrectal, es un tumor maligno que se desarrolla en el intestino grueso, formado por el colon y el recto. En la Argentina es el segundo más frecuente y el segundo de mayor mortalidad. La buena noticia es que es uno de los más prevenibles."),
      h("Cómo se origina"),
      p("La mayoría de los casos comienza con pólipos, crecimientos anormales en la mucosa del colon que pueden tardar entre 10 y 15 años en volverse malignos. Detectarlos y extirparlos durante ese período evita el cáncer."),
      h("A quién afecta"),
      p("A hombres y mujeres casi por igual, con un claro aumento a partir de los 50 años. En el 75% de los casos se desarrolla en personas sin antecedentes familiares, por lo que los controles se recomiendan para toda la población adulta."),
      stats(["45", "años, inicio de los controles"], ["75%", "sin antecedentes familiares"], ["90%", "prevenible y curable"]),
      h("Factores de riesgo"),
      ul(
        "Tener más de 50 años.",
        "Antecedentes familiares de pólipos o cáncer colorrectal.",
        "Enfermedades inflamatorias intestinales, como Crohn o colitis ulcerosa.",
        "Síndromes hereditarios como la poliposis adenomatosa familiar o el síndrome de Lynch.",
        "Tabaco, alcohol, sedentarismo, obesidad y una dieta alta en grasas y carnes rojas.",
      ),
      h("Síntomas para consultar"),
      sintomas,
      h("Los estudios"),
      metodos,
      q("Las personas sin factores de riesgo deben comenzar los controles a partir de los 45 años. Quienes tienen familiares directos con antecedentes deben hablar con su médico para establecer un plan de seguimiento adecuado.", ISMAEL, ISMAEL_ROL),
    ],
  },
  {
    slug: "estudios-fundamentales-para-prevenir-el-cancer-de-colon",
    title: "Cuáles estudios son fundamentales para prevenir el cáncer de colon",
    seccion: "Prevención",
    tipo: "Prensa",
    bajada:
      "El test de sangre oculta y la videocolonoscopía son las dos herramientas principales. Cómo funcionan, cuándo hacerlos y qué ventajas tiene cada uno.",
    image: img(21),
    blocks: [
      p("El cáncer de colon puede curarse en alrededor del 90% de los casos si se detecta a tiempo. Para eso existen estudios que permiten encontrar lesiones antes de que aparezcan los síntomas. Estos son los fundamentales."),
      h("Test de sangre oculta en materia fecal (FIT)"),
      p("Es un análisis simple que se hace en casa con una pequeña muestra de materia fecal. Detecta sangrados invisibles a simple vista, que pueden indicar la presencia de pólipos o de un tumor. Es económico, no invasivo y no requiere preparación especial. Si da positivo, el paso siguiente es una colonoscopía."),
      h("Videocolonoscopía"),
      p("Es el estudio de referencia. Mediante un tubo flexible con una cámara, el especialista recorre todo el colon. Dura unos 20 minutos, se hace con sedación y no duele. Su gran ventaja es que permite extirpar los pólipos en el mismo procedimiento, eliminando la lesión antes de que se transforme en cáncer."),
      q("Para diagnosticarlo contamos con los análisis de sangre oculta en materia fecal, que es un método económico, no invasivo. También la videocolonoscopía, sobre todo para los casos positivos del FIT. Mediante estos estudios podemos detectar pólipos y extirparlos en la misma intervención.", CARO, CARO_ROL),
      stats(["FIT", "simple, en casa, no invasivo"], ["20 min", "dura la colonoscopía"], ["10-15", "años puede tardar un pólipo en volverse cáncer"]),
      h("¿Cuándo hacerlos?"),
      ul(
        "Sin factores de riesgo: a partir de los 45 años, con la frecuencia que indique el médico.",
        "Con antecedentes familiares o síndromes hereditarios: antes de los 45, según un plan de seguimiento personalizado.",
        "Con síntomas, a cualquier edad: consultar de inmediato.",
      ),
      box("¿Y la preparación?", "Para la colonoscopía hay que limpiar el intestino el día anterior con una dieta y un laxante indicados por el médico. Es la parte más incómoda, pero es clave para que el estudio sea de calidad."),
    ],
  },
  {
    slug: "misiones-programa-de-prevencion-del-cancer-colorrectal",
    title: "Misiones presentó el Programa de Prevención del Cáncer Colorrectal",
    seccion: "Campañas",
    tipo: "Prensa",
    fecha: "2021",
    bajada:
      "La provincia lanzó un programa respaldado por ley, con tamizaje poblacional mediante test de sangre oculta y un convenio con Fundación Gedyt para formar profesionales.",
    image: img(22),
    medio: "Ministerio de Salud Pública de Misiones",
    fuente: "https://salud.misiones.gob.ar/misiones-se-presento-el-programa-de-prevencion-del-cancer-colorrectal/",
    blocks: [
      p("El vicegobernador de Misiones, Carlos Arce, presentó el Programa Provincial de Prevención y Detección Precoz del Cáncer Colorrectal, junto con el convenio firmado entre la provincia y Fundación Gedyt para la capacitación de los equipos de salud."),
      p("El programa está previsto en la Ley XVII N° 146, sancionada por la Legislatura misionera el 19 de agosto de 2021, lo que lo convierte en una iniciativa única en su tipo por contar con respaldo legal."),
      stats(["Ley XVII-146", "sancionada en 2021"], ["6.800", "test FIT entregados"], ["6%", "de resultados positivos"]),
      h("Cómo funciona"),
      p("La población objetivo son las personas mayores de 50 años, a quienes se ofrece el test inmunoquímico de sangre oculta en materia fecal (FIT). Los casos positivos se derivan a videocolonoscopía en los nodos de atención de Posadas y de los hospitales SAMIC de Oberá y Eldorado."),
      p("En su primera etapa, el programa entregó unos 6.800 tests, con un 6% de resultados positivos que fueron derivados para estudios complementarios."),
      h("El aporte de Fundación Gedyt"),
      p("En el marco del convenio, la Fundación capacita a médicos gastroenterólogos, endoscopistas y asistentes de endoscopía de la provincia para garantizar estudios de calidad. El programa de Misiones fue presentado como caso de éxito en el simposio anual de la Fundación."),
      q("Si bien concientizar, sensibilizar e informar es fundamental, no alcanza si luego hay argentinos que no tienen las mismas oportunidades para hacerse los controles.", EMILIA, EMILIA_ROL),
    ],
  },
  {
    slug: "noche-azul-gala-benefica-contra-el-cancer-de-colon",
    title: "Noche Azul, la gala benéfica que busca generar conciencia contra el cáncer de colon",
    seccion: "Noche Azul",
    tipo: "Prensa",
    fecha: "Septiembre de 2022",
    bajada:
      "Fundación Gedyt reunió a figuras del espectáculo, la política y el empresariado para recaudar fondos destinados al Hospital de Clínicas y a la formación de profesionales.",
    image: img(23),
    blocks: [
      p("Bajo el lema “El cáncer de colon puede prevenirse, acompañanos salvando vidas”, Fundación Gedyt realizó la segunda edición de la Noche Azul, su cena de gala a beneficio. La velada reunió a figuras del espectáculo, el entretenimiento y la política junto a empresarios y donantes corporativos."),
      p("El objetivo fue concreto: equipar el servicio de gastroenterología del Hospital de Clínicas “José de San Martín” y armar centros de entrenamiento para profesionales, de modo que más pacientes de la salud pública accedan a estudios de calidad."),
      stats(["$25 M", "recaudados en 2022"], ["2ª", "edición de la gala"], ["Clínicas", "hospital beneficiado"]),
      h("Dos problemas, una causa"),
      p("La prevención del cáncer de colon enfrenta dos grandes problemas en el país: el temor y la desinformación en la comunidad, y la dificultad de acceso a equipamiento y procedimientos de calidad en la salud pública. La Noche Azul busca atacar ambos: generar visibilidad y financiar equipamiento y formación."),
      q("Nos queda hacer lo que sabemos hacer y trabajar para llevar calidad y tecnología a cada rincón del país, para que la atención sea el servicio de vanguardia que los argentinos nos merecemos como pacientes de la salud pública.", EMILIA, EMILIA_ROL),
      p("Lo recaudado se destinó a la renovación y puesta en valor del servicio, con el fin de ampliar su capacidad y mejorar la atención de los pacientes que consultan por prevención, diagnóstico y tratamiento de enfermedades digestivas."),
    ],
  },
  {
    slug: "30-fotos-segunda-edicion-gala-noche-azul",
    title: "30 fotos: la Fundación Gedyt celebró la 2° edición de la Gala “Noche Azul”",
    seccion: "Noche Azul",
    tipo: "Prensa",
    fecha: "Septiembre de 2022",
    bajada:
      "Una recorrida por los invitados y los momentos de una noche teñida de azul, a beneficio de la prevención del cáncer de colon.",
    image: img(24),
    blocks: [
      p("La segunda edición de la Noche Azul reunió a invitados del mundo del espectáculo, la medicina y la empresa en una velada dedicada a la prevención del cáncer de colon. La gala, organizada por Fundación Gedyt, tuvo como eje el apoyo al Hospital de Clínicas."),
      p("Entre los rostros conocidos que acompañaron a la Fundación desde sus primeras ediciones se cuentan Guillermo Andino, Araceli González y Florencia Torrente, Mariana Fabbiani, Pampita Ardohain, Gladys Florimonte, Cecilia Zuberbuhler, Mora Furtado y Alfredo y Diego Leuco, junto a autoridades sanitarias y presidentes de sociedades científicas."),
      h("Lo que dejó la noche"),
      p("La edición 2022 recaudó $25 millones, destinados a la renovación del servicio de gastroenterología del Hospital de Clínicas “José de San Martín”. Fue el puntapié de un crecimiento que llevaría a la gala a batir récords en los años siguientes."),
      stats(["$25 M", "recaudados"], ["6/9", "fecha de la gala 2022"], ["100+", "profesionales capacitados por la Fundación"]),
      h("Todas las ediciones"),
      ediciones,
    ],
  },
  {
    slug: "el-90-de-los-casos-de-cancer-de-colon-pueden-curarse",
    title: "“El 90% de los casos de cáncer de colon pueden curarse”: los últimos avances en pruebas diagnósticas y prevención",
    seccion: "Prevención",
    tipo: "Prensa",
    fecha: "19 de marzo de 2026",
    bajada:
      "En el mes de concientización de la enfermedad, el gastroenterólogo Luis Caro, presidente de la Fundación Gedyt, detalló a Infobae los desafíos que presenta la patología y remarcó que si se detecta en estadios iniciales tiene alta tasa de curación.",
    image: "/prensa-hd/caro-infobae.webp",
    caption: "El Dr. Luis Caro, presidente de Fundación Gedyt.",
    medio: "Infobae",
    fuente: `https://www.google.com/search?q=${encodeURIComponent("infobae El 90% de los casos de cáncer de colon pueden curarse Luis Caro")}`,
    blocks: [
      p("Marzo es el mes de concientización sobre el cáncer de colon, y el mensaje de los especialistas es claro: se trata de una de las enfermedades oncológicas con mayor potencial de prevención. Si se detecta en estadios iniciales, alrededor del 90% de los casos puede curarse."),
      p("El gastroenterólogo Luis Caro, presidente de Fundación Gedyt y referente latinoamericano en tamizaje de cáncer colorrectal, repasó los desafíos que presenta la enfermedad en la Argentina y los avances en las herramientas de detección."),
      stats(["90%", "de curación en estadios iniciales"], ["15.000", "casos por año en el país"], ["45", "años, inicio de los controles"]),
      h("El desafío: llegar a tiempo"),
      p("El cáncer de colon sigue siendo la segunda causa de muerte por cáncer en el país. La razón no es la falta de herramientas sino la baja adhesión a los controles: solo alrededor de 3 de cada 10 personas en edad de riesgo se hace los estudios, y casi la mitad de quienes no los hacen dicen que ningún médico se los indicó."),
      q("Cuando el cáncer de colon se detecta en estadios tempranos, la tasa de curación se acerca al 90%. Mediante estos estudios podemos detectar pólipos potencialmente cancerosos y extirparlos en la misma intervención, evitando el desarrollo futuro de la enfermedad.", CARO, CARO_ROL),
      h("Pruebas más simples y más precisas"),
      p("El test inmunoquímico de sangre oculta en materia fecal (FIT) permite hacer un primer tamizaje simple y no invasivo, ideal para programas poblacionales. La videocolonoscopía de alta calidad, por su parte, sigue siendo el estudio de referencia: permite ver todo el colon y extirpar los pólipos en el mismo procedimiento."),
      p("La formación de endoscopistas y la medición de indicadores de calidad, como la tasa de detección de adenomas, son parte central del trabajo de la Fundación para que cada estudio sea efectivo."),
      h("Qué hacer"),
      ul(
        "Consultar al médico y comenzar los controles a partir de los 45 años.",
        "Con antecedentes familiares, iniciar antes y con un plan de seguimiento.",
        "Ante síntomas, a cualquier edad, consultar sin demora.",
      ),
    ],
  },
];

export const getArticulo = (slug: string) => articulos.find((a) => a.slug === slug);

// Tiempo de lectura estimado (≈ 200 palabras por minuto).
export function minutosDeLectura(a: Articulo) {
  const words = [a.bajada, ...a.blocks.flatMap((b) => ("text" in b ? [b.text] : "items" in b ? b.items.map((i) => (typeof i === "string" ? i : i.label)) : []))]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

// Notas relacionadas: misma sección primero, luego el resto.
export function relacionadas(a: Articulo, n = 3) {
  const others = articulos.filter((x) => x.slug !== a.slug && x.image !== a.image);
  return [...others.filter((x) => x.seccion === a.seccion), ...others.filter((x) => x.seccion !== a.seccion)].slice(0, n);
}
