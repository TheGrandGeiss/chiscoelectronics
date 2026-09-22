// app/store/[id]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { BiStar, BiCheckShield, BiPackage, BiArrowBack } from 'react-icons/bi';
import AddToCartSection from '@/components/AddToCartSection';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Fetch the specific product just for the metadata
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    return {
      title: 'Product Not Found',
    };
  }

  const product = await res.json();

  return {
    title: product.title, // Tab will read: "Product Name | Chisco Electronics"
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 3600 },
  });
  const product = await res.json();

  return (
    <main className='min-h-screen bg-[#f5f5f7] pb-32 pt-32'>
      <div className='mx-auto max-w-6xl px-6 lg:px-0'>
        {/* Back Navigation */}
        <Link
          href='/store'
          className='mb-8 inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink'>
          <BiArrowBack size={18} />
          Back to Store
        </Link>

        {/* Main Product Layout: Image Left, Details Right */}
        <div className='flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16'>
          {/* Left Side: Product Image (Apple-style white stage) */}
          <div className='relative flex w-full items-center justify-center rounded-4xl border border-slate-100 bg-white p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:sticky lg:top-32 lg:w-1/2'>
            <div className='relative aspect-square w-full max-w-md'>
              <Image
                src={product.image}
                alt={product.title}
                fill
                className='object-contain'
                sizes='(max-width: 1024px) 100vw, 50vw'
                priority
              />
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className='flex w-full flex-col lg:w-1/2 lg:py-8'>
            <span className='mb-3 text-xs font-bold tracking-wider text-[#bf4800] uppercase'>
              {product.category}
            </span>

            <h1 className='mb-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl'>
              {product.title}
            </h1>

            {/* Ratings from FakeStore API */}
            <div className='mb-6 flex items-center gap-2'>
              <div className='flex text-yellow-500'>
                {[...Array(5)].map((_, i) => (
                  <BiStar
                    key={i}
                    size={20}
                    className={
                      i < Math.round(product.rating.rate)
                        ? 'fill-current'
                        : 'text-slate-300'
                    }
                  />
                ))}
              </div>
              <span className='text-sm font-medium text-ink-soft'>
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>

            <p className='text-3xl font-bold tracking-tight text-ink'>
              ${product.price.toFixed(2)}
            </p>

            {/* Divider */}
            <div className='my-8 h-px w-full bg-slate-200' />

            <div className='prose prose-slate'>
              <h3 className='mb-4 text-lg font-semibold text-ink'>Overview</h3>
              <p className='text-base leading-relaxed text-ink-soft'>
                {product.description}
              </p>
            </div>

            {/* Client Component for interactive Add to Cart */}
            <AddToCartSection product={product} />

            {/* Trust Signals for Conversion */}
            <div className='mt-10 flex flex-col gap-4 rounded-2xl bg-white p-6 border border-slate-100 shadow-sm'>
              <div className='flex items-center gap-3 text-sm font-medium text-ink'>
                <BiPackage
                  size={22}
                  className='text-[#bf4800]'
                />
                Free standard delivery on orders over $500
              </div>
              <div className='flex items-center gap-3 text-sm font-medium text-ink'>
                <BiCheckShield
                  size={22}
                  className='text-[#bf4800]'
                />
                Includes standard 1-year hardware warranty
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
