import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function ContactForm() {
  const location = useLocation();
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', service: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

//https://script.google.com/macros/s/AKfycbwxpPATLu5-tX5Ruzed_qNZyLt4dJRlRQFngjixmEKe5vGd-rboZA97PNT05XiOhvxNPw/exec

  useEffect(() => {
    if (location.state && location.state.selectedService) {
      setFormData(prev => ({ ...prev, service: location.state.selectedService }));
    }
  }, [location.state]);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {

    // Basic validation
    if (formData.phone.length < 10) {
      alert("Enter valid phone number");
      setIsSubmitting(false);
      return;
    }

    const SPREADSHEET_API_URL =
      "https://script.google.com/macros/s/AKfycbyabpvIJelJnVQd4RcCeOdna--7t3Nthz6c9YGq3GV6rveQFt0eEMPeVFHyMgovKjvJlw/exec";

    const data = new URLSearchParams();

    data.append("Name", formData.name);
    data.append("Number", formData.phone);
    data.append("City", formData.city || "Not specified");
    data.append("Service", formData.service || "General enquiry");

    await fetch(SPREADSHEET_API_URL, {
      method: "POST",
      mode: "no-cors",
      body: data,
    });

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      city: "",
      service: "",
    });

  } catch (error) {

    console.error("Submission error:", error);

  } finally {

    setIsSubmitting(false);
  }
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
          className="glass-card rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden"
        >
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
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Root Canal Treatment">Root Canal</option>
                    <option value="Braces & Aligners">Braces & Aligners</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Smile Makeover">Smile Makeover</option>
                    <option value="Pediatric Dentistry">Kids Dentistry</option>
                    <option value="General Checkup">General Checkup</option>
                  </select>
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
                  <>Request Appointment <ArrowRight size={20} /></>
                )}
              </button>
            </div>
          </form>

          {/* Success Popup */}
          <AnimatePresence>
            {submitted && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center p-4 sm:p-8 bg-white/95 backdrop-blur-md"
              >
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  className="text-center max-w-sm"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <CheckCircle size={48} className="text-green-500" />
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="absolute inset-0 bg-green-200 rounded-full"
                    />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-primary mb-3">Thank You!</h3>
                  <p className="text-gray-600 font-medium mb-8 leading-relaxed">
                    Your appointment request has been received. 
                  </p>

                  <div className="text-left bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">What happens next?</h4>
                    <ul className="space-y-4">
                      <li className="flex gap-3 text-sm font-semibold text-primary">
                        <div className="w-5 h-5 rounded-full bg-cyan/20 flex items-center justify-center text-[10px] text-cyan flex-shrink-0">1</div>
                        <span>Our team will call you within 15 mins to confirm your slot.</span>
                      </li>
                      <li className="flex gap-3 text-sm font-semibold text-primary">
                        <div className="w-5 h-5 rounded-full bg-cyan/20 flex items-center justify-center text-[10px] text-cyan flex-shrink-0">2</div>
                        <span>A confirmation message will be sent to your WhatsApp.</span>
                      </li>
                    </ul>
                  </div>

                  <button 
                    onClick={() => setSubmitted(false)}
                    className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 active:scale-95 flex items-center justify-center gap-2"
                  >
                    Close & Continue <ArrowRight size={18} />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
