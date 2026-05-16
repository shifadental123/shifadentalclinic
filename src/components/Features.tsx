import { Star, Shield, ThumbsUp, Stethoscope, Users } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Stethoscope size={28} />,
    title: "Expert Care",
    description: "Treated by a Gold Medalist dentist with immense expertise."
  },
  {
    icon: <Star size={28} className="text-yellow-500" />,
    title: "5★ Reviews",
    description: "Proven patient satisfaction and trusted by the Anand community."
  },
  {
    icon: <Shield size={28} />,
    title: "Modern Equipment",
    description: "Laser dentistry, digital X-rays for safer treatments and diagnostics."
  },
  {
    icon: <ThumbsUp size={28} />,
    title: "Hygienic Clinic",
    description: "ISO-certified cleanliness, creating a comfortable and sterile environment."
  },
  {
    icon: <Users size={28} />,
    title: "Family Friendly",
    description: "Children welcome; we explain procedures in simple terms for full understanding."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-primary-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl point-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/5 rounded-full blur-3xl point-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Patients Love SHIFA DENTAL CLINIC & IMPLANT CENTER
          </h2>
          <p className="text-blue-100 text-lg">
            We prioritize your comfort and safety every step of the way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">{feature.title}</h4>
              <p className="text-blue-100 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto mt-16 bg-white rounded-2xl p-8 shadow-2xl relative"
        >
          <div className="absolute -top-4 -left-4 text-4xl text-accent-teal opacity-30">"</div>
          <p className="text-text-dark text-lg font-medium italic text-center relative z-10">
            Dr. Memon was so friendly and my root canal was perfectly painless.
          </p>
          <p className="text-text-muted text-center mt-4 text-sm font-bold">— Patient R.</p>
        </motion.div>
      </div>
    </section>
  );
}
