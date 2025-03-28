'use client'

import { useEffect } from 'react'
// import Banner from './_components/banner'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Footer } from './_components/footer'
// import About from './_components/about'
import { Hero } from './_components/hero'
import Header from './_components/header'
import About from './_components/about'
import Competency from './_components/competency'
import Project from './_components/project'
import { Contact } from 'lucide-react'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: true
    })
  }, [])

  return (
    <div className='min-h-screen bg-[linear-gradient(180deg,rgba(254,190,164,0.3)_0%,rgba(255,216,201,0.15)_34.5%,rgba(254,201,180,0.15)_68%,rgba(254,162,126,0.3)_99.99%)]'>
      <Header />
      <Hero />
      <About />
      <Competency />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}
