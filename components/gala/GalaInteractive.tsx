"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { donarOnlineUrl, nocheAzul } from "@/lib/content";

// Piezas interactivas de la página de la Noche Azul.

const TEST_PRICE = 95000;
const ars = (n: number) => `$${n.toLocaleString("es-AR")}`;

/** Botón flotante para reservar (Mercado Pago): aparece cuando se deja atrás el banner. */
export function FloatingDonate() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      // Se oculta en la sección de donación y en el cierre, que ya tienen su propio botón
      const inView = (id: string) => {
        const r = document.getElementById(id)?.getBoundingClientRect();
        return !!r && r.top < vh * 0.8 && r.bottom > vh * 0.2;
      };
      const end = document.getElementById("gala-final")?.getBoundingClientRect().top ?? Infinity;
      setShow(window.scrollY > vh * 0.6 && end > vh * 0.6 && !inView("participa"));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href={nocheAzul.reserveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-cta to-sky-accent px-6 py-3.5 font-semibold text-white shadow-xl shadow-navy-950/30 ring-4 ring-white/60 transition-all duration-500 hover:scale-105 sm:right-6 sm:bottom-6 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <Icon name="calendar" className="h-5 w-5" />
      Reservá tu lugar
    </a>
  );
}

/** Contenedor con un haz de luz que sigue al mouse (efecto escenario). */
export function Spotlight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        ref.current!.style.setProperty("--x", `${e.clientX - r.left}px`);
        ref.current!.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
      className={`group/spot relative ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-500 group-hover/spot:opacity-100"
        style={{ background: "radial-gradient(420px circle at var(--x) var(--y), rgba(143,208,240,0.18), transparent 60%)" }}
        aria-hidden
      />
      {children}
    </div>
  );
}

/** Objetivos: siempre visibles. Entran escalonados y al pasar el mouse se elevan,
 *  el ícono gira y una línea de luz recorre la base de la tarjeta. */
export function Objetivos({ items }: { items: { label: string; text: string; icon: string }[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((o, i) => (
        <div
          key={o.label}
          className="reveal-pop group relative flex flex-col overflow-hidden rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10 backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-white/[0.1] hover:shadow-2xl hover:shadow-cta/20 hover:ring-sky-accent/40"
        >
          <span className="pointer-events-none absolute -top-4 -right-2 text-[6.5rem] leading-none font-extrabold text-white/[0.05] transition duration-500 group-hover:text-sky-accent/10" aria-hidden>
            0{i + 1}
          </span>
          <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cta to-navy-800 text-white shadow-lg shadow-cta/30 transition duration-500 group-hover:scale-110 group-hover:rotate-[8deg]">
            <Icon name={o.icon} className="h-7 w-7" />
          </span>
          <p className="relative mt-6 text-lg font-extrabold leading-snug">{o.label}</p>
          <p className="relative mt-3 text-sm leading-relaxed text-white/70">{o.text}</p>
          <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-sky-accent to-cta transition duration-700 group-hover:scale-x-100" aria-hidden />
        </div>
      ))}
    </div>
  );
}

/** Calculadora de impacto: cuántos tests financia tu aporte. */
export function ImpactSlider() {
  const [tests, setTests] = useState(2);
  const total = tests * TEST_PRICE;
  return (
    <div className="rounded-[2rem] bg-white p-6 text-navy-900 shadow-2xl shadow-navy-950/40 sm:p-10">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cta">Simulá tu impacto</p>
      <p className="mt-4 text-lg text-navy-900/70">Con tu aporte financiás tests de detección temprana para personas que no tienen acceso.</p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-5xl font-extrabold tracking-tight text-navy-900 tabular-nums sm:text-6xl">{ars(total)}</p>
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
      <p className="mt-3 text-center text-xs text-navy-900/50">Cada test Q-FIT cuesta {ars(TEST_PRICE)}. Podés elegir cualquier monto en la plataforma.</p>
    </div>
  );
}

/** Galería de momentos: dos filas en movimiento y visor a pantalla completa. */
export function Momentos({ photos }: { photos: { src: string; alt: string; position?: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => ((i ?? 0) + 1) % photos.length);
      if (e.key === "ArrowLeft") setOpen((i) => ((i ?? 0) - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, photos.length]);

  // Cada fila muestra fotos distintas para que no se repitan a la vista.
  const half = Math.ceil(photos.length / 2);
  const rows = [photos.slice(0, half), photos.slice(half)];
  return (
    <>
      <div className="space-y-4">
        {rows.map((row, r) => (
          <div key={r} className="marquee overflow-hidden">
            <ul className={`marquee-track flex w-max gap-4 ${r === 1 ? "marquee-reverse" : ""}`} style={{ animationDuration: "45s" }}>
              {[...row, ...row].map((p, i) => (
                <li key={i} aria-hidden={i >= row.length}>
                  <button
                    type="button"
                    tabIndex={i >= row.length ? -1 : 0}
                    onClick={() => setOpen(photos.indexOf(p))}
                    className="group relative block h-56 w-52 overflow-hidden rounded-2xl ring-1 ring-white/10 sm:h-64 sm:w-60"
                  >
                    <Image quality={90} src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 240px, 208px" style={{ objectPosition: p.position }} className="object-cover transition duration-700 group-hover:scale-110" />
                    <span className="absolute inset-0 flex items-center justify-center bg-navy-950/50 opacity-0 transition group-hover:opacity-100">
                      <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-navy-900">Ver foto</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <div className="pop-in relative h-[82vh] w-[88vw] max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image quality={90} src={photos[open].src} alt={photos[open].alt} fill sizes="90vw" className="rounded-2xl object-contain" />
          </div>
          {[
            { d: -1, label: "Foto anterior", pos: "left-4", rot: "rotate-180" },
            { d: 1, label: "Foto siguiente", pos: "right-4", rot: "" },
          ].map((b) => (
            <button
              key={b.d}
              type="button"
              aria-label={b.label}
              onClick={(e) => {
                e.stopPropagation();
                setOpen((i) => ((i ?? 0) + b.d + photos.length) % photos.length);
              }}
              className={`absolute top-1/2 ${b.pos} -translate-y-1/2 p-3 text-white/80 transition hover:scale-110 hover:text-white`}
            >
              <Icon name="arrow" className={`h-8 w-8 ${b.rot}`} />
            </button>
          ))}
          <button type="button" aria-label="Cerrar" autoFocus onClick={() => setOpen(null)} className="absolute top-4 right-4 p-3 text-white/80 hover:text-white">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
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
    <div className="mx-auto max-w-4xl">
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

      <div key={tab} className="pop-in mt-10 rounded-[2rem] bg-white p-8 text-left shadow-xl shadow-navy-900/5 ring-1 ring-navy-900/5 sm:p-12">
        {tab === "personas" ? (
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-navy-900/75">
              <p className="text-2xl font-extrabold text-navy-900">Viví la Noche Azul</p>
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
                href={nocheAzul.reserveUrl} target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cta px-8 py-4 font-semibold text-white shadow-lg shadow-cta/25 transition hover:bg-cta-hover"
              >
                Reservá tu lugar <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-2xl font-extrabold text-navy-900">Un espacio para empresas y organizaciones</p>
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
              href={nocheAzul.modalidadesUrl} target="_blank" rel="noopener noreferrer"
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
