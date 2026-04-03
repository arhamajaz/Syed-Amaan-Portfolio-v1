'use client';

import { useEffect, useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (barRef.current) {
      barRef.current.style.width = `${latest * 100}%`;
    }
  });

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-[#f2ca50]/10 z-[60]">
      <div
        ref={barRef}
        className="h-full bg-[#f2ca50] w-0 transition-none shadow-[0_0_10px_#f2ca50]"
      />
    </div>
  );
}
