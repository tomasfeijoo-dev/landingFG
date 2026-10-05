import Image from "next/image";
import ArgentinaMap from "@/components/ArgentinaMap";
import ContactForm from "@/components/ContactForm";
import CountUp from "@/components/CountUp";
import Icon from "@/components/Icon";
import { ArrowLink, ButtonLink, Eyebrow } from "@/components/ui";
import { campaign, contact, features, impact, lines, network, news } from "@/lib/content";

// Tarjeta con foto de fondo y degradado de marca para que el texto se lea.
function PhotoBackground({ src, alt }: { src: string; alt: string }) {
  return (
    <>
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-900/70 to-navy-900/20" />
    </>
  );
}

export function ProgramCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {features.map((f) => (
        <article key={f.title} className="reveal flex flex-col rounded-3xl bg-white p-7 shadow-xl shadow-navy-900/5 ring-1 ring-navy-900/5">
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
  );
}

export function CampaignBanner() {
  return (
    <div className="reveal relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-[#1b6189] text-white shadow-2xl shadow-navy-900/20 md:min-h-[26rem]">
      {/* Foto a la derecha, fundida hacia el texto */}
      <div className="campaign-visual relative h-56 sm:h-72 md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[58%]">
        <Image
          src="/images/campana-concientizacion.webp"
          alt="Emoji sonriente junto al lazo azul de la prevención"
          fill
          sizes="(min-width: 768px) 58vw, 100vw"
          className="object-cover object-[35%_center]"
        />
      </div>
      <div className="relative p-8 sm:p-12 md:w-[55%]">
        <div className="max-w-xl">
          <Eyebrow chip light>{campaign.eyebrow}</Eyebrow>
          <h3 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-4xl">{campaign.title}</h3>
          <p className="mt-4 max-w-xl text-white/85">{campaign.text}</p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <ButtonLink href="/contacto" interest="otro" variant="cta">
              {campaign.cta} <Icon name="arrow" className="h-4 w-4" />
            </ButtonLink>
            <span className="text-sm text-white/70">{campaign.note}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LinesCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {lines.map((l, i) => {
        const photo = "image" in l && l.image;
        return (
          <article
            key={l.title}
            className={`reveal group relative flex min-h-[22rem] flex-col overflow-hidden rounded-3xl p-7 shadow-sm ring-1 ring-navy-900/5 ${photo ? "text-white" : "bg-white"}`}
          >
            {photo && <PhotoBackground src={photo} alt={l.title} />}
            <div className="relative flex flex-1 flex-col">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${photo ? "bg-white/15 text-white backdrop-blur" : "bg-brand-50 text-cta"}`}>
                0{i + 1}
              </span>
              <div className={photo ? "mt-auto pt-5" : "mt-5"}>
                <Eyebrow light={!!photo}>{l.eyebrow}</Eyebrow>
              </div>
              <h3 className={`mt-1.5 text-lg font-bold ${photo ? "" : "text-navy-900"}`}>{l.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${photo ? "text-white/80" : "flex-1 text-navy-900/65"}`}>{l.text}</p>
              <ArrowLink href="/contacto" interest={l.interest} light={!!photo} className="mt-6">
                {l.cta}
              </ArrowLink>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function ImpactSection() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow chip>Impacto medible</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Cifras claras de nuestro compromiso con la comunidad</h2>
          <p className="mt-4 text-lg text-navy-900/65">Transformamos la ciencia médica en diagnósticos accesibles y vidas salvadas en todo el país.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {impact.map((s) => (
            <div key={s.value} className="reveal rounded-3xl bg-gradient-to-b from-brand-50 to-white p-8 text-center ring-1 ring-brand-100">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-cta shadow-sm">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <p className="mt-5 text-5xl font-extrabold tracking-tight text-cta">
                <CountUp value={s.value} />
              </p>
              <p className="mt-2 font-bold text-navy-900">{s.label}</p>
              <p className="mt-2 text-sm text-navy-900/60">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NetworkSection({ withLink = false }: { withLink?: boolean }) {
  return (
    <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] ring-1 ring-brand-100 lg:min-h-[32rem]">
      {/* Fondo: mapa animado que recorre los lugares donde trabajamos */}
      <ArgentinaMap focusX={0.72} fade="bg-gradient-to-r from-white/95 via-white/80 to-white/0 max-lg:to-white/60" />
      <div className="relative p-8 sm:p-12 lg:max-w-[56%]">
        <Eyebrow chip>Alianzas y red de prevención</Eyebrow>
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Sumate a la red de prevención de Fundación Gedyt</h2>
        <p className="mt-4 text-lg text-navy-900/70">
          Convocamos a empresas, gobiernos, sociedades médicas y personas que quieran comprometerse con el futuro de la salud digestiva en el país.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {network.map((n) => (
            <div key={n.title} className="flex items-center gap-3 rounded-2xl bg-white/90 p-3 shadow-sm ring-1 ring-navy-900/5 backdrop-blur">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-50 text-cta">
                <Icon name={n.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold leading-tight text-navy-900">{n.title}</p>
                <p className="mt-0.5 text-[11px] leading-tight text-navy-900/55">{n.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contacto" interest="empresa">
            Sumá tu organización <Icon name="arrow" className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href={withLink ? "/sumate" : "/donar"} variant="light">
            {withLink ? "Conocé cómo sumarte" : "Quiero ser donante"}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

export function NewsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {news.map((n) => {
        const photo = "image" in n && n.image;
        return (
          <a
            key={n.title}
            href={n.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`reveal group relative flex min-h-[20rem] flex-col overflow-hidden rounded-3xl p-7 shadow-sm ring-1 ring-navy-900/5 transition hover:-translate-y-1 hover:shadow-lg ${
              photo ? "text-white" : "bg-white"
            }`}
          >
            {photo && <PhotoBackground src={photo} alt={n.title} />}
            <span
              className={`relative self-start rounded-full px-3 py-1 text-[11px] font-semibold ${
                photo ? "bg-white/15 text-white backdrop-blur" : "bg-brand-50 text-cta ring-1 ring-brand-100"
              }`}
            >
              {n.tag}
            </span>
            <h3 className={`relative text-lg font-bold leading-snug ${photo ? "mt-auto pt-4" : "mt-4 text-navy-900"}`}>{n.title}</h3>
            <p className={`relative mt-2 text-sm ${photo ? "text-white/80" : "flex-1 text-navy-900/65"}`}>{n.text}</p>
            <span className={`relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${photo ? "text-white" : "text-cta"}`}>
              Leer nota completa <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </a>
        );
      })}
    </div>
  );
}

export function ContactSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
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
                    <a
                      href={c.href}
                      className="font-semibold text-navy-900 hover:text-cta"
                      {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
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
  );
}
