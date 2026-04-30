import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, Clock, Mail, MessageCircle, CheckCircle } from 'lucide-react';
import { treatments } from '../lib/treatments';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', treatment: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', phone: '', treatment: '', message: '' }); }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-semibold rounded-full mb-4">Get In Touch</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2A78] mb-4">Book Your Appointment</h2>
          <p className="text-[#333333]/60 max-w-2xl mx-auto">Fill out the form below and our team will get back to you within 24 hours to confirm your appointment.</p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
            <div className="bg-[#F2F4F7] rounded-2xl p-8 sm:p-10">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-20 h-20 bg-[#00A8A8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-[#00A8A8]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E2A78] mb-2">Thank You!</h3>
                  <p className="text-[#333333]/60">We have received your enquiry. Our team will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#1E2A78] mb-2">Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter your name"
                        className="w-full px-4 py-3 bg-white border border-[#F2F4F7] rounded-xl text-[#333333] placeholder-[#333333]/30 focus:outline-none focus:ring-2 focus:ring-[#00A8A8]/20 focus:border-[#00A8A8] transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1E2A78] mb-2">Phone Number *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Enter your phone number"
                        className="w-full px-4 py-3 bg-white border border-[#F2F4F7] rounded-xl text-[#333333] placeholder-[#333333]/30 focus:outline-none focus:ring-2 focus:ring-[#00A8A8]/20 focus:border-[#00A8A8] transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1E2A78] mb-2">Treatment Required *</label>
                    <select name="treatment" required value={formData.treatment} onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-[#F2F4F7] rounded-xl text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#00A8A8]/20 focus:border-[#00A8A8] transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a treatment</option>
                      {treatments.map((t) => <option key={t.slug} value={t.title}>{t.title}</option>)}
                      <option value="General Checkup">General Checkup</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1E2A78] mb-2">Message (Optional)</label>
                    <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us about your dental concern..."
                      className="w-full px-4 py-3 bg-white border border-[#F2F4F7] rounded-xl text-[#333333] placeholder-[#333333]/30 focus:outline-none focus:ring-2 focus:ring-[#00A8A8]/20 focus:border-[#00A8A8] transition-all resize-none" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button type="submit" className="flex items-center justify-center gap-2 flex-1 px-6 py-3.5 bg-[#1E2A78] hover:bg-[#151f5a] text-white font-semibold rounded-xl transition-all hover:shadow-lg">
                      <Send size={18} />Submit Enquiry
                    </button>
                    <a href="https://wa.me/919551120208?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tooth%20%26%20Smile%20Advanced%20Dentistry." target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00A8A8] hover:bg-[#008f8f] text-white font-semibold rounded-xl transition-all hover:shadow-lg"
                    >
                      <MessageCircle size={18} />WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-5">
            <div className="bg-[#1E2A78] rounded-2xl p-8 text-white">
              <h3 className="font-serif text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0"><MapPin size={18} /></div>
                  <div><div className="font-semibold text-sm">Address</div><div className="text-white/60 text-sm mt-0.5">60/71, Appu Street,<br />Mylapore, Chennai – 600004</div></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0"><Phone size={18} /></div>
                  <div>
                    <div className="font-semibold text-sm">Phone</div>
                    <a href="tel:9551120208" className="text-white/60 text-sm mt-0.5 block hover:text-white transition-colors">Mobile: 95511 20208</a>
                    <a href="tel:04445084467" className="text-white/60 text-sm mt-0.5 block hover:text-white transition-colors">Landline: 044-45084467</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0"><Clock size={18} /></div>
                  <div><div className="font-semibold text-sm">Timings</div><div className="text-white/60 text-sm mt-0.5">Mon – Sat: 9:30 AM – 8:00 PM<br />Sunday: By Appointment</div></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0"><Mail size={18} /></div>
                  <div><div className="font-semibold text-sm">Email</div><div className="text-white/60 text-sm mt-0.5">info@toothandsmile.in</div></div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#F2F4F7] shadow-sm h-56">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9!2d80.27!3d13.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzQ4LjAiTiA4MMKwMTYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Tooth & Smile Clinic Location" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
