"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import CountUp from "@/components/CountUp";
import Icon from "@/components/Icon";
import InterestLink from "@/components/InterestLink";
import { slides, type Slide } from "@/lib/content";

const INTERVAL = 7000;

function CtaLink({ cta, variant, tabIndex }: { cta: Slide["primary"]; variant: "primary" | "secondary"; tabIndex: number }) {
  return (
    <InterestLink
      href={cta.href}
      interest={cta.interest}
      tabIndex={tabIndex}
      className={
        variant === "primary"
          ? "inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-navy-900 shadow-lg shadow-black/20 transition hover:bg-brand-50"
          : "inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-3.5 font-semibold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/20"
      }
    >
      {cta.label}
      {variant === "primary" && <Icon name="arrow" className="h-4 w-4" />}
    </InterestLink>
  );
}

// Lazo azul "satinado" para los banners sin foto.
function SatinRibbon() {
  return (
    <svg viewBox="0 0 300 380" className="h-[85%] w-auto drop-shadow-2xl" aria-hidden>
      <defs>
        <linearGradient id="satin-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7cc4e6" />
          <stop offset="0.5" stopColor="#3fa5d4" />
          <stop offset="1" stopColor="#015f86" />
        </linearGradient>
        <linearGradient id="satin-b" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d6ecf7" />
          <stop offset="0.45" stopColor="#3fa5d4" />
          <stop offset="1" stopColor="#01405c" />
        </linearGradient>
      </defs>
      <path d="M70 360 L178 176 C206 128 196 40 150 40 C104 40 94 128 122 176 L150 224" fill="none" stroke="url(#satin-a)" strokeWidth="46" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M140 207 L230 360" fill="none" stroke="url(#satin-b)" strokeWidth="46" strokeLinecap="round" />
    </svg>
  );
}

function Visual({ slide, priority }: { slide: Slide; priority: boolean }) {
  return (
    <div className="absolute inset-0">
      {slide.image ? (
        <Image
          src={slide.image}
          alt={slide.imageAlt ?? ""}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="object-cover"
          style={{ objectPosition: slide.imagePosition ?? "center" }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-end bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pr-[8%] max-lg:items-start max-lg:justify-center max-lg:pt-6 max-lg:pr-0">
          <SatinRibbon />
        </div>
      )}
      {/* Filtro azul: más intenso a la izquierda (donde va el texto) y suave a la derecha */}
      <div className="banner-tint absolute inset-0" />
    </div>
  );
}

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = slides.length;

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      aria-roledescription="carrusel"
      aria-label="Campañas de la Fundación"
      className="relative overflow-hidden bg-navy-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="grid">
        {slides.map((s, i) => {
          const active = i === index;
          return (
            <div
              key={s.id}
              role="group"
              aria-roledescription="banner"
              aria-label={`${i + 1} de ${count}`}
              aria-hidden={!active}
              className={`relative [grid-area:1/1] transition-opacity duration-700 ${active ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              <Visual slide={s} priority={i === 0} />
              <div className="relative z-20 mx-auto max-w-7xl">
              <div className="relative z-20 flex min-h-[600px] flex-col justify-end px-6 pt-40 pb-24 text-white sm:min-h-[600px] sm:px-12 lg:min-h-[540px] lg:w-[56%] lg:justify-center lg:py-20 lg:pr-0 lg:pl-16">
                {s.eyebrow && (
                  <span className="mb-5 inline-flex items-center gap-2 self-start rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-white/25 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-accent" />
                    {s.eyebrow}
                  </span>
                )}
                <h2 className="text-2xl leading-snug tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
                  <span className="font-medium">{s.title} </span>
                  <span className="font-extrabold text-[#8fd0f0]">{s.highlight}</span>
                </h2>
                {s.text && <p className="mt-4 max-w-lg text-base text-white/85 sm:text-lg">{s.text}</p>}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <CtaLink cta={s.primary} variant="primary" tabIndex={active ? 0 : -1} />
                  {s.secondary && <CtaLink cta={s.secondary} variant="secondary" tabIndex={active ? 0 : -1} />}
                </div>
              </div>
              {s.badge && (
                <div className="absolute top-4 right-4 z-20 hidden rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-navy-900/5 backdrop-blur sm:block sm:px-5 sm:py-4 lg:top-auto lg:right-16 lg:bottom-24">
                  <p className="text-2xl font-extrabold text-cta sm:text-3xl">
                    <CountUp value={s.badge.value} />
                  </p>
                  <p className="text-xs text-navy-900/65 sm:text-sm">{s.badge.label}</p>
                </div>
              )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Controles */}
      <div className="absolute inset-x-0 bottom-6 z-30 mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-12 lg:pr-8 lg:pl-16">
        <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-sm ring-1 ring-navy-900/5 backdrop-blur">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ir al banner ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-navy-800" : "w-2 bg-navy-900/25 hover:bg-navy-900/40"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          {[
            { d: -1, label: "Banner anterior", rot: "rotate-180" },
            { d: 1, label: "Banner siguiente", rot: "" },
          ].map((b) => (
            <button
              key={b.d}
              type="button"
              onClick={() => go(index + b.d)}
              aria-label={b.label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-900 shadow-md ring-1 ring-navy-900/10 transition hover:text-cta"
            >
              <Icon name="arrow" className={`h-5 w-5 ${b.rot}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
