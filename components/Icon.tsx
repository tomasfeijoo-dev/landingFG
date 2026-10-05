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
  book: <path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5zm0 16a2 2 0 012-2h13" />,
  play: <path d="M7 4.5v15l12-7.5z" />,
  rocket: <path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.1 2.1 0 00-2.9-.1zM12 15l-3-3a22 22 0 012-4A12.9 12.9 0 0122 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 01-4 2zM9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" />,
  chart: <path d="M3 21h18M5 17l4-4 3 3 7-7m0 0h-4m4 0v4M6 21v-4m4 4v-6m4 6v-4m4 4V12" />,
  handshake: <path d="M8 11l3-3a2 2 0 013 0l5 5a2 2 0 010 3l-1 1M3 12l5-5 2 1M3 12l6 6a2 2 0 003 0l1-1M9 15l2 2m1-4l2 2" />,
  institution: <path d="M3 10l9-6 9 6M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18" />,
  pin: <path d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11zm0-8a3 3 0 100-6 3 3 0 000 6z" />,
  calendar: <path d="M4 6h16v14H4zM4 10h16M8 3v4m8-4v4" />,
  music: <path d="M9 18V5l11-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zm11-2a3 3 0 11-6 0 3 3 0 016 0z" />,
  drop: <path d="M12 3c-3.5 4.5-6 8-6 11a6 6 0 0012 0c0-3-2.5-6.5-6-11z" />,
  pulse: <path d="M3 12h4l2-5 4 10 2-5h6" />,
  scale: <path d="M5 21h14M7 21l1-14h8l1 14M9 7a3 3 0 016 0M12 12v3" />,
  leaf: <path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14zm0 0l7-7" />,
  meat: <path d="M15 4a5 5 0 015 5c0 5-6 9-11 9a5 5 0 01-5-5c0-5 5-9 11-9zM6 18l-3 3m10-9a2 2 0 100-4 2 2 0 000 4z" />,
  smoke: <path d="M3 15h14v3H3zM20 15v3M17 9c0-2 2-2 2-4M20 9c0-2 1-3 0-5M3 3l18 18" />,
  run: <path d="M13 4a2 2 0 100-.01M7 21l3-6 3 2v4M10 15l1-5 3 2 3-1M8 9l3-1" />,
  glass: <path d="M7 3h10l-1 7a4 4 0 01-8 0zM12 14v6M8 21h8M3 3l18 18" />,
  help: <path d="M12 21a9 9 0 100-18 9 9 0 000 18zm-2.5-11.5a2.5 2.5 0 115 0c0 1.7-2.5 2-2.5 4M12 17h.01" />,
  instagram: (
    <path
      fillRule="evenodd"
      d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm5.3-4a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
    />
  ),
  youtube: (
    <path
      fillRule="evenodd"
      d="M21.6 7.2a2.7 2.7 0 00-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 00-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 001.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 001.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.2V8.8l5.2 3.2z"
    />
  ),
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
  clock: <path d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-13v4l3 2" />,
  bank: <path d="M3 10l9-6 9 6M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18" />,
  card: <path d="M3 6h18v12H3zM3 10h18M7 15h3" />,
  sparkle: <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6" />,
  linkedin: <path d="M4 9h3v11H4zM5.5 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 9h3v1.6c.5-.9 1.7-1.8 3.4-1.8 3 0 3.6 2 3.6 4.6V20h-3v-5.8c0-1.4-.3-2.5-1.7-2.5s-2.3 1-2.3 2.5V20h-3z" />,
  facebook: <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />,
};

const filled = new Set(["linkedin", "facebook", "play", "instagram", "youtube"]);

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
