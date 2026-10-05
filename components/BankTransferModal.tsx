"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { bankTransfer, contact } from "@/lib/content";

function CopyRow({ label, value, copy }: { label: string; value: string; copy?: boolean }) {
  const [done, setDone] = useState(false);
  return (
    <div className="flex items-center justify-between gap-4 border-b border-navy-900/5 py-2.5 last:border-0">
      <dt className="text-sm text-navy-900/60">{label}</dt>
      <dd className="flex items-center gap-2 text-right font-semibold text-navy-900">
        <span className="break-all">{value}</span>
        {copy && (
          <button
            type="button"
            onClick={() => {
              navigator.clipboard?.writeText(value.replace(/\D/g, "") || value);
              setDone(true);
              setTimeout(() => setDone(false), 1500);
            }}
            className="flex-none rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-cta ring-1 ring-brand-100 transition hover:bg-cta hover:text-white"
          >
            {done ? "¡Copiado!" : "Copiar"}
          </button>
        )}
      </dd>
    </div>
  );
}

export default function BankTransferModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-navy-950/60 px-4 py-8 backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="transfer-title"
        onClick={(e) => e.stopPropagation()}
        className="pop-in relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          autoFocus
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-navy-900/50 transition hover:bg-brand-50 hover:text-navy-900"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-cta">
          <Icon name="bank" />
        </span>
        <h2 id="transfer-title" className="mt-4 text-2xl font-extrabold text-navy-900">
          Depósito o transferencia
        </h2>

        <dl className="mt-4 rounded-2xl bg-brand-50/60 px-4 ring-1 ring-brand-100">
          <CopyRow label="Banco" value={bankTransfer.banco} />
          <CopyRow label="CUIT" value={bankTransfer.cuit} copy />
          <CopyRow label="Nro. de Sucursal" value={bankTransfer.sucursal} />
          <CopyRow label="Nro. de Cuenta" value={bankTransfer.cuenta} />
          <CopyRow label="Tipo de cuenta bancaria" value={bankTransfer.tipo} />
          <CopyRow label="Moneda" value={bankTransfer.moneda} />
          <CopyRow label="CBU" value={bankTransfer.cbu} copy />
        </dl>

        <p className="mt-5 text-sm text-navy-900/75">
          Enviar el comprobante a{" "}
          <a href={`mailto:${contact.email}`} className="font-semibold text-cta hover:underline">
            {contact.email}
          </a>{" "}
          o informar al{" "}
          <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-cta hover:underline">
            {contact.phone}
          </a>{" "}
          una vez realizada la transferencia.
        </p>

        <p className="mt-5 border-t border-navy-900/10 pt-4 text-xs leading-relaxed text-navy-900/50">
          <strong className="text-navy-900/70">Exención impositiva:</strong> Fundación Gedyt posee un certificado de exención vigente, lo cual posibilita al
          donante deducir la donación del impuesto a las ganancias (Art 20, Ley de Impuesto a las Ganancias, texto ordenado en 1997).
        </p>
      </div>
    </div>
  );
}
