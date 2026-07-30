import React from 'react';
import {
  Award,
  Palette,
  DollarSign,
  MessageSquare,
  Cpu,
  TrendingUp,
  Zap,
  Sliders,
  Clock,
  UserCheck,
  BarChart3,
  Handshake,
  CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_US_CARDS } from '../data/agencyData';

interface WhyChooseUsProps {
  onOpenConsultationModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenConsultationModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-[#00C2FF]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#00C2FF]" />;
      case 'DollarSign': return <DollarSign className="w-5 h-5 text-[#18C37E]" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-[#00C2FF]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#18C37E]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#18C37E]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-[#00C2FF]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-emerald-400" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-blue-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#00C2FF]" />;
      default: return <Handshake className="w-5 h-5 text-[#18C37E]" />;
    }
  };

  return (
    <section className="py-24 bg-slate-900 border-t border-b border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-xs text-[#18C37E] font-semibold border border-slate-700">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>The BrightWay Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Why Hundreds of Clients Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0B63F6] to-[#18C37E]">
              BrightWay Marketing
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            We combine high-level agency craft with rapid execution, complete financial transparency, and unyielding ROI performance.
          </p>
        </div>

        {/* Feature Cards Grid (12 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-950/90 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(card.icon)}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00C2FF] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-900 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#18C37E]" />
                <span>Verified Client Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-950/80 via-slate-900 to-slate-950 p-8 rounded-3xl border border-blue-500/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-xl font-extrabold text-white">Ready to experience the BrightWay difference?</h3>
            <p className="text-xs text-slate-300 mt-1">Book your free 30-minute growth call and receive a custom marketing roadmap.</p>
          </div>
          <button
            onClick={onOpenConsultationModal}
            className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] hover:opacity-95 transition shadow-lg shrink-0"
          >
            Schedule Free Growth Call
          </button>
        </div>

      </div>
    </section>
  );
};
