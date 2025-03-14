import React from 'react';
import { StarIcon, GlobeIcon } from 'lucide-react';
export const SkillsSection = () => {
  const skills = ['Interpersonal', 'Organizational', 'Microsoft Software', 'Public speaking', 'Facilitating', 'Research'];
  const languages = [{
    name: 'English',
    level: 'Fluent',
    percentage: 100
  }, {
    name: 'Luganda',
    level: 'Intermediate',
    percentage: 60
  }, {
    name: 'German',
    level: 'Beginner',
    percentage: 30
  }];
  return <section id="skills" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills */}
          <div>
            <div className="flex flex-col items-center mb-10">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <StarIcon size={32} className="text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-center text-gray-800">
                Skills
              </h2>
              <div className="w-16 h-1 bg-amber-600 mt-4"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3 transform transition-transform hover:scale-105">
                  <div className="h-3 w-3 rounded-full bg-amber-600"></div>
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>)}
            </div>
          </div>
          {/* Languages */}
          <div>
            <div className="flex flex-col items-center mb-10">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <GlobeIcon size={32} className="text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-center text-gray-800">
                Languages
              </h2>
              <div className="w-16 h-1 bg-amber-600 mt-4"></div>
            </div>
            <div className="space-y-6">
              {languages.map((language, index) => <div key={index} className="bg-white p-5 rounded-lg shadow-md">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-800 font-medium">
                      {language.name}
                    </span>
                    <span className="text-amber-600">{language.level}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-full bg-amber-600 rounded-full" style={{
                  width: `${language.percentage}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};