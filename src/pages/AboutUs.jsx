import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamMemberCard from '../components/AboutUs/TeamMemberCard';
import CTA from '../components/CTA';
import profile from '../assets/LandingPage/profile.svg'
import Hero from '../assets/AboutUs/Hero.svg'
import Story from '../assets/AboutUs/Story.svg';
import mission from '../assets/AboutUs/mission.svg'

const AboutUs = () => {
    const teamMembers = [
    {
      id: 1,
      name: "Full Name",
      designation: "DESIGNATION",
      imageUrl: profile,
      isActive: false
    },
    {
      id: 2,
      name: "Full Name",
      designation: "DESIGNATION",
      imageUrl: profile,
      isActive: false
    },
    {
      id: 3,
      name: "Full Name",
      designation: "DESIGNATION",
      imageUrl: profile,
      isActive: false
    },
    {
      id: 4,
      name: "Full Name",
      designation: "DESIGNATION",
      imageUrl: profile,
      isActive: false
    }
  ];
  return (
    <section>
    <Header />
    <div className="mr-16 ml-16 mt-12">
      {/* Main heading */}
      <h1 className="text-[46px] font-bold text-blank mb-6 leading-16"
            style={{fontFamily: 'Libre Baskerville'}}
      >
        NeuAnchor – Building Inclusive, Innovative,{' '}
        <span className="text-[#175491] leading-1" style={{fontFamily: 'Libre Baskerville'}}>Impactful Futures</span>
      </h1>
      
      {/* Subtitle */}
      <p className="text-2xl font-medium text-black mb-12 max-w-7xl"
      style={{fontFamily: 'Figtree', fontWeight:500}}
      >
        A family of brands delivering solutions in education, careers, healthcare, events, hospitality, and gifting.
      </p>
      
      {/* Hero image */}
      <div className="w-full">
        <img
          src={Hero}
          alt="Happy family - father, mother and young child smiling together"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>

      <div className="max-w-6xl py-16 ">
        <div className="grid lg:grid-cols-3 gap-x-8 items-start">
            {/* Left side - Content (takes 2 columns) */}
            <div className="space-y-2 lg:col-span-1 ">
              <div>
                  <p className="text-sm font-semibold font-Figtree text-black mb-2">
                  Who We Are
                  </p>
                  <h2 className="text-3xl font-bold font-baskerville text-[#1D69B5] mb-6">
                  Our Story
                  </h2>
              </div>
              <div className="relative ">
                  <img
                  src={Story}
                  alt="Professional woman smiling"
                  className="w-full h-64 rounded-lg shadow-md object-cover"
                  />
              </div>
            
            
            </div>

            
            {/* Right side - Image (takes 1 column) */}
            <div className="lg:col-span-2">
            
            <div className="space-y-4 ml-12 text-gray-700 leading-relaxed">
                <p>
                NetAnchor was founded with a vision to bridge gaps across education, careers, 
                special needs, and personal growth. With expertise spanning multiple industries, we 
                create solutions that are inclusive, innovative, and future-ready.
                </p>
                
                <p>
                NetAnchor was founded with a vision to bridge gaps across education, careers, 
                special needs, and personal growth. With expertise spanning multiple industries, we 
                create solutions that are inclusive, innovative, and future-ready.
                </p>
                
                <p>
                NetAnchor was founded with a vision to bridge gaps across education, careers, 
                special needs, and personal growth. With expertise spanning multiple industries, we 
                create solutions that are inclusive, innovative, and future-ready.
                </p>
                
                <p>
                NetAnchor was founded with a vision to bridge gaps across education, careers, 
                special needs, and personal growth. With expertise spanning multiple industries, we 
                create solutions that are inclusive, innovative, and future-ready.
                </p>
            </div>
            </div>
        </div>
        </div>
      
        <div className="py-20 bg-[#EBF5FF] from-blue-50/80 via-gray-50 to-blue-100/60 -mx-16 px-16">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-[500px] items-center">
      
      {/* Mission Card - Top Left */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-blue-500/20 lg:self-start">
        <h2 className="text-4xl font-bold mb-8 tracking-tight font-baskerville">Mission</h2>
        <p className="text-blue-50/90 leading-relaxed text-lg font-light font-Figtree">
          To empower individuals, families, and organizations with transformative solutions across education, careers, wellness, and innovation.
        </p>
      </div>

      {/* Center Image - Spans full height */}
      <div className="relative lg:row-span-1 flex items-center justify-center">
        <div className="rounded-3xl overflow-hidden shadow-2xl h-full w-full hover:scale-105 transition-all duration-300 border-4 border-white/50 lg:h-[500px]">
          <img 
            src={mission}
            alt="Group of young people collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Vision Card - Bottom Right */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-teal-500/20 lg:self-end">
        <h2 className="text-4xl font-bold mb-8 tracking-tight font-baskerville">Vision</h2>
        <p className="text-teal-50/90 leading-relaxed text-lg font-light font-figtree">
          To become India's most trusted ecosystem for inclusive growth and impactful learning.
        </p>
      </div>

    </div>
  </div>
</div>
        <div className="py-16 px-4 max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1D69B5]"
                style={{fontFamily: 'Libre Baskerville'}}>
                Meet Our Team Members
                </h2>
            </div>

            {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {teamMembers.map((member) => (
                    <TeamMemberCard
                        key={member.id}
                        imageUrl={member.imageUrl}
                        name={member.name}
                        designation={member.designation}
                        isActive={member.isActive}
                    />
                    ))}
                </div>
            </div>

        </div>
        <CTA />
        <Footer />
    </section>

  );
};

export default AboutUs;