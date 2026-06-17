import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'Personal Training', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Weight Loss', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Muscle Building', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Strength Training', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Group Classes', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Nutrition Coaching', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop' },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
            Our <span className="text-gold-500">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive programs designed to elevate your fitness journey, whatever your goals may be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[300px] group overflow-hidden rounded-xl cursor-pointer"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">{service.title}</h3>
                <div className="h-[2px] w-0 bg-gold-500 group-hover:w-12 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
