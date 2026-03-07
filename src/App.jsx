import { useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'
import CookieBanner from './components/CookieBanner'

export default function App(){
  useEffect(()=>{
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry,i)=>{
        if(entry.isIntersecting) setTimeout(()=>entry.target.classList.add('visible'),i*60)
      })
    },{ threshold:0.07 })
    reveals.forEach(el=>observer.observe(el))
    return ()=>observer.disconnect()
  },[])

  return(
    <>
      <Loader/>
      <Navbar/>
      <Hero/>
      <Stats/>
      <Services/>
      <About/>
      <Portfolio/>
      <Pricing/>
      <Process/>
      <FAQ/>
      <Contact/>
      <Footer/>
      <WhatsApp/>
      <CookieBanner/>
    </>
  )
}
