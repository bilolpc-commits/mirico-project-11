import { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);

  const updatePosition = useCallback((x: number, y: number) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(() => {
      setMousePosition({ x, y });
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
      setIsVisible(true);
      setIsIdle(false);
      
      // Reset idle timer
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      idleTimeoutRef.current = setTimeout(() => {
        setIsIdle(true);
      }, 1500);
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"], input, textarea, select, .interactive');
      setIsHoveringInteractive(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsIdle(false);
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updatePosition]);

  const baseSize = 400;
  const innerSize = 200;
  const glowScale = isHoveringInteractive ? 1.5 : 1;

  return (
    <>
      {/* Large outer glow - centered using transform */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: 0,
          top: 0,
          width: baseSize,
          height: baseSize,
        }}
        animate={{
          x: mousePosition.x - baseSize / 2,
          y: mousePosition.y - baseSize / 2,
          scale: glowScale,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          x: { type: "spring", damping: 30, stiffness: 300, mass: 0.3 },
          y: { type: "spring", damping: 30, stiffness: 300, mass: 0.3 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
          opacity: { duration: 0.2 },
        }}
      >
        <motion.div 
          className="w-full h-full rounded-full"
          animate={{
            scale: isIdle ? [1, 1.15, 1] : 1,
            opacity: isIdle ? [1, 0.7, 1] : 1,
          }}
          transition={isIdle ? {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          } : { duration: 0.3 }}
          style={{
            background: isHoveringInteractive 
              ? 'radial-gradient(circle, hsl(0 100% 60% / 0.25) 0%, hsl(0 84% 50% / 0.1) 40%, transparent 70%)'
              : 'radial-gradient(circle, hsl(0 84% 50% / 0.15) 0%, hsl(0 84% 50% / 0.05) 40%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>

      {/* Inner brighter glow - centered using transform */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: 0,
          top: 0,
          width: innerSize,
          height: innerSize,
        }}
        animate={{
          x: mousePosition.x - innerSize / 2,
          y: mousePosition.y - innerSize / 2,
          scale: glowScale,
          opacity: isVisible ? 0.8 : 0,
        }}
        transition={{
          x: { type: "spring", damping: 28, stiffness: 350, mass: 0.25 },
          y: { type: "spring", damping: 28, stiffness: 350, mass: 0.25 },
          scale: { type: "spring", damping: 18, stiffness: 350 },
          opacity: { duration: 0.2 },
        }}
      >
        <motion.div 
          className="w-full h-full rounded-full"
          animate={{
            scale: isIdle ? [1, 1.2, 1] : 1,
            opacity: isIdle ? [1, 0.6, 1] : 1,
          }}
          transition={isIdle ? {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          } : { duration: 0.3 }}
          style={{
            background: isHoveringInteractive
              ? 'radial-gradient(circle, hsl(0 100% 65% / 0.4) 0%, hsl(0 84% 50% / 0.15) 50%, transparent 100%)'
              : 'radial-gradient(circle, hsl(0 100% 60% / 0.25) 0%, hsl(0 84% 50% / 0.1) 50%, transparent 100%)',
            filter: 'blur(15px)',
          }}
        />
      </motion.div>
    </>
  );
};

export default CursorGlow;
