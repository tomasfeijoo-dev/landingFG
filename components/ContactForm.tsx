"use client";

import { useEffect, useState } from "react";
import { contact, interests } from "@/lib/content";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [interest, setInterest] = useState("empresa");

  // Los botones de "Cómo ayudar" preseleccionan el motivo (ver InterestLink).
  useEffect(() => {
    const onPick = (e: Event) => setInterest((e as CustomEvent<string>).detail);
    window.addEventListener("pick-interest", onPick);
    return () => window.removeEventListener("pick-interest", onPick);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
        <p className="text-2xl font-bold text-navy-900">¡Gracias por escribirnos!</p>
        <p className="mt-3 text-navy-900/70">Te respondemos a la brevedad.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-600 hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-navy-950 outline-none transition placeholder:text-navy-900/40 focus:border-brand-500 focus:ring-4 focus:ring-brand-100";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy-900">
          Nombre y apellido
          <input name="nombre" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-medium text-navy-900">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block text-sm font-medium text-navy-900">
          Teléfono <span className="font-normal text-navy-900/50">(opcional)</span>
          <input name="telefono" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="block text-sm font-medium text-navy-900">
          Empresa / institución <span className="font-normal text-navy-900/50">(opcional)</span>
          <input name="organizacion" autoComplete="organization" className={field} />
        </label>
        <label className="block text-sm font-medium text-navy-900 sm:col-span-2">
          Motivo
          <select
            name="motivo"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className={field}
          >
            {interests.map((i) => (
              <option key={i.value} value={i.value}>
                {i.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-navy-900 sm:col-span-2">
          Mensaje
          <textarea name="mensaje" required rows={4} className={field} />
        </label>
        {/* Campo trampa para bots */}
        <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-full bg-brand-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-navy-900 disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>
      {status === "error" && (
        <p className="mt-4 text-center text-sm text-red-600">
          No pudimos enviar el mensaje. Escribinos a{" "}
          <a className="font-semibold underline" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
