export default function Services(){
  const svcs=[
    {n:'01',icon:'🌐',title:'Web Development',desc:'Beautiful, fast, SEO-optimized websites. Landing pages, corporate sites, e-commerce — built to convert and impress.',tag:'React · Next.js · HTML/CSS'},
    {n:'02',icon:'📱',title:'Mobile Applications',desc:'Native and cross-platform mobile apps for iOS and Android. Sleek UX, fast performance, built to scale.',tag:'React Native · Flutter'},
    {n:'03',icon:'🏗️',title:'SaaS Platform Development',desc:'Full-stack SaaS products from scratch — subscriptions, dashboards, APIs, authentication, billing all included.',tag:'Django · Node.js · PostgreSQL'},
    {n:'04',icon:'🖥️',title:'Web Management Systems',desc:'Custom systems for schools, chamas, hospitals, shops, SMEs — automating operations and simplifying management.',tag:'ERP · CRM · Admin Portals'},
    {n:'05',icon:'☁️',title:'Cloud Solutions',desc:'Cloud hosting, migration, and infrastructure on AWS, GCP, and Vercel. Scalable, reliable, cost-optimized.',tag:'AWS · Vercel · Supabase'},
    {n:'06',icon:'💡',title:'Tech Guidance & Assistance',desc:'We help you navigate technology decisions and plan your roadmap. General guidance only — not certified consulting.',tag:'Strategy · Planning · Support'},
  ]
  return(
    <section id="services" style={{background:'var(--deep)'}}>
      <div className="reveal">
        <div className="eyebrow">What We Do</div>
        <h2 className="sec-title">Everything Digital.<br/>Built Right.</h2>
        <p className="sec-sub">From simple landing pages to complex SaaS platforms — if it lives on the web or a device, we build it.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,background:'var(--border)',marginTop:56}}>
        {svcs.map(s=>(
          <div key={s.n} className="reveal" style={{background:'var(--card)',padding:'42px 34px',position:'relative',overflow:'hidden',transition:'all 0.3s',cursor:'default'}}
            onMouseEnter={e=>{e.currentTarget.style.background='var(--card2)';e.currentTarget.style.transform='translateY(-5px)'}}
            onMouseLeave={e=>{e.currentTarget.style.background='var(--card)';e.currentTarget.style.transform='translateY(0)'}}>
            <span style={{position:'absolute',top:18,right:22,fontFamily:'Syne,sans-serif',fontSize:50,fontWeight:800,color:'rgba(14,165,233,0.05)',letterSpacing:'-3px'}}>{s.n}</span>
            <span style={{fontSize:32,marginBottom:20,display:'block'}}>{s.icon}</span>
            <h3 style={{fontFamily:'Syne,sans-serif',fontSize:18,fontWeight:700,marginBottom:10}}>{s.title}</h3>
            <p style={{color:'var(--muted)',fontSize:13,lineHeight:1.75,fontWeight:300}}>{s.desc}</p>
            <span style={{display:'inline-block',marginTop:16,background:'rgba(14,165,233,0.08)',border:'1px solid rgba(14,165,233,0.18)',color:'var(--blue3)',fontSize:11,padding:'4px 12px',borderRadius:100,fontWeight:600}}>{s.tag}</span>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:900px){#services .svc-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
