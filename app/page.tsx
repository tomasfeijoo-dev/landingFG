import Header, { Logo } from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Donate from "@/components/Donate";
import Icon from "@/components/Icon";
import InterestLink from "@/components/InterestLink";
import Newsletter from "@/components/Newsletter";
import {
  campaign,
  contact,
  features,
  footerLinks,
  impact,
  lines,
  network,
  news,
  site,
} from "@/lib/content";

function Eyebrow({ children, chip = false, light = false }: { children: React.ReactNode; chip?: boolean; light?: boolean }) {
  if (chip) {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
          light ? "bg-white/10 text-sky-accent" : "bg-brand-100/70 text-cta ring-1 ring-brand-100"
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-sky-accent" : "bg-cta"}`} />
        {children}
      </span>
    );
  }
  return <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-sky-accent" : "text-cta"}`}>{children}</p>;
}

function ArrowLink({ href, interest, children, className = "" }: { href: string; interest?: string; children: React.ReactNode; className?: string }) {
  const cls = `group inline-flex items-center gap-1.5 text-sm font-semibold text-cta ${className}`;
  const inner = (
    <>
      {children}
      <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </>
  );
  return interest ? (
    <InterestLink href={href} interest={interest} className={cls}>
      {inner}
    </InterestLink>
  ) : (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}

function TestIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d6ecf7" />
          <stop offset="1" stopColor="#3fa5d4" />
        </linearGradient>
        <linearGradient id="cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3fa5d4" />
          <stop offset="1" stopColor="#015f86" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#bg)" />
      <circle cx="260" cy="40" r="70" fill="#ffffff" opacity="0.18" />
      <circle cx="40" cy="190" r="60" fill="#ffffff" opacity="0.15" />
      <g transform="translate(118 26) rotate(-8)">
        <rect x="8" y="34" width="72" height="118" rx="18" fill="#ffffff" />
        <rect x="8" y="34" width="72" height="118" rx="18" fill="#015f86" opacity="0.05" />
        <rect x="20" y="78" width="48" height="30" rx="6" fill="#eef7fc" />
        <rect x="27" y="86" width="34" height="4" rx="2" fill="#3fa5d4" />
        <rect x="27" y="95" width="22" height="4" rx="2" fill="#3fa5d4" opacity="0.5" />
        <rect x="0" y="6" width="88" height="34" rx="12" fill="url(#cap)" />
        <rect x="10" y="12" width="68" height="4" rx="2" fill="#ffffff" opacity="0.35" />
        <circle cx="32" cy="128" r="5" fill="#01405c" />
        <circle cx="56" cy="128" r="5" fill="#01405c" />
        <path d="M36 140 q8 7 16 0" stroke="#01405c" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function Ribbon() {
  return (
    <svg viewBox="0 0 120 160" className="h-36 w-28" aria-hidden>
      {/* Lazo azul: la tira trasera primero, la delantera encima */}
      <path d="M28 148 L72 74 C84 54 80 22 60 22 C40 22 36 54 48 74 L60 94" fill="none" stroke="#3fa5d4" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M56 87 L92 148" fill="none" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="inicio">
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-50/60 to-white px-4 pt-6 sm:px-6 sm:pt-10">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-50 via-white to-brand-100/60 px-6 pt-12 pb-28 ring-1 ring-brand-100 sm:px-12 sm:pt-16 lg:pb-36">
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden>
              <path d="M760 80 C 880 -20, 1100 40, 1140 160" stroke="#3fa5d4" strokeWidth="26" fill="none" strokeLinecap="round" opacity="0.85" />
              <path d="M820 560 C 980 480, 1120 520, 1210 430" stroke="#3fa5d4" strokeWidth="22" fill="none" strokeLinecap="round" opacity="0.6" />
            </svg>
            <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <Eyebrow chip>Prevenir también es cuidar</Eyebrow>
                <h1 className="mt-6 text-3xl font-extrabold leading-[1.12] tracking-tight text-navy-900 sm:text-5xl">
                  Detectar a tiempo hace la diferencia.{" "}
                  <span className="text-cta">Trabajamos para que la prevención llegue a más personas.</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg text-navy-900/70">
                  El cáncer colorrectal se cura en el <strong className="text-navy-900">90% de los casos</strong> si se
                  detecta a tiempo. Desde la Fundación acercamos tests no invasivos, acompañamiento médico y
                  colonoscopías oportunas a toda la comunidad.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#que-hacemos" className="rounded-full bg-navy-900 px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-navy-900/20 transition hover:bg-navy-950">
                    Conocé la Fundación
                  </a>
                  <InterestLink
                    href="#contacto"
                    interest="otro"
                    className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-cta ring-1 ring-cta/40 transition hover:ring-cta"
                  >
                    <Icon name="flask" className="h-5 w-5" />
                    Hacete el test FIT
                  </InterestLink>
                </div>
                <div className="mt-10 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[
                      { icon: "stethoscope", bg: "#01405c" },
                      { icon: "shield", bg: "#015f86" },
                      { icon: "heart", bg: "#3fa5d4" },
                    ].map((a) => (
                      <span key={a.icon} className="flex h-9 w-9 items-center justify-center rounded-full text-white ring-2 ring-white" style={{ background: a.bg }}>
                        <Icon name={a.icon} className="h-4 w-4" />
                      </span>
                    ))}
                  </div>
                  <p className="max-w-sm text-xs text-navy-900/60">
                    Respaldo científico de Gedyt, centro de Gastroenterología, Endoscopía Diagnóstica y Terapéutica desde 2001.
                  </p>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-md">
                <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-navy-900/15 ring-1 ring-navy-900/5">
                  <div className="relative aspect-[16/10]">
                    <TestIllustration />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/70 to-transparent p-5 pt-12">
                      <span className="rounded bg-cta px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">Test simple y no invasivo</span>
                      <p className="mt-2 text-sm font-semibold text-white">Sin dieta previa ni internación.</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-cta">
                        <Icon name="shield" className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-navy-900">Para mayores de 45 años</p>
                        <p className="text-xs text-navy-900/60">o con antecedentes familiares</p>
                      </div>
                    </div>
                    <ArrowLink href="#contacto" interest="otro">Consultá</ArrowLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjetas de programas superpuestas al hero */}
          <div id="programas" className="relative mx-auto -mt-20 grid max-w-6xl scroll-mt-28 gap-5 md:grid-cols-3 lg:-mt-24">
            {features.map((f) => (
              <article key={f.title} className="flex flex-col rounded-3xl bg-white p-7 shadow-xl shadow-navy-900/5 ring-1 ring-navy-900/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-cta">
                  <Icon name={f.icon} />
                </span>
                <div className="mt-5">
                  <Eyebrow>{f.eyebrow}</Eyebrow>
                </div>
                <h2 className="mt-1.5 text-lg font-bold text-navy-900">{f.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/65">{f.text}</p>
                <div className="mt-6 border-t border-navy-900/5 pt-4">
                  <ArrowLink href={f.href} interest={f.interest} className="w-full justify-between">
                    {f.cta}
                  </ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Impacto */}
        <section id="impacto" className="px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow chip>Impacto medible</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Cifras claras de nuestro compromiso con la comunidad</h2>
              <p className="mt-4 text-lg text-navy-900/65">Transformamos la ciencia médica en diagnósticos accesibles y vidas salvadas en todo el país.</p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {impact.map((s) => (
                <div key={s.value} className="rounded-3xl bg-gradient-to-b from-brand-50 to-white p-8 text-center ring-1 ring-brand-100">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-cta shadow-sm">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-5xl font-extrabold tracking-tight text-cta">{s.value}</p>
                  <p className="mt-2 font-bold text-navy-900">{s.label}</p>
                  <p className="mt-2 text-sm text-navy-900/60">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué hacemos */}
        <section id="que-hacemos" className="bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <Eyebrow>Líneas de prevención activas</Eyebrow>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">¿Qué hacemos en la Fundación?</h2>
                <p className="mt-3 text-lg text-navy-900/65">
                  Articulamos la excelencia médica de Gedyt con el acceso equitativo a la salud digestiva en toda la Argentina.
                </p>
              </div>
              <a
                href={news[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-none items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 ring-1 ring-navy-900/10 transition hover:ring-cta md:self-auto"
              >
                Ver anuario 2024 <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>

            <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-8 text-white shadow-2xl shadow-navy-900/20 sm:p-12">
              <div className="pointer-events-none absolute -right-16 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/5 ring-1 ring-white/10" />
              <div className="relative grid items-center gap-10 md:grid-cols-[1.6fr_1fr]">
                <div>
                  <Eyebrow chip light>{campaign.eyebrow}</Eyebrow>
                  <h3 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-4xl">{campaign.title}</h3>
                  <p className="mt-4 max-w-xl text-white/75">{campaign.text}</p>
                  <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <InterestLink href="#contacto" interest="otro" className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 font-semibold text-white transition hover:bg-cta-hover">
                      {campaign.cta} <Icon name="arrow" className="h-4 w-4" />
                    </InterestLink>
                    <span className="text-sm text-white/55">{campaign.note}</span>
                  </div>
                </div>
                <div className="hidden justify-center md:flex">
                  <div className="flex h-60 w-48 flex-col items-center justify-center rounded-3xl bg-white/5 ring-1 ring-white/20 backdrop-blur">
                    <Ribbon />
                    <p className="mt-3 text-xs font-medium text-white/70">Símbolo de la prevención</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {lines.map((l, i) => (
                <article key={l.title} className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-navy-900/5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-sm font-bold text-cta">0{i + 1}</span>
                  <div className="mt-5">
                    <Eyebrow>{l.eyebrow}</Eyebrow>
                  </div>
                  <h3 className="mt-1.5 text-lg font-bold text-navy-900">{l.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/65">{l.text}</p>
                  <ArrowLink href="#contacto" interest={l.interest} className="mt-6">
                    {l.cta}
                  </ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Red de prevención */}
        <section id="sumate" className="px-4 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2rem] bg-gradient-to-br from-brand-50 to-white p-8 ring-1 ring-brand-100 sm:p-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Eyebrow chip>Alianzas y red de prevención</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Sumate a la red de prevención de Fundación Gedyt</h2>
              <p className="mt-4 text-lg text-navy-900/65">
                Convocamos a empresas, gobiernos, sociedades médicas y personas que quieran comprometerse con el futuro de la
                salud digestiva en el país.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <InterestLink href="#contacto" interest="empresa" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3 font-semibold text-white transition hover:bg-navy-950">
                  Sumá tu organización <Icon name="arrow" className="h-4 w-4" />
                </InterestLink>
                <a href="#donar" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-navy-900 ring-1 ring-navy-900/10 transition hover:ring-cta">
                  Quiero ser donante
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {network.map((n) => (
                <div key={n.title} className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-navy-900/5">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center text-cta">
                    <Icon name={n.icon} />
                  </span>
                  <p className="mt-2 text-sm font-bold text-navy-900">{n.title}</p>
                  <p className="mt-1 text-xs text-navy-900/55">{n.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Donate />

        {/* Novedades */}
        <section id="novedades" className="bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>Información médica confiable</Eyebrow>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Notas de salud y novedades</h2>
              </div>
              <ArrowLink href={contact.social.linkedin}>Seguinos en LinkedIn</ArrowLink>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {news.map((n) => (
                <a
                  key={n.title}
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-navy-900/5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="self-start rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold text-cta ring-1 ring-brand-100">{n.tag}</span>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-navy-900">{n.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-navy-900/65">{n.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cta">
                    Leer nota completa <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <Eyebrow>Contacto</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Hablemos</h2>
              <p className="mt-5 text-lg text-navy-900/70">
                Contanos si querés hacerte el test, donar, implementar el programa en tu empresa o capacitarte. Te respondemos a la brevedad.
              </p>
              <ul className="mt-8 space-y-5">
                {[
                  { icon: "mail", label: "Email", value: contact.email, href: `mailto:${contact.email}` },
                  { icon: "phone", label: "WhatsApp / Teléfono", value: contact.phone, href: `https://wa.me/${contact.whatsapp}` },
                  { icon: "clock", label: "Horario", value: contact.hours },
                ].map((c) => (
                  <li key={c.label} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-cta">
                      <Icon name={c.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-navy-900/50">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="font-semibold text-navy-900 hover:text-cta" {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                          {c.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-navy-900">{c.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Newsletter />

      <footer className="bg-white px-4 pt-16 pb-8 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm text-navy-900/60">
              Organización sin fines de lucro, académica, científico-educativa y de investigación, dedicada a la salud digestiva en Argentina.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { href: contact.social.linkedin, icon: "linkedin", label: "LinkedIn" },
                { href: contact.social.facebook, icon: "facebook", label: "Facebook" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-cta transition hover:bg-cta hover:text-white">
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="font-bold text-navy-900">{title}</p>
              <ul className="mt-4 space-y-2.5 text-sm text-navy-900/60">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-cta">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="font-bold text-navy-900">Atención</p>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-900/60">
              {contact.address && (
                <li className="flex gap-2"><Icon name="map" className="h-4 w-4 flex-none text-cta" />{contact.address}</li>
              )}
              <li className="flex gap-2"><Icon name="phone" className="h-4 w-4 flex-none text-cta" />{contact.phone}</li>
              <li className="flex gap-2 break-all"><Icon name="mail" className="h-4 w-4 flex-none text-cta" />{contact.email}</li>
              <li className="flex gap-2"><Icon name="clock" className="h-4 w-4 flex-none text-cta" />{contact.hours}</li>
            </ul>
            <a href="#donar" className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-cta ring-1 ring-brand-100 transition hover:bg-brand-100">
              Doná hoy <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-navy-900/10 pt-6 text-xs text-navy-900/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p>{site.tagline}</p>
        </div>
      </footer>
    </>
  );
}
