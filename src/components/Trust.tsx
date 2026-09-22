'use client';

import Link from 'next/link';
import { BiArrowToRight } from 'react-icons/bi';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import AnimatedNumber from './AnimatedNumber';

const stats = [
  { value: 20, label: 'Years in business', suffix: '+' },
  { value: 1000, label: 'Units sold', suffix: '+' },
  { value: 500, label: 'Satisfied clients', suffix: '+' },
];

export default function TrustSection() {
  return (
    <section className='mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32'>
      <div className='flex flex-col justify-between gap-12 sm:gap-16 lg:flex-row lg:items-center'>
        <Reveal className='flex max-w-xl flex-col'>
          <span className='mb-3 text-xs font-bold tracking-wider text-[#bf4800] uppercase sm:mb-4 sm:text-sm'>
            Our Legacy
          </span>
          <h2 className='mb-5 text-2xl font-semibold leading-tight tracking-tight text-ink sm:mb-6 sm:text-3xl md:text-4xl'>
            Built on experience.
            <br />
            Driven by trust.
          </h2>
          <p className='mb-7 text-base leading-relaxed text-ink-soft sm:mb-8 sm:text-lg md:text-xl'>
            For over 20 years, Chisco has been helping homes and businesses
            access quality electronics and appliances from trusted brands. With
            over 1,000 units sold and 500+ satisfied clients, our commitment
            remains simple: connecting you with products you can count on.
          </p>

          <Link
            href='/about'
            className='group/link inline-flex w-fit items-center gap-2 font-medium text-ink transition-colors hover:text-[#bf4800]'>
            <span className='text-base tracking-wide'>Read our story</span>
            <BiArrowToRight
              size={20}
              className='transition-transform duration-300 group-hover/link:translate-x-1.5'
            />
          </Link>
        </Reveal>

        <Stagger className='grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 lg:flex lg:flex-col lg:gap-14'>
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className='flex flex-col'>
              <h3 className='text-5xl font-bold tracking-tighter text-ink sm:text-6xl md:text-7xl'>
                <AnimatedNumber value={stat.value} />
                {stat.suffix}
              </h3>
              <span className='mt-2 text-sm font-medium tracking-wide text-ink-soft uppercase sm:text-base'>
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
