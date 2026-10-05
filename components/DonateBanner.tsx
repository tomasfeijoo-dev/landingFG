import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

// Versión resumida del bloque de donación para las páginas internas.
export default function DonateBanner() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
        <Image src="/images/abrazo.webp" alt="" fill sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-navy-900/40" />
        <div className="relative flex flex-col items-start gap-8 px-6 py-12 text-white sm:px-12 md:flex-row md:items-center md:justify-between lg:px-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">Sumate a nuestra campaña de prevención y detección temprana</h2>
            <p className="mt-3 text-white/80">Tu aporte permite más diagnóstico tempranos y diagnosticar a tiempo salva vidas.</p>
          </div>
          <Link
            href="/donar"
            className="group relative flex h-36 w-36 flex-none flex-col items-center justify-center gap-1 rounded-full bg-cta text-center font-extrabold uppercase tracking-wide text-white shadow-2xl shadow-black/30 ring-4 ring-white/20 transition hover:scale-105 hover:bg-cta-hover"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-cta/30 [animation-duration:2.4s]" aria-hidden />
            <Icon name="heart" className="relative h-6 w-6" />
            <span className="relative">Doná acá</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
