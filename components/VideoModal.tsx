"use client";

import { useEffect, useState } from "react";
import { barbaraVideoUrl } from "@/lib/content";

// Convierte un link de YouTube o de un archivo de Google Drive en su versión embebible.
export function toEmbedUrl(url: string): string | null {
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0`;
  const drive = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([\w-]+)/);
  if (drive) return `https://drive.google.com/file/d/${drive[1]}/preview`;
  return null;
}

export function openBarbaraVideo() {
  window.dispatchEvent(new Event("open-barbara-video"));
}

// Modal único del sitio para el video de Bárbara. Se abre con openBarbaraVideo().
export default function VideoModal() {
  const [open, setOpen] = useState(false);
  const embed = toEmbedUrl(barbaraVideoUrl);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-barbara-video", onOpen);
    return () => window.removeEventListener("open-barbara-video", onOpen);
  }, []);

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

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center bg-navy-950/80 px-4 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Video: la historia de Bárbara"
        onClick={(e) => e.stopPropagation()}
        className="pop-in relative w-full max-w-4xl overflow-hidden rounded-3xl bg-navy-950 shadow-2xl ring-1 ring-white/10"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Cerrar video"
          autoFocus
          className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-lg transition hover:bg-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <div className="aspect-video w-full">
          {embed ? (
            <iframe src={embed} title="La historia de Bárbara" className="h-full w-full" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-8 text-center text-white">
              <p className="text-xl font-bold">La historia de Bárbara</p>
              <p className="max-w-md text-white/70">Muy pronto vas a poder ver acá el video de Bárbara contando su experiencia con la Fundación.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
