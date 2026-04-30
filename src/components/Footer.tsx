import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, ArrowUp } from 'lucide-react';
import { treatments } from '../lib/treatments';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about', isHash: true },
  { label: 'Doctor', href: '#doctor', isHash: true },
  { label: 'Reviews', href: '#testimonials', isHash: true },
  { label: 'Blog', href: '/blog' },
  { label: 'Before & After', href: '/before-after' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
  const handleLinkClick = (href: string, isHash?: boolean) => {
    if (href === '/') {
      if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.href = '/';
      }
      return;
    }
    if (isHash) {
      if (window.location.pathname !== '/') {
        window.location.href = `/${href}`;
        return;
      }
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    handleLinkClick('#contact', true);
  };

  return (
    <footer className="bg-[#1E2A78] text-white/70">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">Ready to Transform Your Smile?</h3>
              <p className="text-white/60">Book your consultation today and take the first step towards a healthier, more confident smile.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:9551120208" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm tracking-wide transition-colors border border-white/15">
                <Phone size={16} />Call Now
              </a>
              <a href="https://wa.me/919551120208?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tooth%20%26%20Smile%20Advanced%20Dentistry." target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A8A8] hover:bg-[#008f8f] text-white font-semibold text-sm tracking-wide transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-11 h-11 bg-white rounded-xl overflow-hidden flex items-center justify-center p-1.5 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <img src="/images/Thooth_Smile_Logo.png" alt="Tooth & Smile Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-serif text-lg font-bold text-white leading-tight">Tooth & Smile</div>
                <div className="text-[10px] uppercase tracking-widest text-[#5BC0EB]">Advanced Dentistry</div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">Premium dental care in the heart of Mylapore, Chennai. Expert treatments, advanced technology, and personalized care.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.isHash || link.href === '/' ? (
                    <button onClick={() => handleLinkClick(link.href, link.isHash)} className="text-white/50 hover:text-white text-sm transition-colors">{link.label}</button>
                  ) : (
                    <Link to={link.href} className="text-white/50 hover:text-white text-sm transition-colors">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Treatments</h4>
            <ul className="space-y-3">
              {treatments.map((t) => (
                <li key={t.slug}><Link to={`/treatments/${t.slug}`} className="text-white/50 hover:text-white text-sm transition-colors">{t.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><MapPin size={18} className="text-[#00A8A8] flex-shrink-0 mt-0.5" /><span className="text-sm text-white/50">60/71, Appu Street,<br />Mylapore, Chennai – 600004</span></li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-[#00A8A8] flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:9551120208" className="text-white/50 hover:text-white transition-colors block">95511 20208</a>
                  <a href="tel:04445084467" className="text-white/50 hover:text-white transition-colors block">044-45084467</a>
                </div>
              </li>
              <li className="flex items-center gap-3"><Clock size={18} className="text-[#00A8A8] flex-shrink-0" /><span className="text-sm text-white/50">Mon – Sat: 9:30 AM – 8 PM</span></li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-[#00A8A8] flex-shrink-0" /><span className="text-sm text-white/50">info@toothandsmile.in</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-white/30 text-sm text-center">© {new Date().getFullYear()} Tooth & Smile Advanced Dentistry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
