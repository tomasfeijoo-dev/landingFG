"use client";

import { useEffect, useState } from "react";

// Barra fina bajo el menú que muestra cuánto de la nota se leyó.
export default function ReadingProgress({ targetId }: { targetId: string }) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById(targetId);
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.6;
      setP(Math.min(1, Math.max(0, (window.innerHeight * 0.3 - r.top) / Math.max(total, 1))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [targetId]);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent" aria-hidden>
      <div className="h-full origin-left bg-gradient-to-r from-sky-accent to-cta transition-transform duration-150" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}
