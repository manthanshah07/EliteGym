import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop", title: "Strength Zone" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", title: "Cardio Area" },
  { src: "https://images.unsplash.com/photo-1593079831268-3381b0c1239b?q=80&w=2069&auto=format&fit=crop", title: "Functional Space" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop", title: "Group Classes" },
  { src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop", title: "Free Weights" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", title: "Locker Rooms" }
];

const GymShowcase = () => {
  const [selectedImg, setSelectedImg] = React.useState(null);

  return (
    <section className="py-24 bg-black overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
            World-Class <span className="text-gold-500">Facilities</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Experience our premium training zones designed for optimal performance, luxury, and results.
          </p>
        </div>
      </div>

      {/* Masonry Layout */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-2xl font-bold uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.title}
                  </h3>
                  <div className="h-1 w-12 bg-gold-500 mt-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-gold-500 transition-colors z-50 text-4xl"
            onClick={() => setSelectedImg(null)}
          >
            &times;
          </button>
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImg.src} 
            alt={selectedImg.title}
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <h3 className="text-2xl font-bold uppercase tracking-wider text-white">{selectedImg.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default GymShowcase;
