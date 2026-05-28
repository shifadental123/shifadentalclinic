import { Smile, Aperture, Activity, Scissors, Syringe, Settings } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: <Smile size={32} className="text-primary-blue" />,
    title: "Cosmetic Dentistry",
    description: "Veneers/Laminates – custom porcelain laminates to correct stains, chips or gaps for a flawless smile. Teeth whitening and smile design for confidence boost."
  },
  {
    icon: <Aperture size={32} className="text-accent-teal" />,
    title: "Crowns & Bridges",
    description: "Durable ceramic crowns and bridges to restore broken or missing teeth. These are custom-made to blend with your natural teeth."
  },
  {
    icon: <Settings size={32} className="text-primary-blue" />,
    title: "Braces & Aligners",
    description: "Correct crooked teeth with metal braces or clear aligners (Invisalign). We tailor orthodontic plans for kids and adults."
  },
  {
    icon: <Activity size={32} className="text-accent-teal" />,
    title: "Root Canals (RCT)",
    description: "Pain-free endodontic treatment to save infected teeth. We use advanced techniques to make root canals quick and comfortable."
  },
  {
    icon: <Scissors size={32} className="text-primary-blue" />,
    title: "Extractions",
    description: "Gentle tooth extractions, including wisdom teeth. We use local anesthesia and soothing care to minimize discomfort."
  },
  {
    icon: <Syringe size={32} className="text-accent-teal" />,
    title: "Dentures & Implants",
    description: "Custom dentures and dental implants to replace missing teeth. High-quality materials for a natural look and feel."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-wider text-accent-teal uppercase mb-2">Our Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-4">
            Dental Treatments We Offer
          </h3>
          <p className="text-lg text-text-muted">
            From routine check-ups to full smile makeovers, we provide all your dental needs under one roof.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-50/50 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="font-heading font-semibold text-xl text-text-dark mb-3">
                {service.title}
              </h4>
              <p className="text-text-muted leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
