'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08, // The lower the number, the smoother/heavier the scroll (default is 0.1)
        duration: 1.2, // Controls the duration of the scroll animation
        smoothWheel: true, // Enables smooth scrolling for mouse wheels
      }}>
      {children}
    </ReactLenis>
  );
}
