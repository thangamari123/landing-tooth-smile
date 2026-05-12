import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react';
import { getBlogBySlug, getRelatedBlogs } from '../lib/blogs';
import EnquiryButton from '../components/EnquiryButton';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogBySlug(slug || '');
  const related = slug ? getRelatedBlogs(slug, 3) : [];

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1E2A78] mb-2">Blog Post Not Found</h1>
          <Link to="/blog" className="text-[#00A8A8] hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A78]/80 via-[#1E2A78]/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
                <ArrowLeft size={16} />Back to Blog
              </Link>
              <span className="inline-block px-3 py-1 bg-[#00A8A8] text-white text-xs font-semibold rounded-lg mb-4">{post.category}</span>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
                <span className="flex items-center gap-1.5"><User size={14} />{post.author}</span>
                <span className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-[#333333]/80 leading-relaxed mb-8 font-medium">{post.excerpt}</p>
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-[#333333]/70 leading-relaxed mb-6">{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-[#F2F4F7] rounded-2xl">
            <h3 className="font-serif text-xl font-bold text-[#1E2A78] mb-2">Need Professional Dental Care?</h3>
            <p className="text-[#333333]/60 mb-5">Book a consultation with Dr. R. R. Murali Karthik at Tooth & Smile Advanced Dentistry.</p>
            <div className="flex flex-wrap gap-3">
              <EnquiryButton label="Book Appointment" variant="primary" />
              <a href="tel:9551120208" className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#1E2A78]/15 text-[#1E2A78] font-semibold rounded-xl hover:border-[#00A8A8] hover:text-[#00A8A8] transition-all">
                Call 95511 20208
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 bg-[#F2F4F7] border-t border-[#F2F4F7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-[#1E2A78] mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((article, index) => (
                <motion.div key={article.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Link to={`/blog/${article.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-[#F2F4F7] hover:border-[#00A8A8]/20 hover:shadow-lg transition-all duration-300">
                    <div className="relative h-44 overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-[#00A8A8] font-semibold">{article.category}</span>
                      <h3 className="font-semibold text-[#1E2A78] mt-1 mb-2 line-clamp-2 group-hover:text-[#0F8ACB] transition-colors">{article.title}</h3>
                      <span className="inline-flex items-center gap-1 text-[#00A8A8] text-sm font-semibold group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
