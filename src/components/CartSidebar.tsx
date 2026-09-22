// components/CartSidebar.tsx
'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BiX,
  BiMinus,
  BiPlus,
  BiTrash,
  BiLogoWhatsapp,
  BiCart,
} from 'react-icons/bi';
import { useCartStore } from '@/store/useCartStore';

interface CartSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function CartSidebar({ isOpen, setIsOpen }: CartSidebarProps) {
  const { items, removeItem, updateQuantity, getCartTotal } = useCartStore();

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    // 1. Format the order details into a clean text message
    let message = `Hello Chisco Electronics! I would like to place an order:%0A%0A`;

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*%0A`;
      message += `   Quantity: ${item.quantity}%0A`;
      message += `   Price: $${(item.price * item.quantity).toFixed(2)}%0A%0A`;
    });

    message += `*Total Amount: $${getCartTotal().toFixed(2)}*%0A%0A`;
    message += `Please let me know the next steps for payment and delivery!`;

    // 2. Redirect to WhatsApp (Replace with Chisco's actual business number)
    const businessNumber = '2349164861760'; // Format: Country code + number (no '+' sign)
    window.open(`https://wa.me/${businessNumber}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className='fixed inset-0 z-[70] bg-ink/40 backdrop-blur-sm'
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className='fixed inset-y-0 right-0 z-[80] flex w-full max-w-md flex-col bg-white shadow-2xl'>
            {/* Header */}
            <div className='flex items-center justify-between border-b border-slate-100 px-6 py-5'>
              <h2 className='text-lg font-semibold tracking-tight text-ink'>
                Your Cart
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className='rounded-full p-2 text-ink-soft transition-colors hover:bg-slate-100 hover:text-ink'>
                <BiX size={24} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className='flex-1 overflow-y-auto px-6 py-6'>
              {items.length === 0 ? (
                <div className='flex h-full flex-col items-center justify-center text-center'>
                  <div className='mb-4 rounded-full bg-slate-50 p-6'>
                    <BiCart
                      size={48}
                      className='text-slate-300'
                    />
                  </div>
                  <p className='text-lg font-medium text-ink'>
                    Your cart is empty
                  </p>
                  <p className='mt-2 text-sm text-ink-soft'>
                    Looks like you haven't added anything yet.
                  </p>
                </div>
              ) : (
                <div className='flex flex-col gap-6'>
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className='flex gap-4'>
                      {/* Item Image */}
                      <div className='relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-2'>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className='object-contain'
                        />
                      </div>

                      {/* Item Details */}
                      <div className='flex flex-1 flex-col justify-between'>
                        <div>
                          <h3 className='line-clamp-2 text-sm font-semibold leading-tight text-ink'>
                            {item.name}
                          </h3>
                          <p className='mt-1 text-sm font-medium text-ink-soft'>
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Controls: Quantity & Remove */}
                        <div className='flex items-center justify-between'>
                          <div className='flex h-8 items-center overflow-hidden rounded-lg border border-slate-200'>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  Math.max(1, item.quantity - 1),
                                )
                              }
                              className='flex h-full w-8 items-center justify-center text-ink-soft hover:bg-slate-50 hover:text-ink'>
                              <BiMinus size={14} />
                            </button>
                            <span className='flex h-full w-8 items-center justify-center bg-slate-50 text-xs font-semibold text-ink'>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className='flex h-full w-8 items-center justify-center text-ink-soft hover:bg-slate-50 hover:text-ink'>
                              <BiPlus size={14} />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className='text-slate-400 transition-colors hover:text-red-500'>
                            <BiTrash size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Checkout Button */}
            {items.length > 0 && (
              <div className='border-t border-slate-100 bg-slate-50 px-6 py-6'>
                <div className='mb-4 flex items-center justify-between'>
                  <span className='text-base font-medium text-ink-soft'>
                    Subtotal
                  </span>
                  <span className='text-xl font-bold text-ink'>
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleWhatsAppCheckout}
                  className='group flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-4 text-base font-semibold text-white transition-all hover:bg-[#20bd5a] active:scale-[0.98]'>
                  <BiLogoWhatsapp size={24} />
                  Checkout via WhatsApp
                </button>
                <p className='mt-3 text-center text-xs text-ink-soft'>
                  You will be redirected to WhatsApp to confirm your order
                  details.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
