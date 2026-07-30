import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Phone, ArrowRight } from 'lucide-react';
import { FAQ_LIST, COMPANY_INFO } from '../data/agencyData';

interface FAQSectionProps {
  onOpenConsultationModal: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultationModal }) => {
  const [openId, setOpenId] = useState<string>(FAQ_LIST[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Website Design', 'SEO', 'Google Ads', 'Pricing', 'Consultation'];

  const filteredFaqs = FAQ_LIST.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 bg-slate-900 border-t border-b border-slate-800 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-xs text-[#00C2FF] font-semibold border border-slate-700">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Got Questions? We Have{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0B63F6] to-[#18C37E]">
              Clear Answers
            </span>
          </h2>
          <p className="text-slate-400 text-sm">
            Everything you need to know about our digital marketing agency, campaign processes, timeline, and ROI guarantees.
          </p>
        </div>

        {/* Filter Tabs & Search */}
        <div className="space-y-4 mb-10">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search FAQs (e.g. timeline, pricing, SEO, Google Ads)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#00C2FF]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${
                  activeCategory === cat
                    ? 'bg-[#0B63F6] text-white border-blue-400'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-slate-950 rounded-2xl border border-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full p-5 text-left font-bold text-sm text-white flex items-center justify-between gap-4 hover:text-[#00C2FF] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00C2FF]" />
                    <span>{faq.question}</span>
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#00C2FF] shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-900/80 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Assistance Box */}
        <div className="mt-12 bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-3">
          <p className="text-xs font-bold text-white">Have a specific question not listed here?</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={COMPANY_INFO.phoneTel}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" /> Call: {COMPANY_INFO.phoneFormatted}
            </a>
            <button
              onClick={onOpenConsultationModal}
              className="px-4 py-2 bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <span>Ask Our Strategist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
