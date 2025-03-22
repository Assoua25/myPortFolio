import Link from 'next/link'
// import { headers } from 'next/headers'
import Image from 'next/image'
// import { Button } from '@/components/ui/button'

export default async function NotFound() {
  // const headersList = await headers()
  // const domain = headersList.get('host')

  return (
    <div className='flex h-screen flex-col items-center justify-center gap-1'>
      <Image
        src='/errors/404.svg'
        width={300}
        height={300}
        alt='Not authorized'
        className='mb-[4rem]'
      />
      <h2 className='font-medium'>Resource non trouvé</h2>
      <p className='text-[1rem]'>
        Impossible de trouver la ressource ou la page demandée
      </p>

      {/* <Button type='button' className='mt-8'>
        <Link href='/'>Retournez-vous</Link>
      </Button> */}
    </div>
  )
}
