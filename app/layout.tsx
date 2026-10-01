import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Prevención del cáncer colorrectal`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    locale: "es_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a2350",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
