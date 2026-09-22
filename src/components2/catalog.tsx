'use client';

import { useMemo, useState } from 'react';
import { PRODUCTS } from '@/data/products';
import {
  BRANDS,
  CATEGORIES,
  PRICE_BANDS,
  brandName,
  categoryName,
} from '@/data/site';
import { GENERAL_ENQUIRY } from '@/lib/whatsapp';
import { ProductCard } from './product-card';
import { WaButton } from './wa-button';

type Sort = 'low' | 'high';

export function Catalog({ lockedCategory }: { lockedCategory?: string }) {
  const [categories, setCategories] = useState<string[]>(
    lockedCategory ? [lockedCategory] : [],
  );
  const [brands, setBrands] = useState<string[]>([]);
  const [band, setBand] = useState<string | null>(null);
  const [inStockOnly, setInStockOnly] = useState(true);
  const [sort, setSort] = useState<Sort>('low');
  const [drawer, setDrawer] = useState(false);

  const toggle = (list: string[], set: (v: string[]) => void, value: string) =>
    set(
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value],
    );

  const results = useMemo(() => {
    const activeBand = PRICE_BANDS.find((b) => b.id === band);

    return PRODUCTS.filter((p) => {
      if (categories.length && !categories.includes(p.category)) return false;
      if (brands.length && !brands.includes(p.brand)) return false;
      if (inStockOnly && !p.inStock) return false;
      if (activeBand) {
        if (p.price === null) return false;
        if (p.price < activeBand.min || p.price >= activeBand.max) return false;
      }
      return true;
    }).sort((a, b) => {
      const av = a.price ?? Infinity;
      const bv = b.price ?? Infinity;
      return sort === 'low' ? av - bv : bv - av;
    });
  }, [categories, brands, band, inStockOnly, sort]);

  const chips = [
    ...(lockedCategory
      ? []
      : categories.map((c) => ({
          label: categoryName(c),
          clear: () => toggle(categories, setCategories, c),
        }))),
    ...brands.map((b) => ({
      label: brandName(b),
      clear: () => toggle(brands, setBrands, b),
    })),
    ...(band
      ? [
          {
            label: PRICE_BANDS.find((p) => p.id === band)!.label,
            clear: () => setBand(null),
          },
        ]
      : []),
  ];

  const filters = (
    <div className='space-y-8'>
      {!lockedCategory && (
        <Group title='Category'>
          {CATEGORIES.map((c) => (
            <Check
              key={c.slug}
              checked={categories.includes(c.slug)}
              onChange={() => toggle(categories, setCategories, c.slug)}>
              {c.name}
            </Check>
          ))}
        </Group>
      )}

      <Group title='Brand'>
        {BRANDS.map((b) => (
          <Check
            key={b.slug}
            checked={brands.includes(b.slug)}
            onChange={() => toggle(brands, setBrands, b.slug)}>
            {b.name}
          </Check>
        ))}
      </Group>

      <Group title='Price'>
        {PRICE_BANDS.map((b) => (
          <Check
            key={b.id}
            type='radio'
            checked={band === b.id}
            onChange={() => setBand(band === b.id ? null : b.id)}>
            {b.label}
          </Check>
        ))}
      </Group>

      <Check
        checked={inStockOnly}
        onChange={() => setInStockOnly((v) => !v)}>
        Only show what is on the floor
      </Check>
    </div>
  );

  return (
    <div className='mx-auto max-w-[1180px] px-5 py-10'>
      <div className='mb-6 flex items-center justify-between gap-4'>
        <p
          className='text-[15px]'
          style={{ color: 'var(--ink-soft)' }}>
          {results.length} {results.length === 1 ? 'item' : 'items'}
        </p>

        <div className='flex items-center gap-3'>
          <button
            onClick={() => setDrawer(true)}
            className='rounded border px-3 py-1.5 text-[14px] lg:hidden'
            style={{ borderColor: 'var(--stone)' }}>
            Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className='rounded border bg-transparent px-3 py-1.5 text-[14px]'
            style={{ borderColor: 'var(--stone)' }}
            aria-label='Sort'>
            <option value='low'>Price: low to high</option>
            <option value='high'>Price: high to low</option>
          </select>
        </div>
      </div>

      {chips.length > 0 && (
        <div className='mb-6 flex flex-wrap gap-2'>
          {chips.map((chip) => (
            <button
              key={chip.label}
              onClick={chip.clear}
              className='rounded border px-3 py-1 text-[13px]'
              style={{ borderColor: 'var(--forest)', color: 'var(--forest)' }}>
              {chip.label} &times;
            </button>
          ))}
        </div>
      )}

      <div className='grid gap-10 lg:grid-cols-[230px_1fr]'>
        <aside className='hidden lg:block'>{filters}</aside>

        <div>
          {results.length === 0 ? (
            <div
              className='border p-10 text-center'
              style={{ borderColor: 'var(--stone)' }}>
              <p className='display text-[21px] font-semibold'>
                Nothing on the floor matches that.
              </p>
              <p
                className='mx-auto mt-2 max-w-[42ch] text-[15px]'
                style={{ color: 'var(--ink-soft)' }}>
                Clear a filter, or send us what you are looking for and we will
                tell you when it comes in.
              </p>
              <div className='mt-5'>
                <WaButton message={GENERAL_ENQUIRY}>Ask on WhatsApp</WaButton>
              </div>
            </div>
          ) : (
            <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-3'>
              {results.map((p) => (
                <ProductCard
                  key={p.slug}
                  product={p}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {drawer && (
        <div
          className='fixed inset-0 z-50 lg:hidden'
          role='dialog'
          aria-modal>
          <div
            className='absolute inset-0 bg-black/40'
            onClick={() => setDrawer(false)}
          />
          <div
            className='absolute inset-y-0 right-0 w-[85%] max-w-[340px] overflow-y-auto p-6'
            style={{ background: 'var(--paper)' }}>
            <div className='mb-6 flex items-center justify-between'>
              <span className='display text-[19px] font-semibold'>Filters</span>
              <button
                onClick={() => setDrawer(false)}
                className='text-[15px] underline'>
                Close
              </button>
            </div>
            {filters}
            <button
              onClick={() => setDrawer(false)}
              className='mt-8 w-full rounded py-3 font-medium text-white'
              style={{ background: 'var(--forest)' }}>
              Show {results.length} {results.length === 1 ? 'item' : 'items'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Group({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className='display mb-3 text-[15px] font-semibold'>{title}</p>
      <div className='space-y-2'>{children}</div>
    </div>
  );
}

function Check({
  checked,
  onChange,
  children,
  type = 'checkbox',
}: {
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
  type?: 'checkbox' | 'radio';
}) {
  return (
    <label className='flex cursor-pointer items-center gap-2.5 text-[15px]'>
      <input
        type={type}
        checked={checked}
        onChange={onChange}
        className='h-4 w-4 accent-(--forest)'
      />
      {children}
    </label>
  );
}
