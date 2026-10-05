"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { mitos } from "@/lib/campana";

// Tarjetas que se dan vuelta (click o hover) para revelar si es mito o realidad.
export default function MythCards() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {mitos.map((m, i) => {
        const flipped = open === i;
        return (
          <button
            key={m.q}
            type="button"
            onClick={() => setOpen(flipped ? null : i)}
            aria-pressed={flipped}
            className="reveal-pop group h-56 text-left [perspective:1200px]"
          >
            <div className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}>
              {/* Frente: la afirmación */}
              <div className="absolute inset-0 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-cta to-navy-800 p-6 text-white shadow-xl shadow-navy-900/15 [backface-visibility:hidden]">
                <Icon name="help" className="h-8 w-8 text-white/80" />
                <p className="text-lg font-bold leading-snug">{m.q}</p>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">¿Mito o realidad? · Tocá para ver</span>
              </div>
              {/* Dorso: la respuesta */}
              <div className="absolute inset-0 flex flex-col rounded-3xl bg-white p-6 shadow-xl ring-1 ring-navy-900/5 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <span
                  className={`self-start rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] ${
                    m.mito ? "bg-rose-50 text-rose-600 ring-1 ring-rose-100" : "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                  }`}
                >
                  {m.mito ? "Mito" : "Realidad"}
                </span>
                <p className="mt-4 text-navy-900/80">{m.a}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
