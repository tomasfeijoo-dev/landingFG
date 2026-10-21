"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/Icon";
import { categorias, notas, type Categoria, type Nota } from "@/lib/prensa";

const PAGE = 9;

// Las notas de otros medios abren el link original en otra pestaña; las propias, su página interna.
function NotaLink({ nota, className, style, children }: { nota: Nota; className: string; style?: React.CSSProperties; children: React.ReactNode }) {
  if (nota.externa) {
    return (
      <a href={nota.href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
        {children}
      </a>
    );
  }
  return (
    <Link href={nota.href} className={className} style={style}>
      {children}
    </Link>
  );
}

// Foto de la nota o, si no hay, una placa con el nombre del medio
function NotaImagen({ nota, sizes, zoom }: { nota: Nota; sizes: string; zoom: string }) {
  if (nota.image) {
    return <Image quality={90} src={nota.image} alt="" fill sizes={sizes} className={`object-cover transition duration-700 ${zoom}`} />;
  }
  return (
    <div className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy-950 via-navy-900 to-cta p-6 text-center text-white transition duration-700 ${zoom}`}>
      <span className="pointer-events-none absolute -right-8 -bottom-10 h-32 w-32 rounded-full border-[18px] border-white/10" aria-hidden />
      <Icon name="quote" className="h-7 w-7 text-sky-accent" />
      <span className="mt-3 text-2xl font-extrabold tracking-tight">{nota.medio}</span>
      <span className="mt-1 text-[11px] font-semibold tracking-[0.18em] text-white/60 uppercase">En los medios</span>
    </div>
  );
}

const leer = (n: Nota) => (n.externa ? `Leer en ${n.medio}` : "Leer nota");

export default function PressGrid() {
  const [cat, setCat] = useState<Categoria | "Todas">("Todas");
  const [shown, setShown] = useState(PAGE);
  const list = cat === "Todas" ? notas : notas.filter((n) => n.categoria === cat);
  // La nota destacada va arriba en grande; el resto conserva el orden original.
  const featured = list.find((n) => n.destacada) ?? list[0];
  const rest = list.filter((n) => n !== featured);
  const visible = rest.slice(0, shown - 1);

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filtrar notas">
        {(["Todas", ...categorias] as const).map((c) => {
          const active = c === cat;
          const count = c === "Todas" ? notas.length : notas.filter((n) => n.categoria === c).length;
          return (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setCat(c);
                setShown(PAGE);
              }}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                active ? "bg-navy-900 text-white shadow-lg shadow-navy-900/20" : "bg-white text-navy-900 ring-1 ring-navy-900/10 hover:ring-cta"
              }`}
            >
              {c}
              <span className={`ml-2 rounded-full px-2 py-0.5 text-xs ${active ? "bg-white/15" : "bg-brand-50 text-cta"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* Nota destacada */}
      {featured && (
        <NotaLink
          key={`f-${cat}`}
          nota={featured}
          className="step-in group relative mt-10 grid overflow-hidden rounded-[2rem] bg-navy-900 text-white shadow-2xl shadow-navy-900/20 lg:grid-cols-[1.3fr_1fr]"
        >
          <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:min-h-[22rem]">
            <NotaImagen nota={featured} sizes="(min-width: 1024px) 60vw, 100vw" zoom="group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <span className="self-start rounded-full bg-sky-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-sky-accent">
              Destacada · {featured.categoria}
            </span>
            <h3 className="mt-5 text-2xl font-extrabold leading-snug sm:text-3xl">{featured.title}</h3>
            {featured.medio && (
              <p className="mt-3 text-sm text-white/60">
                {featured.medio} · {featured.fecha}
              </p>
            )}
            <span className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-white px-6 py-3 font-semibold text-navy-900 transition group-hover:bg-brand-50">
              {leer(featured)} <Icon name="arrow" className={`h-4 w-4 transition group-hover:translate-x-0.5 ${featured.externa ? "-rotate-45" : ""}`} />
            </span>
          </div>
        </NotaLink>
      )}

      {/* Resto de notas */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((n, i) => (
          <NotaLink
            key={`${cat}-${n.href}`}
            nota={n}
            className="step-in group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy-900/5 transition hover:-translate-y-1 hover:shadow-xl"
            style={{ animationDelay: `${(i % PAGE) * 40}ms` }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <NotaImagen nota={n} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" zoom="group-hover:scale-110" />
              <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-cta backdrop-blur">{n.categoria}</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              {n.medio && (
                <p className="mb-2 text-xs font-semibold text-navy-900/50">
                  <span className="text-cta">{n.medio}</span> · {n.fecha}
                </p>
              )}
              <h3 className="line-clamp-4 font-bold leading-snug text-navy-900">{n.title}</h3>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-cta">
                {leer(n)} <Icon name="arrow" className={`h-4 w-4 transition group-hover:translate-x-0.5 ${n.externa ? "-rotate-45" : ""}`} />
              </span>
            </div>
          </NotaLink>
        ))}
      </div>

      {shown - 1 < rest.length && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShown((s) => s + PAGE)}
            className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-3.5 font-semibold text-white shadow-lg shadow-cta/25 transition hover:bg-cta-hover"
          >
            Ver más notas <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">{rest.length - (shown - 1)}</span>
          </button>
        </div>
      )}
    </div>
  );
}
