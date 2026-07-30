import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Award } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_LIST.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_LIST.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = TESTIMONIALS_LIST[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 border-t border-b border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-xs text-amber-400 font-semibold border border-slate-700">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Loved by Business Owners &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0B63F6] to-[#18C37E]">
              Industry Leaders
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Don't take our word for it. Read how our tailored digital strategies generated real revenue growth for our clients.
          </p>
        </div>

        {/* Featured Testimonial Slider Card */}
        <div className="max-w-4xl mx-auto bg-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative">
          <Quote className="w-16 h-16 text-blue-500/10 absolute top-6 right-8 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            
            {/* 5-Star Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
              <span className="ml-2 text-xs font-bold text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                5.0 Verified Review
              </span>
            </div>

            {/* Testimonial Content Quote */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic font-sans">
              "{currentTestimonial.content}"
            </p>

            {/* Result Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#18C37E]" />
              <span>Result Achieved: {currentTestimonial.resultsAchieved}</span>
            </div>

            {/* Client Bio & Controls */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-4">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.clientName}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-[#00C2FF] shadow-md"
                />
                <div>
                  <h3 className="text-base font-bold text-white">{currentTestimonial.clientName}</h3>
                  <p className="text-xs text-slate-400">{currentTestimonial.role}</p>
                  <p className="text-xs text-[#00C2FF] font-semibold mt-0.5">{currentTestimonial.businessName}</p>
                </div>
              </div>

              {/* Slider Prev / Next Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="p-3 bg-slate-900 text-slate-300 hover:text-white rounded-2xl border border-slate-800 hover:border-slate-700 transition"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-slate-400 font-mono">
                  0{currentIndex + 1} / 0{TESTIMONIALS_LIST.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="p-3 bg-slate-900 text-slate-300 hover:text-white rounded-2xl border border-slate-800 hover:border-slate-700 transition"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Thumbnail Selector Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          {TESTIMONIALS_LIST.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`flex items-center gap-2 p-2 rounded-xl text-left border transition ${
                currentIndex === idx
                  ? 'bg-slate-800 border-[#00C2FF] text-white shadow-md'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <img
                src={item.avatar}
                alt={item.clientName}
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <div className="hidden sm:block text-[11px]">
                <p className="font-bold leading-tight">{item.clientName}</p>
                <p className="text-[9px] text-slate-500">{item.industryRole}</p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
