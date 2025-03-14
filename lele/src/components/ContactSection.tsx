import React, { useState } from 'react';
import { MailIcon, PhoneIcon, LinkedinIcon, LoaderIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
export const ContactSection = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Message sent successfully! Lele will get back to you soon.', {
        duration: 3000
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Redirect after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };
  return <section id="contact" className="py-16 bg-amber-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <MailIcon size={32} className="text-amber-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-amber-600 mt-4 mb-6"></div>
          <p className="text-center text-gray-600 max-w-2xl">
            Feel free to reach out if you're interested in my work or would like
            to discuss potential opportunities.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <MailIcon size={24} className="text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Email
              </h3>
              <p className="text-amber-600 text-center">lelealiga@gmail.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <PhoneIcon size={24} className="text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Phone
              </h3>
              <p className="text-amber-600 text-center">+250794427354</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <LinkedinIcon size={24} className="text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                LinkedIn
              </h3>
              <p className="text-amber-600 text-center">Connect on LinkedIn</p>
            </div>
          </div>
          <div className="mt-12 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white" placeholder="Your Email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input type="text" id="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea id="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white" placeholder="Your Message" />
              </div>
              <motion.div whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                <button type="submit" disabled={isLoading} className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors shadow-md w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-50">
                  {isLoading ? <>
                      <LoaderIcon className="animate-spin" size={20} />
                      Sending...
                    </> : 'Send Message'}
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};