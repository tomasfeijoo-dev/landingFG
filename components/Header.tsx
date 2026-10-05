"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { contact, nav, site, socialLinks } from "@/lib/content";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center" aria-label={site.name}>
      <Image
        src={light ? "/logo-white.png" : "/logo.png"}
        alt={site.name}
        width={837}
        height={192}
        priority={!light}
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}

function TopBar() {
  return (
    <div className="bg-navy-900 text-[13px] text-white/80">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-5">
          <a href={`https://wa.me/${contact.whatsapp}`} className="flex items-center gap-1.5 hover:text-white" target="_blank" rel="noopener noreferrer">
            <Icon name="phone" className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Atención:</span> {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="hidden items-center gap-1.5 hover:text-white md:flex">
            <Icon name="mail" className="h-3.5 w-3.5" />
            {contact.email}
          </a>
        </div>
        <div className="flex items-center gap-1">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:bg-white/15"
            >
              <Icon name={s.icon} className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  // Cerrar el menú móvil al cambiar de página
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TopBar />
      <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${scrolled || open ? "shadow-sm" : ""}`}>
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-4 lg:flex xl:gap-7">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`whitespace-nowrap border-b-2 py-1 text-sm font-medium transition hover:text-cta ${
                  isActive(item.href) ? "border-cta text-cta" : "border-transparent text-navy-900/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/donar" className="flex items-center gap-2 whitespace-nowrap rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-cta/25 transition hover:bg-cta-hover">
              <Icon name="heart" className="h-4 w-4" />
              Doná hoy
            </Link>
          </div>
          <button
            type="button"
            className="rounded-lg p-2 text-navy-900 lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <nav className="border-t border-navy-900/10 px-4 pb-5 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block border-l-2 py-3 pl-3 text-base font-medium ${isActive(item.href) ? "border-cta text-cta" : "border-transparent text-navy-900"}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3">
              <Link href="/donar" className="block rounded-full bg-cta py-3 text-center font-semibold text-white">
                Doná hoy
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
