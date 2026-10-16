"use client";

import { useCountProgress } from "@/components/CountUp";

// Anillo de porcentaje que se llena junto con el número cada vez que entra en pantalla.
export default function CifraRing({ value, label }: { value: number; label: string }) {
  const [ref, p] = useCountProgress<HTMLDivElement>(1400, true);
  const r = 42;
  const c = 2 * Math.PI * r;
  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="relative h-32 w-32">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={r} fill="none" stroke="#d6ecf7" strokeWidth="8" />
          <circle cx="50" cy="50" r={r} fill="none" stroke="#137ab0" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${(value / 100) * c * p} ${c}`} opacity={p > 0 ? 1 : 0} />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold text-navy-900 tabular-nums">{Math.round(value * p)}%</span>
      </div>
      <p className="mt-3 max-w-[12rem] text-sm text-navy-900/65">{label}</p>
    </div>
  );
}
