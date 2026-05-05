import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Instagram, Facebook, Youtube, Star } from 'lucide-react';

const quickLinks = [
  { label: 'Treatments', href: '/#services', isHash: true },
  { label: 'Our Doctors', href: '/#doctors', isHash: true },
  { label: 'Reviews', href: '/#testimonials', isHash: true },
  { label: 'About', href: '/about' },
  { label: 'Before & After', href: '/before-after' },
  { label: 'Blog', href: '/blog' },
];

const treatmentsList = [
  { label: 'Implants', href: '/treatments/implants' },
  { label: 'Root Canal', href: '/treatments/root-canal' },
  { label: 'Braces', href: '/treatments/braces' },
  { label: 'Whitening', href: '/treatments/whitening' },
  { label: 'Smile Makeover', href: '/treatments/smile-makeover' },
  { label: 'Pediatric Dentistry', href: '/treatments/pediatric' },
];

export default function Footer() {
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
      const targetId = href.split('#')[1];
      if (window.location.pathname !== '/') {
        window.location.href = href;
        return;
      }
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
              <a href="tel:04445084467" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm tracking-wide transition-colors border border-white/15">
                <Phone size={16} />Call Now
              </a>
              <Link to="/book-appointment"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A8A8] hover:bg-[#008f8f] text-white font-semibold text-sm tracking-wide transition-colors"
              >
                Book Appointment
              </Link>
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
                <div className="text-[10px] uppercase tracking-widest text-[#5BC0EB]">Advanced Dental Care</div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">Smile with Confidence. Live without Pain.</p>
            
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm">Follow Us</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="text-white/50 hover:text-[#00A8A8] transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-white/50 hover:text-[#00A8A8] transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-white/50 hover:text-[#00A8A8] transition-colors"><Youtube size={20} /></a>
                <a href="#" className="text-white/50 hover:text-[#00A8A8] transition-colors"><Star size={20} /></a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.isHash ? (
                    <button onClick={() => handleLinkClick(link.href, link.isHash)} className="text-white/50 hover:text-white text-sm transition-colors">{link.label}</button>
                  ) : (
                    <Link to={link.href} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/50 hover:text-white text-sm transition-colors">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Treatments</h4>
            <ul className="space-y-3">
              {treatmentsList.map((t) => (
                <li key={t.label}>
                  <Link to={t.href} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/50 hover:text-white text-sm transition-colors">{t.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><MapPin size={18} className="text-[#00A8A8] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/50">60/71, Appu Street,<br />Mylapore, Chennai – 600004</span>
              </li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-[#00A8A8] flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:04445084467" className="text-white/50 hover:text-white transition-colors block">044-45084467</a>
                </div>
              </li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-[#00A8A8] flex-shrink-0" />
                <a href="mailto:hello@toothandsmile.in" className="text-sm text-white/50 hover:text-white transition-colors">hello@toothandsmile.in</a>
              </li>
              <li className="flex items-start gap-3"><Clock size={18} className="text-[#00A8A8] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/50 leading-relaxed">
                  <strong className="text-white font-medium">Mon–Sat:</strong> 9:00 AM – 7:00 PM<br/>
                  <strong className="text-white font-medium">Sunday:</strong> 10:00 AM – 2:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">© 2025 Tooth & Smile Dental Clinic. All rights reserved.</p>
          <p className="text-[#00A8A8] font-medium text-sm text-center sm:text-right italic">"Smile with Confidence. Live without Pain."</p>
        </div>
      </div>
    </footer>
  );
}
