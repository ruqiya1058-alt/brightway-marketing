import React from 'react';
import { Phone, MessageCircle, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

interface FinalCTAProps {
  onOpenConsultationModal: () => void;
  onOpenWhatsAppModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenConsultationModal,
  onOpenWhatsAppModal
}) => {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-slate-950 to-emerald-900/20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#0B63F6]/20 to-[#18C37E]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-[#00C2FF] font-semibold">
          <Sparkles className="w-4 h-4" />
          <span>Start Scaling Your Business Today</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Ready to Grow Your Business with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0B63F6] to-[#18C37E]">
            Proven Strategies?
          </span>
        </h2>

        {/* Text */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Let's build your brand, increase your online sales, and dominate search results with digital marketing strategies that deliver measurable, profitable results.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          {/* Call Now */}
          <a
            href={COMPANY_INFO.phoneTel}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition shadow-lg flex items-center justify-center gap-2.5 active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#18C37E]" />
            <span>Call Now: {COMPANY_INFO.phoneFormatted}</span>
          </a>

          {/* Chat on WhatsApp */}
          <button
            onClick={onOpenWhatsAppModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-emerald-400 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 transition shadow-lg flex items-center justify-center gap-2.5 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </button>

          {/* Get Free Consultation */}
          <button
            onClick={onOpenConsultationModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0B63F6] via-[#00C2FF] to-[#18C37E] hover:opacity-95 transition shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 group active:scale-95"
          >
            <span>Get Free Consultation</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        {/* Guarantees */}
        <div className="pt-8 border-t border-slate-900 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#18C37E]" /> 30-Min Free Discovery Call</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#00C2FF]" /> Custom Digital Blueprint</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Guaranteed Campaign Setup SLA</span>
        </div>

      </div>
    </section>
  );
};
