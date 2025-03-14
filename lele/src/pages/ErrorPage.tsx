import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, ArrowLeftIcon, MailIcon } from 'lucide-react';
export const ErrorPage = () => {
  return <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="container max-w-2xl mx-auto text-center">
        <motion.div initial={{
        scale: 0.8,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        duration: 0.5
      }}>
          <div className="relative mb-8">
            <h1 className="text-9xl font-bold text-primary opacity-10">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div animate={{
              y: [0, -10, 0],
              rotate: [0, -5, 5, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}>
                <img src="https://illustrations.popsy.co/amber/creative-woman.svg" alt="Error Illustration" className="w-64 h-64" />
              </motion.div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The page you're looking for doesn\'t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Link to="/" className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-dark transition-colors">
                <HomeIcon size={20} />
                Back to Home
              </Link>
            </motion.div>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Link to="/contact" className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-primary border-2 border-primary rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <MailIcon size={20} />
                Contact Support
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>;
};