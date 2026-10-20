import type { Metadata } from "next";
import Image from "next/image";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import ProgramHeader from "@/components/ProgramHeader";
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
      <ProgramHeader eyebrow="Entrenamiento para profesionales" title="Entrenamiento para entrenadores" image="/banners/prog-entrenadores-v2.webp" imagePosition="center 45%" />

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
