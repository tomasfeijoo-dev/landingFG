import { Logo } from "@/components/Header";
import Icon from "@/components/Icon";
import { contact, site, socialLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-white px-4 sm:px-6">
      <div className="mx-auto max-w-6xl border-t border-navy-900/10">
        <div className="grid gap-10 py-14 md:grid-cols-[1.2fr_1.4fr_1fr]">
          <div>
            <Logo />
          </div>
          <div>
            <p className="font-bold text-navy-900">Contacto</p>
            <ul className="mt-4 space-y-3 text-sm text-navy-900/60">
              <li>
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 transition hover:text-cta">
                  <Icon name="mail" className="h-4 w-4 text-cta" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-cta"
                >
                  <Icon name="phone" className="h-4 w-4 text-cta" />
                  +549 11 40956148
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Icon name="clock" className="h-4 w-4 text-cta" />
                Lunes a viernes de 9 a 16 hs.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-navy-900">FG en redes</p>
            <div className="mt-4 flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-cta transition hover:bg-cta hover:text-white"
                >
                  <Icon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-navy-900/10 py-6 text-xs text-navy-900/45">
          © {new Date().getFullYear()} {site.name}
        </div>
      </div>
    </footer>
  );
}
