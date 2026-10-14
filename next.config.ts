import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 90 para notas de prensa, publicaciones y logos (más nitidez)
  images: { qualities: [75, 90] },
  // Páginas renombradas: los links viejos siguen funcionando
  async redirects() {
    return [
      { source: "/que-hacemos", destination: "/campana", permanent: true },
      { source: "/sumate", destination: "/institucional", permanent: true },
    ];
  },
};

export default nextConfig;
