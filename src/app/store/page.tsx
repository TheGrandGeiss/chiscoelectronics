// app/store/page.tsx
import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Store',
  description:
    'Explore our latest arrivals of premium electronics, appliances, and power solutions.',
};

export default async function StorePage() {
  let products: any[] = [];

  try {
    // DummyJSON returns tech/gadget products reliably
    const res = await fetch(
      'https://dummyjson.com/products/category/smartphones',
      {
        next: { revalidate: 3600 },
      },
    );

    if (res.ok) {
      const data = await res.json();
      // DummyJSON nests products inside a 'products' key and uses 'thumbnail' for images
      products = (data.products || []).map((item: any) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        description: item.description,
        image: item.thumbnail,
      }));
    }
  } catch (error) {
    console.error('API Error:', error);
  }

  // If even DummyJSON fails, provide instant offline fallback so the screen is NEVER blank
  if (products.length === 0) {
    products = fallbackProducts;
  }

  return (
    <main className='min-h-screen bg-[#f5f5f7] pb-24 pt-32'>
      <div className='mx-auto max-w-6xl px-6 lg:px-0'>
        <div className='mb-12 pt-10'>
          <h1 className='font-horizon text-4xl tracking-tight text-ink md:text-5xl'>
            THE STORE.
          </h1>
          <p className='mt-4 text-lg text-ink-soft'>
            Premium electronics engineered for excellence. Explore our latest
            arrivals.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
          {products.map((product) => (
            <Link
              href={`/store/${product.id}`}
              key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

// Built-in safety net: 6 mock items ready if Wi-Fi drops at the client meeting
const fallbackProducts = [
  {
    id: 101,
    title: 'Samsung 65" Neo QLED 4K Smart TV',
    price: 1299.99,
    description:
      'Quantum Matrix technology with Mini LEDs, delivering rich color, stark contrast, and immersive audio.',
    image:
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 102,
    title: 'Sony WH-1000XM5 Wireless Headphones',
    price: 399.99,
    description:
      'Industry-leading noise cancellation engineered with two processors and eight microphones.',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 103,
    title: 'LG InstaView French Door Refrigerator',
    price: 2199.0,
    description:
      'Knock twice to illuminate contents without letting cold air escape. Linear cooling precision.',
    image:
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 104,
    title: 'Apple MacBook Pro 16" M3 Max',
    price: 3499.0,
    description:
      'Liquid Retina XDR display, extreme unified memory bandwidth, and all-day battery endurance.',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 105,
    title: 'Dyson Purifier Cool Gen1',
    price: 429.99,
    description:
      'Automatically senses, captures, and traps 99.97% of microscopic particles and allergens.',
    image:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 106,
    title: 'Bose Smart Soundbar 900 Dolby Atmos',
    price: 899.0,
    description:
      'Breathtaking clarity and spatial sound immersion for premium cinema and home theater setups.',
    image:
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80',
  },
];
