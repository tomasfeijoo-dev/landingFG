import type { Metadata } from "next";
import Image from "next/image";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import { PageHeader } from "@/components/ui";
import { anuarios, consejo, equipo, institucionalEmail, publicacionesUrl, quienesSomos, type Person } from "@/lib/institucional";

export const metadata: Metadata = {
  title: "Institucional",
  description: "Quiénes somos, misión, visión y valores, Consejo de administración y equipo de trabajo de Fundación Gedyt.",
};

const initials = (name: string) =>
  name
    .replace(/^Dr\.?\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

function Avatar({ person, size }: { person: Person; size: "lg" | "sm" }) {
  const box = size === "lg" ? "aspect-[4/5] w-full rounded-3xl" : "h-16 w-16 flex-none rounded-2xl";
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-navy-800 to-sky-accent ${box}`}>
      {person.photo ? (
        <Image src={person.photo} alt={person.name} fill sizes={size === "lg" ? "(min-width: 768px) 320px, 80vw" : "64px"} className="object-cover object-top" />
      ) : (
        <span className={`absolute inset-0 flex items-center justify-center font-extrabold text-white/90 ${size === "lg" ? "text-6xl" : "text-xl"}`}>
          {initials(person.name)}
        </span>
      )}
    </div>
  );
}

function SectionTitle({ children, eyebrow }: { children: React.ReactNode; eyebrow: string }) {
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">{children}</h2>
    </div>
  );
}

export default function InstitucionalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institucional"
        title="Quiénes somos"
        image="/images/equipo-gala.webp"
        imageAlt="Equipo de la Fundación Gedyt"
        imagePosition="center 35%"
      />

      {/* Misión, visión y valores */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-navy-900/75">
            {quienesSomos.intro.before}
            <strong className="text-navy-900">{quienesSomos.intro.bold}</strong>
            {quienesSomos.intro.after}
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {quienesSomos.pillars.map((p, i) => (
              <article
                key={p.title}
                className={`reveal relative overflow-hidden rounded-3xl p-8 shadow-xl ring-1 ${
                  i === 1 ? "bg-gradient-to-br from-navy-900 to-navy-800 text-white ring-navy-900 shadow-navy-900/20" : "bg-white text-navy-900 ring-navy-900/5 shadow-navy-900/5"
                }`}
              >
                <span className="pointer-events-none absolute -top-6 -right-4 text-[7rem] leading-none font-extrabold opacity-[0.06]" aria-hidden>
                  0{i + 1}
                </span>
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${i === 1 ? "bg-white/15 text-white" : "bg-brand-50 text-cta"}`}>
                  <Icon name={p.icon} />
                </span>
                <h3 className={`mt-6 text-sm font-extrabold uppercase tracking-[0.18em] ${i === 1 ? "text-sky-accent" : "text-cta"}`}>{p.title}</h3>
                <p className={`mt-3 text-lg leading-relaxed ${i === 1 ? "text-white/85" : "text-navy-900/75"}`}>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Consejo de administración */}
      <section className="relative overflow-hidden bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute -bottom-40 -left-40 hidden h-[26rem] w-[26rem] rounded-full border-[48px] border-navy-800/90 lg:block" aria-hidden />
        <div className="relative mx-auto max-w-5xl">
          <SectionTitle eyebrow="Gobierno de la Fundación">Consejo de administración</SectionTitle>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {consejo.map((p) => (
              <article key={p.name} className="reveal group relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-navy-900 shadow-2xl shadow-navy-900/20">
                {p.photo && (
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white sm:p-8">
                  <p className="text-2xl font-extrabold tracking-tight drop-shadow sm:text-3xl">{p.name}</p>
                  <p className="mt-1 text-base text-white/85 sm:text-lg">{p.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro equipo de trabajo */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Las personas detrás de cada programa">Nuestro equipo de trabajo</SectionTitle>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {equipo.map((p) => (
              <article key={p.name} className="team-card reveal-pop group relative flex items-center gap-4 overflow-hidden rounded-3xl bg-white p-4 ring-1 ring-navy-900/5">
                <span className="team-sheen" aria-hidden />
                <div className="relative transition duration-500 group-hover:scale-105">
                  <Avatar person={p} size="sm" />
                </div>
                <div className="relative min-w-0 flex-1">
                  <p className="font-extrabold text-navy-900">{p.name}</p>
                  <p className="mt-0.5 text-sm leading-snug text-navy-900/60 transition group-hover:text-cta">{p.role}</p>
                </div>
                {p.linkedin ? (
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${p.name}`}
                    className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-50 text-cta transition group-hover:bg-cta group-hover:text-white"
                  >
                    <Icon name="linkedin" className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-50 text-cta/50" aria-hidden>
                    <Icon name="linkedin" className="h-4 w-4" />
                  </span>
                )}
              </article>
            ))}
          </div>
          <p className="reveal mt-12 rounded-2xl bg-brand-50/70 px-6 py-5 text-center text-navy-900/75 ring-1 ring-brand-100">
            Escribinos para <strong className="text-navy-900">alianzas</strong> y <strong className="text-navy-900">voluntariado</strong>:{" "}
            <a href={`mailto:${institucionalEmail}`} className="font-semibold break-all text-cta underline-offset-2 hover:underline">
              {institucionalEmail}
            </a>
          </p>
        </div>
      </section>

      {/* Conocé nuestro trabajo */}
      <section className="px-4 sm:px-6">
        <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-6 py-14 text-white shadow-2xl shadow-navy-900/20 sm:px-12">
          <svg className="pointer-events-none absolute -top-6 -right-10 hidden h-48 w-96 md:block" viewBox="0 0 300 160" aria-hidden>
            <path d="M10 -10 C 60 90, 170 110, 210 60 C 240 20, 200 -5, 180 25 C 155 65, 230 120, 320 100" stroke="#3fa5d4" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.7" />
          </svg>
          <h2 className="relative text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Conocé nuestro trabajo</h2>
          <div className="relative mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-accent">Anuarios</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {anuarios.map((a) => (
                  <a
                    key={a.label}
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 ring-1 ring-white/20 backdrop-blur transition hover:bg-white hover:text-navy-900"
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/15 text-white transition group-hover:bg-brand-50 group-hover:text-cta">
                      <Icon name="book" className="h-5 w-5" />
                    </span>
                    <span className="font-semibold leading-tight">{a.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-accent">Publicaciones</p>
              <a
                href={publicacionesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-cta px-6 py-4 font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-cta-hover"
              >
                Ver todas <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
