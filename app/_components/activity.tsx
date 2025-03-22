import React from 'react'
import { ChevronRight, Briefcase, Building2Icon, BuildingIcon } from 'lucide-react'
import {
  ArrowPathRoundedSquareIcon,
  BellAlertIcon,
  ScaleIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { AcademicCapIcon, ClipboardDocumentIcon } from '@heroicons/react/20/solid'

const activity = [
  {
    icon: <BuildingIcon className='h-8 w-8' />,
    title: 'Inscription en ligne 2024-2025',
    duration: 'Fermé',
    description:
      "Démarrer vos formalités d'inscription dans les filières de l'ETFP.",
    href: 'https://onlinereg.ersys-ci.net/'
  },
  {
    icon: <Building2Icon className='h-8 w-8' />,
    title: 'Inscription des candidats libres',
    duration: 'Fermé',
    description: "Démarrer votre inscription pour l'examen professionnel",
    href: 'https://candidatlibre.ersys-ci.net'
  },
  {
    icon: <ClipboardDocumentIcon className='h-8 w-8' />,
    title: "Demande d'orientation BT et BAC 2025 (élèves en 3è)",
    duration: 'Démarre bientôt',
    description:
      "Formuler vos voeux d'orientation dans les filières de l'ETFP après la classe de troisième (OAT).",
    href: '#'
  },
  // academic-cap clipboard-document-list
  {
    icon: <AcademicCapIcon className='h-8 w-8' />,
    title: "Concours d'entrée dans les filières professionnelles",
    duration: 'A venir',
    description:
      "Intégrer les filières de formation professionnelle grâce au concours d'entrée.",
    href: '#'
  }
]

export function Activity() {
  return (
    <section id='activity' className='bg-white py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-12 text-center text-3xl font-bold text-[#1C2E82]'>
          Nos activités en cours
        </h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {activity.map((program, index) => (
            <Link
            href={program.href}
            onClick={e => program.href === '#' && e.preventDefault()}
            className="block" // Permet de rendre la div entière cliquable
          >
            <div
              key={index}
              className='rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-shadow hover:shadow-2xl'
            >
              <div className='mb-4 text-[#F77F00]'>{program.icon}</div>
              <h3 className='mb-2 text-2xl font-semibold text-[#1C2E82]'>
                {program.title}
              </h3>
              <p className='mb-4 text-sm text-gray-600'>
                {program.description}
              </p>
              {/* <Link href={program.href} onClick={e => program.href === '#' && e.preventDefault()}> */}
              <div className='flex items-center justify-between'>
                {program.duration === 'Fermé' ? (
                  <span className='text-sm font-medium text-red-600'>
                    {program.duration}
                  </span>
                ) : program.duration === 'Démarre bientôt' ? (
                  <span className='text-sm font-medium text-gray-600'>
                    {program.duration}
                  </span>
                ) : (
                  <span className='text-sm font-medium text-green-600'>
                    {program.duration}
                  </span>
                )}
                <Link
                  href={program.href}
                  className='flex items-center gap-1 text-sm text-[#F77F00] transition-colors hover:text-[#E06700]'
                  onClick={e => program.href === '#' && e.preventDefault()}
                >
                  Commencer
                  <ChevronRight className='h-4 w-4' />
                </Link>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
