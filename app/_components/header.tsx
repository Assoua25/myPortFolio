'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const navigation = [
  {
    name: 'Contacts: +225 27 20 27 85 33 | Email: support@ersys-ci.net',
    composant: 'activity'
  }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleLoginClick = () => {
    window.location.href = 'https://admin.ersys-ci.net/login';
  }

  return (
    <header className='border-b border-inherit bg-white'>
      <nav
        aria-label='Global'
        className='mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-4 lg:px-8'
      >
        <div className='flex lg:flex-1' style={{ marginLeft: '-1.5rem' }}>
          <a href='#' className='-m-1.5 p-1.5'>
            {/* <span className="sr-only">Your Company</span>  */}
            <Image
              alt='ERSYS'
              src='/LOGOMETFPA.png'
              width={1500}
              height={789}
              className='h-24 w-auto'
            />
          </a>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map(item => (
            <a
              key={item.name}
              href='#'
              className='text-sm/6 text-gray-900 hover:text-[#F77F00] hover:underline hover:underline-offset-2'
              // onClick={() => scrollToElement(item.composant)}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className='flex flex-1 items-center justify-end gap-x-6'>
          <Link
            href='https://admin.ersys-ci.net/login'
            onClick={e => {
              e.preventDefault()
              handleLoginClick()
            }}
            className='hover:bg-[#1C2E82]-dark rounded-md bg-[#1C2E82] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Espace administrateur
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='size-6' />
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center gap-x-6'>
            <a href='#' className='-m-1.5 p-1.5'>
              {/* <span className="sr-only">Your Company</span> */}
              <Image
                alt='ERSYS'
                src='/LOGO_ERSYS_PRIMARY.png'
                width={1500}
                height={789}
                className='h-8 w-auto'
              />
            </a>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='size-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href='#'
                    // onClick={() => scrollToElement(item.composant)}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  onClick={e => {
                    e.preventDefault()
                    handleLoginClick()
                  }}
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                >
                  Espace administrateur
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
