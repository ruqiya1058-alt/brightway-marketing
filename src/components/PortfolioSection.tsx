import React, { useState } from 'react';
import {
  FolderCheck,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Award,
  BarChart2,
  CheckCircle2,
  X
} from 'lucide-react';
import { PORTFOLIO_CASE_STUDIES } from '../data/agencyData';
import { PortfolioCaseStudy } from '../types';

interface PortfolioSectionProps {
  onOpenConsultationModal: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenConsultationModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<PortfolioCaseStudy | null>(null);

  const categories = ['All', 'Website Design', 'SEO Campaigns', 'Facebook Ads', 'Landing Pages'];

  const filteredProjects = PORTFOLIO_CASE_STUDIES.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="portfolio" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-xs text-[#18C37E] font-semibold border border-slate-800">
            <FolderCheck className="w-3.5 h-3.5" />
            <span>Proven Client Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Case Studies & Real Client{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0B63F6] to-[#18C37E]">
              Growth Outcomes
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore how we engineered massive revenue growth, lead surges, and ranking dominance for our partner clients.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] text-white border-transparent shadow-lg'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image & Overlay Tag */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-[#00C2FF] border border-slate-700">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-slate-300 border border-slate-700">
                      {project.industry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{project.clientName}</p>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#00C2FF] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Key Metrics Badges */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800">
                    {project.results.map((res, rIdx) => (
                      <div key={rIdx} className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80">
                        <p className="text-[10px] text-slate-400 leading-tight">{res.label}</p>
                        <p className="text-sm font-extrabold text-[#18C37E] mt-0.5">{res.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Before & After comparison snippet if available */}
                  {project.beforeAfterMetric && (
                    <div className="bg-slate-950/90 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[10px] text-slate-500 block">{project.beforeAfterMetric.beforeLabel}</span>
                        <span className="font-bold text-slate-400 line-through">{project.beforeAfterMetric.beforeVal}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-emerald-400 block font-semibold">{project.beforeAfterMetric.afterLabel}</span>
                        <span className="font-extrabold text-emerald-400">{project.beforeAfterMetric.afterVal}</span>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedCaseStudy(project)}
                  className="w-full py-3 bg-slate-950 hover:bg-[#0B63F6] border border-slate-800 hover:border-blue-400 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 group/btn"
                >
                  <span>View Case Study Deep Dive</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Detailed Case Study Modal */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative space-y-6 shadow-2xl animate-scaleUp">
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-xl"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-[#0B63F6]/20 border border-[#0B63F6] text-[#00C2FF] font-bold text-xs">
                  {selectedCaseStudy.category} • {selectedCaseStudy.industry}
                </span>
                <h3 className="text-2xl font-extrabold text-white">{selectedCaseStudy.title}</h3>
                <p className="text-xs text-slate-400 font-semibold">Client: {selectedCaseStudy.clientName}</p>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <p className="font-bold text-[#00C2FF] uppercase tracking-wider mb-1">The Challenge:</p>
                  <p>{selectedCaseStudy.challenge}</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <p className="font-bold text-[#18C37E] uppercase tracking-wider mb-1">BrightWay Solution:</p>
                  <p>{selectedCaseStudy.solution}</p>
                </div>

                <div className="space-y-2">
                  <p className="font-bold text-white uppercase tracking-wider">Quantifiable Growth Achieved:</p>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedCaseStudy.results.map((res, idx) => (
                      <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                        <p className="text-lg font-extrabold text-[#18C37E]">{res.value}</p>
                        <p className="text-[10px] text-slate-400">{res.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    onOpenConsultationModal();
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] text-white rounded-xl text-xs font-bold"
                >
                  Get Similar Growth for My Business
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
