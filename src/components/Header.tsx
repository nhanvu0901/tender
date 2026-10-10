import React from 'react';
import { Compass, CheckCircle2, RotateCcw, ExternalLink } from 'lucide-react';

interface HeaderProps {
  currentStep: number;
  onSelectStep: (step: number) => void;
  onReset: () => void;
  onOpenSources: () => void;
  hasSelectedTender: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentStep,
  onSelectStep,
  onReset,
  onOpenSources,
  hasSelectedTender
}) => {
  const steps = [
    { number: 1, label: 'Company Profile', sub: 'Procurement Readiness' },
    { number: 2, label: 'Matched Feed', sub: '10 NS Tenders' },
    { number: 3, label: 'RFP Analysis', sub: 'Requirements & Go/No-Go' },
    { number: 4, label: 'Compliance Matrix', sub: 'Evidence & Gap Audit' },
    { number: 5, label: 'Proposal Draft', sub: 'AI Response Generation' }
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      {/* Top Bar: Brand & Utilities */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-sky-500/20">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-slate-900">BidNova</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200 uppercase tracking-wider">
                Nova Scotia Edition
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              AI Government Tender Navigator &bull; Awardly for Nova Scotia SMEs
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSources}
            className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition flex items-center gap-1.5 border border-slate-200 cursor-pointer"
            title="View verified Nova Scotia procurement portals"
          >
            <span className="hidden sm:inline">Verified NS Sources</span>
            <span className="sm:hidden">Sources</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </button>

          <button
            onClick={onReset}
            className="px-2.5 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition flex items-center gap-1 cursor-pointer"
            title="Reset demo to start"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Reset Demo</span>
          </button>
        </div>
      </div>

      {/* Interactive Linear Stepper */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 overflow-x-auto scrollbar-none">
        <nav aria-label="Progress Stepper" className="flex items-center min-w-[700px] justify-between">
          {steps.map((step, idx) => {
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;
            const isSelectable = step.number <= 2 || hasSelectedTender;

            return (
              <React.Fragment key={step.number}>
                <button
                  onClick={() => isSelectable && onSelectStep(step.number)}
                  disabled={!isSelectable}
                  className={`flex items-center gap-2.5 text-left py-1 px-2.5 rounded-xl transition cursor-pointer group ${
                    isActive
                      ? 'bg-sky-50 text-sky-900 font-semibold'
                      : isCompleted
                      ? 'text-slate-700 hover:bg-slate-50'
                      : 'text-slate-400 opacity-60 cursor-not-allowed'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition ${
                      isActive
                        ? 'bg-sky-600 text-white shadow-xs'
                        : isCompleted
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                        : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : step.number}
                  </div>
                  <div>
                    <div className="text-xs font-semibold leading-tight flex items-center gap-1">
                      {step.label}
                    </div>
                    <div className="text-[10px] text-slate-500 font-normal hidden lg:block">
                      {step.sub}
                    </div>
                  </div>
                </button>

                {idx < steps.length - 1 && (
                  <div className="flex-1 mx-2 h-0.5 max-w-[40px] bg-slate-200">
                    <div
                      className={`h-full bg-emerald-500 transition-all duration-300 ${
                        currentStep > step.number ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
