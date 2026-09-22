'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CATEGORIES } from '@/data/site';
import { GENERAL_ENQUIRY } from '@/lib/whatsapp';
import { WaButton } from './wa-button';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className='sticky top-0 z-40 border-b backdrop-blur'
        style={{
          borderColor: 'var(--stone)',
          background: 'color-mix(in srgb, var(--paper) 88%, transparent)',
        }}>
        <div className='mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5'>
          <Link
            href='/'
            className='display text-[19px] font-semibold leading-none'>
            Chisco
            <span
              className='block text-[11px] font-normal tracking-normal'
              style={{ color: 'var(--ink-soft)' }}>
              Electronics and Household Plaza
            </span>
          </Link>

          <nav className='hidden items-center gap-7 text-[15px] md:flex'>
            <Link
              href='/shop/televisions'
              className='hover:underline'>
              Shop
            </Link>
            <Link
              href='/corporate'
              className='hover:underline'>
              Corporate supply
            </Link>
            <Link
              href='/#showroom'
              className='hover:underline'>
              Visit us
            </Link>
          </nav>

          <div className='hidden items-center gap-3 md:flex'>
            <Link
              href='/corporate'
              className='rounded border px-4 py-2 text-[15px] font-medium'
              style={{ borderColor: 'var(--brass)', color: 'var(--brass)' }}>
              Request a bulk quote
            </Link>
            <WaButton message={GENERAL_ENQUIRY}>Chat on WhatsApp</WaButton>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className='md:hidden'
            aria-expanded={open}
            aria-label='Menu'>
            <span className='display text-[15px] font-medium'>
              {open ? 'Close' : 'Menu'}
            </span>
          </button>
        </div>

        {open && (
          <div
            className='border-t px-5 py-4 md:hidden'
            style={{ borderColor: 'var(--stone)' }}>
            <ul className='space-y-3'>
              {CATEGORIES.map((c: any) => (
                <li key={c.slug}>
                  <Link
                    href={`/shop/${c.slug}`}
                    onClick={() => setOpen(false)}
                    className='text-[16px]'>
                    {c.name}
                  </Link>
                </li>
              ))}
              <li className='pt-2'>
                <Link
                  href='/corporate'
                  onClick={() => setOpen(false)}
                  className='font-medium'
                  style={{ color: 'var(--brass)' }}>
                  Request a bulk quote
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Mobile dock. The showroom lives on WhatsApp, so the button never leaves the screen. */}
      <div
        className='fixed inset-x-0 bottom-0 z-40 border-t p-3 md:hidden'
        style={{ borderColor: 'var(--stone)', background: 'var(--paper)' }}>
        <WaButton
          message={GENERAL_ENQUIRY}
          size='lg'
          className='w-full justify-center'>
          Chat with a showroom rep
        </WaButton>
      </div>
    </>
  );
}
