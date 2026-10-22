import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
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
      {/* Banner a todo el ancho, como el bloque "¿Cómo está tu Colon?" de la campaña, con Caki pensando */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-accent via-cta to-navy-800 px-6 pt-10 pb-4 text-white sm:px-12 lg:pt-14">
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full border-[40px] border-white/10" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.7fr_1fr]">
          <div className="text-center md:pb-16 md:pl-10 md:text-left lg:pl-20">
            <Link
              href="/campana"
              className="group inline-flex items-center gap-3 rounded-full bg-white/10 py-1.5 pr-5 pl-1.5 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-white hover:text-navy-900"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition group-hover:-translate-x-0.5 group-hover:bg-cta group-hover:text-white">
                <Icon name="arrow" className="h-4 w-4 rotate-180" />
              </span>
              Volver a la campaña
            </Link>
            <h1 className="mt-8 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-[2.6rem]">
              <Words text="¿Sabías que los diagnósticos de cáncer de colon en personas menores de 55 años se duplicaron?" delay={200} />
            </h1>
            <p className="fade-up mt-5 text-lg text-white/90 sm:text-xl" style={{ ["--d" as string]: "900ms" }}>
              El cáncer de colon es una de las enfermedades que afecta de manera silenciosa a más de 15.000 argentinos por año, de los cuales cerca de la mitad
              (más de 7.000) mueren.
            </p>
          </div>
          <div className="relative mx-auto w-40 pb-6 sm:w-52 md:mx-0 md:w-full md:max-w-[17rem] md:justify-self-end md:self-end lg:mr-8">
            <div className="absolute bottom-3 left-1/2 h-4 w-3/4 -translate-x-1/2" aria-hidden>
              <div className="caki-think-shadow h-full w-full rounded-[50%] bg-navy-950/40 blur-[5px]" />
            </div>
            <Image src="/images/caki-pensando-hd.webp" alt="Caki, pensativo" width={1070} height={1120} priority sizes="(min-width: 768px) 272px, 208px" className="caki-think relative h-auto w-full drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Invitación, afuera del banner y arriba de la encuesta */}
      <p className="reveal mx-auto mt-12 max-w-3xl px-6 text-center text-xl leading-snug font-bold text-navy-900 sm:mt-16 sm:text-2xl">
        Respondé esta breve encuesta anónima y enterate de cómo podés detectar tempranamente esta enfermedad:
      </p>

      {/* Encuesta (Google Forms embebido) a todo el ancho, sin marco: el alto del iframe alcanza para el formulario completo
          así no hay un segundo scroll adentro */}
      <section className="mt-8 bg-white">
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
