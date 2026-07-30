import React, { useState } from 'react';
import {
  Utensils,
  GraduationCap,
  Stethoscope,
  Building2,
  ShoppingBag,
  Tractor,
  Sparkles,
  Briefcase,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  TrendingUp
} from 'lucide-react';
import { INDUSTRIES_LIST } from '../data/agencyData';

interface TrustedIndustriesProps {
  onOpenConsultationModal: () => void;
}

export const TrustedIndustries: React.FC<TrustedIndustriesProps> = ({ onOpenConsultationModal }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES_LIST[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils': return <Utensils className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6" />;
      case 'Tractor': return <Tractor className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      default: return <Briefcase className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-slate-900 border-t border-b border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-xs text-[#00C2FF] font-semibold border border-slate-700">
            <Building2 className="w-3.5 h-3.5" />
            <span>Multi-Industry Marketing Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Tailored Digital Strategies for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0B63F6] to-[#18C37E]">
              Your Specific Industry
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            We don't do generic marketing. We build custom campaigns designed around the unique customer buying journeys of your exact industry.
          </p>
        </div>

        {/* Industry Card Grid Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {INDUSTRIES_LIST.map((ind) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-2.5 text-center transition-all duration-200 border ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#0B63F6]/20 to-slate-800 border-[#00C2FF] text-white shadow-lg shadow-blue-500/10 scale-105'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-[#0B63F6] text-white' : 'bg-slate-900 text-slate-300'}`}>
                  {getIcon(ind.icon)}
                </div>
                <span className="text-xs font-semibold leading-tight line-clamp-1">{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card for Selected Industry */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800/90 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Overview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-tr from-[#0B63F6] to-[#00C2FF] text-white rounded-2xl shadow-md">
                  {getIcon(selectedIndustry.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedIndustry.name}</h3>
                  <p className="text-xs text-[#18C37E] font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> Typical Outcome: {selectedIndustry.typicalRoi}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedIndustry.description}
              </p>

              {/* Challenges */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> Common Industry Roadblocks We Fix:
                </p>
                <ul className="space-y-1.5">
                  {selectedIndustry.commonChallenges.map((challenge, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: BrightWay Customized Solution */}
            <div className="lg:col-span-6 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00C2FF]">
                <CheckCircle className="w-4 h-4 text-[#18C37E]" />
                <span>The BrightWay Customized Strategy</span>
              </div>

              <p className="text-sm text-slate-200 font-medium leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                "{selectedIndustry.brightWaySolution}"
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400">
                  Ready for industry-specific digital growth?
                </p>
                <button
                  onClick={onOpenConsultationModal}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] hover:opacity-90 transition flex items-center gap-2 shadow-md"
                >
                  <span>Request Strategy Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
