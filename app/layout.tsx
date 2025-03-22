import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'
import { chillax, spaceGrotesk, clashDisplay } from '@/app/fonts'
import ClientWrapper from './_components/client-wrapper'
import { Toaster } from 'sonner'
// import Loader from '@/components/shared/loader'
// import { Suspense } from 'react'
// import { ErrorBoundary } from 'react-error-boundary'
// import Fallback from '@/components/shared/fallback'

export const metadata: Metadata = {
  title: 'ERSYS'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fr' className='h-full'>
      <body
        className={`${clashDisplay.variable} ${chillax.variable} ${spaceGrotesk.variable}`}
        suppressHydrationWarning
      >
        {/* <ErrorBoundary fallback={<Fallback />}> */}
          {/* <Suspense fallback={<Loader />}> */}
            <ClientWrapper>
              <Providers>{children}</Providers>
              <Toaster closeButton richColors position='top-center' />
            </ClientWrapper>
          {/* </Suspense> */}
        {/* </ErrorBoundary> */}
      </body>
    </html>
  )
}
