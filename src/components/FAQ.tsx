import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Do you accept walk-in patients?",
    a: "We encourage appointments to minimize wait times, but urgent cases are accommodated as soon as possible."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, credit/debit cards, and UPI payments. (Insurance coverage varies; please inquire.)"
  },
  {
    q: "Are X-rays digital?",
    a: "Yes, we use digital X-rays (low radiation) for quick, accurate imaging."
  },
  {
    q: "How do I book an appointment?",
    a: "You can fill our online form, WhatsApp us (+91-7878290682), or call directly. We’ll confirm your slot promptly."
  },
  {
    q: "Do you treat children?",
    a: "Absolutely! We welcome children of all ages. We make kids feel comfortable and use gentle techniques for pediatric care."
  },
  {
    q: "What if I have a dental emergency?",
    a: "For tooth pain or injury, call us immediately. We strive to see emergency patients same-day to relieve pain quickly."
  },
  {
    q: "Do you offer guarantee on work?",
    a: "We use high-quality materials and skilled techniques. We stand by our work and will address any follow-up concerns with prior treatments."
  },
  {
    q: "How should I care for my braces/implants after treatment?",
    a: "We provide detailed aftercare instructions. Generally: maintain good oral hygiene (brushing, flossing), avoid hard foods for braces, and attend follow-up visits as scheduled."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wider text-accent-teal uppercase mb-2">Got Questions?</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-4">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'shadow-md border-transparent bg-gray-50' : 'bg-white'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="font-heading font-semibold text-text-dark">{faq.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-primary-blue text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-5 pt-0 text-text-muted text-sm leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
