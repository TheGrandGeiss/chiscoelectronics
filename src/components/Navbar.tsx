'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // <-- Import usePathname
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { BiCart, BiMenu, BiSearch, BiUser, BiX } from 'react-icons/bi';
import logo from '@/assets/logo.png';
import { appleEase } from '@/components/motion';
import { useCartStore } from '@/store/useCartStore';
import CartSidebar from './CartSidebar';

const navLinks = [
  { href: '/store', label: 'Shop' }, // Updated to /#products to route from other pages
  { href: '/about', label: 'About' },
  { href: '/#contact', label: 'Contact' }, // Updated to /#contact
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const pathname = usePathname(); // <-- Get current route
  const reduce = useReducedMotion();

  const cartItems = useCartStore((state) => state.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isHomePage = pathname === '/';
  const ink = isScrolled || menuOpen || !isHomePage;

  return (
    <>
      <motion.nav
        initial={reduce ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: appleEase }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          ink
            ? 'bg-white/90 shadow-[0_1px_0_rgba(16,30,24,0.06)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}>
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-5 py-4 transition-colors duration-500 sm:px-6 sm:py-5 lg:px-0 ${
            ink ? 'text-ink' : 'text-stoned'
          }`}>
          <div className='flex flex-1 items-center gap-8'>
            <button
              type='button'
              onClick={() => setMenuOpen(true)}
              className='flex items-center gap-2 rounded-full transition-opacity hover:opacity-70 md:hidden'
              aria-label='Open menu'>
              <BiMenu size={24} />
            </button>

            <div className='hidden md:flex items-center gap-6'>
              {navLinks.map((link) => (
                <Link
                  prefetch={true}
                  key={link.href}
                  href={link.href}
                  className='text-sm font-medium tracking-wide transition-opacity hover:opacity-60'>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href='/'
            className='absolute left-1/2 -translate-x-1/2 flex justify-center'>
            <Image
              src={logo}
              alt='Chisco Electronics'
              width={110}
              className={`h-auto w-[88px] transition-[filter] duration-500 sm:w-[110px] ${
                ink ? '' : 'invert' // If 'ink' is true, logo stays black. If false, it inverts to white.
              }`}
              priority
            />
          </Link>

          <div className='flex flex-1 items-center justify-end gap-4 sm:gap-6'>
            <button
              type='button'
              className='hidden rounded-full transition-opacity hover:opacity-70 sm:block'
              aria-label='Search'>
              <BiSearch size={20} />
            </button>

            <button
              type='button'
              onClick={() => setCartOpen(true)} // <-- Add this onClick
              className='relative rounded-full transition-opacity hover:opacity-70'
              aria-label='Cart'>
              <BiCart size={24} />
              {mounted && totalItems > 0 && (
                <span className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#bf4800] text-[10px] font-bold text-white shadow-sm'>
                  {totalItems}
                </span>
              )}
            </button>

            <Link
              href='?quote=true'
              className={`hidden md:flex group items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-95 ${
                ink ? 'bg-ink text-white' : 'bg-white text-ink'
              }`}>
              Get a Quote
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className='fixed inset-0 z-[60]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: appleEase }}>
            <button
              type='button'
              className='absolute inset-0 bg-ink/40 backdrop-blur-sm'
              aria-label='Close menu'
              onClick={() => setMenuOpen(false)}
            />

            <motion.aside
              role='dialog'
              aria-modal='true'
              aria-label='Navigation'
              initial={reduce ? false : { x: '-100%' }}
              animate={{ x: 0 }}
              exit={reduce ? undefined : { x: '-100%' }}
              transition={{ duration: 0.45, ease: appleEase }}
              className='absolute inset-y-0 left-0 flex w-[min(100%,20rem)] flex-col bg-paper px-6 py-6 shadow-2xl sm:w-80'>
              <div className='mb-10 flex items-center justify-between'>
                <span className='text-sm font-medium tracking-wide text-ink-soft uppercase'>
                  Menu
                </span>
                <button
                  type='button'
                  onClick={() => setMenuOpen(false)}
                  className='rounded-full p-1 text-ink transition-opacity hover:opacity-60'
                  aria-label='Close menu'>
                  <BiX size={26} />
                </button>
              </div>

              <nav className='flex flex-col gap-1'>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.06,
                      duration: 0.5,
                      ease: appleEase,
                    }}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className='block rounded-xl px-2 py-3.5 text-2xl font-semibold tracking-tight text-ink transition-colors hover:text-[#bf4800]'>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.08 + navLinks.length * 0.06,
                    duration: 0.5,
                    ease: appleEase,
                  }}>
                  <Link
                    href='?quote=true'
                    onClick={() => setMenuOpen(false)}
                    className='mt-4 block w-full rounded-full bg-ink px-4 py-4 text-center text-lg font-semibold tracking-tight text-white transition-opacity hover:opacity-80'>
                    Get a Quote
                  </Link>
                </motion.div>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
      <CartSidebar
        isOpen={cartOpen}
        setIsOpen={setCartOpen}
      />
    </>
  );
}
