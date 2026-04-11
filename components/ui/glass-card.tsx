'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  glowColor = "rgba(255, 255, 255, 0.1)" 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position relative to the card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smoothing springs
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 200 });
  
  // Highlight position
  const shineX = useSpring(useTransform(x, [-0.5, 0.5], ["0%", "100%"]), { damping: 20, stiffness: 200 });
  const shineY = useSpring(useTransform(y, [-0.5, 0.5], ["0%", "100%"]), { damping: 20, stiffness: 200 });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize position from -0.5 to 0.5
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="perspective-1000 w-full h-full"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out ${className}`}
      >
        {/* Background Glass Layer */}
        <div className="absolute inset-0 z-0 bg-white/[0.03] backdrop-blur-[12px]" />
        
        {/* Border Glow Layer */}
        <div 
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
          style={{
            border: `1.5px solid ${isHovered ? glowColor : 'rgba(255, 255, 255, 0.1)'}`,
            boxShadow: isHovered ? `0 0 20px ${glowColor}33` : 'none'
          }}
        />

        {/* Shine/Highlight Effect */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.08) 0%, transparent 80%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Content Layer */}
        <div className="relative z-30 transform-gpu w-full h-full" style={{ transform: "translateZ(20px)" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};
