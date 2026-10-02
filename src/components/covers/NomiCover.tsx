import styles from './covers.module.css'

export function NomiCover() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 807 470"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="nomi-glow" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#CDF45A" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#CDF45A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="807" height="470" fill="#0B0B0B" />
      <circle cx="403.5" cy="260" r="260" fill="url(#nomi-glow)" />
      <rect x="318" y="60" width="171" height="350" rx="30" fill="#141414" stroke="#3A3A3A" strokeWidth="2" />
      <rect x="373" y="74" width="61" height="10" rx="5" fill="#262626" />
      <text x="403.5" y="190" textAnchor="middle" fill="#FFFFFF" fontFamily="DM Sans, sans-serif" fontWeight="500" fontSize="40">
        Nomi
      </text>
      <text x="403.5" y="236" textAnchor="middle" fill="#CDF45A" fontFamily="IBM Plex Mono, monospace" fontSize="22">
        ₹ 12,480
      </text>
      <rect x="342" y="268" width="123" height="10" rx="5" fill="#262626" />
      <rect x="342" y="268" width="78" height="10" rx="5" fill="#CDF45A" />
      <rect x="342" y="296" width="123" height="34" rx="10" fill="#1E1E1E" />
      <rect x="342" y="340" width="123" height="34" rx="10" fill="#1E1E1E" />
    </svg>
  )
}
