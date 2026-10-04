import Donate from "@/components/Donate";
import HeroCarousel from "@/components/HeroCarousel";
import Icon from "@/components/Icon";
import { CampaignBanner, ContactSection, ImpactSection, NetworkSection } from "@/components/sections";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { anuarioUrl } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Banners de campañas */}
      <section className="bg-gradient-to-b from-brand-50/60 to-white px-4 pt-6 sm:px-6 sm:pt-10">
        <HeroCarousel />
      </section>

      <div id="impacto">
        <ImpactSection />
      </div>

      {/* Qué hacemos: resumen con acceso a la página completa */}
      <section className="bg-brand-50/70 px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>Líneas de prevención activas</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">¿Qué hacemos en la Fundación?</h2>
              <p className="mt-3 text-lg text-navy-900/65">
                Articulamos la excelencia médica de Gedyt con el acceso equitativo a la salud digestiva en toda la Argentina.
              </p>
            </div>
            <div className="flex flex-none flex-wrap gap-3">
              <ButtonLink href="/que-hacemos" variant="light">
                Ver todo lo que hacemos <Icon name="arrow" className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={anuarioUrl} variant="light">
                Ver anuario 2026 <Icon name="arrow" className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
          <div className="mt-12">
            <CampaignBanner />
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 sm:px-6 sm:pt-28">
        <NetworkSection withLink />
      </section>

      <Donate />

      <ContactSection />
    </>
  );
}
