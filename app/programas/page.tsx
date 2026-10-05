import type { Metadata } from "next";
import Image from "next/image";
import ArgentinaMap from "@/components/ArgentinaMap";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import InterestLink from "@/components/InterestLink";
import { PageHeader } from "@/components/ui";
import { iniciativas, programas, programasEmail } from "@/lib/programas";

export const metadata: Metadata = {
  title: "Programas",
  description: "Programas de prevención, educación y entrenamiento de Fundación Gedyt: Prevenir es Cuidar, Mujeres en Salud, Entrenamiento para profesionales y Misiones.",
};

export default function ProgramasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programas"
        title="Iniciativas en salud digestiva"
        background={<ArgentinaMap focusX={0.7} fade="bg-gradient-to-r from-white/95 via-white/75 to-white/0 max-md:to-white/50" />}
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <p className="reveal mx-auto max-w-3xl text-center text-xl leading-relaxed text-navy-900/75">
          {iniciativas.before}
          <strong className="text-navy-900">{iniciativas.bold}</strong>
          {iniciativas.after}
        </p>
      </section>

      {/* Nuestros programas */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-4 py-16 sm:px-6 sm:py-20">
        <svg className="pointer-events-none absolute -top-10 -right-20 hidden h-72 w-[36rem] md:block" viewBox="0 0 300 160" aria-hidden>
          <path d="M10 -10 C 60 90, 170 110, 210 60 C 240 20, 200 -5, 180 25 C 155 65, 230 120, 320 100" stroke="#3fa5d4" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.5" />
        </svg>
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full border-[48px] border-white/5" aria-hidden />
        <div className="relative mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Nuestros programas</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programas.map((p, i) => (
              <article
                key={p.title}
                className="reveal-pop group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/30 ring-1 ring-white/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-extrabold tracking-[0.16em] text-navy-900 backdrop-blur">0{i + 1}</span>
                  <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cta text-white shadow-lg">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-extrabold leading-tight tracking-tight text-navy-900">{p.title}</h3>
                  {p.text && <p className="mt-2 text-sm text-navy-900/70">{p.text}</p>}
                  <div className="mt-auto flex flex-col gap-2 pt-5">
                    {p.links.map((l) => (
                      <InterestLink
                        key={l.label}
                        href={l.href}
                        className="group/link flex items-center justify-between gap-2 rounded-xl bg-brand-50 px-3 py-2.5 text-sm font-semibold text-navy-900 ring-1 ring-brand-100 transition hover:bg-cta hover:text-white hover:ring-cta"
                      >
                        {l.label}
                        <Icon name="arrow" className="h-4 w-4 flex-none text-cta transition group-hover/link:translate-x-0.5 group-hover/link:text-white" />
                      </InterestLink>
                    ))}
                  </div>
                  {p.joinCta && (
                    <a
                      href={`mailto:${programasEmail}?subject=${encodeURIComponent("Quiero sumar a mi organización")}`}
                      className="mt-3 block rounded-xl border border-dashed border-cta/40 px-3 py-2.5 text-xs text-navy-900/75 transition hover:border-cta hover:bg-brand-50/60"
                    >
                      <span>
                        Quiero sumar a <strong className="text-navy-900">mi organización</strong>
                        <span className="block text-[11px] font-semibold tracking-tight text-cta">{programasEmail}</span>
                      </span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
