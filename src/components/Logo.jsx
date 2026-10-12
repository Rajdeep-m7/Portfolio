// The "RM" monogram — same artwork as src/app/icon.svg (favicon), so the site logo and favicon always match.
export default function Logo({ size = 36, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Rajdeep Majumdar logo"
      className={className}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="1" stopColor="#3730a3" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill="url(#logo-gradient)" />
      <g fill="none" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 47V17h9a7.5 7.5 0 0 1 0 15H12M20 32l8 15" />
        <path d="M36 47V17l8.5 13L53 17v30" />
      </g>
    </svg>
  );
}
