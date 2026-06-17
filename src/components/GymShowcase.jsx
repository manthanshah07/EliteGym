import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
    title: "Strength Zone"
  },
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    title: "Cardio Area"
  },
  {
    src: "https://images.unsplash.com/photo-1593079831268-3381b0c1239b?q=80&w=2069&auto=format&fit=crop",
    title: "Functional Space"
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    title: "Group Classes"
  }
];

const GymShowcase = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
              Premium <span className="text-gold-500">Facilities</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Explore our world-class training zones designed for optimal performance and luxury.
            </p>
          </div>
          <button className="hidden md:block border-b-2 border-gold-500 text-white pb-1 font-semibold hover:text-gold-500 transition-colors uppercase tracking-widest text-sm">
            View Full Gallery
          </button>
        </div>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-10 px-6 lg:px-12 gap-6">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[400px] md:h-[500px] relative group rounded-2xl overflow-hidden"
          >
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-bold uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {img.title}
              </h3>
              <div className="h-1 w-12 bg-gold-500 mt-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default GymShowcase;
