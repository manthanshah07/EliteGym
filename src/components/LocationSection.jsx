import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-24 bg-dark-900 border-t border-white/10 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
            Find <span className="text-gold-500">Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Visit our premium facility and start your fitness journey today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="w-full lg:w-2/3 h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1m3!1d100000!2d-74.0059728!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNSJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-500"
              title="Gym Location"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-8 bg-black p-8 rounded-2xl border border-white/5">
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 text-gold-500">EliteGym HQ</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center shrink-0 text-gold-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-1">Address</h4>
                    <p className="text-gray-300">123 Fitness Boulevard<br />New York, NY 10001</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center shrink-0 text-gold-500">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-1">Hours</h4>
                    <p className="text-gray-300">Mon-Fri: 5:00 AM - 11:00 PM<br />Sat-Sun: 6:00 AM - 9:00 PM</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center shrink-0 text-gold-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white text-black hover:bg-gold-500 font-bold uppercase tracking-wider py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MapPin size={18} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
