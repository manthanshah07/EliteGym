import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import GymShowcase from './components/GymShowcase';
import TransformationStories from './components/TransformationStories';
import MembershipPlans from './components/MembershipPlans';
import TrainersSection from './components/TrainersSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import InstagramSection from './components/InstagramSection';
import FAQ from './components/FAQ';
import LeadGeneration from './components/LeadGeneration';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ExitIntentPopup from './components/ExitIntentPopup';

function App() {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenExitPopup');
      if (e.clientY <= 0 && !hasSeenPopup) {
        setShowExitPopup(true);
        sessionStorage.setItem('hasSeenExitPopup', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <GymShowcase />
      <TransformationStories />
      <Services />
      <MembershipPlans />
      <TrainersSection />
      <Testimonials />
      <InstagramSection />
      <FAQ />
      <LeadGeneration />
      <Footer />
      
      <FloatingWhatsApp />
      {showExitPopup && <ExitIntentPopup onClose={() => setShowExitPopup(false)} />}
    </div>
  );
}

export default App;
