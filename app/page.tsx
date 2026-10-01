import Header, { Logo } from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import InterestLink from "@/components/InterestLink";
import {
  companySteps,
  contact,
  donateUrl,
  helpOptions,
  nav,
  programs,
  site,
  stats,
} from "@/lib/content";

const icons: Record<string, React.ReactNode> = {
  shield: <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3zm-3 9l2 2 4-4" />,
  map: <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zm0 0v14m6-12v14" />,
  graduation: <path d="M2 9l10-5 10 5-10 5L2 9zm4 2v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5m4-2v6" />,
  users: (
    <path d="M16 19v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1m6.5-9a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM21 19v-1a4 4 0 00-3-3.9M15 3.1a3.5 3.5 0 010 6.8" />
  ),
  book: <path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5zm0 16a2 2 0 012-2h13" />,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />,
};

function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {icons[name]}
    </svg>
  );
}

function SectionTitle({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${light ? "text-sky-accent" : "text-brand-600"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg ${light ? "text-white/75" : "text-navy-900/70"}`}>{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="inicio">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-brand-100 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-navy-800 shadow-sm ring-1 ring-navy-900/10">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                Salud digestiva para todos
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
                El cáncer colorrectal <span className="text-brand-500">se puede prevenir.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-navy-900/70 sm:text-xl">
                La detección temprana salva vidas. En Fundación Gedyt trabajamos para que cada persona en Argentina
                acceda a una salud digestiva de calidad, sin barreras sociales, culturales ni económicas.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={donateUrl} className="rounded-full bg-brand-600 px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-navy-900">
                  Doná y salvá vidas
                </a>
                <a href="#empresas" className="rounded-full bg-white px-7 py-3.5 text-center font-semibold text-navy-900 ring-1 ring-navy-900/15 transition hover:ring-brand-500">
                  Programa para empresas →
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl bg-navy-900 p-8 text-white shadow-2xl sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-accent">¿Tenés más de 45 años?</p>
                <p className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">Es momento de hacerte el control.</p>
                <ul className="mt-6 space-y-3 text-white/85">
                  {["Test simple y no invasivo (Q-FIT)", "Seguimiento médico de cada resultado", "Hasta 90% de curación si se detecta a tiempo"].map((t) => (
                    <li key={t} className="flex gap-3">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 flex-none text-sky-accent" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className="mt-8 inline-block font-semibold text-sky-accent hover:underline">
                  Consultanos cómo hacerlo →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Cifras */}
        <section className="border-y border-navy-900/5 bg-white py-14">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.value} className="text-center lg:text-left">
                <p className="text-4xl font-extrabold tracking-tight text-navy-900">{s.value}</p>
                <p className="mt-2 text-sm text-navy-900/65">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Quiénes somos</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Ciencia, educación y compromiso con la salud digestiva
              </h2>
              <p className="mt-5 text-lg text-navy-900/70">
                Fundación Gedyt es una organización sin fines de lucro, académica, científico-educativa y de
                investigación, creada en 2018. Nace de la experiencia de Gedyt, el centro de Gastroenterología,
                Endoscopía Diagnóstica y Terapéutica fundado en 2001 en Buenos Aires.
              </p>
              <p className="mt-4 text-lg text-navy-900/70">
                Contribuimos a mejorar la eficiencia y el acceso a la atención de las enfermedades digestivas en
                Argentina, con acciones basadas en evidencia y articulación público-privada.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { t: "Misión", d: "Contribuir al acceso equitativo a una salud digestiva de calidad, superando toda barrera social, cultural y económica." },
                { t: "Evidencia", d: "Cada programa se diseña y evalúa con criterios científicos y seguimiento activo." },
                { t: "Articulación", d: "Trabajamos con gobiernos, empresas y sociedades científicas para escalar el impacto." },
                { t: "Formación", d: "Capacitamos a profesionales para mejorar la calidad de la atención en todo el país." },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100">
                  <p className="font-bold text-navy-900">{c.t}</p>
                  <p className="mt-2 text-sm text-navy-900/70">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué hacemos */}
        <section id="que-hacemos" className="bg-brand-50/60 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle
              eyebrow="Qué hacemos"
              title="Programas que transforman vidas"
              text="De la concientización al diagnóstico: acompañamos a las personas en todo el camino de la prevención."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((p) => (
                <article key={p.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy-900/5 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <Icon name={p.icon} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{p.title}</h3>
                  <p className="mt-2 text-navy-900/70">{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Empresas: Prevenir es cuidar */}
        <section id="empresas" className="bg-navy-900 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle
              light
              eyebrow="Prevenir es cuidar"
              title="El primer programa de prevención del cáncer colorrectal para empresas"
              text="Convertí una charla en una política de salud concreta. Lo implementamos de punta a punta en tu organización."
            />
            <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {companySteps.map((s, i) => (
                <li key={s.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-accent font-bold text-navy-950">{i + 1}</span>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-white/70">{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-600 p-8 sm:flex-row sm:p-10">
              <div>
                <p className="text-xl font-bold sm:text-2xl">Cuidá a tu equipo con un programa probado.</p>
                <p className="mt-2 text-white/80">Empresas líderes como Pan American Energy ya lo implementaron con sus colaboradores.</p>
              </div>
              <InterestLink
                href="#contacto"
                interest="empresa"
                className="flex-none rounded-full bg-white px-7 py-3.5 font-semibold text-navy-900 transition hover:bg-brand-50"
              >
                Solicitar propuesta
              </InterestLink>
            </div>
          </div>
        </section>

        {/* Noche Azul */}
        <section id="noche-azul" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-800 to-brand-600 p-8 text-white sm:p-14">
              <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-accent">Gala solidaria</p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Noche Azul</h2>
                  <p className="mt-5 text-lg text-white/80">
                    Cada año, referentes del espectáculo, la música, el deporte y el mundo empresarial se reúnen para
                    poner en agenda la prevención del cáncer de colon. Lo recaudado sostiene y amplía nuestros programas
                    de detección temprana en todo el país.
                  </p>
                  <InterestLink
                    href="#contacto"
                    interest="empresa"
                    className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-navy-900 transition hover:bg-brand-50"
                  >
                    Quiero ser sponsor
                  </InterestLink>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                    <p className="text-4xl font-extrabold">6</p>
                    <p className="mt-1 text-sm text-white/75">ediciones realizadas</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                    <p className="text-4xl font-extrabold">$290M</p>
                    <p className="mt-1 text-sm text-white/75">recaudados en 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo ayudar */}
        <section id="ayudar" className="bg-brand-50/60 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle eyebrow="Sumate" title="Hay muchas formas de ayudar" text="Tu aporte se transforma en tests, diagnósticos y vidas salvadas." />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {helpOptions.map((h) => (
                <div key={h.title} className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy-900/5">
                  <h3 className="text-xl font-bold text-navy-900">{h.title}</h3>
                  <p className="mt-3 flex-1 text-navy-900/70">{h.text}</p>
                  <InterestLink
                    href={h.href}
                    interest={h.interest}
                    className="mt-6 rounded-full bg-navy-900 px-6 py-3 text-center font-semibold text-white transition hover:bg-brand-600"
                  >
                    {h.cta}
                  </InterestLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Contacto</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Hablemos</h2>
              <p className="mt-5 text-lg text-navy-900/70">
                Contanos si querés donar, implementar el programa en tu empresa o capacitarte. Te respondemos a la brevedad.
              </p>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-sm font-semibold text-navy-900/60">Email</dt>
                  <dd><a className="text-lg font-semibold text-navy-900 hover:text-brand-600" href={`mailto:${contact.email}`}>{contact.email}</a></dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-navy-900/60">WhatsApp / Teléfono</dt>
                  <dd><a className="text-lg font-semibold text-navy-900 hover:text-brand-600" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">{contact.phone}</a></dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-navy-900/60">Horario</dt>
                  <dd className="text-lg text-navy-900">{contact.hours}</dd>
                </div>
              </dl>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-navy-950 py-12 text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm text-sm">{site.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">{n.label}</a>
            ))}
          </nav>
          <div className="flex gap-4 text-sm">
            <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            <a href={contact.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-white/40 sm:px-6">
          © {new Date().getFullYear()} {site.name}. Organización sin fines de lucro.
        </p>
      </footer>
    </>
  );
}
