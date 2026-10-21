import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ConsejoForm from "@/components/ConsejoForm";
import Icon from "@/components/Icon";
import { Words } from "@/components/ui";
import { BORDO, competencias, consejoEmail } from "@/lib/consejo";

export const metadata: Metadata = {
  title: "Consejo Directivo · Convocatoria 2026",
  description:
    "Convocamos a personas con trayectoria, redes y compromiso genuino para integrar el Consejo Directivo de Fundación GEDYT, el órgano de gobierno que conduce la estrategia de la Fundación.",
};

// Textos tal cual figuran en la landing de la convocatoria (fundaciongedyt.org.ar/consejo)
const cifras = [
  { value: "30.000+", label: "personas tamizadas" },
  { value: "12", label: "provincias con presencia" },
  { value: "10", label: "años de trayectoria" },
];

const rol = [
  { icon: "institution", title: "Presencia estratégica", text: "Participar en decisiones de alto nivel que guían el rumbo de la organización." },
  { icon: "handshake", title: "Apertura de puertas", text: "Conectar a la Fundación con recursos, alianzas y oportunidades desde tus redes." },
  { icon: "quote", title: "Representación", text: "Ser voz de la Fundación en espacios relevantes de salud, empresa o política." },
  { icon: "heart", title: "Compromiso real", text: "Dedicación de 4 a 6 horas mensuales en un rol honorario con impacto medible." },
];

const condiciones = [
  "Rol honorario, no remunerado",
  "Mandato inicial de 3 años, renovable",
  "Mínimo una reunión anual presencial o virtual",
  "Los miembros actúan a título individual, no como representantes de sus organizaciones",
];

const perfiles = [
  { icon: "stethoscope", title: "Líderes en salud pública", text: "Con trayectoria en política sanitaria, sistemas de salud o prevención." },
  { icon: "chart", title: "Empresarios y ejecutivos", text: "Con redes corporativas y capacidad de movilizar recursos." },
  { icon: "building", title: "Especialistas en gobierno", text: "Con experiencia en relaciones con el Estado nacional o provincial." },
  { icon: "handshake", title: "Referentes en filantropía", text: "Con experiencia en fondeo, grants o desarrollo institucional." },
  { icon: "sparkle", title: "Innovadores en tecnología y datos", text: "Con visión de transformación digital en salud." },
  { icon: "map", title: "Líderes con perspectiva global", text: "Con redes internacionales y experiencia en salud global." },
];

const proceso = [
  { title: "Postulación abierta", date: "hasta el 31 de julio de 2026" },
  { title: "Revisión de candidaturas", date: "agosto 2026" },
  { title: "Entrevistas con candidatos seleccionados", date: "agosto / septiembre 2026" },
  { title: "Anuncio del nuevo Consejo en la Gala", date: "15 de septiembre de 2026" },
];

const faqs = [
  {
    q: "¿El rol es pago?",
    a: "No. Es un rol honorario y voluntario. Los miembros del Consejo no reciben remuneración, tal como lo establece la ley argentina para las organizaciones sin fines de lucro.",
  },
  { q: "¿Cuánto tiempo requiere?", a: "Entre 4 y 6 horas mensuales en promedio, incluyendo reuniones, lectura de materiales y participación en comisiones." },
  { q: "¿Necesito ser del sector salud?", a: "No. Buscamos diversidad de perfiles: salud, empresa, gobierno, filantropía, tecnología y sociedad civil." },
  { q: "¿Puedo postularme si vivo fuera de Argentina?", a: "Sí. Valoramos especialmente perfiles con perspectiva internacional y redes globales." },
  { q: "¿Cuándo vence la convocatoria?", a: "El plazo de postulación cierra el 31 de julio de 2026." },
];

// Detalle de la landing: la rayita bordó sobre cada título
function Titulo({ children, center = false, light = false }: { children: React.ReactNode; center?: boolean; light?: boolean }) {
  return (
    <div className={`reveal ${center ? "text-center" : ""}`}>
      <span className={`block h-1 w-12 rounded-full ${center ? "mx-auto" : ""}`} style={{ background: BORDO }} aria-hidden />
      <h2 className={`mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}>{children}</h2>
    </div>
  );
}

export default function ConsejoDirectivoPage() {
  return (
    <>
      {/* Banner, igual al del inicio */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <Image src="/banners/consejo.webp" alt="Reunión de trabajo alrededor de una mesa" fill priority sizes="100vw" className="kb-image object-cover" style={{ objectPosition: "center 40%" }} />
        <div className="banner-tint banner-shine absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_55%,rgb(140_29_75/0.35)_100%)]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-16 sm:px-12 sm:pt-14 sm:pb-20 lg:px-16">
          <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-3 rounded-full bg-white/10 py-2 pr-6 pl-2 text-base font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white hover:text-navy-900"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition group-hover:-translate-x-0.5 group-hover:bg-cta group-hover:text-white">
              <Icon name="arrow" className="h-5 w-5 rotate-180" />
            </span>
            Volver al inicio
          </Link>
          <br />
          <span className="fade-up inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase ring-1 ring-white/20 backdrop-blur" style={{ ["--d" as string]: "100ms" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#e0607f]" />
            Convocatoria abierta 2026 · Consejo Directivo
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] font-light tracking-tight sm:text-6xl">
            <Words text="Integrá el Consejo Directivo de" delay={150} />
            <span className="block font-extrabold">
              <Words text="Fundación GEDYT" delay={450} />
            </span>
          </h1>
          <p className="fade-up mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl" style={{ ["--d" as string]: "650ms" }}>
            Convocamos a personas con trayectoria, redes y compromiso genuino para integrar el órgano de gobierno que conduce la estrategia de la Fundación y el
            futuro de la prevención del cáncer colorrectal y del acceso a la salud digestiva de calidad.
          </p>
          <div className="fade-up mt-9" style={{ ["--d" as string]: "800ms" }}>
            <a
              href="#postulacion"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-navy-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
            >
              Iniciar mi postulación <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
          <ul className="fade-up mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-6 text-sm text-white/75" style={{ ["--d" as string]: "950ms" }}>
            {["Mandato de 3 años", "Rol honorario", "Convocatoria abierta hasta el 31 de julio de 2026"].map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e0607f]" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1.5" style={{ background: `linear-gradient(90deg, #015f86, ${BORDO})` }} aria-hidden />
      </section>

      {/* Contexto y cifras */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Titulo>
            El cáncer colorrectal es prevenible.
            <br />
            <span className="text-cta">Necesitamos a las personas adecuadas.</span>
          </Titulo>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {cifras.map((c) => (
              <div key={c.label} className="reveal-pop rounded-3xl bg-white p-7 shadow-sm ring-1 ring-navy-900/5">
                <p className="text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ color: BORDO }}>
                  {c.value}
                </p>
                <p className="mt-2 text-navy-900/60">{c.label}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 max-w-3xl text-lg leading-relaxed text-navy-900/70">
            Fundación GEDYT implementa programas de prevención y detección temprana de cáncer colorrectal y cuidado de la salud digestiva en todo el país. En esta
            etapa de crecimiento, estamos reconstituyendo y profesionalizando nuestro Consejo Directivo para acompañar la expansión de nuestro impacto.
          </p>
        </div>
      </section>

      {/* Qué es el Consejo */}
      <section className="bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Titulo>¿Qué es el Consejo Directivo?</Titulo>
          <p className="reveal mt-5 max-w-3xl text-lg leading-relaxed text-navy-900/70">
            El Consejo Directivo es el órgano de gobierno estratégico de Fundación GEDYT. Sus miembros ejercen liderazgo institucional, supervisión estratégica y
            contribuyen activamente al crecimiento y posicionamiento de la Fundación.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rol.map((r) => (
              <article key={r.title} className="reveal-pop relative overflow-hidden rounded-3xl bg-white p-7 shadow-sm ring-1 ring-navy-900/5">
                <span className="absolute inset-x-0 top-0 h-1" style={{ background: BORDO }} aria-hidden />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-cta">
                  <Icon name={r.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-navy-900">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-navy-900/65">{r.text}</p>
              </article>
            ))}
          </div>

          <div className="reveal relative mt-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-8 text-white sm:p-10">
            <div className="pointer-events-none absolute -right-20 -bottom-24 h-72 w-72 rounded-full blur-3xl" style={{ background: `${BORDO}55` }} aria-hidden />
            <h3 className="relative text-xl font-extrabold">Condiciones del rol</h3>
            <ul className="relative mt-6 grid gap-4 sm:grid-cols-2">
              {condiciones.map((c) => (
                <li key={c} className="flex items-start gap-3 text-white/85">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full text-white" style={{ background: BORDO }}>
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Perfiles */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Titulo>Perfiles que convocamos</Titulo>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perfiles.map((p) => (
              <article key={p.title} className="team-card reveal-pop group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-[#8c1d4b]/[0.05] p-7 ring-1 ring-navy-900/5 transition hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-cta transition group-hover:bg-cta group-hover:text-white">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-navy-900">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-navy-900/65">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Competencias */}
      <section className="bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Titulo>Competencias que valoramos</Titulo>
          <p className="reveal mt-5 max-w-3xl text-lg leading-relaxed text-navy-900/70">Inspirado en estándares internacionales de gobernanza.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {competencias.map((c, i) => (
              <article key={c.title} className="reveal-pop flex gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-900/5">
                <span className="text-2xl font-extrabold tabular-nums" style={{ color: BORDO }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-extrabold text-navy-900">{c.title}</h3>
                  <p className="mt-1 leading-relaxed text-navy-900/65">{c.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Titulo>¿Cómo es el proceso?</Titulo>
          <ol className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-4">
            <span className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-0.5 md:block" style={{ background: `linear-gradient(90deg, ${BORDO}, ${BORDO}55)` }} aria-hidden />
            {proceso.map((p, i) => (
              <li key={p.title} className="reveal-pop relative flex items-start gap-4 md:flex-col md:items-center md:text-center">
                <span className="relative flex h-12 w-12 flex-none items-center justify-center rounded-full text-lg font-extrabold text-white shadow-lg ring-8 ring-white" style={{ background: BORDO }}>
                  {i + 1}
                </span>
                <div className="md:mt-4">
                  <h3 className="font-extrabold text-navy-900">{p.title}</h3>
                  <p className="mt-1 text-sm font-semibold" style={{ color: BORDO }}>
                    {p.date}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Formulario */}
      <section id="postulacion" className="scroll-mt-24 bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Titulo center>Presentá tu postulación</Titulo>
          <p className="reveal mt-4 text-center text-lg text-navy-900/65">Completá el formulario. Nos pondremos en contacto con todos los postulantes.</p>
          <div className="mt-10">
            <ConsejoForm />
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Titulo center>Preguntas frecuentes</Titulo>
          <div className="reveal mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white ring-1 ring-navy-900/10 open:shadow-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-bold text-navy-900">{f.q}</h3>
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#8c1d4b]/10 text-xl leading-none transition group-open:rotate-45" style={{ color: BORDO }}>
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-navy-900/70">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="reveal mt-10 text-center text-navy-900/60">
            ¿Otra consulta? Escribinos a{" "}
            <a href={`mailto:${consejoEmail}`} className="font-semibold underline-offset-4 hover:underline" style={{ color: BORDO }}>
              {consejoEmail}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
