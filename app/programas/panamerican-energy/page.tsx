import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import { Eyebrow } from "@/components/ui";
import { programasEmail } from "@/lib/programas";

export const metadata: Metadata = {
  title: "Caso Pan American Energy · Prevenir es cuidar",
  description:
    "Prevenir es cuidar: el primer programa de prevención y detección temprana del cáncer de colon para entornos laborales, junto a Pan American Energy.",
};

// Textos tal cual figuran en la página del caso en fundaciongedyt.org.ar
const cifras = [
  { value: "+100", label: "Personas participaron en charlas de concientización" },
  { value: "166", label: "Empleados entrevistados" },
  { value: "102", label: "Tests FIT Q indicados" },
  { value: "78", label: "Tests realizados" },
  { value: "31", label: "Derivaciones a colonoscopía" },
];

const ejes = [
  {
    icon: "users",
    text: "Capacitación de equipos de salud y navegadores, con el objetivo de garantizar un abordaje unificado, coordinado y de calidad en cada etapa del proceso.",
  },
  {
    icon: "graduation",
    text: "Charlas educativas y espacios de concientización, donde se abordaron factores de riesgo, hábitos saludables, síntomas de alarma y herramientas concretas para la prevención desde el hogar.",
  },
  {
    icon: "chart",
    text: "Un sistema de registro, seguimiento y contrarreferencia, que permitió asegurar la trazabilidad de cada caso y el acompañamiento continuo de cada persona participante.",
  },
];

export default function PanAmericanEnergyPage() {
  return (
    <>
      {/* Encabezado */}
      <section className="px-4 pt-6 sm:px-6 sm:pt-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-16">
          <svg className="pointer-events-none absolute -top-6 -right-10 hidden h-56 w-[28rem] md:block" viewBox="0 0 300 160" aria-hidden>
            <path d="M10 -10 C 60 90, 170 110, 210 60 C 240 20, 200 -5, 180 25 C 155 65, 230 120, 320 100" stroke="#3fa5d4" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.6" />
          </svg>
          <Link
            href="/programas"
            className="group relative inline-flex items-center gap-3 rounded-full bg-white/10 py-2 pr-6 pl-2 text-base font-semibold text-white ring-1 ring-white/20 transition hover:bg-white hover:text-navy-900"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition group-hover:-translate-x-0.5 group-hover:bg-cta group-hover:text-white">
              <Icon name="arrow" className="h-5 w-5 rotate-180" />
            </span>
            Volver a Programas
          </Link>
          <div className="relative mt-6">
            <Eyebrow chip light>
              Prevenir es cuidar · Caso de éxito
            </Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">Pan American Energy</h1>
          </div>
        </div>
      </section>

      {/* Un FIT, una oportunidad de vivir */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">Un FIT, una oportunidad de vivir</h2>
            <p className="mt-3 text-lg font-semibold text-cta">Prevención en ámbitos laborales con impacto real.</p>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-900/70">
              <p>
                En 2024, la Fundación GEDYT lanzó <strong className="text-navy-900">“Prevenir es cuidar”</strong>, el primer programa de prevención y
                detección temprana del cáncer de colon diseñado especialmente para entornos laborales. La iniciativa tiene como objetivo reducir la incidencia
                y la mortalidad de esta enfermedad a través de tres pilares clave:{" "}
                <strong className="text-navy-900">educación, acceso al diagnóstico y seguimiento activo</strong>, dentro de un plan ambicioso y
                cuidadosamente diseñado.
              </p>
              <p>
                El punto de partida fue una alianza con <strong className="text-navy-900">Pan American Energy</strong>, donde más de{" "}
                <strong className="text-navy-900">160 trabajadores mayores de 50 años</strong> participaron de forma voluntaria en una campaña interna de
                tamizaje utilizando el <strong className="text-navy-900">test de sangre oculta en materia fecal (FIT Q)</strong>.
              </p>
              <p>
                Lo que comenzó como una charla virtual informativa para toda la comunidad laboral se transformó rápidamente en una{" "}
                <strong className="text-navy-900">política concreta de salud preventiva</strong>, que hoy ya está contribuyendo a salvar vidas.
              </p>
            </div>
          </div>
          <div className="reveal relative pb-8 sm:pr-8">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
              <Image src="/images/programa-pae.webp" alt="Una persona abraza a otra por la espalda" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-1000 hover:scale-105" />
            </div>
            <div className="absolute right-0 bottom-0 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-navy-900/5">
              <p className="text-3xl font-extrabold text-cta">
                <CountUp value="+160" />
              </p>
              <p className="text-xs font-semibold text-navy-900/60">trabajadores mayores de 50 años</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-6 py-20 text-white sm:px-12 sm:py-24">
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full border-[48px] border-white/5" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-accent">1 empresa, 1 programa, un nuevo modelo de salud preventiva</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {cifras.map((c, i) => (
                <div key={c.label} className={`reveal-pop rounded-3xl bg-white/[0.07] p-6 ring-1 ring-white/10 ${i === 0 ? "col-span-2" : ""}`}>
                  <p className="text-4xl font-extrabold tracking-tight text-sky-accent sm:text-5xl">
                    <CountUp value={c.value} />
                  </p>
                  <p className="mt-2 text-sm text-white/75">{c.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 rounded-2xl bg-[#f5a81c]/15 px-5 py-3 text-center text-sm font-semibold text-[#ffd27a] ring-1 ring-[#f5a81c]/30">
              1 caso de displasia de alto grado detectado
            </p>
          </div>
          <div className="reveal">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Resultados que marcan la diferencia</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-white/80">
              <p>
                De las personas evaluadas, 102 fueron candidatas a realizarse el test FIT Q, mientras que otras 15 fueron derivadas directamente a colonoscopía
                por criterios de alto riesgo.
              </p>
              <p>
                Entre los resultados, 16 tests FIT Q dieron positivo, lo que permitió actuar a tiempo y completar los estudios diagnósticos correspondientes.
              </p>
              <p>
                En total se realizaron 31 colonoscopías, que arrojaron hallazgos significativos: pólipos, lesiones sospechosas y, en un caso, una displasia de
                alto grado. Se trata de una lesión precancerosa que hoy se encuentra en seguimiento y tratamiento, con excelentes perspectivas.
              </p>
              <p>
                Detrás de estos números hay historias reales. Una de ellas es la de una persona que no sabía que tenía una lesión precancerosa.
              </p>
            </div>
            <p className="mt-6 text-xl font-extrabold text-sky-accent">Prevenir es intervenir antes.</p>
          </div>
        </div>
      </section>

      {/* Más que un test: una estrategia */}
      <section className="bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow>Más que un test: una estrategia</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Resultados que marcan la diferencia</h2>
            <p className="mt-4 text-lg text-navy-900/70">
              Lo innovador de esta iniciativa no fue únicamente la realización del test, sino el enfoque integral con el que se diseñó e implementó el
              programa. Desde el comienzo se trabajó en tres ejes fundamentales:
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ejes.map((e, i) => (
              <article key={e.text} className="team-card reveal-pop relative overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-navy-900/5">
                <span className="team-sheen" aria-hidden />
                <span className="pointer-events-none absolute -top-3 right-3 text-7xl font-extrabold text-brand-50" aria-hidden>
                  0{i + 1}
                </span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-cta transition group-hover:bg-cta group-hover:text-white">
                  <Icon name={e.icon} className="h-7 w-7" />
                </span>
                <p className="relative mt-6 leading-relaxed text-navy-900/75">{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Un modelo que vino para quedarse */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="reveal mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl shadow-navy-900/5 ring-1 ring-navy-900/5 sm:p-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Un modelo que vino para quedarse</h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-900/70">
              Esta experiencia marcó el inicio de un modelo replicable, escalable y adaptable a distintas realidades empresariales. Porque llevar la prevención
              y el cuidado de la salud a los espacios donde las personas pasan gran parte de su día también es una forma concreta de cuidar.
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-cta to-navy-800 p-8 text-white">
            <p className="text-xl font-extrabold">¿Querés implementar este programa en tu empresa?</p>
            <p className="mt-3 text-white/85">Una empresa comprometida puede significar cientos de vidas con más oportunidades de prevención.</p>
            <a
              href={`mailto:${programasEmail}?subject=${encodeURIComponent("Prevenir es cuidar en mi empresa")}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy-900 shadow-lg transition hover:bg-brand-50"
            >
              <Icon name="mail" className="h-4 w-4" /> Escribinos
            </a>
            <p className="mt-3 text-sm break-all text-white/75">{programasEmail}</p>
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
