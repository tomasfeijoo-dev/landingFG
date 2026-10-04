"use client";

import { useEffect } from "react";
import Icon from "@/components/Icon";
import InterestLink from "@/components/InterestLink";
import { barbaraVideoUrl, donateUrl, type DonationOption } from "@/lib/content";

const BLUES = ["#015f86", "#3fa5d4", "#01405c", "#7cc4e6", "#d6ecf7"];
const TIER_NAME = { plata: "Plata", oro: "Oro", platino: "Platino" } as const;

async function fireConfetti(big: boolean) {
  const confetti = (await import("canvas-confetti")).default;
  const base = { colors: BLUES, zIndex: 120, disableForReducedMotion: true, ticks: 220 };
  if (!big) {
    confetti({ ...base, particleCount: 120, spread: 80, startVelocity: 42, origin: { y: 0.6 } });
    return;
  }
  // Platino: cañones desde ambos lados durante ~1,5 s y una lluvia central
  confetti({ ...base, particleCount: 160, spread: 100, startVelocity: 50, scalar: 1.2, origin: { y: 0.55 } });
  const end = Date.now() + 1500;
  const frame = () => {
    confetti({ ...base, particleCount: 6, angle: 60, spread: 60, origin: { x: 0, y: 0.7 } });
    confetti({ ...base, particleCount: 6, angle: 120, spread: 60, origin: { x: 1, y: 0.7 } });
    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();
}

function Applause({ many }: { many: boolean }) {
  const hands = many ? 12 : 8;
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0" aria-hidden>
      {Array.from({ length: hands }, (_, i) => (
        <span
          key={i}
          className="clap absolute bottom-6 text-3xl"
          style={{ left: `${8 + ((i * 84) / (hands - 1))}%`, animationDelay: `${(i % 4) * 0.18 + Math.floor(i / 4) * 0.35}s` }}
        >
          👏
        </span>
      ))}
    </div>
  );
}

function DiamondMedal() {
  return (
    <svg viewBox="0 0 120 150" className="medal mx-auto h-36 w-auto drop-shadow-xl" aria-hidden>
      <defs>
        <linearGradient id="medal-face" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.45" stopColor="#d6ecf7" />
          <stop offset="1" stopColor="#7cc4e6" />
        </linearGradient>
        <linearGradient id="medal-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3fa5d4" />
          <stop offset="1" stopColor="#01405c" />
        </linearGradient>
      </defs>
      {/* Cintas */}
      <path d="M38 0 L58 52 L44 58 L22 6 Z" fill="#015f86" />
      <path d="M82 0 L62 52 L76 58 L98 6 Z" fill="#3fa5d4" />
      {/* Medalla */}
      <circle cx="60" cy="96" r="44" fill="url(#medal-rim)" />
      <circle cx="60" cy="96" r="35" fill="url(#medal-face)" />
      {/* Diamante central */}
      <g className="sparkle">
        <path d="M60 74 L76 90 L60 118 L44 90 Z" fill="#3fa5d4" />
        <path d="M60 74 L68 90 L60 118 L52 90 Z" fill="#7cc4e6" />
        <path d="M44 90 L76 90" stroke="#ffffff" strokeWidth="1.5" opacity="0.8" />
      </g>
      {/* Diamantes pequeños */}
      {[
        [24, 96],
        [96, 96],
        [60, 140],
      ].map(([x, y], i) => (
        <path
          key={i}
          className="sparkle"
          style={{ animationDelay: `${0.3 * (i + 1)}s` }}
          d={`M${x} ${y - 6} L${x + 5} ${y} L${x} ${y + 6} L${x - 5} ${y} Z`}
          fill="#ffffff"
        />
      ))}
    </svg>
  );
}

export default function DonationCelebration({ option, onClose }: { option: DonationOption; onClose: () => void }) {
  const tier = option.tier;

  useEffect(() => {
    if (tier === "platino") fireConfetti(true);
    if (tier === "oro") fireConfetti(false);
    const t = setTimeout(onClose, tier ? (tier === "platino" ? 6500 : 5000) : 9000);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [tier, onClose]);

  const big = tier === "platino";
  const tests = option.tests ?? 0;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-950/40 px-4 backdrop-blur-[2px]" onClick={onClose}>
      <div
        role="status"
        aria-live="polite"
        onClick={(e) => e.stopPropagation()}
        className={`pop-in relative w-full overflow-hidden rounded-3xl bg-white text-center shadow-2xl ring-1 ring-brand-100 ${
          big ? "max-w-lg px-8 pt-8 pb-24 sm:px-12" : tier === "plata" ? "max-w-md px-8 pt-8 pb-24" : "max-w-md p-8"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-navy-900/50 transition hover:bg-brand-50 hover:text-navy-900"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {tier ? (
          <>
            {big ? (
              <DiamondMedal />
            ) : (
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-cta">
                <Icon name="heart" className="h-7 w-7" />
              </span>
            )}
            <p className={`mt-5 font-extrabold tracking-tight text-navy-900 ${big ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
              ¡Wow, sos donante <span className="text-cta">{TIER_NAME[tier]}</span>!
            </p>
            <p className={`mt-3 text-navy-900/70 ${big ? "text-lg" : ""}`}>
              Gracias a tu donación,{" "}
              <strong className="text-navy-900">
                {tests === 1 ? "1 persona va" : `${tests} personas van`} a poder hacerse un test
              </strong>{" "}
              para prevenir el cáncer de colon.
            </p>
          </>
        ) : (
          <>
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-cta">
              <Icon name="heart" className="h-7 w-7" />
            </span>
            <p className="mt-5 text-xl font-bold text-navy-900">En el próximo paso ingresá el monto.</p>
            <p className="mt-3 text-navy-900/70">
              Al igual que{" "}
              {barbaraVideoUrl ? (
                <a href={barbaraVideoUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-cta underline underline-offset-2">
                  Bárbara
                </a>
              ) : (
                <strong className="text-navy-900">Bárbara</strong>
              )}
              , muchas personas están esperando para hacerse un control que les salve la vida.
            </p>
          </>
        )}

        <div className="relative z-10 mt-6">
          <InterestLink
            href={donateUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-8 py-3.5 font-semibold text-white shadow-lg shadow-cta/25 transition hover:bg-cta-hover"
          >
            <Icon name="card" className="h-5 w-5" />
            Ir al pago
          </InterestLink>
        </div>

        {(tier === "plata" || big) && <Applause many={big} />}
      </div>
    </div>
  );
}
