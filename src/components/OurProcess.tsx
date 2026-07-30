import React, { useState } from 'react';
import {
  MessageSquare,
  BarChart,
  Compass,
  Code,
  Rocket,
  Sliders,
  TrendingUp,
  CheckCircle,
  Clock,
  ChevronRight
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';

interface OurProcessProps {
  onOpenConsultationModal: () => void;
}

export const OurProcess: React.FC<OurProcessProps> = ({ onOpenConsultationModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (stepNum: number) => {
    switch (stepNum) {
      case 1: return <MessageSquare className="w-5 h-5 text-white" />;
      case 2: return <BarChart className="w-5 h-5 text-white" />;
      case 3: return <Compass className="w-5 h-5 text-white" />;
      case 4: return <Code className="w-5 h-5 text-white" />;
      case 5: return <Rocket className="w-5 h-5 text-white" />;
      case 6: return <Sliders className="w-5 h-5 text-white" />;
      default: return <TrendingUp className="w-5 h-5 text-white" />;
    }
  };

  const currentStep = PROCESS_STEPS[activeStep];

  return (
    <section id="process" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-xs text-[#00C2FF] font-semibold border border-slate-800">
            <Rocket className="w-3.5 h-3.5" />
            <span>Structured Growth Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Our 7-Step Proven Growth{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0B63F6] to-[#18C37E]">
              Process
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From initial strategy discovery to continuous revenue scaling, our transparent roadmap guarantees flawless execution.
          </p>
        </div>

        {/* Desktop Horizontal Interactive Timeline Steps */}
        <div className="hidden lg:grid grid-cols-7 gap-2 mb-12 relative">
          
          {/* Connector Line behind steps */}
          <div className="absolute top-6 left-10 right-10 h-0.5 bg-slate-800 -z-0" />

          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(idx)}
                className="flex flex-col items-center text-center group relative z-10"
              >
                {/* Step Circle */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${
                    isActive
                      ? 'bg-gradient-to-tr from-[#0B63F6] via-[#00C2FF] to-[#18C37E] scale-110 shadow-blue-500/30'
                      : isCompleted
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {getStepIcon(step.stepNumber)}
                </div>

                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mt-3">
                  Step 0{step.stepNumber}
                </span>
                <span
                  className={`text-xs font-semibold mt-1 transition-colors ${
                    isActive ? 'text-[#00C2FF] font-bold' : 'text-slate-300 group-hover:text-white'
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile Step Selector */}
        <div className="flex lg:hidden overflow-x-auto gap-3 pb-4 mb-8 scrollbar-none">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStep(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap border shrink-0 transition ${
                activeStep === idx
                  ? 'bg-[#0B63F6] text-white border-blue-400'
                  : 'bg-slate-900 text-slate-400 border-slate-800'
              }`}
            >
              Step {step.stepNumber}: {step.title}
            </button>
          ))}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#0B63F6]/20 border border-[#0B63F6] text-[#00C2FF] font-bold text-xs">
                  Step 0{currentStep.stepNumber} of 07
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" /> Timeframe: {currentStep.timeframe}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentStep.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {currentStep.shortDesc}
              </p>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800/80">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  In-Depth Execution Focus:
                </p>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {currentStep.details}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold text-[#18C37E] uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <CheckCircle className="w-4 h-4 text-[#18C37E]" /> Key Deliverable
                </p>
                <p className="text-sm font-bold text-white bg-slate-900 p-3 rounded-xl border border-slate-800">
                  {currentStep.deliverable}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 6))}
                  className="px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
                >
                  Previous
                </button>

                <button
                  onClick={() => setActiveStep((prev) => (prev < 6 ? prev + 1 : 0))}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#0B63F6] hover:bg-blue-600 rounded-lg flex items-center gap-1"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
