import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, MessageCircle } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Strength Training Area',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 2,
    title: 'Cardio Zone',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 3,
    title: 'Functional Training Area',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 4,
    title: 'Group Fitness Classes',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 5,
    title: 'Premium Equipment',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 6,
    title: 'Personal Training Sessions',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
    className: 'md:col-span-2 md:row-span-1'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openWhatsApp = () => {
    const targetPhone = "919876543210";
    const message = "Hi! I'm interested in booking a free gym tour and learning more about your memberships.";
    window.open(`https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToLeadGen = () => {
    document.getElementById('lead-generation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-black border-t border-white/10 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight mb-4 text-white">
            Explore Our <span className="text-gold-500">Facility</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Take a look inside our state-of-the-art club designed to elevate your fitness experience.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 mb-20">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${item.className}`}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-bold text-xl uppercase tracking-wider">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-dark-900 border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight text-white mb-4">
              Ready to Experience Elite Fitness?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Book a free gym tour and discover why hundreds of members trust Elite Fitness Club for their transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={scrollToLeadGen}
                className="bg-gold-500 hover:bg-gold-600 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Book Free Trial <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={openWhatsApp}
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </button>
            </div>
          </div>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white hover:text-gold-500 transition-colors bg-white/10 p-2 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-xl">
                  <h3 className="text-white font-bold text-2xl uppercase tracking-wider">{selectedImage.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
