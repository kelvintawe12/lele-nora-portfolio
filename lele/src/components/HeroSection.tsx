import React from 'react';
import { MapPinIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react';
export const HeroSection = () => {
  return <section className="bg-gradient-to-br from-amber-50 to-white min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="rounded-full overflow-hidden border-4 border-amber-600 shadow-xl h-64 w-64 md:h-80 md:w-80">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Lele Aliga Norah" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 animate-fade-in">
              <span className="text-amber-600">Lele</span> Aliga Norah
            </h1>
            <p className="text-xl text-gray-600 mb-6 animate-fade-in-delay">
              A dynamic leader passionate about child welfare and revamping
              education
            </p>
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPinIcon size={18} className="text-amber-600" />
                <span>Bumbogo, Kigali, Rwanda</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <PhoneIcon size={18} className="text-amber-600" />
                <span>+250794427354</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MailIcon size={18} className="text-amber-600" />
                <span>lelealiga@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <LinkedinIcon size={18} className="text-amber-600" />
                <span>LinkedIn</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact" className="px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors shadow-md">
                Contact Me
              </a>
              <a href="#about" className="px-6 py-3 bg-white text-amber-600 border border-amber-600 rounded-full hover:bg-amber-50 transition-colors shadow-md">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};