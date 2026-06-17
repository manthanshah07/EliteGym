import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const targetPhone = "919876543210";
  const message = "Hi, I am interested in joining the gym. Can you tell me more about your membership plans?";
  const encodedMessage = encodeURIComponent(message);
  
  return (
    <a
      href={`https://wa.me/${targetPhone}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
    >
      <MessageCircle size={28} />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-white text-black font-semibold text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl transform group-hover:-translate-x-1 duration-300">
        Need help choosing a plan?
        <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-white"></div>
      </span>
      
      {/* Pulse effect */}
      <span className="absolute w-full h-full bg-[#25D366] rounded-full -z-10 animate-ping opacity-75"></span>
    </a>
  );
};

export default FloatingWhatsApp;
