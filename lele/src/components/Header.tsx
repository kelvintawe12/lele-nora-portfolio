import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navLinks = [{
    name: 'About',
    href: '#about'
  }, {
    name: 'Education',
    href: '#education'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Interests',
    href: '#interests'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          <span className="text-amber-600">Lele</span> Aliga Norah
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              {link.name}
            </a>)}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-700 hover:text-amber-600 transition-colors py-2 font-medium" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>)}
          </div>
        </div>}
    </header>;
};