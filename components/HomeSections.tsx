import Image from "next/image";
import ArgentinaMap from "@/components/ArgentinaMap";
import CountUp from "@/components/CountUp";
import Icon from "@/components/Icon";
import InterestLink from "@/components/InterestLink";
import LogoMarquee from "@/components/LogoMarquee";
import { ButtonLink } from "@/components/ui";
import { homeLinks } from "@/lib/content";
import { allies, institutions, sponsors } from "@/lib/logos";

// Secciones del inicio. Los textos son los mismos que hoy tiene fundaciongedyt.org.ar;
// lo que cambia es el diseño y la experiencia.

export function PrevenirCard() {
  const actions = [
    { label: "Donar hoy", href: "/donar", icon: "heart" },
    { label: "Programas", href: "/programas", icon: "rocket" },
    { label: "Campaña", href: "/campana", icon: "shield" },
  ];
  return (
    <section className="px-4 pt-12 sm:px-6 sm:pt-16">
      <div className="reveal relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-50 via-white to-brand-50/60 px-6 py-12 ring-1 ring-brand-100 sm:px-12 lg:grid-cols-[1.1fr_1fr] lg:px-16 lg:py-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cta">
            <Icon name="shield" className="h-4 w-4" />
            Prevención
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Prevenir también es cuidar.</h2>
          <p className="mt-4 max-w-xl text-lg text-navy-900/70">
            Trabajamos para que <strong className="text-navy-900">más personas accedan a prevención, diagnóstico temprano y atención de calidad</strong> en salud
            digestiva.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {actions.map((a, i) => (
            <InterestLink
              key={a.label}
              href={a.href}
              className={`group flex items-center gap-4 rounded-2xl px-5 py-4 shadow-sm ring-1 transition hover:translate-x-1 hover:shadow-xl ${
                i === 0 ? "bg-cta text-white ring-cta hover:bg-cta-hover" : "bg-white text-navy-900 ring-navy-900/5 hover:ring-cta/40"
              }`}
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${i === 0 ? "bg-white/15" : "bg-brand-50 text-cta"}`}>
                <Icon name={a.icon} className="h-6 w-6" />
              </span>
              <span className="flex flex-1 items-center justify-between gap-1.5 text-lg font-bold">
                {a.label}
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </InterestLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QueHacemosHome() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
      <div className="pointer-events-none absolute -right-64 bottom-0 hidden h-[26rem] w-[26rem] translate-y-1/3 rounded-full border-[48px] border-navy-800/90 xl:block" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="reveal relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
          {/* TODO: reemplazar por la foto original en alta resolución */}
          <Image src="/images/lazo-manos.webp" alt="Manos sosteniendo el lazo azul de la prevención del cáncer colorrectal" fill sizes="(min-width: 1024px) 28rem, 100vw" className="object-cover" />
        </div>
        <div className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-800 sm:text-5xl">¿Qué hacemos en la Fundación?</h2>
          <p className="mt-6 text-lg text-navy-900/70">
            En Fundación Gedyt contribuimos a{" "}
            <strong className="text-navy-900">mejorar la eficiencia y el acceso a la atención de las enfermedades digestivas</strong> en Argentina, con acciones
            basadas en evidencia y articulación público-privada.
          </p>
          <div className="mt-8">
            <ButtonLink href="/institucional" variant="cta">
              Conocé más <Icon name="arrow" className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsAndHighlights() {
  const cards = [
    {
      kicker: "Campaña",
      title: "¿Cómo está tu colon?",
      cta: "Ver",
      href: homeLinks.campana,
      image: "/images/campana-colon-v2.webp",
      imagePosition: "right top",
    },
    {
      kicker: "Cumbre Interamericana de",
      title: "CCR360°",
      cta: "Reviví la edición 2024",
      href: homeLinks.cumbre,
      image: "/images/hands-on.webp",
    },
    {
      kicker: "Gala Noche Azul 2025",
      title: "",
      cta: "Reviví la Gala 2025",
      href: homeLinks.gala2025,
      image: "/images/equipo-gala.webp",
    },
  ];
  return (
    <section className="px-4 sm:px-6">
      {/* Cifra principal con el mapa de los programas territoriales de fondo */}
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] ring-1 ring-brand-100">
        <ArgentinaMap focusX={0.74} fade="bg-gradient-to-r from-white/95 via-white/80 to-white/0 max-lg:to-white/60" />
        <div className="relative px-6 pt-16 pb-40 sm:px-12 sm:pt-20 lg:max-w-[60%] lg:px-16 lg:pb-44">
          <p className="text-5xl font-extrabold tracking-tight text-cta sm:text-6xl">
            <CountUp value="+10.000" /> <span className="text-navy-800">personas chequeadas</span>
          </p>
          <p className="mt-3 text-xl font-semibold text-navy-900 sm:text-2xl">dentro de nuestros programas territoriales y empresariales</p>
          <div className="mt-8">
            <InterestLink
              href="/contacto"
              interest="prensa"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-3 text-center font-semibold text-white transition hover:bg-cta-hover"
            >
              Sumá tu municipio, provincia o empresa <Icon name="arrow" className="h-4 w-4 flex-none" />
            </InterestLink>
          </div>
          <p className="mt-6 text-sm text-navy-900/60 italic">Los datos se actualizan mensualmente desde el Fondo Común de Prevención y Detección Temprana.</p>
        </div>
      </div>

      {/* Tres accesos destacados, montados sobre el borde del bloque anterior */}
      <div className="relative z-10 mx-auto -mt-28 grid max-w-6xl gap-5 px-2 md:grid-cols-3">
        {cards.map((c) => (
          <InterestLink
            key={c.cta}
            href={c.href}
            className={`reveal group relative flex min-h-[15rem] flex-col justify-end overflow-hidden rounded-3xl p-7 text-white shadow-2xl shadow-navy-900/25 transition hover:-translate-y-1 bg-navy-900`}
          >
            {c.image && (
              <>
                <Image src={c.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" style={{ objectPosition: "imagePosition" in c ? c.imagePosition : "center" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-900/70 to-navy-900/30" />
              </>
            )}
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/85">{c.kicker}</p>
              {c.title && <p className="mt-1 text-2xl font-extrabold">{c.title}</p>}
              <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold ring-1 ring-white/30 backdrop-blur transition group-hover:bg-white group-hover:text-navy-900">
                {c.cta} <Icon name="arrow" className="h-4 w-4" />
              </span>
            </div>
          </InterestLink>
        ))}
      </div>
    </section>
  );
}

export function ConsorcioSection() {
  return (
    <section className="px-4 pt-20 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-800 sm:text-4xl">Consorcio por la prevención 2026</h2>
          <p className="mt-2 text-lg font-medium text-cta">Campaña de prevención</p>
        </div>
        <div className="reveal mt-12 rounded-[2rem] bg-brand-50/70 p-6 ring-1 ring-brand-100 sm:p-10">
          <LogoMarquee
            groups={[
              { title: "Sponsors", logos: sponsors },
              { title: "Instituciones de salud", logos: institutions },
              { title: "Aliados estratégicos", logos: allies },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
