import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2500;
    let startTime: number | null = null;

    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      
      const easedProgress = 100 - (100 * Math.pow(1 - currentProgress / 100, 3));
      setProgress(easedProgress);

      if (elapsed < duration) {
        requestAnimationFrame(animateProgress);
      } else {
        setTimeout(() => setLoading(false), 400); 
      }
    };

    requestAnimationFrame(animateProgress);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #F8FAFF 0%, #EEF4FF 40%, #E6F0FF 100%)'
          }}
        >
          {/* Medical Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none opacity-15" style={{ filter: 'blur(1px)' }}>
            {/* Plus icons pattern */}
            <div className="absolute top-20 left-20 text-[#2563EB] text-2xl font-bold">+</div>
            <div className="absolute top-40 right-32 text-[#2563EB] text-3xl font-bold">+</div>
            <div className="absolute bottom-1/3 left-1/4 text-[#2563EB] text-xl font-bold">+</div>
            <div className="absolute top-1/3 right-1/4 text-[#2563EB] text-2xl font-bold">+</div>
            {/* Dotted pattern overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}
            />
          </div>

          {/* Bottom Flowing Waves */}
          <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 overflow-hidden pointer-events-none opacity-60 flex items-end">
             {/* Wave layers */}
             <motion.div 
               animate={{ x: ['0%', '-50%'] }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute bottom-[-50px] w-[200%] h-full flex"
             >
               <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full fill-[#93C5FD]/30"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,137.95,119.5,203.8,105.81Z"></path></svg>
               <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full fill-[#93C5FD]/30"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,137.95,119.5,203.8,105.81Z"></path></svg>
             </motion.div>
             <motion.div 
               animate={{ x: ['-50%', '0%'] }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute bottom-[-30px] w-[200%] h-3/4 flex"
             >
               <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full fill-[#60A5FA]/20"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path></svg>
               <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-full fill-[#60A5FA]/20"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path></svg>
             </motion.div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-2xl">
            {/* Center Logo Section with Circular Rings */}
            <div className="relative mb-6 flex items-center justify-center">
              {/* Animated Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] rounded-full border-2 border-[rgba(37,99,235,0.2)] border-t-[#2563EB]/60"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full border border-dashed border-[#3B82F6]/40"
              />
              
              {/* Logo Glow */}
              <div 
                className="absolute w-16 h-16 bg-transparent rounded-full"
                style={{ filter: 'drop-shadow(0 0 30px rgba(59,130,246,0.25))' }}
              />

              {/* Floating Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
                transition={{ 
                  opacity: { duration: 0.8 },
                  scale: { duration: 0.8 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative z-10 w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full p-3 shadow-xl border border-white/80 flex items-center justify-center"
              >
                <img 
                  src="/images/Thooth_Smile_Logo.png" 
                  alt="Tooth & Smile Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
            
            {/* Brand Text */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-[#1E2A78]"
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                fontWeight: 500, 
                lineHeight: 1.1
              }}
            >
              Tooth & Smile
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[#2563EB] font-bold mt-2 mb-2"
              style={{ 
                letterSpacing: '0.45em', 
                fontSize: '0.75rem',
                textTransform: 'uppercase'
              }}
            >
              Advanced Dentistry
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-500 font-medium text-xs sm:text-sm italic mb-8"
            >
              Your Smile Deserves the <span className="text-[#2563EB] font-bold not-italic">Best Care</span>
            </motion.div>

            {/* Loading Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="w-full max-w-[220px] sm:max-w-[280px] flex flex-col items-center"
            >
              <div className="w-full flex justify-between items-end mb-2.5 px-1">
                <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">Loading...</span>
                <span className="text-sm font-bold text-[#2563EB]">{Math.round(progress)}%</span>
              </div>
              
              {/* Progress Bar Container */}
              <div className="w-full bg-white/60 backdrop-blur-sm shadow-inner rounded-full overflow-hidden p-1 relative border border-white/50">
                {/* Progress Bar Fill */}
                <div 
                  className="h-[10px] rounded-full relative overflow-hidden"
                  style={{ 
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #2563EB, #3B82F6, #60A5FA)',
                    transition: 'width 0.1s linear'
                  }}
                >
                  {/* Progress Shimmer Effect */}
                  <motion.div 
                    className="absolute inset-0 w-[200%] h-full opacity-60"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)'
                    }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
