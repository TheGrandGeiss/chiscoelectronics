'use client';

import Image from 'next/image';
import { BiCartAdd } from 'react-icons/bi';
import { useCartStore } from '@/store/useCartStore';

// Define the shape of the FakeStore API response
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id.toString(),
      name: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div className='group relative flex h-full flex-col justify-between overflow-hidden rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform duration-500 hover:scale-[1.02]'>
      {/* Product Image Container */}
      <div className='relative mb-8 h-48 w-full'>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className='object-contain transition-transform duration-500 group-hover:scale-105'
          sizes='(max-width: 768px) 100vw, 33vw'
        />
      </div>

      <div className='flex flex-1 flex-col'>
        <h3 className='mb-2 text-lg font-semibold leading-tight text-ink line-clamp-2'>
          {product.title}
        </h3>
        <p className='mb-6 text-sm text-ink-soft line-clamp-2'>
          {product.description}
        </p>

        <div className='mt-auto flex items-center justify-between'>
          <span className='text-xl font-bold tracking-tight text-ink'>
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-ink transition-colors hover:bg-ink hover:text-white'
            aria-label='Add to cart'>
            <BiCartAdd size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
