import React from 'react';
import { Anchor } from 'lucide-react';
import logo from '../assets/LandingPage/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 py-3 px-16 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
          <div>
            <img 
                            src={logo}
                            alt="Happy family representing community and growth"
                            className="w-full h-11 object-cover"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
            Home
          </Link>
          <Link to="/brands" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
            Our Brands
          </Link>
          <Link to="/aboutUs" className="text-gray-700 hover:text-blue-600  font-medium transition-colors duration-200">
            About Us
          </Link>
          <Link to="/news" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
            News & Insights
          </Link>
          <Link  to="/contact" className="text-gray-700 hover:text-blue-600  font-medium transition-colors duration-200">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;