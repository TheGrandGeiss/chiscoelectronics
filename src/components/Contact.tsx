import { GoArrowRight } from 'react-icons/go';

export default function ContactSection() {
  return (
    <section
      id='contact'
      className='mx-auto max-w-6xl px-6 py-32 lg:px-0'>
      <div className='flex flex-col justify-between gap-16 rounded-[32px] bg-[#f5f5f7] p-8 md:p-16 lg:flex-row'>
        {/* Left Side: Copy */}
        <div className='flex max-w-md flex-col'>
          <span className='mb-4 text-sm font-bold tracking-wider text-[#bf4800] uppercase'>
            Get in Touch
          </span>
          <h2 className='mb-6 font-horizon text-4xl tracking-tight text-ink md:text-5xl'>
            LET'S TALK.
          </h2>
          <p className='text-lg leading-relaxed text-ink-soft'>
            Whether you're looking for the perfect appliance for your home or
            reliable solutions for your business, we're here to guide you every
            step of the way. Reach out to our team and let's find the right fit
            for you.
          </p>
        </div>

        {/* Right Side: The Form */}
        <div className='w-full max-w-lg lg:w-1/2'>
          <form className='flex flex-col gap-6'>
            {/* Split Name/Phone inputs for a compact look on desktop */}
            <div className='flex flex-col gap-6 sm:flex-row'>
              <input
                type='text'
                placeholder='Full Name'
                className='w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-ink placeholder:text-slate-400 focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink transition-all'
                required
              />
              <input
                type='tel'
                placeholder='Phone Number'
                className='w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-ink placeholder:text-slate-400 focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink transition-all'
              />
            </div>

            <input
              type='email'
              placeholder='Email Address'
              className='w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-ink placeholder:text-slate-400 focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink transition-all'
              required
            />

            <textarea
              rows={4}
              placeholder='How can we help you?'
              className='w-full resize-none rounded-2xl border border-slate-200 bg-white px-6 py-4 text-ink placeholder:text-slate-400 focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink transition-all'
              required></textarea>

            <button
              type='submit'
              className='group flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-stoned transition-transform hover:scale-[1.02] active:scale-95'>
              Send Message
              <GoArrowRight
                size={20}
                className='transition-transform group-hover:translate-x-1'
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
