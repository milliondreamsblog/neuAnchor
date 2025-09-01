import React from 'react';

const CTA = () => {
  return (
    <section id="contact" className="py-20 text-center ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#9324A1] mb-8">
          Ready to work with us?
        </h2>
        <a 
          href="#" 
          className="inline-flex items-center justify-center px-12 py-3 bg-[#333333] text-white font-medium rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg no-underline"
        >
          Contact Us Today
        </a>
      </div>
    </section>  
  );
};

export default CTA;