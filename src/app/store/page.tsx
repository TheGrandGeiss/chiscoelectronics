// app/store/page.tsx
import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Store',
  description:
    'Explore our latest arrivals of premium electronics, appliances, and power solutions.',
};

export default async function StorePage() {
  let products = [];

  try {
    const res = await fetch(
      'https://fakestoreapi.com/products/category/electronics',
      {
        next: { revalidate: 3600 },
      },
    );

    // Only attempt to parse JSON if the API successfully returned a 200 OK status
    if (res.ok) {
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        products = await res.json();
      }
    } else {
      console.error(`API Error: ${res.status}`);
    }
  } catch (error) {
    console.error('Failed to fetch or parse products:', error);
  }

  return (
    <main className='min-h-screen bg-[#f5f5f7] pb-24 pt-32'>
      <div className='mx-auto max-w-6xl px-6 lg:px-0'>
        {/* Header Section */}
        <div className='mb-12 pt-10'>
          <h1 className='font-horizon text-4xl tracking-tight text-ink md:text-5xl'>
            THE STORE.
          </h1>
          <p className='mt-4 text-lg text-ink-soft'>
            Premium electronics engineered for excellence. Explore our latest
            arrivals.
          </p>
        </div>

        {/* Product Grid or Fallback State */}
        {products.length > 0 ? (
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
            {products.map((product: any) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className='flex h-64 items-center justify-center rounded-3xl border border-slate-200 bg-white'>
            <p className='text-lg font-medium text-ink-soft'>
              Check your connection or try refreshing. Products are currently
              loading.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
