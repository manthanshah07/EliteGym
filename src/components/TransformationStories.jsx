import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const stories = [
  {
    name: 'Marcus T.',
    duration: '12 Weeks',
    weightChange: 'Lost 15kg Fat',
    story: 'ApexFit completely changed my perspective on fitness. The personalized coaching and nutrition plan made all the difference. I not only lost weight but gained incredible strength and confidence.',
    beforeImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Sarah M.',
    duration: '16 Weeks',
    weightChange: 'Gained 8kg Muscle',
    story: 'As a beginner, I was intimidated by the gym. The trainers here created a welcoming environment and a structured plan that helped me build muscle and transform my physique beyond my expectations.',
    beforeImg: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'David L.',
    duration: '10 Weeks',
    weightChange: 'Lost 10kg Fat',
    story: 'The functional training zone and group classes kept me motivated. I dropped 10kg of stubborn fat and finally feel energetic throughout the day.',
    beforeImg: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop'
  }
];

const TransformationStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
            Real <span className="text-gold-500">Results</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. See the incredible transformations of our dedicated members.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-dark-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            
            {/* Image Slider */}
            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] group">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 relative border-r-2 border-gold-500">
                  <img src={stories[currentIndex].beforeImg} alt="Before" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">Before</div>
                </div>
                <div className="w-1/2 relative">
                  <img src={stories[currentIndex].afterImg} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-gold-500 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">After</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
              <Quote className="text-gold-500/20 w-20 h-20 mb-6" />
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic mb-8">
                "{stories[currentIndex].story}"
              </p>
              
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">{stories[currentIndex].name}</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-gold-500">
                    {stories[currentIndex].weightChange}
                  </span>
                  <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-gray-300">
                    {stories[currentIndex].duration}
                  </span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-4 mt-auto">
                <button 
                  onClick={prevStory}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300"
                >
                  <ChevronLeft />
                </button>
                <button 
                  onClick={nextStory}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationStories;
