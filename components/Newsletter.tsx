"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    setStatus("sending");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: "Suscripción web", email, motivo: "newsletter", mensaje: "Quiero recibir las guías de prevención." }),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-navy-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-white/10 text-sky-accent">
            <Icon name="mail" />
          </div>
          <div>
            <p className="text-base font-bold text-white sm:text-lg">Sumate para recibir recursos y novedades.</p>
          </div>
        </div>
        {status === "ok" ? (
          <p className="font-semibold text-sky-accent">¡Listo! Te sumamos a la lista.</p>
        ) : (
          <form onSubmit={onSubmit} className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
            <label className="sr-only" htmlFor="newsletter-email">Email</label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="Correo electrónico"
              className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3 text-white outline-none placeholder:text-white/50 focus:border-sky-accent md:w-72"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex-none rounded-full bg-cta px-6 py-3 font-semibold text-white transition hover:bg-cta-hover disabled:opacity-60"
            >
              {status === "sending" ? "Enviando…" : "Quiero recibir novedades"}
            </button>
          </form>
        )}
      </div>
      {status === "error" && <p className="pb-6 text-center text-sm text-red-300">No pudimos suscribirte. Probá de nuevo más tarde.</p>}
    </section>
  );
}
