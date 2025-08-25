import React from 'react';
import { Anchor, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'News & Insights', href: '#news' },
        { name: 'Contact Us', href: '#contact' }
      ]
    },
    {
      title: 'Our Brands',
      links: [
        { name: 'NeuAnchor Academies', href: '#' },
        { name: 'NeuAnchor Conferences', href: '#' },
        { name: 'NeuAnchor Healing', href: '#' },
        { name: 'NeuAnchor Hospitality', href: '#' }
      ]
    },
    {
      title: '',
      links: [
        { name: 'NeuAnchor Careers', href: '#' },
        { name: 'NeuAnchor Education', href: '#' },
        { name: 'NeuAnchor Stars', href: '#' },
        { name: 'INDIANA G', href: '#' }
      ]
    }
  ];

  const handleNavClick = (e, targetId) => {
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = 80; // Adjust this value based on your actual header height
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-[#195FA6] text-white py-16 px-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-white text-2xl font-bold mb-6 no-underline">
              <Anchor className="w-8 h-8" />
              NeuAnchor
            </a>
            <p className="text-gray-300 leading-relaxed">
              Empowering growth through our family of brands across 
              education, healthcare, hospitality, and beyond.
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {footerSections.map((section, index) => (
                <div key={index}>
                  {section.title && (
                    <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                  )}
                  <ul className="space-y-2 list-none p-0">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href} 
                          onClick={(e) => handleNavClick(e, link.href)}
                          className="text-gray-300 hover:text-white transition-colors no-underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">&copy; 2024 Blueprint Ventures</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-blue-800 transition-all duration-300 hover:-translate-y-1 no-underline">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-blue-800 transition-all duration-300 hover:-translate-y-1 no-underline">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-blue-800 transition-all duration-300 hover:-translate-y-1 no-underline">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
