import type { Metadata } from "next";
import Image from "next/image";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import ProgramHeader from "@/components/ProgramHeader";
import { Eyebrow } from "@/components/ui";
import { programasEmail } from "@/lib/programas";

export const metadata: Metadata = {
  title: "Entrenamiento para endoscopistas · Programas",
  description:
    "Programa de entrenamiento estandarizado y de alta calidad para profesionales de la endoscopía digestiva: plan teórico en línea, hands-on y rotación por un centro de alto volumen.",
};

// Textos tal cual figuran en la página del programa en fundaciongedyt.org.ar
const componentes = [
  { icon: "book", label: "Un plan de estudios teórico en línea" },
  { icon: "flask", label: "Un hands-on" },
  { icon: "building", label: "Una rotación para realizar observaciones por un centro de alto volumen" },
];

const cursos2023 = [
  { curso: "VEDA Básica", fechas: ["3 – 4 de Marzo", "21 – 22 de Abril"] },
  { curso: "VCC Básica", fechas: ["14 – 15 de Abril"] },
  { curso: "Endoscopía Terapéutica Básica", fechas: ["14 – 15 de Abril"] },
  { curso: "Endoscopía Terapéutica Avanzada", fechas: ["9 – 10 de Junio"] },
  { curso: "Screening de CCR", fechas: ["14 y 15 de Julio"] },
  { curso: "Ecoendoscopía", fechas: ["16 y 17 de Marzo"] },
  { curso: "Cápsula Endoscópica", fechas: ["29 de Mayo", "24 de Junio", "23 de Septiembre"] },
  { curso: "CPRE Básico", fechas: ["12 y 13 de Mayo"] },
  { curso: "Resolución de Complicaciones", fechas: ["Sin fecha aún"] },
  { curso: "Anatomía Patológica Digestiva", fechas: ["7 de Junio"] },
  { curso: "Disección Endoscópica", fechas: ["Sin fecha aún"] },
];

// VEDA Básica y Endoscopía terapéutica Básica tienen el mismo texto en el sitio original.
const cursoVccBasico = {
  audiencia:
    "El curso está especialmente destinado aunque no limitado a profesionales de la salud que trabajen o estén interesados en adquirir capacidades en VCC. Recomendado para residentes, concurrentes, cursistas de Curso Superior de la carrera de Gastroenterología, instrumentadores/as quirúrgicos/as. Se recomienda experiencia en VEDA y hasta 50 VCC realizadas.",
  requisitos: "Se recomienda tener experiencia en endoscopia alta.",
  descripcion:
    "Este es un curso para profesionales con habilidades básicas en endoscopía que desean ganar/ mejorar sus habilidades en colonoscopia. Es un curso intensivo, interactivo y práctico que cubre la base teórica de realizar una colonoscopia segura. El curso incluye una serie de sesiones de hands-on de grupos pequeños y uno a uno, trabajo en modelos prácticos y observación de procedimientos reales en centro de alto volumen. La enseñanza individual se centra en el desarrollo de resultados de aprendizaje individualizados y planes para progresar respecto a habilidades específicas. El abordaje práctico consta de un modelo de tejido animal que brinda una oportunidad para entrenar habilidades en procedimientos endoscópicos.",
  objetivos:
    "Comprensión de los principios básicos de la práctica de la VCC y el equipamiento utilizado. Adquisición de las habilidades básicas para realizar una VCC de diagnóstico segura. Comprensión de las habilidades no técnicas necesarias para realizar un procedimiento seguro y competente. Reforzar el conocimiento básico asociado a la práctica.",
  fechas: ["11 de Noviembre de 8 a 12 (Rotaciones)", "11 de Noviembre de 12 a 17 (Hands on)"],
};

function CursoDatos({ fechas, curso }: { fechas: string[]; curso: string }) {
  return (
    <>
      <div className="grid gap-3 pt-2 sm:grid-cols-2">
        <div className="rounded-xl bg-brand-50 px-4 py-3 ring-1 ring-brand-100">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cta">Cupo máximo</p>
          <p className="mt-1 font-bold text-navy-900">20 profesionales</p>
        </div>
        <div className="rounded-xl bg-brand-50 px-4 py-3 ring-1 ring-brand-100">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cta">Próximas fechas</p>
          {fechas.map((f) => (
            <p key={f} className="text-sm font-semibold text-navy-900 first-of-type:mt-1">
              {f}
            </p>
          ))}
        </div>
      </div>
      <a
        href={`mailto:${programasEmail}?subject=${encodeURIComponent(`Inscripción: ${curso}`)}`}
        className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 font-semibold text-white transition hover:bg-cta-hover"
      >
        Inscripciones <Icon name="arrow" className="h-4 w-4" />
      </a>
    </>
  );
}

function Accordion({ title, open = false, children }: { title: string; open?: boolean; children: React.ReactNode }) {
  return (
    <details open={open} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy-900/5 open:shadow-xl open:shadow-navy-900/10">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-lg font-bold text-navy-900 transition hover:text-cta [&::-webkit-details-marker]:hidden">
        {title}
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-50 text-cta transition group-open:rotate-45 group-open:bg-cta group-open:text-white">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </summary>
      <div className="space-y-4 border-t border-navy-900/5 px-6 pt-5 pb-6 leading-relaxed text-navy-900/75">{children}</div>
    </details>
  );
}

export default function EntrenamientoEndoscopistasPage() {
  return (
    <>
      <ProgramHeader eyebrow="Entrenamiento para profesionales" title="Entrenamiento para endoscopistas" image="/banners/prog-endoscopistas.webp" imagePosition="center 35%" />

      {/* La situación actual */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
            <Image src="/images/endo-1-v2.webp" alt="Profesionales de la salud atendiendo a un paciente" fill sizes="(min-width: 1024px) 24rem, 90vw" className="object-cover transition duration-1000 hover:scale-105" />
          </div>
          <div className="reveal">
            <Eyebrow chip>Diagnóstico</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">La situación actual</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-900/70">
              <p>
                Los recursos formativos se encuentran desigualmente distribuidos a nivel geográfico en Argentina, lo que constituye{" "}
                <strong className="text-navy-900">una de las principales barreras identificadas en el acceso a la formación profesional</strong> en la
                endoscopia digestiva.
              </p>
              <p>
                Asimismo, la actividad docente relativa a la formación de especialistas de las ciencias médicas recae sobre los esfuerzos de profesionales de
                altísima trayectoria que dedican su tiempo a transferir sus conocimientos y compartir sus habilidades para nutrir a los colegas en formación.
              </p>
              <p>
                Este modelo formativo desatiende las necesidades de los formadores en materia de recursos, herramientas, estrategias de aprendizaje,
                disponibilidad y remuneración, apuntalando éstas y muchas necesidades más sobre la virtud de su vocación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La propuesta */}
      <section className="bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal">
            <Eyebrow chip>Programa</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">La propuesta</h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-900/70">
              El programa de entrenamiento para profesionales de la endoscopía digestiva es{" "}
              <strong className="text-navy-900">un programa estandarizado y de alta calidad, basado en estándares de acreditaciones internacionales</strong>,
              compuesto por cursos cortos enmarcado en un modelo de aprendizaje secuencial, supervisado y medido end to end. El programa cuenta con
              herramientas de feedback para el alumno y de feedback para los entrenadores, organización, plataformas y contenido de forma de generar un
              sistema de mejora continua apoyado en entrenadores con amplia experiencia y formación docente.
            </p>
            <p className="mt-8 font-semibold text-navy-900">Cada curso cuenta con tres componentes:</p>
            <ol className="mt-4 grid gap-3 sm:grid-cols-3">
              {componentes.map((c, i) => (
                <li key={c.label} className="team-card reveal-pop relative overflow-hidden rounded-2xl bg-white p-5 ring-1 ring-navy-900/5">
                  <span className="team-sheen" aria-hidden />
                  <span className="relative flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-cta">
                      <Icon name={c.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-3xl font-extrabold text-brand-100">0{i + 1}</span>
                  </span>
                  <span className="relative mt-4 block font-bold leading-snug text-navy-900">{c.label}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="reveal relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
            <Image src="/images/endo-2-v2.webp" alt="Médica sosteniendo un modelo anatómico" fill sizes="(min-width: 1024px) 24rem, 90vw" className="object-cover transition duration-1000 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Cursos 2022 */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="reveal">
            <Eyebrow>Fundación Gedyt</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Cursos 2022</h2>
          </div>
          <div className="mt-10 space-y-3">
            <Accordion title="VCC Básica" open>
              <p>
                <strong className="text-navy-900">Audiencia objetivo:</strong> El curso está abierto a cualquier persona cuyo rol laboral futuro involucre la
                práctica de la videoendoscopia digestiva alta (VEDA). El curso también es aconsejable para aquellos que deseen actualizar la práctica de
                endoscopia y ser evaluados a fin de valorar su nivel de <em>expertise</em>. Requisitos: Haber realizado de 0 a 50 endoscopías. Recomendado
                para residentes, concurrentes, cursistas de Curso Superior de la carrera de Gastroenterología, instrumentadores/as quirúrgicos/as.
              </p>
              <p>
                <strong className="text-navy-900">Descripción:</strong> Este es un curso diseñado para los alumnos de endoscopia que desean adquirir y/o mejorar
                habilidades en VEDA. El curso está especialmente destinado aunque no limitado a profesionales médicos que trabajen o estén interesados en
                adquirir capacidades en VEDA, tengan o no conocimientos básicos de videoendoscopia. Es un curso intensivo, interactivo y práctico que cubre la
                base teórica de realizar una VEDA segura y un manejo efectivo de la peri-endoscopia. El curso incluye una serie de sesiones de enseñanza de
                grupos pequeños y uno a uno, videos, práctica con simuladores y observación de procedimientos en pacientes. La enseñanza individual se centra
                en el desarrollo de resultados de aprendizaje individualizados y planes para mejorar habilidades prácticas. El abordaje práctico consta de un
                modelo de tejido animal que brinda una oportunidad para entrenar habilidades en procedimientos endoscópicos.
              </p>
              <p>
                <strong className="text-navy-900">Objetivos:</strong> Comprensión de los principios básicos de la práctica de la VEDA y el equipamiento
                utilizado. Adquisición de las habilidades básicas para realizar una VEDA de diagnóstico segura. Comprensión de las habilidades no técnicas
                necesarias para realizar un procedimiento seguro y competente. Reforzar el conocimiento básico asociado a la práctica.
              </p>
              <CursoDatos curso="VCC Básica" fechas={["4 de Noviembre turno mañana o tarde (Rotaciones)", "5 de Noviembre de 8 a 13 (Hands on)"]} />
            </Accordion>
            {["VEDA Básica", "Endoscopía terapéutica Básica"].map((c) => (
              <Accordion key={c} title={c}>
                <p>
                  <strong className="text-navy-900">Audiencia objetivo:</strong> {cursoVccBasico.audiencia}
                </p>
                <p>
                  <strong className="text-navy-900">Requisitos:</strong> {cursoVccBasico.requisitos}
                </p>
                <p>
                  <strong className="text-navy-900">Descripción:</strong> {cursoVccBasico.descripcion}
                </p>
                <p>
                  <strong className="text-navy-900">Objetivos:</strong> {cursoVccBasico.objetivos}
                </p>
                <CursoDatos curso={c} fechas={cursoVccBasico.fechas} />
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos 2023 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-6 py-20 text-white sm:px-12 sm:py-24">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full border-[40px] border-white/5" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <div className="reveal">
            <Eyebrow light>Fundación Gedyt</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Cursos 2023</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cursos2023.map((c) => (
              <div key={c.curso} className="reveal-pop rounded-2xl bg-white/[0.07] p-5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/[0.12]">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-accent">{c.curso}</p>
                <ul className="mt-3 space-y-1.5">
                  {c.fechas.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/85">
                      <Icon name="calendar" className="h-4 w-4 flex-none text-white/50" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
