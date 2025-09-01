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

      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
     
          <div className="lg:col-span-5">
            <div className="bg-white p-8 lg:p-12 relative">

              <p className="text-gray-700 text-[20px] mb-2 font-medium font-Figtree">
                Why Choose NeuAnchor?
              </p>
              
  
              <h2 className="text-3xl lg:text-[34px] font-bold font-baskerville text-[#1D69B5] leading-tight">
                Your Trusted Partner<br />
                <span className="text-[#195FA6]">in Growth</span>
              </h2>
              
              
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {trustData.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#1D69B5] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#1D69B5] transition-colors duration-300">
                    {item.icon}
                  </div>
                  
          
                  <div className="space-y-1">
                    <h3 className=" font-Figtree text-[18px] lg:text-xl font-semibold text-black leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-Figtree  font-semibold text-[18px] lg:text-xl  text-black leading-tight">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
};

export default Trust;