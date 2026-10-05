import { Logo } from "@/components/Header";
import Icon from "@/components/Icon";
import { contact, site, socialLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gradient-to-r from-navy-800 via-[#1b85b8] to-sky-accent px-4 py-14 text-white sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1.4fr_1fr]">
          <div>
            <Logo light />
          </div>
          <div>
            <p className="text-lg font-bold">Contacto</p>
            <ul className="mt-4 space-y-3 text-white/90">
              <li>
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:underline">
                  <Icon name="mail" className="h-4 w-4" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
                  <Icon name="phone" className="h-4 w-4" />
                  +549 11 40956148
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Icon name="clock" className="h-4 w-4" />
                Lunes a viernes de 9 a 16 hs.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-bold">FG en redes</p>
            <div className="mt-4 flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy-800 transition hover:scale-110"
                >
                  <Icon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-navy-800 px-4 py-4 text-sm text-white/80 sm:px-6">
        <p className="mx-auto max-w-6xl">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
