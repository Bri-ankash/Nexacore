export default function Process(){
  const steps=[
    {n:'01',title:'Discovery & Planning',desc:'We listen, ask the right questions, and produce a detailed blueprint with clear timelines before any work begins.'},
    {n:'02',title:'Design & Prototype',desc:'Wireframes and prototypes so you see and feel the product before we write a single line of code.'},
    {n:'03',title:'Build & Test',desc:'Agile development with weekly updates. Rigorous testing on all devices before we ship.'},
    {n:'04',title:'Launch & Support',desc:'Smooth deployment, full handover, staff training, and ongoing support to keep everything running perfectly.'},
  ]
  const chips=['React','Next.js','Django','Node.js','Python','PostgreSQL','MongoDB','Flutter','React Native','TypeScript','AWS','Docker','Redis','Supabase','Vercel','M-Pesa API','REST APIs','GraphQL']
  return(
    <section id="process" style={{background:'var(--deep)'}}>
      <div className="reveal">
        <div className="eyebrow">How We Work</div>
        <h2 className="sec-title">From Idea to Live<br/>in 4 Clear Steps</h2>
        <p className="sec-sub">Transparent and structured — with you at every stage.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:1,background:'var(--border)',marginTop:56}} className="proc-grid">
        {steps.map(s=>(
          <div key={s.n} className="reveal" style={{background:'var(--black)',padding:'42px 28px',transition:'background 0.25s'}}
            onMouseEnter={e=>e.currentTarget.style.background='var(--card)'}
            onMouseLeave={e=>e.currentTarget.style.background='var(--black)'}>
            <div style={{fontFamily:'Syne,sans-serif',fontSize:58,fontWeight:800,color:'rgba(14,165,233,0.07)',letterSpacing:'-4px',lineHeight:1,marginBottom:22}}>{s.n}</div>
            <h3 style={{fontFamily:'Syne,sans-serif',fontSize:16,fontWeight:700,marginBottom:8}}>{s.title}</h3>
            <p style={{color:'var(--muted)',fontSize:13,lineHeight:1.7,fontWeight:300}}>{s.desc}</p>
          </div>
        ))}
      </div>
      <div style={{marginTop:70}} className="reveal">
        <div className="eyebrow">Technologies We Use</div>
        <div style={{display:'flex',flexWrap:'wrap',gap:10,marginTop:16}}>
          {chips.map(c=><span key={c} style={{background:'var(--card)',border:'1px solid var(--border)',color:'var(--muted)',padding:'8px 18px',borderRadius:100,fontSize:13,fontWeight:500,transition:'all 0.2s',cursor:'default'}}
            onMouseEnter={e=>{e.target.style.background='rgba(14,165,233,0.08)';e.target.style.borderColor='rgba(14,165,233,0.4)';e.target.style.color='var(--blue2)'}}
            onMouseLeave={e=>{e.target.style.background='var(--card)';e.target.style.borderColor='var(--border)';e.target.style.color='var(--muted)'}}>{c}</span>)}
        </div>
      </div>
      <style>{`@media(max-width:900px){.proc-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:500px){.proc-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
