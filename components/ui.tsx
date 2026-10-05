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
export function PageHeader({
  eyebrow,
  title,
  text,
  image,
  imageAlt = "",
  imagePosition = "center",
  background,
  children,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  background?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const plain = !image && !background;
  return (
    <section className="px-4 pt-6 sm:px-6 sm:pt-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f1f4f7] via-white to-brand-50 ring-1 ring-brand-100">
        <div className="relative md:min-h-[24rem]">
          {background}
          {image && (
            <>
              <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover" style={{ objectPosition: imagePosition }} />
              <div className="banner-tint absolute inset-0" />
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
          <div className={`relative px-6 sm:px-12 lg:px-16 ${image ? "flex min-h-[22rem] items-end pt-24 pb-12 sm:min-h-[26rem] md:items-center md:py-20" : background ? "py-24 sm:py-28 md:max-w-[52%]" : "py-14 sm:py-20"}`}>
            <div className="max-w-2xl">
              <Eyebrow chip light={!!image}>{eyebrow}</Eyebrow>
              <h1 className={`mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl ${image ? "text-white drop-shadow-sm" : "text-navy-900"}`}>{title}</h1>
              {text && <p className={`mt-4 text-lg ${image ? "max-w-xl text-white/85" : "text-navy-900/70"}`}>{text}</p>}
            </div>
          </div>
        </div>
        {children && <div className={`relative px-6 pb-12 sm:px-12 sm:pb-14 lg:px-16 ${image ? "pt-10" : ""}`}>{children}</div>}
      </div>
    </section>
  );
}
