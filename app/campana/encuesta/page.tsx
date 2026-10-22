import type { Metadata } from "next";
import Link from "next/link";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import { CampaignEmoji, CampaignRibbon } from "@/components/sections";
import { Words } from "@/components/ui";
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
      {/* Banner: mismo estilo que el de la campaña, con el lazo y Caki */}
      <section className="px-4 pt-6 sm:px-6 sm:pt-10">
        <div className="is-visible relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0f4f73] via-[#165b84] to-[#1b6189] text-white shadow-2xl shadow-navy-900/20 md:min-h-[28rem]">
          <CampaignRibbon />
          <div className="banner-tint absolute inset-0 opacity-70" />
          <CampaignEmoji position="right-[6%] bottom-6 w-28 sm:w-36 md:right-[3%] md:bottom-[8%] md:w-36 lg:w-44" />
          <div className="relative px-6 pt-10 pb-48 sm:px-12 sm:pb-56 md:w-[84%] md:py-16 lg:w-[80%] lg:px-16">
            <Link
              href="/campana"
              className="group inline-flex items-center gap-3 rounded-full bg-white/10 py-1.5 pr-5 pl-1.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white hover:text-navy-900"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition group-hover:-translate-x-0.5 group-hover:bg-cta group-hover:text-white">
                <Icon name="arrow" className="h-4 w-4 rotate-180" />
              </span>
              Volver a la campaña
            </Link>
            <h1 className="mt-8 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-[2.6rem] xl:text-[2.7rem] 2xl:text-5xl">
              <Words text="¿Sabías que los diagnósticos de cáncer de colon en personas menores de 55 años se duplicaron?" delay={200} />
            </h1>
            <p className="fade-up mt-5 text-lg text-white/85" style={{ ["--d" as string]: "900ms" }}>
              El cáncer de colon es una de las enfermedades que afecta de manera silenciosa a más de 15.000 argentinos por año, de los cuales cerca de la mitad
              (más de 7.000) mueren.
            </p>
            <p className="fade-up mt-4 text-lg font-bold text-white" style={{ ["--d" as string]: "1050ms" }}>
              Respondé esta breve encuesta anónima y enterate de cómo podés detectar tempranamente esta enfermedad:
            </p>
          </div>
        </div>
      </section>

      {/* Encuesta (Google Forms embebido) a todo el ancho, sin marco: el alto del iframe alcanza para el formulario completo
          así no hay un segundo scroll adentro */}
      <section className="mt-12 bg-white sm:mt-16">
        <iframe
          src={`${encuestaFormUrl}?embedded=true`}
          title="Encuesta anónima sobre cáncer de colon"
          loading="lazy"
          className="block h-[5000px] w-full border-0 sm:h-[4000px] lg:h-[3700px]"
        >
          Cargando…
        </iframe>
        <p className="px-4 pb-4 text-center text-sm text-navy-900/55">
          ¿No se ve la encuesta?{" "}
          <a href={encuestaFormUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-cta hover:underline">
            Abrila en una pestaña nueva
          </a>
        </p>
      </section>

      <DonateBanner />
    </>
  );
}
