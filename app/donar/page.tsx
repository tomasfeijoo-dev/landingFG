import type { Metadata } from "next";
import Donate from "@/components/Donate";
import { ImpactSection } from "@/components/sections";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Doná",
  description: "Con tu donación más personas pueden hacerse el test Q-FIT y prevenir el cáncer de colon.",
};

export default function DonarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Doná"
        title="Tu aporte salva vidas"
        text="Cada test Q-FIT permite detectar a tiempo el cáncer colorrectal, que se cura en 9 de cada 10 casos cuando se diagnostica temprano."
      />
      <Donate />
      <ImpactSection />
    </>
  );
}
