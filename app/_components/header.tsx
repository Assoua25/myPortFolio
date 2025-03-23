'use client'

import { Button } from '@/components/ui/button'
import { Code, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const navigation = [
  {
    name: 'Contacts: +225 27 20 27 85 33 | Email: support@ersys-ci.net',
    composant: 'activity'
  }
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Code className="h-5 w-5" />
            <span>DevPortfolio</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              À propos
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Compétences
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projets
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="#contact">
              <Button>Contact</Button>
            </Link>
          </div>
        </div>
      </header>
  )
}
