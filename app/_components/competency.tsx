import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import React from 'react'

const Competency = () => {
  return (
    <div>
        <section id="skills" className="bg-muted py-12">
          <div className="container space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Mes Compétences</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Technologies et outils que j'utilise régulièrement dans mes projets.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend</CardTitle>
                  <CardDescription>Technologies d'interface utilisateur</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "JavaScript",
                      "TypeScript",
                      "HTML5",
                      "CSS3",
                      "Tailwind CSS",
                      "Responsive Design",
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Backend & Données</CardTitle>
                  <CardDescription>Technologies serveur et bases de données</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express", "API REST", "MongoDB", "PostgreSQL", "Prisma", "Authentification"].map(
                      (skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Outils & Méthodes</CardTitle>
                  <CardDescription>Environnement de développement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "VS Code", "Vercel", "Jest", "ESLint", "Figma", "Agile"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Competency
