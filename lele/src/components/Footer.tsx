import React from 'react';
import { LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">
              <span className="text-amber-500">Lele</span> Aliga Norah
            </p>
            <p className="text-gray-300 text-sm mt-1">
              Child Education Advocate & Leadership Mentor
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-amber-600 transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-amber-600 transition-colors">
              <MailIcon size={20} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-amber-600 transition-colors">
              <PhoneIcon size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Lele Aliga Norah. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};