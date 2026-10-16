import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import ReadingProgress from "@/components/articulo/ReadingProgress";
import ShareButtons from "@/components/articulo/ShareButtons";
import { articulos, getArticulo, minutosDeLectura, relacionadas, type Articulo, type Bloque } from "@/lib/articulos";

// Tipografía de lectura para el cuerpo de las notas; los títulos siguen en Montserrat.
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif-nota", display: "swap" });

export function generateStaticParams() {
  return articulos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = getArticulo((await params).slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.bajada,
    openGraph: { title: a.title, description: a.bajada, images: [a.image], type: "article" },
  };
}

function Cuerpo({ blocks }: { blocks: Bloque[] }) {
  let firstP = true;
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case "p": {
            const drop = firstP;
            firstP = false;
            return (
              <p
                key={i}
                className={`mt-6 text-[1.18rem] leading-[1.8] text-navy-950/85 ${
                  drop
                    ? "first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-sans first-letter:text-[4.6rem] first-letter:leading-[0.8] first-letter:font-extrabold first-letter:text-cta"
                    : ""
                }`}
              >
                {b.text}
              </p>
            );
          }
          case "h2":
            return (
              <h2 key={i} className="mt-12 flex items-start gap-3 font-sans text-2xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-[1.7rem]">
                <span className="mt-1.5 h-6 w-1.5 flex-none rounded-full bg-gradient-to-b from-sky-accent to-cta" aria-hidden />
                {b.text}
              </h2>
            );
          case "quote":
            return (
              <figure key={i} className="relative my-10 rounded-[1.75rem] bg-gradient-to-br from-brand-50 to-white px-7 pt-10 pb-7 ring-1 ring-brand-100 sm:px-10">
                <span className="absolute -top-6 left-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-cta text-white shadow-lg shadow-cta/30 sm:left-10">
                  <Icon name="quote" className="h-6 w-6" />
                </span>
                <blockquote className="text-[1.35rem] leading-snug font-semibold text-navy-900 italic sm:text-[1.5rem]">“{b.text}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 font-sans">
                  <span className="h-px w-8 bg-cta" aria-hidden />
                  <span>
                    <span className="block text-sm font-bold text-navy-900">{b.author}</span>
                    {b.role && <span className="block text-xs text-navy-900/60">{b.role}</span>}
                  </span>
                </figcaption>
              </figure>
            );
          case "list": {
            const Tag = b.ordered ? "ol" : "ul";
            return (
              <Tag key={i} className="mt-6 space-y-3">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-4 text-[1.1rem] leading-[1.7] text-navy-950/85">
                    {b.ordered ? (
                      <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-navy-900 font-sans text-sm font-bold text-white">{j + 1}</span>
                    ) : (
                      <span className="mt-3 h-2 w-2 flex-none rotate-45 rounded-[2px] bg-sky-accent" aria-hidden />
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </Tag>
            );
          }
          case "stats":
            return (
              <div key={i} className="relative my-10 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-2 font-sans text-white shadow-xl shadow-navy-900/20">
                <svg className="pointer-events-none absolute -right-8 -bottom-10 h-40 w-72 opacity-40" viewBox="0 0 300 160" aria-hidden>
                  <path d="M10 150 C 60 60, 170 40, 210 90 C 240 130, 200 155, 180 125 C 155 85, 230 30, 320 50" stroke="#3fa5d4" strokeWidth="12" fill="none" strokeLinecap="round" />
                </svg>
                <div className="relative grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {b.items.map((s) => (
                    <div key={s.label} className="px-6 py-5">
                      <p className="text-3xl font-extrabold tracking-tight text-sky-accent sm:text-4xl">{s.value}</p>
                      <p className="mt-1 text-sm leading-snug text-white/75">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          case "box":
            return (
              <aside key={i} className="my-10 rounded-[1.75rem] border-l-4 border-cta bg-white p-7 font-sans shadow-sm ring-1 ring-navy-900/5">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-cta">
                  <Icon name="sparkle" className="h-4 w-4" /> {b.title}
                </p>
                <p className="mt-3 text-base leading-relaxed text-navy-900/80">{b.text}</p>
              </aside>
            );
        }
      })}
    </>
  );
}

// Foto principal: si la imagen es chica o recortada, se apoya sobre un fondo desenfocado para no pixelarse.
function Portada({ a }: { a: Articulo }) {
  if (a.cutout) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-cta">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(63,165,212,0.45),transparent_60%)]" />
        <p className="absolute top-1/2 left-6 max-w-[55%] -translate-y-1/2 font-sans text-4xl leading-none font-extrabold tracking-tight text-white sm:left-12 sm:text-7xl">
          90<span className="text-sky-accent">%</span>
          <span className="mt-3 block text-sm font-semibold tracking-normal text-white/80 sm:text-xl">de los casos de cáncer de colon pueden curarse si se detectan a tiempo</span>
        </p>
        <Image quality={90} src={a.image} alt="" fill priority sizes="(min-width: 1280px) 1152px, 100vw" className="object-contain object-right-bottom" />
      </div>
    );
  }
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-navy-950 shadow-xl shadow-navy-900/10 ring-1 ring-navy-900/10">
      <Image src={a.image} alt="" fill sizes="40vw" className="scale-110 object-cover opacity-60 blur-2xl" aria-hidden />
      <Image quality={90} src={a.image} alt={a.caption ?? a.title} fill priority sizes="(min-width: 1280px) 1152px, 100vw" className="object-contain" />
    </div>
  );
}

export default async function ArticuloPage({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticulo((await params).slug);
  if (!a) notFound();
  const mins = minutosDeLectura(a);
  const rel = relacionadas(a, 4);
  const masNotas = articulos.filter((x) => x.slug !== a.slug && !rel.includes(x)).slice(0, 5);

  return (
    <div className={`${serif.variable} bg-[#fbfcfd]`}>
      <ReadingProgress targetId="cuerpo-nota" />

      {/* Barra superior: volver + ruta */}
      <div className="border-b border-navy-900/5 bg-white px-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 py-4">
          <Link
            href="/novedades#prensa"
            className="group inline-flex items-center gap-3 rounded-full bg-brand-50 py-1.5 pr-5 pl-1.5 text-sm font-semibold text-navy-900 ring-1 ring-brand-100 transition hover:bg-navy-900 hover:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-cta shadow-sm transition group-hover:-translate-x-0.5">
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
            </span>
            Volver a Novedades
          </Link>
          <nav aria-label="Ruta" className="hidden items-center gap-2 text-xs font-medium text-navy-900/50 sm:flex">
            <Link href="/" className="hover:text-cta">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/novedades" className="hover:text-cta">
              Novedades
            </Link>
            <span>/</span>
            <span className="font-semibold text-cta">{a.seccion}</span>
          </nav>
        </div>
      </div>

      <article id="cuerpo-nota">
        {/* Encabezado de la nota */}
        <header className="px-4 pt-10 sm:px-6 sm:pt-14">
          <div className="mx-auto max-w-4xl">
            <div className="hero-in flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]">
              <span className="flex items-center gap-2 text-cta">
                <span className="h-4 w-1 rounded-full bg-cta" aria-hidden />
                {a.seccion}
              </span>
              <span className="text-navy-900/20">|</span>
              <span className={`rounded-full px-3 py-1 tracking-[0.12em] ${a.tipo === "Comunicado" ? "bg-navy-900 text-white" : "bg-brand-100 text-navy-900"}`}>
                {a.tipo === "Comunicado" ? "Comunicado oficial" : a.medio ? `En los medios · ${a.medio}` : "Prensa"}
              </span>
            </div>
            <h1 className="hero-in mt-6 text-[2.1rem] leading-[1.08] font-extrabold tracking-tight text-navy-950 sm:text-5xl lg:text-[3.4rem]" style={{ animationDelay: "80ms" }}>
              {a.title}
            </h1>
            <p className="hero-in mt-6 font-[family-name:var(--font-serif-nota)] text-xl leading-relaxed text-navy-900/70 sm:text-[1.4rem]" style={{ animationDelay: "160ms" }}>
              {a.bajada}
            </p>

            <div className="hero-in mt-8 flex flex-wrap items-center justify-between gap-5 border-y border-navy-900/10 py-5" style={{ animationDelay: "240ms" }}>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-navy-900 to-cta text-sm font-extrabold text-white ring-4 ring-brand-50">FG</span>
                <div className="text-sm">
                  <p className="font-bold text-navy-900">Fundación Gedyt</p>
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-navy-900/55">
                    {a.fecha && (
                      <span className="inline-flex items-center gap-1">
                        <Icon name="calendar" className="h-3.5 w-3.5" /> {a.fecha}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <Icon name="clockSmall" className="h-3.5 w-3.5" /> {mins} min de lectura
                    </span>
                  </p>
                </div>
              </div>
              <ShareButtons title={a.title} />
            </div>
          </div>
        </header>

        {/* Foto principal */}
        <figure className="hero-in mx-auto mt-10 max-w-6xl px-4 sm:px-6" style={{ animationDelay: "320ms" }}>
          <Portada a={a} />
          {a.caption && (
            <figcaption className="mx-auto mt-3 flex max-w-4xl gap-2 text-sm text-navy-900/55">
              <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-sky-accent" aria-hidden />
              {a.caption}
            </figcaption>
          )}
        </figure>

        {/* Cuerpo + barra lateral */}
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-10 pb-16 sm:px-6 lg:grid-cols-[3.5rem_minmax(0,1fr)_18rem] lg:gap-10">
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <p className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-navy-900/40">Compartir</p>
              <ShareButtons title={a.title} vertical />
            </div>
          </div>

          <div className="mx-auto w-full max-w-[42rem] font-[family-name:var(--font-serif-nota)]">
            <Cuerpo blocks={a.blocks} />

            {a.fuente && (
              <a
                href={a.fuente}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-12 flex items-center justify-between gap-4 rounded-2xl bg-white p-5 font-sans ring-1 ring-navy-900/10 transition hover:ring-cta"
              >
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-cta">Fuente</span>
                  <span className="mt-1 block font-semibold text-navy-900">{a.medio ? `Leer la nota original en ${a.medio}` : "Ver la publicación original"}</span>
                </span>
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-cta text-white transition group-hover:translate-x-0.5">
                  <Icon name="arrow" className="h-4 w-4 -rotate-45" />
                </span>
              </a>
            )}

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-navy-900/10 pt-6 font-sans">
              <p className="text-sm font-semibold text-navy-900">¿Te sirvió esta nota? Compartila</p>
              <ShareButtons title={a.title} />
            </div>
          </div>

          {/* Barra lateral */}
          <aside className="font-sans">
            <div className="space-y-6 lg:sticky lg:top-32">
              <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-navy-900/5">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-navy-900">
                  <span className="h-2 w-2 rounded-full bg-cta" /> Más notas
                </p>
                <ol className="mt-4 divide-y divide-navy-900/5">
                  {masNotas.map((n, i) => (
                    <li key={n.slug}>
                      <Link href={`/novedades/${n.slug}`} className="group flex gap-3 py-3">
                        <span className="text-2xl leading-none font-extrabold text-brand-100 transition group-hover:text-cta">{i + 1}</span>
                        <span className="line-clamp-3 text-sm leading-snug font-semibold text-navy-900 group-hover:text-cta">{n.title}</span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-navy-900 to-cta p-6 text-white">
                <svg className="pointer-events-none absolute -right-10 -bottom-8 h-32 w-56 opacity-40" viewBox="0 0 300 160" aria-hidden>
                  <path d="M10 150 C 60 60, 170 40, 210 90 C 240 130, 200 155, 180 125 C 155 85, 230 30, 320 50" stroke="#3fa5d4" strokeWidth="14" fill="none" strokeLinecap="round" />
                </svg>
                <Icon name="heart" className="relative h-7 w-7 text-sky-accent" />
                <p className="relative mt-3 text-lg leading-snug font-extrabold">Diagnosticar a tiempo salva vidas</p>
                <p className="relative mt-2 text-sm text-white/75">Tu aporte financia estudios de prevención en hospitales públicos.</p>
                <Link
                  href="/donar"
                  className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-brand-50"
                >
                  Doná acá <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Seguí leyendo */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-4 py-16 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-accent">Seguí leyendo</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Notas relacionadas</h2>
            </div>
            <Link href="/novedades#prensa" className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white">
              Ver todas las novedades <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rel.map((n) => (
              <Link key={n.slug} href={`/novedades/${n.slug}`} className="group flex flex-col overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10">
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
                  <Image quality={90} src={n.image} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className={`transition duration-700 group-hover:scale-105 ${n.cutout ? "object-contain object-bottom" : "object-cover"}`} />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-cta">{n.seccion}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="line-clamp-3 font-bold leading-snug">{n.title}</h3>
                  {n.fecha && <p className="mt-auto pt-3 text-xs text-white/50">{n.fecha}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DonateBanner />
    </div>
  );
}
