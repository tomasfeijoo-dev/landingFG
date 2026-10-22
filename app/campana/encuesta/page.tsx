import type { Metadata } from "next";
import Link from "next/link";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import { PageHeader } from "@/components/ui";
import { encuestaFormUrl } from "@/lib/campana";

export const metadata: Metadata = {
  title: "Encuesta anónima sobre cáncer de colon",
  description:
    "Respondé esta breve encuesta anónima y enterate de cómo podés detectar tempranamente el cáncer de colon. Campaña de prevención de Fundación Gedyt.",
};

// Textos tal cual figuran en fundaciongedyt.org.ar/campana-prevencion-cancer-de-colon
export default function EncuestaPage() {
  return (
    <>
      <PageHeader eyebrow="Campaña ¿Cómo está tu colon?" title="Campaña prevención cáncer de colon" kenBurns image="/banners/campana-boca.webp" imagePosition="center 35%" />

      {/* Introducción */}
      <section className="px-4 pt-10 sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-3xl">
          <Link href="/campana" className="group inline-flex items-center gap-2 text-sm font-semibold text-cta hover:underline">
            <Icon name="arrow" className="h-4 w-4 rotate-180 transition group-hover:-translate-x-0.5" />
            Volver a la campaña
          </Link>
        </div>
        <div className="reveal mx-auto mt-6 max-w-3xl rounded-[2rem] bg-gradient-to-br from-brand-50 via-white to-brand-50 px-6 py-10 text-center ring-1 ring-brand-100 sm:px-12 sm:py-12">
          <h2 className="text-2xl leading-snug font-extrabold tracking-tight text-navy-900 sm:text-3xl">
            ¿Sabías que los diagnósticos de cáncer de colon en personas menores de 55 años se duplicaron?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-900/70">
            El cáncer de colon es una de las enfermedades que afecta de manera silenciosa a más de 15.000 argentinos por año, de los cuales cerca de la mitad
            (más de 7.000) mueren.
          </p>
          <p className="mt-4 text-lg font-semibold text-cta">Respondé esta breve encuesta anónima y enterate de cómo podés detectar tempranamente esta enfermedad:</p>
        </div>
      </section>

      {/* Encuesta (Google Forms embebido) */}
      <section className="px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="reveal text-center text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">Encuesta anónima sobre cáncer de colon</h2>
          <div className="reveal mt-8 overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-navy-900/5">
            <iframe
              src={`${encuestaFormUrl}?embedded=true`}
              title="Encuesta anónima sobre cáncer de colon"
              loading="lazy"
              className="block h-[5200px] w-full sm:h-[4300px]"
            >
              Cargando…
            </iframe>
          </div>
          <p className="mt-5 text-center text-sm text-navy-900/55">
            ¿No se ve la encuesta?{" "}
            <a href={encuestaFormUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-cta hover:underline">
              Abrila en una pestaña nueva
            </a>
          </p>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
