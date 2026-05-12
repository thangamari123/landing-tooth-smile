import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Phone, Shield, Star, CheckCircle, Smile } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const navigate = useNavigate();
  const scrollToContact = () => {
    navigate('/book-appointment');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-32 lg:pt-40 lg:pb-52 overflow-hidden bg-bg-main">
      {/* Animated background blur lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan/10 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="max-w-2xl relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full mb-6 border border-white/40 shadow-sm"
            >
              <Shield size={16} className="text-secondary" />
              <span className="text-primary text-sm font-bold tracking-wide uppercase">#1 Premium Dental Clinic in Chennai</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] mb-6 tracking-tight"
            >
              Your Smile Deserves <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-cyan">
                the Best Care.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg font-medium"
            >
              Experience world-class, pain-free dentistry with advanced technology. We design perfect smiles tailored just for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-6 lg:mb-10"
            >
              <button onClick={scrollToContact}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1"
              >
                <Calendar size={18} /> Book an Appointment
              </button>
              <a href="tel:9551120208"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-primary font-bold rounded-full hover:border-secondary hover:text-secondary transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <Phone size={18} /> Call Us
              </a>
            </motion.div>


          </div>

          {/* Right Content - Images & Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative block h-[450px] sm:h-[550px] lg:h-[600px] mt-4 lg:mt-0"
            style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? y1 : 0 }}
          >
            {/* Animated Gradient Background Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-tr from-secondary/20 to-cyan/20 blur-3xl" />

            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-8 border-white/50 shadow-2xl shadow-primary/10">
              <img src="https://res.cloudinary.com/dcldlvuib/image/upload/v1778329943/Dr._Muralikarthik_Prosthodontist_and_implantologist_ryfwpq.png" alt="Happy Patient" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            {/* Doctor Name Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-8 lg:bottom-12 -right-4 lg:-right-8 bg-white/95 backdrop-blur-xl p-4 lg:p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white flex items-center gap-3 lg:gap-4 max-w-[280px] lg:max-w-none"
            >
              <div className="w-1.5 lg:w-2 h-10 lg:h-12 bg-secondary rounded-full" />
              <div>
                <div className="text-lg lg:text-xl font-bold text-primary truncate">Dr. Muralikarthik</div>
                <div className="text-[10px] lg:text-sm font-bold text-cyan tracking-wide uppercase mt-0.5 truncate">Prosthodontist & Implantologist</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
