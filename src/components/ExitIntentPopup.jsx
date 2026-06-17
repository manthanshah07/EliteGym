import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

const ExitIntentPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-dark-900 border border-white/10 rounded-2xl w-full max-w-lg p-8 shadow-2xl overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-yellow-200"></div>

        <div className="text-center">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 flex flex-col items-center"
            >
              <CheckCircle2 className="text-gold-500 w-16 h-16 mb-4" />
              <h3 className="text-3xl font-display font-black uppercase tracking-tight mb-2">Discount Claimed!</h3>
              <p className="text-gray-300">Check your email for your exclusive 10% OFF code.</p>
            </motion.div>
          ) : (
            <>
              <h3 className="text-3xl font-display font-black uppercase tracking-tight mb-2">Wait! Don't Leave</h3>
              <p className="text-gray-300 mb-6">
                Get an exclusive <span className="text-gold-500 font-bold">10% OFF</span> your first month when you join today.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors text-center"
                />
                <button 
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-wider py-4 rounded-lg transition-colors"
                >
                  Claim My Discount
                </button>
              </form>
            </>
          )}

          <button 
            onClick={onClose}
            className="mt-6 text-sm text-gray-500 hover:text-gray-300 transition-colors uppercase tracking-wider font-medium"
          >
            No thanks, I'll pay full price
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ExitIntentPopup;
