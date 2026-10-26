"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { Suspense, useEffect, useRef } from "react";
import { track } from "@/lib/track";

// Etiquetas de medición. Se activan solo si el ID está cargado en Vercel (Environment Variables):
// NEXT_PUBLIC_GTM_ID (GTM-XXXX), NEXT_PUBLIC_GA_ID (G-XXXX) y NEXT_PUBLIC_META_PIXEL_ID (número del Píxel).
// Si usan Google Tag Manager, conviene cargar GA4 y el Píxel desde ahí y dejar solo NEXT_PUBLIC_GTM_ID.
const GTM = process.env.NEXT_PUBLIC_GTM_ID?.trim();
const GA = process.env.NEXT_PUBLIC_GA_ID?.trim();
const PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();


// El Píxel de Meta no detecta solo los cambios de página dentro del sitio: se avisa en cada navegación.
function PixelPageViews() {
  const pathname = usePathname();
  const params = useSearchParams();
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname, params]);
  return null;
}

// Clics que cuentan como conversión, detectados en todo el sitio (no hace falta marcar cada botón)
function ClickConversions() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest("a, button");
      if (!el) return;
      const href = el.getAttribute("href") ?? "";
      const texto = (el.textContent ?? "").toLowerCase();
      if (href.includes("donaronline.org") || href.includes("mpago") || /(^|\/)(donar|#donar)/.test(href) || /don[aá] (hoy|ac[aá])|donar/.test(texto)) {
        track("click_donar", { link: href });
      } else if (href.includes("/campana/encuesta") || texto.includes("completar encuesta")) {
        track("click_encuesta");
      } else if (href.startsWith("mailto:gala@") || texto.includes("reservá tu lugar")) {
        track("click_reserva_gala");
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}

export default function Analytics() {
  return (
    <>
      <ClickConversions />
      {GTM && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM}');`}
        </Script>
      )}

      {GA && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA}');`}
          </Script>
        </>
      )}

      {PIXEL && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL}');fbq('track','PageView');`}
          </Script>
          <Suspense fallback={null}>
            <PixelPageViews />
          </Suspense>
        </>
      )}
    </>
  );
}
