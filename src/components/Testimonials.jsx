import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'James Wilson',
    role: 'Member since 2021',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    content: 'The facilities here are unmatched. But what really sets ApexFit apart is the community and the trainers who actually care about your progress.',
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
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
            Member <span className="text-gold-500">Reviews</span>
          </h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-2xl font-bold">4.9/5</span>
            <div className="flex text-gold-500">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
            </div>
            <span className="text-gray-400">on Google</span>
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
              className="bg-black p-8 rounded-2xl border border-white/5 relative"
            >
              <div className="flex text-gold-500 mb-6">
                {[...Array(test.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-gray-300 mb-8 italic">"{test.content}"</p>
              <div className="flex items-center gap-4">
                <img src={test.image} alt={test.name} className="w-12 h-12 rounded-full object-cover border-2 border-gold-500" />
                <div>
                  <h4 className="font-bold uppercase tracking-wide text-sm">{test.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
