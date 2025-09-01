import React from 'react';
import { Anchor, Facebook, Twitter, Linkedin } from 'lucide-react';
import footer from '../assets/LandingPage/footer.svg'

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
      title: '      NeuAnchor              ',
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
    <footer className="bg-[#195FA6] text-white py-16 px-24">
      <div className="max-w-7xl ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center   text-white text-2xl font-bold mb-6 no-underline">
                <img src={footer} alt="Footer Asset" className='h-[220px] w-[200px]' />
            </a>
          </div>
          <div className="lg:col-start-2 pl-20 lg:col-span-4 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {footerSections.map((section, index) => (
                <div key={index}>
                  {section.title && (
                    <h4 className="text-white font-Figtree font-semibold mb-4">{section.title}</h4>
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
        <div className="border-t border-white/20 pt-4 -px-24 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">&copy; Copyright © 2025 Bluparrot Ventures</p>
          <div className="flex gap-4">
            <a href="#" className="w-6 h-6 rounded-full  flex items-center justify-center  bg-white text-blue-800 transition-all duration-300 hover:-translate-y-1 no-underline">
              <Facebook className="w-3 h-3" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full  flex items-center justify-center  bg-white text-blue-800 transition-all duration-300 hover:-translate-y-1 no-underline">
              <Twitter className="w-3 h-3" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full  flex items-center justify-center  bg-white text-blue-800 transition-all duration-300 hover:-translate-y-1 no-underline">
              <Linkedin className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
