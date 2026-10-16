import Image from "next/image";
import Icon from "@/components/Icon";
import InterestLink from "@/components/InterestLink";

export function Eyebrow({ children, chip = false, light = false }: { children: React.ReactNode; chip?: boolean; light?: boolean }) {
  if (chip) {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
          light ? "bg-white/10 text-sky-accent" : "bg-brand-100/70 text-cta ring-1 ring-brand-100"
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-sky-accent" : "bg-cta"}`} />
        {children}
      </span>
    );
  }
  return <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-sky-accent" : "text-cta"}`}>{children}</p>;
}

export function ArrowLink({
  href,
  interest,
  children,
  className = "",
  light = false,
}: {
  href: string;
  interest?: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <InterestLink
      href={href}
      interest={interest}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold ${light ? "text-white" : "text-cta"} ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </InterestLink>
  );
}

export function ButtonLink({
  href,
  interest,
  children,
  variant = "dark",
}: {
  href: string;
  interest?: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "cta";
}) {
  const styles = {
    dark: "bg-navy-900 text-white hover:bg-navy-950",
    light: "bg-white text-navy-900 ring-1 ring-navy-900/10 hover:ring-cta",
    cta: "bg-cta text-white hover:bg-cta-hover",
  }[variant];
  return (
    <InterestLink
      href={href}
      interest={interest}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 font-semibold transition ${styles}`}
    >
      {children}
    </InterestLink>
  );
}

// Encabezado de las páginas internas. Puede llevar una foto (a la derecha, fundida
// hacia el texto) o un fondo animado (por ejemplo el mapa), y contenido extra abajo.
// Título que aparece palabra por palabra (clase .words en globals.css).
export function Words({ text, delay = 0 }: { text: string; delay?: number }) {
  const parts = text.split(/(\s+)/);
  let i = 0;
  return (
    <span className="words" style={{ ["--d" as string]: `${delay}ms` }}>
      {parts.map((p, k) =>
        /^\s+$/.test(p) ? (
          p
        ) : (
          <span key={k} className="word" style={{ ["--i" as string]: i++ }}>
            {p}
          </span>
        ),
      )}
    </span>
  );
}

export function PageHeader({
  eyebrow,
  title,
  text,
  image,
  imageAlt = "",
  imagePosition = "center",
  background,
  fullWidth = false,
  kenBurns = false,
  children,
}: {
  eyebrow: string;
  title: string;
  text?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  background?: React.ReactNode;
  /** Banner a todo el ancho de la web, sin bordes redondeados */
  fullWidth?: boolean;
  /** Foto de fondo con acercamiento y movimiento lento */
  kenBurns?: boolean;
  children?: React.ReactNode;
}) {
  const plain = !image && !background;
  return (
    <section className={fullWidth ? "" : "px-4 pt-6 sm:px-6 sm:pt-10"}>
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#f1f4f7] via-white to-brand-50 ${
          fullWidth ? "" : "mx-auto max-w-7xl rounded-[2rem] ring-1 ring-brand-100"
        }`}
      >
        <div className="relative md:min-h-[24rem]">
          {background}
          {image && (
            <>
              <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1280px) 1280px, 100vw" className={`object-cover ${kenBurns ? "kb-image" : ""}`} style={{ objectPosition: imagePosition }} />
              <div className={`banner-tint absolute inset-0 ${kenBurns ? "banner-shine" : ""}`} />
            </>
          )}
          {plain && (
            <>
              <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 1200 320" preserveAspectRatio="none" aria-hidden>
                <path
                  d="M760 -20 C 820 90, 960 120, 1020 60 C 1070 10, 1020 -20, 990 20 C 950 70, 1040 140, 1220 120"
                  stroke="#3fa5d4"
                  strokeWidth="18"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
              <div className="pointer-events-none absolute -right-10 -bottom-14 hidden h-36 w-36 rounded-full border-[22px] border-navy-800/80 md:block" aria-hidden />
            </>
          )}
          <div className={`relative px-6 sm:px-12 lg:px-16 ${fullWidth ? "mx-auto max-w-7xl" : ""} ${image ? "flex min-h-[22rem] items-end pt-24 pb-12 sm:min-h-[26rem] md:items-center md:py-20" : background ? "py-24 sm:py-28 md:max-w-[52%]" : "py-14 sm:py-20"}`}>
            <div className="max-w-2xl">
              <div className="fade-up">
                <Eyebrow chip light={!!image}>{eyebrow}</Eyebrow>
              </div>
              <h1 className={`mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl ${image ? "text-white drop-shadow-sm" : "text-navy-900"}`}>
                <Words text={title} delay={150} />
              </h1>
              {text && (
                <p className={`fade-up mt-4 text-lg ${image ? "max-w-xl text-white/85" : "text-navy-900/70"}`} style={{ ["--d" as string]: "550ms" }}>
                  {text}
                </p>
              )}
            </div>
          </div>
        </div>
        {children && <div className={`relative px-6 pb-12 sm:px-12 sm:pb-14 lg:px-16 ${image ? "pt-10" : ""}`}>{children}</div>}
      </div>
    </section>
  );
}
