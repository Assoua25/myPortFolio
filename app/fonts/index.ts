import localFont from 'next/font/local'

export const spaceGrotesk = localFont({
  src: [
    {
      path: './space/SpaceGrotesk-Light.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: './space/SpaceGrotesk-Regular.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './space/SpaceGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './space/SpaceGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-space-grotesk'
})

export const chillax = localFont({
  src: [
    {
      path: './chillax/Chillax-Light.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: './chillax/Chillax-Regular.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './chillax/Chillax-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './chillax/Chillax-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-chillax'
})

export const clashDisplay = localFont({
  src: [
    {
      path: './display/ClashDisplay-Light.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: './display/ClashDisplay-Regular.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './display/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './display/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-clash-display'
})
