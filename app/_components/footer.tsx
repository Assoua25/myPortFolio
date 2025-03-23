import React from 'react'
import { Mail, Phone, Globe, Code, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex items-center gap-2 font-bold">
            <Code className="h-5 w-5" />
            <span>DevPortfolio</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Votre Nom. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
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
          </div>
        </div>
      </footer>
  )
}
