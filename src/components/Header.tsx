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
    { number: 1, label: 'Profile', sub: 'Company details' },
    { number: 2, label: 'Opportunities', sub: '10 tenders found' },
    { number: 3, label: 'Tender analysis', sub: 'Should we bid?' },
    { number: 4, label: 'Compliance', sub: 'Requirements check' },
    { number: 5, label: 'Proposal draft', sub: 'Review and export' }
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      {/* Top Bar: Brand & Utilities */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-sky-600 flex items-center justify-center text-white">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-slate-900">BidNova</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                Nova Scotia
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Government tender finder and proposal writer for Nova Scotia businesses
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSources}
            className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition flex items-center gap-1.5 border border-slate-200 cursor-pointer"
            title="View verified Nova Scotia procurement portals"
          >
            <span>Verified sources</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </button>

          <button
            onClick={onReset}
            className="px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition flex items-center gap-1 cursor-pointer"
            title="Reset demo to start"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Reset demo</span>
          </button>
        </div>
      </div>

      {/* Interactive Linear Stepper */}
      <div className="max-w-7xl mx-auto px-4 py-2 overflow-x-auto scrollbar-none">
        <nav aria-label="Progress Stepper" className="flex items-center min-w-[650px] justify-between">
          {steps.map((step, idx) => {
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;
            const isSelectable = step.number <= 2 || hasSelectedTender;

            return (
              <React.Fragment key={step.number}>
                <button
                  onClick={() => isSelectable && onSelectStep(step.number)}
                  disabled={!isSelectable}
                  className={`flex items-center gap-2.5 text-left py-1.5 px-3 rounded-xl transition group ${
                    isActive
                      ? 'bg-sky-50 text-sky-900 font-semibold cursor-pointer'
                      : isCompleted
                      ? 'text-slate-700 hover:bg-slate-50 cursor-pointer'
                      : isSelectable
                      ? 'text-slate-600 hover:bg-slate-50 cursor-pointer'
                      : 'text-slate-400 opacity-60 cursor-not-allowed'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold transition ${
                      isActive
                        ? 'bg-sky-600 text-white'
                        : isCompleted
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : step.number}
                  </div>
                  <div>
                    <div className="text-sm font-semibold leading-tight">
                      {step.label}
                    </div>
                    <div className="text-xs text-slate-500 font-normal hidden lg:block">
                      {step.sub}
                    </div>
                  </div>
                </button>

                {idx < steps.length - 1 && (
                  <div className="flex-1 mx-2 h-0.5 max-w-[32px] bg-slate-200">
                    <div
                      className={`h-full bg-emerald-600 transition-all duration-300 ${
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
