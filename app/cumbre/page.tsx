import type { Metadata } from "next";
import Image from "next/image";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import { homeLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cumbre CCR360°",
  description: "Cumbre Interamericana de CCR 360: especialistas compartiendo avances y estrategias de prevención, diagnóstico y tratamiento del cáncer de colon.",
};

const cumbreEmail = "crcsummit@fundaciongedyt.org.ar";

const pilares = [
  { label: "Colaboración interinstitucional", icon: "building" },
  { label: "Talleres", icon: "graduation" },
  { label: "Paneles", icon: "users" },
  { label: "Networking científico", icon: "sparkle" },
];

// Arcos de la gráfica de la Cumbre (azul y amarillo), dibujados detrás de la foto.
// Cada arco "crece" de abajo hacia arriba al entrar en pantalla.
function Arches() {
  const arcs = [
    { x: 30, w: 440, c: "#f5a81c" },
    { x: 90, w: 320, c: "#01405c" },
    { x: 150, w: 200, c: "#f5a81c" },
    { x: 210, w: 80, c: "#015f86" },
  ];
  return (
    <svg viewBox="0 0 500 560" preserveAspectRatio="xMaxYMid meet" className="arches pointer-events-none absolute inset-y-0 right-0 h-full w-[78%]" aria-hidden>
      {arcs.map((a, i) => (
        <path
          key={a.x}
          d={`M${a.x} 560 V${a.w / 2 + 40} a${a.w / 2} ${a.w / 2} 0 0 1 ${a.w} 0 V560`}
          fill="none"
          stroke={a.c}
          strokeWidth="22"
          pathLength={1}
          style={{ animationDelay: `${i * 120}ms` }}
        />
      ))}
    </svg>
  );
}

export default function CumbrePage() {
  return (
    <>
      {/* Presentación con el logo */}
      <section className="px-4 pt-6 sm:px-6 sm:pt-10">
        <div className="reveal relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f1f4f7] via-white to-brand-50 px-6 py-14 ring-1 ring-brand-100 sm:px-12 lg:grid-cols-2 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-10 -bottom-14 h-40 w-40 rounded-full border-[24px] border-[#f5a81c]/80" aria-hidden />
          <Image src="/images/ccr360-logo.webp" alt="CCR 360° · Segunda Cumbre Interamericana de Cáncer de Colon" width={824} height={262} priority className="relative h-auto w-full max-w-lg mix-blend-multiply" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cta ring-1 ring-brand-100">
              <span className="h-1.5 w-1.5 rounded-full bg-cta" />
              Cumbre
            </span>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">Cumbre interamericana de CCR 360</h1>
            <p className="mt-5 text-lg text-navy-900/75">
              La <strong className="text-navy-900">Cumbre Interamericana de CCR 360</strong> convoca a especialistas para compartir avances y{" "}
              <strong className="text-navy-900">estrategias de prevención, diagnóstico y tratamiento</strong> con foco regional.
            </p>
          </div>
        </div>
      </section>

      {/* Por qué asistir */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Por qué asistir</h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-900/75">
              Asistir a la <strong className="text-navy-900">Cumbre Interamericana de CCR 360</strong> es una oportunidad única para conectar con profesionales y
              líderes del ámbito científico en un espacio de <strong className="text-navy-900">colaboración interinstitucional</strong>. A través de{" "}
              <strong className="text-navy-900">talleres, paneles y actividades de networking</strong>, los participantes podrán compartir experiencias, fortalecer
              alianzas y generar nuevas perspectivas para el avance de la investigación y la innovación en la región.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {pilares.map((p) => (
                <div key={p.label} className="team-card reveal-pop group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-white p-4 ring-1 ring-navy-900/5">
                  <span className="team-sheen" aria-hidden />
                  <span className="relative flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-cta transition group-hover:bg-cta group-hover:text-white">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <span className="relative text-sm font-bold leading-tight text-navy-900">{p.label}</span>
                </div>
              ))}
            </div>
            <a
              href={homeLinks.cumbre}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3.5 font-semibold text-white shadow-lg shadow-cta/25 transition hover:bg-cta-hover"
            >
              Edición 2024 <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
          <div className="reveal relative min-h-[24rem] sm:min-h-[30rem]">
            <Arches />
            <div className="absolute top-1/2 left-0 w-[82%] -translate-y-1/2 overflow-hidden rounded-[1.75rem] shadow-2xl shadow-navy-900/30 ring-[6px] ring-white">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/cumbre-auditorio-hd.webp"
                  alt="Auditorio durante la Cumbre Interamericana de CCR 360"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute bottom-2 left-6 z-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-navy-900/5 sm:bottom-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5a81c]/15 text-[#c47f00]">
                <Icon name="users" className="h-5 w-5" />
              </span>
              <span className="text-sm leading-tight">
                <strong className="block text-navy-900">Primera Cumbre</strong>
                <span className="text-navy-900/60">Edición 2024</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Próxima Cumbre */}
      <section className="px-4 sm:px-6">
        <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-6 py-16 text-center text-white shadow-2xl shadow-navy-900/20 sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cta/40 blur-sm" aria-hidden />
          <div className="pointer-events-none absolute -right-10 -bottom-16 h-56 w-56 rounded-full border-[32px] border-[#f5a81c]/60" aria-hidden />
          <span className="relative inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-accent ring-1 ring-white/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-accent" />
            </span>
            Próximamente
          </span>
          <h2 className="relative mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">La próxima Cumbre ya está en marcha</h2>
          <p className="relative mt-3 text-lg text-white/85">
            Muy pronto anunciaremos la <strong className="text-white">fecha y la agenda</strong>.
          </p>
          <p className="relative mx-auto mt-5 max-w-3xl text-white/80">
            Un nuevo encuentro para seguir impulsando el <strong className="text-white">diálogo, la evidencia científica y la acción conjunta</strong> en la{" "}
            <strong className="text-white">prevención, detección temprana y abordaje integral del cáncer de colon</strong>.
          </p>
          <a
            href={`mailto:${cumbreEmail}`}
            className="relative mt-10 inline-flex flex-col items-center gap-1 rounded-2xl bg-white/10 px-6 py-4 ring-1 ring-white/20 backdrop-blur transition hover:bg-white hover:text-navy-900 sm:flex-row sm:gap-2"
          >
            <span className="flex items-center gap-2 text-white/80">
              <Icon name="mail" className="h-4 w-4" />
              Para más información escribir a
            </span>
            <strong className="break-all">{cumbreEmail}</strong>
          </a>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
