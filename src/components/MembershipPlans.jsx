import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '2,999',
    period: '/month',
    features: [
      'Access to Gym Floor',
      'Basic Equipment Usage',
      'Locker Room Access',
      'Free WiFi',
      '1 Fitness Consultation'
    ],
    recommended: false
  },
  {
    name: 'Premium',
    price: '4,999',
    period: '/month',
    features: [
      'Everything in Basic',
      'Unlimited Group Classes',
      'Diet & Nutrition Plan',
      'Monthly Body Assessment',
      'Access to Sauna',
      '2 Guest Passes/Month'
    ],
    recommended: true
  },
  {
    name: 'Elite',
    price: '8,999',
    period: '/month',
    features: [
      'Everything in Premium',
      '8 Personal Training Sessions',
      'Customized Meal Prep Guide',
      'Priority Class Booking',
      'Exclusive Elite Lounge Access',
      'Unlimited Guest Passes'
    ],
    recommended: false
  }
];

const MembershipPlans = () => {
  return (
    <section id="pricing" className="py-24 bg-dark-900 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
            Membership <span className="text-gold-500">Plans</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Invest in yourself. Choose a plan that fits your goals and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-dark-800 rounded-2xl p-8 border ${plan.recommended ? 'border-gold-500 shadow-[0_0_30px_rgba(212,175,55,0.15)] md:-translate-y-4 md:py-12 z-10' : 'border-white/10 hover:border-white/30'} transition-all duration-300`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gold-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold uppercase tracking-wide text-center mb-2">{plan.name}</h3>
              <div className="text-center mb-8 flex justify-center items-end">
                <span className="text-xl text-gold-500 mr-1 font-bold">₹</span>
                <span className="text-5xl font-display font-black">{plan.price}</span>
                <span className="text-gray-400 ml-1 mb-1">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.recommended ? 'text-gold-500' : 'text-gray-400'}`} />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => document.getElementById('lead-generation')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 rounded-sm font-bold uppercase tracking-wider transition-all duration-300 ${plan.recommended ? 'bg-gold-500 text-black hover:bg-gold-600 shadow-[0_5px_15px_rgba(212,175,55,0.3)]' : 'bg-transparent border border-white/20 text-white hover:bg-white/5'}`}
              >
                Start Your Journey
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
