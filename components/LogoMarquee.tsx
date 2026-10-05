import Image from "next/image";
import type { Logo } from "@/lib/logos";

// Fila de logos que se desplaza sola, lento y en loop. Se pausa al pasar el mouse.
function Row({ logos: base, reverse = false, size }: { logos: Logo[]; reverse?: boolean; size: "md" | "sm" }) {
  // Listas cortas se repiten para que la fila siempre cubra todo el ancho
  const logos = base.length >= 10 ? base : Array.from({ length: Math.ceil(10 / base.length) }, () => base).flat();
  const duration = `${logos.length * (size === "md" ? 5 : 4)}s`;
  const tile = size === "md" ? "h-20 w-44 px-5" : "h-14 w-32 px-3";
  return (
    <div className="marquee group relative overflow-hidden">
      <ul
        className={`marquee-track flex w-max gap-4 ${reverse ? "marquee-reverse" : ""}`}
        style={{ animationDuration: duration }}
      >
        {/* La lista va duplicada para que el loop sea continuo */}
        {[...logos, ...logos].map((l, i) => (
          <li
            key={`${l.src}-${i}`}
            aria-hidden={i >= base.length}
            className={`flex flex-none items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-navy-900/5 ${tile}`}
          >
            <Image src={l.src} alt={i < base.length ? l.name : ""} width={l.width} height={l.height} loading="eager" className="max-h-[70%] w-auto max-w-full object-contain" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LogoMarquee({
  groups,
  size = "md",
}: {
  groups: { title: string; logos: Logo[] }[];
  size?: "md" | "sm";
}) {
  return (
    <div className="space-y-6">
      {groups.map((g, i) => (
        <div key={g.title}>
          <p className={`mb-3 font-semibold uppercase tracking-[0.16em] text-navy-900/50 ${size === "md" ? "text-xs" : "text-[11px]"}`}>{g.title}</p>
          <Row logos={g.logos} reverse={i % 2 === 1} size={size} />
        </div>
      ))}
    </div>
  );
}
