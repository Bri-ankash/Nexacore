import { useState } from 'react'
import Logo from './Logo'

export default function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false)
  const links = ['services','portfolio','pricing','about','faq']
  return(
    <>
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:100,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 6%',background:'rgba(3,6,8,0.92)',backdropFilter:'blur(24px)',borderBottom:'1px solid var(--border)'}}>
        <a href="#" style={{display:'flex',alignItems:'center',gap:10}}>
          <Logo/>
          <span style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:20,color:'var(--white)'}}>Nexa<span style={{color:'var(--blue)'}}>core</span></span>
        </a>
        <ul className="hide-mobile" style={{display:'flex',gap:32,listStyle:'none'}}>
          {links.map(l=>(
            <li key={l}><a href={`#${l}`} style={{color:'var(--muted)',fontSize:14,fontWeight:500,textTransform:'capitalize',transition:'color 0.2s'}}
              onMouseEnter={e=>e.target.style.color='var(--white)'}
              onMouseLeave={e=>e.target.style.color='var(--muted)'}>{l}</a></li>
          ))}
        </ul>
        <a href="#contact" style={{background:'var(--blue)',color:'#000',padding:'9px 22px',borderRadius:8,fontWeight:700,fontSize:13}}>Get in Touch</a>
      </nav>
    </>
  )
}
