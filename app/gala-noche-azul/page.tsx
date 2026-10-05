import type { Metadata } from "next";
import Donate from "@/components/Donate";
import Icon from "@/components/Icon";
import { NocheAzulRecap } from "@/components/sections";
import { ButtonLink, PageHeader } from "@/components/ui";
import { homeLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gala Noche Azul",
  description: "La gala solidaria de Fundación Gedyt para impulsar la prevención y la detección temprana del cáncer de colon.",
};

export default function GalaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gala Noche Azul"
        title="Gala 2026"
        text="Una noche para impulsar la prevención y la detección temprana del cáncer de colon."
        image="/images/equipo-gala.webp"
        imageAlt="Equipo de la Fundación Gedyt en la gala Noche Azul"
        imagePosition="center 35%"
      />
      <NocheAzulRecap />
      <section className="px-4 sm:px-6">
        <div className="reveal mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[2rem] bg-brand-50/70 p-8 ring-1 ring-brand-100 sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-cta">Gala Noche Azul 2025</p>
            <p className="mt-1 text-2xl font-extrabold text-navy-900">Reviví la Gala 2025</p>
          </div>
          <ButtonLink href={homeLinks.gala2025} variant="cta">
            Reviví la Gala 2025 <Icon name="arrow" className="h-4 w-4" />
          </ButtonLink>
        </div>
      </section>
      <Donate />
    </>
  );
}
