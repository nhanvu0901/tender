import React from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';

interface DisclaimerBannerProps {
  onOpenSources: () => void;
  position?: 'top' | 'footer';
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ onOpenSources, position = 'top' }) => {
  if (position === 'top') {
    return (
      <aside aria-label="Demo notice" className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-xs text-amber-900 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>DEMO ONLY:</strong> All businesses, tenders, scores, and AI outputs are fictional sample data. Not affiliated with the Government of Nova Scotia.
          </span>
        </div>
        <button
          onClick={onOpenSources}
          className="text-amber-800 hover:text-amber-950 font-semibold underline underline-offset-2 flex items-center gap-1 cursor-pointer transition-colors"
        >
          View verified NS portal references <ExternalLink className="w-3 h-3" />
        </button>
      </aside>
    );
  }

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-900 text-slate-300 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-lg mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
            BidNova
            <span className="text-xs font-normal text-sky-300 px-2 py-0.5 bg-sky-950 rounded border border-sky-800">
              Nova Scotia SME Prototype
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-xl">
            Simulated AI procurement navigator tailored for Nova Scotia businesses bidding on provincial, municipal, federal, and MASH sector contracts.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
          <button
            onClick={onOpenSources}
            className="px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 transition flex items-center gap-1.5 cursor-pointer"
          >
            <span>Verified Nova Scotia Sources</span>
            <ExternalLink className="w-3 h-3" />
          </button>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">
            Fictional sample data &bull; NS Public Procurement Act context
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-slate-800 text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>Demo prototype based on Nova Scotia procurement workflows. Not an official government service.</p>
        <p>Built with React &bull; TypeScript &bull; Tailwind CSS</p>
      </div>
    </footer>
  );
};
