import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import ProgramHeader from "@/components/ProgramHeader";
// Colores propios del programa Mujeres en Salud, usados como detalle sobre la identidad de la Fundación
import { ROSA, VIOLETA, degradeMujeres, premioHref } from "@/lib/mujeres";

export const metadata: Metadata = {
  title: "Mujeres en Salud · Programas",
  description:
    "Mujeres en Salud: un programa que promueve el crecimiento de la mujer en gastroenterología a través de la educación, el crecimiento profesional y el desarrollo del liderazgo.",
};


// Etiqueta con los colores del programa
function ChipMujeres({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#dd226c]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#dd226c] ring-1 ring-[#dd226c]/20">
      <span className="h-1.5 w-1.5 rounded-full bg-[#dd226c]" />
      {children}
    </span>
  );
}

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
      <ProgramHeader eyebrow="Programa · Liderazgo, workshops y webinars" title="Mujeres en Salud" image="/banners/mujeres-hands-on.webp" imagePosition="center 40%" accent={degradeMujeres} tint="violeta" />

      {/* El programa */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative pb-8 sm:pr-8">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#280d55]/20">
              <Image src="/images/mujeres-workshop.webp" alt="Workshop del programa Mujeres en Salud" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-1000 hover:scale-105" />
            </div>
            <div className="absolute right-0 bottom-0 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-[#280d55]/5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dd226c]/10 text-[#dd226c]">
                <Icon name="sparkle" className="h-5 w-5" />
              </span>
              <span className="text-sm leading-tight">
                <strong className="block text-[#280d55]">Workshops</strong>
                <span className="text-[#280d55]/60">y webinars</span>
              </span>
            </div>
          </div>
          <div className="reveal">
            <ChipMujeres>El programa</ChipMujeres>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#280d55] sm:text-5xl">Mujeres liderando la{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: degradeMujeres }}>
                gastroenterología
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#280d55]/70">
              Este programa promueve el crecimiento de la mujer a través de{" "}
              <strong className="text-[#280d55]">la educación, el crecimiento profesional y el desarrollo del liderazgo</strong>. Nuestro enfoque es
              colaborativo y empoderador. Buscamos la unión de las mujeres en gastroenterología y sus aliados como agentes de cambio y aumentar su visibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="bg-[#49297d]/[0.06] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dd226c]">Cómo trabajamos</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#280d55] sm:text-4xl">El programa se apoya en dos pilares</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pilares.map((p, i) => (
              <article
                key={p.title}
                className={`team-card reveal-pop relative overflow-hidden rounded-3xl p-8 sm:p-10 ${
                  i === 1 ? "bg-gradient-to-br from-[#49297d] to-[#280d55] text-white" : "bg-white ring-1 ring-[#280d55]/5"
                }`}
              >
                {i === 0 && <span className="team-sheen" aria-hidden />}
                <span className={`pointer-events-none absolute -top-4 right-4 text-8xl font-extrabold ${i === 1 ? "text-white/5" : "text-[#49297d]/[0.07]"}`} aria-hidden>
                  0{i + 1}
                </span>
                <span className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${i === 1 ? "bg-white/10 text-[#f08bb0]" : "bg-[#dd226c]/10 text-[#dd226c]"}`}>
                  <Icon name={p.icon} className="h-7 w-7" />
                </span>
                <h3 className={`relative mt-6 text-2xl font-extrabold tracking-tight ${i === 1 ? "" : "text-[#280d55]"}`}>{p.title}</h3>
                <p className={`relative mt-4 leading-relaxed ${i === 1 ? "text-white/80" : "text-[#280d55]/70"}`}>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Premio Mujeres Destacadas */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-3xl text-center">
            <ChipMujeres>Programa Mujeres en Gastro y Endo</ChipMujeres>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#280d55] sm:text-5xl">
              Reconocer el liderazgo para transformar el futuro de la salud digestiva
            </h2>
            <span className="mx-auto mt-6 block h-1 w-24 rounded-full" style={{ background: degradeMujeres }} aria-hidden />
            <p className="mt-6 text-xl font-semibold leading-relaxed text-[#49297d]">
              La prevención también se construye formando, reconociendo e impulsando a quienes hacen avanzar la medicina.
            </p>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal space-y-5 text-lg leading-relaxed text-[#280d55]/70">
              <p>
                Detrás de cada innovación, de cada programa de prevención y de cada mejora en la calidad de atención existen profesionales que dedican años a
                investigar, enseñar y generar conocimiento. Muchas veces ese trabajo transforma el sistema de salud sin ocupar un lugar visible.
              </p>
              <p>
                Con esa convicción creamos el <strong className="text-[#280d55]">Premio Mujeres Destacadas en Gastroenterología y Endoscopia Digestiva</strong>,
                una iniciativa que reconoce a mujeres cuyo recorrido profesional ha contribuido de manera significativa a la investigación, la prevención, la
                formación de recursos humanos y la ampliación del acceso a la salud digestiva en Argentina.
              </p>
              <p className="border-l-4 border-[#dd226c] pl-5 font-semibold text-[#280d55]">
                Porque reconocer esos liderazgos también es una forma de fortalecer el sistema de salud.
              </p>
            </div>
            <div className="reveal relative pb-8 sm:pl-8">
              <div className="relative aspect-[7/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#280d55]/20 sm:aspect-[2/1]">
                <Image
                  src="/images/premio-mujeres-ddw-hd.webp"
                  alt="Profesionales argentinos en el Digestive Disease Week"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-1000 hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-[#280d55]/5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dd226c]/10 text-[#dd226c]">
                  <Icon name="graduation" className="h-5 w-5" />
                </span>
                <span className="text-sm leading-tight">
                  <strong className="block text-[#280d55]">Digestive Disease Week</strong>
                  <span className="text-[#280d55]/60">DDW 2027</span>
                </span>
              </div>
            </div>
          </div>

          <div className="reveal mt-14 flex justify-center">
            <Link
              href={premioHref}
              className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-base font-bold text-white shadow-xl shadow-[#dd226c]/35 ring-4 ring-[#dd226c]/15 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#dd226c]/45 sm:px-12 sm:py-5 sm:text-xl"
              style={{ background: degradeMujeres }}
            >
              Conocé el Premio Mujeres Destacadas
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/20 transition group-hover:translate-x-1">
                <Icon name="arrow" className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* La beca */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#280d55] via-[#280d55] to-[#49297d] px-4 py-20 text-white sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[#dd226c]/25 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f08bb0]">El premio</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Una inversión concreta en quienes impulsan la especialidad</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              La profesional distinguida recibe una <strong className="text-white">beca completa para participar del Digestive Disease Week (DDW) 2027</strong>,
              uno de los encuentros científicos más importantes del mundo en gastroenterología.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Más que un reconocimiento, es una oportunidad para acceder a los últimos avances científicos, intercambiar experiencias con referentes
              internacionales y seguir incorporando conocimiento que luego se traduce en una mejor atención para miles de pacientes.
            </p>
            <p className="mt-6 text-xl font-bold text-[#f08bb0]">
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
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#dd226c]/25 text-[#f08bb0]">
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
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#49297d]/[0.04] to-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <ChipMujeres>Una agenda de equidad</ChipMujeres>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#280d55] sm:text-4xl">
              Visibilizar trayectorias para inspirar a{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: degradeMujeres }}>
                nuevas generaciones
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-[1.3fr_1.3fr_0.6fr]">
            {[
              {
                icon: "heart",
                title: "Más equidad en el sistema sanitario",
                text: "El Premio Mujeres busca contribuir a una agenda de mayor equidad dentro del sistema sanitario, visibilizando trayectorias de excelencia que durante muchos años permanecieron subrepresentadas.",
              },
              {
                icon: "users",
                title: "Nuevos modelos de referencia",
                text: "Reconocer a mujeres que investigan, enseñan, forman profesionales y transforman la práctica médica no solo pone en valor su recorrido. También amplía los modelos de referencia para nuevas generaciones de médicas, investigadoras y profesionales de la salud que encontrarán en ellas una inspiración para desarrollar su propio camino.",
              },
            ].map((c) => (
              <article key={c.title} className="reveal-pop relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#49297d]/10 sm:p-10">
                <span className="absolute inset-x-0 top-0 h-1" style={{ background: degradeMujeres }} aria-hidden />
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dd226c]/10 text-[#dd226c]">
                  <Icon name={c.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-xl font-extrabold tracking-tight text-[#280d55]">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-[#280d55]/70">{c.text}</p>
              </article>
            ))}

            {/* Publicación relacionada, en formato de nota */}
            <Link
              href="/novedades#poster-brecha-genero"
              className="reveal-pop group mx-auto flex w-full max-w-xs flex-col overflow-hidden rounded-3xl bg-white/70 ring-1 ring-[#49297d]/10 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg md:col-span-2 lg:col-span-1 lg:max-w-none lg:self-center"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#49297d]/[0.06]">
                <Image src="/publicaciones/poster-3.webp" alt="Póster Brecha de género en el liderazgo de sistemas de salud" fill sizes="(min-width: 1024px) 20vw, 320px" className="object-cover object-top opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                <span className="absolute top-3 left-3 z-10 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-[#dd226c] shadow-sm">Publicación</span>
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-4">
                <h3 className="mb-4 text-sm font-bold leading-snug text-[#280d55]/85">
                  Brecha de género en el liderazgo de sistemas de salud: un ejemplo en la gastroenterología
                </h3>
                <span
                  className="mt-auto inline-flex items-center justify-center gap-1.5 self-stretch whitespace-nowrap rounded-full px-3 py-2.5 text-[13px] font-bold text-white shadow-md shadow-[#dd226c]/25 transition group-hover:shadow-lg"
                  style={{ background: degradeMujeres }}
                >
                  Ver publicación <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* Cierre a todo el ancho con la frase */}
      <section className="relative overflow-hidden px-6 py-16 text-white sm:px-12 sm:py-20" style={{ background: `linear-gradient(120deg, ${VIOLETA} 0%, #693c98 55%, ${ROSA} 100%)` }}>
        <div className="reveal relative mx-auto max-w-7xl">
          <blockquote className="relative text-lg leading-snug font-semibold sm:pr-32 sm:text-xl lg:pr-0 lg:text-[1.1rem] xl:text-[1.3rem]">
            Porque cuando una institución reconoce el liderazgo, fortalece el presente de la medicina.
            <br className="hidden lg:block" /> Y cuando decide invertir en quienes construirán el conocimiento del mañana,
            <br className="hidden lg:block" /> también fortalece el futuro del sistema de salud.
          </blockquote>
          <span className="pointer-events-none absolute top-1/2 -right-2 hidden -translate-y-[30%] font-serif text-[14rem] leading-none font-black text-white/20 select-none sm:block lg:text-[19rem]" aria-hidden>
            ”
          </span>
        </div>
      </section>

      <DonateBanner violeta />
    </>
  );
}
