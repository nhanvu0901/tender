import React from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';

interface DisclaimerBannerProps {
  onOpenSources: () => void;
  position?: 'top' | 'footer';
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ onOpenSources, position = 'top' }) => {
  if (position === 'top') {
    return (
      <aside aria-label="Demo notice" className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-xs text-amber-900 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Demo only:</strong> Fictional sample data. Not an official government service.
          </span>
        </div>
        <button
          onClick={onOpenSources}
          className="text-amber-800 hover:text-amber-950 font-semibold underline underline-offset-2 flex items-center gap-1 cursor-pointer transition-colors"
        >
          View portals <ExternalLink className="w-3 h-3" />
        </button>
      </aside>
    );
  }

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-900 text-slate-300 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-base mb-1">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            Nemo
            <span className="text-xs font-normal text-slate-300 px-2 py-0.5 bg-slate-800 rounded border border-slate-700">
              Demo
            </span>
          </div>
          <p className="text-sm text-slate-400 max-w-xl">
            Sample tool for Nova Scotia public tenders.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
          <button
            onClick={onOpenSources}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 transition flex items-center gap-1.5 cursor-pointer"
          >
            <span>Verified sources</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
          <span className="text-slate-600 hidden sm:inline">&bull;</span>
          <span className="text-slate-400">
            Fictional data &bull; NS Public Procurement Act references
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>Demo prototype based on Nova Scotia procurement workflows. Not an official government service.</p>
        <p>Built with React &bull; TypeScript &bull; Tailwind CSS</p>
      </div>
    </footer>
  );
};
