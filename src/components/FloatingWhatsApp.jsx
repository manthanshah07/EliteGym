import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
    >
      <MessageCircle size={28} />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-black text-white text-xs px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/20">
        Chat with us!
      </span>
      
      {/* Pulse effect */}
      <span className="absolute w-full h-full bg-[#25D366] rounded-full -z-10 animate-ping opacity-75"></span>
    </a>
  );
};

export default FloatingWhatsApp;
