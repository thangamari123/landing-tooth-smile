import { motion } from 'framer-motion';
import { Clock, Phone, CalendarCheck, AlertCircle } from 'lucide-react';

const schedule = [
  { day: 'Monday', time: '9:30 AM – 8:00 PM', status: 'open' },
  { day: 'Tuesday', time: '9:30 AM – 8:00 PM', status: 'open' },
  { day: 'Wednesday', time: '9:30 AM – 8:00 PM', status: 'open' },
  { day: 'Thursday', time: '9:30 AM – 8:00 PM', status: 'open' },
  { day: 'Friday', time: '9:30 AM – 8:00 PM', status: 'open' },
  { day: 'Saturday', time: '9:30 AM – 8:00 PM', status: 'open' },
  { day: 'Sunday', time: 'By Appointment Only', status: 'appointment' },
];

export default function Timings() {
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-semibold rounded-full mb-4">Visit Us</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2A78] mb-6">Clinic Timings & <span className="text-[#0F8ACB]">Location</span></h2>
            <p className="text-[#333333]/70 leading-relaxed mb-8">We are conveniently located in the heart of Mylapore, Chennai. Our extended hours ensure you can get the dental care you need without disrupting your schedule.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-[#F2F4F7] rounded-xl">
                <div className="w-12 h-12 bg-[#00A8A8]/10 rounded-xl flex items-center justify-center"><Clock size={22} className="text-[#00A8A8]" /></div>
                <div><div className="font-semibold text-[#1E2A78]">Monday – Saturday</div><div className="text-[#333333]/50 text-sm">9:30 AM – 8:00 PM</div></div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#F2F4F7] rounded-xl">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center"><AlertCircle size={22} className="text-amber-600" /></div>
                <div><div className="font-semibold text-[#1E2A78]">Sunday</div><div className="text-[#333333]/50 text-sm">By Appointment Only</div></div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#F2F4F7] rounded-xl">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center"><Phone size={22} className="text-emerald-600" /></div>
                <div><div className="font-semibold text-[#1E2A78]">Emergency Contact</div><div className="text-[#333333]/50 text-sm">95511 20208 / 044-45084467</div></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={scrollToContact} className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A8A8] hover:bg-[#008f8f] text-white font-semibold rounded-xl transition-all hover:shadow-lg"><CalendarCheck size={18} />Book Appointment</button>
              <a href="tel:9551120208" className="inline-flex items-center gap-2 px-6 py-3 border border-[#F2F4F7] text-[#333333] font-semibold rounded-xl hover:border-[#00A8A8] hover:text-[#00A8A8] transition-all"><Phone size={18} />Call Now</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="bg-white rounded-2xl border border-[#F2F4F7] shadow-lg shadow-black/5 overflow-hidden">
              <div className="p-6 border-b border-[#F2F4F7]">
                <h3 className="font-semibold text-[#1E2A78] text-lg">Weekly Schedule</h3>
                <p className="text-[#333333]/50 text-sm mt-1">Plan your visit accordingly</p>
              </div>
              <div className="divide-y divide-[#F2F4F7]">
                {schedule.map((item, index) => (
                  <motion.div key={item.day} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 hover:bg-[#F2F4F7] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.status === 'open' ? 'bg-[#00A8A8]' : 'bg-amber-400'}`} />
                      <span className="font-medium text-[#1E2A78]">{item.day}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#333333]/50 text-sm">{item.time}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.status === 'open' ? 'bg-[#00A8A8]/10 text-[#00A8A8]' : 'bg-amber-100 text-amber-700'}`}>{item.status === 'open' ? 'Open' : 'Appt.'}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
