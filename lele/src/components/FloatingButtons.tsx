import React from 'react';
import { Link } from 'react-router-dom';
import { BookIcon, UserIcon, BriefcaseIcon, ImageIcon, CalendarIcon } from 'lucide-react';
export const FloatingButtons = () => {
  const buttons = [{
    icon: <UserIcon size={20} />,
    label: 'About',
    to: '/professional-summary'
  }, {
    icon: <BookIcon size={20} />,
    label: 'Education',
    to: '/education'
  }, {
    icon: <BriefcaseIcon size={20} />,
    label: 'Experience',
    to: '/experience'
  }, {
    icon: <ImageIcon size={20} />,
    label: 'Gallery',
    to: '/gallery'
  }, {
    icon: <CalendarIcon size={20} />,
    label: 'Events',
    to: '/events'
  }];
  return <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2">
      {buttons.map((button, index) => <Link key={index} to={button.to} className="group flex items-center gap-2 bg-white p-2 rounded-lg shadow-md hover:bg-primary hover:text-white transition-all duration-300 animate-float" style={{
      animationDelay: `${index * 0.1}s`
    }}>
          {button.icon}
          <span className="hidden group-hover:inline whitespace-nowrap text-sm">
            {button.label}
          </span>
        </Link>)}
    </div>;
};