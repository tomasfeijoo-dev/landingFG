const paths: Record<string, React.ReactNode> = {
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A2 2 0 006.2 21h11.6a2 2 0 001.7-2.5L14 9V3M7 15h10" />,
  building: <path d="M4 21V5a2 2 0 012-2h8a2 2 0 012 2v16m0-10h2a2 2 0 012 2v8M3 21h18M8 7h4M8 11h4M8 15h4" />,
  graduation: <path d="M2 9l10-5 10 5-10 5L2 9zm4 2v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5m4-2v6" />,
  users: <path d="M16 19v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1m6.5-9a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM21 19v-1a4 4 0 00-3-3.9M15 3.1a3.5 3.5 0 010 6.8" />,
  shield: <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3zm-3 9l2 2 4-4" />,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />,
  map: <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zm0 0v14m6-12v14" />,
  stethoscope: <path d="M6 3v6a4 4 0 008 0V3M10 13v2a5 5 0 0010 0v-2m0 0a2 2 0 100-4 2 2 0 000 4z" />,
  arrow: <path d="M5 12h14m-6-6l6 6-6 6" />,
  check: <path d="M20 6L9 17l-5-5" />,
  play: <path d="M7 4.5v15l12-7.5z" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
  clock: <path d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-13v4l3 2" />,
  bank: <path d="M3 10l9-6 9 6M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18" />,
  card: <path d="M3 6h18v12H3zM3 10h18M7 15h3" />,
  sparkle: <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6" />,
  linkedin: <path d="M4 9h3v11H4zM5.5 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 9h3v1.6c.5-.9 1.7-1.8 3.4-1.8 3 0 3.6 2 3.6 4.6V20h-3v-5.8c0-1.4-.3-2.5-1.7-2.5s-2.3 1-2.3 2.5V20h-3z" />,
  facebook: <path d="M14 8h3V4h-3a4 4 0 00-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8z" />,
};

const filled = new Set(["linkedin", "facebook", "play"]);

export default function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const solid = filled.has(name);
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={solid ? "currentColor" : "none"}
      stroke={solid ? "none" : "currentColor"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
