// app/store/page.tsx
import ProductCard from '@/components/ProductCard';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Store',
  description:
    'Explore our latest arrivals of premium electronics, appliances, and power solutions.',
};

export default async function StorePage() {
  const res = await fetch('https://fakestoreapi.com/products/', {
    next: { revalidate: 3600 },
  });
  const products = await res.json();

  return (
    <main className='min-h-screen bg-paper pb-24 pt-32'>
      <div className='mx-auto max-w-6xl px-6 lg:px-0'>
        {/* Header Section */}
        <div className='mb-12 pt-10'>
          <h1 className='font-horizon text-3xl tracking-tight text-ink md:text-4xl'>
            ENRICH YOUR ENVIRONMENT
          </h1>
          <p className='mt-4 text-lg text-ink-soft'>
            Premium electronics engineered for excellence. Explore our latest
            arrivals.
          </p>
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
          {products.map((product: any) => (
            <Link
              href={`store/${product.id}`}
              key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
