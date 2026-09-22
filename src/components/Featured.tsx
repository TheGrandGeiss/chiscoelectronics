'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { appleEase, Reveal } from '@/components/motion';

import fridge from '@/assets/featured/fridge.webp';
import generator from '@/assets/featured/generator.webp';
import washingmachine from '@/assets/featured/lgwashingmachine.webp';
import tv from '@/assets/featured/samsungtv.webp';
import ac from '@/assets/featured/samsungconditioner.webp';

export default function FeaturedCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -360, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 360, behavior: 'smooth' });
  };

  const features = [
    {
      id: 1,
      category: 'Televisions',
      title: 'Bring every moment to life.',
      featureText:
        'Surge-protected smart displays engineered for cinematic brilliance.',
      image: tv,
      href: '/tvs',
      theme: 'dark',
    },
    {
      id: 2,
      category: 'Refrigerators',
      title: 'Keep it fresh. Keep it longer.',
      featureText:
        '100-hour cooling retention handles power cuts effortlessly.',
      image: fridge,
      href: '/refrigerators',
      theme: 'dark',
    },
    {
      id: 3,
      category: 'Generators',
      title: 'Power when you need it.',
      featureText:
        '100% copper coils and advanced AVR for pure, stable output.',
      image: generator,
      href: '/generators',
      theme: 'light',
    },
    {
      id: 4,
      category: 'Air Conditioners',
      title: 'Comfort in every room.',
      featureText:
        'Low voltage start-up down to 135V ensures cooling never stops.',
      image: ac,
      href: '/air-conditioners',
      theme: 'light',
    },
    {
      id: 5,
      category: 'Washing Machines',
      title: 'Care made effortless.',
      featureText:
        'Energy-efficient motors that are tough on stains, gentle on fabrics.',
      image: washingmachine,
      href: '/washing-machines',
      theme: 'dark',
    },
  ];

  return (
    <section className='mx-auto max-w-6xl py-16 sm:py-24'>
      <Reveal className='mb-6 flex items-end justify-between px-5 sm:mb-8 sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-semibold tracking-tight text-ink md:text-3xl'>
          Featured Collections
        </h2>

        <div className='hidden gap-3 md:flex'>
          <button
            onClick={scrollLeft}
            className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-ink transition-colors hover:bg-slate-200'
            aria-label='Scroll Left'>
            <BiChevronLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-ink transition-colors hover:bg-slate-200'
            aria-label='Scroll Right'>
            <BiChevronRight size={24} />
          </button>
        </div>
      </Reveal>

      <div
        ref={scrollContainerRef}
        className='flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-10 pt-2 hide-scrollbar sm:gap-6 sm:px-6 sm:pb-12 sm:pt-4 lg:px-8'>
        {features.map((item, index) => (
          <motion.div
            key={item.id}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: Math.min(index * 0.06, 0.24),
              ease: appleEase,
            }}
            className='shrink-0 snap-center snap-always'>
            <Link
              href={item.href}
              className={`group relative flex h-104 w-[min(85vw,20rem)] flex-col overflow-hidden rounded-3xl p-6 transition-transform duration-500 hover:scale-[1.015] active:scale-[0.99] sm:h-120 sm:w-100 sm:rounded-4xl sm:p-8 md:h-125 ${
                item.theme === 'dark'
                  ? 'bg-black'
                  : 'border border-slate-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
              }`}>
              <div className='z-10 flex flex-col'>
                <span className='mb-2 text-xs font-bold tracking-wider text-[#bf4800] uppercase'>
                  {item.category}
                </span>

                <h3
                  className={`mb-3 text-lg font-semibold leading-tight tracking-tight sm:mb-4 sm:text-xl md:text-2xl ${
                    item.theme === 'dark' ? 'text-stoned' : 'text-ink'
                  }`}>
                  {item.title}
                </h3>

                <p
                  className={`text-sm font-medium leading-relaxed ${
                    item.theme === 'dark' ? 'text-[#a1a1a6]' : 'text-ink-soft'
                  }`}>
                  {item.featureText}
                </p>
              </div>

              <div className='absolute right-0 bottom-0 left-0 h-48 w-full p-5 sm:h-55 sm:p-6 md:h-65'>
                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  sizes='(max-width: 640px) 85vw, 400px'
                  className='object-contain object-bottom transition-transform duration-500 group-hover:scale-105'
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
