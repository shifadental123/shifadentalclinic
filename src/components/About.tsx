import { Award, ShieldCheck, HeartPulse } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-12 lg:mb-0 max-w-sm mx-auto lg:max-w-none"
          >
            <div className="aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
              <img 
                src="/about-doctor.png" 
                alt="Dr. Aezaz Memon - Clinic Environment" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-blue/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent-teal/10 rounded-full blur-xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-primary-blue uppercase mb-2">About Our Doctor</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-6">
              About Dr. Aezaz Memon
            </h3>
            
            <div className="prose prose-lg text-text-muted mb-8">
              <p>
                Dr. Aezaz Memon is a highly experienced <strong>Gold Medalist BDS</strong> (RGUHS 2011) with over <strong>14 years in dentistry</strong>. He and his team are dedicated to gentle, patient-first care.
              </p>
              <p>
                SHIFA DENTAL CLINIC & IMPLANT CENTER (since 2012) is known for its friendly atmosphere and modern treatment methods. Dr. Memon stays updated with the latest in dental technology—including laser therapy and digital X-rays—to ensure painless, effective treatments.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-2 rounded-xl transition-colors hover:bg-gray-50"
              >
                <div className="mt-1 bg-blue-50 p-2 rounded-lg text-primary-blue">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text-dark text-lg">Gold Medalist, 14+ yrs experience</h4>
                  <p className="text-text-muted text-sm relative top-1">Recognized for academic excellence and years of clinical mastery.</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-2 rounded-xl transition-colors hover:bg-gray-50"
              >
                <div className="mt-1 bg-green-50 p-2 rounded-lg text-accent-teal">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text-dark text-lg">Modern sterilization & comfort</h4>
                  <p className="text-text-muted text-sm relative top-1">ISO-certified cleanliness and state-of-the-art painless equipment.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-2 rounded-xl transition-colors hover:bg-gray-50"
              >
                <div className="mt-1 bg-rose-50 p-2 rounded-lg text-rose-500">
                  <HeartPulse size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text-dark text-lg">Patient education & follow-up care</h4>
                  <p className="text-text-muted text-sm relative top-1">We explain every procedure clearly and follow up to ensure steady healing.</p>
                </div>
              </motion.div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
