import type { Metadata } from "next";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import Icon from "@/components/Icon";
import VideoBanner from "@/components/gala/VideoBanner";
import { FloatingDonate, ImpactSlider, Momentos, Objetivos, Participacion, Spotlight } from "@/components/gala/GalaInteractive";
import { donarOnlineUrl, nocheAzul } from "@/lib/content";

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

const artistas = [
  { name: "Juan Carlos Baglietto", image: "/gala/baglietto.webp", position: "60% 25%" },
  { name: "Julia Zenko", image: "/gala/zenko.webp", position: "40% 20%" },
  { name: "Patricia Sosa", image: "/gala/sosa.webp", position: "50% 25%" },
];

const datos = [
  { icon: "calendar", label: "15 de septiembre 2026", sub: "20 hs" },
  { icon: "pin", label: "Alvear Palace Hotel", sub: "Av. Alvear 1891, CABA" },
  { icon: "music", label: "Baglietto · Zenko · Sosa", sub: "En vivo" },
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

function Kicker({ children, center = false, light = false }: { children: React.ReactNode; center?: boolean; light?: boolean }) {
  const line = light ? "bg-cta" : "bg-sky-accent";
  return (
    <p className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] ${light ? "text-cta" : "text-sky-accent"} ${center ? "justify-center" : ""}`}>
      <span className={`h-px w-8 ${line}`} />
      {children}
      {center && <span className={`h-px w-8 ${line}`} />}
    </p>
  );
}

export default function GalaPage() {
  return (
    <div className="bg-white text-navy-900">
      <FloatingDonate />

      {/* Hero: video de la gala con el logo de la Noche Azul */}
      <section className="relative overflow-hidden bg-[#103151]">
        <h1 className="sr-only">Gala a beneficio Noche Azul 2026 — Juntos podemos prevenir el cáncer de colon</h1>
        <VideoBanner />
        <Stars />
      </section>

      {/* Datos clave */}
      <section className="relative z-10 -mt-px bg-navy-900 text-white">
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
      <section id="historia" className="relative scroll-mt-24 overflow-hidden bg-white px-6 py-24 sm:px-12 sm:py-32">
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/25">
              <Image src="/banners/noche-azul-brindis.webp" alt="Brindis en la gala Noche Azul" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-[1.5s] hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
            </div>
            <div className="float-slow absolute -right-4 -bottom-8 w-44 overflow-hidden rounded-2xl shadow-2xl ring-[6px] ring-white sm:-right-8 sm:w-56">
              <div className="relative aspect-[3/2]">
                <Image src="/images/equipo-gala.webp" alt="Equipo de la Fundación en la gala" fill sizes="224px" className="object-cover" />
              </div>
            </div>
            <div className="absolute -top-6 -left-4 rounded-2xl bg-white px-5 py-4 text-navy-900 shadow-xl ring-1 ring-navy-900/5 sm:-left-8">
              <p className="text-3xl font-extrabold text-cta">
                <CountUp value="90%" />
              </p>
              <p className="text-xs font-semibold text-navy-900/60">de los casos se curan si se detectan a tiempo</p>
            </div>
          </div>
          <div className="reveal">
            <Kicker light>La Noche Azul</Kicker>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-5xl">
              Una noche que <span className="bg-gradient-to-r from-cta to-sky-accent bg-clip-text text-transparent">cambia historias</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-900/70">
              La Noche Azul no es solo un evento. A lo largo de los años se convirtió en uno de los encuentros más relevantes en prevención de Argentina. Un
              espacio donde la salud, el liderazgo y el compromiso se transforman en acción concreta.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy-900/70">
              Cada edición reúne a líderes del sector salud, empresarios, figuras públicas y tomadores de decisión con un objetivo común: hacer que más personas
              accedan a la detección temprana del cáncer de colon.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#dona" className="group inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3.5 font-semibold text-white shadow-lg shadow-cta/30 transition hover:bg-cta-hover">
                <Icon name="heart" className="h-4 w-4" /> Quiero ayudar
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#participa" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-navy-900 ring-1 ring-navy-900/15 transition hover:ring-cta">
                Cómo participar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-6 py-24 text-white sm:px-12">
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
      <section className="relative overflow-hidden bg-brand-50/70 px-6 py-24 sm:px-12">
        <div className="relative mx-auto max-w-7xl">
          <div className="reveal mx-auto max-w-3xl text-center">
            <Kicker center light>Participación de</Kicker>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">El show de la noche</h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-900/70">
              Una noche que combina impacto, cultura y propósito, donde la emoción también se convierte en acción. Los grandes de la música argentina nos
              acompañaron en esta velada inolvidable.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {artistas.map((a) => (
              <Spotlight key={a.name} className="reveal-pop overflow-hidden rounded-[2rem] text-white shadow-xl shadow-navy-900/15">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={a.image}
                    alt={a.name}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover grayscale transition duration-1000 group-hover/spot:scale-105 group-hover/spot:grayscale-0"
                    style={{ objectPosition: a.position }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 z-20 p-6">
                    <p className="text-2xl font-extrabold leading-tight">{a.name}</p>
                    <span className="mt-2 block h-0.5 w-10 bg-sky-accent transition-all duration-500 group-hover/spot:w-24" />
                  </div>
                </div>
              </Spotlight>
            ))}
          </div>
          <p className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm text-navy-900/80 shadow-sm ring-1 ring-navy-900/5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-accent" />
            </span>
            Presentación exclusiva en vivo
          </p>
        </div>
      </section>

      {/* Momentos */}
      <section className="relative bg-white py-24">
        <div className="reveal mx-auto max-w-3xl px-6 text-center">
          <Kicker center light>Galería</Kicker>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">Momentos que ya vivimos</h2>
          <p className="mt-5 text-lg text-navy-900/70">
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
      </section>

      {/* Doná: calculadora de impacto */}
      <section id="dona" className="relative scroll-mt-24 overflow-hidden px-6 py-24 text-white sm:px-12 sm:py-28">
        <Image src="/gala/cielo.webp" alt="" fill sizes="100vw" className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-navy-800/70" />
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
      <section id="participa" className="relative scroll-mt-24 overflow-hidden bg-brand-50/70 px-6 py-24 text-center sm:px-12">
        <div className="relative">
          <div className="reveal">
            <Kicker center light>¿Querés ser parte?</Kicker>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">Elegí cómo participar</h2>
          </div>
          <div className="mt-12">
            <Participacion />
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section id="gala-final" className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-6 py-24 text-center text-white">
        <Stars />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-sky-accent/20 blur-3xl" aria-hidden />
        <p className="reveal relative mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Porque juntos podemos <span className="text-sky-accent">prevenir el cáncer de colon.</span>
        </p>
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
