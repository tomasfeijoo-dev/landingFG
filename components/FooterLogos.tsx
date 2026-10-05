"use client";

import { usePathname } from "next/navigation";
import LogoMarquee from "@/components/LogoMarquee";
import { institutions, sponsors } from "@/lib/logos";

// Logos en el footer de las páginas internas (el inicio ya tiene su sección "Consorcio").
export default function FooterLogos() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <div className="bg-white px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-center text-lg font-bold text-navy-900">Consorcio por la prevención 2026</p>
        <LogoMarquee
          size="sm"
          groups={[
            { title: "Sponsors", logos: sponsors },
            { title: "Instituciones de salud", logos: institutions },
          ]}
        />
      </div>
    </div>
  );
}
