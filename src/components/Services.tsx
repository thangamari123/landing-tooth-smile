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
    <section id="services" className="py-10 lg:py-16 bg-bg-main relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 lg:mb-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-4 tracking-wide uppercase">
            <Sparkles size={14} /> Our Premium Services
          </span>
          <h2 className="font-serif text-3xl sm:text-3xl lg:text-4xl font-extrabold text-primary mb-4">World-Class Dental Treatment</h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto font-medium">Advanced procedures, digital precision, and gentle care tailored to restore your perfect smile.</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {treatments.slice(0, 12).map((service, index) => {
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[180px] sm:h-[200px] rounded-[1rem] overflow-hidden bg-white hover:-translate-y-1 transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-cyan/30"
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

                <div className="relative z-10 p-5 h-full flex flex-col justify-end">

                  <h3 className="font-bold text-white mb-2 text-sm md:text-base">{service.title}</h3>

                  <button className="inline-flex items-center gap-2 text-cyan font-bold tracking-wide text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    Explore <ArrowRight size={14} />
                  </button>
                </div>

                {/* Gradient Border Glow Effect */}
                <div className="absolute inset-0 z-20 pointer-events-none rounded-[1rem] ring-1 ring-inset ring-white/20 group-hover:ring-cyan/50 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
