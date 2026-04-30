import { motion } from 'framer-motion';
import { Award, Scan, FlaskConical, HeartPulse } from 'lucide-react';

const highlights = [
  { icon: Award, title: 'MDS Prosthodontist', subtitle: '& Implant Specialist', description: 'Expert care by a qualified specialist with advanced training in prosthodontics and implantology.' },
  { icon: Scan, title: 'Advanced OPG', subtitle: '& Laser Technology', description: 'State-of-the-art diagnostic imaging and laser-assisted procedures for precise, pain-free treatment.' },
  { icon: FlaskConical, title: 'In-house Dental Lab', subtitle: 'Faster Results', description: 'On-site laboratory ensures quicker turnaround times for crowns, bridges, and dental prosthetics.' },
  { icon: HeartPulse, title: 'Comfortable,', subtitle: 'Pain-Free Treatment', description: 'Modern anesthesia techniques and gentle care make every visit comfortable and stress-free.' },
];

export default function Highlights() {
  return (
    <section className="py-16 bg-[#1E2A78]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <item.icon size={26} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-[#5BC0EB] font-medium text-sm mb-3">{item.subtitle}</p>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
