import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const LeadGeneration = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', goal: 'Weight Loss' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitting(true);
      
      // Target WhatsApp number (Update this to the gym's actual number)
      const targetPhone = "919867137464"; 
      const message = `*New VIP Pass Request!* 🚀\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Primary Goal:* ${formData.goal}\n\nI would like to claim my free VIP pass and trial session.`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedMessage}`;

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        window.open(whatsappUrl, '_blank');
      }, 800);
    }
  };

  return (
    <section id="lead-generation" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-500/5 blur-[100px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto bg-dark-800 rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl">
          
          <div className="w-full md:w-1/2 p-10 md:p-16 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60"></div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h2 className="text-4xl font-display font-black uppercase tracking-tight mb-4">
                Ready to <span className="text-gold-500">Transform?</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Take the first step towards a stronger, healthier you. Claim your exclusive 3-day VIP pass today.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  <span>Full Club Access</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  <span>1 Free Personal Training Session</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  <span>Body Composition Analysis</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 flex flex-col items-center text-center"
              >
                <CheckCircle2 className="text-gold-500 w-20 h-20 mb-6" />
                <h3 className="text-3xl font-display font-black uppercase tracking-tight mb-4">Pass Claimed!</h3>
                <p className="text-gray-300">
                  Thank you, {formData.name}. Our team will contact you shortly at {formData.phone} to schedule your first visit.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold uppercase tracking-wide mb-8">Claim Your Free Pass</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Primary Goal</label>
                    <select 
                      value={formData.goal}
                      onChange={(e) => setFormData({...formData, goal: e.target.value})}
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                    >
                      <option>Weight Loss</option>
                      <option>Muscle Gain</option>
                      <option>General Fitness</option>
                      <option>Athletic Performance</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-wider py-4 rounded-lg transition-colors mt-4 disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      "Claim VIP Pass via WhatsApp"
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadGeneration;
