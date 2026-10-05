import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
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

const subnav = [
  { href: "#la-noche-azul", label: "La Noche Azul" },
  { href: "#objetivos", label: "Objetivos" },
  { href: "#artistas", label: "Artistas" },
  { href: "#participacion", label: "Participación" },
];

function Stars() {
  return (
    <>
      <div className="twinkle pointer-events-none absolute inset-0" aria-hidden />
      <div className="twinkle twinkle-2 pointer-events-none absolute inset-0" aria-hidden />
    </>
  );
}

type Tone = "dark" | "sky" | "light";

function Title({ children, tone = "dark" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <div className="text-center">
      <h2 className={`text-2xl font-light uppercase tracking-[0.3em] sm:text-3xl ${tone === "dark" ? "text-white" : "text-navy-900"}`}>{children}</h2>
      <span className="mx-auto mt-5 block h-px w-24 bg-gradient-to-r from-transparent via-sky-accent to-transparent" />
    </div>
  );
}

export default function GalaPage() {
  return (
    <div className="bg-white pb-2">
      {/* Hero */}
      <section className="px-4 pt-6 sm:px-6 sm:pt-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#050f2b] text-white shadow-2xl shadow-navy-950/40">
          <Image src="/gala/cielo.webp" alt="" fill priority sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover" />
          <Stars />
          <div className="relative flex min-h-[34rem] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[38rem]">
            <Image src="/logo-white.png" alt="Fundación Gedyt" width={837} height={192} className="h-9 w-auto opacity-95 sm:h-11" />
            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.35em] text-white/85">Save the date</p>
            <span className="mt-3 h-px w-20 bg-white/40" />
            <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 text-lg font-medium uppercase tracking-[0.2em] sm:text-2xl">
              <Icon name="calendar" className="h-5 w-5 text-sky-accent" />
              15 de septiembre 2026 · 20 hs
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-white/75">Gala a beneficio</p>
            <h1 className={`${script.className} mt-2 bg-gradient-to-b from-white to-[#cfe0ff] bg-clip-text text-7xl leading-[1.15] text-transparent drop-shadow-[0_0_25px_rgba(143,208,240,0.35)] sm:text-9xl`}>
              Noche Azul
            </h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-white/85 sm:text-base">Juntos podemos prevenir el cáncer de colon</p>
            <p className="mt-4 flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-white/75">
              <Icon name="pin" className="h-4 w-4 flex-none" />
              Alvear Palace Hotel — Av. Alvear 1891, CABA
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={nocheAzul.reserveUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-navy-900 shadow-lg shadow-black/30 transition hover:bg-brand-50"
              >
                Reservá tu lugar <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a
                href={nocheAzul.modalidadesUrl}
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-3.5 font-semibold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20"
              >
                Ver modalidades de participación
              </a>
            </div>
          </div>
          {/* Navegación interna de la gala */}
          <nav className="relative flex flex-wrap justify-center gap-2 border-t border-white/10 px-4 py-4">
            {subnav.map((n) => (
              <a key={n.href} href={n.href} className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 transition hover:bg-white/10 hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

        {/* Una noche que cambia historias */}
        <section id="la-noche-azul" className="relative scroll-mt-28 bg-white px-6 py-20 sm:px-12 sm:py-24 lg:px-16">
          <Title tone="light">Una noche que cambia historias</Title>
          <div className="reveal mx-auto mt-12 grid max-w-5xl gap-8 text-lg leading-relaxed text-navy-900/75 md:grid-cols-2 md:divide-x md:divide-navy-900/10">
            <p>
              La Noche Azul no es solo un evento. A lo largo de los años se convirtió en uno de los encuentros más relevantes en prevención de Argentina. Un
              espacio donde la salud, el liderazgo y el compromiso se transforman en acción concreta.
            </p>
            <p className="md:pl-8">
              Cada edición reúne a líderes del sector salud, empresarios, figuras públicas y tomadores de decisión con un objetivo común: hacer que más
              personas accedan a la detección temprana del cáncer de colon.
            </p>
          </div>
        </section>

        {/* Nuestros objetivos */}
        <section id="objetivos" className="relative scroll-mt-28 mx-4 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-100 via-brand-50 to-[#cfe8f6] px-6 py-20 sm:mx-6 sm:px-12 sm:py-24 lg:px-16 xl:mx-auto xl:max-w-7xl">
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full border-[40px] border-white/60" aria-hidden />
          <Title tone="sky">Nuestros objetivos</Title>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {objetivos.map((o) => (
              <div
                key={o.label}
                className="reveal-pop group relative flex flex-col items-center gap-5 rounded-3xl bg-white px-5 py-8 text-center shadow-lg shadow-navy-900/5 ring-1 ring-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cta to-navy-800 text-white shadow-lg shadow-cta/30 transition group-hover:scale-110">
                  <Icon name={o.icon} className="h-8 w-8" />
                </span>
                <p className="text-sm font-bold uppercase leading-snug tracking-[0.12em] text-navy-900">{o.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Artistas */}
        <section id="artistas" className="relative scroll-mt-28 mx-4 mt-10 overflow-hidden rounded-[2rem] bg-[#050f2b] text-white sm:mx-6 xl:mx-auto xl:max-w-7xl">
          <Stars />
          <div className="relative grid items-center lg:grid-cols-2">
            <div className="reveal relative aspect-square overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[32rem]">
              <Image src="/gala/baglietto-vitale.webp" alt="Juan Carlos Baglietto y Lito Vitale" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover grayscale" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050f2b] max-lg:bg-gradient-to-t" />
            </div>
            <div className="reveal px-6 py-14 sm:px-12 lg:px-16">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-accent">Participación de</p>
              <h2 className="mt-4 text-5xl font-light uppercase tracking-[0.08em] sm:text-6xl">
                Baglietto
                <span className="block">— Vitale</span>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
                Una noche que combina impacto, cultura y propósito, donde la emoción también se convierte en acción. Los maestros de la música argentina nos
                acompañan en esta velada inolvidable.
              </p>
              <span className="mt-8 block h-px w-20 bg-sky-accent/60" />
              <p className="mt-6 flex items-center gap-2 italic text-white/70">
                <Icon name="music" className="h-4 w-4 not-italic text-sky-accent" />
                Presentación exclusiva en vivo
              </p>
            </div>
          </div>
        </section>

        {/* Momentos que ya vivimos */}
        <section className="relative bg-white px-6 py-20 sm:px-12 sm:py-24 lg:px-16">
          <Title tone="light">Momentos que ya vivimos</Title>
          <p className="reveal mx-auto mt-8 max-w-2xl text-center text-navy-900/70">
            Cada edición de La Noche Azul reúne a referentes de la salud, el mundo empresarial y figuras públicas en una noche irrepetible. Así se vivieron
            las galas anteriores.
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="reveal-pop group relative aspect-[10/11] overflow-hidden rounded-2xl shadow-lg shadow-navy-900/10">
                <Image
                  src={`/gala/momento-${i + 1}.webp`}
                  alt={`Momento de una edición anterior de la Noche Azul (${i + 1})`}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050f2b]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
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
        </section>

        {/* Participación */}
        <section id="participacion" className="relative scroll-mt-28 mx-4 overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#06143a] via-[#050f2b] to-[#0a2a5c] px-6 py-20 text-center text-white sm:mx-6 sm:px-12 sm:py-24 lg:px-16 xl:mx-auto xl:max-w-7xl">
          <Stars />
          <p className="reveal mx-auto max-w-2xl text-lg text-white/80">
            La Noche Azul convoca a todos aquellos que quieren ser parte del cambio. Empresas, organizaciones y personas que eligen acompañar una causa de alto
            impacto.
          </p>
          <p className={`${script.className} reveal mx-auto mt-8 max-w-3xl text-5xl leading-tight text-white sm:text-6xl`}>
            Porque juntos podemos prevenir el cáncer de colon.
          </p>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-white/90">¿Querés ser parte?</p>
          <a
            href={nocheAzul.reserveUrl}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 font-semibold text-navy-900 shadow-lg shadow-black/30 transition hover:bg-brand-50"
          >
            Reservá tu lugar <Icon name="arrow" className="h-4 w-4" />
          </a>
          <p className="mx-auto mt-4 max-w-lg text-xs text-white/55">
            * En caso de realizar la compra mediante Mercado Pago, solicitamos enviar el comprobante a{" "}
            <a href={`mailto:${nocheAzul.email}`} className="underline underline-offset-2 hover:text-white">
              {nocheAzul.email}
            </a>{" "}
            para acreditar correctamente a los asistentes.
          </p>

          <div className="reveal mx-auto mt-16 max-w-5xl rounded-3xl bg-white/[0.04] p-8 text-left ring-1 ring-white/10 backdrop-blur sm:p-10">
            <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-sky-accent">Un espacio para empresas y organizaciones</p>
            <div className="mt-8 grid gap-6 text-white/80 md:grid-cols-2">
              <div className="space-y-4">
                <p>
                  Empresas y organizaciones pueden sumarse a La Noche Azul como aliados estratégicos de una causa que trasciende una sola noche: impulsar la
                  prevención del cáncer de colon y contribuir a salvar vidas en Argentina.
                </p>
                <p>
                  Ser parte de esta iniciativa significa integrar una red de organizaciones comprometidas con generar un impacto concreto en la salud de la
                  comunidad, promoviendo el acceso a la prevención, la detección temprana y la concientización.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  La Noche Azul reúne a referentes del sistema de salud, empresas, líderes de opinión y decisores en un espacio de encuentro, articulación y
                  compromiso, donde cada alianza fortalece una misión compartida y se transforma en acciones que continúan mucho después del evento.
                </p>
                <p>
                  Para conocer las distintas formas de acompañar esta iniciativa, comunicate a{" "}
                  <a href={`mailto:${nocheAzul.email}`} className="font-semibold text-white underline underline-offset-2">
                    {nocheAzul.email}
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a
                href={nocheAzul.modalidadesUrl}
                className="inline-flex items-center gap-2 rounded-full bg-sky-accent px-8 py-3.5 font-semibold text-navy-950 transition hover:bg-white"
              >
                Ver modalidades de participación <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      <DonateBanner />
    </div>
  );
}
