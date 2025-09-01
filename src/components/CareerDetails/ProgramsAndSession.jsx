import React from 'react';
import Card from '../UI/SessionCard';
import Button from '../UI/Button';
import SessionCard from '../UI/SessionCard';


const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "1:1 consultation - For Students & families",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Personalized guidance and support tailored to individual needs and goals."
    },
    {
      id: 2,
      title: "Group workshops & seminars",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Interactive learning experiences designed for collaborative growth and skill development."
    },
    {
      id: 3,
      title: "Motivational talks and global speakings.",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Inspiring presentations that motivate and empower audiences worldwide."
    }
  ];

  return (
    <section className="py-16 px-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Programs & Sessions
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program) => (
            <SessionCard
              key={program.id}
              image={program.image}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <Button variant="secondary" size="md">
              Visit Site
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;