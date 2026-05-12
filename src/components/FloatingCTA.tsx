import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <>
      {/* Mobile Sticky Bottom Bar (Visible only on small screens) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-[0_-4px_20px_rgba(0,0,0,0.15)] pointer-events-auto">
        <a 
          href="tel:9551120208" 
          className="flex-1 bg-[#0F3D91] text-white py-3 flex items-center justify-center gap-2 font-bold active:bg-[#0b2e6b] transition-colors"
        >
          <Phone size={16} /> <span className="text-sm">Call Now</span>
        </a>
        <a 
          href="https://wa.me/919551120208?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tooth%20%26%20Smile." 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white py-3 flex items-center justify-center gap-2 font-bold active:bg-[#1da851] transition-colors"
        >
          <MessageCircle size={18} /> <span className="text-sm">WhatsApp</span>
        </a>
      </div>

      {/* Desktop Floating Buttons (Visible only on larger screens) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">
        {/* Contact / Call Button */}
        <motion.a 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 1, duration: 0.5, type: 'spring' }}
          href="tel:9551120208" 
          className="group flex items-center gap-0 bg-[#0F3D91] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-white"
          title="Call Now"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[120px] transition-all duration-500 ease-in-out font-semibold text-sm pl-0 group-hover:pl-4">
            Call Us
          </span>
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0F3D91]">
            <Phone size={22} />
          </div>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
          href="https://wa.me/919551120208?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tooth%20%26%20Smile." 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-0 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-white relative"
          title="WhatsApp Us"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[120px] transition-all duration-500 ease-in-out font-semibold text-sm pl-0 group-hover:pl-4">
            WhatsApp
          </span>
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366]">
            <MessageCircle size={26} />
          </div>
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center">
            <span className="absolute w-full h-full rounded-full bg-red-500 animate-ping opacity-75"></span>
          </span>
        </motion.a>
      </div>
    </>
  );
}
