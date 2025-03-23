import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div>
       <section id="contact" className="container py-12 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Me Contacter</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter de vos projets.
            </p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Formulaire de Contact</CardTitle>
              <CardDescription>Je vous répondrai dans les plus brefs délais</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom
                    </label>
                    <input
                      id="name"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Votre email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Sujet
                  </label>
                  <input
                    id="subject"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Votre message..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Envoyer
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="flex justify-center gap-8 mt-8">
            <Link href="mailto:contact@exemple.fr" className="flex flex-col items-center">
              <Button variant="outline" size="icon" className="rounded-full mb-2">
                <Mail className="h-5 w-5" />
              </Button>
              <span className="text-sm">contact@exemple.fr</span>
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <Button variant="outline" size="icon" className="rounded-full mb-2">
                <Github className="h-5 w-5" />
              </Button>
              <span className="text-sm">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <Button variant="outline" size="icon" className="rounded-full mb-2">
                <Linkedin className="h-5 w-5" />
              </Button>
              <span className="text-sm">LinkedIn</span>
            </Link>
          </div>
        </section>
    </div>
  )
}

export default Contact
