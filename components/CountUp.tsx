"use client";

import { useEffect, useRef, useState } from "react";

// Progreso de 0 a 1 (con desaceleración) que arranca cuando el elemento entra en pantalla.
// Con replay, vuelve a 0 al salir de pantalla y se repite cada vez que vuelve a entrar.
export function useCountProgress<T extends Element>(duration = 1400, replay = false) {
  const ref = useRef<T>(null);
  const [p, setP] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    setP(0);
    const io = new IntersectionObserver(([e]) => {
      cancelAnimationFrame(raf);
      if (!e.isIntersecting) {
        if (replay) setP(0);
        return;
      }
      if (!replay) io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        setP(1 - Math.pow(1 - t, 3));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [duration, replay]);

  return [ref, p] as const;
}

// Anima la parte numérica de un texto como "+10.000", "90%" o "$290M"
// desde 0 hasta su valor cuando entra en pantalla.
export default function CountUp({ value, duration = 1400, replay = false }: { value: string; duration?: number; replay?: boolean }) {
  const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
  const target = match ? Number(match[2].replace(/\./g, "").replace(",", ".")) : 0;
  const [ref, p] = useCountProgress<HTMLSpanElement>(duration, replay);

  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref} className="tabular-nums">
      {match[1]}
      {Math.round(target * p).toLocaleString("es-AR")}
      {match[3]}
    </span>
  );
}
