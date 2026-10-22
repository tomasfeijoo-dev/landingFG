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
      { source: "/campana-prevencion-cancer-de-colon", destination: "/campana/encuesta", permanent: true },
      { source: "/consejo", destination: "/consejo-directivo", permanent: true },
      { source: "/cumbre-interamericana-ccr", destination: "/cumbre/2024", permanent: true },
      { source: "/publicaciones", destination: "/novedades#publicaciones", permanent: true },
      { source: "/premio-mujeres", destination: "/premio-mujeres-destacadas", permanent: true },
      // Landings sueltas que estaban en el hosting fuera del WordPress
      { source: "/mujeres-gedyt-landing.html", destination: "/premio-mujeres-destacadas", permanent: true },
      { source: "/cumbrelatinoamericanadecancercolorrectal/:path*", destination: "/cumbre", permanent: true },
      { source: "/consejo/:path+", destination: "/consejo-directivo", permanent: true },
      { source: "/gala-noche-azul/:path+", destination: "/gala-noche-azul", permanent: true },
      // Páginas de la web anterior encontradas indexadas en Google
      { source: "/conocer-fundacion-gedyt", destination: "/institucional", permanent: true },
      { source: "/que-hace-fg", destination: "/programas", permanent: true },
      { source: "/involucrate", destination: "/contacto", permanent: true },
      { source: "/comunidad", destination: "/institucional", permanent: true },
      { source: "/donar-hoy", destination: "/donar", permanent: true },
      { source: "/hands-on", destination: "/programas/entrenamiento-para-endoscopistas", permanent: true },
      { source: "/entrenamiento-para-endocopistas", destination: "/programas/entrenamiento-para-endoscopistas", permanent: true },
      { source: "/fit-test-de-sangre-oculta-en-materia-fecal", destination: "/campana", permanent: true },
      { source: "/programa-de-prevencion-del-cancer-colorrectal-en-la-provincia-de-misiones", destination: "/programas/misiones", permanent: true },
      { source: "/noche-azul", destination: "/gala-noche-azul", permanent: true },
      { source: "/noche-azul-:anio", destination: "/gala-noche-azul", permanent: true },
      { source: "/gala-:anio(\\d{4})", destination: "/gala-noche-azul", permanent: true },
      { source: "/cancer-de-colon-el-90-de-los-casos-se-puede-prevenir-y-curar", destination: "/novedades/el-90-de-los-casos-se-puede-prevenir-y-curar", permanent: true },
      { source: "/2024/11/22/cancer-de-colon-el-90-de-los-casos-se-puede-prevenir-y-curar", destination: "/novedades/el-90-de-los-casos-se-puede-prevenir-y-curar", permanent: true },
      { source: "/2025/04/14/cancer-de-colon-la-baja-tasa-de-testeos-pone-en-riesgo-miles-de-vidas-fundacion-gedyt-lanza-una-campana-de-concientizacion-para-prevenirlo", destination: "/novedades/baja-tasa-de-testeos-campana-de-concientizacion", permanent: true },
      { source: "/cancer-de-colon-la-baja-tasa-de-testeos-pone-en-riesgo-miles-de-vidas-fundacion-gedyt-lanza-una-campana-de-concientizacion-para-prevenirlo", destination: "/novedades/baja-tasa-de-testeos-campana-de-concientizacion", permanent: true },
      { source: "/2025/04/14/cancer-de-colon-se-diagnostican-en-promedio-mas-de-40-casos-por-dia-en-la-argentina-2", destination: "/novedades/cancer-de-colon-mas-de-40-casos-por-dia", permanent: true },
      { source: "/2022/10/28/fundacion-gedyt-realizara-su-cena-de-gala-noche-azul-una-noche-que-busca-poner-en-agenda-la-prevencion-del-cancer-de-colon-y-salvar-vidas", destination: "/novedades/cena-de-gala-noche-azul-2022", permanent: true },
      // Cualquier otra nota con fecha en la dirección (/2024/05/10/...) y archivos viejos del WordPress
      { source: "/:anio(\\d{4})/:mes(\\d{2})/:dia(\\d{2})/:slug*", destination: "/novedades#prensa", permanent: true },
      { source: "/old/:path*", destination: "/novedades#anuarios", permanent: true },
      { source: "/wp-content/:path*", destination: "/novedades#anuarios", permanent: true },
    ];
  },
};

export default nextConfig;
