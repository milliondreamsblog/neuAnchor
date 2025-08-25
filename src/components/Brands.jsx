import React from 'react';
import image1 from '../assets/LandingPage/Brands3.png';

const Brands = () => {
  const brandsData = [
    {
      title: 'NeuAnchor Academies',
      description: 'Learn at your own pace with globally recognized, certified online self-learning courses.',
      // This card is special and doesn't use a standard image.
    },
    {
      title: 'NeuAnchor Conferences',
      description: 'Hosting impactful conferences with global leaders, keynote sessions, and panel discussions on leadership & motivation.',
      image: {image1}
    },
    {
      title: 'NeuAnchor Healing',
      description: 'Delivering holistic healing through FMMA courses, functional medicine, and advanced therapies.',
      image: 'https://images.pexels.com/photos/398532/pexels-photo-398532.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'NeuAnchor Hospitality',
      description: 'Offering specialized catering with curated diets, dehydrated foods, and premium culinary solutions.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'NeuAnchor Careers',
      description: 'Guiding students and professionals with career, leadership, and university counselling for a brighter tomorrow.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'NeuAnchor Education',
      description: 'Shaping the future of learning by building and auditing schools, with innovative marketing and franchising solutions.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'NeuAnchor Stars',
      description: 'Empowering special families through consultancy, counselling, workshops, and expert-led programs for inclusion and growth.',
      image: 'https://images.pexels.com/photos/10622435/pexels-photo-10622435.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'INDIANA G',
      description: 'Redefining corporate and personal gifting with unique retail and online gifting solutions.',
      image: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="brands" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm font-semibold tracking-wider uppercase mb-2">Our Brands</p>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#1D69B5] to-[#B62A88] bg-clip-text text-transparent">
            Discover the World of NeuAnchor
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {brandsData.map((brand, index) => {
            // Special layout for the "NeuAnchor Academies" card
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
                className="bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{brand.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{brand.description}</p>
                </div>
                <div className="rounded-2xl w-full h-48 p-4">
                  <img 
                    src={brand.image} 
                    alt={brand.title} 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;