import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    rating: 5,
    text: "Dr. Murali Karthik is an exceptional doctor. I had a dental implant procedure done and it was completely painless. The digital diagnostic tools are state-of-the-art. Highly recommend Tooth & Smile!",
    date: '1 week ago',
    type: 'Local Guide'
  },
  {
    id: 2,
    name: 'Sujatha Srinivasan',
    rating: 5,
    text: "Very friendly staff and clean clinic. The root canal treatment was done in a single sitting and was totally pain-free. Excellent care and reasonable rates.",
    date: '2 weeks ago',
    type: 'Verified Patient'
  },
  {
    id: 3,
    name: 'Amitabh Sharma',
    rating: 5,
    text: "Had my wisdom teeth removed here. The surgeon was highly skilled and finished the extraction in less than 20 minutes with zero pain. The follow-up was also great.",
    date: '3 weeks ago',
    type: 'Local Guide'
  },
  {
    id: 4,
    name: 'Deepika R',
    rating: 5,
    text: "Got teeth whitening done for my wedding. The results are amazing! The team explains every step clearly and maintains international hygiene standards.",
    date: '1 month ago',
    type: 'Verified Patient'
  },
  {
    id: 5,
    name: 'Vikram Aditya',
    rating: 5,
    text: "My elderly parents have been getting full dentures and implant-retained dentures from Dr. Murali. The patience and care shown here is exceptional. Best dental clinic in Chennai.",
    date: '2 months ago',
    type: 'Local Guide'
  }
];

export default function GoogleReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  const slideLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      // Run once initially
      checkScroll();
    }
    return () => el?.removeEventListener('scroll', checkScroll);
  }, []);

  // Check scroll when window sizes change
  useEffect(() => {
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  // Automatic sliding interval for reviews
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="google-reviews" className="py-10 lg:py-16 bg-[#F8FAFC] overflow-hidden relative border-y border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-cyan/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#4285F4]/10 text-[#4285F4] text-xs font-bold rounded-full mb-4 border border-[#4285F4]/20 uppercase tracking-wider">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google Reviews
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2A78] mb-3">
              Patient Trust is Our Success
            </h2>
            <p className="text-gray-500 text-sm sm:text-base font-medium">
              We are incredibly proud to have built a reputation for painless care. Here is what our patients say on Google.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-5 lg:min-w-[340px]">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2">
                <span className="text-3xl sm:text-4xl font-black text-[#1E2A78]">4.9</span>
                <div className="flex flex-col">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">500+ Reviews</span>
                </div>
              </div>
            </div>
            <div className="h-px sm:h-12 w-full sm:w-px bg-gray-100" />
            <a
              href="https://share.google/nhwKj6EY2zqraPrCG"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-5 py-3 bg-[#4285F4] text-white font-bold text-xs rounded-xl hover:bg-[#3572D4] transition-all flex items-center justify-center gap-2 shadow-md shadow-[#4285F4]/10"
            >
              <MessageSquare size={14} /> Write a Review
            </a>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide pt-2 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="snap-center shrink-0 w-[85vw] sm:w-[320px] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-gray-200 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#4285F4]/10 flex items-center justify-center text-[#4285F4] font-bold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-[#1E2A78] text-sm leading-tight">{review.name}</div>
                        <div className="text-[10px] text-gray-400 font-semibold mt-0.5">{review.type}</div>
                      </div>
                    </div>
                    {/* Google G Logo Badge */}
                    <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                      <svg className="w-3.5 h-3.5 fill-[#4285F4]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium line-clamp-4">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Posted on Google</span>
                  <span className="text-[10px] text-gray-400 font-semibold">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Left/Right Controls for Desktop */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[-20px] z-20 hidden sm:block">
            <button
              onClick={slideLeft}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border border-gray-100 bg-white shadow-md flex items-center justify-center text-[#1E2A78] hover:bg-gray-50 transition-all ${
                !canScrollLeft ? 'opacity-0 cursor-default pointer-events-none' : 'opacity-100'
              }`}
            >
              <ChevronLeft size={18} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[-20px] z-20 hidden sm:block">
            <button
              onClick={slideRight}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border border-gray-100 bg-white shadow-md flex items-center justify-center text-[#1E2A78] hover:bg-gray-50 transition-all ${
                !canScrollRight ? 'opacity-0 cursor-default pointer-events-none' : 'opacity-100'
              }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
