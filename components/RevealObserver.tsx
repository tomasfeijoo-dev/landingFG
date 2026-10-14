"use client";

import { useEffect } from "react";

// Hace aparecer con un leve ascenso todo elemento con la clase "reveal"
// cuando entra en pantalla. Los hermanos se escalonan unos milisegundos.
// Un único observador vive todo el tiempo que dura la visita: así también
// detecta las secciones de las páginas a las que se navega sin recargar.
export default function RevealObserver() {
  useEffect(() => {
    const watched = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    const watch = () =>
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible), .reveal-pop:not(.is-visible)").forEach((el) => {
        if (watched.has(el)) return;
        watched.add(el);
        const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal") || c.classList.contains("reveal-pop")) : [];
        el.style.setProperty("--reveal-delay", `${Math.min(siblings.indexOf(el), 5) * 70}ms`);
        io.observe(el);
      });

    // Agrupa los cambios del DOM en un solo chequeo por cuadro
    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        watch();
      });
    };
    watch();
    const mo = new MutationObserver(schedule);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
