"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Hace aparecer con un leve ascenso todo elemento con la clase "reveal"
// cuando entra en pantalla. Los hermanos se escalonan unos milisegundos.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    const watch = () =>
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible), .reveal-pop:not(.is-visible)").forEach((el) => {
        if (el.dataset.revealWatched) return;
        el.dataset.revealWatched = "1";
        const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal") || c.classList.contains("reveal-pop")) : [];
        el.style.setProperty("--reveal-delay", `${Math.min(siblings.indexOf(el), 5) * 70}ms`);
        io.observe(el);
      });
    watch();
    const mo = new MutationObserver(watch);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
