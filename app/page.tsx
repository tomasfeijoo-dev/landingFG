import Donate from "@/components/Donate";
import HeroCarousel from "@/components/HeroCarousel";
import Icon from "@/components/Icon";
import { ConsorcioSection, PrevenirCard, StatsAndHighlights } from "@/components/HomeSections";
import { CampaignBanner, ImpactSection } from "@/components/sections";
import { ButtonLink, Eyebrow } from "@/components/ui";

// Inicio: mismas secciones y textos que la web actual de la Fundación, con el nuevo diseño.
export default function Home() {
  return (
    <>
      <section>
        <HeroCarousel />
      </section>
      <PrevenirCard />

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
            <div className="flex-none">
              <ButtonLink href="/campana" variant="light">
                Conocé más <Icon name="arrow" className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
          <div className="mt-12">
            <CampaignBanner />
          </div>
        </div>
      </section>
      <StatsAndHighlights />
      <ConsorcioSection />
      <Donate />
    </>
  );
}
