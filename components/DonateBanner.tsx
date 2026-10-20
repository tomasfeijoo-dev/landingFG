import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

// Versión resumida del bloque de donación para las páginas internas.
export default function DonateBanner({ violeta = false }: { violeta?: boolean }) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className={`reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-2xl ${violeta ? "shadow-[#280d55]/20" : "shadow-navy-900/20"}`}>
        <Image src="/images/abrazo.webp" alt="" fill sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover object-[70%_center] grayscale" />
        <div className={`absolute inset-0 bg-gradient-to-r ${violeta ? "from-[#280d55]/95 via-[#49297d]/85 to-[#693c98]/65" : "from-navy-950/95 via-navy-900/85 to-navy-800/65"}`} />
        <div className="relative flex flex-col items-start gap-8 px-6 py-12 text-white sm:px-12 md:flex-row md:items-center md:justify-between lg:px-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">Sumate a nuestra campaña de prevención y detección temprana</h2>
            <p className="mt-3 text-white/80">Tu aporte permite más diagnóstico tempranos y diagnosticar a tiempo salva vidas.</p>
          </div>
          <Link
            href="/#donar"
            scroll={false}
            className={`group flex flex-none items-center gap-2 whitespace-nowrap rounded-full px-8 py-4 font-semibold text-white shadow-lg shadow-black/20 transition ${violeta ? "bg-[#dd226c] hover:bg-[#c41d5e]" : "bg-cta hover:bg-cta-hover"}`}
          >
            <Icon name="heart" className="h-5 w-5" />
            Doná acá
            <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
