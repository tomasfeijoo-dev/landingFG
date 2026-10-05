import type { Metadata } from "next";
import ArgentinaMap from "@/components/ArgentinaMap";
import Donate from "@/components/Donate";
import { CampaignBanner, ImpactSection, LinesCards } from "@/components/sections";
import Icon from "@/components/Icon";
import { ButtonLink, Eyebrow, PageHeader } from "@/components/ui";
import { anuarioUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Campaña",
  description: "Campaña de prevención y detección temprana del cáncer colorrectal: programas provinciales y alianzas con empresas.",
};

export default function CampanaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Campaña"
        title="Líneas de prevención activas"
        text="Articulamos la excelencia médica de Gedyt con el acceso equitativo a la salud digestiva en toda la Argentina."
        background={<ArgentinaMap focusX={0.7} fade="bg-gradient-to-r from-white/95 via-white/75 to-white/0 max-md:to-white/50" />}
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <CampaignBanner />
          <div className="mt-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Cómo lo hacemos</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Provincias, empresas y comunidad</h2>
            </div>
            <ButtonLink href={anuarioUrl} variant="light">
              Ver anuario 2026 <Icon name="arrow" className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="mt-10">
            <LinesCards />
          </div>
        </div>
      </section>

      <div className="bg-brand-50/60">
        <ImpactSection />
      </div>

      <Donate />
    </>
  );
}
