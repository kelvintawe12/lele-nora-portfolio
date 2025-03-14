import React from 'react';
import { HeartIcon, BookIcon, CakeIcon, DumbbellIcon, UsersIcon } from 'lucide-react';
export const InterestsSection = () => {
  const interests = [{
    name: 'Child Education',
    icon: <BookIcon size={32} className="text-amber-600" />
  }, {
    name: 'Writing',
    icon: <BookIcon size={32} className="text-amber-600" />
  }, {
    name: 'Baking and culinary arts',
    icon: <CakeIcon size={32} className="text-amber-600" />
  }, {
    name: 'Athletics and Fitness',
    icon: <DumbbellIcon size={32} className="text-amber-600" />
  }, {
    name: 'Youth and Women Empowerment',
    icon: <UsersIcon size={32} className="text-amber-600" />
  }];
  return <section id="interests" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <HeartIcon size={32} className="text-amber-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Interests
          </h2>
          <div className="w-24 h-1 bg-amber-600 mt-4 mb-6"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {interests.map((interest, index) => <div key={index} className="bg-white border border-gray-100 shadow-md rounded-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105">
                <div className="mb-4">{interest.icon}</div>
                <h3 className="text-gray-800 font-medium">{interest.name}</h3>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};