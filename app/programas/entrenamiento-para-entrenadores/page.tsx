import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Entrenamiento para entrenadores · Programas",
  description:
    "Fundación Gedyt brinda un programa y apoyo para que los endoscopistas puedan desarrollarse como entrenadores en endoscopia, siguiendo las guías de calidad “Train the Trainers”.",
};

// Textos tal cual figuran en la página del programa en fundaciongedyt.org.ar
export default function EntrenamientoEntrenadoresPage() {
  return (
    <>
      {/* Encabezado */}
      <section className="px-4 pt-6 sm:px-6 sm:pt-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-16">
          <svg className="pointer-events-none absolute -top-6 -right-10 hidden h-56 w-[28rem] md:block" viewBox="0 0 300 160" aria-hidden>
            <path d="M10 -10 C 60 90, 170 110, 210 60 C 240 20, 200 -5, 180 25 C 155 65, 230 120, 320 100" stroke="#3fa5d4" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.6" />
          </svg>
          <Link
            href="/programas"
            className="group relative inline-flex items-center gap-3 rounded-full bg-white/10 py-2 pr-6 pl-2 text-base font-semibold text-white ring-1 ring-white/20 transition hover:bg-white hover:text-navy-900"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition group-hover:-translate-x-0.5 group-hover:bg-cta group-hover:text-white">
              <Icon name="arrow" className="h-5 w-5 rotate-180" />
            </span>
            Volver a Programas
          </Link>
          <div className="relative mt-6">
            <Eyebrow chip light>
              Entrenamiento para profesionales
            </Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">Entrenamiento para entrenadores</h1>
          </div>
        </div>
      </section>

      {/* La propuesta */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal relative mx-auto w-full max-w-md pb-8 sm:pr-8">
            <div className="relative aspect-[2/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
              <Image src="/images/entrenadores.webp" alt="Profesional de la salud examinando a una paciente" fill sizes="(min-width: 1024px) 28rem, 90vw" className="object-cover transition duration-1000 hover:scale-105" />
            </div>
            <div className="absolute right-0 bottom-0 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-navy-900/5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-cta">
                <Icon name="graduation" className="h-5 w-5" />
              </span>
              <span className="text-sm leading-tight">
                <strong className="block text-navy-900">Train the Trainers</strong>
                <span className="text-navy-900/60">(TTT)</span>
              </span>
            </div>
          </div>
          <div className="reveal">
            <Eyebrow chip>Programa</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">La propuesta</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-900/70">
              <p>
                Cumpliendo con las guías de calidad de formación en habilidades terapéuticas, todos los entrenadores deben cumplir con los indicadores clave de
                desempeño en su desarrollo profesional diario. Asimismo que completen un curso de formación de formadores o{" "}
                <strong className="text-navy-900">“Train the Trainers (TTT)”</strong> y reciban retroalimentación periódica y sean apoyados en su función
                por los entrenadores existentes. Este estándar respalda el principio de que todos los entrenadores deben mantener y desarrollar sus
                habilidades docentes.
              </p>
              <p>
                FG brinda un programa y apoyo para que los endoscopistas puedan desarrollarse como entrenadores en endoscopia, reconociendo su papel vital en
                la capacitación de futuras generaciones en endoscopia digestiva de alta calidad.{" "}
                <strong className="text-navy-900">
                  Existe evidencia de que la enseñanza mejora no solo la habilidad endoscópica de quien aprende, sino también la del entrenador.
                </strong>
              </p>
            </div>
            <p className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-brand-50 px-5 py-3 font-bold text-navy-900 ring-1 ring-brand-100">
              <Icon name="calendar" className="h-5 w-5 text-cta" />
              Próximas fechas a confirmar
            </p>
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
