import type { Metadata } from "next";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import Donate from "@/components/Donate";
import Icon from "@/components/Icon";
import InterestLink from "@/components/InterestLink";
import MythCards from "@/components/MythCards";
import { CampaignEmoji, CampaignRibbon } from "@/components/sections";
import {
  aQuienes,
  causas,
  cifras,
  diagnostico,
  encuestaUrl,
  factores,
  hero,
  prevencion,
  queEs,
  sintomas,
  testearse,
  toolkitUrl,
  tratamiento,
} from "@/lib/campana";
import { socialLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Campaña ¿Cómo está tu Colon?",
  description: "Campaña de concientización sobre el cáncer colorrectal: cifras, mitos, factores de riesgo, síntomas, prevención y diagnóstico.",
};

const instagram = socialLinks.find((s) => s.icon === "instagram")?.href ?? "#";

function H2({ children, light = false, center = false }: { children: React.ReactNode; light?: boolean; center?: boolean }) {
  return <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? "text-white" : "text-navy-900"} ${center ? "text-center" : ""}`}>{children}</h2>;
}

function Ring({ value, label }: { value: number; label: string }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  return (
    <div className="reveal-pop flex flex-col items-center text-center">
      <div className="relative h-32 w-32">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={r} fill="none" stroke="#d6ecf7" strokeWidth="8" />
          <circle cx="50" cy="50" r={r} fill="none" stroke="#137ab0" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${(value / 100) * c} ${c}`} />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold text-navy-900">
          <CountUp value={`${value}%`} />
        </span>
      </div>
      <p className="mt-3 max-w-[12rem] text-sm text-navy-900/65">{label}</p>
    </div>
  );
}

export default function CampanaPage() {
  return (
    <>
      {/* Hero de la campaña */}
      <section className="px-4 pt-6 sm:px-6 sm:pt-10">
        <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0f4f73] via-[#165b84] to-[#1b6189] text-white shadow-2xl shadow-navy-900/20 md:min-h-[28rem]">
          <CampaignRibbon />
          <div className="banner-tint absolute inset-0 opacity-70" />
          <CampaignEmoji />
          <div className="relative px-6 pt-14 pb-48 sm:px-12 sm:pb-56 md:w-[58%] md:py-20 lg:px-16">
            <p className="text-lg font-semibold text-sky-accent">{hero.date}</p>
            <p className="mt-1 font-bold italic text-white/85">{hero.day}</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">{hero.title}</h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">{hero.text}</p>
          </div>
        </div>
      </section>

      {/* Cifras */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <H2>Cifras</H2>
          <p className="mt-3 max-w-2xl text-lg text-navy-900/70">{cifras.intro}</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-6 rounded-3xl bg-brand-50/70 p-6 ring-1 ring-brand-100">
                {cifras.rings.map((r) => (
                  <Ring key={r.label} {...r} />
                ))}
              </div>
              <div className="reveal-pop flex items-center gap-6 rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 p-6 text-white shadow-xl shadow-navy-900/20">
                <span className="flex h-24 w-24 flex-none items-center justify-center rounded-full border-4 border-sky-accent text-3xl font-extrabold">
                  <CountUp value={`${cifras.highlight.value}%`} />
                </span>
                <p className="text-lg text-white/85">{cifras.highlight.label}</p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-6">
                {cifras.boxes.map((b) => (
                  <div key={b.label} className="reveal-pop flex flex-col justify-center rounded-3xl bg-gradient-to-br from-brand-100 to-brand-50 p-6 text-center ring-1 ring-brand-100">
                    <p className="text-4xl font-extrabold tracking-tight text-cta">
                      <CountUp value={b.value} />
                    </p>
                    <p className="mt-2 text-sm text-navy-900/65">{b.label}</p>
                  </div>
                ))}
              </div>
              <div className="reveal-pop flex items-center gap-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy-900/5">
                <div className="grid flex-none grid-cols-5 gap-1.5" aria-hidden>
                  {Array.from({ length: 10 }, (_, i) => (
                    <Icon key={i} name="users" className={`h-5 w-5 ${i < 5 ? "text-cta" : i < 9 ? "text-sky-accent" : "text-navy-900/15"}`} />
                  ))}
                </div>
                <p className="text-navy-900/75">{cifras.gender}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Encuesta */}
      <section className="px-4 sm:px-6">
        <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-accent via-cta to-navy-800 px-6 py-16 text-center text-white shadow-2xl shadow-navy-900/20 sm:px-12">
          <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full border-[40px] border-white/10" aria-hidden />
          <p className="relative font-bold italic text-white/85">La prevención salva vidas</p>
          <h2 className="relative mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">¿Cómo está tu Colon?</h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-lg text-white/90">Hacete esta pregunta y realizá una consulta médica con un profesional.</p>
          <InterestLink
            href={encuestaUrl}
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-navy-900 shadow-lg shadow-black/20 transition hover:bg-brand-50"
          >
            Completar encuesta <Icon name="arrow" className="h-4 w-4" />
          </InterestLink>
        </div>
      </section>

      {/* Mitos o realidad */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <H2 center>¿Mitos o realidad?</H2>
          <p className="mt-3 text-center text-navy-900/60">Pasá el mouse o tocá cada tarjeta para descubrir la respuesta.</p>
          <div className="mt-10">
            <MythCards />
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <H2>¿Qué es el cáncer colorrectal?</H2>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-cta">{queEs.kicker}</p>
            <p className="mt-4 text-lg leading-relaxed text-navy-900/75">{queEs.text}</p>
          </div>
          <div className="reveal rounded-3xl bg-white p-6 shadow-xl shadow-navy-900/5 ring-1 ring-navy-900/5">
            <Image
              src="/images/polipo-diagrama.png"
              alt="Evolución de la mucosa del colon: desarrollo de un pólipo y cáncer"
              width={600}
              height={400}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Factores de riesgo + A quiénes afecta */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <H2>¿Cuáles son los factores de riesgo?</H2>
            <ul className="mt-8 space-y-4">
              {factores.map((f, i) => (
                <li key={f} className="reveal-pop flex gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy-900/5">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-50 text-sm font-extrabold text-cta">{i + 1}</span>
                  <span className="text-navy-900/80">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal relative overflow-hidden rounded-[2rem] text-white shadow-2xl shadow-navy-900/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cta via-navy-800 to-navy-950" />
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full border-[40px] border-white/10" aria-hidden />
            <div className="pointer-events-none absolute top-8 left-8 grid grid-cols-5 gap-2 opacity-30" aria-hidden>
              {Array.from({ length: 20 }, (_, i) => (
                <Icon key={i} name="users" className={`h-6 w-6 ${i % 4 === 0 ? "text-sky-accent" : "text-white"}`} />
              ))}
            </div>
            <div className="relative flex h-full min-h-[22rem] flex-col justify-end p-8">
              <p className="text-6xl font-extrabold text-sky-accent"><CountUp value="75%" /></p>
              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">¿A quiénes afecta?</h3>
              <p className="mt-4 text-lg text-white/85">{aQuienes}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Causas */}
      <section className="px-4 sm:px-6">
        <div className="reveal mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-navy-900/5 ring-1 ring-navy-900/5 lg:grid-cols-2">
          <div className="relative min-h-[18rem]">
            <Image src="/images/manos.webp" alt="Manos de una paciente y una médica" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="p-8 sm:p-12">
            <H2>¿Cuáles son sus causas?</H2>
            <ul className="mt-8 space-y-4">
              {causas.map((c) => (
                <li key={c} className="flex gap-3 text-navy-900/80">
                  <Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-cta" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Síntomas */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="reveal mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-8 text-white shadow-2xl shadow-navy-900/20 sm:p-12 lg:grid-cols-[1fr_3fr] lg:items-center">
          <div>
            <H2 light>¿Cuáles son los síntomas?</H2>
            <p className="mt-4 text-white/75">{sintomas.intro}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {sintomas.items.map((s) => (
              <div key={s.label} className="reveal-pop flex flex-col items-center gap-3 rounded-2xl bg-white/10 p-5 text-center ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-cta">
                  <Icon name={s.icon} />
                </span>
                <p className="text-sm font-semibold leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué testearse */}
      <section className="px-4 sm:px-6">
        <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
          <Image src="/banners/test-fit-mano-wide.webp" alt="Test de sangre oculta en materia fecal" fill sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover object-[center_55%]" />
          <div className="banner-tint absolute inset-0" />
          <div className="relative max-w-2xl px-6 py-16 text-white sm:px-12 lg:px-16 lg:py-20">
            <H2 light>¿Por qué es importante testearse?</H2>
            <p className="mt-3 font-bold italic text-sky-accent">{testearse.kicker}</p>
            <p className="mt-4 text-lg text-white/85">{testearse.text}</p>
            <div className="mt-6 inline-flex items-baseline gap-2 rounded-2xl bg-white/15 px-5 py-3 ring-1 ring-white/25 backdrop-blur">
              <span className="text-4xl font-extrabold">
                <CountUp value="90%" />
              </span>
              <span className="text-white/85">de probabilidad de curación</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prevención */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <H2 center>¿Cuáles son los métodos de prevención?</H2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-navy-900/65">{prevencion.intro}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {prevencion.items.map((p) => (
              <div key={p.label} className="team-card reveal-pop group relative flex items-center gap-4 overflow-hidden rounded-3xl bg-white p-5 ring-1 ring-navy-900/5">
                <span className="team-sheen" aria-hidden />
                <span className="relative flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-brand-50 text-cta transition group-hover:bg-cta group-hover:text-white">
                  <Icon name={p.icon} />
                </span>
                <p className="relative text-navy-900/80">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnóstico y tratamiento */}
      <section className="bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="reveal">
            <H2>¿Cómo se logra diagnosticar el cáncer de colon?</H2>
            <div className="mt-6 space-y-4 text-navy-900/75">
              {diagnostico.map((d, i) => (
                <p key={i}>
                  {d.text}
                  {d.bold && <strong className="text-navy-900">{d.bold}</strong>}
                  {d.after}
                </p>
              ))}
            </div>
          </div>
          <div className="reveal self-start rounded-[2rem] bg-white p-8 shadow-xl shadow-navy-900/5 ring-1 ring-navy-900/5 lg:sticky lg:top-28">
            <h3 className="text-2xl font-extrabold text-navy-900">¿Cuál es su tratamiento?</h3>
            <p className="mt-3 text-navy-900/70">{tratamiento.intro}</p>
            <ul className="mt-6 space-y-3">
              {tratamiento.items.map((t) => (
                <li key={t} className="flex items-center gap-3 rounded-2xl bg-brand-50 px-4 py-3 font-semibold text-navy-900 ring-1 ring-brand-100">
                  <span className="h-2.5 w-2.5 flex-none rounded-full bg-cta" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Toolkit + redes */}
      <section className="px-4 pt-20 sm:px-6 sm:pt-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="reveal relative flex flex-col items-start justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-900 to-navy-800 p-10 text-white shadow-2xl shadow-navy-900/20">
            <div className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full border-[36px] border-white/10" aria-hidden />
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
              <Icon name="book" />
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight">Descargá Toolkit</h2>
            <InterestLink
              href={toolkitUrl}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-cta-hover"
            >
              Descargar <Icon name="arrow" className="h-4 w-4 rotate-90" />
            </InterestLink>
          </div>
          <div className="reveal relative overflow-hidden rounded-[2rem] text-white shadow-2xl shadow-navy-900/20">
            <Image src="/images/campana-colon-v2.webp" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-right" />
            <div className="banner-tint absolute inset-0" />
            <div className="relative max-w-md p-10">
              <h2 className="text-3xl font-extrabold tracking-tight">Seguí la campaña en nuestras redes</h2>
              <p className="mt-3 text-white/85">Seguí toda nuestra campaña de prevención y detección temprana de Cáncer de colon.</p>
              <p className="mt-2 font-semibold">¡Seguinos en Instagram!</p>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-navy-900 shadow-lg shadow-black/20 transition hover:bg-brand-50"
              >
                <Icon name="instagram" className="h-5 w-5" />
                ¡Seguinos!
              </a>
            </div>
          </div>
        </div>
      </section>

      <Donate />
    </>
  );
}
