import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface AnimatedGridBackgroundProps {
  imageUrl?: string;
  overlayClassName?: string;
}

export default function AnimatedGridBackground({ 
  imageUrl, 
  overlayClassName = 'bg-black/85' 
}: AnimatedGridBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 4K Background Image styled with high fidelity contrast masking */}
      {imageUrl && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000 ease-out opacity-45 mix-blend-luminosity"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}

      {/* Dark premium contrast mask */}
      <div className={`absolute inset-0 mix-blend-multiply ${overlayClassName}`} />

      {/* Dynamic Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* High-contrast moving lines light-beams */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-0 right-0 h-[1px] bg-black  /20 "
        />
        <motion.div 
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear', delay: 3 }}
          className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-black  /15 "
        />
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 5 }}
          className="absolute bottom-1/3 left-0 right-0 h-[1px] bg-black  /10 "
        />
      </div>

      {/* Interactive Vercel-style Mouse Tracker Spotlight */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 80%)`,
        }}
      />

      {/* High-fidelity ambient organic shapes */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/[0.02] rounded-none blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-white/[0.01] rounded-none blur-[120px] pointer-events-none" />
    </div>
  );
}
