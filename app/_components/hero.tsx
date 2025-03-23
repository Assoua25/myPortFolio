'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Badge } from 'lucide-react'
// import { scrollToElement } from '@/lib/utils'

export function Hero() {
  

  return (
    <div className='from-primary/5 to-secondary/5 mb-20 mt-10 bg-gradient-to-br pb-16 pt-16'>
      <section className="container py-12 md:py-24 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Disponible pour des opportunités</Badge>
                <h1 className="text-3xl md:text-5xl font-bold">
                  Développeur <span className="text-primary">Next.js</span> Intermédiaire
                </h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Passionné par la création d'applications web modernes et performantes avec React et Next.js.
              </p>
              <div className="flex gap-4">
                <Link href="#projects">
                  <Button size="lg">
                    Voir mes projets
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button size="lg" variant="outline">
                    Me contacter
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-full overflow-hidden border aspect-square bg-muted max-w-[300px] mx-auto">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Portrait du développeur"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
    </div>
  )
}
