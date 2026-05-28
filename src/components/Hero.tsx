import { Calendar, Phone, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent">
      {/* Hero-specific subtle glowing animated orbs behind the content to make it pop */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-primary-blue/20 rounded-full blur-[100px] mix-blend-multiply"
        />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-accent-teal/20 rounded-full blur-[120px] mix-blend-multiply"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center"
      >
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <div className="mb-12 lg:mb-0">
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 mb-6">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-primary-blue text-sm font-semibold tracking-wide shadow-sm">
                5★ Rated Clinic in Anand
              </span>
              <span className="inline-block py-1.5 px-4 rounded-full bg-teal-100 text-accent-teal text-sm font-semibold tracking-wide shadow-sm">
                ISO 9001:2015 CERTIFIED
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-text-dark leading-tight mb-6">
              Trusted Dental Care for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-teal">Your Family</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-8 max-w-xl mx-auto lg:mx-0">
              Comprehensive cosmetic and general dentistry in Anand – gentle care by Gold-Medalist Dr. Aezaz Memon.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#appointment" className="group inline-flex items-center justify-center gap-2 bg-primary-blue hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1">
                <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
                Book Appointment
              </a>
              <a href="tel:+917878290682" className="group inline-flex items-center justify-center gap-2 bg-white border-2 border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-white font-medium px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                <Phone size={20} className="group-hover:-rotate-12 transition-transform" />
                Call: +91-7878290682
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Dynamic Image Composition */}
        <div className="relative hidden lg:block h-[560px] w-full max-w-lg mx-auto pl-4">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-teal-100 rounded-[3rem] transform rotate-3 scale-105 -z-10 shadow-inner"></div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white"
          >
            <img 
              src="/gallery11.jpg" 
              alt="Dental Clinic" 
              className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute bottom-8 -left-12 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-2xl border border-white/50 flex items-center gap-4 z-20"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-500">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <p className="font-extrabold text-text-dark text-xl leading-tight">5/5</p>
              <p className="text-sm text-text-muted font-medium">Happy Patients</p>
            </div>
          </motion.div>
          
          {/* Top floating badge */}
          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute top-12 -right-8 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-2xl border border-white/50 z-20"
          >
            <p className="font-extrabold text-primary-blue text-2xl leading-none mb-1">14+</p>
            <p className="text-xs text-text-muted font-medium uppercase tracking-wider">Years Exp.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
