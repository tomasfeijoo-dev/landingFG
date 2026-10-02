import Header, { Logo } from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
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
        {/* Banners de campañas */}
        <section className="bg-gradient-to-b from-brand-50/60 to-white px-4 pt-6 sm:px-6 sm:pt-10">
          <HeroCarousel />

          {/* Tarjetas de programas superpuestas al hero */}
          <div id="programas" className="relative z-40 mx-auto mt-8 grid max-w-6xl scroll-mt-28 gap-5 md:grid-cols-3">
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
