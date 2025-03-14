import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
export const ScrollProgress = () => {
  const {
    scrollYProgress
  } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left" style={{
      scaleX: scrollYProgress
    }} />
      {isVisible && <motion.button initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} onClick={() => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })} className="fixed bottom-4 left-4 z-50 p-3 rounded-full bg-primary text-white shadow-lg">
          ↑
        </motion.button>}
    </>;
};