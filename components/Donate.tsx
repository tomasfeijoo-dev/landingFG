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
      <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 shadow-2xl shadow-navy-900/20">
        {/* Bárbara: su cara y el acceso a su historia en video */}
        <div className="photo-fade relative h-72 sm:h-96 md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[46%]">
          <Image src="/images/barbara.webp" alt="Bárbara, paciente que compartió su historia con la Fundación" fill sizes="(min-width: 768px) 46vw, 100vw" className="object-cover object-[45%_25%]" />
        </div>
        <button
          type="button"
          onClick={openBarbaraVideo}
          className="group absolute top-56 right-5 z-10 flex items-center gap-3 rounded-full bg-white/95 py-2 pr-5 pl-2 text-sm font-semibold text-navy-900 shadow-xl transition hover:bg-white sm:top-80 md:top-auto md:right-8 md:bottom-8"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cta text-white transition group-hover:scale-110">
            <Icon name="play" className="ml-0.5 h-4 w-4" />
          </span>
          Mirá la historia de Bárbara
        </button>

        <div className="relative px-6 pt-4 pb-14 text-white sm:px-12 sm:pb-16 md:max-w-[58%] md:py-16 lg:px-16">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur">
            <Icon name="heart" className="h-7 w-7" />
          </span>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-sky-accent">Compromiso solidario</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Tu aporte permite más diagnósticos tempranos. Salva vidas.</h2>
          <p className="mt-4 text-white/80">
            Cada test Q-FIT cuesta $95.000. Elegí cuántas personas querés ayudar a hacerse el control.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4" role="radiogroup" aria-label="Monto de la donación">
            {donationOptions.map((o) => {
              const active = o.value === selected;
              return (
                <button
                  key={o.value}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => pick(o)}
                  className={`flex flex-col items-center justify-center rounded-2xl px-3 py-3.5 text-center transition ${
                    active ? "bg-white text-navy-900 shadow-lg ring-2 ring-sky-accent" : "bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/20"
                  }`}
                >
                  <span className="text-base font-extrabold">{o.label}</span>
                  <span className={`mt-0.5 text-xs ${active ? "text-navy-900/60" : "text-white/70"}`}>
                    {o.tests ? `${o.tests} ${o.tests === 1 ? "test" : "tests"} Q-FIT` : "Vos elegís"}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <InterestLink
              href={donateUrl}
              className="flex items-center justify-center gap-2 rounded-full bg-cta px-7 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-cta-hover"
            >
              <Icon name="card" className="h-5 w-5" />
              Donar con Mercado Pago / tarjeta
            </InterestLink>
            <InterestLink
              href="/contacto"
              interest="donacion"
              className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-3.5 font-semibold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20"
            >
              <Icon name="bank" className="h-5 w-5" />
              Datos para transferencia
            </InterestLink>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
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
