import styles from './covers.module.css'

export function FigmaToCodeCover() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 807 470"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="f2c-glow" cx="70%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#9BEA3A" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#9BEA3A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="807" height="470" fill="#0B0B0B" />
      <rect width="807" height="470" fill="url(#f2c-glow)" />
      <rect x="90" y="110" width="250" height="250" rx="22" fill="#141414" stroke="#3A3A3A" strokeWidth="2" />
      <rect x="118" y="140" width="194" height="70" rx="12" fill="#262626" />
      <rect x="118" y="226" width="90" height="106" rx="12" fill="#262626" />
      <rect x="222" y="226" width="90" height="106" rx="12" fill="#262626" />
      <rect x="118" y="140" width="194" height="70" rx="12" fill="none" stroke="#CDF45A" strokeWidth="2" strokeDasharray="6 6" />
      <path d="M372 235h64M420 219l16 16-16 16" stroke="#CDF45A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <g fontFamily="IBM Plex Mono, monospace" fontSize="20">
        <text x="470" y="160" fill="#7E7E7E">
          .hero {'{'}
        </text>
        <text x="494" y="196" fill="#FFFFFF">
          width: 1654px;
        </text>
        <text x="494" y="232" fill="#FFFFFF">
          gap: 29px;
        </text>
        <text x="494" y="268" fill="#CDF45A">
          radius: 42px;
        </text>
        <text x="470" y="304" fill="#7E7E7E">
          {'}'}
        </text>
      </g>
    </svg>
  )
}
