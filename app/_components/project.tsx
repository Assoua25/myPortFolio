import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div>
       <section id="projects" className="container py-12 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Mes Projets</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Une sélection de mes projets personnels et professionnels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Application de Gestion de Tâches",
                description:
                  "Application permettant de créer, organiser et suivre des tâches avec authentification et stockage en base de données.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["Next.js", "Prisma", "Tailwind CSS", "NextAuth"],
                github: "https://github.com",
                demo: "https://demo.com",
              },
              {
                title: "Blog Personnel",
                description:
                  "Blog avec système de gestion de contenu, commentaires et partage sur les réseaux sociaux.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["Next.js", "MDX", "Tailwind CSS"],
                github: "https://github.com",
                demo: "https://demo.com",
              },
              {
                title: "Dashboard Analytics",
                description: "Interface d'administration avec visualisation de données et statistiques en temps réel.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["React", "Chart.js", "API REST"],
                github: "https://github.com",
                demo: "https://demo.com",
              },
              {
                title: "E-commerce (en cours)",
                description: "Boutique en ligne avec catalogue de produits, panier et paiement sécurisé.",
                image: "/placeholder.svg?height=400&width=600",
                tags: ["Next.js", "Stripe", "MongoDB"],
                github: "https://github.com",
                demo: null,
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                  {project.demo && (
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Démo
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                Voir plus sur GitHub
                <Github className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
    </div>
  )
}

export default Project
