import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  MessageCircle,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  Sparkles,
  Zap,
  BarChart3,
  Globe2,
  ShieldCheck,
  Star,
  Activity,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

interface HeroSectionProps {
  onOpenConsultationModal: () => void;
  onOpenWhatsAppModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultationModal,
  onOpenWhatsAppModal
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'roas' | 'seo'>('overview');
  const [leadsCounter, setLeadsCounter] = useState(128);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeadsCounter((prev) => prev + Math.floor(Math.random() * 2) + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 bg-slate-950 overflow-hidden text-white flex items-center">
      {/* Blue & Emerald Gradient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#0B63F6]/20 via-[#00C2FF]/15 to-[#18C37E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Mesh Pattern */}
      <div className="absolute inset-0 bg-[linear-[#00C2FF]_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 backdrop-blur-md shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-[#18C37E] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#00C2FF]" />
              <span className="font-semibold text-slate-200">Award-Winning Digital Agency</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-medium">95% Client Retention</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Grow Your Business with Digital Marketing That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0B63F6] to-[#18C37E]">
                Delivers Results
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {COMPANY_INFO.name} helps businesses increase leads, sales, and brand visibility through websites, SEO, paid advertising, AI marketing, social media management, branding, and conversion-focused digital strategies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenConsultationModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0B63F6] via-[#00C2FF] to-[#18C37E] hover:opacity-95 transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>{COMPANY_INFO.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenWhatsAppModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 transition-all shadow-lg flex items-center justify-center gap-2.5 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 animate-bounce" />
                <span>{COMPANY_INFO.secondaryCta}</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00C2FF]" />
                <span>No Long Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18C37E]" />
                <span>Guaranteed ROI Blueprint</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>5.0 Rating (300+ Reviews)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Laptop Mockup + Live Interactive Dashboard Preview */}
          <div className="lg:col-span-5 relative">
            
            {/* Floating Top Left Metric Badge */}
            <div className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-xl shadow-2xl animate-float">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Average ROAS</p>
                <p className="text-lg font-bold text-white">4.2x Revenue Lift</p>
              </div>
            </div>

            {/* Floating Bottom Right Lead Badge */}
            <div className="absolute -bottom-6 -right-4 z-20 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/95 border border-slate-800/90 backdrop-blur-xl shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-[#00C2FF]">
                <Activity className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Live Campaign Leads</p>
                </div>
                <p className="text-lg font-bold text-emerald-400">{leadsCounter} Inquiries Today</p>
              </div>
            </div>

            {/* Laptop Framework Container */}
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-slate-700/60 to-slate-900/90 border border-slate-700/80 shadow-2xl shadow-blue-500/10">
              
              {/* Laptop Screen Header / Browser Bar */}
              <div className="bg-slate-900 px-4 py-2.5 rounded-t-xl border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="bg-slate-950 px-3 py-1 rounded-md border border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Globe2 className="w-3 h-3 text-[#00C2FF]" />
                  <span>brightwaymarketing.com/live-dashboard</span>
                </div>
                <div className="flex items-center gap-1 text-slate-500 text-xs font-mono">
                  <span>GA4 Live</span>
                </div>
              </div>

              {/* Laptop Inner Screen Body */}
              <div className="bg-slate-950 p-4 sm:p-5 rounded-b-xl border border-slate-900 space-y-4">
                
                {/* Dashboard Tabs Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-xs font-bold text-slate-200">Campaign Growth Monitor</h3>
                    <p className="text-[10px] text-slate-400">BrightWay Client Real-Time Metrics</p>
                  </div>
                  <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 text-[10px]">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`px-2.5 py-1 rounded-md transition ${activeTab === 'overview' ? 'bg-[#0B63F6] text-white font-bold' : 'text-slate-400'}`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveTab('roas')}
                      className={`px-2.5 py-1 rounded-md transition ${activeTab === 'roas' ? 'bg-[#0B63F6] text-white font-bold' : 'text-slate-400'}`}
                    >
                      ROAS
                    </button>
                    <button
                      onClick={() => setActiveTab('seo')}
                      className={`px-2.5 py-1 rounded-md transition ${activeTab === 'seo' ? 'bg-[#0B63F6] text-white font-bold' : 'text-slate-400'}`}
                    >
                      SEO Rank
                    </button>
                  </div>
                </div>

                {/* Dashboard Key Stat Widgets */}
                <div className="grid grid-cols-3 gap-2 text-left">
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <p className="text-[10px] text-slate-400">Monthly Traffic</p>
                    <p className="text-sm sm:text-base font-bold text-white">+342%</p>
                    <p className="text-[9px] text-emerald-400 flex items-center gap-0.5">
                      <TrendingUp className="w-2.5 h-2.5" /> 48.2k Visits
                    </p>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <p className="text-[10px] text-slate-400">Conversion Rate</p>
                    <p className="text-sm sm:text-base font-bold text-[#00C2FF]">6.8%</p>
                    <p className="text-[9px] text-emerald-400">Industry Avg 1.8%</p>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <p className="text-[10px] text-slate-400">Avg Cost/Lead</p>
                    <p className="text-sm sm:text-base font-bold text-emerald-400">$12.40</p>
                    <p className="text-[9px] text-emerald-400">-42% vs CPC</p>
                  </div>
                </div>

                {/* Interactive Simulated Chart Visualization */}
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex justify-between text-[11px] text-slate-300 font-medium">
                    <span>Leads Growth Trajectory (6 Months)</span>
                    <span className="text-[#18C37E] font-bold">+280% Surge</span>
                  </div>
                  {/* Simulated Visual Graph Bars */}
                  <div className="h-28 flex items-end justify-between gap-2 pt-4 px-2 border-b border-slate-800/80">
                    <div className="w-full flex flex-col items-center gap-1 group">
                      <div className="w-full bg-blue-900/40 hover:bg-blue-600 rounded-t h-8 transition-all relative">
                        <span className="opacity-0 group-hover:opacity-100 absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] bg-slate-800 px-1 rounded text-white">40</span>
                      </div>
                      <span className="text-[9px] text-slate-500">Jan</span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-1 group">
                      <div className="w-full bg-blue-900/60 hover:bg-blue-600 rounded-t h-12 transition-all relative">
                        <span className="opacity-0 group-hover:opacity-100 absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] bg-slate-800 px-1 rounded text-white">72</span>
                      </div>
                      <span className="text-[9px] text-slate-500">Feb</span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-1 group">
                      <div className="w-full bg-blue-800/80 hover:bg-blue-500 rounded-t h-16 transition-all relative">
                        <span className="opacity-0 group-hover:opacity-100 absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] bg-slate-800 px-1 rounded text-white">110</span>
                      </div>
                      <span className="text-[9px] text-slate-500">Mar</span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-1 group">
                      <div className="w-full bg-gradient-to-t from-[#0B63F6] to-[#00C2FF] rounded-t h-20 transition-all relative">
                        <span className="opacity-0 group-hover:opacity-100 absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] bg-slate-800 px-1 rounded text-white">180</span>
                      </div>
                      <span className="text-[9px] text-slate-400 font-bold">Apr</span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-1 group">
                      <div className="w-full bg-gradient-to-t from-[#00C2FF] to-[#18C37E] rounded-t h-24 transition-all relative">
                        <span className="opacity-0 group-hover:opacity-100 absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] bg-slate-800 px-1 rounded text-white">260</span>
                      </div>
                      <span className="text-[9px] text-emerald-400 font-bold">May</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Trigger Banner inside dashboard */}
                <button
                  onClick={onOpenConsultationModal}
                  className="w-full py-2.5 px-3 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-blue-500/30 rounded-xl text-xs text-slate-200 flex items-center justify-between hover:border-blue-400 transition"
                >
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Want this growth for your business?</span>
                  </span>
                  <span className="text-[#00C2FF] font-bold flex items-center gap-1 text-[11px]">
                    Get Free Strategy Blueprint <ArrowRight className="w-3 h-3" />
                  </span>
                </button>

              </div>
            </div>

          </div>

        </div>

        {/* Animated Statistics Counters Bar */}
        <div className="mt-20 pt-10 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 hover:border-blue-500/40 transition-all group">
            <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0B63F6] to-[#00C2FF]">
              {COMPANY_INFO.stats.projects}
            </p>
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-1">
              Projects Completed
            </p>
          </div>

          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 hover:border-blue-500/40 transition-all group">
            <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#18C37E]">
              {COMPANY_INFO.stats.clients}
            </p>
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-1">
              Happy Clients
            </p>
          </div>

          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 hover:border-blue-500/40 transition-all group">
            <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#18C37E] to-emerald-300">
              {COMPANY_INFO.stats.satisfaction}
            </p>
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-1">
              Client Satisfaction
            </p>
          </div>

          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 hover:border-blue-500/40 transition-all group">
            <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              {COMPANY_INFO.stats.industries}
            </p>
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-1">
              Industries Served
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
