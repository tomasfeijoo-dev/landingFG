import Link from "next/link";
import { Logo } from "@/components/Header";
import Icon from "@/components/Icon";
import LogoMarquee from "@/components/LogoMarquee";
import { institutions, sponsors } from "@/lib/logos";
import { contact, footerLinks, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-white px-4 pt-14 pb-8 sm:px-6">
      <div className="mx-auto mb-14 max-w-7xl border-b border-navy-900/10 pb-12">
        <p className="mb-6 text-center text-lg font-bold text-navy-900">Nos acompañan</p>
        <LogoMarquee
          size="sm"
          groups={[
            { title: "Sponsors", logos: sponsors },
            { title: "Instituciones de salud", logos: institutions },
          ]}
        />
      </div>
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
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-cta transition hover:bg-cta hover:text-white"
              >
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
                  <Link href={l.href} className="hover:text-cta">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="font-bold text-navy-900">Atención</p>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-900/60">
            {contact.address && (
              <li className="flex gap-2">
                <Icon name="map" className="h-4 w-4 flex-none text-cta" />
                {contact.address}
              </li>
            )}
            <li className="flex gap-2">
              <Icon name="phone" className="h-4 w-4 flex-none text-cta" />
              {contact.phone}
            </li>
            <li className="flex gap-2 break-all">
              <Icon name="mail" className="h-4 w-4 flex-none text-cta" />
              {contact.email}
            </li>
            <li className="flex gap-2">
              <Icon name="clock" className="h-4 w-4 flex-none text-cta" />
              {contact.hours}
            </li>
          </ul>
          <Link
            href="/donar"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-cta ring-1 ring-brand-100 transition hover:bg-brand-100"
          >
            Doná hoy <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-navy-900/10 pt-6 text-xs text-navy-900/50 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </p>
        <p>{site.tagline}</p>
      </div>
    </footer>
  );
}
