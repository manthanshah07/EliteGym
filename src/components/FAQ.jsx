import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What are your opening hours?",
    answer: "We are open 24/7 for Premium and Elite members. Basic members have access from 5:00 AM to 11:00 PM every day."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 3-day free trial pass so you can experience our facilities, classes, and meet our trainers before making a commitment."
  },
  {
    question: "Is personal training included in the membership?",
    answer: "Our Elite membership includes 8 personal training sessions per month. For Basic and Premium, personal training can be purchased as an add-on package."
  },
  {
    question: "Can I freeze or cancel my membership?",
    answer: "Yes, you can freeze your membership for up to 3 months per year for medical or travel reasons. Cancellations require a 30-day notice."
  },
  {
    question: "Are group classes suitable for beginners?",
    answer: "Absolutely! Our instructors provide modifications for all fitness levels, ensuring everyone gets a safe and effective workout."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-dark-900">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
            Common <span className="text-gold-500">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to know about joining Apex Fit.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border ${openIndex === index ? 'border-gold-500 bg-black/40' : 'border-white/10 bg-dark-800 hover:border-white/30'} rounded-lg transition-colors duration-300 overflow-hidden`}
            >
              <button 
                className="w-full px-6 py-5 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <span className={`text-gold-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? <Minus /> : <Plus />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
