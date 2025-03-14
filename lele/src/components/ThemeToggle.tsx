import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
export const ThemeToggle = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <motion.button whileHover={{
    scale: 1.1
  }} whileTap={{
    scale: 0.9
  }} onClick={toggleTheme} className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg">
      {theme === 'light' ? <MoonIcon className="w-6 h-6 text-gray-800" /> : <SunIcon className="w-6 h-6 text-white" />}
    </motion.button>;
};