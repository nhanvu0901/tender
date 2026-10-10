import React, { useState } from 'react';
import { TenderOpportunity, CompanyProfile } from '../types/procurement';
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

export interface Step5ProposalProps {
  tender: TenderOpportunity;
  company?: CompanyProfile;
  onBack?: () => void;
  onNext?: () => void;
  onRestartJourney?: () => void;
  onOpenSources?: () => void;
}

export const Step5Proposal: React.FC<Step5ProposalProps> = ({
  tender,
  company,
  onBack = () => {},
  onNext = () => {},
  onRestartJourney = () => {},
  onOpenSources = () => {}
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

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSectionExpand = (key: string) => {
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

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
      setRefinementSuccessMessage(`Applied: "${instruction}"`);

      if (instruction.includes('COR')) {
        setDraftData(prev => ({
          ...prev,
          executiveSummary: prev.executiveSummary + '\n\n[Refinement]: ACCM highlights its consecutive 5-year NSCSA zero-lost-time record and formal audit score of 94% on Nova Scotia municipal marine assets.'
        }));
      } else if (instruction.includes('Dartmouth')) {
        setDraftData(prev => ({
          ...prev,
          executiveSummary: prev.executiveSummary + '\n\n[Refinement]: ACCM guarantees a dedicated marine survey vessel berthed in Halifax Harbour with emergency callout mobilization within 45 minutes.'
        }));
      } else if (instruction.includes('HalifACT') || instruction.includes('climate')) {
        setDraftData(prev => ({
          ...prev,
          understandingOfScope: prev.understandingOfScope + '\n\n[Refinement]: Scope analysis calibrated directly against HalifACT 2050 extreme sea-level rise scenarios (+1.2m storm surge datum) ensuring full alignment with municipal net-zero resilience frameworks.'
        }));
      }

      setTimeout(() => setRefinementSuccessMessage(null), 3500);
    }, 800);
  };

  const gapCount = tender.complianceMatrix.filter(c => c.status === 'Gap').length;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Navigation Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1.5 py-1.5 px-3 rounded-lg hover:bg-slate-100 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to compliance</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition cursor-pointer"
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span>{isCopied ? 'Copied' : 'Copy draft'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-sky-400" />
            <span>Export text file</span>
          </button>
        </div>
      </div>

      {/* Draft Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs font-medium text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
              {tender.tenderNumber}
            </span>
            <span className="text-xs text-slate-400">&bull;</span>
            {tender.recommendation === 'Skip' ? (
              <span className="text-xs font-medium text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                Skip criteria
              </span>
            ) : gapCount > 0 ? (
              <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Draft generated ({gapCount} gap{gapCount > 1 ? 's' : ''} to resolve)
              </span>
            ) : (
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Compliant draft ready
              </span>
            )}
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
            Proposal draft: {tender.title}
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Review and export your proposal draft.
          </p>

          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
            <span className="font-medium text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 text-xs">
              Sample output
            </span>
            <span>
              Draft text generated from company profile data and sample RFP clauses for demo review.
            </span>
          </div>
        </div>

        {/* Word count & Sections */}
        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-xs shrink-0">
          <div className="text-center">
            <span className="text-lg font-bold text-slate-800">
              {fullTextDraft.split(/\s+/).length}
            </span>
            <span className="block text-xs text-slate-500 font-medium">Words</span>
          </div>
          <div className="w-px h-8 bg-slate-200" />
          <div className="text-center">
            <span className="text-lg font-bold text-emerald-700">6/6</span>
            <span className="block text-xs text-slate-500 font-medium">Sections</span>
          </div>
        </div>
      </div>

      {/* Quick AI Refinements Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-slate-800 font-semibold text-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Quick adjustments</span>
          </div>
          {isRefining && <span className="text-xs text-sky-700 font-medium">Applying edit…</span>}
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            onClick={() => handleSimulateRefine('Emphasize NSCSA COR safety record')}
            disabled={isRefining}
            className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 font-medium border border-slate-200 transition cursor-pointer disabled:opacity-50"
          >
            + Emphasize COR&trade; safety record
          </button>
          <button
            onClick={() => handleSimulateRefine('Highlight 45-minute Dartmouth emergency mobilization')}
            disabled={isRefining}
            className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 font-medium border border-slate-200 transition cursor-pointer disabled:opacity-50"
          >
            + Highlight 45-min Dartmouth mobilization
          </button>
          <button
            onClick={() => handleSimulateRefine('Strengthen HalifACT 2050 climate alignment')}
            disabled={isRefining}
            className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 font-medium border border-slate-200 transition cursor-pointer disabled:opacity-50"
          >
            + Align with HalifACT 2050 climate targets
          </button>
        </div>

        {refinementSuccessMessage && (
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-medium flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{refinementSuccessMessage}</span>
          </div>
        )}
      </div>
      {/* Section View Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 text-xs font-medium scrollbar-none">
        <button
          onClick={() => setActiveSection('all')}
          className={`px-3 py-1.5 rounded-xl transition cursor-pointer whitespace-nowrap ${
            activeSection === 'all'
              ? 'bg-slate-900 text-white font-semibold'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          All sections
        </button>
        {[
          { id: 'exec' as const, label: '1. Summary' },
          { id: 'scope' as const, label: '2. Scope' },
          { id: 'method' as const, label: '3. Methodology' },
          { id: 'past' as const, label: '4. Experience' },
          { id: 'team' as const, label: '5. Team' },
          { id: 'impact' as const, label: '6. Social value' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id)}
            className={`px-3 py-1.5 rounded-xl transition cursor-pointer whitespace-nowrap ${
              activeSection === tab.id
                ? 'bg-slate-900 text-white font-semibold'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Proposal Content Cards */}
      <div className="space-y-4">
        {[
          { key: 'executiveSummary' as const, tabId: 'exec', num: 1, title: '1. Executive summary & value proposition' },
          { key: 'understandingOfScope' as const, tabId: 'scope', num: 2, title: '2. Understanding of requirements & scope' },
          { key: 'technicalMethodology' as const, tabId: 'method', num: 3, title: '3. Technical approach & methodology' },
          { key: 'relevantExperience' as const, tabId: 'past', num: 4, title: '4. Relevant past experience & references' },
          { key: 'teamResumes' as const, tabId: 'team', num: 5, title: '5. Key personnel & team' },
          { key: 'localEconomicImpact' as const, tabId: 'impact', num: 6, title: '6. Social value & local economic impact' }
        ]
          .filter(sec => activeSection === 'all' || activeSection === sec.tabId)
          .map(sec => {
            const content = draftData[sec.key];
            const isExpanded = !!expandedSections[sec.key] || activeSection !== 'all';
            const paragraphs = content.split('\n\n').filter(Boolean);
            const firstParagraph = paragraphs[0] || content;

            return (
              <div key={sec.key} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    {sec.title}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleSectionExpand(sec.key)}
                    className="text-xs text-sky-600 hover:text-sky-800 font-medium cursor-pointer"
                  >
                    {isExpanded ? 'Collapse' : 'Show full section & edit'}
                  </button>
                </div>

                {isExpanded ? (
                  <textarea
                    rows={Math.min(10, Math.max(5, content.split('\n').length + 1))}
                    value={content}
                    onChange={e => setDraftData({ ...draftData, [sec.key]: e.target.value })}
                    className="w-full text-sm text-slate-800 leading-relaxed font-sans p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                ) : (
                  <div className="space-y-2">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {firstParagraph}
                    </p>
                    {paragraphs.length > 1 && (
                      <button
                        type="button"
                        onClick={() => toggleSectionExpand(sec.key)}
                        className="text-xs text-slate-500 hover:text-sky-600 font-medium cursor-pointer block"
                      >
                        + {paragraphs.length - 1} more paragraph{paragraphs.length > 2 ? 's' : ''} (click to expand)
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </div>

      {/* Submission Instructions & Portal Reference */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sky-400 text-xs font-medium">
            <BookmarkCheck className="w-4 h-4" />
            <span>Ready for submission</span>
          </div>
          <h3 className="text-lg font-bold">
            Submit bid on {tender.source}
          </h3>
          <p className="text-sm text-slate-400 max-w-xl">
            In Nova Scotia, public electronic bidding is completed via the official e-procurement portal. Copy your response text, attach certified documents, and submit directly on:
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <a
            href={tender.sourcePortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Open {tender.source}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onRestartJourney}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 transition cursor-pointer"
          >
            Try another tender
          </button>
        </div>
      </div>

      {/* Completion Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-2">
        <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-1">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-slate-900 text-base">
          Demo journey completed
        </h3>
        <p className="text-sm text-slate-600 max-w-lg mx-auto">
          You navigated all 5 stages: Company profile &rarr; Matched opportunities &rarr; RFP analysis &rarr; Compliance matrix &rarr; Proposal draft.
        </p>
      </div>
    </div>
  );
};

export default Step5Proposal;
