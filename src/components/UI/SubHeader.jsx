import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen, onBrandsClick }) => {
  const navigationItems = [
    { name: 'Home', href: '#' },
    { name: 'Our Brands', href: '#', active: true, onClick: onBrandsClick },
    { name: 'About Us', href: '#' },
    { name: 'News & Insights', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">N</span>
            </div>
            <span className="text-xl font-bold text-gray-900">NeuAnchor</span>
            <span className="text-xs text-gray-500 hidden sm:block">Enabling change, navigating growth</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={item.onClick || (() => {})}
                className={`text-sm font-medium transition-colors duration-200 ${
                  item.active
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={item.onClick || (() => {})}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  item.active
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;