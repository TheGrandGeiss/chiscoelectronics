import Categories from '@/components/Categories';
import FeaturedCarousel from '@/components/Featured';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Brands from '@/components/Brands';
import React from 'react';
import TrustSection from '@/components/Trust';
import Footer from '@/components/Footer';
import ContactSection from '@/components/Contact';

const Page = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Categories />
      <FeaturedCarousel />
      <TrustSection />
      <ContactSection />
    </>
  );
};

export default Page;
