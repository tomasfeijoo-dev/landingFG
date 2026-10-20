import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Premio Mujeres Destacadas — Gastroenterología & Endoscopía Digestiva",
  description:
    "Una iniciativa que reconoce y visibiliza a mujeres que, a través de su trayectoria, liderazgo y compromiso, generan un impacto significativo en la comunidad médica y en la salud de las personas.",
};

// Textos e imágenes tal cual la landing del premio (mujeres-gedyt-landing.html).
// La página usa la estructura y tipografía de la web de la Fundación con los colores de Mujeres en Salud.
const formularioUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeqyeRbGWOsFH2DL6AJSWN0BOpZnDXR8enk9vxtOkJYytHQYw/viewform";

const fechas = [
  { name: "Apertura", val: "1 JUN 2026" },
  { name: "Cierre", val: "15 JUL 2026" },
  { name: "Anuncio ganadora", val: "Gala Noche Azul 2026" },
];

const criterios = [
  { title: "Investigación científica", text: "Publicaciones, proyectos de investigación y compromiso sostenido con el desarrollo profesional y la actualización continua." },
  { title: "Liderazgo y gestión", text: "Capacidad demostrada en liderar equipos, proyectos y programas dentro del ámbito médico e institucional." },
  { title: "Docencia y mentoría", text: "Participación activa en la formación de profesionales y equipos de salud a lo largo de la trayectoria." },
  { title: "Impacto comunitario", text: "Actividades de prevención, acceso y equidad sanitaria que generan un cambio real en la salud pública." },
  { title: "Comunicación", text: "Habilidad para transmitir temas de salud de manera clara y accesible a pacientes, colegas y público general." },
  { title: "Equidad e innovación", text: "Iniciativas que promuevan la equidad de género, el liderazgo femenino y la transformación de prácticas en medicina." },
];

const premio = ["Acreditación completa al congreso DDW 2027", "Pasaje aéreo internacional incluido", "Alojamiento durante el evento"];

const requisitos = [
  { title: "Especialización", text: "Médica especializada en gastroenterología y/o endoscopía digestiva de adultos, con entre 5 y 15 años de ejercicio profesional acreditado." },
  { title: "Actividad actual", text: "Desempeñándose activamente en el ámbito académico-científico y/o asistencial al momento de la postulación." },
  { title: "Nacionalidad", text: "Ser argentina nativa, por opción o naturalizada, con trayectoria profesional desarrollada principalmente en Argentina." },
  { title: "Trayectoria combinada", text: "Demostrar una carrera que combine al menos tres de los siete criterios de evaluación del programa." },
  { title: "Documentación", text: "Contar con pasaporte vigente y condiciones para gestionar la documentación migratoria necesaria para ingresar a EE.UU." },
  { title: "Sin conflicto de interés", text: "No haber recibido el premio en ediciones anteriores ni integrado el jurado. Sin relaciones que representen conflicto de interés con el patrocinador." },
];

const bases: { title: string; list?: string[]; text?: string }[] = [
  {
    title: "Criterios de evaluación",
    list: [
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
    text: "Como parte del premio, la ganadora colaborará con Fundación Gedyt en la generación de contenido digital durante la DDW, con el objetivo de visibilizar la iniciativa e inspirar a futuras postulantes. Se solicitará el envío de fotos, videos y un breve testimonio sobre la experiencia, así como el etiquetado de Fundación Gedyt en publicaciones realizadas durante el congreso. No se requieren conocimientos técnicos ni experiencia previa: el material podrá registrarse de manera simple desde un teléfono celular.",
  },
  {
    title: "Proceso de evaluación",
    text: "Las candidaturas serán evaluadas por un jurado de excelencia sobre la base de los siete criterios establecidos. El jurado valorará el impacto real y la profundidad de la trayectoria, priorizando candidatas que demuestren combinación de aspectos y compromiso sostenido con la especialidad y la comunidad.",
  },
  {
    title: "Disposiciones finales",
    list: [
      "La participación implica la aceptación de las presentes Bases y Condiciones en su totalidad.",
      "Fundación Gedyt se reserva el derecho de modificar las bases, ampliar los plazos o declarar desierto el premio.",
      "Toda la información provista será tratada con absoluta confidencialidad.",
      "La Fundación podrá utilizar el nombre, imagen y trayectoria de la ganadora con fines de difusión institucional, con su consentimiento expreso.",
      "Ante cualquier situación no contemplada, resolverá la Fundación Gedyt con criterio de equidad y buena fe.",
    ],
  },
];

// Palabras con letra calada (solo contorno), como en la landing
function Outline({ children, color, className = "" }: { children: React.ReactNode; color: string; className?: string }) {
  return (
    <span className={`[-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:1.5px] sm:[-webkit-text-stroke-width:2px] ${className}`} style={{ WebkitTextStrokeColor: color }}>
      {children}
    </span>
  );
}

function Label({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#00a3d6] ${center ? "justify-center" : ""}`}>
      <span className="h-px w-8 bg-[#00a3d6]" aria-hidden />
      {children}
    </p>
  );
}

function QuieroParticipar({ light = false }: { light?: boolean }) {
  return (
    <a
      href={formularioUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold shadow-lg transition hover:-translate-y-0.5 ${
        light ? "bg-white text-[#49297d] shadow-black/20" : "bg-[#dd226c] text-white shadow-[#dd226c]/30 hover:bg-[#c41d5e]"
      }`}
    >
      Quiero participar <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </a>
  );
}

export default function PremioMujeresPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 pt-6 sm:px-6 sm:pt-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#280d55] via-[#49297d] to-[#693c98] text-white">
          <div className="absolute inset-y-0 right-0 w-full md:w-[65%]">
            <Image src="/images/premio-doctoras.webp" alt="" fill priority sizes="(min-width: 768px) 65vw, 100vw" className="kb-image object-cover object-[center_20%]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#280d55] via-[#49297d]/70 to-transparent max-md:via-[#49297d]/85" />
          </div>
          <div className="relative px-6 pt-14 pb-10 sm:px-12 lg:px-16 lg:pt-20">
            <span className="fade-up inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85 ring-1 ring-white/20">
              4.ª Edición 2026
            </span>
            <p className="fade-up mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/85" style={{ ["--d" as string]: "100ms" }}>
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#dd226c]" />
              Postulaciones abiertas · 1 junio — 3 julio 2026
            </p>
            <h1 className="fade-up mt-5 text-[2.6rem] leading-[0.93] font-extrabold tracking-tight uppercase min-[400px]:text-5xl sm:text-7xl lg:text-[6.5rem]" style={{ ["--d" as string]: "200ms" }}>
              <span className="block">Premio</span>
              <span className="block text-[#dd226c]">Mujeres</span>
              <Outline color="#ffffff" className="block">Destacadas</Outline>
            </h1>
            <p className="fade-up mt-5 text-lg font-semibold text-[#00a3d6] sm:text-xl" style={{ ["--d" as string]: "400ms" }}>
              Gastroenterología &amp; Endoscopía Digestiva
            </p>
            <p className="fade-up mt-5 max-w-xl text-lg text-white/80" style={{ ["--d" as string]: "550ms" }}>
              Una iniciativa que reconoce y visibiliza a mujeres que, a través de su trayectoria, liderazgo y compromiso, generan un impacto significativo en la
              comunidad médica y en la salud de las personas.
            </p>
            <div className="fade-up mt-9 flex flex-wrap gap-3" style={{ ["--d" as string]: "700ms" }}>
              <QuieroParticipar />
              <a
                href="#criterios"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 font-semibold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20"
              >
                Ver criterios
              </a>
            </div>

            {/* Fechas clave */}
            <div className="mt-14 max-w-3xl rounded-3xl bg-[#280d55]/60 p-5 ring-1 ring-white/10 backdrop-blur sm:p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#00a3d6]">Fechas clave</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {fechas.map((f) => (
                  <div key={f.name} className="border-l-2 border-[#dd226c] pl-4">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{f.name}</span>
                    <span className="mt-1 block text-lg font-extrabold">{f.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#49297d] via-[#dd226c] to-[#00a3d6]" aria-hidden />
        </div>
      </section>

      {/* Criterios */}
      <section id="criterios" className="scroll-mt-28 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <Label>El jurado valorará</Label>
            <h2 className="mt-4 text-4xl leading-[1.05] font-extrabold tracking-tight text-[#280d55] uppercase sm:text-6xl">
              Impacto real.
              <br />
              <span className="text-[#dd226c]">Liderazgo</span> <Outline color="#49297d">visible.</Outline>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {criterios.map((c, i) => (
              <article key={c.title} className="reveal-pop group relative overflow-hidden rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#49297d]/10 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#49297d] to-[#dd226c]" aria-hidden />
                <span className="text-5xl font-extrabold text-[#dd226c]/20 transition group-hover:text-[#dd226c]/40">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-extrabold text-[#280d55]">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-navy-900/65">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Premio */}
      <section className="relative overflow-hidden bg-[#280d55] px-4 py-20 text-white sm:px-6 sm:py-24">
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2">
          <Image src="/images/premio-ddw-ciudad.webp" alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#280d55]/50 to-[#280d55] max-md:bg-[#280d55]/70" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="reveal-pop mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
            <div className="relative flex aspect-square w-full items-center justify-center rounded-full ring-1 ring-white/15">
              <div className="absolute inset-6 rounded-full ring-1 ring-[#dd226c]/40" aria-hidden />
              <div className="absolute inset-12 rounded-full ring-1 ring-[#00a3d6]/40" aria-hidden />
              <div className="relative flex aspect-square w-[62%] flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#49297d] to-[#dd226c] text-center shadow-2xl shadow-black/40">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">Beca completa</span>
                <span className="mt-1 text-3xl font-extrabold sm:text-4xl">DDW 2027</span>
                <span className="mt-1 text-xs text-white/80">Digestive Disease Week</span>
                <span className="mt-2 text-xs font-semibold text-[#00a3d6]">Estados Unidos</span>
              </div>
            </div>
          </div>
          <div className="reveal">
            <Label>El premio</Label>
            <h2 className="mt-4 text-4xl leading-[1.02] font-extrabold tracking-tight uppercase sm:text-5xl">
              Una experiencia
              <Outline color="#ffffff" className="block">internacional</Outline>
              <span className="block text-5xl text-[#dd226c] sm:text-7xl">única</span>
            </h2>
            <ul className="mt-8 space-y-3">
              {premio.map((p) => (
                <li key={p} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#dd226c] text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="font-semibold">{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-white/55">* Traslados internos y gastos personales a cargo de la ganadora.</p>
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <Label>Criterios de admisibilidad</Label>
            <h2 className="mt-4 text-4xl leading-[1.05] font-extrabold tracking-tight text-[#280d55] uppercase sm:text-6xl">
              ¿Podés
              <br />
              <span className="text-[#dd226c]">postularte?</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {requisitos.map((r) => (
              <article key={r.title} className="reveal-pop rounded-3xl bg-gradient-to-br from-[#49297d]/[0.06] to-white p-7 ring-1 ring-[#49297d]/10">
                <h4 className="flex items-center gap-2 text-lg font-extrabold text-[#280d55]">
                  <span className="h-2 w-2 rounded-full bg-[#dd226c]" aria-hidden />
                  {r.title}
                </h4>
                <p className="mt-3 leading-relaxed text-navy-900/70">{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bases */}
      <section id="bases" className="scroll-mt-28 bg-[#49297d]/[0.05] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="reveal">
            <Label>Más información</Label>
            <h2 className="mt-4 text-4xl leading-[1.05] font-extrabold tracking-tight text-[#280d55] uppercase sm:text-6xl">
              Bases &amp;
              <br />
              <span className="text-[#dd226c]">condiciones</span>
            </h2>
          </div>
          <div className="reveal mt-10 space-y-3">
            {bases.map((b) => (
              <details key={b.title} className="group rounded-2xl bg-white ring-1 ring-[#49297d]/10 open:shadow-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg font-extrabold text-[#280d55]">{b.title}</h3>
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#dd226c]/10 text-2xl leading-none text-[#dd226c] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 leading-relaxed text-navy-900/70">
                  {b.text && <p>{b.text}</p>}
                  {b.list && (
                    <ul className="space-y-2">
                      {b.list.map((it) => (
                        <li key={it} className="flex gap-3">
                          <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-[#dd226c]" aria-hidden />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Frase */}
      <section className="relative overflow-hidden bg-[#49297d] px-6 py-16 text-white sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[#dd226c]/25 blur-3xl" aria-hidden />
        <div className="reveal relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
          <h2 className="text-4xl leading-[1.05] font-extrabold tracking-tight uppercase sm:text-5xl">
            Si tu trayectoria
            <br />
            <span className="text-[#dd226c]">inspira</span>, <Outline color="#ffffff">transforma</Outline>
            <br />y deja huella…
          </h2>
          <p className="text-lg leading-relaxed text-white/80">
            Este reconocimiento es para vos. Presentá tu candidatura o nominá a una profesional que inspire con su trayectoria. El jurado valorará el impacto
            real, el liderazgo visible y el compromiso genuino con la especialidad y la comunidad médica argentina.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section id="postulacion" className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="reveal relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#280d55] px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_50%_50%,rgba(73,41,125,0.9),transparent_70%),radial-gradient(ellipse_30%_30%_at_20%_80%,rgba(0,163,214,0.15),transparent_60%)]" aria-hidden />
          <div className="relative">
            <h2 className="text-4xl leading-[1.02] font-extrabold tracking-tight uppercase sm:text-6xl">
              <Outline color="#ffffff" className="block">Reconocer</Outline>
              el impacto de
              <br />
              las <span className="text-[#dd226c]">mujeres</span>
            </h2>
            <p className="mt-5 text-xl font-semibold text-white/80">es impulsar el futuro de la medicina.</p>
            <div className="mt-9">
              <QuieroParticipar light />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#49297d] via-[#dd226c] to-[#00a3d6]" aria-hidden />
        </div>
      </section>
    </>
  );
}
