"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import CountUp from "@/components/CountUp";
import Icon from "@/components/Icon";
import InterestLink from "@/components/InterestLink";
import { slides, type Slide } from "@/lib/content";

const INTERVAL = 7000;

function CtaLink({ cta, variant, tabIndex }: { cta: NonNullable<Slide["primary"]>; variant: "primary" | "secondary"; tabIndex: number }) {
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

function Visual({ slide, priority, active }: { slide: Slide; priority: boolean; active: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  // El video solo corre mientras su banner está a la vista
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (active) v.play().catch(() => {});
    else v.pause();
  }, [active]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`hero-bg absolute inset-0 ${active ? "is-active" : ""}`}>
        {slide.video ? (
          <>
            <video
              ref={video}
              className="absolute inset-0 h-full w-full scale-110 object-cover blur-[5px]"
              src={slide.video}
              poster={slide.image}
              muted
              loop
              playsInline
              preload={priority ? "auto" : "metadata"}
              aria-hidden
            />
            <div className="absolute inset-0 bg-[#0a2a6b]/55 mix-blend-multiply" />
          </>
        ) : slide.image && slide.imageFit === "side" ? (
          <>
            <Image src={slide.image} alt="" fill priority={priority} sizes="100vw" className="object-cover lg:scale-110 lg:blur-2xl" style={{ objectPosition: slide.imagePosition ?? "center" }} />
            <div className="absolute top-8 right-[8%] bottom-24 z-10 hidden aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/20 lg:block">
              <Image src={slide.image} alt={slide.imageAlt ?? ""} fill priority={priority} sizes="480px" className="object-cover" />
            </div>
          </>
        ) : slide.image ? (
          <Image
            src={slide.image}
            alt={slide.imageAlt ?? ""}
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: slide.imagePosition ?? "center" }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-end bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pr-[8%] max-lg:items-start max-lg:justify-center max-lg:pt-6 max-lg:pr-0">
            <SatinRibbon />
          </div>
        )}
      </div>
      {/* Filtro azul: más intenso a la izquierda (donde va el texto) y suave a la derecha */}
      <div className="banner-tint absolute inset-0" />
    </div>
  );
}

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const root = useRef<HTMLElement>(null);
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
      ref={root}
      className="relative overflow-hidden bg-navy-900"
      onMouseMove={(e) => {
        // Leve paralaje del fondo siguiendo el mouse
        const r = root.current!.getBoundingClientRect();
        root.current!.style.setProperty("--mx", String((e.clientX - r.left) / r.width - 0.5));
        root.current!.style.setProperty("--my", String((e.clientY - r.top) / r.height - 0.5));
      }}
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
              <Visual slide={s} priority={i === 0} active={active} />
              <div className="relative z-20 mx-auto max-w-7xl">
              <div key={active ? `on-${index}` : "off"} className={`${active ? "hero-in" : ""} relative z-20 flex min-h-[600px] flex-col justify-end px-6 pt-40 pb-24 text-white sm:min-h-[600px] sm:px-12 lg:min-h-[620px] ${s.imageFit === "side" ? "lg:w-[60%]" : "lg:w-full"} lg:justify-center lg:py-20 lg:pr-24 lg:pl-24 xl:pr-16 xl:pl-16`}>
                {s.logo && (
                  <Image src={s.logo.src} alt={s.logo.alt} width={s.logo.width} height={s.logo.height} className="mb-4 h-auto w-64 drop-shadow-[0_4px_18px_rgba(0,0,0,0.4)] sm:w-80 lg:w-[26rem]" />
                )}
                {s.eyebrow && (
                  <span className="mb-5 inline-flex items-center gap-2 self-start rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-white/25 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-accent" />
                    {s.eyebrow}
                  </span>
                )}
                <h2
                  className={`whitespace-pre-line leading-tight tracking-tight text-white drop-shadow-md lg:leading-[1.05] ${
                    s.titleSize === "xl"
                      ? "text-[2.6rem] sm:text-7xl lg:whitespace-pre lg:text-[min(5.5rem,6vw)]"
                      : s.titleSize === "compact"
                        ? "text-3xl sm:text-5xl lg:whitespace-pre lg:text-[min(2.75rem,3.1vw)]"
                        : // Con saltos de línea forzados, en escritorio cada renglón entra completo
                          `text-4xl sm:text-6xl ${`${s.title}${s.highlight}`.includes("\n") ? "lg:whitespace-pre lg:text-[min(3.6rem,4vw)]" : "lg:text-[3.6rem] xl:text-[4.25rem]"}`
                  }`}
                >
                  <span className="font-medium">{s.title.endsWith("\n") ? s.title : `${s.title} `}</span>
                  <span className="font-extrabold">{s.highlight}</span>
                </h2>
                {s.text && <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">{s.text}</p>}
                {s.primary && (
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <CtaLink cta={s.primary} variant="primary" tabIndex={active ? 0 : -1} />
                    {s.secondary && <CtaLink cta={s.secondary} variant="secondary" tabIndex={active ? 0 : -1} />}
                  </div>
                )}
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

      {/* Flechas: a los costados del banner (en celular, abajo para no tapar el texto) */}
      {[
        { d: -1, label: "Banner anterior", rot: "rotate-180", pos: "left-6 sm:left-12 lg:left-4" },
        { d: 1, label: "Banner siguiente", rot: "", pos: "right-6 sm:right-12 lg:right-4" },
      ].map((b) => (
        <button
          key={b.d}
          type="button"
          onClick={() => go(index + b.d)}
          aria-label={b.label}
          className={`absolute bottom-8 z-30 flex h-12 w-12 items-center justify-center text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] transition hover:scale-110 hover:text-white lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2 ${b.pos}`}
        >
          <svg viewBox="0 0 24 24" className={`h-9 w-9 ${b.rot}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 4l8 8-8 8" />
          </svg>
        </button>
      ))}
    </section>
  );
}
