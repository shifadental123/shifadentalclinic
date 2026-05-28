import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Payal Suthariya",
    text: "Best dentist ever. i am fully satisfied with his treatment. Great doctor. Thanks to Dr. Aezaz.",
    rating: 5
  },
  {
    name: "Khadija Moiz",
    text: "Dr.aezaz is very helpful and caring doctor and his staff is also cooperative. He is very gentle, professional and gives information and advice to ensure overall teeth health..His clinic is hygienic. I am completely satisfied with his treatment.",
    rating: 5
  },
  {
    name: "Vohra Siraj",
    text: "Dr. Aezaz sir is very perfect for dental treatment... I am 62 years old and after dental treatment I feel so younger. thanks for the support. I heartily recommend all to visit SHIFA DENTAL CLINIC & IMPLANT CENTER for all your dental procedure... Highly recommend.",
    rating: 5
  },
  {
    name: "Kamlesh Kothiya",
    text: "Very good services and nice treatment procesure... I recommend all. I extracted my wisdom tooth painlessly. Dr. Aezaz Memon is very good person and very helpful nature. Staff behaviour also good. I am so happy with SHIFA DENTAL CLINIC & IMPLANT CENTER.",
    rating: 5
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={18} 
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"} 
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-wider text-primary-blue uppercase mb-2">Real Experiences</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-4">
            What Our Patients Say
          </h3>
          <p className="text-text-muted text-lg mb-8">
            These are some of the kind words our patients have shared. 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testi, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start justify-between"
            >
              <div>
                <StarRating rating={testi.rating} />
                <p className="text-text-muted text-sm leading-relaxed mb-6 italic">
                  "{testi.text}"
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-50 w-full">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary-blue font-bold text-sm shrink-0">
                  {testi.name.charAt(0)}
                </div>
                <p className="font-heading font-semibold text-text-dark text-sm truncate">
                  {testi.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="col-span-full text-center mt-12">
          <a 
            href="https://www.google.com/search?q=SHIFA+DENTAL+CLINIC+AND+IMPLANT+CENTER+Anand" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary-blue font-medium hover:underline inline-flex items-center gap-1 bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-full transition-colors"
          >
            View all reviews on Google <span className="text-xs">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
