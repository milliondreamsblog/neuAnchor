import React from 'react';
import image from '../assets/LandingPage/Hero.png'
export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl pl-6 lg:pl-16 ">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-sm font-medium text-yellow-800 border border-yellow-200">
              15 years of building a Legacy
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
                <span className="text-gray-900">Empowering Growth,</span>
                <br />
                <span className="text-[#1D69B5]">Wellness, and Community</span>
              </h1>
              
              <p className="text-lg md:text-[16px] font-medium text-gray-600 leading-relaxed max-w-lg">
                A family of brands delivering solutions in education, careers, 
                healthcare, events, hospitality, and gifting.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:ml-8">
            <div className="relative z-10">
              <img 
                src={image}
                alt="Happy family representing community and growth"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;