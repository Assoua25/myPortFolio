'use client'

import { useEffect } from 'react'
// import Header from "./_components/header"
// import { Footer } from "./_components/footer"
// import { Hero } from './_components/hero'
// import { Activity } from './_components/activity'
import About from './app/_components/about'
import Banner from './app/_components/banner'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import { Hero } from './_components/hero'
import Header from './app/_components/header'
import { Activity } from './app/_components/activity'
import { Footer } from './app/_components/footer'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: true
    })
  }, [])

  return (
    //   <div className='flex min-h-screen flex-col'>
    //     {/* Background decoration */}
    //     <div className='fixed inset-0 z-0'>
    //       <div className='absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl' />
    //       <div className='absolute -left-48 top-1/2 h-96 w-96 rounded-full bg-secondary/5 blur-3xl' />
    //       <div className='absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl' />
    //     </div>

    //     {/* Main content */}
    //     <div className='relative z-10 flex-1'>
    //       <div className='fixed left-0 right-0 top-0 z-50 bg-white'>
    //         <Banner />
    //       </div>
    //       <div className='mt-10 bg-white'>
    //         <Header />
    //       </div>

    //       <main className='mt-16'>
    //         {/* Hero Section */}
    //         <div data-aos='fade-up' className='mb-24'>
    //           <Hero />
    //         </div>

    //         {/* Activity Section */}
    //         <div data-aos='fade-up' data-aos-delay='100' className='mb-24'>
    //           <Activity />
    //         </div>

    //         {/* About Section */}
    //         <div data-aos='fade-up' data-aos-delay='200' className='mb-24'>
    //           <About />
    //         </div>
    //       </main>
    //     </div>

    //     {/* Footer */}
    //     <footer className='relative z-10 mt-auto'>
    //       <div data-aos='fade-up' data-aos-delay='300'>
    //         <Footer />
    //       </div>
    //     </footer>

    //     {/* Scroll Indicator */}
    //     <div className='fixed bottom-8 right-8 z-50'>
    //       <button
    //         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    //         className='rounded-full bg-primary/90 p-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary'
    //       >
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           className='h-6 w-6'
    //           fill='none'
    //           viewBox='0 0 24 24'
    //           stroke='currentColor'
    //         >
    //           <path
    //             strokeLinecap='round'
    //             strokeLinejoin='round'
    //             strokeWidth={2}
    //             d='M5 10l7-7m0 0l7 7m-7-7v18'
    //           />
    //         </svg>
    //       </button>
    // return (
    //   <div className='min-h-screen bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,216,201,0.15)_65%,rgba(254,162,126,0.3)_99.99%)]'>
    //     {/* // <div className='flex flex-col gap-4 p-[10rem]'>
    //   //   Bienvenue ERSYS admin space
    //   //   <Input placeholder='Email' />
    //   //   <Button variant='outline'>Se connecter</Button>
    //   //   <Button>S{"'"}enregistrer</Button>
    //   // </div> */}

    <div className='min-h-screen bg-[linear-gradient(180deg,rgba(254,190,164,0.3)_0%,rgba(255,216,201,0.15)_34.5%,rgba(254,201,180,0.15)_68%,rgba(254,162,126,0.3)_99.99%)]'>
      <Banner />
      <Header />
      <About />
      <Activity />
      <Footer />
    </div>
    // </div>
  )
}
