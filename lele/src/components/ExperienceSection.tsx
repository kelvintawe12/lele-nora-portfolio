import React from 'react';
import { BriefcaseIcon } from 'lucide-react';
export const ExperienceSection = () => {
  return <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <BriefcaseIcon size={32} className="text-amber-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-amber-600 mt-4 mb-6"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-amber-200"></div>
              <div className="space-y-12">
                <div className="relative">
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-3 h-6 w-6 rounded-full border-4 border-amber-600 bg-white"></div>
                  <div className="md:ml-auto md:w-1/2 md:pl-8 p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-[1.02]">
                    <div className="flex flex-col mb-3">
                      <h3 className="text-xl font-bold text-gray-800">
                        Teaching Assistant
                      </h3>
                      <p className="text-amber-600 font-medium">
                        African Leadership University - Rwanda
                      </p>
                      <p className="text-gray-600 text-sm">
                        January 2025 - Present
                      </p>
                    </div>
                    <p className="text-gray-700">
                      Facilitates the Professional Skills Lab class for 36 youth
                      in preparation for the professional world.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-3 h-6 w-6 rounded-full border-4 border-amber-600 bg-white"></div>
                  <div className="md:mr-auto md:w-1/2 md:pr-8 p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-[1.02]">
                    <div className="flex flex-col mb-3">
                      <h3 className="text-xl font-bold text-gray-800">
                        Partnerships Lead
                      </h3>
                      <p className="text-amber-600 font-medium">
                        Watoto Are Tomorrow - Uganda
                      </p>
                      <p className="text-gray-600 text-sm">November 2024</p>
                    </div>
                    <p className="text-gray-700">
                      Curates partnerships for education funding in two refugee
                      camps, providing education for 6000 refugee children.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-3 h-6 w-6 rounded-full border-4 border-amber-600 bg-white"></div>
                  <div className="md:ml-auto md:w-1/2 md:pl-8 p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-[1.02]">
                    <div className="flex flex-col mb-3">
                      <h3 className="text-xl font-bold text-gray-800">
                        Facilitator
                      </h3>
                      <p className="text-amber-600 font-medium">
                        Build-In-A-Box - Uganda
                      </p>
                      <p className="text-gray-600 text-sm">August 2023</p>
                    </div>
                    <p className="text-gray-700">
                      Helped operate two camps and equipped about 100 youth with
                      entrepreneurial skills for startups. Participants started
                      and refined their businesses, keeping positive social
                      impact at the heart of their missions.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-3 h-6 w-6 rounded-full border-4 border-amber-600 bg-white"></div>
                  <div className="md:mr-auto md:w-1/2 md:pr-8 p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-[1.02]">
                    <div className="flex flex-col mb-3">
                      <h3 className="text-xl font-bold text-gray-800">
                        Facilitator
                      </h3>
                      <p className="text-amber-600 font-medium">
                        Star Girls Africa - Virtual
                      </p>
                      <p className="text-gray-600 text-sm">
                        July 2023 - August 2023
                      </p>
                    </div>
                    <p className="text-gray-700">
                      Lectured the Entrepreneurial Leadership course to over 50
                      high school girls across Africa who went on to start their
                      projects in leadership and entrepreneurship.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-3 h-6 w-6 rounded-full border-4 border-amber-600 bg-white"></div>
                  <div className="md:ml-auto md:w-1/2 md:pl-8 p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-[1.02]">
                    <div className="flex flex-col mb-3">
                      <h3 className="text-xl font-bold text-gray-800">
                        Teacher
                      </h3>
                      <p className="text-amber-600 font-medium">
                        Good Shepherd Fold International School - Uganda
                      </p>
                      <p className="text-gray-600 text-sm">
                        January 2021 - May 2021
                      </p>
                    </div>
                    <p className="text-gray-700">
                      Taught English to children aged 7 - 12, maths to children
                      aged 6-8, and held P.E. classes for both groups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};