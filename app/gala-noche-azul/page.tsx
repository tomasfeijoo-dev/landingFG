import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import Icon from "@/components/Icon";
import { FloatingDonate, ImpactSlider, Momentos, Objetivos, Participacion, Spotlight } from "@/components/gala/GalaInteractive";
import { donarOnlineUrl, nocheAzul } from "@/lib/content";

const script = Great_Vibes({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Gala Noche Azul",
  description: "Noche Azul, la gala a beneficio de Fundación Gedyt: 15 de septiembre de 2026 en el Alvear Palace Hotel. Juntos podemos prevenir el cáncer de colon.",
};

const objetivos = [
  { label: "Escalar el Fondo Nacional de Tamizaje", text: "Más recursos para llevar el tamizaje a cada vez más provincias y municipios.", icon: "chart" },
  { label: "Aumentar el acceso de más personas a controles", text: "Que la detección temprana llegue a quienes hoy no pueden acceder a un control.", icon: "users" },
  { label: "Fortalecer alianzas con empresas líderes", text: "Sumar organizaciones comprometidas con la salud de sus equipos y de la comunidad.", icon: "handshake" },
  { label: "Posicionar la prevención como prioridad pública", text: "Instalar el cáncer de colon en la agenda: se puede prevenir y curar.", icon: "institution" },
];

const datos = [
  { icon: "calendar", label: "15 de septiembre 2026", sub: "20 hs" },
  { icon: "pin", label: "Alvear Palace Hotel", sub: "Av. Alvear 1891, CABA" },
  { icon: "music", label: "Baglietto — Vitale", sub: "En vivo" },
];

const fotos = Array.from({ length: 8 }, (_, i) => ({
  src: `/gala/momento-${i + 1}.webp`,
  alt: `Momento de una edición anterior de la Noche Azul (${i + 1})`,
}));

function Stars() {
  return (
    <>
      <div className="twinkle pointer-events-none absolute inset-0" aria-hidden />
      <div className="twinkle twinkle-2 pointer-events-none absolute inset-0" aria-hidden />
    </>
  );
}

function Kicker({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-sky-accent ${center ? "justify-center" : ""}`}>
      <span className="h-px w-8 bg-sky-accent" />
      {children}
      {center && <span className="h-px w-8 bg-sky-accent" />}
    </p>
  );
}

export default function GalaPage() {
  return (
    <div className="bg-[#050f2b] text-white">
      <FloatingDonate />

      {/* Hero: banner a todo el ancho, con zoom lento y estrellas */}
      <section className="relative overflow-hidden bg-[#103151]">
        <h1 className="sr-only">Gala a beneficio Noche Azul 2026 — Juntos podemos prevenir el cáncer de colon</h1>
        <div className="ken-burns">
          <Image
            src="/gala/banner-2026-v2.webp"
            alt="Gala a beneficio Noche Azul 2026. Juntos podemos prevenir el cáncer de colon. Alvear Palace Hotel — Av. Alvear 1891, CABA"
            width={1652}
            height={778}
            priority
            sizes="100vw"
            className="h-auto max-h-[85vh] min-h-[16rem] w-full object-cover"
          />
        </div>
        <Stars />
        <a href="#historia" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 sm:flex">
          Descubrí la noche
          <span className="cursor-bounce mt-1 flex h-9 w-6 justify-center rounded-full ring-2 ring-white/60">
            <span className="mt-1.5 h-2 w-1 rounded-full bg-white" />
          </span>
        </a>
      </section>

      {/* Datos clave */}
      <section className="relative z-10 -mt-px border-y border-white/10 bg-[#071a3d]">
        <div className="mx-auto grid max-w-6xl divide-white/10 sm:grid-cols-3 sm:divide-x">
          {datos.map((d) => (
            <div key={d.label} className="reveal flex items-center gap-4 px-6 py-6 sm:justify-center">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-sky-accent/15 text-sky-accent ring-1 ring-sky-accent/30">
                <Icon name={d.icon} className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-bold">{d.label}</span>
                <span className="text-sm text-white/60">{d.sub}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Una noche que cambia historias */}
      <section id="historia" className="relative scroll-mt-24 overflow-hidden px-6 py-24 sm:px-12 sm:py-32">
        <Stars />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/50 ring-1 ring-white/10">
              <Image src="/banners/noche-azul-brindis.webp" alt="Brindis en la gala Noche Azul" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-[1.5s] hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050f2b]/70 via-transparent to-transparent" />
            </div>
            <div className="float-slow absolute -right-4 -bottom-8 w-44 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-[#050f2b] sm:-right-8 sm:w-56">
              <div className="relative aspect-[3/2]">
                <Image src="/images/equipo-gala.webp" alt="Equipo de la Fundación en la gala" fill sizes="224px" className="object-cover" />
              </div>
            </div>
            <div className="absolute -top-6 -left-4 rounded-2xl bg-white px-5 py-4 text-navy-900 shadow-xl sm:-left-8">
              <p className="text-3xl font-extrabold text-cta">
                <CountUp value="90%" />
              </p>
              <p className="text-xs font-semibold text-navy-900/60">de los casos se curan si se detectan a tiempo</p>
            </div>
          </div>
          <div className="reveal">
            <Kicker>La Noche Azul</Kicker>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Una noche que <span className="bg-gradient-to-r from-sky-accent to-[#cfe0ff] bg-clip-text text-transparent">cambia historias</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              La Noche Azul no es solo un evento. A lo largo de los años se convirtió en uno de los encuentros más relevantes en prevención de Argentina. Un
              espacio donde la salud, el liderazgo y el compromiso se transforman en acción concreta.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              Cada edición reúne a líderes del sector salud, empresarios, figuras públicas y tomadores de decisión con un objetivo común: hacer que más personas
              accedan a la detección temprana del cáncer de colon.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#dona" className="group inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3.5 font-semibold text-white shadow-lg shadow-cta/30 transition hover:bg-cta-hover">
                <Icon name="heart" className="h-4 w-4" /> Quiero ayudar
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#participa" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/10">
                Cómo participar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#071a3d] to-[#050f2b] px-6 py-24 sm:px-12">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-cta/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-7xl">
          <div className="reveal text-center">
            <Kicker center>Lo que impulsa cada edición</Kicker>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">Nuestros objetivos</h2>
          </div>
          <div className="mt-14">
            <Objetivos items={objetivos} />
          </div>
        </div>
      </section>

      {/* Artistas */}
      <section className="relative overflow-hidden">
        <Spotlight className="mx-auto grid max-w-7xl items-center lg:grid-cols-2">
          <div className="reveal relative aspect-square overflow-hidden lg:min-h-[36rem]">
            <Image src="/gala/baglietto-vitale.webp" alt="Juan Carlos Baglietto y Lito Vitale" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover grayscale transition duration-1000 group-hover/spot:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050f2b] max-lg:bg-gradient-to-t" />
          </div>
          <div className="reveal relative z-20 px-6 py-16 sm:px-12 lg:px-16">
            <Kicker>Participación de</Kicker>
            <h2 className="mt-5 text-5xl font-light uppercase tracking-[0.06em] sm:text-7xl sm:tracking-[0.08em]">
              Baglietto
              <span className="block bg-gradient-to-r from-sky-accent to-white bg-clip-text font-extrabold text-transparent">Vitale</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
              Una noche que combina impacto, cultura y propósito, donde la emoción también se convierte en acción. Los maestros de la música argentina nos
              acompañan en esta velada inolvidable.
            </p>
            <p className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/[0.06] px-5 py-2.5 text-sm text-white/80 ring-1 ring-white/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-accent" />
              </span>
              Presentación exclusiva en vivo
            </p>
          </div>
        </Spotlight>
      </section>

      {/* Momentos */}
      <section className="relative py-24">
        <div className="reveal mx-auto max-w-3xl px-6 text-center">
          <Kicker center>Galería</Kicker>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">Momentos que ya vivimos</h2>
          <p className="mt-5 text-lg text-white/70">
            Cada edición de La Noche Azul reúne a referentes de la salud, el mundo empresarial y figuras públicas en una noche irrepetible. Así se vivieron las
            galas anteriores.
          </p>
        </div>
        <div className="mt-14">
          <Momentos photos={fotos} />
        </div>
        <div className="mt-12 flex flex-col justify-center gap-3 px-6 sm:flex-row">
          <a
            href={nocheAzul.galleryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-navy-900 transition hover:bg-brand-50"
          >
            Ver la galería completa <Icon name="arrow" className="h-4 w-4" />
          </a>
          <a
            href={nocheAzul.pressUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/10"
          >
            Cobertura de prensa
          </a>
        </div>
      </section>

      {/* Doná: calculadora de impacto */}
      <section id="dona" className="relative scroll-mt-24 overflow-hidden px-6 py-24 sm:px-12 sm:py-28">
        <Image src="/gala/cielo.webp" alt="" fill sizes="100vw" className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#050f2b]/90 via-[#0a2a5c]/70 to-cta/40" />
        <Stars />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <Kicker>Tu aporte cuenta</Kicker>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Sumate a la Noche Azul <span className="text-sky-accent">desde donde estés</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Lo recaudado se destina al Fondo Común de Prevención y Detección Temprana: tests, seguimiento médico y campañas para que el cáncer de colon se
              detecte a tiempo.
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
      <section id="participa" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-[#050f2b] to-[#0a2a5c] px-6 py-24 text-center sm:px-12">
        <Stars />
        <div className="relative">
          <div className="reveal">
            <Kicker center>¿Querés ser parte?</Kicker>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">Elegí cómo participar</h2>
          </div>
          <div className="mt-12">
            <Participacion />
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section id="gala-final" className="relative overflow-hidden px-6 py-24 text-center">
        <Stars />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-sky-accent/20 blur-3xl" aria-hidden />
        <p className={`${script.className} reveal relative mx-auto max-w-3xl text-5xl leading-tight sm:text-7xl`}>Porque juntos podemos prevenir el cáncer de colon.</p>
        <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={donarOnlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-9 py-4 font-semibold text-navy-900 shadow-lg shadow-black/30 transition hover:scale-105"
          >
            <Icon name="heart" className="h-5 w-5 text-cta" /> Doná ahora
            <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href={nocheAzul.reserveUrl} className="inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/10">
            Reservá tu lugar
          </a>
        </div>
      </section>
    </div>
  );
}
