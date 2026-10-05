import type { Metadata } from "next";
import Image from "next/image";
import Donate from "@/components/Donate";
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
      <PageHeader eyebrow="Programas" title="Iniciativas en salud digestiva" image="/images/prog-equipo.webp" imageAlt="Equipo de profesionales de la salud con la Fundación Gedyt" imagePosition="center 30%" />

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <p className="reveal mx-auto max-w-3xl text-center text-xl leading-relaxed text-navy-900/75">
          {iniciativas.before}
          <strong className="text-navy-900">{iniciativas.bold}</strong>
          {iniciativas.after}
        </p>
      </section>

      {/* Nuestros programas */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-4 py-20 sm:px-6 sm:py-28">
        <svg className="pointer-events-none absolute -top-10 -right-20 hidden h-72 w-[36rem] md:block" viewBox="0 0 300 160" aria-hidden>
          <path d="M10 -10 C 60 90, 170 110, 210 60 C 240 20, 200 -5, 180 25 C 155 65, 230 120, 320 100" stroke="#3fa5d4" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.5" />
        </svg>
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full border-[48px] border-white/5" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Nuestros programas</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {programas.map((p, i) => (
              <article
                key={p.title}
                className="reveal-pop group relative flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-black/30 ring-1 ring-white/10"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold tracking-[0.16em] text-navy-900 backdrop-blur">0{i + 1}</span>
                  <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cta text-white shadow-lg">
                    <Icon name={p.icon} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl font-extrabold tracking-tight text-navy-900">{p.title}</h3>
                  {p.text && <p className="mt-2 text-navy-900/70">{p.text}</p>}
                  <div className="mt-6 flex flex-col gap-2.5">
                    {p.links.map((l) => (
                      <InterestLink
                        key={l.label}
                        href={l.href}
                        className="group/link flex items-center justify-between gap-3 rounded-2xl bg-brand-50 px-4 py-3 font-semibold text-navy-900 ring-1 ring-brand-100 transition hover:bg-cta hover:text-white hover:ring-cta"
                      >
                        {l.label}
                        <Icon name="arrow" className="h-4 w-4 flex-none text-cta transition group-hover/link:translate-x-0.5 group-hover/link:text-white" />
                      </InterestLink>
                    ))}
                  </div>
                  {p.joinCta && (
                    <a
                      href={`mailto:${programasEmail}?subject=${encodeURIComponent("Quiero sumar a mi organización")}`}
                      className="mt-auto flex items-center gap-3 rounded-2xl border border-dashed border-cta/40 px-4 py-3 pt-3 text-sm text-navy-900/75 transition hover:border-cta hover:bg-brand-50/60"
                      style={{ marginTop: "1.5rem" }}
                    >
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-50 text-cta">
                        <Icon name="mail" className="h-4 w-4" />
                      </span>
                      <span>
                        Quiero sumar a <strong className="text-navy-900">mi organización</strong>
                        <span className="block font-semibold break-all text-cta">{programasEmail}</span>
                      </span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Donate />
    </>
  );
}
