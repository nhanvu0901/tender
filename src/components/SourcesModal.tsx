import React from 'react';
import { X, ExternalLink, ShieldCheck, BookOpen, Building2, BellRing, Info } from 'lucide-react';
import { VERIFIED_NS_SOURCES } from '../data/sources';

interface SourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SourcesModal: React.FC<SourcesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Verified Nova Scotia Procurement Sources</h2>
              <p className="text-xs text-slate-500">Official portals and regulatory reference framework</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Regulatory Context Alert */}
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 flex gap-3 text-sky-950">
            <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs leading-relaxed">
              <p className="font-semibold text-sky-900">Regulatory Context: Nova Scotia Public Procurement Act</p>
              <p>
                In Nova Scotia, public sector procurement is governed by the <em>Public Procurement Act</em> (SNS 2011, c. 12) 
                administered by the Province's Procurement Services. It establishes standardized competitive bidding rules across 
                provincial government departments, Crown corporations, and the <strong>MASH sector</strong> (Municipalities, Academic 
                institutions, School boards, and Health authorities).
              </p>
            </div>
          </div>

          {/* Sources List */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Verified Public Procurement Hubs (Live URLs)
            </h3>

            <div className="grid gap-3">
              {VERIFIED_NS_SOURCES.map((source, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-slate-200 hover:border-sky-300 bg-white hover:bg-sky-50/30 transition group flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {source.shortName.includes('HRM') ? (
                        <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : source.shortName.includes('TONS') ? (
                        <BellRing className="w-4 h-4 text-amber-600 shrink-0" />
                      ) : (
                        <BookOpen className="w-4 h-4 text-sky-600 shrink-0" />
                      )}
                      <h4 className="font-semibold text-slate-900 text-sm">{source.name}</h4>
                    </div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-sky-600 hover:text-sky-800 flex items-center gap-1 shrink-0 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100 group-hover:bg-sky-100 transition"
                    >
                      <span>Visit Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <p className="text-xs text-slate-600">{source.description}</p>

                  <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                    <div>
                      <span className="font-medium text-slate-700">Managed By:</span> {source.managedBy}
                    </div>
                    <div className="font-mono text-slate-400 truncate max-w-xs">
                      {source.url}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Notice */}
          <div className="p-3 bg-slate-100 rounded-lg text-xs text-slate-500">
            <strong>Note on Sample Data:</strong> The opportunities displayed inside BidNova reflect realistic tender scopes, 
            NAICS/UNSPSC categories, and evaluation weights modeled after real Nova Scotia specifications, but all tender numbers, 
            contract sums, and specific contact names are generated dummy data for demonstration purposes only.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-900 text-white font-medium text-xs hover:bg-slate-800 transition cursor-pointer"
          >
            Close References
          </button>
        </div>
      </div>
    </div>
  );
};
