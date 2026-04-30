import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, Calendar } from 'lucide-react';

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
          <AnimatePresence>
            {isOpen && (
              <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.9 }} className="flex flex-col gap-2 mb-1">
                <a href="tel:9551120208" className="flex items-center gap-3 px-5 py-3 bg-[#1E2A78]/95 backdrop-blur-xl text-white rounded-xl shadow-lg shadow-black/20 hover:shadow-xl transition-shadow border border-white/10">
                  <Phone size={18} /><span className="text-sm font-semibold">Call Now</span>
                </a>
                <a href="https://wa.me/919551120208?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tooth%20%26%20Smile%20Advanced%20Dentistry." target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 bg-[#00A8A8] text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <MessageCircle size={18} /><span className="text-sm font-semibold">WhatsApp</span>
                </a>
                <a href="https://wa.me/919551120208?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tooth%20%26%20Smile%20Advanced%20Dentistry." target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 bg-white text-[#1E2A78] border border-[#F2F4F7] rounded-xl shadow-lg hover:shadow-xl transition-shadow font-semibold"
                >
                  <Calendar size={18} /><span className="text-sm font-semibold">Book Online</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`w-16 h-16 rounded-2xl shadow-2xl shadow-[#1E2A78]/20 flex items-center justify-center transition-all duration-300 hover:scale-105 group relative overflow-hidden ${
              isOpen ? 'bg-[#1E2A78] text-white' : 'bg-white border-2 border-[#F2F4F7]'
            }`}
          >
            {isOpen ? (
              <X size={28} className="relative z-10" />
            ) : (
              <div className="relative z-10 flex flex-col items-center">
                <img src="/images/Thooth_Smile_Logo.png" alt="Logo" className="w-9 h-9 object-contain" />
              </div>
            )}
            {!isOpen && (
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-[#00A8A8]/10 rounded-full"
              />
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
