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
      <ProgramHeader eyebrow="Programa · Liderazgo, workshops y webinars" title="Mujeres en Salud" image="/banners/mujeres-hands-on.webp" imagePosition="center 40%" />

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

      {/* Premio Mujeres Destacadas */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow chip>Programa Mujeres en Gastro y Endo</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
              Reconocer el liderazgo para transformar el futuro de la salud digestiva
            </h2>
            <p className="mt-6 text-xl font-semibold leading-relaxed text-cta">
              La prevención también se construye formando, reconociendo e impulsando a quienes hacen avanzar la medicina.
            </p>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal space-y-5 text-lg leading-relaxed text-navy-900/70">
              <p>
                Detrás de cada innovación, de cada programa de prevención y de cada mejora en la calidad de atención existen profesionales que dedican años a
                investigar, enseñar y generar conocimiento. Muchas veces ese trabajo transforma el sistema de salud sin ocupar un lugar visible.
              </p>
              <p>
                Con esa convicción creamos el <strong className="text-navy-900">Premio Mujeres Destacadas en Gastroenterología y Endoscopia Digestiva</strong>,
                una iniciativa que reconoce a mujeres cuyo recorrido profesional ha contribuido de manera significativa a la investigación, la prevención, la
                formación de recursos humanos y la ampliación del acceso a la salud digestiva en Argentina.
              </p>
              <p className="border-l-4 border-cta pl-5 font-semibold text-navy-900">
                Porque reconocer esos liderazgos también es una forma de fortalecer el sistema de salud.
              </p>
            </div>
            <div className="reveal relative pb-8 sm:pl-8">
              <div className="relative aspect-[7/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20 sm:aspect-[2/1]">
                <Image
                  src="/images/premio-mujeres-ddw.webp"
                  alt="Profesionales argentinos en el Digestive Disease Week"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-1000 hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-navy-900/5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-cta">
                  <Icon name="graduation" className="h-5 w-5" />
                </span>
                <span className="text-sm leading-tight">
                  <strong className="block text-navy-900">Digestive Disease Week</strong>
                  <span className="text-navy-900/60">DDW 2027</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La beca */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-4 py-20 text-white sm:px-6 sm:py-24">
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-accent">El premio</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Una inversión concreta en quienes impulsan la especialidad</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              La profesional distinguida recibe una <strong className="text-white">beca completa para participar del Digestive Disease Week (DDW) 2027</strong>,
              uno de los encuentros científicos más importantes del mundo en gastroenterología.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Más que un reconocimiento, es una oportunidad para acceder a los últimos avances científicos, intercambiar experiencias con referentes
              internacionales y seguir incorporando conocimiento que luego se traduce en una mejor atención para miles de pacientes.
            </p>
            <p className="mt-6 text-xl font-bold text-sky-accent">
              Invertir en quienes lideran la salud digestiva también es invertir en el futuro de la prevención.
            </p>
          </div>
          <div className="reveal-pop rounded-[2rem] bg-white/[0.07] p-8 ring-1 ring-white/10 backdrop-blur sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">La beca incluye</p>
            <ul className="mt-6 space-y-4">
              {[
                { icon: "check", label: "Acreditación", sub: "al congreso DDW 2027" },
                { icon: "rocket", label: "Pasajes", sub: "ida y vuelta" },
                { icon: "building", label: "Alojamiento", sub: "durante el encuentro" },
              ].map((b) => (
                <li key={b.label} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-sky-accent/20 text-sky-accent">
                    <Icon name={b.icon} className="h-6 w-6" />
                  </span>
                  <span>
                    <strong className="block text-lg">{b.label}</strong>
                    <span className="text-sm text-white/60">{b.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Equidad */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="reveal mx-auto max-w-4xl">
          <Eyebrow>Una agenda de equidad</Eyebrow>
          <div className="mt-6 grid gap-8 text-lg leading-relaxed text-navy-900/70 md:grid-cols-2">
            <p>
              El Premio Mujeres busca contribuir a una agenda de mayor equidad dentro del sistema sanitario, visibilizando trayectorias de excelencia que
              durante muchos años permanecieron subrepresentadas.
            </p>
            <p>
              Reconocer a mujeres que investigan, enseñan, forman profesionales y transforman la práctica médica no solo pone en valor su recorrido. También
              amplía los modelos de referencia para nuevas generaciones de médicas, investigadoras y profesionales de la salud que encontrarán en ellas una
              inspiración para desarrollar su propio camino.
            </p>
          </div>
          <figure className="relative mt-12 rounded-[2rem] bg-gradient-to-br from-brand-50 to-white px-8 pt-12 pb-10 ring-1 ring-brand-100 sm:px-12">
            <span className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-cta text-white shadow-lg shadow-cta/30 sm:left-12">
              <Icon name="quote" className="h-6 w-6" />
            </span>
            <blockquote className="text-xl font-semibold leading-snug text-navy-900 sm:text-2xl">
              Porque cuando una institución reconoce el liderazgo, fortalece el presente de la medicina. Y cuando decide invertir en quienes construirán el
              conocimiento del mañana, también fortalece el futuro del sistema de salud.
            </blockquote>
          </figure>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
