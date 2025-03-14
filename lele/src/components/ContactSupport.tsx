import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FiLinkedin, FiMail, FiMessageCircle, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// Animation configurations
const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const socialIconVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.2, color: "#BF8B67" },
};

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  inquiryType: z.enum(["collaboration", "education", "general"]),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSupport() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccess(true);
      reset();
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-[#0A192F] text-ivory p-8"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.h2 
          className="text-4xl font-playfair mb-8 text-gold"
          variants={formVariants}
        >
          Connect with Norah
        </motion.h2>

        {/* Contact Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            variants={formVariants}
          >
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                {...register("name")}
                className="w-full bg-[#172A45] rounded-lg p-3 focus:ring-2 focus:ring-gold"
              />
              {errors.name && (
                <motion.span 
                  className="text-rose-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errors.name.message}
                </motion.span>
              )}
            </div>

            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input
                type="email"
                {...register("email")}
                className="w-full bg-[#172A45] rounded-lg p-3 focus:ring-2 focus:ring-gold"
              />
              {errors.email && (
                <motion.span className="text-rose-400 text-sm">
                  {errors.email.message}
                </motion.span>
              )}
            </div>

            <div>
              <label className="block text-sm mb-2">Inquiry Type</label>
              <select
                {...register("inquiryType")}
                className="w-full bg-[#172A45] rounded-lg p-3 focus:ring-2 focus:ring-gold"
              >
                <option value="collaboration">Collaboration Opportunity</option>
                <option value="education">Education Partnership</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                {...register("message")}
                rows={5}
                className="w-full bg-[#172A45] rounded-lg p-3 focus:ring-2 focus:ring-gold"
              />
              {errors.message && (
                <motion.span className="text-rose-400 text-sm">
                  {errors.message.message}
                </motion.span>
              )}
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gold text-navy py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">🌀</span>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Contact Alternatives */}
          <motion.div 
            className="space-y-8"
            variants={formVariants}
          >
            <div className="bg-[#172A45] p-6 rounded-lg">
              <h3 className="text-xl font-playfair mb-4 text-gold">
                Direct Connections
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/+250794427354"
                  className="flex items-center gap-3 hover:text-gold transition-colors"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>+250 794 427 354</span>
                </motion.a>

                <motion.a
                  href="mailto:lelealiga@gmail.com"
                  className="flex items-center gap-3 hover:text-gold transition-colors"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <FiMail className="text-2xl" />
                  <span>lelealiga@gmail.com</span>
                </motion.a>
              </div>
            </div>

            <div className="bg-[#172A45] p-6 rounded-lg">
              <h3 className="text-xl font-playfair mb-4 text-gold">
                Follow Norah's Journey
              </h3>
              
              <div className="flex gap-4">
                <motion.a
                  href="[LinkedIn URL]"
                  className="p-3 rounded-full bg-[#0A192F]"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <FiLinkedin className="text-2xl" />
                </motion.a>
                
                {/* Add other social links similarly */}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Notification */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              className="fixed bottom-8 right-8 bg-gold text-navy p-4 rounded-lg flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <FiMessageCircle />
              Message sent successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}