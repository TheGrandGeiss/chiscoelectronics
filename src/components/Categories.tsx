'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import refrigerator from '@/assets/refrigerator.webp';
import generator from '@/assets/generator.webp';
import tv from '@/assets/tv.webp';
import airconditioner from '@/assets/ac.webp';
import washingMachine from '@/assets/washing-machine.webp';

export default function Categories() {
  const categories = [
    {
      id: 1,
      title: 'Explore Refrigerators',
      image: refrigerator,
      href: '/refrigerators',
    },
    {
      id: 2,
      title: 'Explore Generators',
      image: generator,
      href: '/generators',
    },
    { id: 3, title: 'Explore TVs', image: tv, href: '/tvs' },
    {
      id: 4,
      title: 'Explore Air Conditioners',
      image: airconditioner,
      href: '/air-conditioners',
    },
    {
      id: 5,
      title: 'Explore Washing Machines',
      image: washingMachine,
      href: '/washing-machines',
    },
  ];

  return (
    <section
      id='products'
      className='mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8'>
      <Reveal className='mb-8 sm:mb-12'>
        <h2 className='text-2xl font-semibold tracking-tight text-ink md:text-3xl'>
          Shop What You Need
        </h2>
      </Reveal>

      <Stagger className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6'>
        {categories.map((category, index) => (
          <StaggerItem
            key={category.id}
            className={`group relative h-72 w-full overflow-hidden rounded-2xl sm:h-87.5 md:h-100 ${
              index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'
            }`}>
            <Image
              src={category.image}
              alt={category.title}
              fill
              sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
              className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
            />

            <div className='absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_15%_90%,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.62)_32%,rgba(0,0,0,0.18)_65%,transparent_100%),linear-gradient(to_top_right,rgba(2,6,23,0.45)_0%,rgba(2,6,23,0.15)_55%,transparent_100%)] transition-opacity duration-300' />

            <div className='absolute bottom-0 left-0 z-20 flex w-full flex-col justify-end p-6 sm:p-8'>
              <Link
                href={category.href}
                className='group/link inline-flex w-fit items-center gap-2 text-white/90 transition-colors hover:text-white'>
                <span className='text-xs font-medium tracking-wide sm:text-sm'>
                  {category.title}
                </span>
                <GoArrowRight className='transition-transform duration-300 group-hover/link:translate-x-1.5' />
              </Link>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
