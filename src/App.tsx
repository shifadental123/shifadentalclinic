/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import PatientPortal from './components/PatientPortal';
import DoctorsGuide from './components/DoctorsGuide';
import { MessageCircle } from 'lucide-react';

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Features />
      <DoctorsGuide />
      <Appointment />
      <Testimonials />
      <FAQ />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-text-dark bg-slate-50 selection:bg-primary-blue/20 min-h-screen relative overflow-x-hidden">
        {/* Global Dynamic Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-blue-300/30 to-teal-300/30 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4 opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-indigo-300/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 opacity-70"></div>
          <div className="absolute top-[40%] left-[60%] w-[500px] h-[500px] bg-gradient-to-tr from-emerald-300/20 to-teal-200/20 rounded-full blur-[100px] opacity-50 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portal" element={<PatientPortal />} />
          </Routes>

          <Footer />

          {/* Global Floating WhatsApp Button */}
          <a 
            href="https://wa.me/917878290682?text=Hello%20Dr.%20Memon,%20I'd%20like%20to%20book%20an%20appointment." 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={28} />
            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Chat with us
            </span>
          </a>
        </div>
      </div>
    </Router>
  );
}
