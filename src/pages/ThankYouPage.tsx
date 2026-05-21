import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Calendar, Shield, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYouPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bg-main min-h-screen pt-28 sm:pt-36 pb-16 flex items-start justify-center relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-cyan/10 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-xl w-full mx-auto px-4 sm:px-6 relative z-10 my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-12 bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl text-center"
        >
          {/* Animated Success Badge */}
          <div className="w-16 h-16 sm:w-24 sm:h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 relative border border-green-100 shadow-inner">
            <CheckCircle className="w-10 h-10 sm:w-14 sm:h-14 text-green-500" />
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1.6, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
              className="absolute inset-0 bg-green-200 rounded-full -z-10"
            />
          </div>

          <span className="inline-block px-4 py-1.5 bg-green-50 border border-green-200/50 text-green-600 text-xs font-bold tracking-widest uppercase mb-4 rounded-full">
            Booking Confirmed
          </span>

          <h1 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#1E2A78] mb-3 sm:mb-4">
            Thank You!
          </h1>
          
          <p className="text-gray-600 font-medium text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Your appointment enquiry has been successfully received. We are preparing the details for your visit.
          </p>

          {/* Details / Next Steps Card */}
          <div className="text-left bg-slate-50 border border-slate-100 p-4 sm:p-6 rounded-2xl mb-6 sm:mb-8">
            <h2 className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 sm:mb-4">What Happens Next?</h2>
            
            <ul className="space-y-4">
              <li className="flex gap-3 sm:gap-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center text-[10px] sm:text-xs font-extrabold text-cyan flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#1E2A78]">Instant Call Back</h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5 leading-relaxed">Our coordinator will call you in 15 minutes to confirm a convenient slot.</p>
                </div>
              </li>
              
              <li className="flex gap-3 sm:gap-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center text-[10px] sm:text-xs font-extrabold text-secondary flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#1E2A78]">WhatsApp Confirmation</h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-medium mt-0.5 leading-relaxed">You'll receive slot details, timing options, and location map on your WhatsApp.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="p-3 sm:p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col items-center">
              <Calendar size={16} className="text-cyan mb-1" />
              <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider">Timing</span>
              <span className="text-[11px] sm:text-xs font-bold text-primary mt-0.5">9:30 AM - 8:00 PM</span>
            </div>
            <div className="p-3 sm:p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col items-center">
              <Shield size={16} className="text-secondary mb-1" />
              <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider">Hygiene</span>
              <span className="text-[11px] sm:text-xs font-bold text-primary mt-0.5">ISO Certified Safety</span>
            </div>
          </div>

          {/* Back Home Action */}
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#1E2A78] hover:bg-[#1E2A78]/95 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-[#1E2A78]/25 hover:-translate-y-0.5"
          >
            <ArrowLeft size={18} /> Back to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
