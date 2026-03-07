import Logo from './Logo'
export default function Footer(){
  return(
    <footer style={{padding:'32px 6%',borderTop:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12,position:'relative',zIndex:1}}>
      <a href="#" style={{display:'flex',alignItems:'center',gap:8}}>
        <Logo/>
        <span style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:15,color:'var(--white)'}}>Nexa<span style={{color:'var(--blue)'}}>core</span> Technologies</span>
      </a>
      <p style={{color:'var(--faint)',fontSize:12}}>© 2026 Nexacore Technologies. All rights reserved. · Not certified IT consultants.</p>
      <p style={{color:'var(--blue)',fontSize:12}}>Nairobi, Kenya 🇰🇪</p>
    </footer>
  )
}
