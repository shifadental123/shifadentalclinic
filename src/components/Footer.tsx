import { MapPin, Phone, Mail, Facebook, Instagram, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary-blue rounded-full items-center justify-center flex text-white font-bold text-xl">S</div>
              <span className="font-heading font-bold text-2xl hidden sm:block">SHIFA DENTAL CLINIC & IMPLANT CENTER</span>
              <span className="font-heading font-bold text-2xl sm:hidden">SHIFA DENTAL</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for comprehensive cosmetic and general dentistry in Anand. Dedicated to gentle, patient-first care.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/draezaz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center hover:opacity-80 transition-opacity">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"><ArrowRight size={14} className="text-accent-teal" /> About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"><ArrowRight size={14} className="text-accent-teal" /> Our Services</a></li>
              <li><a href="#doctors-guide" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"><ArrowRight size={14} className="text-accent-teal" /> Doctor's Guide</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"><ArrowRight size={14} className="text-accent-teal" /> Patient Reviews</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"><ArrowRight size={14} className="text-accent-teal" /> FAQs</a></li>
              <li><a href="#appointment" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"><ArrowRight size={14} className="text-accent-teal" /> Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-accent-teal flex-shrink-0"><MapPin size={18} /></div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=SHIFA+DENTAL+CLINIC+AND+IMPLANT+CENTER,+JAKATNAKA,+OPP.+Al+REHMAN+RECIDENCY,+BHALEJ+ROAD,+ANAND" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm leading-relaxed hover:text-white transition-colors"
                >
                  JAKATNAKA, OPP. Al REHMAN RECIDENCY, BHALEJ ROAD, ANAND
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-accent-teal flex-shrink-0"><Phone size={18} /></div>
                <a href="tel:+917878290682" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +91-7878290682
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-accent-teal flex-shrink-0"><Mail size={18} /></div>
                <a href="mailto:aezaz786memon@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  aezaz786memon@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 tracking-wide">Clinic Hours</h4>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <ul className="space-y-3">
                <li className="flex flex-col gap-1 text-sm">
                  <span className="text-gray-400 flex items-center gap-2"><Clock size={16} className="text-accent-teal"/> EVERYDAY</span>
                  <div className="flex justify-between items-center pl-6">
                    <span className="text-gray-400">Morning:</span>
                    <span className="text-white font-medium">9:30 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pl-6 pt-1">
                    <span className="text-gray-400">Evening:</span>
                    <span className="text-white font-medium">4:30 PM - 8:30 PM</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} SHIFA DENTAL CLINIC & IMPLANT CENTER. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
             <span>Privacy Policy: We only use your details to manage appointments. We do not share personal data.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
