import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Activity, Users } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-10 h-10 text-gold-500" />,
    title: 'Certified Trainers',
    description: 'Learn from industry-leading professionals who are dedicated to your fitness journey.'
  },
  {
    icon: <Activity className="w-10 h-10 text-gold-500" />,
    title: 'Advanced Equipment',
    description: 'Train with state-of-the-art machines and premium free weights.'
  },
  {
    icon: <Target className="w-10 h-10 text-gold-500" />,
    title: 'Personalized Coaching',
    description: 'Get custom workout plans tailored to your specific goals and body type.'
  },
  {
    icon: <Users className="w-10 h-10 text-gold-500" />,
    title: 'Nutrition Guidance',
    description: 'Comprehensive diet plans to complement your training and accelerate results.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4"
          >
            Why Choose <span className="text-gold-500">Apex Fit</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We provide more than just a place to workout. We offer a comprehensive fitness experience designed to guarantee results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-800 p-8 rounded-xl border border-white/5 hover:border-gold-500/50 transition-colors duration-300 group"
            >
              <div className="mb-6 bg-black/50 w-20 h-20 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
