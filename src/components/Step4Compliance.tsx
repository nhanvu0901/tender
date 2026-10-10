import React, { useState, useMemo } from 'react';
import { TenderOpportunity, ComplianceItem, CompanyProfile } from '../types/procurement';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  FileCheck2,
  Filter,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export interface Step4ComplianceProps {
  tender: TenderOpportunity;
  company?: CompanyProfile;
  onBack?: () => void;
  onNext?: () => void;
}

export const Step4Compliance: React.FC<Step4ComplianceProps> = ({
  tender,
  company,
  onBack = () => {},
  onNext = () => {}
}) => {
  const [statusFilter, setStatusFilter] = useState<'All' | 'Met' | 'Partial' | 'Gap'>('All');

  const stats = useMemo(() => {
    const total = tender.complianceMatrix.length;
    const met = tender.complianceMatrix.filter(c => c.status === 'Met').length;
    const partial = tender.complianceMatrix.filter(c => c.status === 'Partial').length;
    const gap = tender.complianceMatrix.filter(c => c.status === 'Gap').length;
    const readinessScore = Math.round(((met + partial * 0.5) / (total || 1)) * 100);

    return { total, met, partial, gap, readinessScore };
  }, [tender.complianceMatrix]);

  const filteredItems = useMemo(() => {
    if (statusFilter === 'All') return tender.complianceMatrix;
    return tender.complianceMatrix.filter(item => item.status === statusFilter);
  }, [tender.complianceMatrix, statusFilter]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 py-1.5 px-3 rounded-lg hover:bg-slate-200/60 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to RFP Analysis</span>
        </button>

        <button
          onClick={onNext}
          className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs"
        >
          <span>Generate AI Proposal Draft</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
              {tender.tenderNumber}
            </span>
            <span className="text-xs text-slate-400">&bull;</span>
            <span className="text-xs font-medium text-slate-500">Compliance & Readiness Matrix</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
            Requirement Compliance Audit
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Auto-mapped against Atlantic Coastal Civil & Marine Ltd. certifications, personnel & past contracts.
          </p>
        </div>

        {/* Readiness Meter */}
        <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-3 rounded-2xl shrink-0">
          <div className="text-center">
            <span className="text-2xl font-black text-sky-600">{stats.readinessScore}%</span>
            <span className="block text-[10px] text-slate-400 font-medium">Compliance Readiness</span>
          </div>
          <div className="w-px h-8 bg-slate-200" />
          <div className="text-xs space-y-0.5">
            <div className="text-emerald-700 font-semibold">{stats.met} Requirements Met</div>
            <div className="text-amber-700 font-medium">{stats.partial} Partial (Requires Attachment)</div>
            {stats.gap > 0 ? (
              <div className="text-rose-700 font-bold">{stats.gap} Gaps Identified</div>
            ) : (
              <div className="text-slate-400">0 Critical Gaps</div>
            )}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs text-xs">
        <div className="flex items-center gap-1.5 text-slate-500">
          <Filter className="w-3.5 h-3.5" />
          <span className="font-semibold text-slate-700">Filter by Status:</span>
        </div>

        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
          {(['All', 'Met', 'Partial', 'Gap'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setStatusFilter(tab)}
              className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer ${
                statusFilter === tab
                  ? 'bg-white text-slate-900 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab === 'All' ? `All (${stats.total})` : `${tab} (${tab === 'Met' ? stats.met : tab === 'Partial' ? stats.partial : stats.gap})`}
            </button>
          ))}
        </div>
      </div>

      {/* Compliance Matrix Table / Cards */}
      <div className="space-y-3">
        {filteredItems.map(item => {
          const isMet = item.status === 'Met';
          const isPartial = item.status === 'Partial';
          const isGap = item.status === 'Gap';

          return (
            <div
              key={item.id}
              className={`bg-white rounded-2xl border p-5 shadow-xs transition ${
                isMet
                  ? 'border-slate-200 hover:border-emerald-300'
                  : isPartial
                  ? 'border-amber-200 bg-amber-50/20'
                  : 'border-rose-200 bg-rose-50/20'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start text-xs">
                {/* Column 1: Requirement ID & Type (2 cols) */}
                <div className="lg:col-span-3 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`font-mono font-bold px-2 py-0.5 rounded text-[11px] ${
                        item.requirementType === 'Mandatory'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-sky-100 text-sky-800'
                      }`}
                    >
                      {item.requirementCode}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      {item.requirementType}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs pt-1">{item.requirementTitle}</h4>
                </div>

                {/* Column 2: Company Evidence (5 cols) */}
                <div className="lg:col-span-5 bg-slate-50/80 p-3 rounded-xl border border-slate-100 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Mapped Company Evidence (ACCM Profile)
                  </span>
                  <p className="text-slate-700 leading-relaxed text-xs">{item.companyEvidence}</p>
                </div>

                {/* Column 3: Status Badge (2 cols) */}
                <div className="lg:col-span-2 flex lg:justify-center">
                  <span
                    className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 text-xs ${
                      isMet
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : isPartial
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'bg-rose-100 text-rose-800 border border-rose-200'
                    }`}
                  >
                    {isMet && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                    {isPartial && <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />}
                    {isGap && <XCircle className="w-3.5 h-3.5 text-rose-600" />}
                    <span>{item.status}</span>
                  </span>
                </div>

                {/* Column 4: Action Needed (2 cols) */}
                <div className="lg:col-span-2 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Action Required
                  </span>
                  <p className="text-slate-600 text-[11px] font-medium leading-tight">
                    {item.actionNeeded}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Callout */}
      {stats.gap === 0 ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Compliance Clearance: Approved to Draft</span>
            </div>
            <p className="text-xs text-emerald-800">
              All mandatory threshold criteria are met or ready for certified attachment. BidNova can now draft a tailored, compliant proposal.
            </p>
          </div>

          <button
            onClick={onNext}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-700/20 transition flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Generate AI Proposal Draft (Step 5)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Gaps to Resolve Before Submission ({stats.gap} Identified)</span>
            </div>
            <p className="text-xs text-amber-800">
              {stats.gap} requirement{stats.gap > 1 ? 's are' : ' is'} currently flagged as a Gap and must be remediated or subcontracted prior to official tender closing. You may still proceed to generate the draft with placeholder partner commitments.
            </p>
          </div>

          <button
            onClick={onNext}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-md shadow-amber-600/20 transition flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Proceed to Proposal Draft (Step 5)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Step4Compliance;
