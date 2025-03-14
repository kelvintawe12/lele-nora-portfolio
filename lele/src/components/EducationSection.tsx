import React from 'react';
import { BookOpenIcon } from 'lucide-react';
export const EducationSection = () => {
  return <section id="education" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <BookOpenIcon size={32} className="text-amber-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Education
          </h2>
          <div className="w-24 h-1 bg-amber-600 mt-4 mb-6"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md transform transition-transform hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  Bachelor of Science (BSc.) in Entrepreneurial Leadership
                </h3>
                <div className="mt-2 md:mt-0">
                  <span className="text-amber-600 font-semibold">
                    2024 - 2027
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 font-medium">
                  African Leadership University, Kigali - Rwanda
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold">Courses:</span> Complex
                  Problem Solving, Introduction to Grand Challenges and
                  Opportunities, Professional Skills Lab, British Council
                  SoCreative program.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md transform transition-transform hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  Diploma of the African Leadership Academy
                </h3>
                <div className="mt-2 md:mt-0">
                  <span className="text-amber-600 font-semibold">
                    2021 - 2023
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 font-medium">
                  African Leadership Academy, Johannesburg - South Africa
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold">Courses:</span> Business
                  studies, African Studies, Entrepreneurial leadership, Writing
                  and Rhetoric, Social Psychology, Macroeconomics, Humanities
                  Research, Creative Arts.
                </p>
                <p className="mt-2 text-amber-600 font-semibold">
                  Graduated with a 4.0 GPA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};