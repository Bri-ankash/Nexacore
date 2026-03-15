export default function Logo({ size = 36 }){
  return(
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="kg1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8"/>
          <stop offset="100%" stopColor="#0284c7"/>
        </linearGradient>
        <filter id="kglow">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Background square with rounded corners */}
      <rect x="1" y="1" width="38" height="38" rx="10" fill="rgba(14,165,233,0.08)" stroke="url(#kg1)" strokeWidth="1.2"/>

      {/* Bold K lettermark */}
      <path d="M11 10 L11 30 M11 20 L22 10 M11 20 L23 30" 
        stroke="url(#kg1)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#kglow)"/>

      {/* Circuit lines - top right */}
      <line x1="22" y1="10" x2="28" y2="10" stroke="rgba(14,165,233,0.5)" strokeWidth="1.2"/>
      <circle cx="30" cy="10" r="1.5" fill="#38bdf8"/>
      <line x1="30" y1="10" x2="30" y2="15" stroke="rgba(14,165,233,0.3)" strokeWidth="1"/>
      <circle cx="30" cy="16.5" r="1" fill="rgba(14,165,233,0.4)"/>

      {/* Circuit lines - bottom right */}
      <line x1="23" y1="30" x2="29" y2="30" stroke="rgba(14,165,233,0.5)" strokeWidth="1.2"/>
      <circle cx="31" cy="30" r="1.5" fill="#0ea5e9"/>
      <line x1="31" y1="30" x2="31" y2="25" stroke="rgba(14,165,233,0.3)" strokeWidth="1"/>
      <circle cx="31" cy="23.5" r="1" fill="rgba(14,165,233,0.4)"/>

      {/* Circuit dot on K joint */}
      <circle cx="11" cy="20" r="2" fill="#38bdf8" filter="url(#kglow)"/>

      {/* Top left circuit */}
      <line x1="11" y1="10" x2="6" y2="10" stroke="rgba(14,165,233,0.3)" strokeWidth="1"/>
      <circle cx="5" cy="10" r="1" fill="rgba(14,165,233,0.4)"/>

      {/* Bottom left circuit */}
      <line x1="11" y1="30" x2="6" y2="30" stroke="rgba(14,165,233,0.3)" strokeWidth="1"/>
      <circle cx="5" cy="30" r="1" fill="rgba(14,165,233,0.4)"/>
    </svg>
  )
}
