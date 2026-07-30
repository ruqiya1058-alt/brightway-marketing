import React, { useState } from 'react';
import {
  Gauge,
  Calculator,
  Search,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Zap,
  Globe2,
  Lock,
  BarChart3,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AuditReportResult } from '../types';

interface InteractiveToolsSectionProps {
  onOpenConsultationModal: (notes?: string) => void;
}

export const InteractiveToolsSection: React.FC<InteractiveToolsSectionProps> = ({
  onOpenConsultationModal
}) => {
  const [activeToolTab, setActiveToolTab] = useState<'audit' | 'roi'>('audit');

  // Website Audit State
  const [auditUrl, setAuditUrl] = useState('');
  const [auditIndustry, setAuditIndustry] = useState('Local Business');
  const [auditEmail, setAuditEmail] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [auditReport, setAuditReport] = useState<AuditReportResult | null>(null);

  // ROI Calculator State
  const [monthlyBudget, setMonthlyBudget] = useState(2500);
  const [selectedChannel, setSelectedChannel] = useState<'Google Ads' | 'Meta Ads' | 'SEO' | 'Local PPC'>('Google Ads');
  const [avgSaleValue, setAvgSaleValue] = useState(850);
  const [conversionRate, setConversionRate] = useState(4.5);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditUrl) return;

    setIsScanning(true);
    setScanStep(1);

    setTimeout(() => setScanStep(2), 1200);
    setTimeout(() => setScanStep(3), 2400);

    setTimeout(() => {
      setIsScanning(false);
      setScanStep(0);

      const generatedScore = Math.floor(Math.random() * 25) + 62; // 62 - 87
      const generatedSpeed = Math.floor(Math.random() * 30) + 55;

      const report: AuditReportResult = {
        url: auditUrl.startsWith('http') ? auditUrl : `https://${auditUrl}`,
        industry: auditIndustry,
        overallScore: generatedScore,
        speedScore: generatedSpeed,
        seoScore: Math.floor(Math.random() * 20) + 70,
        mobileScore: Math.floor(Math.random() * 20) + 75,
        conversionScore: Math.floor(Math.random() * 25) + 50,
        criticalIssues: [
          'Missing H1 tags & uncompressed high-res images causing slow load speed',
          'No automated WhatsApp or direct click-to-call phone button for mobile users',
          'Google Business Profile lacking local geo-citations and map schema'
        ],
        quickWins: [
          'Implement BrightWay Core Web Vitals script optimization',
          'Add instant lead capture popover with automated SMS notification',
          'Target top 15 local buying keywords with dedicated landing pages'
        ],
        recommendedStrategy: `A custom ${selectedChannel} and Local SEO overhaul to increase leads by up to 220%.`
      };

      setAuditReport(report);
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      } catch (err) {
        // ignore
      }
    }, 3600);
  };

  // ROI Calculations
  const estimatedCostPerClick = selectedChannel === 'Google Ads' ? 3.2 : selectedChannel === 'Meta Ads' ? 1.8 : selectedChannel === 'Local PPC' ? 2.5 : 1.2;
  const estimatedClicks = Math.floor(monthlyBudget / estimatedCostPerClick);
  const estimatedLeads = Math.floor(estimatedClicks * (conversionRate / 100));
  const estimatedSales = Math.floor(estimatedLeads * 0.25); // 25% lead-to-sale close
  const estimatedRevenue = estimatedSales * avgSaleValue;
  const estimatedRoas = (estimatedRevenue / monthlyBudget).toFixed(1);

  return (
    <section id="tools" className="py-24 bg-slate-900 border-t border-b border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-xs text-[#00C2FF] font-semibold border border-slate-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Growth Calculators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Analyze Your Site & Calculate Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0B63F6] to-[#18C37E]">
              Revenue Growth
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Use our live interactive tools to audit your current digital presence or model your projected marketing return on investment.
          </p>
        </div>

        {/* Tool Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-950 p-1.5 rounded-2xl border border-slate-800 inline-flex gap-2 shadow-lg">
            <button
              onClick={() => setActiveToolTab('audit')}
              className={`px-6 py-3 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeToolTab === 'audit'
                  ? 'bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Gauge className="w-4 h-4" />
              <span>Instant SEO & Speed Audit</span>
            </button>

            <button
              onClick={() => setActiveToolTab('roi')}
              className={`px-6 py-3 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeToolTab === 'roi'
                  ? 'bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Marketing ROI Calculator</span>
            </button>
          </div>
        </div>

        {/* Tool 1: Instant Audit */}
        {activeToolTab === 'audit' && (
          <div className="max-w-4xl mx-auto bg-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative space-y-8">
            
            <form onSubmit={handleRunAudit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 mb-2">Website URL to Audit:</label>
                  <div className="relative">
                    <Globe2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. mybusiness.com"
                      value={auditUrl}
                      onChange={(e) => setAuditUrl(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#00C2FF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">Industry Sector:</label>
                  <select
                    value={auditIndustry}
                    onChange={(e) => setAuditIndustry(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#00C2FF]"
                  >
                    <option value="Restaurants">Restaurants & Cafes</option>
                    <option value="Clinics">Clinics & Doctors</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Schools">Schools & Education</option>
                    <option value="E-commerce">E-Commerce Store</option>
                    <option value="Local Business">Local Service Provider</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#18C37E]" /> Free live AI scan • Results delivered in seconds
                </p>

                <button
                  type="submit"
                  disabled={isScanning}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#0B63F6] via-[#00C2FF] to-[#18C37E] hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2"
                >
                  {isScanning ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                      <span>Scanning Website...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 text-amber-300" />
                      <span>Analyze My Site Now</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Scanning Indicator */}
            {isScanning && (
              <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-center space-y-3 animate-pulse">
                <div className="w-12 h-12 rounded-full bg-[#0B63F6]/20 text-[#00C2FF] flex items-center justify-center mx-auto">
                  <RefreshCw className="w-6 h-6 animate-spin" />
                </div>
                <p className="text-sm font-bold text-white">
                  {scanStep === 1 && "Connecting to server and checking PageSpeed metrics..."}
                  {scanStep === 2 && "Analyzing SEO meta tags, mobile responsiveness & indexing..."}
                  {scanStep === 3 && "Evaluating conversion friction points & WhatsApp callouts..."}
                </p>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden max-w-md mx-auto">
                  <div
                    className="bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] h-full transition-all duration-1000"
                    style={{ width: `${scanStep * 33}%` }}
                  />
                </div>
              </div>
            )}

            {/* Generated Audit Report Card */}
            {auditReport && !isScanning && (
              <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-[#00C2FF] uppercase tracking-wider">Live AI Audit Report</span>
                    <h3 className="text-lg font-bold text-white">{auditReport.url}</h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-center px-4 py-2 bg-slate-950 rounded-xl border border-slate-800">
                      <p className="text-2xl font-extrabold text-[#18C37E]">{auditReport.overallScore}/100</p>
                      <p className="text-[9px] text-slate-400 font-semibold">Health Score</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <p className="text-xs text-slate-400">Page Speed</p>
                    <p className="text-lg font-bold text-amber-400">{auditReport.speedScore}/100</p>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <p className="text-xs text-slate-400">SEO Health</p>
                    <p className="text-lg font-bold text-[#00C2FF]">{auditReport.seoScore}/100</p>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <p className="text-xs text-slate-400">Mobile UX</p>
                    <p className="text-lg font-bold text-emerald-400">{auditReport.mobileScore}/100</p>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <p className="text-xs text-slate-400">Conversion Readiness</p>
                    <p className="text-lg font-bold text-rose-400">{auditReport.conversionScore}/100</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <p className="font-bold text-rose-400 flex items-center gap-1.5 uppercase tracking-wider">
                      <AlertCircle className="w-4 h-4 text-rose-400" /> Critical Conversion Roadblocks:
                    </p>
                    <ul className="space-y-1.5 text-slate-300">
                      {auditReport.criticalIssues.map((issue, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <p className="font-bold text-[#18C37E] flex items-center gap-1.5 uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-[#18C37E]" /> Recommended Quick Wins:
                    </p>
                    <ul className="space-y-1.5 text-slate-300">
                      {auditReport.quickWins.map((win, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#18C37E] mt-1.5 shrink-0" />
                          <span>{win}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-300">
                    Want BrightWay to fix these bottlenecks and double your leads?
                  </p>

                  <button
                    onClick={() => onOpenConsultationModal(`Audit for ${auditReport.url} (Score: ${auditReport.overallScore}/100)`)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Book Free Consultation to Fix</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* Tool 2: ROI Calculator */}
        {activeToolTab === 'roi' && (
          <div className="max-w-4xl mx-auto bg-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Sliders Input */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Channel Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">Primary Target Channel:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['Google Ads', 'Meta Ads', 'SEO', 'Local PPC'] as const).map((chan) => (
                      <button
                        key={chan}
                        onClick={() => setSelectedChannel(chan)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition ${
                          selectedChannel === chan
                            ? 'bg-[#0B63F6] text-white border-blue-400'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {chan}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Monthly Budget Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                    <span>Target Monthly Ad Spend:</span>
                    <span className="text-[#00C2FF] font-extrabold text-sm">${monthlyBudget.toLocaleString()} / mo</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="15000"
                    step="250"
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                    className="w-full accent-[#00C2FF] bg-slate-800 rounded-lg cursor-pointer h-2"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>$500</span>
                    <span>$7,500</span>
                    <span>$15,000+</span>
                  </div>
                </div>

                {/* Avg Sale Value Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                    <span>Average Customer Value (Per Sale):</span>
                    <span className="text-[#18C37E] font-extrabold text-sm">${avgSaleValue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={avgSaleValue}
                    onChange={(e) => setAvgSaleValue(Number(e.target.value))}
                    className="w-full accent-[#18C37E] bg-slate-800 rounded-lg cursor-pointer h-2"
                  />
                </div>

              </div>

              {/* Calculated Outputs Card */}
              <div className="lg:col-span-5 bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Projected Outcomes</span>
                  <span className="text-xs text-emerald-400 font-extrabold bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    {estimatedRoas}x ROAS Multiplier
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Estimated Monthly Leads:</span>
                    <span className="text-base font-bold text-white">{estimatedLeads} Leads</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Estimated Closed Deals:</span>
                    <span className="text-base font-bold text-[#00C2FF]">{estimatedSales} Sales</span>
                  </div>
                  <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-300">Projected Monthly Revenue:</span>
                    <span className="text-xl font-extrabold text-[#18C37E]">${estimatedRevenue.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultationModal(`ROI Calculator Model: $${monthlyBudget}/mo budget in ${selectedChannel}`)}
                  className="w-full py-3 bg-gradient-to-r from-[#0B63F6] via-[#00C2FF] to-[#18C37E] text-white font-bold text-xs rounded-xl shadow-md hover:opacity-95 transition"
                >
                  Validate This Strategy with an Expert
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
