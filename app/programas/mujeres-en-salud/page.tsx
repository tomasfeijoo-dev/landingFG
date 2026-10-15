import type { Metadata } from "next";
import Image from "next/image";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import ProgramHeader from "@/components/ProgramHeader";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mujeres en Salud · Programas",
  description:
    "Mujeres en Salud: un programa que promueve el crecimiento de la mujer en gastroenterología a través de la educación, el crecimiento profesional y el desarrollo del liderazgo.",
};

// Textos tal cual figuran en la página del programa en fundaciongedyt.org.ar
const pilares = [
  {
    icon: "users",
    title: "Mentoreo",
    text: "Emparejar gastroenterólogas en sus primeros pasos por la especialidad con mentoras experimentadas. Promueve el intercambio de experiencias, información y oportunidades profesionales.",
  },
  {
    icon: "graduation",
    title: "Eventos de formación profesional",
    text: "Ofrecer una variedad de talleres y oportunidades para establecer contactos. El objetivo de estos talleres y eventos es incorporar herramientas que posicionen a las profesionales en gastroenterología como líderes para la gestión, manejo de equipos y adquirir habilidades de speakers profesionales, manejo de medios y redes en su temática profesional.",
  },
];

export default function MujeresEnSaludPage() {
  return (
    <>
      <ProgramHeader eyebrow="Programa · Liderazgo, workshops y webinars" title="Mujeres en Salud" />

      {/* El programa */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative pb-8 sm:pr-8">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
              <Image src="/images/mujeres-workshop.webp" alt="Workshop del programa Mujeres en Salud" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-1000 hover:scale-105" />
            </div>
            <div className="absolute right-0 bottom-0 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-navy-900/5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-cta">
                <Icon name="sparkle" className="h-5 w-5" />
              </span>
              <span className="text-sm leading-tight">
                <strong className="block text-navy-900">Workshops</strong>
                <span className="text-navy-900/60">y webinars</span>
              </span>
            </div>
          </div>
          <div className="reveal">
            <Eyebrow chip>El programa</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">Mujeres liderando la gastroenterología</h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-900/70">
              Este programa promueve el crecimiento de la mujer a través de{" "}
              <strong className="text-navy-900">la educación, el crecimiento profesional y el desarrollo del liderazgo</strong>. Nuestro enfoque es
              colaborativo y empoderador. Buscamos la unión de las mujeres en gastroenterología y sus aliados como agentes de cambio y aumentar su visibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <Eyebrow>Cómo trabajamos</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">El programa se apoya en dos pilares</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pilares.map((p, i) => (
              <article
                key={p.title}
                className={`team-card reveal-pop relative overflow-hidden rounded-3xl p-8 sm:p-10 ${
                  i === 1 ? "bg-gradient-to-br from-navy-900 to-navy-800 text-white" : "bg-white ring-1 ring-navy-900/5"
                }`}
              >
                {i === 0 && <span className="team-sheen" aria-hidden />}
                <span className={`pointer-events-none absolute -top-4 right-4 text-8xl font-extrabold ${i === 1 ? "text-white/5" : "text-brand-50"}`} aria-hidden>
                  0{i + 1}
                </span>
                <span className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${i === 1 ? "bg-white/10 text-sky-accent" : "bg-brand-50 text-cta"}`}>
                  <Icon name={p.icon} className="h-7 w-7" />
                </span>
                <h3 className={`relative mt-6 text-2xl font-extrabold tracking-tight ${i === 1 ? "" : "text-navy-900"}`}>{p.title}</h3>
                <p className={`relative mt-4 leading-relaxed ${i === 1 ? "text-white/80" : "text-navy-900/70"}`}>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
