import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" }
              }}
              className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-[2rem] overflow-hidden flex items-center justify-center p-4 shadow-xl shadow-[#1E2A78]/5 border border-[#F2F4F7]"
            >
              <img 
                src="/images/Thooth_Smile_Logo.png" 
                alt="Tooth & Smile Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.4, duration: 0.6 }
              }}
              className="mt-8 text-center"
            >
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#1E2A78] tracking-tight">Tooth & Smile</div>
              <div className="text-[10px] sm:text-[12px] uppercase tracking-[0.3em] text-[#00A8A8] font-semibold mt-1">Advanced Dentistry</div>
              <div className="text-[11px] text-[#333333]/40 italic mt-3 font-medium">Your Smile Deserves The Best Care</div>
            </motion.div>

            {/* Loading Bar */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-[#F2F4F7] rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
                  ease: "easeInOut" 
                }}
                className="w-full h-full bg-[#00A8A8]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
