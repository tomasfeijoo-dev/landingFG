import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import { ProgramCards } from "@/components/sections";
import { ButtonLink, Eyebrow, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Programas",
  description: "Test FIT, Prevenir es cuidar y formación profesional: los programas de prevención de Fundación Gedyt.",
};

export default function ProgramasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programas"
        title="Prevención, salud en el trabajo y formación"
        text="De la detección temprana con el test FIT a la capacitación de profesionales: así llevamos la prevención del cáncer colorrectal a más personas."
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <ProgramCards />
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-navy-900/5 ring-1 ring-navy-900/5 lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[26rem]">
            <Image
              src="/banners/mujeres-premio.webp"
              alt="Entrega del Premio a Mujeres Destacadas en Gastroenterología"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_25%]"
            />
          </div>
          <div className="px-6 pb-10 sm:px-10 lg:py-12 lg:pr-12 lg:pl-0">
            <Eyebrow chip>Reconocimiento</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-900">
              Premio a Mujeres Destacadas en Gastroenterología & Endoscopía Digestiva
            </h2>
            <p className="mt-4 text-lg text-navy-900/70">
              Visibilizamos y reconocemos el liderazgo de las mujeres que transforman la especialidad, con un espacio para impulsar su
              desarrollo profesional.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contacto" interest="profesional">
                Consultanos <Icon name="arrow" className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
