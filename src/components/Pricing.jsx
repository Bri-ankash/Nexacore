export default function Pricing(){
  const plans=[
    {name:'Starter',desc:'Perfect for landing pages, portfolios & small business sites.',price:'KES 8K',note:'One-time · 2–4 weeks',popular:false,features:['Responsive website (up to 5 pages)','Mobile-friendly design','Contact form','Basic SEO setup','1 month free support'],missing:['Admin dashboard','Database / backend','Mobile app']},
    {name:'Business',desc:'Ideal for web management systems, SaaS MVPs & full-stack apps.',price:'KES 35K',note:'One-time · 4–8 weeks',popular:true,features:['Full-stack web application','Admin dashboard & user management','Database design & API','Authentication & roles','M-Pesa integration','Cloud deployment','3 months free support'],missing:['Mobile app']},
    {name:'Enterprise',desc:'For complex SaaS platforms, mobile apps & multi-system builds.',price:'KES 80K',note:'One-time + retainer · 8–16 weeks',popular:false,features:['Everything in Business','Mobile app (iOS + Android)','Advanced analytics','Multi-tenant architecture','Custom integrations','Priority 24/7 support','6 months free support','Source code handover'],missing:[]},
  ]
  return(
    <section id="pricing" style={{background:'var(--black)'}}>
      <div className="reveal">
        <div className="eyebrow">Pricing</div>
        <h2 className="sec-title">Transparent Pricing.<br/>No Surprises.</h2>
        <p className="sec-sub">Starting budgets to give you an idea. Final quotes are tailored to your exact project.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:56}} className="price-grid">
        {plans.map(p=>(
          <div key={p.name} className="reveal" style={{background:p.popular?'var(--card2)':'var(--card)',border:`1px solid ${p.popular?'var(--blue)':'var(--border)'}`,borderRadius:20,padding:'38px 30px',position:'relative',boxShadow:p.popular?'0 0 60px rgba(14,165,233,0.1)':'none',transition:'transform 0.3s'}}
            onMouseEnter={e=>e.currentTarget.style.transform='translateY(-5px)'}
            onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
            {p.popular&&<div style={{position:'absolute',top:-12,left:'50%',transform:'translateX(-50%)',background:'var(--blue)',color:'#000',fontSize:11,fontWeight:800,padding:'4px 16px',borderRadius:100,whiteSpace:'nowrap'}}>✦ Most Popular</div>}
            <div style={{fontFamily:'Syne,sans-serif',fontSize:16,fontWeight:800,marginBottom:6}}>{p.name}</div>
            <div style={{color:'var(--muted)',fontSize:12,fontWeight:300,marginBottom:24,lineHeight:1.5}}>{p.desc}</div>
            <div style={{fontFamily:'Syne,sans-serif',fontSize:36,fontWeight:800,color:'var(--blue)',letterSpacing:'-2px',lineHeight:1,marginBottom:4}}>{p.price}<span style={{fontSize:13,color:'var(--muted)',fontFamily:'DM Sans,sans-serif',fontWeight:300,marginLeft:4}}>starting from</span></div>
            <div style={{fontSize:11,color:'var(--faint)',marginBottom:24}}>{p.note}</div>
            <hr style={{border:'none',borderTop:'1px solid var(--border)',marginBottom:20}}/>
            <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:10,marginBottom:24}}>
              {p.features.map(f=><li key={f} style={{display:'flex',gap:8,fontSize:13,color:'var(--muted)',fontWeight:300}}><span style={{color:'var(--blue)',fontWeight:700,flexShrink:0}}>✓</span>{f}</li>)}
              {p.missing.map(f=><li key={f} style={{display:'flex',gap:8,fontSize:13,color:'var(--faint)',fontWeight:300}}><span style={{flexShrink:0}}>·</span>{f}</li>)}
            </ul>
            <a href="#contact" style={{display:'block',textAlign:'center',padding:12,borderRadius:10,fontWeight:700,fontSize:14,background:p.popular?'var(--blue)':'transparent',color:p.popular?'#000':'var(--blue2)',border:p.popular?'none':'1px solid rgba(14,165,233,0.3)'}}>Get a Quote</a>
          </div>
        ))}
      </div>
      <p className="reveal" style={{textAlign:'center',marginTop:24,color:'var(--faint)',fontSize:13}}>All prices are estimates. <a href="#contact" style={{color:'var(--blue)'}}>Contact us</a> for a free tailored quote.</p>
      <style>{`@media(max-width:900px){.price-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
