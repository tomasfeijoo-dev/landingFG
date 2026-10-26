// Eventos de conversión: se mandan a Google Tag Manager (dataLayer) y al Píxel de Meta.
// En Tag Manager se usan con activadores de tipo "Evento personalizado" con estos mismos nombres.
export type Evento =
  | "click_donar"
  | "click_encuesta"
  | "click_reserva_gala"
  | "suscripcion_newsletter"
  | "postulacion_consejo"
  | "formulario_contacto";

// Evento estándar de Meta para cada uno (los que no tienen equivalente van como evento personalizado)
const meta: Record<Evento, { tipo: "track" | "trackCustom"; nombre: string }> = {
  click_donar: { tipo: "track", nombre: "Donate" },
  click_encuesta: { tipo: "trackCustom", nombre: "ClickEncuesta" },
  click_reserva_gala: { tipo: "track", nombre: "Contact" },
  suscripcion_newsletter: { tipo: "track", nombre: "Lead" },
  postulacion_consejo: { tipo: "track", nombre: "SubmitApplication" },
  formulario_contacto: { tipo: "track", nombre: "Contact" },
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(evento: Evento, datos: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: evento, ...datos });
  const m = meta[evento];
  window.fbq?.(m.tipo, m.nombre, datos);
}
