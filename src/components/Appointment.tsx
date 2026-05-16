import { useState, ChangeEvent, FormEvent } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, Clock, MapPin, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    treatment: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const treatments = [
    'Consultation / Cleaning',
    'Veneers / Laminates',
    'Crown / Bridge',
    'Root Canal Treatment',
    'Braces / Aligners',
    'Extraction',
    'Dental Implants',
    'Other'
  ];

  const timeSlots = [
    '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM',
    '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.date) {
      newErrors.date = 'Preferred date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Preferred time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      const text = encodeURIComponent(
        `New Appointment Request\n\nName: ${formData.name}\nPhone: ${formData.phone}\n${formData.email ? `Email: ${formData.email}\n` : ''}${formData.treatment ? `Treatment: ${formData.treatment}\n` : ''}${formData.date ? `Date: ${formData.date}\n` : ''}${formData.time ? `Time: ${formData.time}\n` : ''}${formData.message ? `Message: ${formData.message}` : ''}`
      );
      
      // Open WhatsApp with all the form details
      window.open(`https://wa.me/917878290682?text=${text}`, '_blank');
      
      setIsSubmitting(false);
      setShowSuccess(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        treatment: '',
        message: ''
      });
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(`Hello Dr. Memon, I'd like to book an appointment${formData.treatment ? ` for ${formData.treatment}` : ''}. My name is ${formData.name.trim() ? formData.name : '_'}`);
    window.open(`https://wa.me/917878290682?text=${text}`, '_blank');
  };

  return (
    <section id="appointment" className="py-20 bg-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-5 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 mb-12 lg:mb-0 lg:pr-8"
          >
            <h2 className="text-sm font-bold tracking-wider text-primary-blue uppercase mb-2">Schedule Your Visit</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-6">
              Book Your Appointment
            </h3>
            <p className="text-text-muted mb-8 leading-relaxed text-lg">
              Convenient appointment form – no waiting. We’ll confirm your slot quickly. Or reach out directly via call or WhatsApp.
            </p>
            
            <div className="space-y-6">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=SHIFA+DENTAL+CLINIC+AND+IMPLANT+CENTER,+JAKATNAKA,+OPP.+Al+REHMAN+RECIDENCY,+BHALEJ+ROAD,+ANAND"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-primary-blue/30 hover:shadow-md transition-all w-full text-left"
              >
                <div className="w-12 h-12 bg-blue-50 text-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-text-dark">Visit Us</p>
                  <p className="text-sm text-text-muted">JAKATNAKA, OPP. Al REHMAN RECIDENCY, BHALEJ ROAD, ANAND</p>
                </div>
              </a>
              
              <a 
                href="tel:+917878290682"
                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-primary-blue/30 hover:shadow-md transition-all w-full text-left"
              >
                <div className="w-12 h-12 bg-green-50 text-accent-teal rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-text-dark">Call to Book</p>
                  <p className="text-sm text-text-muted font-medium">+91-7878290682</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
              
              {showSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-accent-teal" />
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-text-dark mb-4">Request Received!</h4>
                  <p className="text-text-muted text-lg mb-8 max-w-md mx-auto">
                    Thank you, our team will contact you within 2 hours to confirm your appointment.
                  </p>
                  <button 
                    onClick={() => setShowSuccess(false)}
                    className="text-primary-blue font-semibold hover:underline"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue'} outline-none transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue'} outline-none transition-all`}
                        placeholder="10-digit number"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">Email Address (Optional)</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue outline-none transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="treatment" className="block text-sm font-medium text-text-dark mb-2">Treatment Needed</label>
                      <select 
                        id="treatment" 
                        name="treatment" 
                        value={formData.treatment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue outline-none transition-all appearance-none"
                      >
                        <option value="">Select Treatment...</option>
                        {treatments.map((t, i) => (
                          <option key={i} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-text-dark mb-2">Preferred Date *</label>
                      <input 
                        type="date" 
                        id="date" 
                        name="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.date ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue'} outline-none transition-all`}
                      />
                      {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-text-dark mb-2">Preferred Time *</label>
                      <select 
                        id="time" 
                        name="time" 
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.time ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue'} outline-none transition-all appearance-none`}
                      >
                        <option value="">Select Time...</option>
                        {timeSlots.map((t, i) => (
                          <option key={i} value={t}>{t}</option>
                        ))}
                      </select>
                      {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">Additional Message (Optional)</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue outline-none transition-all resize-none"
                      placeholder="Any specific concerns or symptoms?"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex-1 bg-primary-blue text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>Book Appointment <CalendarIcon size={20} /></>
                      )}
                    </button>
                    
                    <button 
                      type="button"
                      onClick={openWhatsApp}
                      className="flex-1 bg-[#25D366] text-white font-semibold py-4 rounded-xl hover:bg-[#1DA851] transition-colors shadow-lg shadow-green-500/30 flex items-center justify-center gap-2"
                    >
                      WhatsApp Chat <MessageSquare size={20} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
