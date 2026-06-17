import React from 'react';
import { Instagram } from 'lucide-react';

const igImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593079831268-3381b0c1239b?q=80&w=2069&auto=format&fit=crop",
];

const InstagramSection = () => {
  return (
    <section className="py-2 bg-black">
      <div className="container mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row justify-between items-center mb-4">
        <div>
          <h2 className="text-3xl font-display font-bold uppercase tracking-tight">
            Follow Our <span className="text-gold-500">Journey</span>
          </h2>
          <p className="text-gray-400 mt-2">@elitegym_official</p>
        </div>
        <button className="mt-4 md:mt-0 flex items-center gap-2 border border-white/20 hover:border-gold-500 hover:text-gold-500 px-6 py-3 rounded-full transition-colors font-medium uppercase tracking-wider text-sm">
          <Instagram size={18} /> Follow Us
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 w-full">
        {igImages.map((img, index) => (
          <div key={index} className="relative aspect-square group overflow-hidden bg-dark-900 cursor-pointer">
            <img 
              src={img} 
              alt="Instagram Post" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="text-white w-8 h-8" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
