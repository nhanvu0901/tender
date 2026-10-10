import React, { useState, useEffect } from 'react';
import { TenderOpportunity, CompanyProfile } from '../types/procurement';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  DollarSign,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Clock,
  ShieldCheck,
  RefreshCw,
  FileText
} from 'lucide-react';

export interface Step3AnalysisProps {
  tender: TenderOpportunity;
  company?: CompanyProfile;
  onBack?: () => void;
  onNext?: () => void;
}

export const Step3Analysis: React.FC<Step3AnalysisProps> = ({
  tender,
  company,
  onBack = () => {},
  onNext = () => {}
}) => {
  const [activeTab, setActiveTab] = useState<'requirements' | 'bidDecision'>('requirements');
  const [isSimulatingAnalysis, setIsSimulatingAnalysis] = useState(true);

  useEffect(() => {
    setIsSimulatingAnalysis(true);
    const timer = setTimeout(() => {
      setIsSimulatingAnalysis(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [tender.id]);

  const handleSimulateAnalysis = () => {
    setIsSimulatingAnalysis(true);
    setTimeout(() => {
      setIsSimulatingAnalysis(false);
    }, 800);
  };

  const mandatoryReqs = tender.requirements.filter(r => r.type === 'Mandatory');
  const ratedReqs = tender.requirements.filter(r => r.type === 'Rated');

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Navigation & Context Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1.5 py-1.5 px-3 rounded-lg hover:bg-slate-100 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to opportunities</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSimulateAnalysis}
            disabled={isSimulatingAnalysis}
            className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition cursor-pointer disabled:opacity-60"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-sky-600 ${isSimulatingAnalysis ? 'animate-spin' : ''}`} />
            <span>{isSimulatingAnalysis ? 'Analyzing…' : 'Re-analyze tender'}</span>
          </button>

          <button
            onClick={onNext}
            className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
          >
            <span>Proceed to compliance</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Tender Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono font-medium text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
              {tender.tenderNumber}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium border border-slate-200">
              {tender.source}
            </span>
            <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200">
              {tender.buyerCategory}
            </span>
          </div>

          <a
            href={tender.sourcePortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-sky-600 hover:text-sky-800 flex items-center gap-1 font-medium hover:underline"
          >
            <span>Original tender notice</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {tender.title}
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Review key dates, mandatory clauses, and whether this tender is worth bidding on.
          </p>
          <p className="text-sm text-slate-700 font-medium mt-1">
            Buyer: {tender.buyer}
          </p>
        </div>

        {/* Metadata Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-sm">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-500 block text-xs flex items-center gap-1 mb-0.5">
              <DollarSign className="w-3.5 h-3.5 text-emerald-600" /> Estimated value
            </span>
            <span className="font-semibold text-slate-900 block">{tender.estimatedValue}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-500 block text-xs flex items-center gap-1 mb-0.5">
              <MapPin className="w-3.5 h-3.5 text-sky-600" /> Region &amp; site
            </span>
            <span className="font-medium text-slate-900 block truncate">{tender.region}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-500 block text-xs flex items-center gap-1 mb-0.5">
              <Clock className="w-3.5 h-3.5 text-amber-600" /> Closing deadline
            </span>
            <span className="font-semibold text-slate-900 block">{tender.closingDate}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-500 block text-xs flex items-center gap-1 mb-0.5">
              <Scale className="w-3.5 h-3.5 text-indigo-600" /> Procurement method
            </span>
            <span className="font-medium text-slate-900 block truncate">{tender.procurementMethod}</span>
          </div>
        </div>

        {/* Summary */}
        <div className="pt-2 text-sm text-slate-700 leading-relaxed border-t border-slate-100">
          <p><strong className="font-semibold text-slate-900">Scope summary:</strong> {tender.summary}</p>
        </div>
      </div>

      {/* Simulated AI Scan Banner */}
      {isSimulatingAnalysis && (
        <div className="bg-slate-900 text-white rounded-2xl p-4 flex items-center gap-3">
          <RefreshCw className="w-4 h-4 animate-spin text-sky-400 shrink-0" />
          <p className="text-sm font-medium">Analyzing tender…</p>
        </div>
      )}

      {/* RFP Key Timeline */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-sky-600" />
          Timeline
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-500 block text-xs mb-0.5">Notice posted</span>
            <span className="font-medium text-slate-800">{tender.keyDates.postedDate}</span>
          </div>
          <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200">
            <span className="text-amber-800 block text-xs font-medium mb-0.5">Question deadline</span>
            <span className="font-semibold text-amber-950">{tender.keyDates.questionDeadline}</span>
          </div>
          <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200">
            <span className="text-rose-800 block text-xs font-medium mb-0.5">Tender closing</span>
            <span className="font-semibold text-rose-950">{tender.keyDates.closingDate}</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <span className="text-emerald-800 block text-xs font-medium mb-0.5">Anticipated award</span>
            <span className="font-semibold text-emerald-950">{tender.keyDates.anticipatedAward}</span>
          </div>
        </div>
      </div>

      {/* Tabs: Requirements Breakdown vs AI Bid/No-Bid Decision */}
      <div className="flex gap-4 border-b border-slate-200 text-sm font-medium">
        <button
          onClick={() => setActiveTab('requirements')}
          className={`pb-3 px-1 transition border-b-2 flex items-center gap-2 cursor-pointer ${
            activeTab === 'requirements'
              ? 'border-sky-600 text-sky-900 font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Requirements ({mandatoryReqs.length} mandatory &bull; {ratedReqs.length} rated)</span>
        </button>

        <button
          onClick={() => setActiveTab('bidDecision')}
          className={`pb-3 px-1 transition border-b-2 flex items-center gap-2 cursor-pointer ${
            activeTab === 'bidDecision'
              ? 'border-sky-600 text-sky-900 font-semibold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Scale className="w-4 h-4 text-sky-600" />
          <span>Should we bid?</span>
        </button>
      </div>

      {/* Tab 1: Requirements Breakdown */}
      {activeTab === 'requirements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mandatory Requirements Column */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-rose-950 font-semibold text-base">
                <ShieldCheck className="w-4 h-4 text-rose-600" />
                <span>Mandatory criteria</span>
              </div>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                Pass / fail
              </span>
            </div>

            <div className="space-y-3">
              {mandatoryReqs.map(req => (
                <div
                  key={req.id}
                  className="p-3.5 rounded-xl border border-rose-100 bg-rose-50/30 text-sm space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-medium text-rose-700 bg-rose-100 px-2 py-0.5 rounded text-xs">
                      {req.code}
                    </span>
                    <span className="text-xs font-medium text-slate-500">Pass / fail</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm">{req.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{req.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rated Evaluation Criteria Column */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sky-950 font-semibold text-base">
                <Scale className="w-4 h-4 text-sky-600" />
                <span>Rated criteria</span>
              </div>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                Scored
              </span>
            </div>

            <div className="space-y-3">
              {ratedReqs.map(req => (
                <div
                  key={req.id}
                  className="p-3.5 rounded-xl border border-sky-100 bg-sky-50/30 text-sm space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-medium text-sky-700 bg-sky-100 px-2 py-0.5 rounded text-xs">
                      {req.code}
                    </span>
                    {req.weightOrPoints && (
                      <span className="text-xs font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                        {req.weightOrPoints}
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm">{req.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{req.description}</p>
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
          <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-xs text-slate-400 font-medium">
                Assessment
              </span>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold">{tender.bidRationale.verdict}</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-medium">
                  {tender.bidRationale.winProbability}% estimated win probability
                </span>
              </div>
              <p className="text-sm text-slate-300 max-w-xl">{tender.bidRationale.strategicValue}</p>
            </div>

            <div className="text-right shrink-0">
              <span className="text-3xl font-bold text-sky-400">{tender.relevanceScore}</span>
              <span className="block text-xs text-slate-400">Match score</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {/* Strengths */}
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900 flex items-center gap-1.5 text-base">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Strengths</span>
              </h4>
              <div className="space-y-2">
                {tender.bidRationale.strengths.map((str, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-0.5">&check;</span>
                    <span className="leading-snug">{str}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Risks & Mitigation */}
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900 flex items-center gap-1.5 text-base">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Risks</span>
              </h4>
              <div className="space-y-2">
                {tender.bidRationale.risksAndMitigation.map((risk, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">&bull;</span>
                    <span className="leading-snug">{risk}</span>
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
          <h4 className="font-semibold text-slate-900 text-sm">Next step: check compliance</h4>
          <p className="text-sm text-slate-600">
            Check requirements against Atlantic Coastal Civil &amp; Marine Ltd.'s profile.
          </p>
        </div>

        <button
          onClick={onNext}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition flex items-center justify-center gap-2 cursor-pointer shrink-0"
        >
          <span>Open compliance matrix</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Step3Analysis;
