import { motion } from 'framer-motion';
import { PhoneCall, Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-primary via-secondary to-cyan overflow-hidden relative z-[60] h-10 flex items-center">
      <div className="absolute inset-0 bg-white/10 blur-[2px]" />
      <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between relative z-10 text-white text-sm font-medium">
        <div className="hidden sm:flex items-center gap-6">
          <span className="flex items-center gap-1.5 whitespace-nowrap"><Sparkles size={14} className="text-accent" /> Free Consultation</span>
          <span className="flex items-center gap-1.5 whitespace-nowrap">Emergency Dental Support 24/7</span>
        </div>

        {/* Mobile sliding text */}
        <div className="sm:hidden flex-1 overflow-hidden mx-2">
          <motion.div
            animate={{ x: [0, -400] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap flex items-center gap-12"
          >
            <span className="flex items-center gap-1.5"><Sparkles size={14} className="text-accent" /> Free Consultation</span>
            <span>Emergency Support 24/7</span>
            <span>Limited Time Offers</span>
            {/* Duplicate for seamless loop */}
            <span className="flex items-center gap-1.5"><Sparkles size={14} className="text-accent" /> Free Consultation</span>
            <span>Emergency Support 24/7</span>
          </motion.div>
        </div>

        <div className="flex items-center gap-4 ml-auto flex-shrink-0">
          <a href="tel:9551120208" className="flex items-center gap-1.5 hover:text-accent transition-colors whitespace-nowrap">
            <PhoneCall size={14} />
            <span className="font-semibold text-xs sm:text-sm">+91 95511 20208</span>
          </a>
        </div>
      </div>
    </div>
  );
}
