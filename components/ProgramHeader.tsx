import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Eyebrow } from "@/components/ui";

// Encabezado de las páginas internas de cada programa, con el botón para volver a Programas.
export default function ProgramHeader({
  eyebrow,
  title,
  image,
  imagePosition = "center",
  accent,
}: {
  eyebrow: string;
  title: string;
  /** Foto de fondo opcional: se muestra con leve desenfoque y filtro azul, como los banners de inicio */
  image?: string;
  imagePosition?: string;
  /** Franja de color propia del programa (por ej. violeta y rosa de Mujeres en Salud) */
  accent?: string;
}) {
  return (
    <section className="px-4 pt-6 sm:px-6 sm:pt-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-16">
        {image && (
          <>
            <Image src={image} alt="" fill priority sizes="(min-width: 1280px) 1280px, 100vw" className="scale-105 object-cover blur-[2px]" style={{ objectPosition: imagePosition }} />
            <div className="absolute inset-0 bg-[#0a2a6b]/55 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-900/55 to-navy-800/30" />
          </>
        )}
        <Link
          href="/programas#nuestros-programas"
          className="group relative inline-flex items-center gap-3 rounded-full bg-white/10 py-2 pr-6 pl-2 text-base font-semibold text-white ring-1 ring-white/20 transition hover:bg-white hover:text-navy-900"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition group-hover:-translate-x-0.5 group-hover:bg-cta group-hover:text-white">
            <Icon name="arrow" className="h-5 w-5 rotate-180" />
          </span>
          Volver a Programas
        </Link>
        {accent && <div className="absolute inset-x-0 bottom-0 h-1.5" style={{ background: accent }} aria-hidden />}
        <div className="relative mt-6">
          <Eyebrow chip light>
            {eyebrow}
          </Eyebrow>
          <h1 className="mt-5 text-[2rem] leading-tight font-extrabold tracking-tight [overflow-wrap:anywhere] min-[380px]:text-4xl sm:text-6xl">{title}</h1>
        </div>
      </div>
    </section>
  );
}
