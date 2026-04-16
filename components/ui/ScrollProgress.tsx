'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Custom cubic-bezier for premium feel
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-white/5 z-[60] pointer-events-none">
      <motion.div
        className="h-full bg-[#f2ca50] origin-left will-change-transform"
        style={{ 
          scaleX: smoothProgress,
          transform: "translateZ(0)",
          boxShadow: "0 0 20px rgba(242, 202, 80, 0.4)"
        }}
      />
    </div>
  );
}
