import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, ChevronDown } from 'lucide-react';
import { blogPosts } from '../lib/blogs';
import WhatsAppButton from '../components/WhatsAppButton';

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F2F4F7] to-white border-b border-[#F2F4F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <Link to="/" className="inline-flex items-center gap-2 text-[#333333]/40 hover:text-[#1E2A78] text-sm mb-6 transition-colors">
              <ChevronDown size={16} className="rotate-90" />Back to Home
            </Link>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2A78] mb-4">Dental Health Blog</h1>
            <p className="text-[#333333]/60 text-lg">Expert tips, treatment guides, and oral health advice from Dr. R. R. Murali Karthik and the Tooth & Smile team.</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <Link to={`/blog/${article.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-[#F2F4F7] hover:border-[#00A8A8]/20 hover:shadow-xl hover:shadow-[#1E2A78]/5 transition-all duration-300 h-full">
                  <div className="relative h-52 overflow-hidden">
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
                    <span className="inline-flex items-center gap-1 text-[#00A8A8] text-sm font-semibold group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
