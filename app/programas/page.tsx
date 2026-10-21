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
      {/* El banner queda por encima del fondo azul de la sección de programas */}
      <div className="relative z-10">
        <PageHeader
          eyebrow="Programas"
          title="Iniciativas en salud digestiva"
          text={
            <>
              {iniciativas.before}
              <strong className="font-semibold text-navy-900">{iniciativas.bold}</strong>
              {iniciativas.after}
            </>
          }
          background={<ArgentinaMap focusX={0.7} speed={1.8} quickStart fade="bg-gradient-to-r from-white/95 via-white/75 to-white/0 max-md:via-white/85 max-md:to-white/80" />}
        />
      </div>

      {/* Nuestros programas */}
      <section className="relative overflow-clip bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 -mt-40 px-4 pt-56 pb-16 sm:px-6 sm:pb-20">
        <svg className="pointer-events-none absolute top-32 -right-20 hidden h-72 w-[36rem] md:block" viewBox="0 0 300 160" aria-hidden>
          <path d="M10 -10 C 60 90, 170 110, 210 60 C 240 20, 200 -5, 180 25 C 155 65, 230 120, 320 100" stroke="#3fa5d4" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.5" />
        </svg>
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full border-[48px] border-white/5" aria-hidden />
        <div className="relative mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Nuestros programas</h2>
          <div id="nuestros-programas" className="mt-12 grid scroll-mt-28 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programas.map((p, i) => (
              <article
                key={p.title}
                className="reveal-pop group relative row-span-4 grid grid-rows-subgrid gap-0 overflow-hidden rounded-3xl bg-navy-950/70 shadow-2xl shadow-black/30 ring-1 ring-white/10 backdrop-blur"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={p.image} alt={p.title.replace("\n", " ")} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-extrabold tracking-[0.16em] text-navy-900 backdrop-blur">0{i + 1}</span>
                  <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cta text-white shadow-lg">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                </div>
                {/* Título, texto y botones comparten filas entre tarjetas (subgrid) para quedar alineados */}
                <h3 className="whitespace-pre-line px-5 pt-5 text-lg font-extrabold leading-tight tracking-tight text-white">{p.title}</h3>
                <p className="px-5 pt-2 text-sm text-white/70">{p.text}</p>
                <div className="flex flex-col px-5 pt-5 pb-5">
                  <div className="flex flex-col gap-2">
                    {p.links.map((l) => (
                      <InterestLink
                        key={l.label}
                        href={l.href}
                        className="group/link flex items-center justify-between gap-2 rounded-xl bg-white/10 px-3 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-cta hover:ring-cta"
                      >
                        {l.label}
                        <Icon name="arrow" className="h-4 w-4 flex-none text-sky-accent transition group-hover/link:translate-x-0.5 group-hover/link:text-white" />
                      </InterestLink>
                    ))}
                  </div>
                  {p.joinCta && (
                    <a
                      href={`mailto:${programasEmail}?subject=${encodeURIComponent("Quiero sumar a mi organización")}`}
                      className="mt-3 block rounded-xl border border-dashed border-white/25 px-3 py-2.5 text-xs text-white/75 transition hover:border-sky-accent hover:bg-white/5"
                    >
                      <span>
                        Quiero sumar a <strong className="text-white">mi organización</strong>
                        <span className="block text-[11px] font-semibold tracking-tight text-sky-accent">{programasEmail}</span>
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
