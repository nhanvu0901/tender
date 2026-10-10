import React, { useState } from 'react';
import { TenderOpportunity } from '../types/procurement';
import {
  ArrowLeft,
  Copy,
  Download,
  Check,
  Sparkles,
  ExternalLink,
  Edit2,
  FileCheck,
  RefreshCw,
  Send,
  CheckCircle2,
  BookmarkCheck
} from 'lucide-react';

interface Step5ProposalProps {
  tender: TenderOpportunity;
  onBack: () => void;
  onRestartJourney: () => void;
  onOpenSources: () => void;
}

export const Step5Proposal: React.FC<Step5ProposalProps> = ({
  tender,
  onBack,
  onRestartJourney,
  onOpenSources
}) => {
  const [activeSection, setActiveSection] = useState<'all' | 'exec' | 'scope' | 'method' | 'past' | 'team' | 'impact'>('all');
  const [isCopied, setIsCopied] = useState(false);
  const [isRefining, setIsRefining] = useState(false);
  const [refinementSuccessMessage, setRefinementSuccessMessage] = useState<string | null>(null);

  // Editable draft states
  const [draftData, setDraftData] = useState({
    executiveSummary: tender.proposalDraft.executiveSummary,
    understandingOfScope: tender.proposalDraft.understandingOfScope,
    technicalMethodology: tender.proposalDraft.technicalMethodology,
    relevantExperience: tender.proposalDraft.relevantExperience,
    teamResumes: tender.proposalDraft.teamResumes,
    localEconomicImpact: tender.proposalDraft.localEconomicImpact
  });

  const fullTextDraft = `========================================================================
PROPOSAL SUBMISSION DOCUMENT
Tender: ${tender.tenderNumber} — ${tender.title}
Buyer: ${tender.buyer}
Proponent: Atlantic Coastal Civil & Marine Ltd. (Burnside, Dartmouth, NS)
Date: October 2026
========================================================================

1. EXECUTIVE SUMMARY & VALUE PROPOSITION
------------------------------------------------------------------------
${draftData.executiveSummary}

2. UNDERSTANDING OF REQUIREMENTS & PROJECT CONTEXT
------------------------------------------------------------------------
${draftData.understandingOfScope}

3. TECHNICAL APPROACH, METHODOLOGY & QUALITY PLAN
------------------------------------------------------------------------
${draftData.technicalMethodology}

4. RELEVANT PAST EXPERIENCE & VERIFIED REFERENCES
------------------------------------------------------------------------
${draftData.relevantExperience}

5. PROPOSED PROJECT TEAM & KEY PERSONNEL
------------------------------------------------------------------------
${draftData.teamResumes}

6. NOVA SCOTIA SOCIAL VALUE & COMMUNITY BENEFITS COMMITMENT
------------------------------------------------------------------------
${draftData.localEconomicImpact}

========================================================================
COMPLIANCE ATTACHMENTS CHECKLIST:
[X] NSCSA COR™ Safety Certificate (Exp. Nov 2027)
[X] Engineers Nova Scotia Certificate of Authorization (COA #2019-0412)
[X] Nova Scotia Registry of Joint Stocks Good Standing (#NS-8849201)
[X] PSPC DOS Reliability Clearance Verification
========================================================================`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullTextDraft);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([fullTextDraft], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${tender.tenderNumber}_Proposal_Draft_ACCM.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleSimulateRefine = (instruction: string) => {
    setIsRefining(true);
    setRefinementSuccessMessage(null);

    setTimeout(() => {
      setIsRefining(false);
      setRefinementSuccessMessage(`Refinement Applied: "${instruction}"`);

      if (instruction.includes('COR')) {
        setDraftData(prev => ({
          ...prev,
          executiveSummary: prev.executiveSummary + '\n\n[AI Refinement]: ACCM highlights its consecutive 5-year NSCSA zero-lost-time record and formal audit score of 94% on Nova Scotia municipal marine assets.'
        }));
      } else if (instruction.includes('Dartmouth')) {
        setDraftData(prev => ({
          ...prev,
          executiveSummary: prev.executiveSummary + '\n\n[AI Refinement]: ACCM guarantees a dedicated marine survey vessel berthed in Halifax Harbour with emergency callout mobilization within 45 minutes.'
        }));
      }

      setTimeout(() => setRefinementSuccessMessage(null), 3500);
    }, 1000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Navigation Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 py-1.5 px-3 rounded-lg hover:bg-slate-200/60 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Compliance Matrix</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer shadow-xs"
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span>{isCopied ? 'Copied to Clipboard!' : 'Copy Draft'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-sky-400" />
            <span>Export Text / Markdown</span>
          </button>
        </div>
      </div>

      {/* Draft Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
              {tender.tenderNumber}
            </span>
            <span className="text-xs text-slate-400">&bull;</span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Compliant Draft Ready
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
            AI Proposal Draft: {tender.title}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Structured for {tender.buyer} &bull; Tailored to HRM evaluation criteria and Nova Scotia Public Procurement Act standards.
          </p>
        </div>

        {/* Word count & Export Stats */}
        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-3 rounded-2xl text-xs shrink-0">
          <div className="text-center">
            <span className="text-lg font-black text-slate-800">
              {fullTextDraft.split(/\s+/).length}
            </span>
            <span className="block text-[10px] text-slate-400 font-medium">Total Words</span>
          </div>
          <div className="w-px h-8 bg-slate-200" />
          <div className="text-center">
            <span className="text-lg font-black text-emerald-600">6/6</span>
            <span className="block text-[10px] text-slate-400 font-medium">RFP Sections</span>
          </div>
        </div>
      </div>

      {/* AI Refinement Chips Bar */}
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sky-950 font-bold text-xs">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>Simulate AI Draft Refinements (One-Click Tone Tuning)</span>
          </div>
          {isRefining && <span className="text-[11px] text-sky-700 font-medium animate-pulse">Synthesizing prompt...</span>}
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            onClick={() => handleSimulateRefine('Emphasize NSCSA COR safety record')}
            disabled={isRefining}
            className="px-3 py-1.5 rounded-lg bg-white hover:bg-sky-100 text-sky-900 font-medium border border-sky-200 transition cursor-pointer disabled:opacity-50"
          >
            + Emphasize COR™ Safety Record & Audit Score
          </button>
          <button
            onClick={() => handleSimulateRefine('Highlight 45-minute Dartmouth emergency mobilization')}
            disabled={isRefining}
            className="px-3 py-1.5 rounded-lg bg-white hover:bg-sky-100 text-sky-900 font-medium border border-sky-200 transition cursor-pointer disabled:opacity-50"
          >
            + Highlight 45-Min Local Marine Mobilization
          </button>
          <button
            onClick={() => handleSimulateRefine('Strengthen HalifACT 2050 climate alignment')}
            disabled={isRefining}
            className="px-3 py-1.5 rounded-lg bg-white hover:bg-sky-100 text-sky-900 font-medium border border-sky-200 transition cursor-pointer disabled:opacity-50"
          >
            + Align with HalifACT 2050 Climate Projections
          </button>
        </div>

        {refinementSuccessMessage && (
          <div className="p-2 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-semibold flex items-center gap-1.5 animate-fade-in">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{refinementSuccessMessage}</span>
          </div>
        )}
      </div>

      {/* Section View Tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs font-semibold scrollbar-none">
        <button
          onClick={() => setActiveSection('all')}
          className={`px-3 py-1.5 rounded-xl transition cursor-pointer whitespace-nowrap ${
            activeSection === 'all'
              ? 'bg-slate-900 text-white'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          View Full Proposal
        </button>
        <button
          onClick={() => setActiveSection('exec')}
          className={`px-3 py-1.5 rounded-xl transition cursor-pointer whitespace-nowrap ${
            activeSection === 'exec'
              ? 'bg-slate-900 text-white'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          1. Executive Summary
        </button>
        <button
          onClick={() => setActiveSection('scope')}
          className={`px-3 py-1.5 rounded-xl transition cursor-pointer whitespace-nowrap ${
            activeSection === 'scope'
              ? 'bg-slate-900 text-white'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          2. Understanding Scope
        </button>
        <button
          onClick={() => setActiveSection('method')}
          className={`px-3 py-1.5 rounded-xl transition cursor-pointer whitespace-nowrap ${
            activeSection === 'method'
              ? 'bg-slate-900 text-white'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          3. Technical Methodology
        </button>
        <button
          onClick={() => setActiveSection('past')}
          className={`px-3 py-1.5 rounded-xl transition cursor-pointer whitespace-nowrap ${
            activeSection === 'past'
              ? 'bg-slate-900 text-white'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          4. Relevant Past Experience
        </button>
        <button
          onClick={() => setActiveSection('team')}
          className={`px-3 py-1.5 rounded-xl transition cursor-pointer whitespace-nowrap ${
            activeSection === 'team'
              ? 'bg-slate-900 text-white'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          5. Team Resumes
        </button>
        <button
          onClick={() => setActiveSection('impact')}
          className={`px-3 py-1.5 rounded-xl transition cursor-pointer whitespace-nowrap ${
            activeSection === 'impact'
              ? 'bg-slate-900 text-white'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          6. Social Value Impact
        </button>
      </div>

      {/* Proposal Content Cards */}
      <div className="space-y-4">
        {(activeSection === 'all' || activeSection === 'exec') && (
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                1. Executive Summary & Proponent Value Proposition
              </span>
              <span className="text-[11px] text-slate-400">Section 1</span>
            </div>
            <textarea
              rows={6}
              value={draftData.executiveSummary}
              onChange={e => setDraftData({ ...draftData, executiveSummary: e.target.value })}
              className="w-full text-xs text-slate-700 leading-relaxed font-mono p-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
        )}

        {(activeSection === 'all' || activeSection === 'scope') && (
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                2. Understanding of Requirements & Site Vulnerability
              </span>
              <span className="text-[11px] text-slate-400">Section 2</span>
            </div>
            <textarea
              rows={6}
              value={draftData.understandingOfScope}
              onChange={e => setDraftData({ ...draftData, understandingOfScope: e.target.value })}
              className="w-full text-xs text-slate-700 leading-relaxed font-mono p-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
        )}

        {(activeSection === 'all' || activeSection === 'method') && (
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                3. Technical Approach, Methodology & Work Plan
              </span>
              <span className="text-[11px] text-slate-400">Section 3</span>
            </div>
            <textarea
              rows={8}
              value={draftData.technicalMethodology}
              onChange={e => setDraftData({ ...draftData, technicalMethodology: e.target.value })}
              className="w-full text-xs text-slate-700 leading-relaxed font-mono p-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
        )}

        {(activeSection === 'all' || activeSection === 'past') && (
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                4. Relevant Past Experience & Municipal References
              </span>
              <span className="text-[11px] text-slate-400">Section 4</span>
            </div>
            <textarea
              rows={6}
              value={draftData.relevantExperience}
              onChange={e => setDraftData({ ...draftData, relevantExperience: e.target.value })}
              className="w-full text-xs text-slate-700 leading-relaxed font-mono p-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
        )}

        {(activeSection === 'all' || activeSection === 'team') && (
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                5. Key Personnel & Local Project Staffing
              </span>
              <span className="text-[11px] text-slate-400">Section 5</span>
            </div>
            <textarea
              rows={6}
              value={draftData.teamResumes}
              onChange={e => setDraftData({ ...draftData, teamResumes: e.target.value })}
              className="w-full text-xs text-slate-700 leading-relaxed font-mono p-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
        )}

        {(activeSection === 'all' || activeSection === 'impact') && (
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                6. HRM Social Value & Local Economic Impact
              </span>
              <span className="text-[11px] text-slate-400">Section 6</span>
            </div>
            <textarea
              rows={6}
              value={draftData.localEconomicImpact}
              onChange={e => setDraftData({ ...draftData, localEconomicImpact: e.target.value })}
              className="w-full text-xs text-slate-700 leading-relaxed font-mono p-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
        )}
      </div>

      {/* Submission Instructions & Portal Reference */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
            <BookmarkCheck className="w-4 h-4" />
            <span>Ready for Submission</span>
          </div>
          <h3 className="text-lg font-bold">
            Next: Submit Bid on {tender.source}
          </h3>
          <p className="text-xs text-slate-400 max-w-xl">
            In Nova Scotia, public electronic bidding must be completed via the official e-procurement portal. Download or copy your response package, attach your COR™ certificate and APENS seal, then upload to:
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <a
            href={tender.sourcePortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-sky-500/20"
          >
            <span>Open {tender.source}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onRestartJourney}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition cursor-pointer"
          >
            Test Another Opportunity
          </button>
        </div>
      </div>

      {/* Completion Banner for End-to-End User Journey */}
      <div className="bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-indigo-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center space-y-2">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-extrabold text-slate-900 text-base">
          End-to-End User Journey Completed!
        </h3>
        <p className="text-xs text-slate-600 max-w-lg mx-auto">
          You have navigated all 5 stages of BidNova: Company Profile &rarr; Matched Opportunities Feed &rarr; RFP Analysis &rarr; Compliance Matrix &rarr; AI Proposal Draft.
        </p>
      </div>
    </div>
  );
};
