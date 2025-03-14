import React from 'react';
import { UserIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <UserIcon size={32} className="text-amber-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-amber-600 mt-4 mb-6"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            A dynamic leader with a strong ability to curate interpersonal
            relations. Passionate about child welfare and revamping education,
            aiming to add value and gain experience from any organization of
            affiliation.
          </p>
        </div>
      </div>
    </section>;
};