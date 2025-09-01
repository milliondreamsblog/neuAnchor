import React, { useState } from 'react';

import HeroSection from '../components/CareerDetails/HeroSection.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import BrandsHeader from '../components/CareerDetails/BrandHeaders.jsx';
import WhatWeOffer from '../components/CareerDetails/WhatWeOffer.jsx';
import ProgramsSection from '../components/CareerDetails/ProgramsAndSession.jsx';
import WhyItMatters from '../components/CareerDetails/WhyItMatters.jsx';

const CareerDetails = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [showBrandsHeader, setShowBrandsHeader] = useState(false);
  return (
    <section>
        <Header />
            
                <BrandsHeader />
                <HeroSection />
                <WhatWeOffer />
                <WhyItMatters />


                <ProgramsSection />
         <Footer />
    </section>
  );
};

export default CareerDetails;