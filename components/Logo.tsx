export function Logo({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="RYV Logo"
    >
      {/* Outer hexagon — pointy top */}
      <polygon
        points="50,4 88,27 88,73 50,96 12,73 12,27"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />

      {/* ── Inner monogram ── */}

      {/* Top horizontal bar */}
      <line x1="20" y1="35" x2="80" y2="35"
        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      {/* V — left arm: top-left → V apex */}
      <line x1="20" y1="35" x2="45" y2="74"
        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      {/* V — right arm: top-inner → V apex (shared spine with R) */}
      <line x1="58" y1="35" x2="45" y2="74"
        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      {/* R — bowl: arcs from (58,35) right and back to (58,56) */}
      <path
        d="M58,35 C80,35 80,56 58,56"
        stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round"
      />

      {/* R — crossbar: from bowl's bottom-left to approx midpoint */}
      <line x1="58" y1="56" x2="72" y2="56"
        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      {/* R — leg: diagonal from crossbar mid-point to bottom-right */}
      <line x1="72" y1="56" x2="80" y2="74"
        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      {/* Bottom bar: V apex → R leg end */}
      <line x1="45" y1="74" x2="80" y2="74"
        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
