export default function Services(){
  const svcs=[
    {n:'01',icon:'🌐',title:'Web Development',desc:'Beautiful, fast, SEO-optimized websites. Landing pages, corporate sites, e-commerce — built to convert and impress.',price:'From KES 8,000',tag:'React · Next.js · HTML/CSS'},
    {n:'02',icon:'📱',title:'Mobile Applications',desc:'Cross-platform mobile apps for iOS and Android. Sleek UX, fast performance, built to scale.',price:'From KES 25,000',tag:'React Native · Flutter'},
    {n:'03',icon:'🏗️',title:'SaaS Platforms',desc:'Full-stack SaaS products from scratch — subscriptions, dashboards, APIs, authentication, billing all included.',price:'From KES 35,000',tag:'Django · Node.js · PostgreSQL'},
    {n:'04',icon:'📟',title:'USSD Applications',desc:'*123# menu systems for saccos, chamas and businesses. Works on any phone, no internet needed.',price:'From KES 15,000',tag:"Africa's Talking API"},
    {n:'05',icon:'💚',title:'M-Pesa Integration',desc:'STK Push, C2B, B2C, Paybill & Till number. Full Daraja API setup for your website or app.',price:'From KES 8,000',tag:'Daraja API · Safaricom'},
    {n:'06',icon:'💬',title:'WhatsApp Bots',desc:'Automated WhatsApp bots for businesses. Auto-replies, order taking, customer support 24/7.',price:'From KES 10,000',tag:'Meta API · Twilio'},
    {n:'07',icon:'📨',title:'Bulk SMS Systems',desc:'SMS blasting for schools, churches, saccos. Schedule, personalize and track delivery.',price:'From KES 8,000',tag:"Africa's Talking · SMS"},
    {n:'08',icon:'📦',title:'Inventory Systems',desc:'Stock management for shops and businesses. Track products, sales, suppliers and low-stock alerts.',price:'From KES 15,000',tag:'Django · React'},
    {n:'09',icon:'🏫',title:'School · Hospital · Church Systems',desc:'Custom management portals for institutions. Fees, records, appointments, member management.',price:'From KES 20,000',tag:'Custom Built · Django'},
    {n:'10',icon:'💰',title:'Payroll Systems',desc:'Salary calculations, deductions, payslips for SMEs, NGOs and schools. NHIF & NSSF ready.',price:'From KES 20,000',tag:'Django · PDF · React'},
  ]
  return(
    <section id="services" style={{background:'var(--deep)'}}>
      <div className="reveal">
        <div className="eyebrow">What We Do</div>
        <h2 className="sec-title">10 Ways We Build<br/>Your Digital Future</h2>
        <p className="sec-sub">From simple websites to complex SaaS platforms — complete digital solutions built for Kenya and beyond.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:1,background:'var(--border)',marginTop:56}} className="svc-grid">
        {svcs.map(s=>(
          <div key={s.n} className="reveal" style={{background:'var(--card)',padding:'32px 24px',position:'relative',overflow:'hidden',transition:'all 0.3s',cursor:'default'}}
            onMouseEnter={e=>{e.currentTarget.style.background='var(--card2)';e.currentTarget.style.transform='translateY(-4px)'}}
            onMouseLeave={e=>{e.currentTarget.style.background='var(--card)';e.currentTarget.style.transform='translateY(0)'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:'linear-gradient(90deg,var(--blue),transparent)',opacity:0,transition:'opacity 0.3s'}}
              onMouseEnter={e=>e.target.style.opacity=1}
              onMouseLeave={e=>e.target.style.opacity=0}/>
            <span style={{fontFamily:'Urbanist,sans-serif',fontSize:48,fontWeight:800,color:'rgba(14,165,233,0.05)',letterSpacing:'-3px',lineHeight:1,marginBottom:16,display:'block'}}>{s.n}</span>
            <span style={{fontSize:28,marginBottom:14,display:'block'}}>{s.icon}</span>
            <h3 style={{fontFamily:'Urbanist,sans-serif',fontSize:15,fontWeight:700,marginBottom:8,lineHeight:1.3}}>{s.title}</h3>
            <p style={{color:'var(--muted)',fontSize:12,lineHeight:1.7,fontWeight:300,marginBottom:12}}>{s.desc}</p>
            <span style={{display:'inline-block',background:'rgba(14,165,233,0.08)',border:'1px solid rgba(14,165,233,0.18)',color:'var(--blue2)',fontSize:11,padding:'3px 10px',borderRadius:100,fontWeight:600}}>{s.price}</span><br/>
            <span style={{display:'inline-block',marginTop:6,background:'rgba(14,165,233,0.04)',color:'var(--faint)',fontSize:10,padding:'2px 8px',borderRadius:100,fontWeight:500}}>{s.tag}</span>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:1200px){.svc-grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:768px){.svc-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:480px){.svc-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  )
}
