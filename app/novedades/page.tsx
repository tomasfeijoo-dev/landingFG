import type { Metadata } from "next";
import Image from "next/image";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import PressGrid from "@/components/PressGrid";
import { Eyebrow } from "@/components/ui";
import { contact } from "@/lib/content";
import { anuarios, asistencia, comunicados, guidelines, posters, weo } from "@/lib/publicaciones";

export const metadata: Metadata = {
  title: "Novedades",
  description: "Comunicados institucionales, prensa, anuarios, publicaciones e investigación de Fundación Gedyt.",
};

const notaDestacada = {
  titulo: "“El 90% de los casos de cáncer de colon pueden curarse”: los últimos avances en pruebas diagnósticas y prevención",
  bajada:
    "En el mes de concientización de la enfermedad, el gastroenterólogo Luis Caro, presidente de la Fundación Gedyt, detalló a Infobae los desafíos que presenta la patología y remarcó que si se detecta en estadios iniciales tiene alta tasa de curación.",
  fecha: "19 de marzo 2026",
  href: `https://www.google.com/search?q=${encodeURIComponent("infobae El 90% de los casos de cáncer de colon pueden curarse Luis Caro")}`,
};

// Fondo del encabezado: una página de diario desenfocada, con filtro azul fuerte.
function NewspaperBackdrop() {
  const columna =
    "En el mes de concientización de la enfermedad, especialistas remarcaron que si el cáncer de colon se detecta en estadios iniciales tiene una alta tasa de curación. La prevención y el diagnóstico temprano son las principales herramientas para reducir la mortalidad. Los controles a partir de los 45 años y el test de sangre oculta permiten detectar lesiones antes de que aparezcan síntomas. ";
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute -inset-10 -rotate-3 scale-110 bg-[#f4f1ea] text-[#222] blur-[7px]">
        <div className="border-b-4 border-double border-[#222] px-10 pt-8 pb-3 text-center font-serif text-7xl font-black tracking-tight">EL DIARIO</div>
        <div className="flex justify-between border-b border-[#222] px-10 py-1 font-serif text-sm">
          <span>Buenos Aires</span>
          <span>Salud</span>
          <span>Edición especial</span>
        </div>
        <p className="px-10 pt-4 font-serif text-5xl leading-tight font-bold">El 90% de los casos de cáncer de colon pueden curarse</p>
        <div className="grid grid-cols-5 gap-6 px-10 pt-5 font-serif text-[13px] leading-snug">
          {Array.from({ length: 5 }, (_, i) => (
            <p key={i}>{columna.repeat(5)}</p>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-navy-950/88" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/60 via-navy-900/40 to-cta/50 mix-blend-multiply" />
    </div>
  );
}

const subnav = [
  { href: "#comunicados", label: "Comunicados" },
  { href: "#prensa", label: "Prensa" },
  { href: "#anuarios", label: "Anuarios" },
  { href: "#publicaciones", label: "Publicaciones" },
  { href: "#investigacion", label: "Investigación" },
];

function H2({ children, light = false, kicker }: { children: React.ReactNode; light?: boolean; kicker?: string }) {
  return (
    <div className="text-center">
      {kicker && <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-sky-accent" : "text-cta"}`}>{kicker}</p>}
      <h2 className={`mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}>{children}</h2>
    </div>
  );
}

function PdfButton({ href, light = false }: { href: string; light?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${
        light ? "bg-white text-navy-900 hover:bg-brand-50" : "bg-cta text-white shadow-lg shadow-cta/20 hover:bg-cta-hover"
      }`}
    >
      Descargar PDF <Icon name="arrow" className="h-4 w-4 rotate-90" />
    </a>
  );
}

function Meta({ items }: { items: { k: string; v: string; href?: string }[] }) {
  return (
    <dl className="mt-5 flex flex-wrap gap-2">
      {items.map((m) => (
        <div key={m.k} className="rounded-full bg-white/70 px-3 py-1.5 text-xs ring-1 ring-navy-900/10">
          <dt className="inline font-bold text-navy-900">{m.k}: </dt>
          <dd className="inline text-navy-900/70">
            {m.href ? (
              <a href={m.href} target="_blank" rel="noopener noreferrer" className="text-cta hover:underline">
                {m.v}
              </a>
            ) : (
              m.v
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function NovedadesPage() {
  return (
    <>
      {/* Encabezado con la nota de Infobae al Dr. Caro */}
      <section className="px-4 pt-6 sm:px-6 sm:pt-10">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] bg-navy-950 px-6 pt-16 pb-12 text-white sm:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:pt-24 lg:pb-14">
          <NewspaperBackdrop />
          <div className="reveal relative">
            <Eyebrow chip light>
              Prensa y publicaciones
            </Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">Novedades</h1>
            <p className="mt-4 max-w-md text-lg text-white/80">Comunicados, prensa, anuarios e investigación.</p>
          </div>

          <a
            href={notaDestacada.href}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-pop group relative mt-16 block rounded-3xl bg-white text-navy-900 shadow-2xl shadow-black/40 lg:mt-0 transition duration-500 hover:-translate-y-1"
          >
            <div className="relative z-10 flex min-h-[19rem] max-w-[60%] flex-col p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="text-2xl font-bold tracking-tight text-[#e08a00]">infobae</span>
                <span className="text-xs text-navy-900/55">{notaDestacada.fecha}</span>
              </div>
              <p className="mt-5 text-lg font-bold leading-snug sm:text-xl">{notaDestacada.titulo}</p>
              <p className="mt-3 hidden text-sm leading-relaxed text-navy-900/65 sm:block">{notaDestacada.bajada}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-cta">
                Leer nota <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
            {/* Panel de la foto: el doctor sobresale por encima de la nota */}
            <div className="absolute inset-y-0 right-0 w-[40%] rounded-r-3xl bg-gradient-to-br from-brand-50 to-brand-100" aria-hidden />
            <div className="pointer-events-none absolute right-0 bottom-0 z-20 h-[124%] w-[40%] overflow-hidden rounded-br-3xl">
              <Image
                src="/images/caro-recorte.webp"
                alt="Dr. Luis Caro, presidente de la Fundación Gedyt"
                fill
                priority
                sizes="(min-width: 1024px) 26vw, 50vw"
                className="origin-bottom object-cover object-[50%_100%] drop-shadow-[0_10px_25px_rgba(0,41,59,0.35)] transition duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </a>
        </div>
      </section>

      {/* Navegación interna */}
      <nav className="sticky top-[4.5rem] z-30 mx-auto mt-6 flex max-w-fit flex-wrap justify-center gap-1 rounded-full bg-white/90 p-1.5 shadow-lg ring-1 ring-navy-900/5 backdrop-blur">
        {subnav.map((n) => (
          <a key={n.href} href={n.href} className="rounded-full px-4 py-2 text-sm font-semibold text-navy-900/75 transition hover:bg-brand-50 hover:text-cta">
            {n.label}
          </a>
        ))}
      </nav>

      {/* Comunicados institucionales — claro */}
      <section id="comunicados" className="scroll-mt-36 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <H2 kicker="Desde la Fundación">Comunicados institucionales</H2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {comunicados.map((c, i) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal-pop group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy-900/5 transition hover:-translate-y-1 hover:shadow-xl ${
                  i === 0 ? "sm:col-span-2 lg:row-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/9] lg:aspect-auto lg:flex-1" : "aspect-[16/9]"}`}>
                  <Image quality={90} src={c.image} alt="" fill sizes={i === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"} className="object-cover transition duration-700 group-hover:scale-105" />
                  {i === 0 && <span className="absolute top-4 left-4 rounded-full bg-cta px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">Último comunicado</span>}
                </div>
                <div className="p-6">
                  <h3 className={`font-bold leading-snug text-navy-900 ${i === 0 ? "text-2xl" : ""}`}>{c.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cta">
                    Leer comunicado <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Prensa — celeste */}
      <section id="prensa" className="scroll-mt-36 mx-4 rounded-[2rem] bg-gradient-to-br from-brand-100 via-brand-50 to-[#cfe8f6] px-4 py-16 sm:mx-6 sm:px-8 sm:py-20 xl:mx-auto xl:max-w-7xl">
        <H2 kicker="En los medios">Prensa</H2>
        <div className="mt-10">
          <PressGrid />
        </div>
        <p className="mt-10 text-center text-sm text-navy-900/60">
          ¿Sos periodista? Escribinos a{" "}
          <a href={`mailto:${contact.email}`} className="font-semibold text-cta hover:underline">
            {contact.email}
          </a>
        </p>
      </section>

      {/* Anuarios — oscuro */}
      <section id="anuarios" className="scroll-mt-36 px-4 pt-16 sm:px-6 sm:pt-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-6 py-16 text-white shadow-2xl shadow-navy-900/20 sm:px-12">
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full border-[44px] border-white/5" aria-hidden />
          <H2 light kicker="Nuestro trabajo, año a año">Anuarios</H2>
          <div className="relative mt-12 grid gap-8 md:grid-cols-3">
            {anuarios.map((a) => (
              <div key={a.label} className="reveal-pop group text-center">
                <div className="relative mx-auto aspect-[656/460] overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/10 transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[-1deg]">
                  <Image quality={90} src={a.image} alt={a.label} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <p className="mt-5 text-lg font-bold">{a.label}</p>
                <div className="mt-3">
                  <PdfButton href={a.pdf} light />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publicaciones — claro */}
      <section id="publicaciones" className="scroll-mt-36 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <H2 kicker="Pósters científicos">Publicaciones</H2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posters.map((p) => (
              <article key={p.title} className="team-card reveal-pop group relative flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/5">
                <div className="relative aspect-square overflow-hidden bg-brand-50">
                  <Image quality={90} src={p.image} alt={p.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-top transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="flex-1 font-bold leading-snug text-navy-900">{p.title}</h3>
                  <div className="mt-5">
                    <PdfButton href={p.pdf} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Investigación */}
      <section id="investigacion" className="scroll-mt-36 space-y-6 px-4 sm:px-6">
        {/* WEO — celeste */}
        <article className="reveal relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-100 via-brand-50 to-[#cfe8f6] p-8 sm:p-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="relative aspect-[552/728] overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/25 ring-4 ring-white">
              <Image quality={90} src={weo.image} alt="Tapa de la revista Gastroenterology" fill sizes="320px" className="object-cover" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">Investigación</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-900">{weo.title}</h2>
            {weo.paragraphs.map((t) => (
              <p key={t} className="mt-4 text-navy-900/75">
                {t}
              </p>
            ))}
            <p className="mt-4 text-navy-900/75">
              Cooperación internacional con WEO: <strong className="text-navy-900">{weo.paper}</strong>
            </p>
            <p className="mt-3 text-sm text-navy-900/60">{weo.authors}</p>
            <Meta items={weo.meta} />
            <div className="mt-6">
              <PdfButton href={weo.pdf} />
            </div>
          </div>
        </article>

        {/* Guidelines — claro */}
        <article className="reveal mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] bg-white p-8 shadow-xl shadow-navy-900/5 ring-1 ring-navy-900/5 sm:p-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">Investigación</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-900">{guidelines.title}</h2>
            <p className="mt-4 font-semibold text-navy-900">{guidelines.paper}</p>
            <p className="mt-3 text-sm text-navy-900/60">
              <strong className="text-navy-900/80">Authors List:</strong> {guidelines.authors}
            </p>
            <Meta items={guidelines.meta} />
            <div className="mt-6">
              <PdfButton href={guidelines.pdf} />
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xs">
            <div className="relative aspect-[500/660] overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/25 ring-4 ring-white">
              <Image quality={90} src={guidelines.image} alt="Tapa de la revista Clinical Epidemiology and Global Health" fill sizes="320px" className="object-cover" />
            </div>
          </div>
        </article>

        {/* Asistencia financiera — oscuro */}
        <article className="reveal relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-8 text-white shadow-2xl shadow-navy-900/20 sm:p-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full border-[40px] border-white/5" aria-hidden />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-accent">Investigación</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">{asistencia.title}</h2>
            <p className="mt-3 text-lg font-semibold text-sky-accent">{asistencia.subtitle}</p>
            {asistencia.paragraphs.map((t) => (
              <p key={t} className="mt-4 text-white/80">
                {t}
              </p>
            ))}
          </div>
          <div className="relative mx-auto w-full max-w-xs">
            <div className="relative aspect-[482/726] overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-4 ring-white/10">
              <Image quality={90} src={asistencia.image} alt="Médica acompañando a un paciente" fill sizes="320px" className="object-cover" />
            </div>
          </div>
        </article>
      </section>

      <DonateBanner />
    </>
  );
}
