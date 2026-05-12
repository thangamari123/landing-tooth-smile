import { motion } from 'framer-motion';
import { Shield, Heart, Zap, Clock, UserCheck } from 'lucide-react';

const features = [
  { icon: Heart, title: 'Pain-Free Treatment', desc: 'Gentle procedures with advanced anesthetics.' },
  { icon: Zap, title: 'Digital Dentistry', desc: 'Precise planning using 3D imaging technology.' },
  { icon: Shield, title: 'Advanced Technology', desc: 'Laser treatments and sterile environments.' },
  { icon: Clock, title: 'Emergency Support', desc: '24/7 priority care for severe dental pain.' },
  { icon: UserCheck, title: 'Certified Doctors', desc: 'MDS specialists with 10+ years experience.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-white">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-main via-white to-cyan/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-12 lg:mb-20"
        >
          <span className="inline-flex px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-4 tracking-wide uppercase">Why Choose Us</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary leading-tight max-w-3xl mx-auto">Elevating Dental Care to the Next Level</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Doctor Consultation Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-[2.5rem] blur-2xl transform -translate-x-4 translate-y-4" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white shadow-2xl">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Doctor Consultation" className="w-full h-[400px] lg:h-[600px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 text-white">
                <div className="flex items-center gap-2 mb-2 lg:mb-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Shield size={20} className="text-cyan lg:size-24" />
                  </div>
                  <div className="font-bold text-lg lg:text-xl">100% Safe & Secure</div>
                </div>
                <p className="text-white/80 text-sm lg:text-base font-medium">Following international standards of sterilization.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="flex flex-col justify-center">
            <div className="grid gap-5">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 30 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card flex items-start gap-5 p-6 lg:p-5 rounded-2xl lg:rounded-2xl hover:-translate-y-1 transition-transform cursor-default group"
                  >
                    <div className="w-14 h-14 lg:w-12 lg:h-12 rounded-xl bg-bg-main flex items-center justify-center text-cyan group-hover:bg-cyan group-hover:text-white transition-colors shrink-0 shadow-sm border border-gray-100">
                      <Icon size={28} className="lg:size-24" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl lg:text-lg text-primary mb-1">{feature.title}</h3>
                      <p className="text-gray-500 font-medium text-base lg:text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
