// components/AddToCartSection.tsx
'use client';

import { useState } from 'react';
import { BiCartAdd, BiMinus, BiPlus } from 'react-icons/bi';
import { useCartStore } from '@/store/useCartStore';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function AddToCartSection({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    // Add the specific quantity to the store
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id.toString(),
        name: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }
  };

  return (
    <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:items-center'>
      {/* Quantity Selector */}
      <div className='flex h-14 items-center justify-between overflow-hidden rounded-full border border-slate-200 bg-white px-4 sm:w-32'>
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className='text-ink-soft transition-colors hover:text-ink'
          aria-label='Decrease quantity'>
          <BiMinus size={20} />
        </button>
        <span className='w-8 text-center font-semibold text-ink'>
          {quantity}
        </span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className='text-ink-soft transition-colors hover:text-ink'
          aria-label='Increase quantity'>
          <BiPlus size={20} />
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className='group flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-ink px-8 font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95'>
        <BiCartAdd size={22} />
        Add to Cart — ${(product.price * quantity).toFixed(2)}
      </button>
    </div>
  );
}
