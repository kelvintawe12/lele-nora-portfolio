import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
export const CustomCursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [isPointer, setIsPointer] = useState(false);
  const springConfig = {
    damping: 15,
    stiffness: 300,
    mass: 0.1
  };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      // Update pointer state
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer' || target.tagName === 'A' || target.tagName === 'BUTTON');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // Only show custom cursor on desktop
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }
  return <>
      <motion.div className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-50 mix-blend-difference" style={{
      x: cursorX,
      y: cursorY,
      translateX: '-50%',
      translateY: '-50%',
      scale: isPointer ? 1.5 : 1
    }} />
      <motion.div className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-50 mix-blend-difference" style={{
      x: cursorX,
      y: cursorY,
      translateX: '-50%',
      translateY: '-50%',
      scale: isPointer ? 1.5 : 1
    }} />
    </>;
};