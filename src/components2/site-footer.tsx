import Link from 'next/link';
import { CATEGORIES, BRANDS, SITE, PRICES_VERIFIED } from '@/data/site';
import { PHONE_DISPLAY } from '@/lib/whatsapp';

export function SiteFooter() {
  return (
    <footer
      className='mt-24 border-t pb-28 pt-14 md:pb-14'
      style={{ borderColor: 'var(--stone)' }}>
      <div className='mx-auto grid max-w-[1180px] gap-10 px-5 md:grid-cols-4'>
        <div>
          <p className='display text-[17px] font-semibold'>{SITE.name}</p>
          <p
            className='mt-3 text-[15px]'
            style={{ color: 'var(--ink-soft)' }}>
            {SITE.address}
          </p>
          <p
            className='mt-2 text-[15px]'
            style={{ color: 'var(--ink-soft)' }}>
            {SITE.hours}
          </p>
          <a
            href={`tel:+234${PHONE_DISPLAY.replace(/\D/g, '').slice(1)}`}
            className='mt-2 inline-block text-[15px] underline'>
            {PHONE_DISPLAY}
          </a>
        </div>

        <div>
          <p className='display text-[15px] font-semibold'>On the floor</p>
          <ul className='mt-3 space-y-2 text-[15px]'>
            {CATEGORIES.map((c: any) => (
              <li key={c.slug}>
                <Link
                  href={`/shop/${c.slug}`}
                  style={{ color: 'var(--ink-soft)' }}
                  className='hover:underline'>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className='display text-[15px] font-semibold'>Brands we carry</p>
          <ul
            className='mt-3 space-y-2 text-[15px]'
            style={{ color: 'var(--ink-soft)' }}>
            {BRANDS.map((b: any) => (
              <li key={b.slug}>{b.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className='display text-[15px] font-semibold'>
            Buying for a company
          </p>
          <p
            className='mt-3 text-[15px]'
            style={{ color: 'var(--ink-soft)' }}>
            We supply offices, guest houses, and site accommodation across Eket
            on invoice.
          </p>
          <Link
            href='/corporate'
            className='mt-3 inline-block font-medium underline'
            style={{ color: 'var(--brass)' }}>
            Request a bulk quote
          </Link>
        </div>
      </div>

      <div
        className='mx-auto mt-12 max-w-[1180px] border-t px-5 pt-6 text-[13px]'
        style={{ borderColor: 'var(--stone)', color: 'var(--ink-soft)' }}>
        Stock and prices on this site were checked by hand on {PRICES_VERIFIED}.
        Confirm before you travel.
      </div>
    </footer>
  );
}
