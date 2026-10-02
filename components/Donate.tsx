"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import InterestLink from "@/components/InterestLink";
import { donateUrl, donationAmounts } from "@/lib/content";

export default function Donate() {
  const [amount, setAmount] = useState(donationAmounts[1].value);

  return (
    <section id="donar" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-br from-brand-50 via-brand-100/70 to-brand-50 px-6 py-14 text-center ring-1 ring-brand-100 sm:px-12 sm:py-16">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-cta shadow-md">
          <Icon name="heart" className="h-7 w-7" />
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-cta">Compromiso solidario</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Tu aporte permite más diagnósticos tempranos. Salva vidas.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-navy-900/70">
          Cada donación se transforma en tests, campañas y seguimiento médico para quienes más lo necesitan.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3" role="radiogroup" aria-label="Monto de la donación">
          {donationAmounts.map((a) => {
            const active = a.value === amount;
            return (
              <button
                key={a.value}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setAmount(a.value)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  active ? "bg-navy-900 text-white shadow-lg" : "bg-white text-navy-900 ring-1 ring-navy-900/10 hover:ring-cta"
                }`}
              >
                {a.label}
                {a.highlight && <span className={active ? "text-white/70" : "text-navy-900/50"}> ({a.highlight})</span>}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={donateUrl}
            className="flex items-center justify-center gap-2 rounded-full bg-cta px-7 py-3.5 font-semibold text-white shadow-lg shadow-cta/25 transition hover:bg-cta-hover"
          >
            <Icon name="card" className="h-5 w-5" />
            Donar con Mercado Pago / tarjeta
          </a>
          <InterestLink
            href="#contacto"
            interest="donacion"
            className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-navy-900 ring-1 ring-navy-900/10 transition hover:ring-cta"
          >
            <Icon name="bank" className="h-5 w-5" />
            Datos para transferencia
          </InterestLink>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-navy-900/60">
          {["Pago seguro", "Tarjeta, débito o transferencia", "Aportes únicos o mensuales"].map((t) => (
            <li key={t} className="flex items-center gap-1.5">
              <Icon name="check" className="h-4 w-4 text-cta" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
