'use client '

import React from 'react'
import { Users, Building, GraduationCap, Briefcase } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
    <section id="about" className="container py-12 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">À Propos de Moi</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Développeur web intermédiaire spécialisé dans les technologies React et Next.js.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Mon Parcours</h3>
              <p className="text-muted-foreground">
                Après une formation en développement web, j'ai commencé à me spécialiser dans les technologies frontend
                modernes, particulièrement React et Next.js. J'ai travaillé sur plusieurs projets personnels et
                professionnels qui m'ont permis de développer mes compétences.
              </p>
              <p className="text-muted-foreground">
                Je suis constamment en train d'apprendre et d'améliorer mes compétences techniques. Je m'intéresse
                particulièrement à l'optimisation des performances, à l'accessibilité et aux bonnes pratiques de
                développement.
              </p>
              <h3 className="text-2xl font-semibold mt-6">Ce que je recherche</h3>
              <p className="text-muted-foreground">
                Je suis à la recherche d'opportunités qui me permettront de continuer à développer mes compétences tout
                en contribuant à des projets intéressants. J'apprécie les environnements qui favorisent l'apprentissage
                et la collaboration.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Expérience</CardTitle>
                <CardDescription>Mon parcours professionnel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Développeur Frontend</h4>
                  <p className="text-sm text-muted-foreground">Agence Web • 2022 - Présent</p>
                  <p className="text-sm mt-1">
                    Développement d'interfaces utilisateur avec React et Next.js pour divers clients.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Développeur Web Junior</h4>
                  <p className="text-sm text-muted-foreground">Startup • 2021 - 2022</p>
                  <p className="text-sm mt-1">Maintenance et amélioration du site web de l'entreprise.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Formation</h4>
                  <p className="text-sm text-muted-foreground">École de Développement Web • 2020 - 2021</p>
                  <p className="text-sm mt-1">Formation intensive en développement web fullstack.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
  )
}
