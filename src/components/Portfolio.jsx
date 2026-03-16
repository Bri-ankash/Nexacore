import { useState } from 'react'

const projects=[
    {
      icon:'🐼',
      bg:'linear-gradient(135deg,#0a2010,#0e3020,#1a4030)',
      cat:'SaaS Platform',
      title:'Smart Pochi',
      desc:'M-Pesa financial intelligence SaaS. Upload statements, analyze income/expenses, track goals, loans, suppliers and more.',
      long:'Smart Pochi is a full financial intelligence platform for Kenyan businesses. Upload your M-Pesa PDF or CSV and get money in/out analysis, profit/loss, health score, tax estimates, cash flow forecasts, loan calculator and invoice generator. Normal KES 1,500/month, Premium KES 3,500/month.',
      tags:['FastAPI','SQLite','Python','M-Pesa'],
      link:'https://smart-pochi.onrender.com',
      status:'live'
    },
  {
    img:'https://i.ibb.co/placeholder/chamanakash.jpg',
    useImg:false,
    icon:'💰',
    bg:'linear-gradient(135deg,#1a0a2e,#2d1b69,#0e2040)',
    cat:'SaaS Platform',
    title:'Chama na Kash',
    desc:'Full chama management SaaS — contributions, loans, meetings, M-Pesa integration, multi-role dashboards.',
    long:'A complete digital solution for chama groups in Kenya. Features include member management, contribution tracking, loan management with approval workflows, meeting scheduling, M-Pesa STK push integration, and role-based dashboards for admins, treasurers and members.',
    tags:['Django','Next.js','PostgreSQL','M-Pesa'],
    link:'https://chamanakash-page.onrender.com',
    status:'live'
  },
  {
    icon:'🏫',
    bg:'linear-gradient(135deg,#052e16,#14532d,#166534)',
    cat:'Management System',
    title:'School Admin Portal',
    desc:'Student records, fee tracking, grading, attendance, and parent communication portal.',
    long:'A comprehensive school management system covering student enrollment, fee collection with M-Pesa integration, grade management, attendance tracking, timetable management, and a parent portal for real-time updates.',
    tags:['React','Node.js','MongoDB'],
    link:null,
    status:'private'
  },
  {
    icon:'🛒',
    bg:'linear-gradient(135deg,#2e1065,#4c1d95,#1e1b4b)',
    cat:'E-Commerce',
    title:'Retail Web Store',
    desc:'Full e-commerce with product catalog, cart, M-Pesa checkout and inventory management.',
    long:'A fully functional e-commerce platform with product catalog, shopping cart, M-Pesa STK push checkout, order management, inventory tracking, and an admin dashboard for product and order management.',
    tags:['Next.js','Django','M-Pesa'],
    link:null,
    status:'private'
  },
  {
    icon:'📊',
    bg:'linear-gradient(135deg,#431407,#7c2d12,#92400e)',
    cat:'Business Dashboard',
    title:'SME Analytics Platform',
    desc:'Real-time analytics dashboard — sales tracking, expense monitoring, automated reporting.',
    long:'A business intelligence dashboard that helps SMEs track sales, monitor expenses, visualize trends and generate automated PDF reports. Integrates with M-Pesa for transaction tracking.',
    tags:['React','Python','PostgreSQL'],
    link:null,
    status:'private'
  },
  {
    icon:'📱',
    bg:'linear-gradient(135deg,#0c1445,#1e3a8a,#1e40af)',
    cat:'Mobile Application',
    title:'Field Agent App',
    desc:'Cross-platform app for field agents with offline sync, document upload, and client records.',
    long:'A React Native mobile app for microfinance field agents. Features offline data sync, client registration, document photo upload, GPS check-ins, loan application forms, and real-time sync when online.',
    tags:['React Native','Offline Sync'],
    link:null,
    status:'private'
  },
  {
    icon:'🏥',
    bg:'linear-gradient(135deg,#042f2e,#134e4a,#115e59)',
    cat:'Healthcare System',
    title:'Clinic Management Portal',
    desc:'Patient records, appointment booking, billing, and prescription tracking.',
    long:'A private clinic management system with patient registration, appointment scheduling, consultation notes, prescription management, billing with M-Pesa integration, and reporting for clinic administrators.',
    tags:['Django','React','Supabase'],
    link:null,
    status:'private'
  },
]

export default function Portfolio(){
  const [selected, setSelected] = useState(null)

  return(
    <section id="portfolio" style={{background:'#030608'}}>
      <div className="reveal">
        <div className="eyebrow">Our Work</div>
        <h2 className="sec-title">Projects We're<br/>Proud Of</h2>
        <p className="sec-sub">Click any project to see full details. Some projects are under NDA.</p>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:56}} className="port-grid">
        {projects.map((p)=>(
          <div key={p.title} className="reveal" onClick={()=>setSelected(p)}
            style={{background:'#0a1220',border:'1px solid rgba(14,165,233,0.12)',borderRadius:16,overflow:'hidden',cursor:'pointer',transition:'all 0.3s'}}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.borderColor='#0ea5e9';e.currentTarget.style.boxShadow='0 20px 40px rgba(14,165,233,0.1)'}}
            onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.borderColor='rgba(14,165,233,0.12)';e.currentTarget.style.boxShadow='none'}}>
            
            {/* CARD HEADER */}
            <div style={{height:160,background:p.bg,display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden'}}>
              {/* Decorative circles */}
              <div style={{position:'absolute',width:120,height:120,borderRadius:'50%',background:'rgba(255,255,255,0.03)',top:-20,right:-20}}/>
              <div style={{position:'absolute',width:80,height:80,borderRadius:'50%',background:'rgba(255,255,255,0.03)',bottom:-10,left:10}}/>
              <span style={{fontSize:52,position:'relative',zIndex:1}}>{p.icon}</span>
              <div style={{position:'absolute',bottom:10,right:10,display:'flex',gap:6,alignItems:'center'}}>
                {p.status==='live' ? (
                  <span style={{background:'rgba(34,197,94,0.2)',border:'1px solid rgba(34,197,94,0.4)',color:'#4ade80',fontSize:10,fontWeight:700,padding:'3px 10px',borderRadius:100}}>● LIVE</span>
                ):(
                  <span style={{background:'rgba(14,165,233,0.15)',border:'1px solid rgba(14,165,233,0.3)',color:'#38bdf8',fontSize:10,fontWeight:700,padding:'3px 10px',borderRadius:100}}>🔒 PRIVATE</span>
                )}
              </div>
            </div>

            {/* CARD BODY */}
            <div style={{padding:20}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',color:'#0ea5e9',marginBottom:6}}>{p.cat}</div>
              <h3 style={{fontFamily:'Urbanist,sans-serif',fontSize:16,fontWeight:700,marginBottom:6,color:'#e8f4ff'}}>{p.title}</h3>
              <p style={{color:'#7a99bb',fontSize:12,lineHeight:1.65,marginBottom:12}}>{p.desc}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                {p.tags.map(t=><span key={t} style={{background:'rgba(14,165,233,0.07)',color:'#7a99bb',fontSize:10,padding:'3px 10px',borderRadius:100}}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div onClick={()=>setSelected(null)}
          style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.85)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center',padding:20,backdropFilter:'blur(8px)'}}>
          <div onClick={e=>e.stopPropagation()}
            style={{background:'#0f172a',border:'1px solid #0ea5e9',borderRadius:24,maxWidth:600,width:'100%',overflow:'hidden',boxShadow:'0 40px 80px rgba(14,165,233,0.2)',maxHeight:'90vh',overflowY:'auto'}}>
            <div style={{height:200,display:'flex',alignItems:'center',justifyContent:'center',fontSize:72,background:selected.bg,position:'relative'}}>
              <div style={{position:'absolute',width:200,height:200,borderRadius:'50%',background:'rgba(255,255,255,0.03)',top:-50,right:-50}}/>
              <span style={{position:'relative',zIndex:1}}>{selected.icon}</span>
              <button onClick={()=>setSelected(null)}
                style={{position:'absolute',top:16,right:16,background:'rgba(0,0,0,0.5)',border:'1px solid rgba(255,255,255,0.2)',borderRadius:'50%',width:36,height:36,color:'#fff',fontSize:18,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',zIndex:2}}>×</button>
              {selected.status==='live'?(
                <span style={{position:'absolute',bottom:16,left:16,background:'rgba(34,197,94,0.2)',border:'1px solid rgba(34,197,94,0.4)',color:'#4ade80',fontSize:11,fontWeight:700,padding:'4px 12px',borderRadius:100}}>● LIVE PROJECT</span>
              ):(
                <span style={{position:'absolute',bottom:16,left:16,background:'rgba(14,165,233,0.15)',border:'1px solid rgba(14,165,233,0.3)',color:'#38bdf8',fontSize:11,fontWeight:700,padding:'4px 12px',borderRadius:100}}>🔒 PRIVATE CLIENT PROJECT</span>
              )}
            </div>
            <div style={{padding:32}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',color:'#0ea5e9',marginBottom:8}}>{selected.cat}</div>
              <h2 style={{fontFamily:'Urbanist,sans-serif',fontSize:26,fontWeight:800,marginBottom:16,color:'#e8f4ff'}}>{selected.title}</h2>
              <p style={{color:'#94a3b8',fontSize:14,lineHeight:1.8,marginBottom:20}}>{selected.long}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:24}}>
                {selected.tags.map(t=><span key={t} style={{background:'rgba(14,165,233,0.1)',border:'1px solid rgba(14,165,233,0.2)',color:'#38bdf8',fontSize:12,padding:'5px 14px',borderRadius:100,fontWeight:600}}>{t}</span>)}
              </div>
              <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
                {selected.link && (
                  <a href={selected.link} target="_blank"
                    style={{background:'#0ea5e9',color:'#000',padding:'11px 24px',borderRadius:10,fontWeight:700,fontSize:14,textDecoration:'none'}}>
                    🔗 View Live Project
                  </a>
                )}
                {!selected.link && (
                  <a href="#contact"
                    onClick={()=>setSelected(null)}
                    style={{background:'rgba(14,165,233,0.1)',border:'1px solid rgba(14,165,233,0.3)',color:'#38bdf8',padding:'11px 24px',borderRadius:10,fontWeight:600,fontSize:14,textDecoration:'none'}}>
                    💬 Want something similar?
                  </a>
                )}
                <button onClick={()=>setSelected(null)}
                  style={{background:'transparent',border:'1px solid rgba(14,165,233,0.2)',color:'#3a5270',padding:'11px 24px',borderRadius:10,fontWeight:600,fontSize:14,cursor:'pointer'}}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`@media(max-width:900px){.port-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:500px){.port-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
