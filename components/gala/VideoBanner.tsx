"use client";

import { useEffect, useState } from "react";

// Banner de la Noche Azul: el video de la gala en loop y sin sonido, con un botón
// para verlo completo con sonido en un visor.
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
    <div className="relative w-full overflow-hidden">
      <video
        className="aspect-video max-h-[80vh] min-h-[16rem] w-full object-cover"
        src="/gala/noche-azul-2026-loop.mp4"
        poster="/gala/noche-azul-2026-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Video de la gala Noche Azul 2026"
      />
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-white/90 py-1.5 pr-5 pl-1.5 text-sm font-semibold text-navy-900 shadow-lg backdrop-blur transition hover:bg-white sm:right-8 sm:bottom-8"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cta text-white transition group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="ml-0.5 h-3.5 w-3.5" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        Ver con sonido
      </button>

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
