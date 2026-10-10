import React, { useState } from 'react';
import { TenderOpportunity } from '../types/procurement';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  DollarSign,
  MapPin,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Clock,
  ShieldCheck,
  RefreshCw,
  FileText
} from 'lucide-react';

interface Step3AnalysisProps {
  tender: TenderOpportunity;
  onBack: () => void;
  onNext: () => void;
}

export const Step3Analysis: React.FC<Step3AnalysisProps> = ({
  tender,
  onBack,
  onNext
}) => {
  const [activeTab, setActiveTab] = useState<'requirements' | 'bidDecision'>('requirements');
  const [isSimulatingAnalysis, setIsSimulatingAnalysis] = useState(false);

  const handleSimulateAnalysis = () => {
    setIsSimulatingAnalysis(true);
    setTimeout(() => {
      setIsSimulatingAnalysis(false);
    }, 1200);
  };

  const mandatoryReqs = tender.requirements.filter(r => r.type === 'Mandatory');
  const ratedReqs = tender.requirements.filter(r => r.type === 'Rated');

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Navigation & Context Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 py-1.5 px-3 rounded-lg hover:bg-slate-200/60 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Matched Feed</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSimulateAnalysis}
            disabled={isSimulatingAnalysis}
            className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer shadow-xs disabled:opacity-60"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-sky-600 ${isSimulatingAnalysis ? 'animate-spin' : ''}`} />
            <span>{isSimulatingAnalysis ? 'Re-analyzing RFP Clauses...' : 'Re-Run AI Extraction'}</span>
          </button>

          <button
            onClick={onNext}
            className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs"
          >
            <span>Proceed to Compliance Matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Tender Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
              {tender.tenderNumber}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold border border-slate-200">
              {tender.source}
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-50 text-slate-500">
              {tender.buyerCategory}
            </span>
          </div>

          <a
            href={tender.sourcePortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-sky-600 hover:text-sky-800 flex items-center gap-1 font-semibold hover:underline"
          >
            <span>Official Portal Reference</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {tender.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
            Buyer: {tender.buyer}
          </p>
        </div>

        {/* Metadata Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 block text-[11px] flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-emerald-600" /> Estimated Value
            </span>
            <span className="font-bold text-slate-900 mt-0.5 block">{tender.estimatedValue}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 block text-[11px] flex items-center gap-1">
              <MapPin className="w-3 h-3 text-sky-600" /> Region & Site
            </span>
            <span className="font-bold text-slate-900 mt-0.5 block truncate">{tender.region}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 block text-[11px] flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-600" /> Closing Deadline
            </span>
            <span className="font-bold text-slate-900 mt-0.5 block">{tender.closingDate}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 block text-[11px] flex items-center gap-1">
              <Scale className="w-3 h-3 text-indigo-600" /> Procurement Type
            </span>
            <span className="font-bold text-slate-900 mt-0.5 block truncate">{tender.procurementMethod}</span>
          </div>
        </div>

        {/* Summary */}
        <div className="pt-2 text-xs text-slate-700 leading-relaxed border-t border-slate-100">
          <p><strong>Executive Scope:</strong> {tender.summary}</p>
        </div>
      </div>

      {/* Simulated AI Scan Banner */}
      {isSimulatingAnalysis && (
        <div className="bg-sky-600 text-white rounded-2xl p-4 flex items-center gap-3 animate-pulse shadow-sm">
          <RefreshCw className="w-5 h-5 animate-spin" />
          <div className="text-xs">
            <p className="font-bold">Analyzing RFP terms under Nova Scotia Public Procurement Act & HRM standard clauses...</p>
            <p className="text-sky-200">Synthesizing mandatory pass/fail requirements and rated scoring weights...</p>
          </div>
        </div>
      )}

      {/* RFP Key Timeline */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-sky-600" />
          Procurement Critical Milestones & Schedule
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 block text-[11px]">Notice Posted</span>
            <span className="font-bold text-slate-800">{tender.keyDates.postedDate}</span>
          </div>
          <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200">
            <span className="text-amber-700 block text-[11px] font-semibold">Inquiries / Question Cut-Off</span>
            <span className="font-bold text-amber-950">{tender.keyDates.questionDeadline}</span>
          </div>
          <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200">
            <span className="text-rose-700 block text-[11px] font-semibold">Tender Closing</span>
            <span className="font-bold text-rose-950">{tender.keyDates.closingDate}</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <span className="text-emerald-700 block text-[11px] font-semibold">Anticipated Award</span>
            <span className="font-bold text-emerald-950">{tender.keyDates.anticipatedAward}</span>
          </div>
        </div>
      </div>

      {/* Tabs: Requirements Breakdown vs AI Bid/No-Bid Decision */}
      <div className="flex gap-2 border-b border-slate-200 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('requirements')}
          className={`pb-3 px-4 transition border-b-2 flex items-center gap-2 cursor-pointer ${
            activeTab === 'requirements'
              ? 'border-sky-600 text-sky-900 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Extracted Requirements ({mandatoryReqs.length} Mandatory &bull; {ratedReqs.length} Rated)</span>
        </button>

        <button
          onClick={() => setActiveTab('bidDecision')}
          className={`pb-3 px-4 transition border-b-2 flex items-center gap-2 cursor-pointer ${
            activeTab === 'bidDecision'
              ? 'border-sky-600 text-sky-900 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Sparkles className="w-4 h-4 text-sky-600" />
          <span>AI Bid/No-Bid Decision Rationale</span>
        </button>
      </div>

      {/* Tab 1: Requirements Breakdown */}
      {activeTab === 'requirements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mandatory Requirements Column */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-rose-950 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-rose-600" />
                <span>Mandatory Criteria (Pass/Fail)</span>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                Non-Compliance = Disqualification
              </span>
            </div>

            <div className="space-y-3">
              {mandatoryReqs.map(req => (
                <div
                  key={req.id}
                  className="p-3.5 rounded-xl border border-rose-100 bg-rose-50/30 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded text-[11px]">
                      {req.code}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Strict Pass/Fail</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs pt-1">{req.title}</h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed">{req.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rated Evaluation Criteria Column */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sky-950 font-bold text-sm">
                <Scale className="w-4 h-4 text-sky-600" />
                <span>Rated Evaluation Criteria (Scored)</span>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                Technical Score (70-80%)
              </span>
            </div>

            <div className="space-y-3">
              {ratedReqs.map(req => (
                <div
                  key={req.id}
                  className="p-3.5 rounded-xl border border-sky-100 bg-sky-50/30 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded text-[11px]">
                      {req.code}
                    </span>
                    {req.weightOrPoints && (
                      <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                        {req.weightOrPoints}
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs pt-1">{req.title}</h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed">{req.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: AI Bid/No-Bid Decision */}
      {activeTab === 'bidDecision' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          {/* Decision Verdict Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 text-white rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-sky-400 font-bold">
                BidNova Automated Pursue Assessment
              </span>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-black">{tender.bidRationale.verdict}</h3>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
                  {tender.bidRationale.winProbability}% Estimated Win Probability
                </span>
              </div>
              <p className="text-xs text-slate-300 max-w-xl">{tender.bidRationale.strategicValue}</p>
            </div>

            <div className="text-right shrink-0">
              <span className="text-3xl font-black text-sky-400">{tender.relevanceScore}/100</span>
              <span className="block text-[11px] text-slate-400">Company Match Index</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Strengths */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Competitive Advantages & Strengths</span>
              </h4>
              <div className="space-y-2">
                {tender.bidRationale.strengths.map((str, i) => (
                  <div key={i} className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-slate-700 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-0.5">&check;</span>
                    <span>{str}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Risks & Mitigation */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Identified Risks & Mitigation Strategy</span>
              </h4>
              <div className="space-y-2">
                {tender.bidRationale.risksAndMitigation.map((risk, i) => (
                  <div key={i} className="p-3 rounded-xl bg-amber-50/50 border border-amber-100 text-slate-700 flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">&bull;</span>
                    <span>{risk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Action Footer */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-slate-900 text-sm">Next Step: Audit Compliance Matrix</h4>
          <p className="text-xs text-slate-500">
            Cross-examine Atlantic Coastal Civil & Marine Ltd.'s profile data against every mandatory and rated clause.
          </p>
        </div>

        <button
          onClick={onNext}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md shadow-sky-600/20 transition flex items-center justify-center gap-2 cursor-pointer shrink-0"
        >
          <span>Open Compliance Matrix (Step 4)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
