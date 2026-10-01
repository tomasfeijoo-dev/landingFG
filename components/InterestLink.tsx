"use client";

export default function InterestLink({
  href,
  interest,
  className,
  children,
}: {
  href: string;
  interest: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent("pick-interest", { detail: interest }))}
    >
      {children}
    </a>
  );
}
