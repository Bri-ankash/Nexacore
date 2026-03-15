export default function About(){
  const skills=['Full-Stack Dev','Django','React / Next.js','Mobile Apps','Cloud Deploy','M-Pesa API']
  return(
    <section id="about" style={{background:'var(--black)'}}>
      <div className="reveal">
        <div className="eyebrow">Who We Are</div>
        <h2 className="sec-title">Built by Builders,<br/>For Builders</h2>
        <p className="sec-sub">A passionate team of developers and designers based in Nairobi, Kenya.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:70,alignItems:'center',marginTop:56}} className="about-grid">
        <div className="reveal" style={{background:'var(--card)',border:'1px solid var(--border2)',borderRadius:20,padding:36,position:'relative',boxShadow:'0 0 80px rgba(14,165,233,0.08)'}}>
          <div style={{position:'absolute',top:0,left:0,right:0,height:2,background:'linear-gradient(90deg,var(--blue),transparent)',borderRadius:'20px 20px 0 0'}}/>
          <img src='https://i.ibb.co/kfwthY9/IMG-20250727-160634-1.jpg' alt='Brian Kalali' style={{width:110,height:110,borderRadius:'50%',objectFit:'cover',objectPosition:'center top',marginBottom:18,border:'3px solid var(--blue)',boxShadow:'0 0 30px rgba(14,165,233,0.3)'}}/>
          <h3 style={{fontFamily:'Urbanist,sans-serif',fontSize:20,fontWeight:800,marginBottom:4}}>Brian Kalali</h3>
          <div style={{color:'var(--blue)',fontSize:13,fontWeight:600,marginBottom:16}}>Founder & Lead Developer</div>
          <p style={{color:'var(--muted)',fontSize:13,lineHeight:1.7,fontWeight:300}}>Self-driven software developer based in Nairobi, Kenya. Passionate about building real-world digital solutions that create opportunities for businesses across Africa.</p>
          <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:18}}>
            {skills.map(s=><span key={s} style={{background:'rgba(14,165,233,0.07)',border:'1px solid var(--border)',color:'var(--blue3)',fontSize:11,padding:'4px 12px',borderRadius:100,fontWeight:500}}>{s}</span>)}
          </div>
        </div>
        <div className="reveal">
          <p style={{color:'var(--muted)',fontSize:15,lineHeight:1.8,fontWeight:300,marginBottom:20}}><strong style={{color:'var(--white)',fontWeight:600}}>Kaliworks Technologies</strong> was founded with one clear mission: to make professional-grade technology accessible to every business in Kenya, regardless of size or budget.</p>
          <p style={{color:'var(--muted)',fontSize:15,lineHeight:1.8,fontWeight:300,marginBottom:20}}>We believe great software should not be a luxury. Small businesses, startups, chamas, schools, and entrepreneurs deserve tools that actually work — and that's exactly what we build.</p>
          <p style={{color:'var(--muted)',fontSize:15,lineHeight:1.8,fontWeight:300,marginBottom:24}}>Every project gets our full attention, from the first conversation to the final launch and beyond. We don't just ship code — we build relationships.</p>
          <div style={{background:'rgba(14,165,233,0.05)',border:'1px solid rgba(14,165,233,0.2)',borderLeft:'3px solid var(--blue)',borderRadius:'0 10px 10px 0',padding:'16px 20px'}}>
            <p style={{color:'var(--muted)',fontSize:13,lineHeight:1.6,margin:0}}><strong style={{color:'var(--blue2)'}}>🤝 Our Commitment:</strong> We are not certified IT consultants. Any guidance provided is based on hands-on experience only and offered as general assistance. Your success is our success.</p>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.about-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
