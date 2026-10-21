import type { Metadata } from "next";
import { Poppins, Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Premio Mujeres Destacadas — Gastroenterología & Endoscopía Digestiva",
  description:
    "Una iniciativa que reconoce y visibiliza a mujeres que, a través de su trayectoria, liderazgo y compromiso, generan un impacto significativo en la comunidad médica y en la salud de las personas.",
};

// Tipografías de la landing del premio: Poppins en títulos, Source Sans en textos
const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700", "800", "900"], variable: "--font-poppins", display: "swap" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["300", "400", "600", "700"], variable: "--font-source", display: "swap" });
const TT = "font-[family-name:var(--font-poppins)]";
const SS = "font-[family-name:var(--font-source)]";

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

// Palabras con letra calada: mismo SVG que usa la landing (texto en Poppins, solo contorno)
function OutlineWord({
  text,
  viewBox,
  x = 0,
  y,
  size,
  weight = 700,
  stroke = "#ffffff",
  strokeWidth = 1.5,
  anchor,
  className = "",
}: {
  text: string;
  viewBox: string;
  x?: number;
  y: number;
  size: number;
  weight?: number;
  stroke?: string;
  strokeWidth?: number;
  anchor?: "middle";
  className?: string;
}) {
  return (
    <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" className={`overflow-visible ${className}`} role="img" aria-label={text}>
      <text
        x={x}
        y={y}
        fontSize={size}
        fontWeight={weight}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        paintOrder="stroke"
        textAnchor={anchor}
        style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", letterSpacing: "-0.02em" }}
      >
        {text}
      </text>
    </svg>
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

function QuieroParticipar({ big = false }: { big?: boolean }) {
  return (
    <a
      href={formularioUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-full bg-[#dd226c] font-bold tracking-[0.12em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-[#c41d5e] hover:shadow-[0_12px_32px_rgba(221,34,108,0.45)] ${TT} ${
        big ? "px-12 py-5 text-base" : "px-9 py-4 text-sm"
      }`}
    >
      Quiero participar
      <svg viewBox="0 0 24 24" className="h-5 w-5 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M9 4l8 8-8 8" />
      </svg>
    </a>
  );
}

export default function PremioMujeresPage() {
  return (
    <div className={`${poppins.variable} ${sourceSans.variable}`}>
      {/* Hero, como la landing: a todo el ancho, con el logo del programa y la edición */}
      <section className="relative overflow-hidden bg-[#280d55] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_85%_35%,rgba(105,60,152,0.7)_0%,transparent_65%),radial-gradient(ellipse_50%_60%_at_15%_75%,rgba(0,163,214,0.12)_0%,transparent_55%),linear-gradient(160deg,#280d55_0%,#49297d_55%,#280d55_100%)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_79px,rgba(255,255,255,0.02)_80px),repeating-linear-gradient(0deg,transparent,transparent_79px,rgba(255,255,255,0.02)_80px)]" />
        <div
          className="absolute inset-y-0 right-0 w-full opacity-50 md:w-[65%]"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 25%, #000 55%)",
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 25%, #000 55%)",
          }}
        >
          <Image src="/images/premio-doctoras.webp" alt="" fill priority sizes="(min-width: 768px) 65vw, 100vw" className="object-cover object-[center_20%]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-16 sm:px-12 lg:px-16 lg:pb-20">
          {/* Volver, logo del programa (centrado) y edición en una misma línea */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <Link
              href="/programas/mujeres-en-salud"
              aria-label="Volver a Mujeres en Salud"
              className="group inline-flex items-center gap-3 justify-self-start rounded-full bg-white/10 p-1.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white hover:text-[#49297d] sm:pr-5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition group-hover:-translate-x-0.5 group-hover:bg-[#dd226c] group-hover:text-white">
                <Icon name="arrow" className="h-4 w-4 rotate-180" />
              </span>
              <span className="hidden sm:inline">Mujeres en Salud</span>
            </Link>
            <div className="text-center">
              <svg viewBox="0 0 380 44" xmlns="http://www.w3.org/2000/svg" className="mx-auto h-5 w-auto min-[400px]:h-6 sm:h-8 lg:h-9" role="img" aria-label="Mujeres en Gastro & Endo">
                <g style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
                  <text x="0" y="38" fontWeight="800" fontSize="44" fill="none" stroke="white" strokeWidth="1.8" paintOrder="stroke" style={{ letterSpacing: "-0.01em" }}>
                    MUJERES
                  </text>
                  <text x="222" y="22" fontWeight="700" fontSize="14" fill="white" style={{ letterSpacing: "0.04em" }}>
                    EN GASTRO
                  </text>
                  <text x="222" y="40" fontWeight="700" fontSize="14" fill="white" style={{ letterSpacing: "0.04em" }}>
                    &amp; ENDO
                  </text>
                </g>
              </svg>
              <span className="mt-1.5 block text-[9px] tracking-[0.18em] text-white uppercase sm:text-[11px]">Fundación Gedyt</span>
            </div>
            <span className={`justify-self-end rounded-full border-[1.5px] border-[#dd226c] px-2.5 py-1 text-center text-[9px] leading-tight font-bold tracking-[0.1em] text-[#dd226c] uppercase sm:px-5 sm:py-1.5 sm:text-xs sm:whitespace-nowrap ${TT}`}>
              <span className="whitespace-nowrap">4.ª Edición</span> <br className="sm:hidden" />
              2026
            </span>
          </div>

          <div className="mt-10 lg:mt-14">
            <span className="fade-up inline-flex items-center gap-2.5 rounded-full border border-[#00a3d6]/35 bg-[#00a3d6]/12 px-4 py-1.5 text-[10px] font-semibold tracking-[0.25em] text-[#00a3d6] uppercase sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00a3d6]" />
              Postulaciones abiertas · 1 junio — 3 julio 2026
            </span>
            <h1 className={`fade-up mt-7 text-[3.2rem] leading-[0.93] font-black tracking-[-0.02em] uppercase min-[400px]:text-[4rem] sm:text-[6.5rem] lg:text-[8rem] ${TT}`} style={{ ["--d" as string]: "150ms" }}>
              <span className="block">Premio</span>
              <span className="block text-[#dd226c]">Mujeres</span>
              <OutlineWord text="DESTACADAS" viewBox="0 0 450 55" y={50} size={56} className="mt-1 block h-auto w-[92%] max-w-[712px]" />
            </h1>
            <p className={`fade-up mt-4 text-sm font-bold tracking-[0.06em] text-[#00a3d6] uppercase min-[400px]:text-base sm:text-xl lg:text-[1.4rem] ${TT}`} style={{ ["--d" as string]: "300ms" }}>
              Gastroenterología &amp; Endoscopía Digestiva
            </p>
            <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="fade-up max-w-[560px] font-[family-name:var(--font-source)] text-lg leading-[1.7] font-light text-white/70" style={{ ["--d" as string]: "450ms" }}>
                  Una iniciativa que reconoce y visibiliza a mujeres que, a través de su trayectoria, liderazgo y compromiso, generan un impacto significativo en la
                  comunidad médica y en la salud de las personas.
                </p>
                <div className="fade-up mt-10 flex flex-wrap items-center gap-8" style={{ ["--d" as string]: "600ms" }}>
                  <QuieroParticipar />
                  <a href="#criterios" className={`border-b border-white/25 pb-1 text-[13px] font-semibold tracking-[0.15em] text-white/70 uppercase transition hover:border-white hover:text-white ${TT}`}>
                    Ver criterios
                  </a>
                </div>
              </div>

              {/* Fechas clave */}
              <div className="fade-up" style={{ ["--d" as string]: "800ms" }}>
                <p className="font-[family-name:var(--font-source)] text-[10px] font-semibold tracking-[0.3em] text-[#00a3d6] uppercase">Fechas clave</p>
                <div className="mt-3 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {fechas.map((f) => (
                    <div key={f.name}>
                      <span className="block font-[family-name:var(--font-source)] text-[13px] font-semibold tracking-[0.1em] text-white/40 uppercase">{f.name}</span>
                      <span className={`block text-2xl font-extrabold tracking-[0.02em] sm:text-[1.65rem] ${TT}`}>{f.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#49297d] via-[#dd226c] to-[#00a3d6]" aria-hidden />
      </section>

      {/* Criterios */}
      <section id="criterios" className="scroll-mt-28 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <Label>El jurado valorará</Label>
            <h2 className="mt-4 text-4xl leading-[1.05] font-black tracking-tight text-[#280d55] uppercase font-[family-name:var(--font-poppins)] sm:text-6xl">
              Impacto real.
              <br />
              <span className="text-[#dd226c]">Liderazgo</span>{" "}
              <OutlineWord text="VISIBLE." viewBox="0 0 290 62" y={56} size={66} weight={900} stroke="#49297d" strokeWidth={1.8} className="relative top-[0.08em] inline-block h-[0.95em] w-auto align-baseline" />
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

      {/* Premio, como la landing */}
      <section className="relative overflow-hidden bg-[linear-gradient(160deg,#49297d_0%,#280d55_60%)] px-6 py-20 text-white md:px-[60px] md:py-[110px]">
        <div className="absolute inset-y-0 left-0 w-1/2 opacity-55 [mask-image:linear-gradient(to_right,#000_60%,transparent_100%)]" aria-hidden>
          <Image src="/images/premio-ddw-ciudad.webp" alt="" fill sizes="50vw" className="object-cover" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="reveal-pop flex h-[280px] items-center justify-center md:h-[420px]">
            <div className="relative h-60 w-60 md:h-[300px] md:w-[300px]">
              <div className="absolute inset-0 rounded-full border-[1.5px] border-[#00a3d6]/50" aria-hidden />
              <div className="absolute -inset-[22px] rounded-full border-[1.5px] border-[#dd226c]/25" aria-hidden />
              <div className="absolute -inset-12 rounded-full border-[1.5px] border-[#49297d]/40" aria-hidden />
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(73,41,125,0.7)_0%,rgba(40,13,85,0.9)_100%)] p-6 text-center">
                <span className={`${SS} mb-1.5 text-[11px] font-bold tracking-[0.3em] text-[#00a3d6] uppercase`}>Beca completa</span>
                <span className={`${TT} text-[36px] leading-none font-black`}>DDW 2027</span>
                <span className={`${SS} mt-2 text-[13px] leading-[1.4] text-white/70`}>Digestive Disease Week</span>
                <span className={`${SS} mt-2.5 text-xs font-semibold tracking-[0.1em] text-[#dd226c] uppercase`}>Estados Unidos</span>
              </div>
            </div>
          </div>
          <div className="reveal">
            <Label>El premio</Label>
            <h2 className={`${TT} mt-5 mb-7 text-[clamp(36px,4.5vw,58px)] leading-[0.97] font-black uppercase`}>
              Una experiencia
              <OutlineWord text="INTERNACIONAL" viewBox="0 0 500 52" y={46} size={54} className="block h-auto w-full" />
              <span className="-mt-1 block text-[clamp(48px,6vw,78px)] leading-none text-[#dd226c]">única</span>
            </h2>
            <ul className={`${SS} mb-3.5 flex flex-col gap-3.5`}>
              {premio.map((p) => (
                <li key={p} className="flex items-center gap-3.5 text-base leading-normal text-white/70">
                  <span className="flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full border-[1.5px] border-[#dd226c] bg-[#dd226c]/20 text-[11px] font-bold text-[#dd226c]" aria-hidden>
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <p className={`${SS} text-xs font-light text-white/40 italic`}>* Traslados internos y gastos personales a cargo de la ganadora.</p>
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <Label>Criterios de admisibilidad</Label>
            <h2 className="mt-4 text-4xl leading-[1.05] font-black tracking-tight text-[#280d55] uppercase font-[family-name:var(--font-poppins)] sm:text-6xl">
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
            <h2 className="mt-4 text-4xl leading-[1.05] font-black tracking-tight text-[#280d55] uppercase font-[family-name:var(--font-poppins)] sm:text-6xl">
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

      {/* Frase, como la landing */}
      <section className="relative overflow-hidden border-y border-t-[#dd226c]/30 border-b-[#00a3d6]/20 bg-[#49297d] px-6 py-[60px] text-white md:px-[60px] md:py-20">
        <div className="pointer-events-none absolute -top-1/2 -right-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(40,13,85,0.5)_0%,transparent_70%)]" aria-hidden />
        <div className="reveal relative mx-auto grid max-w-7xl items-center gap-7 md:grid-cols-[55fr_45fr] md:gap-[60px]">
          <h2 className={`${TT} text-[clamp(32px,4vw,54px)] leading-none font-black uppercase`}>
            Si tu trayectoria
            <br />
            <span className="sm:whitespace-nowrap">
              <span className="text-[#dd226c]">inspira</span>,{" "}
              <OutlineWord text="TRANSFORMA" viewBox="0 0 480 55" y={48} size={56} weight={900} strokeWidth={1.8} className="relative top-[0.08em] inline-block h-[0.95em] w-auto align-baseline" />
            </span>
            <br />y deja huella…
          </h2>
          <p className={`${SS} text-[17px] leading-[1.75] font-light text-white/70`}>
            Este reconocimiento es para vos. Presentá tu candidatura o nominá a una profesional que inspire con su trayectoria. El jurado valorará el impacto
            real, el liderazgo visible y el compromiso genuino con la especialidad y la comunidad médica argentina.
          </p>
        </div>
      </section>

      {/* CTA final: card sobre fondo blanco */}
      <section id="postulacion" className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="reveal relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#280d55] px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_50%_50%,rgba(73,41,125,0.75)_0%,transparent_70%),radial-gradient(ellipse_30%_30%_at_20%_80%,rgba(0,163,214,0.1)_0%,transparent_60%)]" aria-hidden />
          <div className="relative mx-auto max-w-[640px]">
            <h2 className={`${TT} mb-2.5 text-[clamp(40px,6vw,80px)] leading-[0.88] font-black uppercase`}>
              <OutlineWord text="RECONOCER" viewBox="0 8 430 52" x={215} y={54} size={64} anchor="middle" className="mx-auto -mb-1.5 block h-auto w-full max-w-[640px]" />
              el impacto de
              <br />
              las <span className="text-[#dd226c]">mujeres</span>
            </h2>
            <p className={`${SS} mt-1.5 mb-10 text-[20px] leading-[1.4] font-light text-white/70 sm:text-[24px]`}>es impulsar el futuro de la medicina.</p>
            <QuieroParticipar big />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#49297d] via-[#dd226c] to-[#00a3d6]" aria-hidden />
        </div>
      </section>
    </div>
  );
}
