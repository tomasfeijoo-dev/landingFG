import type { Metadata } from "next";
import { CampaignBanner, ImpactSection, LinesCards } from "@/components/sections";
import { Eyebrow, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Qué hacemos",
  description: "Campañas, programas provinciales, alianzas con empresas y la gala Noche Azul de Fundación Gedyt.",
};

export default function QueHacemosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Qué hacemos"
        title="Líneas de prevención activas"
        text="Articulamos la excelencia médica de Gedyt con el acceso equitativo a la salud digestiva en toda la Argentina."
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <CampaignBanner />
          <div className="mt-16">
            <Eyebrow>Cómo lo hacemos</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Provincias, empresas y comunidad</h2>
          </div>
          <div className="mt-10">
            <LinesCards />
          </div>
        </div>
      </section>

      <div className="bg-brand-50/60">
        <ImpactSection />
      </div>
    </>
  );
}
