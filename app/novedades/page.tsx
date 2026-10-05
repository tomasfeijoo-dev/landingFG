import type { Metadata } from "next";
import { NewsCards } from "@/components/sections";
import { ArrowLink, PageHeader } from "@/components/ui";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Novedades",
  description: "Notas de salud digestiva, publicaciones y novedades de Fundación Gedyt.",
};

export default function NovedadesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Información médica confiable"
        title="Notas de salud y novedades"
        text="Prevención, publicaciones y lo que pasa en la Fundación."
        image="/images/nota-infobae-horizontal.webp"
        imageAlt="Nota de Infobae con el Dr. Luis Caro, presidente de la Fundación Gedyt"
        imagePosition="right center"
      />
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <NewsCards />
          <div className="mt-10 text-center">
            <ArrowLink href={contact.social.linkedin}>Seguinos en LinkedIn</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
