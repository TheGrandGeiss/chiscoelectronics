import Link from 'next/link';
import type { Product } from '@/data/products';
import { brandName } from '@/data/site';
import { formatNaira } from '@/lib/whatsapp';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className='group flex flex-col border transition-colors hover:border-[color:var(--forest)]'
      style={{ borderColor: 'var(--stone)' }}>
      {/* Standing in for photography. Deliberate, not broken:
          the brand wordmark set large reads as a catalogue plate. */}
      <div
        className='flex aspect-[4/3] items-center justify-center border-b px-6'
        style={{
          borderColor: 'var(--stone)',
          background: 'color-mix(in srgb, var(--stone) 28%, transparent)',
        }}>
        <span
          className='display text-center text-[22px] font-semibold leading-tight'
          style={{ color: 'var(--ink-soft)' }}>
          {brandName(product.brand)}
        </span>
      </div>

      <div className='flex flex-1 flex-col p-5'>
        <p
          className='text-[13px]'
          style={{ color: 'var(--ink-soft)' }}>
          {brandName(product.brand)}
        </p>
        <p className='display mt-1 text-[17px] font-semibold group-hover:underline'>
          {product.name}
        </p>
        <p
          className='mt-2 flex-1 text-[14px]'
          style={{ color: 'var(--ink-soft)' }}>
          {product.summary}
        </p>

        <div className='mt-4 flex items-center justify-between'>
          <span
            className='display tnum text-[17px] font-semibold'
            style={{ color: 'var(--brass)' }}>
            {formatNaira(product.price)}
          </span>
          <span
            className='text-[13px]'
            style={{
              color: product.inStock ? 'var(--forest)' : 'var(--ink-soft)',
            }}>
            {product.inStock ? 'On the floor now' : 'Not on the floor'}
          </span>
        </div>
      </div>
    </Link>
  );
}
