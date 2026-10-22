"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Icon from "@/components/Icon";
import { BORDO, competencias, consejoEmail, niveles } from "@/lib/consejo";

type Status = "idle" | "sending" | "ok" | "error";

// Mensajes que van rotando debajo del loader mientras se envía la postulación
const mensajes = [
  "Estamos procesando tus datos…",
  "Por favor, aguardá unos segundos",
  "Guardando tu postulación de forma segura…",
  "Ya casi terminamos…",
];

// El loader se muestra al menos este tiempo, para que no aparezca y desaparezca de golpe
const MIN_LOADER_MS = 2400;

function Procesando() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => Math.min(n + 1, mensajes.length - 1)), 1800);
    return () => clearInterval(t);
  }, []);
  // Se monta en <body> para cubrir toda la pantalla (el formulario tiene una animación que encierra lo "fixed")
  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/55 px-6 backdrop-blur-sm" role="status" aria-live="polite">
      <div className="step-in flex w-full max-w-sm flex-col items-center rounded-[2rem] bg-white px-8 py-10 text-center shadow-2xl">
        <svg viewBox="0 0 50 50" className="h-16 w-16 animate-spin" aria-hidden>
          <circle cx="25" cy="25" r="20" fill="none" stroke="#e8edf2" strokeWidth="5" />
          <circle cx="25" cy="25" r="20" fill="none" stroke={BORDO} strokeWidth="5" strokeLinecap="round" strokeDasharray="90 126" />
        </svg>
        <p className="mt-6 text-lg font-extrabold text-navy-900">Enviando tu postulación</p>
        <p key={i} className="step-in mt-2 min-h-[1.5rem] text-navy-900/65">
          {mensajes[i]}
        </p>
      </div>
    </div>,
    document.body,
  );
}

const field =
  "mt-1.5 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-navy-950 outline-none transition placeholder:text-navy-900/40 focus:border-[#8c1d4b] focus:ring-4 focus:ring-[#8c1d4b]/10";

// Subtítulo de cada bloque del formulario, como en la landing
function Bloque({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-b border-navy-900/10 pb-3 text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: BORDO }}>
      {children}
    </p>
  );
}

export default function ConsejoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [conflicto, setConflicto] = useState<"" | "Sí" | "No">("");
  const gracias = useRef<HTMLDivElement>(null);

  // Al terminar, se lleva a la persona directo al mensaje de agradecimiento
  useEffect(() => {
    if (status === "ok") gracias.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [status]);

  const mailto = `mailto:${consejoEmail}?subject=${encodeURIComponent("Postulación al Consejo Directivo - CV y nota de interés")}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const espera = new Promise((r) => setTimeout(r, MIN_LOADER_MS));
    try {
      const [res] = await Promise.all([
        fetch("/api/consejo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
        }),
        espera,
      ]);
      if (!res.ok) throw new Error();
      form.reset();
      setConflicto("");
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div ref={gracias} className="step-in scroll-mt-28 rounded-[2rem] bg-white p-10 text-center shadow-xl">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white" style={{ background: BORDO }}>
          <Icon name="check" className="h-7 w-7" />
        </span>
        <p className="mt-5 text-2xl font-extrabold text-navy-900">¡Gracias por enviar tu postulación!</p>
        <p className="mt-3 text-navy-900/70">La recibimos correctamente. Nos vamos a poner en contacto con vos.</p>
        <p className="mt-4 text-navy-900/70">
          Recordá enviar tu CV y tu nota de interés a{" "}
          <a href={mailto} className="font-semibold underline" style={{ color: BORDO }}>
            {consejoEmail}
          </a>{" "}
          para que tu postulación quede completa.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="reveal space-y-10 rounded-[2rem] bg-white p-6 shadow-xl sm:p-10">
      <fieldset>
        <Bloque>Datos personales</Bloque>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {[
            { name: "nombre", label: "Nombre", auto: "given-name" },
            { name: "apellido", label: "Apellido", auto: "family-name" },
            { name: "email", label: "Email", auto: "email", type: "email" },
            { name: "telefono", label: "Teléfono", auto: "tel", type: "tel" },
            { name: "organizacion", label: "Organización actual", auto: "organization" },
            { name: "pais", label: "País / Provincia", auto: "address-level1" },
          ].map((f) => (
            <label key={f.name} className="block text-sm font-semibold text-navy-900">
              {f.label} <span style={{ color: BORDO }}>*</span>
              <input name={f.name} type={f.type ?? "text"} required autoComplete={f.auto} className={field} />
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <Bloque>Tu postulación</Bloque>
        <div className="mt-5 rounded-2xl border-l-4 bg-gradient-to-br from-[#8c1d4b]/[0.05] to-brand-50/60 p-6" style={{ borderColor: BORDO }}>
          <p className="flex items-center gap-2 font-extrabold text-navy-900">
            <Icon name="mail" className="h-5 w-5 text-cta" />
            Enviá tu CV y tu nota de interés por email
          </p>
          <p className="mt-3 leading-relaxed text-navy-900/70">
            Para completar tu postulación, enviá tu <strong className="text-navy-900">CV en PDF</strong> y una breve <strong className="text-navy-900">nota de interés</strong>{" "}
            —los motivos por los que deseás integrar el Consejo Directivo y el aporte que realizarías desde tu trayectoria y tus redes— a{" "}
            <a href={mailto} className="font-semibold underline underline-offset-2" style={{ color: BORDO }}>
              {consejoEmail}
            </a>
            .
          </p>
          <a
            href={mailto}
            className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
            style={{ background: BORDO, boxShadow: `0 10px 24px ${BORDO}40` }}
          >
            <Icon name="mail" className="h-4 w-4" /> Escribir el email
          </a>
          <p className="mt-4 text-sm text-navy-900/55 italic">
            Podés enviarlo antes o después de completar este formulario. Ambos pasos son necesarios para que tu postulación quede completa.
          </p>
        </div>
      </fieldset>

      <fieldset>
        <Bloque>Autoevaluación de competencias</Bloque>
        <p className="mt-4 text-sm text-navy-900/60">Valorá tu nivel de experiencia en cada área (Novato → Experto).</p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {competencias.map((c, i) => (
            <label key={c.title} className="block text-sm font-semibold text-navy-900">
              {String(i + 1).padStart(2, "0")} · {c.title}
              <select name={`competencia_${String(i + 1).padStart(2, "0")}`} required defaultValue="" className={`${field} invalid:text-navy-900/45`}>
                <option value="" disabled>
                  Seleccioná tu nivel
                </option>
                {niveles.map((n) => (
                  <option key={n} value={n} className="text-navy-950">
                    {n}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <Bloque>Integridad</Bloque>
        <p className="mt-5 text-sm font-semibold text-navy-900">
          ¿Tenés algún conflicto de interés que declarar? <span style={{ color: BORDO }}>*</span>
        </p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {(["Sí", "No"] as const).map((v) => (
            <label
              key={v}
              className={`flex cursor-pointer items-center justify-center rounded-xl border px-4 py-3 font-semibold transition ${
                conflicto === v ? "border-transparent text-white shadow-md" : "border-navy-900/15 text-navy-900/70 hover:border-navy-900/30"
              }`}
              style={conflicto === v ? { background: BORDO } : undefined}
            >
              <input type="radio" name="conflicto" value={v} required className="sr-only" checked={conflicto === v} onChange={() => setConflicto(v)} />
              {v}
            </label>
          ))}
        </div>
        {conflicto === "Sí" && (
          <label className="mt-4 block text-sm font-semibold text-navy-900">
            Contanos brevemente cuál
            <textarea name="conflicto_detalle" rows={3} className={field} />
          </label>
        )}
      </fieldset>

      <fieldset>
        <Bloque>Aceptación</Bloque>
        <label className="mt-5 flex cursor-pointer items-start gap-3 text-navy-900/80">
          <input type="checkbox" name="acepta" value="Sí" required className="mt-1 h-5 w-5 flex-none rounded accent-[#8c1d4b]" />
          <span>
            Leí y acepto los Términos de Referencia del Consejo Directivo de Fundación GEDYT. <span style={{ color: BORDO }}>*</span>
          </span>
        </label>
      </fieldset>

      {status === "sending" && <Procesando />}

      {/* Campo trampa para bots */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full px-6 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 disabled:opacity-60"
          style={{ background: BORDO, boxShadow: `0 12px 28px ${BORDO}40` }}
        >
          {status === "sending" ? "Enviando…" : "Enviar mi postulación"}
        </button>
        {status === "error" && (
          <p className="mt-4 text-center text-sm text-red-600">
            No pudimos enviar la postulación. Escribinos a{" "}
            <a className="font-semibold underline" href={mailto}>
              {consejoEmail}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
