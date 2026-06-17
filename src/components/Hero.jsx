import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="People working out in a modern, well-equipped gym facility" 
          className="w-full h-full object-cover opacity-50 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mt-20"
        >
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-6">
            <span className="text-gold-500 font-semibold text-sm tracking-wider uppercase">Premium Fitness Club</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-tight mb-6 uppercase tracking-tight text-shadow">
            Unleash Your <br />
            <span className="text-gradient">True Potential</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
            Experience world-class coaching, state-of-the-art equipment, and a community dedicated to achieving greatness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('lead-generation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gold-500 hover:bg-gold-600 text-black px-8 py-4 rounded-sm font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 uppercase tracking-wider text-sm"
            >
              Claim Your Free Trial Session <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border border-white/30 hover:border-white text-white px-8 py-4 rounded-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white/5 uppercase tracking-wider text-sm"
            >
              Start Your Fitness Journey Today
            </button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex flex-col gap-6"
        >
          <StatCard number="5000+" text="Active Members" />
          <StatCard number="4.9" text="Google Rating" isRating />
          <StatCard number="15+" text="Expert Trainers" />
          <StatCard number="10" text="Years Experience" />
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ number, text, isRating }) => (
  <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-lg w-48 border-l-4 border-l-gold-500 transform transition-transform hover:scale-105">
    <h3 className="text-3xl font-display font-bold text-white mb-1 flex items-center gap-1">
      {number} {isRating && <span className="text-gold-500 text-2xl">★</span>}
    </h3>
    <p className="text-sm text-gray-400 uppercase tracking-wide font-medium">{text}</p>
  </div>
);

export default Hero;
