'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence, useVelocity, useTransform } from 'framer-motion';

export const CustomCursor = () => {
  // Nucleus (Dot) - Instant Follow
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Aura (Trail) - Lagging Spring
  const auraX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.6 });
  const auraY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.6 });

  // Velocity for distortion effects
  const velX = useVelocity(mouseX);
  const velY = useVelocity(mouseY);
  
  // Stretch Aura based on velocity
  const scaleX = useTransform(velX, [-3000, 0, 3000], [1.5, 1, 1.5]);
  const scaleY = useTransform(velY, [-3000, 0, 3000], [1.5, 1, 1.5]);

  const [cursorVariant, setCursorVariant] = useState<'default' | 'pointer' | 'text'>('default');
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('cursor-pointer') ||
        target.closest('.interactive-card')
      ) {
        setCursorVariant('pointer');
      } else if (
        target.tagName === 'H1' || 
        target.tagName === 'H2' || 
        target.tagName === 'H3' || 
        target.tagName === 'P'
      ) {
        setCursorVariant('text');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* ── Outer Aura (Lagging Trail with Velocity-Stretch) ── */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-[#f2ca50]/20 bg-[#f2ca50]/5 backdrop-blur-[2px]"
        style={{
          x: auraX,
          y: auraY,
          translateX: '-50%',
          translateY: '-50%',
          scaleX,
          scaleY,
        }}
        animate={{
          width: cursorVariant === 'pointer' ? 80 : 32,
          height: cursorVariant === 'pointer' ? 80 : 32,
          opacity: cursorVariant === 'text' ? 0 : 1,
        }}
      />

      {/* ── Inner Nucleus (Precise Dot) ── */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#f2ca50] rounded-full pointer-events-none z-[9999] shadow-[0_0_15px_rgba(242,202,80,0.6)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.6 : cursorVariant === 'pointer' ? 0 : 1,
          opacity: cursorVariant === 'text' ? 0.5 : 1,
          height: cursorVariant === 'text' ? 80 : 6,
          width: cursorVariant === 'text' ? 2 : 6,
          borderRadius: cursorVariant === 'text' ? 2 : '100%',
        }}
      />

      {/* ── Click Radial Pulse Ripple ── */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] border border-[#f2ca50] rounded-full"
            initial={{ width: 0, height: 0, opacity: 1, x: mouseX.get(), y: mouseY.get(), translateX: '-50%', translateY: '-50%' }}
            animate={{ width: 100, height: 100, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
    </>
  );
};
