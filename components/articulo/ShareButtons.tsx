"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

// Compartir la nota: WhatsApp, Facebook, LinkedIn, X y copiar link.
export default function ShareButtons({ title, vertical = false }: { title: string; vertical?: boolean }) {
  const [copied, setCopied] = useState(false);
  const share = (base: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    window.open(base.replace("{url}", url).replace("{text}", text), "_blank", "noopener,noreferrer,width=640,height=560");
  };
  const btn =
    "flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy-900 shadow-sm ring-1 ring-navy-900/10 transition hover:-translate-y-0.5 hover:bg-cta hover:text-white hover:ring-cta";
  return (
    <div className={`flex gap-2 ${vertical ? "flex-col" : "flex-wrap items-center"}`}>
      <button type="button" aria-label="Compartir por WhatsApp" className={btn} onClick={() => share("https://wa.me/?text={text}%20{url}")}>
        <Icon name="phone" className="h-4 w-4" />
      </button>
      <button type="button" aria-label="Compartir en Facebook" className={btn} onClick={() => share("https://www.facebook.com/sharer/sharer.php?u={url}")}>
        <Icon name="facebook" className="h-4 w-4" />
      </button>
      <button type="button" aria-label="Compartir en LinkedIn" className={btn} onClick={() => share("https://www.linkedin.com/sharing/share-offsite/?url={url}")}>
        <Icon name="linkedin" className="h-4 w-4" />
      </button>
      <button type="button" aria-label="Compartir en X" className={btn} onClick={() => share("https://twitter.com/intent/tweet?text={text}&url={url}")}>
        <span className="text-sm font-black">𝕏</span>
      </button>
      <button
        type="button"
        aria-label="Copiar link"
        className={btn}
        onClick={() => {
          navigator.clipboard?.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
      >
        {copied ? <Icon name="check" className="h-4 w-4" /> : <Icon name="link" className="h-4 w-4" />}
      </button>
    </div>
  );
}
