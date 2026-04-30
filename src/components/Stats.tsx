import { motion } from 'framer-motion';
import { Users, Calendar, Award, Star } from 'lucide-react';

const stats = [
  { icon: Users, value: '5000+', label: 'Happy Patients' },
  { icon: Calendar, value: '10+', label: 'Years Experience' },
  { icon: Award, value: '98%', label: 'Success Rate' },
  { icon: Star, value: '4.9', label: 'Google Rating' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0F8ACB] to-[#1E2A78]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon size={26} className="text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
