import React from 'react'
import { Mail, Phone, Globe } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer id='contact' className='bg-[#1C2E82] text-gray-300'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-10 md:grid-cols-2'>
          {/* Logo and brand section */}
          <div className='flex flex-col space-y-4'>
            <a
              href='#'
              className='inline-block transition-transform hover:scale-105'
            >
              <Image
                alt='ERSYS'
                src='/LOGO_ERSYS-WHITE.png'
                width={1500}
                height={789}
                className='h-auto w-[180px]'
              />
            </a>
            <p className='mt-4 max-w-md text-sm leading-relaxed'>
              {/* ERSYS est la plateforme officielle de gestion des services numériques liés à l'éducation et la formation professionnelle. */}
            </p>
          </div>

          {/* Contact information section with icons */}
          <div className='flex flex-col space-y-6'>
            <h4 className='mb-2 text-xl font-semibold text-white'>Contact</h4>
            <div className='space-y-4'>
              {/* <div className='flex items-center space-x-3'>
                <MapPin className='h-5 w-5 text-[#F77F00]' />
                <span className='text-sm'>Abidjan, Côte d&apos;Ivoire</span>
              </div> */}
              <div className='flex items-center space-x-3'>
                <Mail className='h-5 w-5 text-[#F77F00]' />
                <span className='text-sm'>support@ersys-ci.net</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone className='h-5 w-5 text-[#F77F00]' />
                <span className='text-sm'>+225 27 20 27 85 33</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Globe className='h-5 w-5 text-[#F77F00]' />
                <span className='text-sm'>www.ersys-ci.net</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section with subtle animation on hover */}
        <div className='mt-10 flex flex-col items-center justify-center gap-4 border-t border-gray-700 pt-8 md:flex-row md:justify-center'>
          <div className='group text-center text-sm transition-all'>
            <span className='inline-flex items-center'>
              &copy; 2025 METFPA. Tous droits réservés.
              {/* <Heart className='ml-2 h-4 w-4 text-gray-500 transition-colors group-hover:text-[#F77F00]' /> */}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
