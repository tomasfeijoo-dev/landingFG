"use client";

import { useEffect, useState } from "react";
import { donateUrl, nav, site } from "@/lib/content";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-2.5" aria-label={site.name}>
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden>
        <rect width="64" height="64" rx="14" fill={light ? "#ffffff" : "#0a2350"} />
        <path d="M32 14c-8 9-14 16-14 24a14 14 0 0 0 28 0c0-8-6-15-14-24z" fill="#5cc8f2" />
      </svg>
      <span className={`leading-tight ${light ? "text-white" : "text-navy-900"}`}>
        <span className="block text-[11px] font-medium uppercase tracking-[0.18em] opacity-70">Fundación</span>
        <span className="block text-lg font-extrabold tracking-tight">Gedyt</span>
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-900/80 transition hover:text-brand-600"
            >
              {item.label}
            </a>
          ))}
          <a
            href={donateUrl}
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-800"
          >
            Doná
          </a>
        </nav>
        <button
          type="button"
          className="rounded-lg p-2 text-navy-900 md:hidden"
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
        <nav className="border-t border-navy-900/10 px-4 pb-5 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-navy-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href={donateUrl}
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-brand-600 px-5 py-3 text-center font-semibold text-white"
          >
            Doná
          </a>
        </nav>
      )}
    </header>
  );
}
