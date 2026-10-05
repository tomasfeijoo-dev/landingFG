import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Páginas renombradas: los links viejos siguen funcionando
  async redirects() {
    return [
      { source: "/que-hacemos", destination: "/campana", permanent: true },
      { source: "/sumate", destination: "/institucional", permanent: true },
    ];
  },
};

export default nextConfig;
