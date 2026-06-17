import React from 'react';
import { Dumbbell, MapPin, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <Dumbbell className="text-gold-500 w-8 h-8" />
              <span className="text-2xl font-display font-bold uppercase tracking-wider text-white">
                Apex<span className="text-gold-500">Fit</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Premium fitness destination dedicated to helping you achieve your ultimate potential through world-class facilities and expert guidance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-gold-500 transition-colors text-sm uppercase tracking-wide">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm uppercase tracking-wide">Classes & Services</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-gold-500 transition-colors text-sm uppercase tracking-wide">Our Trainers</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-gold-500 transition-colors text-sm uppercase tracking-wide">Membership Plans</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0 w-5 h-5" />
                <span className="text-gray-400 text-sm">2nd Floor, Crystal Plaza<br/>Andheri West, Mumbai 400053</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-500 shrink-0 w-5 h-5" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-500 shrink-0 w-5 h-5" />
                <span className="text-gray-400 text-sm">contact@apexfit.in</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Business Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400 text-sm">Mon - Sat</span>
                <span className="text-white font-medium text-sm">6:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400 text-sm">Sunday</span>
                <span className="text-white font-medium text-sm">7:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gold-500 text-sm font-bold">Premium & Elite</span>
                <span className="text-gold-500 font-bold text-sm">24/7 Access</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Apex Fit Premium Club. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
