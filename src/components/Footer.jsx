import Logo from './Logo'
export default function Footer(){
  return(
    <footer style={{padding:'32px 6%',borderTop:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12,position:'relative',zIndex:1}}>
      <a href="#" style={{display:'flex',alignItems:'center',gap:8}}>
        <Logo/>
        <span style={{fontFamily:'Urbanist,sans-serif',fontWeight:800,fontSize:15,color:'var(--white)'}}>Kali<span style={{color:'var(--blue)'}}>works</span> Technologies</span>
      </a>
      <p style={{color:'var(--faint)',fontSize:12}}>© 2026 Kaliworks Technologies. A team of passionate developers building Africa's digital future.</p>
      <p style={{color:'var(--blue)',fontSize:12}}>Nairobi, Kenya 🇰🇪</p>
    </footer>
  )
}
