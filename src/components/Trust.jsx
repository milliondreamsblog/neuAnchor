import React from 'react';
import { Award, Star, Rocket, Monitor } from 'lucide-react';

const Trust = () => {
  const trustData = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Multi-industry',
      subtitle: 'expertise'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Premium',
      subtitle: 'service delivery'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Inclusive and',
      subtitle: 'innovative solutions'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Online',
      subtitle: 'presence'
    }
  ];

  return (
    <section className="py-16  bg-white relative overflow-hidden">
      {/* Background decoration */}
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Box */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 lg:p-12 relative">
              {/* Top question */}
              <p className="text-gray-700 text-2xl mb-6 font-medium">
                Why Choose NeuAnchor?
              </p>
              
              {/* Main heading */}
              <h2 className="text-4xl lg:text-4xl font-bold text-blue-600 leading-tight">
                Your Trusted Partner<br />
                <span className="text-blue-800">in Growth</span>
              </h2>
              
              
            </div>
          </div>
          
          {/* Right Content - Features */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {trustData.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-4">
                  {/* Circular Icon */}
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors duration-300">
                    {item.icon}
                  </div>
                  
                  {/* Title */}
                  <div className="space-y-1">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom yellow accent line */}
    </section>
  );
};

export default Trust;