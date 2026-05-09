import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', service: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const messageText = `*New Appointment Request*
Name: ${formData.name}
Phone: ${formData.phone}
City: ${formData.city || 'Not specified'}
Service: ${formData.service || 'Not specified'}`;

    // Open WhatsApp in a new tab
    const whatsappUrl = `https://wa.me/919551120208?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => { 
      setSubmitted(false); 
      setFormData({ name: '', phone: '', city: '', service: '' }); 
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-bg-main relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-primary mb-4">Book Your Visit</h2>
          <p className="text-lg text-gray-500 font-medium">Quick enquiry. We usually respond within 15 minutes.</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} 
          className="glass-card rounded-[2.5rem] p-8 sm:p-12"
        >
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-20 h-20 bg-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
              <p className="text-gray-500 font-medium">We'll contact you shortly to confirm your slot.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Full Name *"
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan/20 focus:border-cyan transition-all shadow-sm font-medium" />
                </div>
                <div>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Phone Number *"
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan/20 focus:border-cyan transition-all shadow-sm font-medium" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City / Area"
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan/20 focus:border-cyan transition-all shadow-sm font-medium" />
                </div>
                <div>
                  <div className="relative">
                    <select name="service" value={formData.service} onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-primary focus:outline-none focus:ring-2 focus:ring-cyan/20 focus:border-cyan transition-all shadow-sm appearance-none cursor-pointer font-medium"
                    >
                      <option value="" disabled className="text-gray-400">Select Service</option>
                      <option value="Implants">Dental Implants</option>
                      <option value="RCT">Root Canal</option>
                      <option value="Braces">Braces & Aligners</option>
                      <option value="Whitening">Teeth Whitening</option>
                      <option value="Smile Makeover">Smile Makeover</option>
                      <option value="Kids Dentistry">Kids Dentistry</option>
                      <option value="General Checkup">General Checkup</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white text-lg font-bold rounded-2xl transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
                  Request Appointment <ArrowRight size={20} />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
