import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Instagram, Facebook, Youtube, Star } from 'lucide-react';

const quickLinks = [
  { label: 'Treatments', href: '/#services', isHash: true },
  { label: 'Our Doctors', href: '/#doctors', isHash: true },
  { label: 'Reviews', href: '/#testimonials', isHash: true },
  { label: 'About', href: '/about' },
  { label: 'Book Appointment', href: '/book-appointment' },
  { label: 'Before & After', href: '/before-after' },
  { label: 'Blog', href: '/blog' },
];

const treatmentsList = [
  { label: 'Implants', href: '/treatments/dental-implants' },
  { label: 'Root Canal', href: '/treatments/root-canal-treatment' },
  { label: 'Braces', href: '/treatments/braces-aligners' },
  { label: 'Whitening', href: '/treatments/teeth-whitening' },
  { label: 'Smile Makeover', href: '/treatments/smile-makeover' },
  { label: 'Pediatric Dentistry', href: '/treatments/pediatric-dentistry' },
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
    <>
      {/* Modern Dental CTA Banner – Premium Clinic Conversion Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mb-16 sm:-mb-20 pt-8 lg:pt-0">
        <div
          className="rounded-[24px] sm:rounded-[32px] overflow-hidden flex flex-col lg:flex-row relative shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #0F3D91, #0B2E6B)',
          }}
        >
          {/* Slight glass highlight overlay */}
          <div className="absolute inset-0 bg-white/5 pointer-events-none" />

          {/* Left Image Section */}
          <div className="lg:w-1/3 relative h-[160px] sm:h-[220px] lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Smiling couple with healthy teeth"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Soft gradient overlay to blend image seamlessly */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0F3D91] via-[#0F3D91]/60 to-transparent" />
          </div>

          {/* Center Content & Right Side */}
          <div className="lg:w-2/3 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 relative z-10">

            {/* Center Content */}
            <div className="flex-1 text-center lg:text-left">
              <h3
                className="font-serif font-bold text-white mb-3 sm:mb-4 leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
              >
                Ready to Restore Your <span className="text-cyan">Perfect Smile?</span>
              </h3>
              <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Join 5,000+ happy patients who trust Tooth & Smile. Book your consultation today and take the first step towards a healthier you.
              </p>

              {/* Review Section */}
              <a
                href="https://www.google.com/search?q=Tooth+and+Smile+Advanced+Dentistry+-+Mylapore+Reviews&sca_esv=78ed2d1ec9f8904c&hl=en-GB&authuser=0&aep=1&biw=1231&bih=575&prmd=ivns&sxsrf=ANbL-n6kplCmRX9J3US1D2QgyFQF50ey1w:1780030724116&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpV6Bbbmx4QVaoKkiRQ2jlwrxFIvM8XHanlYvyyDlVq4v0ByTSZEH6uETDXPDhVVnqzCW2nvmXZMVTx1PeF1IQlOQNjnKJ4upYPmKc4AwMlbcxYUnJ3xzWJl-4xTprcuH2hpKCJQ1LPByBskuACp3Yg4ptRP3GQRoRHvYMVrW_9oCfXdIBQJbk_uMcGSP2X0hFhT-lYQ&sa=X&ved=2ahUKEwjD5f-X292UAxXHe2wGHfdPJqsQ0pQJegQIBhAI#sv=CAwSlAMKBmxjbF9wdhJTCgNwdnESTENnMHZaeTh4TVdKNWVHY3pZMlp5SWlnS0lsUnZiM1JvSUdGdVpDQlRiV2xzWlNCQlpIWmhibU5sWkNCRVpXNTBhWE4wY25rUUFoZ0QS0AEKA2xxaRLIAUNqVlViMjkwYUNCaGJtUWdVMjFwYkdVZ1FXUjJZVzVqWldRZ1JHVnVkR2x6ZEhKNUlDMGdUWGxzWVhCdmNtVWdVbVYyYVdWM2N5SUNPQUZJdDl1R3hfZXFnSUFJV2o4UUFCQUJFQUlRQXhBRUdBQVlBaGdFR0FVaUszUnZiM1JvSUdGdVpDQnpiV2xzWlNCaFpIWmhibU5sWkNCa1pXNTBhWE4wY25rZ2JYbHNZWEJ2Y21XU0FRMWtaVzUwWVd4ZlkyeHBibWxqEhIKA3RicxILbHJmOiEzc0lBRT0SOgoBcRI1VG9vdGggYW5kIFNtaWxlIEFkdmFuY2VkIERlbnRpc3RyeSAtIE15bGFwb3JlIFJldmlld3MaEmxvY2FsLXBsYWNlLXZpZXdlchgKILzrlfIE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center lg:justify-start gap-3 group/review cursor-pointer"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover/review:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /><path d="M1 1h22v22H1z" fill="none" /></svg>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-sm">4.9/5.0</span>
                    <span className="text-white/50 text-[10px] uppercase tracking-wider font-bold">500+ Google Reviews</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Right Side - Contact & CTA */}
            <div className="w-full lg:w-auto flex flex-col items-center lg:items-end justify-center gap-6 lg:pl-8 lg:border-l lg:border-white/10">
              <div className="flex flex-col items-center lg:items-end gap-4 text-white/90">
                <a href="tel:04445084467" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <Phone size={18} className="text-cyan" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Call Now</span>
                    <span className="text-lg font-bold tracking-tight">044-45084467</span>
                  </div>
                </a>
              </div>

              <Link to="/book-appointment"
                className="w-full sm:w-auto text-center px-6 sm:px-10 py-4 sm:py-5 bg-white text-primary font-bold rounded-2xl hover:bg-cyan hover:text-white hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Book Appointment
              </Link>
            </div>

          </div>
        </div>
      </div>

      <footer className="bg-primary pt-24 sm:pt-28 lg:pt-32 pb-6 text-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-12 sm:pb-16">
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2.5 mb-5 group">
                <div className="w-11 h-11 bg-white rounded-xl overflow-hidden flex items-center justify-center p-1.5 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                  <img src="/images/Thooth_Smile_Logo.png" alt="Tooth & Smile Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="font-sans text-lg font-bold text-white leading-tight">Tooth & Smile</div>
                  <div className="text-[10px] uppercase tracking-widest text-cyan">Advanced Dental Care</div>
                </div>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-6">Smile with Confidence. Live without Pain.</p>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm">Follow Us</h4>
                <div className="flex items-center gap-4">
                  <a href="https://www.instagram.com/toothsmiledentalclinic/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-cyan transition-colors"><Instagram size={20} /></a>
                  <a href="https://www.facebook.com/profile.php?id=61567009150525" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-cyan transition-colors"><Facebook size={20} /></a>
                  <a href="https://www.youtube.com/@toothandsmiledentalclinic-7818/featured" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-cyan transition-colors"><Youtube size={20} /></a>
                  <a href="https://www.google.com/search?q=Tooth+and+Smile+Advanced+Dentistry+-+Mylapore+Reviews&sca_esv=78ed2d1ec9f8904c&hl=en-GB&authuser=0&aep=1&biw=1231&bih=575&prmd=ivns&sxsrf=ANbL-n6kplCmRX9J3US1D2QgyFQF50ey1w:1780030724116&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpV6Bbbmx4QVaoKkiRQ2jlwrxFIvM8XHanlYvyyDlVq4v0ByTSZEH6uETDXPDhVVnqzCW2nvmXZMVTx1PeF1IQlOQNjnKJ4upYPmKc4AwMlbcxYUnJ3xzWJl-4xTprcuH2hpKCJQ1LPByBskuACp3Yg4ptRP3GQRoRHvYMVrW_9oCfXdIBQJbk_uMcGSP2X0hFhT-lYQ&sa=X&ved=2ahUKEwjD5f-X292UAxXHe2wGHfdPJqsQ0pQJegQIBhAI#sv=CAwSlAMKBmxjbF9wdhJTCgNwdnESTENnMHZaeTh4TVdKNWVHY3pZMlp5SWlnS0lsUnZiM1JvSUdGdVpDQlRiV2xzWlNCQlpIWmhibU5sWkNCRVpXNTBhWE4wY25rUUFoZ0QS0AEKA2xxaRLIAUNqVlViMjkwYUNCaGJtUWdVMjFwYkdVZ1FXUjJZVzVqWldRZ1JHVnVkR2x6ZEhKNUlDMGdUWGxzWVhCdmNtVWdVbVYyYVdWM2N5SUNPQUZJdDl1R3hfZXFnSUFJV2o4UUFCQUJFQUlRQXhBRUdBQVlBaGdFR0FVaUszUnZiM1JvSUdGdVpDQnpiV2xzWlNCaFpIWmhibU5sWkNCa1pXNTBhWE4wY25rZ2JYbHNZWEJ2Y21XU0FRMWtaVzUwWVd4ZlkyeHBibWxqEhIKA3RicxILbHJmOiEzc0lBRT0SOgoBcRI1VG9vdGggYW5kIFNtaWxlIEFkdmFuY2VkIERlbnRpc3RyeSAtIE15bGFwb3JlIFJldmlld3MaEmxvY2FsLXBsYWNlLXZpZXdlchgKILzrlfIE" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-cyan transition-colors" title="Google Reviews"><Star size={20} /></a>
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
                      <Link to={link.href} className="text-white/50 hover:text-white text-sm transition-colors">{link.label}</Link>
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
                    <Link to={t.href} className="text-white/50 hover:text-white text-sm transition-colors">{t.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-5">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><MapPin size={18} className="text-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/50">60/71, Appu Street,<br />Mylapore, Chennai – 600004</span>
                </li>
                <li className="flex items-center gap-3"><Phone size={18} className="text-cyan flex-shrink-0" />
                  <div className="text-sm">
                    <a href="tel:04445084467" className="text-white/50 hover:text-white transition-colors block">044-45084467</a>
                  </div>
                </li>
                <li className="flex items-center gap-3"><Mail size={18} className="text-cyan flex-shrink-0" />
                  <a href="mailto:hello@toothandsmile.in" className="text-sm text-white/50 hover:text-white transition-colors">hello@toothandsmile.in</a>
                </li>
                <li className="flex items-start gap-3"><Clock size={18} className="text-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/50 leading-relaxed">
                    <strong className="text-white font-medium">Mon–Sat:</strong> 9:00 AM – 7:00 PM<br />
                    <strong className="text-white font-medium">Sunday:</strong> 10:00 AM – 2:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
            <p className="text-white/40 text-sm text-center sm:text-left">© 2026 Tooth & Smile Dental Clinic. All rights reserved.</p>
            <p className="text-cyan font-medium text-sm text-center sm:text-right italic">"Smile with Confidence. Live without Pain."</p>
          </div>
        </div>
      </footer>
    </>
  );
}
