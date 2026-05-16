import { motion } from 'motion/react';
import { 
  Clock, Shield, Moon, Droplets, RefreshCw, Calendar, 
  CheckCircle2, XCircle, AlertTriangle, Phone, Calendar as CalendarIcon, Quote, Activity, Sparkles, HeartPulse, MessageCircle
} from 'lucide-react';

const routineSteps = [
  { icon: Clock, title: "Brush Twice Daily", desc: "For 2 full minutes each time." },
  { icon: Activity, title: "Use Soft Bristles", desc: "Protect enamel from wear." },
  { icon: Moon, title: "Floss Every Night", desc: "Clean where your brush can't." },
  { icon: Droplets, title: "Clean Your Tongue", desc: "Remove bacteria for fresh breath." },
  { icon: RefreshCw, title: "Rinse After Sugars", desc: "Neutralize acids quickly." },
  { icon: Shield, title: "Drink Water", desc: "Washes away food particles." },
  { icon: Sparkles, title: "Replace Brush", desc: "Every 3 months or after illness." },
  { icon: Calendar, title: "Regular Checkups", desc: "Visit dentist every 6 months." },
];

const dos = [
  "Brush gently to avoid receding gums",
  "Eat calcium-rich foods like cheese",
  "Use fluoride toothpaste to strengthen enamel",
  "Drink more water throughout the day",
  "Schedule regular dental checkups",
  "Wear mouth protection during contact sports"
];

const donts = [
  "Avoid smoking and tobacco products",
  "Don't ignore bleeding or swollen gums",
  "Avoid excessive sugary drinks",
  "Don't use teeth to open objects",
  "Avoid aggressive, hard brushing",
  "Don't delay treatment for tooth pain"
];

const mistakes = [
  { title: "Brushing Too Hard", desc: "Abrasive brushing wears away enamel and causes receding gums." },
  { title: "Skipping Flossing", desc: "Brushing only cleans 60% of tooth surfaces. The rest requires flossing." },
  { title: "Ignoring Sensitivity", desc: "Tooth pain is a warning sign. Ignoring it can lead to bigger problems." },
  { title: "Sleeping Without Brushing", desc: "Leaves plaque and acid to attack your teeth for 8 hours undisturbed." }
];

const quickTips = [
  "Drink water after your morning coffee.",
  "Wait 30 mins after eating to brush.",
  "Chew sugar-free gum after meals.",
  "Avoid late-night sugary snacks.",
  "Change toothbrush after an illness."
];

export default function DoctorsGuide() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden" id="doctors-guide">
      {/* Decorative Background Blurs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-[100px] opacity-70 -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-50/60 rounded-full blur-[120px] opacity-70 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary-blue text-sm font-bold tracking-wider uppercase mb-6 shadow-sm border border-blue-100">
            <HeartPulse size={16} />
            <span>Doctor's Guide</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-text-dark mb-6 leading-tight">
            Expert Daily Dental Care
          </h3>
          <p className="text-lg text-text-muted leading-relaxed">
            Expert advice from <span className="font-semibold text-primary-blue">Dr. Aezaz Memon</span> to help you and your family maintain healthy teeth, prevent issues, and achieve a confident smile.
          </p>
        </motion.div>

        {/* 1. Daily Oral Care Routine */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-28"
        >
          <div className="mb-12 text-center">
            <h4 className="text-2xl font-heading font-bold text-text-dark">Your Daily Oral Care Routine</h4>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-blue to-accent-teal mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {routineSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-50 text-primary-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-inner">
                  <step.icon size={26} strokeWidth={1.5} />
                </div>
                <h5 className="font-heading font-bold text-text-dark text-lg mb-2">{step.title}</h5>
                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 2. Do's and Don'ts */}
        <div className="mb-28 grid lg:grid-cols-2 gap-8">
          {/* Do's */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-green-50 to-white rounded-3xl p-8 sm:p-10 border border-green-100 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 text-green-600 pointer-events-none">
              <CheckCircle2 size={120} />
            </div>
            <h4 className="text-3xl font-heading font-bold text-green-900 mb-8 flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle2 size={24} />
              </div>
              The Do's
            </h4>
            <ul className="space-y-5 relative z-10">
              {dos.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-text-dark font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Don'ts */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-red-50 to-white rounded-3xl p-8 sm:p-10 border border-red-100 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 text-red-600 pointer-events-none">
              <XCircle size={120} />
            </div>
            <h4 className="text-3xl font-heading font-bold text-red-900 mb-8 flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                <XCircle size={24} />
              </div>
              The Don'ts
            </h4>
            <ul className="space-y-5 relative z-10">
              {donts.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                    <XCircle size={14} />
                  </div>
                  <span className="text-text-dark font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 3. Common Mistakes */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-28"
        >
          <div className="mb-12 text-center">
            <h4 className="text-2xl font-heading font-bold text-text-dark">Common Mistakes to Avoid</h4>
            <div className="h-1 w-20 bg-gradient-to-r from-red-400 to-orange-400 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mistakes.map((mistake, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-200 to-red-200 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <AlertTriangle size={24} />
                </div>
                <h5 className="font-heading font-bold text-text-dark text-lg mb-2">{mistake.title}</h5>
                <p className="text-text-muted text-sm leading-relaxed">{mistake.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4. Doctor's Personal Message */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mb-28 relative"
        >
          <div className="bg-gradient-to-r from-primary-blue to-blue-900 rounded-3xl p-1 relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
             <div className="bg-white rounded-[22px] p-8 md:p-12 relative z-10 grid md:grid-cols-4 gap-8 items-center">
                <div className="md:col-span-1 flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 bg-blue-50 rounded-full mb-5 border-[6px] border-white shadow-xl flex items-center justify-center text-primary-blue overflow-hidden ring-4 ring-blue-50">
                    <img src="/about-doctor.png" alt="Dr. Aezaz Memon" className="w-full h-full object-cover object-top" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-text-dark">Dr. Aezaz Memon</h4>
                  <p className="text-sm text-primary-blue font-medium mt-1">BDS (RGUHS 2011)</p>
                  <p className="text-xs text-text-muted mt-0.5 uppercase tracking-wide font-semibold">Gold Medalist</p>
                </div>
                <div className="md:col-span-3 relative px-4 md:px-8 mt-6 md:mt-0 border-l-0 md:border-l-2 md:border-blue-50">
                  <Quote className="absolute -top-6 -left-2 md:left-4 text-primary-blue/10 w-28 h-28 -z-10 rotate-180" />
                  <p className="text-2xl md:text-3xl font-serif italic text-slate-800 leading-snug mb-8 relative z-10 text-center md:text-left">
                    "Healthy teeth are not just about appearance — they are a reflection of your overall health and confidence. Prevention is always better, and far more gentle, than the cure."
                  </p>
                  <div className="flex flex-col items-center md:items-start gap-1">
                    <p className="font-sans font-bold text-text-dark/50 uppercase tracking-widest text-xs">Sincerely,</p>
                    <span className="font-script text-4xl md:text-5xl text-primary-blue -rotate-2 mt-1">Dr. Aezaz Memon</span>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* 5. Quick Tips Carousel (Grid fallback for simplicity & responsiveness) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-28"
        >
          <h4 className="text-sm font-bold tracking-wider text-accent-teal uppercase mb-6 text-center">Quick Tips</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {quickTips.map((tip, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 shadow-sm rounded-full px-6 py-3 flex items-center gap-3 hover:shadow-md hover:border-teal-100 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-accent-teal"></div>
                <span className="text-sm font-medium text-text-dark">{tip}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 6. Call To Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-tr from-primary-blue via-blue-700 to-accent-teal rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Protect Your Smile
            </h3>
            <p className="text-blue-100 text-lg mb-10">
              With expert dental guidance and gentle care. Schedule your checkup today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a 
                href="#appointment" 
                className="group inline-flex items-center justify-center gap-3 bg-white text-primary-blue hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <CalendarIcon size={20} className="text-primary-blue group-hover:scale-110 transition-transform" />
                <span>Book Appointment</span>
              </a>
              <a 
                href="https://wa.me/917878290682"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-primary-blue font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
