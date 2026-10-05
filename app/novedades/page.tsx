import type { Metadata } from "next";
import DonateBanner from "@/components/DonateBanner";
import Icon from "@/components/Icon";
import PressGrid from "@/components/PressGrid";
import { PageHeader } from "@/components/ui";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Novedades",
  description: "Prensa y novedades de Fundación Gedyt: notas sobre prevención del cáncer de colon, campañas y la gala Noche Azul.",
};

export default function NovedadesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Novedades"
        title="Prensa"
        text="Lo que dicen los medios sobre nuestro trabajo."
        image="/images/nota-infobae-horizontal.webp"
        imageAlt="Nota de Infobae con el Dr. Luis Caro, presidente de la Fundación Gedyt"
        imagePosition="right center"
      />
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <PressGrid />
          <p className="mt-12 text-center text-sm text-navy-900/60">
            ¿Sos periodista? Escribinos a{" "}
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-1 font-semibold text-cta hover:underline">
              <Icon name="mail" className="h-4 w-4" />
              {contact.email}
            </a>
          </p>
        </div>
      </section>
      <DonateBanner />
    </>
  );
}
