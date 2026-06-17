import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const MobileStickyBar = () => {
  const targetPhone = "919876543210";
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in the free trial!");

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-md border-t border-white/10 z-50 md:hidden pb-safe">
      <div className="flex items-center justify-between p-2 gap-2">
        <a 
          href={`tel:+${targetPhone}`}
          className="flex-1 flex flex-col items-center justify-center py-2 text-gray-300 hover:text-white transition-colors"
        >
          <Phone size={20} className="mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call Now</span>
        </a>
        
        <a 
          href={`https://wa.me/${targetPhone}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 text-[#25D366] hover:text-[#25D366]/80 transition-colors"
        >
          <MessageCircle size={20} className="mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        <a 
          href="#free-trial" // Assuming lead generation section has id="free-trial" or similar
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('lead-generation')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex-[1.5] bg-gold-500 hover:bg-gold-600 text-black rounded-lg py-3 flex flex-col items-center justify-center transition-colors shadow-lg shadow-gold-500/20"
        >
          <Calendar size={20} className="mb-1" />
          <span className="text-[11px] font-black uppercase tracking-wider">Book Trial</span>
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;
