import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const articles = [
  { id: 1, title: 'Are Dental Implants Right for You? Everything You Need to Know', excerpt: 'Dental implants are the most advanced solution for missing teeth. Learn about the procedure, recovery time, costs, and whether you are a good candidate.', date: 'Jan 15, 2025', readTime: '5 min read', category: 'Dental Implants', image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80' },
  { id: 2, title: 'Root Canal Myths Debunked: Why Modern RCT is Painless', excerpt: 'Think root canals are painful? Modern rotary endodontics and laser technology have made RCT as comfortable as getting a filling.', date: 'Jan 8, 2025', readTime: '4 min read', category: 'Root Canal', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80' },
  { id: 3, title: 'Invisible Aligners vs. Traditional Braces: Which is Better?', excerpt: 'Choosing between clear aligners and metal braces? We break down the pros, cons, costs, and timeline for each option.', date: 'Dec 28, 2024', readTime: '6 min read', category: 'Orthodontics', image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80' },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-semibold rounded-full mb-4">Dental Health Blog</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2A78] mb-4">Latest from Our Blog</h2>
          <p className="text-[#333333]/60 max-w-2xl mx-auto">Stay informed with expert dental tips, treatment guides, and oral health advice from our specialists.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article key={article.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#F2F4F7] hover:border-[#00A8A8]/20 hover:shadow-xl hover:shadow-[#1E2A78]/5 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#00A8A8] text-white text-xs font-semibold rounded-lg">{article.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-[#333333]/40 text-xs mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} />{article.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{article.readTime}</span>
                </div>
                <h3 className="font-semibold text-[#1E2A78] mb-2 line-clamp-2 group-hover:text-[#0F8ACB] transition-colors">{article.title}</h3>
                <p className="text-[#333333]/50 text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                <button className="inline-flex items-center gap-1 text-[#00A8A8] text-sm font-semibold hover:gap-2 transition-all">Read More <ArrowRight size={14} /></button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
