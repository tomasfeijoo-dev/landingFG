import type { Metadata } from "next";
import Donate from "@/components/Donate";
import { ImpactSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Doná",
  description: "Con tu donación más personas pueden hacerse el test Q-FIT y prevenir el cáncer de colon.",
};

export default function DonarPage() {
  return (
    <>
      <Donate first />
      <ImpactSection />
    </>
  );
}
