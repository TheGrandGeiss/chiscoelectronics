'use client';

import { useMemo, useState } from 'react';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES, brandName } from '@/data/site';
import { waLink } from '@/lib/whatsapp';

type Line = { slug: string; qty: number };

/* Three steps, zero backend. The review screen composes one WhatsApp message.
   Nothing is stored anywhere, and that is the honest thing to tell the user,
   because it is also the whole argument for the order management database. */
export function QuoteBuilder() {
  const [step, setStep] = useState(1);
  const [lines, setLines] = useState<Line[]>([]);
  const [company, setCompany] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [needed, setNeeded] = useState('');
  const [notes, setNotes] = useState('');

  const setQty = (slug: string, qty: number) =>
    setLines((prev) => {
      const next = prev.filter((l) => l.slug !== slug);
      return qty > 0 ? [...next, { slug, qty }] : next;
    });

  const qtyOf = (slug: string) => lines.find((l) => l.slug === slug)?.qty ?? 0;

  const message = useMemo(() => {
    const items = lines
      .map((l) => {
        const p = PRODUCTS.find((x) => x.slug === l.slug)!;
        return `- ${l.qty} x ${p.name} (${brandName(p.brand)})`;
      })
      .join('\n');

    return [
      'Hello Chisco, this is a bulk supply request.',
      '',
      `Company: ${company || '-'}`,
      `Contact: ${contact || '-'}`,
      `Deliver to: ${location || '-'}`,
      `Needed by: ${needed || '-'}`,
      '',
      'Items:',
      items || '- (none selected)',
      notes ? `\nNotes: ${notes}` : '',
      '',
      'Please send a quote and invoice.',
    ].join('\n');
  }, [lines, company, contact, location, needed, notes]);

  const canAdvance =
    step === 1
      ? lines.length > 0
      : company.trim() !== '' && contact.trim() !== '';

  return (
    <div
      className='border'
      style={{ borderColor: 'var(--stone)' }}>
      <ol
        className='flex border-b'
        style={{ borderColor: 'var(--stone)' }}>
        {['Choose items', 'Your details', 'Review and send'].map((label, i) => {
          const n = i + 1;
          const active = step === n;
          return (
            <li
              key={label}
              className='flex-1 border-r px-4 py-3 text-center text-[14px] last:border-r-0'
              style={{
                borderColor: 'var(--stone)',
                background: active ? 'var(--forest)' : 'transparent',
                color: active ? '#fff' : 'var(--ink-soft)',
              }}>
              {label}
            </li>
          );
        })}
      </ol>

      <div className='p-6'>
        {step === 1 && (
          <div className='space-y-8'>
            {CATEGORIES.map((category) => {
              const items = PRODUCTS.filter(
                (p) => p.category === category.slug,
              );
              if (!items.length) return null;
              return (
                <div key={category.slug}>
                  <p className='display mb-3 text-[16px] font-semibold'>
                    {category.name}
                  </p>
                  <div className='space-y-2'>
                    {items.map((p) => (
                      <div
                        key={p.slug}
                        className='flex items-center justify-between gap-4 border-b pb-2 last:border-b-0'
                        style={{ borderColor: 'var(--stone)' }}>
                        <span className='text-[15px]'>
                          {p.name}
                          <span
                            className='ml-2 text-[13px]'
                            style={{ color: 'var(--ink-soft)' }}>
                            {brandName(p.brand)}
                          </span>
                        </span>
                        <input
                          type='number'
                          min={0}
                          value={qtyOf(p.slug) || ''}
                          placeholder='0'
                          onChange={(e) =>
                            setQty(p.slug, Number(e.target.value))
                          }
                          className='tnum w-20 rounded border bg-transparent px-2 py-1 text-right text-[15px]'
                          style={{ borderColor: 'var(--stone)' }}
                          aria-label={`Quantity of ${p.name}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {step === 2 && (
          <div className='grid gap-5 sm:grid-cols-2'>
            <Field
              label='Company name'
              value={company}
              onChange={setCompany}
              required
            />
            <Field
              label='Contact person'
              value={contact}
              onChange={setContact}
              required
            />
            <Field
              label='Delivery location'
              value={location}
              onChange={setLocation}
              placeholder='Street and area in Eket'
            />
            <Field
              label='Needed by'
              value={needed}
              onChange={setNeeded}
              type='date'
            />
            <div className='sm:col-span-2'>
              <Field
                label='Anything else we should know'
                value={notes}
                onChange={setNotes}
                textarea
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className='display text-[21px] font-semibold'>
              Check this before it sends
            </p>
            <pre
              className='mt-4 overflow-x-auto whitespace-pre-wrap border p-4 text-[14px]'
              style={{ borderColor: 'var(--stone)', fontFamily: 'inherit' }}>
              {message}
            </pre>
            <a
              href={waLink(message)}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-5 inline-flex rounded px-6 py-3.5 text-[17px] font-medium text-white'
              style={{ background: 'var(--whatsapp)' }}>
              Send this quote request
            </a>
            <p
              className='mt-3 text-[13px]'
              style={{ color: 'var(--ink-soft)' }}>
              This opens WhatsApp with your list already written out. Nothing is
              saved on this site.
            </p>
          </div>
        )}
      </div>

      <div
        className='flex items-center justify-between border-t px-6 py-4'
        style={{ borderColor: 'var(--stone)' }}>
        <button
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          className='text-[15px] underline disabled:opacity-40'>
          Back
        </button>

        {step < 3 && (
          <button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canAdvance}
            className='rounded px-5 py-2.5 text-[15px] font-medium text-white disabled:opacity-40'
            style={{ background: 'var(--forest)' }}>
            {step === 1
              ? `Continue with ${lines.length} ${lines.length === 1 ? 'item' : 'items'}`
              : 'Review'}
          </button>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  textarea,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const shared = {
    value,
    placeholder,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    className:
      'mt-1.5 w-full rounded border bg-transparent px-3 py-2 text-[15px]',
    style: { borderColor: 'var(--stone)' },
  };

  return (
    <label className='block'>
      <span
        className='text-[14px]'
        style={{ color: 'var(--ink-soft)' }}>
        {label}
        {required ? ' *' : ''}
      </span>
      {textarea ? (
        <textarea
          rows={3}
          {...shared}
        />
      ) : (
        <input
          type={type}
          {...shared}
        />
      )}
    </label>
  );
}
