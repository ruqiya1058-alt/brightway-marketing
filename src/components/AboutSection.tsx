import React, { useState } from 'react';
import {
  Target,
  Eye,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Building,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

interface AboutSectionProps {
  onOpenConsultationModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultationModal }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  return (
    <section id="about" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Asset & Experience Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Office Image */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img
                src="/src/assets/images/office_team_meeting_1785387959580.jpg"
                alt="BrightWay Digital Marketing Team Meeting"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              {/* Bottom Image Overlay text */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800">
                <p className="text-xs text-[#00C2FF] font-bold uppercase tracking-wider">Our Creative Headquarters</p>
                <p className="text-sm font-semibold text-white mt-1">A dedicated team of senior strategists, copywriters & developers.</p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -right-4 bg-gradient-to-tr from-[#0B63F6] via-[#00C2FF] to-[#18C37E] p-[2px] rounded-2xl shadow-2xl">
              <div className="bg-slate-900 px-5 py-4 rounded-[14px] text-center">
                <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">10+</p>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Years Excellence</p>
              </div>
            </div>

          </div>

          {/* Right Column: Copy, Tabs & Values */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-[#00C2FF] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Driven by Data, Powered by Creativity,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0B63F6] to-[#18C37E]">
                Focused on ROI
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {COMPANY_INFO.name} is a full-service digital marketing agency dedicated to transforming ambitious businesses into market leaders. We bridge the gap between stunning aesthetic design and high-converting marketing performance.
            </p>

            {/* Mission / Vision / Values Tabs */}
            <div className="pt-2">
              <div className="flex border-b border-slate-800 space-x-6 text-sm font-semibold">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`pb-3 transition relative flex items-center gap-2 ${
                    activeTab === 'mission' ? 'text-[#00C2FF] border-b-2 border-[#00C2FF]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Target className="w-4 h-4" /> Our Mission
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`pb-3 transition relative flex items-center gap-2 ${
                    activeTab === 'vision' ? 'text-[#00C2FF] border-b-2 border-[#00C2FF]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-4 h-4" /> Our Vision
                </button>
                <button
                  onClick={() => setActiveTab('values')}
                  className={`pb-3 transition relative flex items-center gap-2 ${
                    activeTab === 'values' ? 'text-[#00C2FF] border-b-2 border-[#00C2FF]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <HeartHandshake className="w-4 h-4" /> Core Values
                </button>
              </div>

              <div className="py-5">
                {activeTab === 'mission' && (
                  <div className="space-y-3 animate-fadeIn">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      To empower small businesses, startups, local enterprises, and corporate brands with world-class digital tools, high-converting ad funnels, and search dominance that drive measurable financial growth.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-medium pt-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#18C37E]" />
                        <span>Zero Vanity Metrics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#18C37E]" />
                        <span>100% Transparent Data</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div className="space-y-3 animate-fadeIn">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      To be recognized globally as the most trustworthy, result-oriented, and innovative digital marketing growth partner for businesses across every major commercial sector.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-medium pt-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00C2FF]" />
                        <span>AI Integration Pioneers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00C2FF]" />
                        <span>Global Footprint</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'values' && (
                  <div className="space-y-3 animate-fadeIn">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Integrity, relentless pursuit of ROAS, obsession with visual craftsmanship, and continuous client partnership. We treat your ad spend and business as if it were our own.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-medium pt-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Client-First Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Relentless Optimization</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultationModal}
                className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0B63F6] via-[#00C2FF] to-[#18C37E] hover:opacity-95 transition shadow-lg flex items-center gap-2 group"
              >
                <span>Let's Grow Your Business</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
