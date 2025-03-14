import React from 'react';
export const GalleryPage = () => {
  return <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Gallery</h1>
        <div className="grid gap-6">
          <div className="bg-amber-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
            <p className="text-gray-600">
              Photo gallery will be available here.
            </p>
          </div>
        </div>
      </div>
    </div>;
};