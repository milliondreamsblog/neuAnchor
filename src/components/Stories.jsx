import React from 'react';
import StoryCard from './UI/Card.jsx';

const Stories = () => {
  const storiesData = [
    {
      title: 'From Classrooms to Careers: A Student Success Story',
      description: 'Discover how our education programs transformed a students journey.',
      image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Empowering Special Needs Families Through Workshops',
      description: 'Learn how our specialized programs support families and communities.',
      image: 'https://images.pexels.com/photos/8617634/pexels-photo-8617634.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-20 bg-[#FEE368]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0">
            Stories That Inspire
          </h2>
          <button className="px-6 py-2 bg-white text-gray-900 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {storiesData.map((story, index) => (
            <StoryCard
              key={index}
              title={story.title}
              description={story.description}
              image={story.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;