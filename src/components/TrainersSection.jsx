import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: 'David Carter',
    role: 'Head Strength Coach',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop',
    cert: 'ISSA Certified',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Nutrition & HIIT Expert',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop', // Replaced with gym scene as placeholder
    cert: 'NASM Certified',
  },
  {
    name: 'Michael Chang',
    role: 'Bodybuilding Specialist',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop',
    cert: 'ACE Certified',
  },
  {
    name: 'Sophie Laurent',
    role: 'Yoga & Mobility',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop',
    cert: 'RYT 500',
  }
];

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
              Expert <span className="text-gold-500">Trainers</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Our elite team of certified professionals is dedicated to pushing you beyond your limits.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-[400px] overflow-hidden rounded-xl bg-dark-800">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                />
                
                {/* Social Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="bg-gold-500 text-black p-2 rounded-full hover:bg-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"><Instagram size={20} /></a>
                  <a href="#" className="bg-gold-500 text-black p-2 rounded-full hover:bg-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"><Twitter size={20} /></a>
                  <a href="#" className="bg-gold-500 text-black p-2 rounded-full hover:bg-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150"><Linkedin size={20} /></a>
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold uppercase tracking-wide mb-1">{trainer.name}</h3>
                <p className="text-gold-500 font-medium text-sm uppercase tracking-wider mb-2">{trainer.role}</p>
                <span className="text-gray-500 text-xs tracking-widest uppercase bg-dark-800 px-3 py-1 rounded-full">{trainer.cert}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
