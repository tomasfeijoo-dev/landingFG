import Donate from "@/components/Donate";
import HeroCarousel from "@/components/HeroCarousel";
import { ConsorcioSection, PrevenirCard, QueHacemosHome, StatsAndHighlights } from "@/components/HomeSections";

// Inicio: mismas secciones y textos que la web actual de la Fundación, con el nuevo diseño.
export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50/60 to-white px-4 pt-6 sm:px-6 sm:pt-10">
        <HeroCarousel />
      </section>
      <PrevenirCard />
      <QueHacemosHome />
      <StatsAndHighlights />
      <ConsorcioSection />
      <Donate />
    </>
  );
}
