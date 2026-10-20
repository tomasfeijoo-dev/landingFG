import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import ProgramHeader from "@/components/ProgramHeader";

export const metadata: Metadata = {
  title: "Mujeres en Salud · Programas",
  description:
    "Mujeres en Salud: un programa que promueve el crecimiento de la mujer en gastroenterología a través de la educación, el crecimiento profesional y el desarrollo del liderazgo.",
};

// Colores propios del programa Mujeres en Salud, usados como detalle sobre la identidad de la Fundación
const VIOLETA = "#3f2b6e";
const ROSA = "#c8396d";
const degradeMujeres = `linear-gradient(90deg, ${VIOLETA}, ${ROSA})`;
const premioUrl = "https://fundaciongedyt.org.ar/mujeres-gedyt-landing.html";

// Etiqueta con los colores del programa
function ChipMujeres({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#c8396d]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c8396d] ring-1 ring-[#c8396d]/20">
      <span className="h-1.5 w-1.5 rounded-full bg-[#c8396d]" />
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
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
              <Image src="/images/mujeres-workshop.webp" alt="Workshop del programa Mujeres en Salud" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-1000 hover:scale-105" />
            </div>
            <div className="absolute right-0 bottom-0 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-navy-900/5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c8396d]/10 text-[#c8396d]">
                <Icon name="sparkle" className="h-5 w-5" />
              </span>
              <span className="text-sm leading-tight">
                <strong className="block text-navy-900">Workshops</strong>
                <span className="text-navy-900/60">y webinars</span>
              </span>
            </div>
          </div>
          <div className="reveal">
            <ChipMujeres>El programa</ChipMujeres>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">Mujeres liderando la{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: degradeMujeres }}>
                gastroenterología
              </span>
            </h2>
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c8396d]">Cómo trabajamos</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">El programa se apoya en dos pilares</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pilares.map((p, i) => (
              <article
                key={p.title}
                className={`team-card reveal-pop relative overflow-hidden rounded-3xl p-8 sm:p-10 ${
                  i === 1 ? "bg-gradient-to-br from-[#3f2b6e] to-navy-900 text-white" : "bg-white ring-1 ring-navy-900/5"
                }`}
              >
                {i === 0 && <span className="team-sheen" aria-hidden />}
                <span className={`pointer-events-none absolute -top-4 right-4 text-8xl font-extrabold ${i === 1 ? "text-white/5" : "text-brand-50"}`} aria-hidden>
                  0{i + 1}
                </span>
                <span className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${i === 1 ? "bg-white/10 text-[#f08bb0]" : "bg-[#c8396d]/10 text-[#c8396d]"}`}>
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
            <ChipMujeres>Programa Mujeres en Gastro y Endo</ChipMujeres>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
              Reconocer el liderazgo para transformar el futuro de la salud digestiva
            </h2>
            <span className="mx-auto mt-6 block h-1 w-24 rounded-full" style={{ background: degradeMujeres }} aria-hidden />
            <p className="mt-6 text-xl font-semibold leading-relaxed text-[#3f2b6e]">
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
              <p className="border-l-4 border-[#c8396d] pl-5 font-semibold text-navy-900">
                Porque reconocer esos liderazgos también es una forma de fortalecer el sistema de salud.
              </p>
              <a
                href={premioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="!mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#c8396d]/25 transition hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: degradeMujeres }}
              >
                Conocé el Premio Mujeres Destacadas <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
            <div className="reveal relative pb-8 sm:pl-8">
              <div className="relative aspect-[7/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20 sm:aspect-[2/1]">
                <Image
                  src="/images/premio-mujeres-ddw-hd.webp"
                  alt="Profesionales argentinos en el Digestive Disease Week"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-1000 hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-navy-900/5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c8396d]/10 text-[#c8396d]">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-[#3f2b6e] px-4 py-20 text-white sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[#c8396d]/25 blur-3xl" aria-hidden />
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
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#c8396d]/25 text-[#f08bb0]">
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
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#3f2b6e]/[0.04] to-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto max-w-2xl text-center">
            <ChipMujeres>Una agenda de equidad</ChipMujeres>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Visibilizar trayectorias para inspirar a{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: degradeMujeres }}>
                nuevas generaciones
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <article key={c.title} className="reveal-pop relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#3f2b6e]/10 sm:p-10">
                <span className="absolute inset-x-0 top-0 h-1" style={{ background: degradeMujeres }} aria-hidden />
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c8396d]/10 text-[#c8396d]">
                  <Icon name={c.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-xl font-extrabold tracking-tight text-navy-900">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-navy-900/70">{c.text}</p>
              </article>
            ))}

            {/* Publicación relacionada, en formato de nota */}
            <Link
              href="/novedades#poster-brecha-genero"
              className="reveal-pop group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#3f2b6e]/10 transition hover:-translate-y-1 hover:shadow-xl md:col-span-2 lg:col-span-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-50">
                <Image src="/publicaciones/poster-3.webp" alt="Póster Brecha de género en el liderazgo de sistemas de salud" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover object-top transition duration-700 group-hover:scale-110" />
                <span className="absolute top-4 left-4 z-10 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#c8396d] shadow-md">Publicación</span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-extrabold leading-snug text-navy-900">
                  Brecha de género en el liderazgo de sistemas de salud: un ejemplo en la gastroenterología
                </h3>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-semibold text-[#3f2b6e] transition group-hover:text-[#c8396d]">
                  Ver publicación <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* Cierre a todo el ancho con la frase */}
      <section className="relative overflow-hidden px-6 py-16 text-white sm:px-12 sm:py-20" style={{ background: `linear-gradient(120deg, ${VIOLETA} 0%, #5a2f75 55%, ${ROSA} 100%)` }}>
        <span className="pointer-events-none absolute top-2 right-[6%] text-[14rem] leading-none font-extrabold text-white/10 select-none" aria-hidden>
          “
        </span>
        <div className="reveal relative mx-auto max-w-6xl">
          <blockquote className="text-xl leading-snug font-semibold sm:text-2xl lg:text-[2rem]">
            Porque cuando una institución reconoce el liderazgo, fortalece el presente de la medicina. Y cuando decide invertir en quienes construirán el
            conocimiento del mañana, también fortalece el futuro del sistema de salud.
          </blockquote>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
