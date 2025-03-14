import React from 'react';
import { XIcon } from 'lucide-react';
interface WelcomePopupProps {
  onClose: () => void;
}
export const WelcomePopup: React.FC<WelcomePopupProps> = ({
  onClose
}) => {
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4 relative shadow-xl animate-slide-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <XIcon size={24} />
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome to My Portfolio
          </h2>
          <p className="text-gray-600 mb-6">
            I'm Lele Aliga Norah, passionate about education and leadership.
            Explore my journey and experiences.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>
      </div>
    </div>;
};