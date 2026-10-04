"use client";

import Link from "next/link";

// Link interno que, si apunta al formulario de contacto, preselecciona el motivo.
// Agrega ?motivo=... a la URL y además avisa al formulario si ya está en pantalla.
export function withInterest(href: string, interest?: string) {
  return interest && href.startsWith("/contacto") && !href.includes("?") ? `${href}?motivo=${interest}` : href;
}

export default function InterestLink({
  href,
  interest,
  className,
  children,
  tabIndex,
}: {
  href: string;
  interest?: string;
  className?: string;
  children: React.ReactNode;
  tabIndex?: number;
}) {
  if (/^(https?:|mailto:)/.test(href)) {
    return (
      <a href={href} className={className} tabIndex={tabIndex} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link
      href={withInterest(href, interest)}
      className={className}
      tabIndex={tabIndex}
      onClick={() => interest && window.dispatchEvent(new CustomEvent("pick-interest", { detail: interest }))}
    >
      {children}
    </Link>
  );
}
