import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'James Wilson',
    role: 'Member since 2021',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    content: 'The facilities here are unmatched. But what really sets Apex Fit apart is the community and the trainers who actually care about your progress.',
    rating: 5
  },
  {
    name: 'Emily Davis',
    role: 'Member since 2023',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    content: 'I joined for the group classes and stayed for the results. The energy in the studio is electric, and the equipment is always spotless.',
    rating: 5
  },
  {
    name: 'Robert Chen',
    role: 'Member since 2020',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    content: 'Upgrading to the Elite plan was the best investment I made in my health. The personal training sessions are intense but highly effective.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
            Trusted by <span className="text-gold-500">500+ Members</span>
          </h2>
          <div className="flex justify-center items-center gap-3 mb-4 bg-dark-800 inline-flex px-6 py-3 rounded-full border border-white/10">
            <span className="text-3xl font-black">4.8</span>
            <div className="flex flex-col items-start">
              <div className="flex text-gold-500 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <span className="text-xs text-gray-400 font-bold tracking-widest uppercase">Based on 500+ Google Reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black p-8 rounded-2xl border border-white/10 relative shadow-2xl hover:border-gold-500/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img src={test.image} alt={test.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-sm">{test.name}</h4>
                    <p className="text-xs text-gray-500">{test.role}</p>
                  </div>
                </div>
                {/* Fake Google G icon */}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-blue-600 text-lg">
                  G
                </div>
              </div>
              <div className="flex text-gold-500 mb-4">
                {[...Array(test.rating)].map((_, i) => <Star key={i} fill="currentColor" size={14} />)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">"{test.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
