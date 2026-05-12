import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { treatments } from '../lib/treatments';

export default function Services() {
  const navigate = useNavigate();

  const handleLearnMore = (slug: string) => {
    navigate(`/treatments/${slug}`);
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-bg-main relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-4 tracking-wide uppercase">
            <Sparkles size={14} /> Our Premium Services
          </span>
          <h2 className="font-serif text-3xl sm:text-3xl lg:text-4xl font-extrabold text-primary mb-6">World-Class Dental Treatment</h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto font-medium">Advanced procedures, digital precision, and gentle care tailored to restore your perfect smile.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.slice(0, 6).map((service, index) => {
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[280px] sm:h-[320px] rounded-[1.5rem] overflow-hidden bg-white hover:-translate-y-2 transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-cyan/30"
                onClick={() => handleLearnMore(service.slug)}
                style={{
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)"
                }}
              >
                {/* Background image with overlay */}
                <div className="absolute inset-0 z-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col justify-end">

                  <h3 className="font-bold text-white mb-4 text-xl">{service.title}</h3>

                  <button className="inline-flex items-center gap-2 text-cyan font-bold tracking-wide text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    Explore Treatment <ArrowRight size={16} />
                  </button>
                </div>

                {/* Gradient Border Glow Effect */}
                <div className="absolute inset-0 z-20 pointer-events-none rounded-[1.5rem] ring-1 ring-inset ring-white/20 group-hover:ring-cyan/50 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
