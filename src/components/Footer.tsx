'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/motion';
import logo from '@/assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id='contact'
      className='bg-ink px-5 py-12 sm:px-6 sm:py-16 lg:px-8'>
      <Reveal
        className='mx-auto flex max-w-6xl flex-col gap-12 sm:gap-16'
        y={12}>
        <div className='flex flex-col items-start justify-between gap-8 md:flex-row md:items-end'>
          <Link
            href='/'
            aria-label='Home'>
            <Image
              src={logo}
              alt='Chisco Electronics'
              width={180}
              className='h-auto w-36 invert transition-opacity hover:opacity-80 sm:w-[200px]'
            />
          </Link>

          <div className='flex flex-wrap gap-6 text-sm font-medium tracking-wide text-stoned sm:gap-8'>
            <Link
              href='/store'
              className='transition-colors hover:text-white/60'>
              Store
            </Link>
            <Link
              href='/about'
              className='transition-colors hover:text-white/60'>
              About
            </Link>
          </div>
        </div>

        <div className='h-px w-full bg-white/10' />

        <div className='flex flex-col-reverse items-start justify-between gap-6 text-xs text-white/40 md:flex-row md:items-center'>
          <p>&copy; {currentYear} Chisco Electronics. All rights reserved.</p>

          <div className='flex flex-wrap gap-4 sm:gap-6'>
            <Link
              href='/privacy-policy'
              className='transition-colors hover:text-white/80'>
              Privacy Policy
            </Link>
            <Link
              href='/terms-and-conditions'
              className='transition-colors hover:text-white/80'>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
