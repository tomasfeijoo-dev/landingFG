import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cumbre CCR360° · Edición 2024",
  description:
    "Primera Cumbre Interamericana de Cáncer de Colon: 14 de noviembre de 2024 en el Centro Cultural de la Ciencia, Buenos Aires. Organizan Fundación Gedyt y la SIED.",
};

// Textos tal cual figuran en fundaciongedyt.org.ar/cumbre-interamericana-ccr
const ticketsUrl = "https://www.eventbrite.com.ar/e/primera-cumbre-interamericana-de-cancer-de-colon-tickets-1067505310119";

const datos = [
  { icon: "pin", label: "Lugar", value: "Centro Cultural de la Ciencia" },
  { icon: "calendar", label: "Fecha", value: "14 de noviembre" },
  { icon: "clock", label: "Horario", value: "08.00 A.M. - 16.00 P.M." },
];

function CcrLogo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-stretch gap-4 sm:gap-5">
      <span
        className={`flex items-center text-4xl font-light tracking-[0.08em] [writing-mode:vertical-rl] rotate-180 sm:text-5xl ${light ? "text-white" : "text-navy-900"}`}
      >
        2024
      </span>
      <span className="w-[3px] rounded-full bg-[#f5a81c]" />
      <div>
        <p className="text-5xl leading-none font-extrabold tracking-tight sm:text-7xl">
          <span className={light ? "text-white" : "text-navy-900"}>CCR</span> <span className="text-[#f5a81c]">360°</span>
        </p>
        <p className={`mt-3 text-lg leading-tight font-medium uppercase tracking-[0.06em] sm:text-2xl ${light ? "text-white/90" : "text-navy-900/80"}`}>
          Primera Cumbre
          <br />
          Interamericana
          <br />
          <span className="font-light">de Cáncer de Colon</span>
        </p>
      </div>
    </div>
  );
}

export default function Cumbre2024Page() {
  return (
    <>
      {/* Encabezado */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full border-[40px] border-white/5" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 sm:px-12 lg:grid-cols-2 lg:px-16 lg:py-20">
          <div className="reveal">
            <Link href="/cumbre" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white">
              <Icon name="arrow" className="h-4 w-4 rotate-180" /> Volver a Cumbre
            </Link>
            <h1 className="sr-only">CCR 360° — Primera Cumbre Interamericana de Cáncer de Colon 2024</h1>
            <CcrLogo light />
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/20">
                <Icon name="calendar" className="h-4 w-4 text-[#f5a81c]" /> 14 de noviembre
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/20">
                <Icon name="pin" className="h-4 w-4 text-[#f5a81c]" /> Buenos Aires, Argentina
              </span>
            </div>
          </div>
          <div className="reveal-pop relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image src="/images/cumbre2024-publico.webp" alt="Público durante la Cumbre" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover transition duration-1000 hover:scale-105" />
            </div>
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white px-5 py-4 text-navy-900 shadow-xl sm:-left-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cta">Primera edición</p>
              <p className="mt-1 font-extrabold">Cumbre Interamericana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Presentación */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative aspect-[3/2] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/15">
            <Image src="/images/cumbre2024-auditorio.webp" alt="Auditorio del Centro Cultural de la Ciencia" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-1000 hover:scale-105" />
          </div>
          <div className="reveal">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold uppercase tracking-[0.08em] text-navy-900">
              <span className="inline-flex items-center gap-2">
                <Icon name="calendar" className="h-4 w-4 text-[#f5a81c]" /> 14 de noviembre
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="pin" className="h-4 w-4 text-[#f5a81c]" /> Buenos Aires, Argentina
              </span>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-navy-900/75">
              La incidencia del CCR está aumentando alarmantemente en nuestra región, especialmente entre poblaciones más jóvenes. Esta tendencia subraya la
              necesidad urgente de adoptar un enfoque más proactivo y centrado en la prevención, detección temprana y tratamiento efectivo.{" "}
              <strong className="text-navy-900">
                La Cumbre Interamericana de CCR 360 es nuestra respuesta organizativa a este desafío
              </strong>
              , proporcionando una plataforma única para el intercambio de conocimientos y la promoción de mejores prácticas entre especialistas.
            </p>
          </div>
        </div>
      </section>

      {/* Un evento / Por qué asistir */}
      <section className="bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="team-card reveal-pop relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-navy-900/5 sm:p-10">
            <span className="team-sheen" aria-hidden />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-cta">
              <Icon name="calendar" className="h-7 w-7" />
            </span>
            <h2 className="relative mt-6 text-2xl font-extrabold tracking-tight text-navy-900">Un evento. Un día. Un lugar. Una gran oportunidad.</h2>
            <p className="relative mt-4 leading-relaxed text-navy-900/70">
              Este evento está diseñado para convocar a expertos y profesionales de la salud de todo el continente con el objetivo de discutir los últimos
              avances y desafíos en la prevención, diagnóstico y tratamiento del cáncer de colon.
            </p>
            <p className="relative mt-4 leading-relaxed text-navy-900/70">
              La Cumbre se establece como una plataforma de intercambio de conocimiento, experiencias y estrategias entre gastroenterólogos, oncólogos,
              investigadores y otros especialistas clave en las tareas de prevención y detección de esta enfermedad.
            </p>
          </article>
          <article className="team-card reveal-pop relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 text-white sm:p-10">
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#f5a81c]">
              <Icon name="users" className="h-7 w-7" />
            </span>
            <h2 className="relative mt-6 text-2xl font-extrabold tracking-tight">¿Por qué asistir?</h2>
            <p className="relative mt-4 leading-relaxed text-white/80">
              A través de una serie de conferencias, paneles de discusión y talleres prácticos, buscamos fomentar la colaboración interinstitucional y promover
              innovaciones que mejoren la atención y los resultados para los pacientes a nivel regional.
            </p>
            <p className="relative mt-4 leading-relaxed text-white/80">
              Este evento representa una oportunidad única para que líderes en la materia compartan insights y desarrollen nuevas colaboraciones que puedan
              traducirse en avances tangibles en la lucha contra el cáncer de colon en América.
            </p>
          </article>
        </div>
      </section>

      {/* Una gran oportunidad */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="reveal mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/15 lg:grid-cols-2">
          <div className="relative bg-gradient-to-br from-sky-accent to-cta px-6 py-12 text-white sm:px-12 lg:px-14">
            <div className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full border-[32px] border-white/10" aria-hidden />
            <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">
              Una <span className="text-[#f5a81c]">gran</span> oportunidad
            </h2>
            <ul className="relative mt-8 space-y-4">
              {datos.map((d) => (
                <li key={d.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/15">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/70">{d.label}</span>
                    <span className="font-bold">{d.value}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={ticketsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-navy-900 shadow-lg shadow-black/20 transition hover:bg-brand-50"
            >
              Más información y tickets de acceso <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
          <div className="flex flex-col justify-center bg-white px-6 py-12 sm:px-12 lg:px-14">
            <CcrLogo />
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-navy-900/50">Organizan</p>
            <div className="mt-4 flex flex-wrap items-center gap-8">
              <Image src="/logo.png" alt="Fundación Gedyt" width={837} height={192} className="h-10 w-auto sm:h-12" />
              <div className="flex items-center gap-3">
                <Image src="/logos/sied.webp" alt="SIED" width={392} height={288} className="h-14 w-auto mix-blend-multiply sm:h-16" />
                <span className="max-w-[11rem] text-xs font-semibold leading-snug text-navy-900/70">Sociedad Interamericana de Endoscopía Digestiva</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
