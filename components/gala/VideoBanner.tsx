"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";

// Banner de la Noche Azul: el video de la gala de fondo (desenfocado y con filtro azul),
// el logo, la bajada y dos llamados: ver el video completo con sonido y donar.
export default function VideoBanner() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="relative flex min-h-[34rem] w-full items-center justify-center overflow-hidden sm:min-h-[40rem] lg:min-h-[44rem]">
      <video
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-[6px]"
        src="/gala/noche-azul-2026-loop.mp4"
        poster="/gala/noche-azul-2026-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      {/* Filtro azul */}
      <div className="absolute inset-0 bg-[#0a2a6b]/60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050f2b]/50 via-[#0a2a5c]/35 to-[#050f2b]/80" />

      <div className="relative flex flex-col items-center px-6 py-20 text-center text-white">
        <p className="pop-in text-sm font-semibold uppercase tracking-[0.35em] text-white/85">Gala a beneficio</p>
        <Image
          src="/gala/logo-noche-azul.png"
          alt="Noche Azul"
          width={1140}
          height={296}
          priority
          className="pop-in mt-4 h-auto w-[85vw] max-w-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
        />
        <p className="mt-2 text-2xl font-semibold tracking-[0.3em] text-sky-accent sm:text-3xl">2026</p>
        <p className="mt-6 max-w-2xl text-base font-medium uppercase tracking-[0.15em] text-white/90 sm:text-lg">Juntos podemos prevenir el cáncer de colon</p>
        <p className="mt-3 flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-white/75">
          <Icon name="pin" className="h-4 w-4 flex-none" />
          Alvear Palace Hotel — Av. Alvear 1891, CABA
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-white py-2 pr-7 pl-2 font-semibold text-navy-900 shadow-lg shadow-black/30 transition hover:bg-brand-50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cta text-white transition group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Mirá cómo fue la noche
          </button>
          <a
            href="#dona"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-8 py-3.5 font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-cta-hover"
          >
            <Icon name="heart" className="h-4 w-4" /> Doná a la causa
          </a>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label="Video de la Noche Azul 2026">
          <div className="pop-in w-full max-w-5xl overflow-hidden rounded-3xl bg-black shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <video className="aspect-video w-full" src="/gala/noche-azul-2026.mp4" poster="/gala/noche-azul-2026-poster.webp" controls autoPlay playsInline />
          </div>
          <button
            type="button"
            aria-label="Cerrar"
            autoFocus
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-900 shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
