import './globals.css';
import { Pliant } from 'next/font/google';
import Horizon from 'next/font/local';
import SmoothScrolling from '@/components/SmoothScrolling';
import MotionProvider from '@/components/MotionProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

const pliant = Pliant({
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  display: 'swap',
});

const horizon = Horizon({
  src: '../fonts/Horizon.woff2',
  variable: '--font-horizon',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Chisco Electronics',
    default: 'Chisco Electronics | Powering homes. Equipping businesses.', // Shows on the home page
  },
  description:
    'Premium electronics engineered for excellence. Quality appliances and power solutions from trusted brands.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${pliant.className} antialiased ${horizon.variable}`}>
      <body>
        <main>
          <SmoothScrolling>
            <MotionProvider>
              <Navbar />
              {children}
              <Footer />
            </MotionProvider>
          </SmoothScrolling>
        </main>
      </body>
    </html>
  );
}
