'use client';

import Image from 'next/image';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import panasonic from '@/assets/panasonic.svg';
import lg from '@/assets/lg-electronics.svg';
import samsung from '@/assets/samsung-electronics.svg';
import haier from '@/assets/haier-logo.svg';

export default function Brands() {
  const brands = [
    { src: samsung, alt: 'Samsung', wrapperSize: 'w-28 sm:w-32 md:w-44 h-10 sm:h-12' },
    { src: lg, alt: 'LG', wrapperSize: 'w-20 sm:w-24 md:w-28 h-10 sm:h-12 md:h-14' },
    { src: panasonic, alt: 'Panasonic', wrapperSize: 'w-28 sm:w-32 md:w-48 h-10 sm:h-12' },
    { src: haier, alt: 'Haier', wrapperSize: 'w-20 sm:w-24 md:w-28 h-9 sm:h-10 md:h-12' },
  ];

  return (
    <section className='mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28'>
      <Reveal>
        <h2 className='text-left text-2xl font-semibold text-ink md:text-3xl'>
          Brands You can Count on
        </h2>
        <p className='mb-8 py-2.5 text-sm text-ink-soft sm:mb-10 sm:text-base'>
          Trusted appliances from brands built for everyday living
        </p>
      </Reveal>

      <Stagger className='grid grid-cols-2 items-center gap-x-6 gap-y-10 sm:flex sm:flex-wrap sm:justify-between sm:gap-8'>
        {brands.map((brand) => (
          <StaggerItem
            key={brand.alt}
            className='flex justify-center sm:justify-start'>
            <div
              className={`relative ${brand.wrapperSize} cursor-pointer opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0`}>
              <Image
                src={brand.src}
                alt={`${brand.alt} logo`}
                fill
                className='object-contain'
              />
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
