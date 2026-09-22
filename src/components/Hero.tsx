'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { BiCheckShield } from 'react-icons/bi';
import { appleEase, fadeUp, stagger } from '@/components/motion';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className='relative z-0 min-h-[100svh] overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <motion.div
          className='h-full w-full'
          initial={reduce ? false : { scale: 1.06 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ duration: 1.4, ease: appleEase }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='h-full w-full object-cover'>
            <source
              src='/fridge-bg-optimized.webm'
              type='video/webm'
            />
          </video>
        </motion.div>

        <div className='absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_15%_50%,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.62)_32%,rgba(0,0,0,0.18)_65%,transparent_100%),linear-gradient(to_right,rgba(2,6,23,0.45)_0%,rgba(2,6,23,0.15)_55%,transparent_100%)]' />
      </div>

      <div className='relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl items-center px-5 py-24 sm:px-6 sm:py-28 lg:px-8'>
        <motion.div
          className='max-w-2xl pt-8 sm:pt-12'
          variants={stagger}
          initial={reduce ? false : 'hidden'}
          animate={reduce ? undefined : 'visible'}>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: appleEase }}
            className='mb-5 flex items-center sm:mb-6'>
            <div className='inline-flex max-w-full cursor-default items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-md transition-colors hover:bg-white/20 sm:px-4'>
              <BiCheckShield
                className='shrink-0 text-white'
                size={16}
              />
              <span className='text-[10px] font-semibold tracking-widest text-white uppercase sm:text-[11px]'>
                Trusted by 500+ Homes & Businesses
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.85, ease: appleEase }}
            className='font-horizon text-[2rem] leading-[1.08] font-semibold tracking-tight text-paper sm:text-4xl md:text-5xl lg:text-6xl'>
            Powering homes.
            <br />
            Equipping businesses.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease: appleEase }}
            className='mt-5 max-w-xl text-base leading-7 text-stoned sm:mt-7 sm:text-lg sm:leading-8'>
            Quality appliances, electronics and power solutions from trusted
            brands, backed by a business you can count on.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: appleEase }}
            className='mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4'>
            <Link
              href='/store'
              className='inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200 active:scale-[0.98]'>
              Explore products
            </Link>

            <Link
              href='#contact'
              className='inline-flex items-center justify-center rounded-full border border-white/30 bg-black/20 px-7 py-3.5 text-sm font-medium text-paper backdrop-blur-sm transition hover:bg-white/10 active:scale-[0.98]'>
              Talk to us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
