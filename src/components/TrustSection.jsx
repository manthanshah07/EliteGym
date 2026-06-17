import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCounter = ({ end, suffix = "", duration = 2000 }) => {
  const isFloat = !Number.isInteger(end);
  const [count, setCount] = useState(isFloat ? end : 0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && !isFloat) {
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smoother counter
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        
        setCount(Math.floor(end * easeOutQuart));

        if (progress < duration) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [end, duration, isInView, isFloat]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-display font-black text-white">
      {count}{suffix}
    </span>
  );
};

const TrustSection = () => {
  const stats = [
    { label: "Years Experience", value: 10, suffix: "+" },
    { label: "Active Members", value: 2000, suffix: "+" },
    { label: "Transformations", value: 500, suffix: "+" },
    { label: "Google Rating", value: 4.8, suffix: "★" }
  ];

  return (
    <section className="py-16 bg-dark-900 border-y border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <StatCounter end={stat.value} suffix={stat.suffix} />
              <div className="w-12 h-1 bg-gold-500 rounded-full mt-2 mb-3"></div>
              <p className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
