import React from 'react';
import image from '../assets/LandingPage/Hero.png'

export const Hero = () => {
  return (
    <section className="bg-[#E2F4FF]">
      <div className="max-w-7xl pl-6 lg:pl-16 ">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 -mt-8">
            {/* Badge */}
            <div className="inline-flex items-center  px-4 py-2 bg-badge rounded-full text-sm font-medium text-yellow-800 border border-[#BFAA2C]">
              15 years of building a Legacy
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight font-baskerville  ">
                <span className="font-baskerville text-gray-900">Empowering Growth,</span>
                <br />
                <span className="text-[#1D69B5]">Wellness, and Community</span>
              </h1>
              
              <p className="text-lg md:text-[17px] font-medium text-gray-600 leading-relaxed max-w-lg font-Figtree" >
                Welcome to NeuAnchor, your comprehensive destination for holistic growth and well-being. Offering specialised consultations for special needs, education, career guidance, leadership and motivational conferences, self-paced online life skills courses, bespoke gifting, and curated specialised meals, we bring together a diverse range of services under one trusted umbrella. Explore personalised solutions designed to support your journey and anchor your success across every facet of life.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:-ml-8">
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