import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import { Words } from "@/components/ui";
import { contact } from "@/lib/content";
import { ROSA, VIOLETA, degradeMujeres } from "@/lib/mujeres";

export const metadata: Metadata = {
  title: "Premio Mujeres Destacadas en Gastroenterología & Endoscopía Digestiva",
  description:
    "Un premio de Fundación Gedyt que reconoce a mujeres cuyo recorrido profesional contribuye a la investigación, la prevención, la formación y el acceso a la salud digestiva en Argentina. Beca completa al DDW 2027.",
};

// Textos tal cual figuran en la landing del premio (4.ª edición 2026)
const formularioUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeqyeRbGWOsFH2DL6AJSWN0BOpZnDXR8enk9vxtOkJYytHQYw/viewform";

const fechas = [
  { label: "Apertura", value: "1 JUN 2026" },
  { label: "Cierre", value: "15 JUL 2026" },
  { label: "Anuncio ganadora", value: "Gala Noche Azul 2026" },
];

const criterios = [
  { icon: "flask", title: "Investigación científica", text: "Publicaciones, proyectos de investigación y compromiso sostenido con el desarrollo profesional y la actualización continua." },
  { icon: "chart", title: "Liderazgo y gestión", text: "Capacidad demostrada en liderar equipos, proyectos y programas dentro del ámbito médico e institucional." },
  { icon: "graduation", title: "Docencia y mentoría", text: "Participación activa en la formación de profesionales y equipos de salud a lo largo de la trayectoria." },
  { icon: "map", title: "Impacto comunitario", text: "Actividades de prevención, acceso y equidad sanitaria que generan un cambio real en la salud pública." },
  { icon: "users", title: "Comunicación", text: "Habilidad para transmitir temas de salud de manera clara y accesible a pacientes, colegas y público general." },
  { icon: "sparkle", title: "Equidad e innovación", text: "Iniciativas que promuevan la equidad de género, el liderazgo femenino y la transformación de prácticas en medicina." },
];

const beca = [
  { icon: "check", label: "Acreditación completa", sub: "al congreso DDW 2027" },
  { icon: "rocket", label: "Pasaje aéreo internacional", sub: "incluido" },
  { icon: "building", label: "Alojamiento", sub: "durante el evento" },
];

const admisibilidad = [
  { icon: "stethoscope", title: "Especialización", text: "Médica especializada en gastroenterología y/o endoscopía digestiva de adultos, con entre 5 y 15 años de ejercicio profesional acreditado." },
  { icon: "pulse", title: "Actividad actual", text: "Desempeñándose activamente en el ámbito académico-científico y/o asistencial al momento de la postulación." },
  { icon: "pin", title: "Nacionalidad", text: "Ser argentina nativa, por opción o naturalizada, con trayectoria profesional desarrollada principalmente en Argentina." },
  { icon: "chart", title: "Trayectoria combinada", text: "Demostrar una carrera que combine al menos tres de los siete criterios de evaluación del programa." },
  { icon: "book", title: "Documentación", text: "Contar con pasaporte vigente y condiciones para gestionar la documentación migratoria necesaria para ingresar a EE.UU." },
  { icon: "shield", title: "Sin conflicto de interés", text: "No haber recibido el premio en ediciones anteriores ni integrado el jurado. Sin relaciones que representen conflicto de interés con el patrocinador." },
];

const bases: { title: string; items: string[] }[] = [
  {
    title: "Criterios de evaluación",
    items: [
      "Contribuciones científicas, académicas y formación continua: impacto y relevancia de publicaciones y proyectos de investigación.",
      "Liderazgo y gestión: capacidad demostrada en liderar equipos, proyectos y programas.",
      "Docencia, formación y mentoría: participación en la formación de profesionales y equipos de salud.",
      "Impacto comunitario y salud pública: participación en actividades de prevención, acceso y equidad sanitaria.",
      "Comunicación y sensibilización: capacidad para comunicar temas de salud de manera clara y accesible.",
      "Compromiso con la equidad y el liderazgo femenino: participación activa en iniciativas que promuevan la equidad de género.",
      "Innovación y transformación: capacidad para impulsar cambios y adoptar enfoques novedosos.",
    ],
  },
  {
    title: "Compromiso de la ganadora",
    items: [
      "Como parte del premio, la ganadora colaborará con Fundación Gedyt en la generación de contenido digital durante la DDW, con el objetivo de visibilizar la iniciativa e inspirar a futuras postulantes. Se solicitará el envío de fotos, videos y un breve testimonio sobre la experiencia, así como el etiquetado de Fundación Gedyt en publicaciones realizadas durante el congreso. No se requieren conocimientos técnicos ni experiencia previa: el material podrá registrarse de manera simple desde un teléfono celular.",
    ],
  },
  {
    title: "Proceso de evaluación",
    items: [
      "Las candidaturas serán evaluadas por un jurado de excelencia sobre la base de los siete criterios establecidos. El jurado valorará el impacto real y la profundidad de la trayectoria, priorizando candidatas que demuestren combinación de aspectos y compromiso sostenido con la especialidad y la comunidad.",
    ],
  },
  {
    title: "Disposiciones finales",
    items: [
      "La participación implica la aceptación de las presentes Bases y Condiciones en su totalidad.",
      "Fundación Gedyt se reserva el derecho de modificar las bases, ampliar los plazos o declarar desierto el premio.",
      "Toda la información provista será tratada con absoluta confidencialidad.",
      "La Fundación podrá utilizar el nombre, imagen y trayectoria de la ganadora con fines de difusión institucional, con su consentimiento expreso.",
      "Ante cualquier situación no contemplada, resolverá la Fundación Gedyt con criterio de equidad y buena fe.",
    ],
  },
];

function Chip({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
        light ? "bg-white/10 text-[#f08bb0] ring-1 ring-white/15" : "bg-[#c8396d]/10 text-[#c8396d] ring-1 ring-[#c8396d]/20"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-[#f08bb0]" : "bg-[#c8396d]"}`} />
      {children}
    </span>
  );
}

export default function PremioMujeresPage() {
  return (
    <>
      {/* Encabezado: foto de la entrega con filtro violeta, como los banners de la Fundación */}
      <section className="px-4 pt-6 sm:px-6 sm:pt-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1f1538] via-[#2e1f52] to-[#3f2b6e] text-white">
          <Image src="/banners/mujeres-premio.webp" alt="" fill priority sizes="(min-width: 1280px) 1280px, 100vw" className="kb-image object-cover object-[center_25%]" />
          <div className="absolute inset-0 bg-[#3f2b6e]/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f1538]/90 via-[#3f2b6e]/60 to-[#c8396d]/20" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[#c8396d]/30 blur-3xl" aria-hidden />
          <div className="relative px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
            <Link
              href="/programas/mujeres-en-salud"
              className="group inline-flex items-center gap-3 rounded-full bg-white/10 py-2 pr-6 pl-2 text-base font-semibold text-white ring-1 ring-white/20 transition hover:bg-white hover:text-[#3f2b6e]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition group-hover:-translate-x-0.5 group-hover:bg-[#c8396d] group-hover:text-white">
                <Icon name="arrow" className="h-5 w-5 rotate-180" />
              </span>
              Mujeres en Salud
            </Link>
            <div className="mt-8 max-w-3xl">
              <div className="fade-up">
                <Chip light>4.ª edición 2026 · Postulaciones abiertas</Chip>
              </div>
              <h1 className="mt-5 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl">
                <Words text="Premio Mujeres Destacadas" delay={150} />
              </h1>
              <p className="fade-up mt-3 text-xl font-semibold text-[#f08bb0] sm:text-2xl" style={{ ["--d" as string]: "450ms" }}>
                en Gastroenterología &amp; Endoscopía Digestiva
              </p>
              <p className="fade-up mt-6 max-w-2xl text-lg text-white/85" style={{ ["--d" as string]: "650ms" }}>
                Una iniciativa que reconoce y visibiliza a mujeres que, a través de su trayectoria, liderazgo y compromiso, generan un impacto significativo en la
                comunidad médica y en la salud de las personas.
              </p>
              <div className="fade-up mt-9 flex flex-wrap gap-3" style={{ ["--d" as string]: "850ms" }}>
                <a
                  href={formularioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#c8396d]/30 transition hover:-translate-y-0.5"
                  style={{ background: degradeMujeres }}
                >
                  Quiero participar <Icon name="arrow" className="h-4 w-4" />
                </a>
                <a
                  href="#criterios"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 font-semibold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20"
                >
                  Ver criterios <Icon name="arrow" className="h-4 w-4 rotate-90" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1.5" style={{ background: degradeMujeres }} aria-hidden />
        </div>
      </section>

      {/* Fechas clave */}
      <section className="px-4 sm:px-6">
        <div className="reveal mx-auto -mt-px max-w-5xl">
          <div className="relative mt-8 grid overflow-hidden rounded-3xl bg-white shadow-xl shadow-[#3f2b6e]/10 ring-1 ring-[#3f2b6e]/10 sm:grid-cols-3">
            <span className="absolute inset-x-0 top-0 h-1" style={{ background: degradeMujeres }} aria-hidden />
            {fechas.map((f, i) => (
              <div key={f.label} className={`flex items-center gap-4 px-6 py-6 sm:justify-center ${i > 0 ? "border-t border-[#3f2b6e]/10 sm:border-t-0 sm:border-l" : ""}`}>
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#c8396d]/10 text-[#c8396d]">
                  <Icon name={i === 2 ? "sparkle" : "calendar"} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-navy-900/50">{f.label}</span>
                  <span className="block text-lg font-extrabold text-[#3f2b6e]">{f.value}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué un premio */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <Chip>Por qué este premio</Chip>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
              Reconocer el liderazgo para transformar el futuro de la{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: degradeMujeres }}>
                salud digestiva
              </span>
            </h2>
            <p className="mt-6 text-xl font-semibold leading-relaxed text-[#3f2b6e]">
              La prevención también se construye formando, reconociendo e impulsando a quienes hacen avanzar la medicina.
            </p>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-navy-900/70">
              <p>
                Detrás de cada innovación, de cada programa de prevención y de cada mejora en la calidad de atención existen profesionales que dedican años a
                investigar, enseñar y generar conocimiento. Muchas veces ese trabajo transforma el sistema de salud sin ocupar un lugar visible.
              </p>
              <p className="border-l-4 border-[#c8396d] pl-5 font-semibold text-navy-900">
                Porque reconocer esos liderazgos también es una forma de fortalecer el sistema de salud.
              </p>
            </div>
          </div>
          <div className="reveal relative pb-8 sm:pl-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#3f2b6e]/20">
              <Image src="/images/premio-doctoras.webp" alt="Médicas gastroenterólogas" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[center_35%] transition duration-1000 hover:scale-105" />
            </div>
            <div className="absolute bottom-0 left-0 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-navy-900/5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: degradeMujeres }}>
                <Icon name="sparkle" className="h-5 w-5" />
              </span>
              <span className="text-sm leading-tight">
                <strong className="block text-navy-900">Mujeres en Salud</strong>
                <span className="text-navy-900/60">Fundación Gedyt</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* El jurado valorará */}
      <section id="criterios" className="scroll-mt-28 bg-gradient-to-b from-[#3f2b6e]/[0.05] to-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <Chip>El jurado valorará</Chip>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
              Impacto real.{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: degradeMujeres }}>
                Liderazgo.
              </span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {criterios.map((r, i) => (
              <article key={r.title} className="reveal-pop relative overflow-hidden rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#3f2b6e]/10">
                <span className="absolute inset-x-0 top-0 h-1" style={{ background: degradeMujeres }} aria-hidden />
                <span className="pointer-events-none absolute -top-3 right-3 text-7xl font-extrabold text-[#3f2b6e]/[0.07]" aria-hidden>
                  0{i + 1}
                </span>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c8396d]/10 text-[#c8396d]">
                  <Icon name={r.icon} className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 text-xl font-extrabold text-navy-900">{r.title}</h3>
                <p className="relative mt-2 leading-relaxed text-navy-900/65">{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* El premio: beca DDW 2027 */}
      <section id="el-premio" className="relative scroll-mt-28 overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-[#3f2b6e] px-4 py-20 text-white sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-[#c8396d]/25 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal">
            <Chip light>El premio</Chip>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">Beca completa al Digestive Disease Week 2027</h2>
            <p className="mt-3 flex items-center gap-2 font-semibold text-[#f08bb0]">
              <Icon name="pin" className="h-4 w-4" /> Estados Unidos
            </p>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              El premio representa una inversión concreta en el desarrollo profesional de quienes hoy impulsan los avances de la especialidad. La profesional
              distinguida participa del <strong className="text-white">DDW 2027</strong>, uno de los encuentros científicos más importantes del mundo en
              gastroenterología.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Más que un reconocimiento, es una oportunidad para acceder a los últimos avances científicos, intercambiar experiencias con referentes
              internacionales y seguir incorporando conocimiento que luego se traduce en una mejor atención para miles de pacientes.
            </p>
            <p className="mt-6 text-xl font-bold text-[#f08bb0]">Invertir en quienes lideran la salud digestiva también es invertir en el futuro de la prevención.</p>
          </div>
          <div className="reveal-pop space-y-5">
            <div className="relative aspect-[12/5] overflow-hidden rounded-[2rem] ring-1 ring-white/15">
              <Image src="/images/premio-mujeres-ddw-hd.webp" alt="Profesionales argentinos en el Digestive Disease Week" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#3f2b6e]">DDW · Digestive Disease Week</span>
            </div>
            <div className="rounded-[2rem] bg-white/[0.07] p-6 ring-1 ring-white/10 backdrop-blur sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">La beca incluye</p>
              <ul className="mt-5 space-y-3">
                {beca.map((b) => (
                  <li key={b.label} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#c8396d]/25 text-[#f08bb0]">
                      <Icon name={b.icon} className="h-5 w-5" />
                    </span>
                    <span>
                      <strong className="block text-lg">{b.label}</strong>
                      <span className="text-sm text-white/60">{b.sub}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-white/50">* Traslados internos y gastos personales a cargo de la ganadora.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Podés postularte? */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <Chip>Criterios de admisibilidad</Chip>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">¿Podés postularte?</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {admisibilidad.map((c) => (
              <article key={c.title} className="reveal-pop flex gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy-900/5">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-brand-50 text-cta">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-extrabold text-navy-900">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-900/65">{c.text}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Bases y condiciones */}
          <div className="reveal mx-auto mt-16 max-w-4xl">
            <h3 className="text-center text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">Bases &amp; condiciones</h3>
            <div className="mt-8 space-y-3">
              {bases.map((b) => (
                <details key={b.title} className="group rounded-2xl bg-white ring-1 ring-[#3f2b6e]/10 open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-navy-900 [&::-webkit-details-marker]:hidden">
                    {b.title}
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#c8396d]/10 text-xl leading-none text-[#c8396d] transition group-open:rotate-45">+</span>
                  </summary>
                  <ul className="space-y-2 px-6 pb-6 text-navy-900/70">
                    {b.items.map((it) => (
                      <li key={it} className={b.items.length > 1 ? "flex gap-3" : ""}>
                        {b.items.length > 1 && <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-[#c8396d]" aria-hidden />}
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Llamado a postularse */}
      <section className="px-4 sm:px-6">
        <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1f1538] via-[#3f2b6e] to-[#5a2f75] text-white shadow-2xl shadow-[#3f2b6e]/25">
          <Image src="/images/premio-doctoras.webp" alt="" fill sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover object-[70%_30%] opacity-35 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f1538] via-[#3f2b6e]/85 to-transparent" />
          <div className="relative max-w-2xl px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
            <h2 className="text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl">
              Si tu trayectoria <span className="text-[#f08bb0]">inspira</span>, y deja huella…
            </h2>
            <p className="mt-5 text-lg text-white/85">
              Este reconocimiento es para vos. Presentá tu candidatura o nominá a una profesional que inspire con su trayectoria. El jurado valorará el impacto
              real, el liderazgo visible y el compromiso genuino con la especialidad y la comunidad médica argentina.
            </p>
            <a
              href={formularioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#3f2b6e] shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
            >
              Quiero participar <Icon name="arrow" className="h-4 w-4" />
            </a>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
              El impacto de las mujeres es impulsar el futuro de la medicina.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1.5" style={{ background: degradeMujeres }} aria-hidden />
        </div>
      </section>

      {/* Equidad */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <Chip>Una agenda de equidad</Chip>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Visibilizar trayectorias para inspirar a{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: degradeMujeres }}>
                nuevas generaciones
              </span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-[1fr_1fr_0.62fr]">
            {[
              {
                icon: "heart",
                title: "Más equidad en el sistema sanitario",
                text: "El Premio Mujeres busca contribuir a una agenda de mayor equidad dentro del sistema sanitario, visibilizando trayectorias de excelencia que durante muchos años permanecieron subrepresentadas.",
              },
              {
                icon: "users",
                title: "Nuevos modelos de referencia",
                text: "Reconocer a mujeres que investigan, enseñan, forman profesionales y transforman la práctica médica amplía los modelos de referencia para nuevas generaciones de médicas, investigadoras y profesionales de la salud.",
              },
            ].map((c) => (
              <article key={c.title} className="reveal-pop relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#3f2b6e]/10 sm:p-10">
                <span className="absolute inset-x-0 top-0 h-1" style={{ background: degradeMujeres }} aria-hidden />
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c8396d]/10 text-[#c8396d]">
                  <Icon name={c.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-xl font-extrabold tracking-tight text-navy-900">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-navy-900/70">{c.text}</p>
              </article>
            ))}
            <Link
              href="/novedades#poster-brecha-genero"
              className="reveal-pop group mx-auto flex w-full max-w-xs flex-col overflow-hidden rounded-3xl bg-white/70 ring-1 ring-[#3f2b6e]/10 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg md:col-span-2 lg:col-span-1 lg:max-w-none lg:self-center"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-50">
                <Image src="/publicaciones/poster-3.webp" alt="Póster Brecha de género en el liderazgo de sistemas de salud" fill sizes="(min-width: 1024px) 20vw, 320px" className="object-cover object-top opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                <span className="absolute top-3 left-3 z-10 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-[#c8396d] shadow-sm">Publicación</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-sm font-bold leading-snug text-navy-900/85">Brecha de género en el liderazgo de sistemas de salud: un ejemplo en la gastroenterología</h3>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-[#3f2b6e] transition group-hover:text-[#c8396d]">
                  Ver publicación <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Frase de cierre */}
      <section className="relative overflow-hidden px-6 py-16 text-white sm:px-12 sm:py-20" style={{ background: `linear-gradient(120deg, ${VIOLETA} 0%, #5a2f75 55%, ${ROSA} 100%)` }}>
        <span className="pointer-events-none absolute top-2 right-[6%] text-[14rem] leading-none font-extrabold text-white/10 select-none" aria-hidden>
          “
        </span>
        <div className="reveal relative mx-auto max-w-6xl">
          <blockquote className="text-xl leading-snug font-semibold sm:text-2xl lg:text-[2rem]">
            Porque cuando una institución reconoce el liderazgo, fortalece el presente de la medicina. Y cuando decide invertir en quienes construirán el
            conocimiento del mañana, también fortalece el futuro del sistema de salud.
          </blockquote>
        </div>
      </section>

      {/* Contacto y programa */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="reveal mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#3f2b6e]/10 sm:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c8396d]/10 text-[#c8396d]">
              <Icon name="mail" className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-navy-900">¿Tenés consultas sobre el premio?</h2>
            <p className="mt-3 text-navy-900/70">Escribinos y te respondemos a la brevedad.</p>
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent("Premio Mujeres Destacadas")}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#c8396d]/25 transition hover:-translate-y-0.5"
              style={{ background: degradeMujeres }}
            >
              {contact.email} <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
          <Link
            href="/programas/mujeres-en-salud"
            className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-900 to-navy-800 p-8 text-white sm:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-[#c8396d]/30 blur-3xl" aria-hidden />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#f08bb0]">
              <Icon name="users" className="h-6 w-6" />
            </span>
            <h2 className="relative mt-5 text-2xl font-extrabold tracking-tight">Conocé el programa Mujeres en Salud</h2>
            <p className="relative mt-3 text-white/75">Mentoreo, workshops y formación para el liderazgo de las mujeres en gastroenterología.</p>
            <span className="relative mt-6 inline-flex items-center gap-2 font-semibold text-[#f08bb0]">
              Ver el programa <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
