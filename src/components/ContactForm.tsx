import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', treatment: '', date: '', time: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const messageText = `*New Appointment Request*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Treatment: ${formData.treatment || 'Not specified'}
Date: ${formData.date}
Time Slot: ${formData.time || 'Not specified'}
Concern: ${formData.message || 'None'}`;

    // Open WhatsApp in a new tab
    const whatsappUrl = `https://wa.me/919551120208?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => { 
      setSubmitted(false); 
      setFormData({ name: '', phone: '', email: '', treatment: '', date: '', time: '', message: '' }); 
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-[#F2F4F7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2A78] mb-4">Ready for Your Best Smile?</h2>
          <p className="text-lg text-[#333333]/70">Book a consultation today - no waiting, no hassle.</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} 
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-[#1E2A78]/5 border border-[#1E2A78]/5"
        >
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
              <div className="w-24 h-24 bg-[#00A8A8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} className="text-[#00A8A8]" />
              </div>
              <h3 className="text-3xl font-bold text-[#1E2A78] mb-3">Appointment Requested!</h3>
              <p className="text-lg text-[#333333]/70">We have received your details. Our team will contact you shortly to confirm.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#1E2A78] mb-2">Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter your full name"
                    className="w-full px-5 py-3.5 bg-[#F2F4F7]/50 border border-[#F2F4F7] rounded-xl text-[#333333] placeholder-[#333333]/40 focus:outline-none focus:ring-2 focus:ring-[#00A8A8]/20 focus:border-[#00A8A8] transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1E2A78] mb-2">Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Enter your phone number"
                    className="w-full px-5 py-3.5 bg-[#F2F4F7]/50 border border-[#F2F4F7] rounded-xl text-[#333333] placeholder-[#333333]/40 focus:outline-none focus:ring-2 focus:ring-[#00A8A8]/20 focus:border-[#00A8A8] transition-all" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#1E2A78] mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"
                    className="w-full px-5 py-3.5 bg-[#F2F4F7]/50 border border-[#F2F4F7] rounded-xl text-[#333333] placeholder-[#333333]/40 focus:outline-none focus:ring-2 focus:ring-[#00A8A8]/20 focus:border-[#00A8A8] transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1E2A78] mb-2">Treatment Type</label>
                  <select name="treatment" value={formData.treatment} onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-[#F2F4F7]/50 border border-[#F2F4F7] rounded-xl text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#00A8A8]/20 focus:border-[#00A8A8] transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select Treatment</option>
                    <option value="Implants">Implants</option>
                    <option value="RCT">RCT</option>
                    <option value="Braces">Braces</option>
                    <option value="Whitening">Whitening</option>
                    <option value="Smile Makeover">Smile Makeover</option>
                    <option value="Pediatric">Pediatric</option>
                    <option value="General Checkup">General Checkup</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#1E2A78] mb-2">Preferred Date *</label>
                  <input type="date" name="date" required value={formData.date} onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-[#F2F4F7]/50 border border-[#F2F4F7] rounded-xl text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#00A8A8]/20 focus:border-[#00A8A8] transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1E2A78] mb-2">Preferred Time Slot</label>
                  <select name="time" value={formData.time} onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-[#F2F4F7]/50 border border-[#F2F4F7] rounded-xl text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#00A8A8]/20 focus:border-[#00A8A8] transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select Time Slot</option>
                    <option value="Morning 9–12">Morning 9–12</option>
                    <option value="Afternoon 12–4">Afternoon 12–4</option>
                    <option value="Evening 4–7">Evening 4–7</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1E2A78] mb-2">Any specific concern?</label>
                <textarea name="message" rows={3} value={formData.message} onChange={handleChange} placeholder="Optional details about your visit..."
                  className="w-full px-5 py-3.5 bg-[#F2F4F7]/50 border border-[#F2F4F7] rounded-xl text-[#333333] placeholder-[#333333]/40 focus:outline-none focus:ring-2 focus:ring-[#00A8A8]/20 focus:border-[#00A8A8] transition-all resize-none" />
              </div>

              <div className="pt-4">
                <button type="submit" className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#1E2A78] hover:bg-[#151f5a] text-white text-lg font-bold rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5">
                  Confirm Appointment <ArrowRight size={20} />
                </button>
              </div>
            </form>
          )}

          {/* Below Form Info */}
          <div className="mt-12 pt-8 border-t border-[#F2F4F7]">
            <div className="grid sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-10 h-10 bg-[#00A8A8]/10 rounded-full flex items-center justify-center mb-3">
                  <Phone size={18} className="text-[#00A8A8]" />
                </div>
                <div className="text-[13px] text-[#333333]/50 font-bold uppercase tracking-wider mb-1">Prefer to call?</div>
                <div className="font-semibold text-[#1E2A78]">Reach us at:</div>
                <a href="tel:04445084467" className="text-[#00A8A8] font-bold mt-1 hover:underline">044-45084467</a>
              </div>
              
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-10 h-10 bg-[#00A8A8]/10 rounded-full flex items-center justify-center mb-3">
                  <MapPin size={18} className="text-[#00A8A8]" />
                </div>
                <div className="text-[13px] text-[#333333]/50 font-bold uppercase tracking-wider mb-1">Visit Us At</div>
                <div className="font-medium text-[#333333]/80 leading-snug">60/71, Appu Street,<br/>Mylapore, Chennai – 600004</div>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className="w-10 h-10 bg-[#00A8A8]/10 rounded-full flex items-center justify-center mb-3">
                  <Clock size={18} className="text-[#00A8A8]" />
                </div>
                <div className="text-[13px] text-[#333333]/50 font-bold uppercase tracking-wider mb-1">Timings</div>
                <div className="font-medium text-[#333333]/80 leading-snug">
                  <span className="text-[#1E2A78] font-semibold">Mon–Sat:</span> 9:00 AM – 7:00 PM<br/>
                  <span className="text-[#1E2A78] font-semibold">Sunday:</span> 10:00 AM – 2:00 PM
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
