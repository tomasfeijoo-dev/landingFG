"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Flechita flotante que aparece al bajar y lleva al inicio de la página.
export default function BackToTop() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // En la Gala, el botón flotante "Reservá tu lugar" ocupa la esquina: la flecha va arriba de él.
  const lifted = pathname === "/gala-noche-azul";

  return (
    <button
      type="button"
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900/85 text-white shadow-lg shadow-navy-950/30 ring-1 ring-white/20 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-cta sm:right-6 ${
        lifted ? "bottom-[5.5rem] sm:bottom-24" : "bottom-4 sm:bottom-6"
      } ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 19V5m-6 6l6-6 6 6" />
      </svg>
    </button>
  );
}
