"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { donarOnlineUrl, nocheAzul } from "@/lib/content";

// Piezas interactivas de la página de la Noche Azul (mismo estilo claro que el resto del sitio).

const TEST_PRICE = 95000;
const ars = (n: number) => `$${n.toLocaleString("es-AR")}`;

/** Botón flotante de donación: aparece al dejar atrás el banner y se oculta donde ya hay uno. */
export function FloatingDonate() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const inView = (id: string) => {
        const r = document.getElementById(id)?.getBoundingClientRect();
        return !!r && r.top < vh * 0.8 && r.bottom > vh * 0.2;
      };
      setShow(window.scrollY > vh * 0.6 && !inView("dona") && !inView("gala-final"));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="#dona"
      className={`fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-cta px-6 py-3.5 font-semibold text-white shadow-xl shadow-navy-900/30 ring-4 ring-white transition-all duration-500 hover:bg-cta-hover sm:right-6 sm:bottom-6 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <Icon name="heart" className="h-5 w-5" />
      Doná a la causa
    </a>
  );
}

/** Calculadora de impacto: cuántos tests financia tu aporte. */
export function ImpactSlider() {
  const [tests, setTests] = useState(2);
  const total = tests * TEST_PRICE;
  return (
    <div className="rounded-[2rem] bg-white p-6 text-navy-900 shadow-2xl shadow-navy-900/20 ring-1 ring-navy-900/5 sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">Simulá tu impacto</p>
      <p className="mt-3 text-navy-900/70">Elegí cuántos tests querés financiar para personas que hoy no tienen acceso a un control.</p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-5xl font-extrabold tracking-tight tabular-nums">{ars(total)}</p>
          <p className="mt-1 text-sm text-navy-900/60">{tests === 1 ? "financia 1 test Q-FIT" : `financian ${tests} tests Q-FIT`}</p>
        </div>
        <div className="grid w-fit grid-cols-10 gap-1 sm:grid-cols-5" aria-hidden>
          {Array.from({ length: 10 }, (_, i) => (
            <span
              key={i}
              className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${i < tests ? "scale-100 bg-cta text-white" : "scale-75 bg-brand-50 text-brand-100"}`}
            >
              <Icon name="heart" className="h-3.5 w-3.5" />
            </span>
          ))}
        </div>
      </div>

      <label className="sr-only" htmlFor="tests-range">
        Cantidad de tests
      </label>
      <input
        id="tests-range"
        type="range"
        min={1}
        max={10}
        value={tests}
        onChange={(e) => setTests(Number(e.target.value))}
        className="mt-8 w-full cursor-pointer accent-cta"
      />
      <div className="mt-1 flex justify-between text-xs text-navy-900/45">
        <span>1 test</span>
        <span>10 tests</span>
      </div>

      <a
        href={donarOnlineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-cta px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-cta/30 transition hover:bg-cta-hover"
      >
        <Icon name="heart" className="h-5 w-5" />
        Doná {ars(total)}
        <Icon name="arrow" className="h-5 w-5 transition group-hover:translate-x-1" />
      </a>
      <p className="mt-3 text-center text-xs text-navy-900/50">Cada test Q-FIT cuesta {ars(TEST_PRICE)}. En la plataforma podés elegir cualquier monto.</p>
    </div>
  );
}

/** Galería de momentos en grilla, con visor a pantalla completa. */
export function Momentos({ photos }: { photos: { src: string; alt: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const go = (d: number) => setOpen((i) => ((i ?? 0) + d + photos.length) % photos.length);
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {photos.map((p, i) => {
          return (
            <button
              key={p.src}
              type="button"
              onClick={() => setOpen(i)}
              className="reveal-pop group relative overflow-hidden rounded-2xl shadow-lg shadow-navy-900/10"
            >
              <div className="relative aspect-[10/11]">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-950/70 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy-900">
                  Ver foto <Icon name="arrow" className="h-3.5 w-3.5" />
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-navy-950/85 p-4 backdrop-blur-sm" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <div className="pop-in relative aspect-[408/440] h-[78vh] max-w-full overflow-hidden rounded-3xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <Image src={photos[open].src} alt={photos[open].alt} fill sizes="80vh" className="object-cover" />
          </div>
          {[
            { d: -1, label: "Foto anterior", pos: "left-3 sm:left-6", rot: "rotate-180" },
            { d: 1, label: "Foto siguiente", pos: "right-3 sm:right-6", rot: "" },
          ].map((b) => (
            <button
              key={b.d}
              type="button"
              aria-label={b.label}
              onClick={(e) => {
                e.stopPropagation();
                go(b.d);
              }}
              className={`absolute top-1/2 ${b.pos} flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy-900 shadow-lg transition hover:text-cta`}
            >
              <Icon name="arrow" className={`h-5 w-5 ${b.rot}`} />
            </button>
          ))}
          <button
            type="button"
            aria-label="Cerrar"
            autoFocus
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-900 shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

/** Participación: pestañas para personas y para empresas. */
export function Participacion() {
  const [tab, setTab] = useState<"personas" | "empresas">("personas");
  const tabs = [
    { id: "personas" as const, label: "Quiero asistir", icon: "calendar" },
    { id: "empresas" as const, label: "Soy una empresa", icon: "handshake" },
  ];
  return (
    <div>
      <div className="mx-auto flex w-fit rounded-full bg-white p-1.5 shadow-sm ring-1 ring-navy-900/5" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition sm:px-7 ${
              tab === t.id ? "bg-cta text-white shadow-md shadow-cta/25" : "text-navy-900/70 hover:text-cta"
            }`}
          >
            <Icon name={t.icon} className="h-4 w-4" />
            {t.label}
          </button>
        ))}
      </div>

      <div key={tab} className="pop-in mt-8 rounded-[2rem] bg-white p-8 shadow-xl shadow-navy-900/5 ring-1 ring-navy-900/5 sm:p-12">
        {tab === "personas" ? (
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-navy-900/75">
              <h3 className="text-2xl font-extrabold text-navy-900">Viví la Noche Azul</h3>
              <p>
                La Noche Azul convoca a todos aquellos que quieren ser parte del cambio. Empresas, organizaciones y personas que eligen acompañar una causa de
                alto impacto.
              </p>
              <p className="text-xs text-navy-900/55">
                * En caso de realizar la compra mediante Mercado Pago, solicitamos enviar el comprobante a{" "}
                <a href={`mailto:${nocheAzul.email}`} className="font-semibold text-cta underline-offset-2 hover:underline">
                  {nocheAzul.email}
                </a>{" "}
                para acreditar correctamente a los asistentes.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={nocheAzul.reserveUrl}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cta px-8 py-4 font-semibold text-white shadow-lg shadow-cta/25 transition hover:bg-cta-hover"
              >
                Reservá tu lugar <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#dona" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-50 px-8 py-3.5 font-semibold text-navy-900 ring-1 ring-brand-100 transition hover:ring-cta">
                <Icon name="heart" className="h-4 w-4 text-cta" /> No puedo ir, pero quiero donar
              </a>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-extrabold text-navy-900">Un espacio para empresas y organizaciones</h3>
            <div className="mt-6 grid gap-6 text-navy-900/75 md:grid-cols-2">
              <div className="space-y-4">
                <p>
                  Empresas y organizaciones pueden sumarse a La Noche Azul como aliados estratégicos de una causa que trasciende una sola noche: impulsar la
                  prevención del cáncer de colon y contribuir a salvar vidas en Argentina.
                </p>
                <p>
                  Ser parte de esta iniciativa significa integrar una red de organizaciones comprometidas con generar un impacto concreto en la salud de la
                  comunidad, promoviendo el acceso a la prevención, la detección temprana y la concientización.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  La Noche Azul reúne a referentes del sistema de salud, empresas, líderes de opinión y decisores en un espacio de encuentro, articulación y
                  compromiso, donde cada alianza fortalece una misión compartida y se transforma en acciones que continúan mucho después del evento.
                </p>
                <p>
                  Para conocer las distintas formas de acompañar esta iniciativa, comunicate a{" "}
                  <a href={`mailto:${nocheAzul.email}`} className="font-semibold text-cta underline-offset-2 hover:underline">
                    {nocheAzul.email}
                  </a>
                  .
                </p>
              </div>
            </div>
            <a
              href={nocheAzul.modalidadesUrl}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-cta px-8 py-3.5 font-semibold text-white transition hover:bg-cta-hover"
            >
              Ver modalidades de participación <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

/** Banner con el video de la gala de fondo (sin sonido) y un visor para verlo completo con sonido. */
export function HeroVideo({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="relative flex min-h-[34rem] items-center overflow-hidden bg-navy-950 text-white sm:min-h-[40rem] lg:min-h-[44rem]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/gala/noche-azul-2026-loop.mp4"
        poster="/gala/noche-azul-2026-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-navy-950/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/70 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-12 lg:px-16">
        {children}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-white py-2 pr-7 pl-2 font-semibold text-navy-900 shadow-lg shadow-black/30 transition hover:bg-brand-50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cta text-white transition group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Mirá cómo fue la noche
          </button>
          <a
            href="#dona"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-8 py-3.5 font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-cta-hover"
          >
            <Icon name="heart" className="h-4 w-4" /> Doná a la causa
          </a>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label="Video de la Noche Azul 2026">
          <div className="pop-in relative w-full max-w-5xl overflow-hidden rounded-3xl bg-black shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <video className="aspect-video w-full" src="/gala/noche-azul-2026.mp4" poster="/gala/noche-azul-2026-poster.webp" controls autoPlay playsInline />
          </div>
          <button
            type="button"
            aria-label="Cerrar"
            autoFocus
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-900 shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
