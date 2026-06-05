import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MessageSquare, Globe } from 'lucide-react';

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
    name: 'Karthikeyan M',
    rating: 5,
    text: "நான் இங்க பல் சொத்தைக்கு சிகிச்சை எடுத்தேன். டாக்டர் ரொம்ப பொறுமையா விளக்கி, சுத்தமா வலி இல்லாம சிகிச்சை பண்ணாரு. கிளினிக் ரொம்ப சுத்தமா இருக்கு. ரொம்ப நன்றி!",
    date: '2 weeks ago',
    type: 'Verified Patient'
  },
  {
    id: 3,
    name: 'Sujatha Srinivasan',
    rating: 5,
    text: "Very friendly staff and clean clinic. The root canal treatment was done in a single sitting and was totally pain-free. Excellent care and reasonable rates.",
    date: '3 weeks ago',
    type: 'Verified Patient'
  },
  {
    id: 4,
    name: 'Lakshmi N',
    rating: 5,
    text: "Mylapore-la the best dental clinic. பல் எடுக்குறதுக்கு இங்க வந்தேன், கொஞ்சம் கூட வலி இல்ல. Staffs ellam romba friendly. Highly recommended.",
    date: '1 month ago',
    type: 'Local Guide'
  },
  {
    id: 5,
    name: 'Amitabh Sharma',
    rating: 5,
    text: "Had my wisdom teeth removed here. The surgeon was highly skilled and finished the extraction in less than 20 minutes with zero pain. The follow-up was also great.",
    date: '1 month ago',
    type: 'Local Guide'
  },
  {
    id: 6,
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
        <div className="text-center max-w-3xl mx-auto mb-8 flex flex-col items-center">
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

        {/* Realistic Google Profile Cards Side-by-Side */}
        <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-6 mb-12">
          {/* Card 1: Tooth and Smile Advanced Dentistry */}
          <div className="bg-[#202124] text-[#bdc1c6] p-3 sm:p-4 rounded-xl border border-[#3c4043] shadow-lg flex flex-row gap-3 font-sans relative overflow-hidden text-left items-center lg:w-[400px]">
            <div className="flex-1">
              <div className="text-[10px] font-bold text-[#81c995] uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#81c995]"></span> New Clinic
              </div>
              <a href="https://www.google.com/search?q=Tooth+and+Smile+Advanced+Dentistry+-+Mylapore+Reviews&sca_esv=78ed2d1ec9f8904c&hl=en-GB&authuser=0&aep=1&biw=1231&bih=575&prmd=ivns&sxsrf=ANbL-n6kplCmRX9J3US1D2QgyFQF50ey1w:1780030724116&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpV6Bbbmx4QVaoKkiRQ2jlwrxFIvM8XHanlYvyyDlVq4v0ByTSZEH6uETDXPDhVVnqzCW2nvmXZMVTx1PeF1IQlOQNjnKJ4upYPmKc4AwMlbcxYUnJ3xzWJl-4xTprcuH2hpKCJQ1LPByBskuACp3Yg4ptRP3GQRoRHvYMVrW_9oCfXdIBQJbk_uMcGSP2X0hFhT-lYQ&sa=X&ved=2ahUKEwjD5f-X292UAxXHe2wGHfdPJqsQ0pQJegQIBhAI#sv=CAwSmgMKBmxjbF9wdhJTCgNwdnESTENnMHZaeTh4TVc1b2VEZ3lialIzSWlnS0lsUnZiM1JvSUdGdVpDQlRiV2xzWlNCQlpIWmhibU5sWkNCRVpXNTBhWE4wY25rUUFoZ0QS1gEKA2xxaRLOAUNqVlViMjkwYUNCaGJtUWdVMjFwYkdVZ1FXUjJZVzVqWldRZ1JHVnVkR2x6ZEhKNUlDMGdUWGxzWVhCdmNtVWdVbVYyYVdWM2N5SUNPQUZJbTZHRnhMLTBnSUFJV2tNUUFCQUJFQUlRQXhBRUdBQVlBUmdDR0FNWUJCZ0ZJaXQwYjI5MGFDQmhibVFnYzIxcGJHVWdZV1IyWVc1alpXUWdaR1Z1ZEdsemRISjVJRzE1YkdGd2IzSmxrZ0VOWkdWdWRHRnNYMk5zYVc1cFl3EhIKA3RicxILbHJmOiEzc0lBRT0SOgoBcRI1VG9vdGggYW5kIFNtaWxlIEFkdmFuY2VkIERlbnRpc3RyeSAtIE15bGFwb3JlIFJldmlld3MaEmxvY2FsLXBsYWNlLXZpZXdlchgKIN329-AJ" target="_blank" rel="noopener noreferrer" className="text-[15px] sm:text-[16px] leading-tight font-medium text-[#e8eaed] hover:underline mb-1 inline-block decoration-[#e8eaed]">
                Tooth and Smile Advanced Dentistry - Mylapore
              </a>
              <div className="flex items-center gap-1 text-[12px] mb-1.5">
                <span className="text-[#9aa0a6]">5.0</span>
                <div className="flex gap-0.5 text-[#fbbc04] items-center">
                  <Star size={10} className="fill-current text-[#fbbc04]" />
                  <Star size={10} className="fill-current text-[#fbbc04]" />
                  <Star size={10} className="fill-current text-[#fbbc04]" />
                  <Star size={10} className="fill-current text-[#fbbc04]" />
                  <Star size={10} className="fill-current text-[#fbbc04]" />
                </div>
                <span>(33) · Dental clinic</span>
              </div>
              <div className="text-[12px] mb-1 text-[#9aa0a6]">
                Dr Ranga Rd
              </div>
              <div className="text-[12px] mb-2.5">
                <span className="text-[#81c995]">Open</span> <span className="text-[#9aa0a6]">· Closes 8 pm</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-[#8ab4f8] flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#202124]">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <p className="text-[12.5px] text-[#bdc1c6] leading-snug font-medium line-clamp-2">
                  "Best service with excellent results and compatible fee structure."
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 pl-2 sm:pl-3 border-l border-[#3c4043] min-w-[65px]">
              <a href="https://www.google.com/search?q=Tooth+and+Smile+Advanced+Dentistry+-+Mylapore+Reviews&sca_esv=78ed2d1ec9f8904c&hl=en-GB&authuser=0&aep=1&biw=1231&bih=575&prmd=ivns&sxsrf=ANbL-n6kplCmRX9J3US1D2QgyFQF50ey1w:1780030724116&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpV6Bbbmx4QVaoKkiRQ2jlwrxFIvM8XHanlYvyyDlVq4v0ByTSZEH6uETDXPDhVVnqzCW2nvmXZMVTx1PeF1IQlOQNjnKJ4upYPmKc4AwMlbcxYUnJ3xzWJl-4xTprcuH2hpKCJQ1LPByBskuACp3Yg4ptRP3GQRoRHvYMVrW_9oCfXdIBQJbk_uMcGSP2X0hFhT-lYQ&sa=X&ved=2ahUKEwjD5f-X292UAxXHe2wGHfdPJqsQ0pQJegQIBhAI#sv=CAwSmgMKBmxjbF9wdhJTCgNwdnESTENnMHZaeTh4TVc1b2VEZ3lialIzSWlnS0lsUnZiM1JvSUdGdVpDQlRiV2xzWlNCQlpIWmhibU5sWkNCRVpXNTBhWE4wY25rUUFoZ0QS1gEKA2xxaRLOAUNqVlViMjkwYUNCaGJtUWdVMjFwYkdVZ1FXUjJZVzVqWldRZ1JHVnVkR2x6ZEhKNUlDMGdUWGxzWVhCdmNtVWdVbVYyYVdWM2N5SUNPQUZJbTZHRnhMLTBnSUFJV2tNUUFCQUJFQUlRQXhBRUdBQVlBUmdDR0FNWUJCZ0ZJaXQwYjI5MGFDQmhibVFnYzIxcGJHVWdZV1IyWVc1alpXUWdaR1Z1ZEdsemRISjVJRzE1YkdGd2IzSmxrZ0VOWkdWdWRHRnNYMk5zYVc1cFl3EhIKA3RicxILbHJmOiEzc0lBRT0SOgoBcRI1VG9vdGggYW5kIFNtaWxlIEFkdmFuY2VkIERlbnRpc3RyeSAtIE15bGFwb3JlIFJldmlld3MaEmxvY2FsLXBsYWNlLXZpZXdlchgKIN329-AJ" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 group cursor-pointer">
                <div className="w-[32px] h-[32px] rounded-full border border-[#5f6368] flex items-center justify-center group-hover:bg-[#3c4043] transition-colors">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#8ab4f8]">
                     <path d="M13.5 22L2.5 11C2.1 10.6 2.1 9.9 2.5 9.5L9.5 2.5C9.9 2.1 10.6 2.1 11 2.5L22 13.5C22.4 13.9 22.4 14.6 22 15L15 22C14.6 22.4 13.9 22.4 13.5 22ZM12 7V10H9C8.4 10 8 10.4 8 11V14H10V12H12V15L16 11L12 7Z"/>
                   </svg>
                </div>
                <span className="text-[#8ab4f8] text-[10px] font-medium mt-0.5">Directions</span>
              </a>
            </div>
          </div>

          {/* Card 2: Tooth & Smile Dental Clinic */}
          <div className="bg-[#202124] text-[#bdc1c6] p-3 sm:p-4 rounded-xl border border-[#3c4043] shadow-lg flex flex-row gap-3 font-sans relative overflow-hidden text-left items-center lg:w-[400px]">
            <div className="flex-1">
              <div className="text-[10px] font-bold text-[#9aa0a6] uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9aa0a6]"></span> Old Clinic
              </div>
              <a href="https://www.google.com/search?q=Tooth+and+Smile+Advanced+Dentistry+-+Mylapore+Reviews&sca_esv=78ed2d1ec9f8904c&hl=en-GB&authuser=0&aep=1&biw=1231&bih=575&prmd=ivns&sxsrf=ANbL-n6kplCmRX9J3US1D2QgyFQF50ey1w:1780030724116&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpV6Bbbmx4QVaoKkiRQ2jlwrxFIvM8XHanlYvyyDlVq4v0ByTSZEH6uETDXPDhVVnqzCW2nvmXZMVTx1PeF1IQlOQNjnKJ4upYPmKc4AwMlbcxYUnJ3xzWJl-4xTprcuH2hpKCJQ1LPByBskuACp3Yg4ptRP3GQRoRHvYMVrW_9oCfXdIBQJbk_uMcGSP2X0hFhT-lYQ&sa=X&ved=2ahUKEwjD5f-X292UAxXHe2wGHfdPJqsQ0pQJegQIBhAI#sv=CAwSlAMKBmxjbF9wdhJTCgNwdnESTENnMHZaeTh4TVdKNWVHY3pZMlp5SWlnS0lsUnZiM1JvSUdGdVpDQlRiV2xzWlNCQlpIWmhibU5sWkNCRVpXNTBhWE4wY25rUUFoZ0QS0AEKA2xxaRLIAUNqVlViMjkwYUNCaGJtUWdVMjFwYkdVZ1FXUjJZVzVqWldRZ1JHVnVkR2x6ZEhKNUlDMGdUWGxzWVhCdmNtVWdVbVYyYVdWM2N5SUNPQUZJdDl1R3hfZXFnSUFJV2o4UUFCQUJFQUlRQXhBRUdBQVlBaGdFR0FVaUszUnZiM1JvSUdGdVpDQnpiV2xzWlNCaFpIWmhibU5sWkNCa1pXNTBhWE4wY25rZ2JYbHNZWEJ2Y21XU0FRMWtaVzUwWVd4ZlkyeHBibWxqEhIKA3RicxILbHJmOiEzc0lBRT0SOgoBcRI1VG9vdGggYW5kIFNtaWxlIEFkdmFuY2VkIERlbnRpc3RyeSAtIE15bGFwb3JlIFJldmlld3MaEmxvY2FsLXBsYWNlLXZpZXdlchgKILzrlfIE" target="_blank" rel="noopener noreferrer" className="text-[15px] sm:text-[16px] leading-tight font-medium text-[#e8eaed] hover:underline mb-1 inline-block decoration-[#e8eaed]">
                Tooth & Smile Dental Clinic
              </a>
              <div className="flex items-center gap-1 text-[12px] mb-1.5">
                <span className="text-[#9aa0a6]">4.9</span>
                <div className="flex gap-0.5 text-[#fbbc04] items-center">
                  <Star size={10} className="fill-current text-[#fbbc04]" />
                  <Star size={10} className="fill-current text-[#fbbc04]" />
                  <Star size={10} className="fill-current text-[#fbbc04]" />
                  <Star size={10} className="fill-current text-[#fbbc04]" />
                  <Star size={10} className="fill-current text-[#fbbc04]" />
                </div>
                <span>(475) · Dental clinic</span>
              </div>
              <div className="text-[12px] mb-1 text-[#9aa0a6]">
                60/71, Appu St · 095511 20208
              </div>
              <div className="text-[12px] mb-2.5">
                <span className="text-[#81c995]">Open</span> <span className="text-[#9aa0a6]">· Closes 2 pm</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-[#8ab4f8] flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#202124]">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <p className="text-[12.5px] text-[#bdc1c6] leading-snug font-medium line-clamp-2">
                  "No Pain, more smile 😁... I'm Very happy to share the feedback."
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 pl-2 sm:pl-3 border-l border-[#3c4043] min-w-[65px]">
              <a href="/" className="flex flex-col items-center gap-1 group cursor-pointer">
                <div className="w-[32px] h-[32px] rounded-full border border-[#5f6368] flex items-center justify-center group-hover:bg-[#3c4043] transition-colors">
                  <Globe size={16} className="text-[#8ab4f8]" strokeWidth={2.5} />
                </div>
                <span className="text-[#8ab4f8] text-[10px] font-medium">Website</span>
              </a>
              <a href="https://www.google.com/search?q=Tooth+and+Smile+Advanced+Dentistry+-+Mylapore+Reviews&sca_esv=78ed2d1ec9f8904c&hl=en-GB&authuser=0&aep=1&biw=1231&bih=575&prmd=ivns&sxsrf=ANbL-n6kplCmRX9J3US1D2QgyFQF50ey1w:1780030724116&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpV6Bbbmx4QVaoKkiRQ2jlwrxFIvM8XHanlYvyyDlVq4v0ByTSZEH6uETDXPDhVVnqzCW2nvmXZMVTx1PeF1IQlOQNjnKJ4upYPmKc4AwMlbcxYUnJ3xzWJl-4xTprcuH2hpKCJQ1LPByBskuACp3Yg4ptRP3GQRoRHvYMVrW_9oCfXdIBQJbk_uMcGSP2X0hFhT-lYQ&sa=X&ved=2ahUKEwjD5f-X292UAxXHe2wGHfdPJqsQ0pQJegQIBhAI#sv=CAwSlAMKBmxjbF9wdhJTCgNwdnESTENnMHZaeTh4TVdKNWVHY3pZMlp5SWlnS0lsUnZiM1JvSUdGdVpDQlRiV2xzWlNCQlpIWmhibU5sWkNCRVpXNTBhWE4wY25rUUFoZ0QS0AEKA2xxaRLIAUNqVlViMjkwYUNCaGJtUWdVMjFwYkdVZ1FXUjJZVzVqWldRZ1JHVnVkR2x6ZEhKNUlDMGdUWGxzWVhCdmNtVWdVbVYyYVdWM2N5SUNPQUZJdDl1R3hfZXFnSUFJV2o4UUFCQUJFQUlRQXhBRUdBQVlBaGdFR0FVaUszUnZiM1JvSUdGdVpDQnpiV2xzWlNCaFpIWmhibU5sWkNCa1pXNTBhWE4wY25rZ2JYbHNZWEJ2Y21XU0FRMWtaVzUwWVd4ZlkyeHBibWxqEhIKA3RicxILbHJmOiEzc0lBRT0SOgoBcRI1VG9vdGggYW5kIFNtaWxlIEFkdmFuY2VkIERlbnRpc3RyeSAtIE15bGFwb3JlIFJldmlld3MaEmxvY2FsLXBsYWNlLXZpZXdlchgKILzrlfIE" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 group cursor-pointer">
                <div className="w-[32px] h-[32px] rounded-full border border-[#5f6368] flex items-center justify-center group-hover:bg-[#3c4043] transition-colors">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#8ab4f8]">
                     <path d="M13.5 22L2.5 11C2.1 10.6 2.1 9.9 2.5 9.5L9.5 2.5C9.9 2.1 10.6 2.1 11 2.5L22 13.5C22.4 13.9 22.4 14.6 22 15L15 22C14.6 22.4 13.9 22.4 13.5 22ZM12 7V10H9C8.4 10 8 10.4 8 11V14H10V12H12V15L16 11L12 7Z"/>
                   </svg>
                </div>
                <span className="text-[#8ab4f8] text-[10px] font-medium">Directions</span>
              </a>
            </div>
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

                  <p className="text-black text-xs sm:text-sm leading-relaxed font-semibold line-clamp-4">
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
