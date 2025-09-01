import React from 'react';
import Badge from './Badge';

import Heroimg from '../../assets/CareerHero.png';
import Button from '../UI/Button';


const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Heroimg})` }}
      >
        <div className="absolute inset-0  bg-opacity-20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-[634px]   px-4 sm:px-6 lg:px-16">
        <div className="max-w-2xl">
          {/* Content Card */}
          <div className="bg-white rounded-2xl p-[40px] shadow-xl">
            <div className="mb-2">
              <Badge variant="primary">NeuAnchor Careers</Badge>
            </div>
            
            <h1 className="text-4xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight ">
              Guiding Students and <br />
              <span>Young Adults</span>
            </h1>
            <h2 className="text-3xl lg:text-3xl font-bold text-blue-600 mb-2 leading-tight">
              Towards Clarity & Purpose
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From subject selection to building global-ready profiles, NeuAnchor Careers helps students and families make confident, informed choices.
            </p>
            
            <Button variant="primary" size="lg">
              Visit Site
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;