import React from 'react';
import image1 from '../assets/LandingPage/Brands3.png';
import cardImg from '../assets/LandingPage/cardImg.svg';

const Brands = () => {
  const brandsData = [
    {
      title: 'NeuAnchor Academies',
      description: 'Learn at your own pace with globally recognized, certified online self-learning courses.',
      // This card is special and doesn't use a standard image.
      image: cardImg
    },
    {
      title: 'NeuAnchor Conferences',
      description: 'Hosting impactful conferences with global leaders, keynote sessions, and panel discussions on leadership & motivation.',
      image: cardImg
    },
    {
      title: 'NeuAnchor Healing',
      description: 'Delivering holistic healing through FMMA courses, functional medicine, and advanced therapies.',
      image: cardImg
    },
    {
      title: 'NeuAnchor Hospitality',
      description: 'Offering specialized catering with curated diets, dehydrated foods, and premium culinary solutions.',
      image: cardImg
    },
    {
      title: 'NeuAnchor Careers',
      description: 'Guiding students and professionals with career, leadership, and university counselling for a brighter tomorrow.',
      image: cardImg
    },
    {
      title: 'NeuAnchor Education',
      description: 'Shaping the future of learning by building and auditing schools, with innovative marketing and franchising solutions.',
      image: cardImg
    },
    {
      title: 'NeuAnchor Stars',
      description: 'Empowering special families through consultancy, counselling, workshops, and expert-led programs for inclusion and growth.',
      image: cardImg
    },
    {
      title: 'INDIANA G',
      description: 'Redefining corporate and personal gifting with unique retail and online gifting solutions.',
      image: cardImg
    }
  ];

  return (
    <section id="brands" className="py-20 px-16 bg-[#F5F5F5] bg-[url('assets/LandingPage/Anchor.png')] bg-center bg-cover ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-600  font-FigTree text-[22px] font-semibold tracking-wider uppercase mb-2">Our Brands</p>
          <h2 className="text-4xl lg:text-4xl font-baskerville font-bold bg-gradient-to-r from-[#1D69B5] via-[#7758a1] to-[#B62A88] bg-clip-text text-transparent">
            Discover the World of NeuAnchor
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {brandsData.map((brand, index) => {
            // if (brand.title === 'NeuAnchor Academies') {
            //   return (
            //     <div 
            //       key={index}
            //       className="bg-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 flex flex-col"
            //     >
            //       <h3 className="text-xl font-bold text-gray-800 mb-2">{brand.title}</h3>
            //       <p className="text-gray-600 text-sm leading-relaxed mb-4">{brand.description}</p>
            //       <div className="mt-auto text-center pt-4 border-t border-gray-100">
            //         <img 
            //           src={image} 
            //           alt="NeuAnchor Academies Logo" 
            //           className="h-20 mx-auto mb-4"
            //         />
            //       </div>
            //     </div>
            //   );
            // }
            
            // Standard layout for all other brand cards
            return (
             <div 
                  key={index}
                  className="relative w-[260px] h-[340px] bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 overflow-hidden flex flex-col group"
                >
                  <div className="pt-4 pr-4 pl-4 flex-grow flex flex-col">
                    <h3 className="text-[18px] font-bold text-gray-800 mb-1">{brand.title}</h3>
                    <p className="text-gray-600 text-[12px] leading-relaxed">{brand.description}</p>
                  </div>
                  <div className=" border border-[#E0E0E0] rounded-2xl w-57 h-44 ml-4 mr-15 mb-4">
                    <img 
                      src={brand.image} 
                      alt={brand.title} 
                      className="w-full h-[130px]  rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-opacity-50 flex items-baseline-last justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-[-15px] translate-x-[10px] duration-300 rounded-lg">
                      <button className= "text-[#1D69B5] font-semibold py-3 px-6 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                        Visit Now
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
  
                  {/* Visit Now Button - appears on hover */}
                  
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;