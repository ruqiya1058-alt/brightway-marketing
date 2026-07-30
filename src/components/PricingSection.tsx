import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/agencyData';

interface PricingSectionProps {
  onOpenConsultationModal: (planName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenConsultationModal }) => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-xs text-[#00C2FF] font-semibold border border-slate-800">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent ROI Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Fair, Transparent Pricing Designed for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0B63F6] to-[#18C37E]">
              Maximum Return
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            No surprise setup fees or locked contracts. Choose a plan aligned with your growth stage or request a custom package.
          </p>
        </div>

        {/* Monthly vs Yearly Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-xs font-semibold ${!isYearly ? 'text-white' : 'text-slate-400'}`}>Monthly Billing</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-8 bg-slate-800 rounded-full p-1 border border-slate-700 relative transition-colors"
            aria-label="Toggle Billing Frequency"
          >
            <div
              className={`w-6 h-6 rounded-full bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] transition-transform duration-300 ${
                isYearly ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-semibold ${isYearly ? 'text-white' : 'text-slate-400'}`}>Annual Billing</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-[10px] font-bold text-emerald-400">
              SAVE 20%
            </span>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => {
            const price = isYearly ? plan.yearlyPriceMonthly : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? 'bg-slate-900 border-2 border-[#00C2FF] shadow-2xl shadow-blue-500/20 scale-105 z-20'
                    : 'bg-slate-950 border border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#0B63F6] via-[#00C2FF] to-[#18C37E] text-[10px] font-extrabold tracking-wider text-white uppercase shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Name & Target */}
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-[11px] text-[#00C2FF] font-semibold mb-4">{plan.targetAudience}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{plan.shortDesc}</p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white">${price}</span>
                      <span className="text-xs text-slate-400 font-medium">/ month</span>
                    </div>
                    {isYearly && <p className="text-[10px] text-emerald-400 mt-1">Billed annually (${price * 12}/yr)</p>}
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Included Deliverables:</p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-slate-300 flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#18C37E] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    onClick={() => onOpenConsultationModal(plan.name)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-2 ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-[#0B63F6] via-[#00C2FF] to-[#18C37E] text-white shadow-lg shadow-blue-500/25'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-500 mt-2 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#18C37E]" /> No Hidden Contract Fees
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom enterprise callout */}
        <div className="mt-16 text-center text-xs text-slate-400">
          Need a multi-city enterprise strategy or specific custom requirements?{' '}
          <button
            onClick={() => onOpenConsultationModal("Custom Enterprise Project")}
            className="text-[#00C2FF] font-bold underline hover:text-white"
          >
            Request Custom Enterprise Proposal
          </button>
        </div>

      </div>
    </section>
  );
};
