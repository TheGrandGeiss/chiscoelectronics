import Link from 'next/link';
import { CATEGORIES, brandName } from '@/data/site';
import { brandsIn, startingPrice, productsIn } from '@/data/products';
import { formatNaira } from '@/lib/whatsapp';

/* The hero. Not a banner image: a board of what is actually on the floor.
   Works with zero photography, and it is the exact surface the admin
   dashboard will eventually write to. */
export function StockBoard() {
  return (
    <div
      className='border'
      style={{ borderColor: 'var(--stone)' }}>
      {CATEGORIES.map((category, i) => {
        const from = startingPrice(category.slug);
        const brands = brandsIn(category.slug);
        const anyInStock = productsIn(category.slug).some((p) => p.inStock);

        return (
          <Link
            key={category.slug}
            href={`/shop/${category.slug}`}
            className='settle group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-b px-5 py-4 last:border-b-0 md:grid-cols-[1.1fr_1.4fr_auto]'
            style={{
              borderColor: 'var(--stone)',
              animationDelay: `${i * 55}ms`,
            }}>
            <span className='display text-[19px] font-semibold group-hover:underline md:text-[21px]'>
              {category.name}
            </span>

            <span
              className='col-span-2 text-[14px] md:col-span-1 md:col-start-2'
              style={{ color: 'var(--ink-soft)' }}>
              {brands.map((b) => brandName(b)).join(', ')}
            </span>

            <span className='col-start-2 row-start-1 text-right md:col-start-3'>
              <span
                className='display tnum block text-[17px] font-semibold'
                style={{ color: 'var(--brass)' }}>
                {from === null ? 'On request' : `from ${formatNaira(from)}`}
              </span>
              <span
                className='mt-0.5 flex items-center justify-end gap-1.5 text-[13px]'
                style={{ color: 'var(--ink-soft)' }}>
                <span
                  className='inline-block h-1.5 w-1.5 rounded-full'
                  style={{
                    background: anyInStock ? 'var(--forest)' : 'var(--stone)',
                  }}
                  aria-hidden
                />
                {anyInStock ? 'On the floor' : 'Ask us'}
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
