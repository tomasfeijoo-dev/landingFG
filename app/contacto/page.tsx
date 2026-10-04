import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escribinos para hacerte el test, donar, sumar tu empresa o capacitarte.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader eyebrow="Contacto" title="Estamos para ayudarte" text="Respondemos de lunes a viernes de 9 a 16 h." />
      <ContactSection />
    </>
  );
}
