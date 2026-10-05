import type { Metadata } from "next";
import Donate from "@/components/Donate";
import Icon from "@/components/Icon";
import { ButtonLink, PageHeader } from "@/components/ui";
import { homeLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cumbre CCR360°",
  description: "Cumbre Interamericana de CCR360° de Fundación Gedyt.",
};

// TODO: completar con el contenido de la Cumbre (fechas, agenda, oradores) cuando la Fundación lo envíe.
export default function CumbrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Cumbre"
        title="Cumbre Interamericana de CCR360°"
        image="/images/hands-on.webp"
        imageAlt="Profesionales de la salud en una capacitación de la Fundación"
        imagePosition="center 40%"
      >
        <ButtonLink href={homeLinks.cumbre} variant="cta">
          Reviví la edición 2024 <Icon name="arrow" className="h-4 w-4" />
        </ButtonLink>
      </PageHeader>
      <Donate />
    </>
  );
}
