export default function Portfolio(){
  const projects=[
    {icon:'💰',bg:'linear-gradient(135deg,#0a1a2e,#0e2040)',cat:'SaaS Platform',title:'Chama na Kash',desc:'Full chama management SaaS — contributions, loans, meetings, M-Pesa integration, multi-role dashboards.',tags:['Django','Next.js','PostgreSQL','M-Pesa']},
    {icon:'🏫',bg:'linear-gradient(135deg,#0a201a,#0e2820)',cat:'Management System',title:'School Admin Portal',desc:'Student records, fee tracking, grading, attendance, and parent communication portal.',tags:['React','Node.js','MongoDB']},
    {icon:'🛒',bg:'linear-gradient(135deg,#1a0a20,#200e28)',cat:'E-Commerce',title:'Retail Web Store',desc:'Full e-commerce with product catalog, cart, M-Pesa checkout, and inventory management.',tags:['Next.js','Django','M-Pesa']},
    {icon:'📊',bg:'linear-gradient(135deg,#1a1a0a,#28200e)',cat:'Business Dashboard',title:'SME Analytics Platform',desc:'Real-time analytics — sales tracking, expense monitoring, automated reporting.',tags:['React','Python','PostgreSQL']},
    {icon:'📱',bg:'linear-gradient(135deg,#0a1428,#0e1c38)',cat:'Mobile Application',title:'Field Agent App',desc:'Cross-platform app with offline sync, document upload, and client records for microfinance.',tags:['React Native','Offline Sync']},
    {icon:'🏥',bg:'linear-gradient(135deg,#0a1e1e,#0e2828)',cat:'Healthcare System',title:'Clinic Management Portal',desc:'Patient records, appointment booking, billing, and prescription tracking.',tags:['Django','React','Supabase']},
  ]
  return(
    <section id="portfolio" style={{background:'var(--deep)'}}>
      <div className="reveal">
        <div className="eyebrow">Our Work</div>
        <h2 className="sec-title">Projects We're<br/>Proud Of</h2>
        <p className="sec-sub">A selection of systems and products built for clients across Kenya.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:56}} className="port-grid">
        {projects.map(p=>(
          <div key={p.title} className="reveal" style={{background:'var(--card)',border:'1px solid var(--border)',borderRadius:16,overflow:'hidden',transition:'all 0.3s'}}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.borderColor='var(--border2)'}}
            onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.borderColor='var(--border)'}}>
            <div style={{height:150,display:'flex',alignItems:'center',justifyContent:'center',fontSize:48,background:p.bg}}>{p.icon}</div>
            <div style={{padding:22}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',color:'var(--blue)',marginBottom:8}}>{p.cat}</div>
              <h3 style={{fontFamily:'Syne,sans-serif',fontSize:16,fontWeight:700,marginBottom:8}}>{p.title}</h3>
              <p style={{color:'var(--muted)',fontSize:12,lineHeight:1.65,fontWeight:300}}>{p.desc}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:6,marginTop:14}}>
                {p.tags.map(t=><span key={t} style={{background:'rgba(14,165,233,0.07)',color:'var(--muted)',fontSize:10,padding:'3px 10px',borderRadius:100}}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:900px){.port-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
