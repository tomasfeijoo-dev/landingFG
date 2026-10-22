import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 90 para notas de prensa, publicaciones y logos (más nitidez)
  images: { qualities: [75, 90] },
  // Páginas renombradas: los links viejos siguen funcionando
  async redirects() {
    return [
      { source: "/que-hacemos", destination: "/campana", permanent: true },
      { source: "/sumate", destination: "/institucional", permanent: true },
      // Direcciones de la web anterior (WordPress) que circulan en folletos, redes y buscadores
      { source: "/comoestatucolon", destination: "/campana", permanent: true },
      { source: "/consejo", destination: "/consejo-directivo", permanent: true },
      { source: "/cumbre-interamericana-ccr", destination: "/cumbre/2024", permanent: true },
      { source: "/publicaciones", destination: "/novedades#publicaciones", permanent: true },
      { source: "/premio-mujeres", destination: "/premio-mujeres-destacadas", permanent: true },
    ];
  },
};

export default nextConfig;
