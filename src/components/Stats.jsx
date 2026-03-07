export default function Stats(){
  const stats=[['50+','Projects Delivered'],['30+','Happy Clients'],['99%','Satisfaction Rate'],['24/7','Support Available']]
  return(
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)',background:'var(--border)',gap:1}}>
      {stats.map(([n,l])=>(
        <div key={l} className="reveal" style={{background:'var(--deep)',padding:'40px 24px',textAlign:'center'}}>
          <div style={{fontFamily:'Syne,sans-serif',fontSize:42,fontWeight:800,color:'var(--blue)',letterSpacing:'-2px',lineHeight:1,marginBottom:8}}>{n}</div>
          <div style={{color:'var(--muted)',fontSize:12,fontWeight:500,letterSpacing:'0.5px',textTransform:'uppercase'}}>{l}</div>
        </div>
      ))}
      <style>{`@media(max-width:600px){.stats-bar{grid-template-columns:1fr 1fr!important}}`}</style>
    </div>
  )
}
