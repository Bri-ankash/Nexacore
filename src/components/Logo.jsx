export default function Logo(){
  return(
    <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
      <defs>
        <linearGradient id="lg1" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8"/>
          <stop offset="100%" stopColor="#0284c7"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <polygon points="18,1 33,9.5 33,26.5 18,35 3,26.5 3,9.5" fill="rgba(14,165,233,0.1)" stroke="url(#lg1)" strokeWidth="1.2"/>
      <path d="M10 26 L10 10 L18 22 L26 10 L26 26" stroke="url(#lg1)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#glow)"/>
      <circle cx="10" cy="10" r="2" fill="#38bdf8"/>
      <circle cx="26" cy="10" r="2" fill="#38bdf8"/>
      <circle cx="10" cy="26" r="2" fill="#0ea5e9"/>
      <circle cx="26" cy="26" r="2" fill="#0ea5e9"/>
      <circle cx="18" cy="22" r="1.5" fill="#7dd3fc"/>
      <line x1="10" y1="10" x2="5" y2="10" stroke="rgba(14,165,233,0.4)" strokeWidth="1"/>
      <line x1="26" y1="10" x2="31" y2="10" stroke="rgba(14,165,233,0.4)" strokeWidth="1"/>
      <circle cx="4" cy="10" r="1" fill="rgba(14,165,233,0.5)"/>
      <circle cx="32" cy="10" r="1" fill="rgba(14,165,233,0.5)"/>
    </svg>
  )
}
