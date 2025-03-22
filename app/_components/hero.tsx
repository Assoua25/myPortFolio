'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
// import { scrollToElement } from '@/lib/utils'

export function Hero() {
  // Tableau des images à afficher
  const images = [
    '/LOGO_ACT-removebg-preview.png',
    '/work1.png',
    '/work2.png',
    '/work3.png',
    '/work4.png'
  ]

  // État pour suivre l'index de l'image actuellement affichée
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Utiliser useEffect pour changer l'image toutes les 5 secondes
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 5000) // 5000 ms = 10 secondes

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId)
  }, [])

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className='from-primary/5 to-secondary/5 mb-20 mt-10 bg-gradient-to-br pb-16 pt-16'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center gap-12 md:flex-row'>
          <div className='flex-1 space-y-6'>
            <h1 className='text-4xl font-bold leading-tight text-gray-900 md:text-5xl'>
              <a href='#' className='-m-1.5 p-1.5'>
                <Image
                  alt='ERSYS'
                  src='/LOGO_ERSYS_PRIMARY.png'
                  width={1500}
                  height={789}
                  className='h-[50%] w-[50%]'
                />
              </a>
              Bienvenue sur <span className='text-primary'>ERSYS</span>
            </h1>
            <p className='text-xl text-gray-600'>
              Plateforme des services dématérialisés du ministère de l{`'`}
              Enseignement Technique, de La Formation Professionnelle et de l
              {`'`}Apprentissage.
            </p>
            <div className='flex flex-wrap gap-4'>
              <button
                className='rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-dark'
                onClick={() => scrollToElement('activity')}
              >
                Explorer nos services en ligne
              </button>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:bg-secondary/5 rounded-lg border-2 border-secondary px-6 py-3 text-secondary transition-colors'
              >
                Calendrier des activités
              </a>
            </div>
          </div>
          <div className='max-w-lg flex-1'>
            <div className='aspect-square w-full transition-opacity'>
              <Image
                alt='ERSYS'
                src={images[currentImageIndex]} // Affiche l'image actuelle
                width={1499}
                height={1469}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
