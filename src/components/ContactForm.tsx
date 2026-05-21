import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ContactForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', service: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (location.state && location.state.selectedService) {
      setFormData(prev => ({ ...prev, service: location.state.selectedService }));
    }
  }, [location.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Strict 10-digit validation
      if (formData.phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number.");
        setIsSubmitting(false);
        return;
      }

      // Check required fields again (though browser validation should handle it)
      if (!formData.name || !formData.phone || !formData.city || !formData.service) {
        alert("Please fill out all required fields.");
        setIsSubmitting(false);
        return;
      }

      const SPREADSHEET_API_URL =
        "https://script.google.com/macros/s/AKfycbyabpvIJelJnVQd4RcCeOdna--7t3Nthz6c9YGq3GV6rveQFt0eEMPeVFHyMgovKjvJlw/exec";

      const data = new URLSearchParams();
      data.append("Name", formData.name);
      data.append("Number", formData.phone);
      data.append("City", formData.city);
      data.append("Service", formData.service);

      await fetch(SPREADSHEET_API_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      setFormData({
        name: "",
        phone: "",
        city: "",
        service: "",
      });

      // Redirect to separate thank you page
      navigate('/thank-you');
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target.name === 'phone') {
      // Allow only numbers and limit to 10 digits
      const val = e.target.value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, phone: val });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  return (
    <section id="contact" className="py-16 bg-bg-main relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-4">Book Your Visit</h2>
          <p className="text-base text-gray-500 font-medium">Quick enquiry. We usually respond within 15 minutes.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="glass-card rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden bg-white/80 border border-white/60 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="e.g. John Doe"
                  className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan/20 focus:border-cyan transition-all shadow-sm font-medium" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Phone Number * (10 Digits)</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  pattern="[0-9]{10}"
                  title="Please enter exactly 10 digits"
                  maxLength={10}
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="e.g. 9876543210"
                  className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan/20 focus:border-cyan transition-all shadow-sm font-medium" 
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">City / Area *</label>
                <input 
                  type="text" 
                  name="city" 
                  required 
                  value={formData.city} 
                  onChange={handleChange} 
                  placeholder="e.g. Mylapore"
                  className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan/20 focus:border-cyan transition-all shadow-sm font-medium" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Select Service *</label>
                <div className="relative">
                  <select 
                    name="service" 
                    required 
                    value={formData.service} 
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl text-primary focus:outline-none focus:ring-2 focus:ring-cyan/20 focus:border-cyan transition-all shadow-sm appearance-none cursor-pointer font-medium"
                  >
                    <option value="" disabled className="text-gray-400">Choose a service</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Root Canal Treatment">Root Canal</option>
                    <option value="Braces & Aligners">Braces & Aligners</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Smile Makeover">Smile Makeover</option>
                    <option value="Pediatric Dentistry">Kids Dentistry</option>
                    <option value="General Checkup">General Checkup</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center gap-2 w-full py-4 bg-primary text-white text-lg font-bold rounded-2xl transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>Confirm & Request Booking <ArrowRight size={20} /></>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
