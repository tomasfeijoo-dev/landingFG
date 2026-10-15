import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import { FloatingDonate, HeroVideo, ImpactSlider, Momentos, Participacion } from "@/components/gala/GalaInteractive";
import { Eyebrow } from "@/components/ui";
import { nocheAzul } from "@/lib/content";

const script = Great_Vibes({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Gala Noche Azul",
  description: "Noche Azul, la gala a beneficio de Fundación Gedyt: 15 de septiembre de 2026 en el Alvear Palace Hotel. Juntos podemos prevenir el cáncer de colon.",
};

const objetivos = [
  { label: "Escalar el Fondo Nacional de Tamizaje", icon: "chart" },
  { label: "Aumentar el acceso de más personas a controles", icon: "users" },
  { label: "Fortalecer alianzas con empresas líderes", icon: "handshake" },
  { label: "Posicionar la prevención como prioridad pública", icon: "institution" },
];

const datos = [
  { icon: "calendar", label: "15 de septiembre 2026", sub: "20 hs" },
  { icon: "pin", label: "Alvear Palace Hotel", sub: "Av. Alvear 1891, CABA" },
  { icon: "music", label: "Baglietto — Vitale", sub: "Música en vivo" },
];

const fotos = Array.from({ length: 8 }, (_, i) => ({
  src: `/gala/momento-${i + 1}.webp`,
  alt: `Momento de una edición anterior de la Noche Azul (${i + 1})`,
}));

function SectionTitle({ eyebrow, children, text }: { eyebrow: string; children: React.ReactNode; text?: string }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">{children}</h2>
      {text && <p className="mt-4 text-lg text-navy-900/65">{text}</p>}
    </div>
  );
}

export default function GalaPage() {
  return (
    <>
      <FloatingDonate />

      {/* Banner: video de la Noche Azul 2026 */}
      <HeroVideo>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/85">Gala a beneficio</p>
        <h1 className={`${script.className} mt-2 text-7xl leading-[1.1] drop-shadow-lg sm:text-8xl lg:text-9xl`}>
          Noche Azul <span className="align-top font-sans text-2xl font-semibold tracking-[0.2em] text-sky-accent sm:text-3xl">2026</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg font-medium uppercase tracking-[0.15em] text-white/90">Juntos podemos prevenir el cáncer de colon</p>
      </HeroVideo>

      {/* Datos clave, montados sobre el borde del banner */}
      <section className="relative z-10 px-4 sm:px-6">
        <div className="reveal mx-auto -mt-10 grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-navy-900/15 ring-1 ring-navy-900/5 sm:-mt-14 md:grid-cols-[1fr_1fr_1fr_auto]">
          {datos.map((d) => (
            <div key={d.label} className="flex items-center gap-4 border-b border-navy-900/5 px-6 py-5 md:border-r md:border-b-0">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-brand-50 text-cta">
                <Icon name={d.icon} className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-bold text-navy-900">{d.label}</span>
                <span className="text-sm text-navy-900/60">{d.sub}</span>
              </span>
            </div>
          ))}
          <div className="flex items-center justify-center p-5">
            <a href="#dona" className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-cta px-6 py-3.5 font-semibold text-white shadow-lg shadow-cta/25 transition hover:bg-cta-hover">
              <Icon name="heart" className="h-4 w-4" /> Doná
            </a>
          </div>
        </div>
      </section>

      {/* Una noche que cambia historias */}
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative pb-10 sm:pr-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
              <Image src="/banners/noche-azul-brindis.webp" alt="Brindis en la gala Noche Azul" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-1000 hover:scale-105" />
            </div>
            <div className="float-slow absolute right-0 bottom-0 w-48 overflow-hidden rounded-2xl shadow-2xl ring-[6px] ring-white sm:w-60">
              <div className="relative aspect-[3/2]">
                <Image src="/images/equipo-gala.webp" alt="Equipo de la Fundación en la gala" fill sizes="240px" className="object-cover" />
              </div>
            </div>
            <div className="absolute -top-5 -left-3 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-navy-900/5 sm:-left-6">
              <p className="text-3xl font-extrabold text-cta">
                <CountUp value="90%" />
              </p>
              <p className="max-w-[11rem] text-xs font-semibold text-navy-900/60">de los casos se curan si se detectan a tiempo</p>
            </div>
          </div>
          <div className="reveal">
            <Eyebrow chip>La Noche Azul</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">Una noche que cambia historias</h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-900/70">
              La Noche Azul no es solo un evento. A lo largo de los años se convirtió en uno de los encuentros más relevantes en prevención de Argentina. Un
              espacio donde <strong className="text-navy-900">la salud, el liderazgo y el compromiso se transforman en acción concreta</strong>.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-900/70">
              Cada edición reúne a líderes del sector salud, empresarios, figuras públicas y tomadores de decisión con un objetivo común: hacer que más personas
              accedan a la detección temprana del cáncer de colon.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#dona" className="group inline-flex items-center justify-center gap-2 rounded-full bg-cta px-7 py-3.5 font-semibold text-white shadow-lg shadow-cta/25 transition hover:bg-cta-hover">
                <Icon name="heart" className="h-4 w-4" /> Quiero ayudar
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#participa" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-semibold text-navy-900 ring-1 ring-navy-900/15 transition hover:ring-cta">
                Cómo participar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Lo que impulsa cada edición">Nuestros objetivos</SectionTitle>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {objetivos.map((o, i) => (
              <div key={o.label} className="team-card reveal-pop group relative overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-navy-900/5">
                <span className="team-sheen" aria-hidden />
                <span className="pointer-events-none absolute -top-3 right-3 text-7xl font-extrabold text-brand-50" aria-hidden>
                  0{i + 1}
                </span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-cta transition group-hover:bg-cta group-hover:text-white">
                  <Icon name={o.icon} className="h-7 w-7" />
                </span>
                <p className="relative mt-6 text-lg font-bold leading-snug text-navy-900">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artistas */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="reveal mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white shadow-2xl shadow-navy-900/20 lg:grid-cols-2">
          <div className="group relative aspect-square lg:aspect-auto lg:min-h-[30rem]">
            <Image src="/gala/baglietto-vitale.webp" alt="Juan Carlos Baglietto y Lito Vitale" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover grayscale transition duration-1000 group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-900/80 max-lg:bg-gradient-to-t" />
          </div>
          <div className="relative flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-14">
            <svg className="pointer-events-none absolute -top-6 -right-10 hidden h-48 w-96 md:block" viewBox="0 0 300 160" aria-hidden>
              <path d="M10 -10 C 60 90, 170 110, 210 60 C 240 20, 200 -5, 180 25 C 155 65, 230 120, 320 100" stroke="#3fa5d4" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.5" />
            </svg>
            <Eyebrow chip light>
              Participación de
            </Eyebrow>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Baglietto <span className="text-sky-accent">—</span> Vitale
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/80">
              Una noche que combina impacto, cultura y propósito, donde la emoción también se convierte en acción. Los maestros de la música argentina nos
              acompañan en esta velada inolvidable.
            </p>
            <p className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 text-sm ring-1 ring-white/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-accent" />
              </span>
              Presentación exclusiva en vivo
            </p>
          </div>
        </div>
      </section>

      {/* Momentos */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Galería"
            text="Cada edición de La Noche Azul reúne a referentes de la salud, el mundo empresarial y figuras públicas en una noche irrepetible. Así se vivieron las galas anteriores."
          >
            Momentos que ya vivimos
          </SectionTitle>
          <div className="mt-12">
            <Momentos photos={fotos} />
          </div>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={nocheAzul.galleryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3 font-semibold text-white transition hover:bg-navy-950"
            >
              Ver la galería completa <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a
              href={nocheAzul.pressUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-semibold text-navy-900 ring-1 ring-navy-900/15 transition hover:ring-cta"
            >
              Cobertura de prensa
            </a>
          </div>
        </div>
      </section>

      {/* Doná: simulador de impacto */}
      <section id="dona" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-6 py-20 text-white sm:px-12 sm:py-24">
        <Image src="/images/abrazo.webp" alt="" fill sizes="100vw" className="object-cover object-[70%_center] opacity-15 grayscale" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full border-[48px] border-white/5" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <Eyebrow chip light>
              Tu aporte cuenta
            </Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">Sumate a la Noche Azul desde donde estés</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Lo recaudado se destina al Fondo Común de Prevención y Detección Temprana de Cáncer de Colon, para que más personas accedan a un diagnóstico a
              tiempo.
            </p>
            <ul className="mt-8 space-y-3 text-white/85">
              {["Donación online segura", "Aporte único o mensual", "Deducible del impuesto a las ganancias"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-accent/20 text-sky-accent">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal-pop">
            <ImpactSlider />
          </div>
        </div>
      </section>

      {/* Participación */}
      <section id="participa" className="scroll-mt-24 bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="¿Querés ser parte?">Elegí cómo participar</SectionTitle>
          <div className="mt-10">
            <Participacion />
          </div>
        </div>
      </section>

      <div id="gala-final">
        <DonateBanner />
      </div>
    </>
  );
}
