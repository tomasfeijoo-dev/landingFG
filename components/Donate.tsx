"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import DonationCelebration from "@/components/DonationCelebration";
import Icon from "@/components/Icon";
import InterestLink from "@/components/InterestLink";
import { openBarbaraVideo } from "@/components/VideoModal";
import { donateUrl, donationOptions, type DonationOption } from "@/lib/content";

export default function Donate({ first = false }: { first?: boolean }) {
  const [selected, setSelected] = useState<string | null>(null);
  // Cada click vuelve a disparar el festejo, aunque se repita la opción.
  const [celebration, setCelebration] = useState<{ option: DonationOption; n: number } | null>(null);
  const close = useCallback(() => setCelebration(null), []);

  function pick(option: DonationOption) {
    setSelected(option.value);
    setCelebration((c) => ({ option, n: (c?.n ?? 0) + 1 }));
  }

  return (
    <section id="donar" className={`px-4 sm:px-6 ${first ? "pt-6 pb-16 sm:pt-10 sm:pb-20" : "py-20 sm:py-24"}`}>
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
        <Image src="/images/abrazo.webp" alt="Dos personas abrazándose" fill sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/65 to-navy-900/25" />

        <div className="relative px-6 py-12 text-white sm:px-12 sm:py-14 lg:px-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-accent">
                <Icon name="heart" className="h-4 w-4" />
                Compromiso solidario
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Tu aporte permite más diagnósticos tempranos. Salva vidas.</h2>
              <p className="mt-3 text-white/80">Cada test Q-FIT cuesta $95.000. Elegí cuántas personas querés ayudar a hacerse el control.</p>
            </div>
            <button
              type="button"
              onClick={openBarbaraVideo}
              className="group flex flex-none items-center gap-3 self-start rounded-full bg-white/95 py-1.5 pr-5 pl-1.5 text-sm font-semibold text-navy-900 shadow-xl transition hover:bg-white"
            >
              <span className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image src="/images/barbara.webp" alt="" fill sizes="40px" className="object-cover object-[50%_30%]" />
                <span className="absolute inset-0 flex items-center justify-center bg-navy-900/35 text-white transition group-hover:bg-cta/70">
                  <Icon name="play" className="ml-0.5 h-3.5 w-3.5" />
                </span>
              </span>
              Mirá la historia de Bárbara
            </button>
          </div>

          {/* Montos, donar y transferencia en una sola línea */}
          <div className="mt-16 flex flex-col gap-3 lg:flex-row lg:items-stretch">
            <div className="grid flex-1 grid-cols-2 gap-x-3 gap-y-16 sm:grid-cols-4 sm:gap-y-3" role="radiogroup" aria-label="Monto de la donación">
              {donationOptions.map((o) => {
                const active = o.value === selected;
                const popular = o.tier === "platino";
                return (
                  <div key={o.value} className="relative">
                    {popular && (
                      <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 w-56 -translate-x-1/2 max-sm:left-0 max-sm:translate-x-0">
                        <div className="relative rounded-xl bg-white px-3 py-2 text-center text-xs font-semibold leading-snug text-navy-900 shadow-xl">
                          ¡La mayoría elige esta opción, y lo agradecemos mucho!
                          <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white max-sm:left-10" />
                        </div>
                      </div>
                    )}
                    {popular && (
                      <svg viewBox="0 0 24 24" className="cursor-bounce pointer-events-none absolute -right-2 -bottom-4 z-10 h-7 w-7 drop-shadow-md" aria-hidden>
                        <path d="M5 3l14 7.5-6.2 1.6L10 18z" fill="#ffffff" stroke="#01405c" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    )}
                    <button
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => pick(o)}
                      className={`flex h-full w-full flex-col items-center justify-center rounded-2xl px-3 py-3 text-center transition ${
                        active
                          ? "bg-white text-navy-900 shadow-lg ring-2 ring-sky-accent"
                          : `bg-white/10 text-white backdrop-blur hover:bg-white/20 ${popular ? "ring-2 ring-sky-accent/80" : "ring-1 ring-white/25"}`
                      }`}
                    >
                      <span className="text-base font-extrabold">{o.label}</span>
                      <span className={`mt-0.5 text-xs ${active ? "text-navy-900/60" : "text-white/70"}`}>
                        {o.tests ? `${o.tests} ${o.tests === 1 ? "test" : "tests"} Q-FIT` : "Vos elegís"}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <InterestLink
                href={donateUrl}
                className="flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-cta px-7 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-cta-hover"
              >
                <Icon name="card" className="h-5 w-5" />
                Donar
              </InterestLink>
              <InterestLink
                href="/contacto"
                interest="donacion"
                className="flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-white/10 px-6 py-3.5 font-semibold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20"
              >
                <Icon name="bank" className="h-5 w-5" />
                Ver datos de transferencia
              </InterestLink>
            </div>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            {["Pago seguro", "Tarjeta, débito o transferencia", "Aportes únicos o mensuales"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Icon name="check" className="h-4 w-4 text-sky-accent" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {celebration && <DonationCelebration key={celebration.n} option={celebration.option} onClose={close} />}
    </section>
  );
}
