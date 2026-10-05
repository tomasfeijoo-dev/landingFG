import type { Metadata } from "next";
import Image from "next/image";
import Donate from "@/components/Donate";
import Icon from "@/components/Icon";
import LogoMarquee from "@/components/LogoMarquee";
import { NetworkSection } from "@/components/sections";
import { ButtonLink, Eyebrow, PageHeader } from "@/components/ui";
import { institutions, sponsors } from "@/lib/logos";

export const metadata: Metadata = {
  title: "Institucional",
  description: "Quiénes somos, Consejo Directivo y red de prevención de Fundación Gedyt.",
};

export default function InstitucionalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institucional"
        title="¿Qué hacemos en la Fundación?"
        text="En Fundación Gedyt contribuimos a mejorar la eficiencia y el acceso a la atención de las enfermedades digestivas en Argentina, con acciones basadas en evidencia y articulación público-privada."
        image="/images/equipo-gala.webp"
        imageAlt="Equipo de la Fundación Gedyt en la gala Noche Azul"
        imagePosition="center 35%"
      >
        <LogoMarquee
          groups={[
            { title: "Sponsors", logos: sponsors },
            { title: "Instituciones de salud", logos: institutions },
          ]}
        />
      </PageHeader>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] shadow-2xl shadow-navy-900/20">
          <Image
            src="/banners/consejo.webp"
            alt="Reunión de trabajo alrededor de una mesa"
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/30" />
          <div className="relative max-w-2xl px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
            <Eyebrow chip light>Gobernanza y liderazgo</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">Integrá el Consejo Directivo de Fundación Gedyt</h2>
            <p className="mt-4 text-lg text-white/80">
              Convocamos a personas con trayectoria, redes y compromiso genuino para integrar el órgano de gobierno que conduce la
              estrategia de la Fundación y el futuro de la prevención del cáncer colorrectal.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contacto" interest="consejo" variant="cta">
                Iniciar mi postulación <Icon name="arrow" className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <NetworkSection />
      </section>

      <Donate />
    </>
  );
}
