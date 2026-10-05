"use client";

import { geoGraticule10, geoMercator, geoPath, type GeoProjection } from "d3-geo";
import { easeCubicInOut } from "d3-ease";
import { interpolateZoom } from "d3-interpolate";
import type { FeatureCollection } from "geojson";
import { useEffect, useRef, useState } from "react";

// Mapa animado de Argentina: recorre los pines con movimientos de cámara suaves
// (acercar, inclinar y girar), como un vuelo sobre el mapa. Se dibuja en canvas
// con datos propios (/geo/region.json), sin servicios externos.

type Pin = { id: string; name: string; detail: string; lon: number; lat: number };
type Stop = { lon: number; lat: number; zoom: number; pitch: number; bearing: number; pin?: string; hold: number };

const PINS: Pin[] = [
  { id: "misiones", name: "Misiones", detail: "Programa provincial · +10.000 personas testeadas", lon: -55.9, lat: -27.37 },
  { id: "chubut", name: "Chubut", detail: "Comodoro Rivadavia · Red de prevención", lon: -67.5, lat: -45.86 },
  { id: "clinicas", name: "Hospital de Clínicas", detail: "Gastroenterología · CABA", lon: -58.4, lat: -34.599 },
  { id: "gandulfo", name: "Hospital Gandulfo", detail: "Gastroenterología · Lomas de Zamora", lon: -58.401, lat: -34.765 },
  { id: "caba", name: "Ciudad de Buenos Aires", detail: "Fundación Gedyt", lon: -58.381, lat: -34.604 },
];

// zoom: 1 = Argentina completa en pantalla
const TOUR: Stop[] = [
  { lon: -63.5, lat: -41, zoom: 1, pitch: 0, bearing: 0, hold: 2600 },
  { lon: -55.9, lat: -27.37, zoom: 7, pitch: 42, bearing: -18, pin: "misiones", hold: 3200 },
  { lon: -67.5, lat: -45.86, zoom: 6, pitch: 38, bearing: 16, pin: "chubut", hold: 3200 },
  { lon: -58.45, lat: -34.68, zoom: 30, pitch: 48, bearing: -8, hold: 1600 },
  { lon: -58.4, lat: -34.599, zoom: 70, pitch: 52, bearing: -24, pin: "clinicas", hold: 3000 },
  { lon: -58.401, lat: -34.765, zoom: 62, pitch: 50, bearing: 10, pin: "gandulfo", hold: 3000 },
  { lon: -58.381, lat: -34.604, zoom: 75, pitch: 55, bearing: 28, pin: "caba", hold: 3200 },
];

const PERSPECTIVE = 1100;
const ORIGIN_Y = 0.6;
const FOCUS_Y = 0.58;

const COLORS = {
  ocean: "#d9eaf5",
  land: "#f1f6f9",
  landStroke: "#b8cfdd",
  argentina: "#ffffff",
  argentinaStroke: "#3fa5d4",
  graticule: "rgba(1, 95, 134, 0.06)",
};

// fade: degradé blanco desde la izquierda para que se lea el texto encima (los pines quedan por arriba).
export default function ArgentinaMap({ focusX = 0.62, fade = "", className = "" }: { focusX?: number; fade?: string; className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pinRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [active, setActive] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current!;
    const plane = planeRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let data: { argentina: FeatureCollection; neighbors: FeatureCollection } | null = null;
    let raf = 0;
    let visible = true;
    let cancelled = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Proyección de referencia: Argentina entera ocupa el alto del plano en zoom 1
    let W = 0;
    let H = 0;
    let dpr = 1;
    const ref = geoMercator().scale(1).translate([0, 0]);
    let baseScale = 1;
    const projection: GeoProjection = geoMercator();
    const path = geoPath(projection, ctx);
    const graticule = geoGraticule10();

    const cam = { lon: TOUR[0].lon, lat: TOUR[0].lat, zoom: 1, pitch: 0, bearing: 0 };

    function resize() {
      // Tamaño de layout (sin la inclinación 3D)
      W = plane.offsetWidth;
      H = plane.offsetHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      // Argentina (con Malvinas) mide ≈ 0.78 unidades de alto en Mercator: que entre en el alto visible
      baseScale = (wrap.offsetHeight * 0.92) / 0.78;
    }

    function draw() {
      if (!data) return;
      projection
        .center([cam.lon, cam.lat])
        .scale(baseScale * cam.zoom)
        .translate([W * focusX, H * FOCUS_Y])
        .angle(cam.bearing);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = COLORS.ocean;
      ctx.fillRect(0, 0, W, H);

      ctx.beginPath();
      path(graticule);
      ctx.strokeStyle = COLORS.graticule;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      path(data.neighbors);
      ctx.fillStyle = COLORS.land;
      ctx.fill();
      ctx.strokeStyle = COLORS.landStroke;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.save();
      ctx.shadowColor = "rgba(1, 64, 92, 0.18)";
      ctx.shadowBlur = 24;
      ctx.beginPath();
      path(data.argentina);
      ctx.fillStyle = COLORS.argentina;
      ctx.fill();
      ctx.restore();
      ctx.beginPath();
      path(data.argentina);
      ctx.strokeStyle = COLORS.argentinaStroke;
      ctx.lineWidth = 1.6;
      ctx.stroke();

      plane.style.transform = `rotateX(${cam.pitch}deg)`;
      // Los pines van fuera del plano inclinado (para que no queden tapados):
      // calculamos dónde cae cada punto aplicando la misma rotación y perspectiva que el CSS.
      const a = (cam.pitch * Math.PI) / 180;
      const Lp = plane.offsetLeft;
      const Tp = plane.offsetTop;
      const ox = Lp + W * 0.5;
      const oy = Tp + H * ORIGIN_Y;
      const cx = wrap.offsetWidth / 2;
      const cy = wrap.offsetHeight / 2;
      for (const p of PINS) {
        const el = pinRefs.current[p.id];
        const xy = projection([p.lon, p.lat]);
        if (!el || !xy) continue;
        const dx = Lp + xy[0] - ox;
        const dy = Tp + xy[1] - oy;
        const y1 = dy * Math.cos(a);
        const z1 = dy * Math.sin(a);
        const k = PERSPECTIVE / (PERSPECTIVE - z1);
        const sx = cx + (ox + dx - cx) * k;
        const sy = cy + (oy + y1 - cy) * k;
        const inside = sx > -40 && sx < wrap.offsetWidth + 40 && sy > -40 && sy < wrap.offsetHeight + 40;
        el.style.opacity = inside ? "1" : "0";
        el.style.transform = `translate(${sx}px, ${sy}px)`;
      }
    }

    // Vuelo entre dos paradas: zoom con arco (acerca/aleja) + giro e inclinación suaves
    function fly(from: Stop, to: Stop, done: () => void) {
      const p0 = ref([from.lon, from.lat])!;
      const p1 = ref([to.lon, to.lat])!;
      const w0 = 1 / from.zoom;
      const w1 = 1 / to.zoom;
      const zi = interpolateZoom([p0[0], p0[1], w0], [p1[0], p1[1], w1]);
      const duration = Math.min(Math.max(zi.duration * 1.1, 2600), 5200);
      const start = performance.now();
      const step = (now: number) => {
        if (cancelled) return;
        if (!visible) {
          raf = requestAnimationFrame(step);
          return;
        }
        const t = Math.min((now - start) / duration, 1);
        const e = easeCubicInOut(t);
        const [x, y, w] = zi(e);
        const ll = ref.invert!([x, y])!;
        cam.lon = ll[0];
        cam.lat = ll[1];
        cam.zoom = 1 / w;
        cam.pitch = from.pitch + (to.pitch - from.pitch) * e;
        cam.bearing = from.bearing + (to.bearing - from.bearing) * e;
        draw();
        if (t < 1) raf = requestAnimationFrame(step);
        else done();
      };
      raf = requestAnimationFrame(step);
    }

    let timer: ReturnType<typeof setTimeout>;
    function run(i: number) {
      const stop = TOUR[i];
      setActive(stop.pin ?? null);
      timer = setTimeout(() => {
        setActive(null);
        const next = (i + 1) % TOUR.length;
        fly(stop, TOUR[next], () => run(next));
      }, stop.hold);
    }

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));

    fetch("/geo/region.json")
      .then((r) => r.json())
      .then((json) => {
        if (cancelled) return;
        data = json;
        resize();
        draw();
        setReady(true);
        ro.observe(wrap);
        io.observe(wrap);
        if (!reduced) run(0);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      ro.disconnect();
      io.disconnect();
    };
  }, [focusX]);

  return (
    <div
      ref={wrapRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden bg-[#d9eaf5] transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"} ${className}`}
      style={{ perspective: `${PERSPECTIVE}px` }}
      aria-hidden
    >
      <div ref={planeRef} className="absolute -inset-x-[12%] -top-[28%] -bottom-[6%]" style={{ transformOrigin: `50% ${ORIGIN_Y * 100}%` }}>
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      </div>
      {fade && <div className={`absolute inset-0 ${fade}`} />}
      {PINS.map((p) => {
          const on = active === p.id;
          return (
            <div
              key={p.id}
              ref={(el) => {
                pinRefs.current[p.id] = el;
              }}
              className="absolute top-0 left-0 transition-opacity duration-300 [transform-origin:0_0]"
            >
              {/* Punto con pulso */}
              <span className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full ${on ? "h-4 w-4 bg-cta" : "h-2.5 w-2.5 bg-navy-800"} ring-4 ring-white/80 transition-all`} />
              {on && <span className="map-pulse absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cta/40" />}
            {/* Pin con etiqueta */}
              <div
                className={`absolute bottom-3 left-0 -translate-x-1/2 whitespace-nowrap transition-all duration-500 ${
                  on ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              >
                <div className="rounded-xl bg-white px-3.5 py-2 text-left shadow-xl ring-1 ring-navy-900/10">
                  <p className="text-sm font-bold text-navy-900">{p.name}</p>
                  <p className="text-[11px] text-navy-900/60">{p.detail}</p>
                </div>
                <div className="mx-auto h-3 w-0.5 bg-cta" />
              </div>
            </div>
          );
        })}
    </div>
  );
}
