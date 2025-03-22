'use client '

import React from 'react'
import { Users, Building, GraduationCap, Briefcase } from 'lucide-react'

const stats = [
  {
    icon: <Users className='h-8 w-8' />,
    value: '150 000+',
    label: 'Apprenants Formés'
  },
  {
    icon: <Building className='h-8 w-8' />,
    value: '50+',
    label: 'Centres de Formation Publique'
  },
  {
    icon: <Building className='h-8 w-8' />,
    value: '600+',
    label: 'Centres de Formation Privé'
  },
  {
    icon: <GraduationCap className='h-8 w-8' />,
    value: '95%',
    label: 'Taux de Réussite'
  },
  {
    icon: <Briefcase className='h-8 w-8' />,
    value: '80%',
    label: "Taux d'Insertion"
  }
]

export default function About() {
  return (
    <section id='apropos' className='bg-[#1C2E82] py-16 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-5'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='flex flex-col items-center rounded-lg p-6 text-center transition-colors duration-300 hover:bg-[#2a3d91]'
            >
              <div className='mb-4 text-[#F77F00]'>{stat.icon}</div>
              <div className='mb-2 text-4xl font-bold'>{stat.value}</div>
              <div className='text-gray-200'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
