import React, { useState, useMemo } from 'react';
import { TenderOpportunity } from '../types/procurement';
import {
  Search,
  Filter,
  ExternalLink,
  Calendar,
  DollarSign,
  MapPin,
  CheckCircle,
  AlertCircle,
  XCircle,
  ArrowRight,
  Sparkles,
  Building,
  Info
} from 'lucide-react';

interface Step2FeedProps {
  tenders: TenderOpportunity[];
  onSelectTender: (tender: TenderOpportunity) => void;
  selectedTenderId?: string;
}

export const Step2Feed: React.FC<Step2FeedProps> = ({
  tenders,
  onSelectTender,
  selectedTenderId
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedSource, setSelectedSource] = useState<string>('All');
  const [selectedRecommendation, setSelectedRecommendation] = useState<string>('All');

  // Filter options
  const regions = ['All', 'Halifax Regional Municipality (HRM)', 'Cape Breton (CBRM, Richmond, Inverness)', 'South Shore (Lunenburg, Shelburne, Queens)', 'Annapolis Valley (Kings, Annapolis, Digby)', 'Northern NS (Pictou, Colchester, Antigonish)'];
  const sources = ['All', 'Halifax bids&tenders', 'Nova Scotia Procurement Portal', 'CanadaBuys', 'SAP Ariba / NS Health'];
  const recommendations = ['All', 'Pursue', 'Consider', 'Skip'];

  const filteredTenders = useMemo(() => {
    return tenders.filter(tender => {
      const matchesSearch =
        searchTerm === '' ||
        tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tender.tenderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tender.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tender.summary.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRegion =
        selectedRegion === 'All' || tender.region === selectedRegion;

      const matchesSource =
        selectedSource === 'All' || tender.source === selectedSource;

      const matchesRecommendation =
        selectedRecommendation === 'All' || tender.recommendation === selectedRecommendation;

      return matchesSearch && matchesRegion && matchesSource && matchesRecommendation;
    });
  }, [tenders, searchTerm, selectedRegion, selectedSource, selectedRecommendation]);

  const stats = useMemo(() => {
    const pursueCount = tenders.filter(t => t.recommendation === 'Pursue').length;
    const considerCount = tenders.filter(t => t.recommendation === 'Consider').length;
    const skipCount = tenders.filter(t => t.recommendation === 'Skip').length;
    return { total: tenders.length, pursue: pursueCount, consider: considerCount, skip: skipCount };
  }, [tenders]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Feed Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              Matched Nova Scotia Public Tenders
            </h1>
          </div>
          <p className="text-xs text-slate-500">
            Ranked by AI match algorithm using Atlantic Coastal Civil & Marine Ltd. profile & verified past contracts.
          </p>
        </div>

        {/* Pipeline Summary Badges */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold border border-slate-200">
            {stats.total} Total Tenders
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200 flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            {stats.pursue} Pursue
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 font-semibold border border-amber-200 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            {stats.consider} Consider
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 font-semibold border border-slate-200 flex items-center gap-1">
            <XCircle className="w-3.5 h-3.5 text-slate-400" />
            {stats.skip} Skip
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tender title, buyer, ref # (e.g. Seawall, HRM, Pier)..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition"
            />
          </div>

          {/* Recommendation Quick Buttons */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs shrink-0 overflow-x-auto">
            {recommendations.map(rec => (
              <button
                key={rec}
                onClick={() => setSelectedRecommendation(rec)}
                className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer whitespace-nowrap ${
                  selectedRecommendation === rec
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {rec === 'All' ? 'All Recommendations' : rec}
              </button>
            ))}
          </div>
        </div>

        {/* Secondary Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Filter className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-700">Filters:</span>
          </div>

          {/* Region Select */}
          <select
            value={selectedRegion}
            onChange={e => setSelectedRegion(e.target.value)}
            className="px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs bg-white text-slate-700 focus:outline-none focus:border-sky-500 cursor-pointer"
          >
            <option value="All">All NS Regions</option>
            {regions.filter(r => r !== 'All').map(r => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>

          {/* Source Select */}
          <select
            value={selectedSource}
            onChange={e => setSelectedSource(e.target.value)}
            className="px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs bg-white text-slate-700 focus:outline-none focus:border-sky-500 cursor-pointer"
          >
            <option value="All">All Procurement Sources</option>
            {sources.filter(s => s !== 'All').map(s => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          {(searchTerm || selectedRegion !== 'All' || selectedSource !== 'All' || selectedRecommendation !== 'All') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('All');
                setSelectedSource('All');
                setSelectedRecommendation('All');
              }}
              className="text-xs text-sky-600 hover:text-sky-800 font-semibold underline underline-offset-2 ml-auto cursor-pointer"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Tenders Grid / Cards */}
      <div className="space-y-4">
        {filteredTenders.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <p className="text-slate-500 text-sm">No tenders matched your search filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('All');
                setSelectedSource('All');
                setSelectedRecommendation('All');
              }}
              className="px-4 py-2 bg-sky-600 text-white rounded-lg text-xs font-semibold hover:bg-sky-500 transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredTenders.map(tender => {
            const isFlagship = tender.id === 'tender-1';
            const isSelected = selectedTenderId === tender.id;

            return (
              <div
                key={tender.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs hover:shadow-md cursor-pointer ${
                  isSelected
                    ? 'border-sky-500 ring-2 ring-sky-500/20'
                    : isFlagship
                    ? 'border-sky-300 bg-gradient-to-r from-sky-50/30 via-white to-white'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
                onClick={() => onSelectTender(tender)}
              >
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Top Row: Badges, Source, Score */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Source Badge */}
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold border border-slate-200 flex items-center gap-1 text-[11px]">
                        <Building className="w-3 h-3 text-slate-500" />
                        {tender.source}
                      </span>

                      {/* Buyer Category */}
                      <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-50 text-slate-500 border border-slate-100">
                        {tender.buyerCategory}
                      </span>

                      {isFlagship && (
                        <span className="px-2.5 py-1 rounded-md bg-sky-100 text-sky-800 font-bold text-[11px] border border-sky-200 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-sky-600" />
                          Featured Full Walkthrough
                        </span>
                      )}
                    </div>

                    {/* Match Score & Recommendation Badge */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200">
                        <span className="text-[11px] text-slate-400 font-medium">Relevance:</span>
                        <span
                          className={`font-black text-xs ${
                            tender.relevanceScore >= 80
                              ? 'text-emerald-700'
                              : tender.relevanceScore >= 60
                              ? 'text-amber-700'
                              : 'text-slate-500'
                          }`}
                        >
                          {tender.relevanceScore}/100
                        </span>
                      </div>

                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-wide flex items-center gap-1 ${
                          tender.recommendation === 'Pursue'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : tender.recommendation === 'Consider'
                            ? 'bg-amber-100 text-amber-800 border border-amber-300'
                            : 'bg-slate-100 text-slate-600 border border-slate-300'
                        }`}
                      >
                        {tender.recommendation === 'Pursue' && <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />}
                        {tender.recommendation === 'Consider' && <AlertCircle className="w-3.5 h-3.5 text-amber-600" />}
                        {tender.recommendation === 'Skip' && <XCircle className="w-3.5 h-3.5 text-slate-400" />}
                        {tender.recommendation}
                      </span>
                    </div>
                  </div>

                  {/* Main Title & Tender Number */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1">
                      <span>{tender.tenderNumber}</span>
                      <span>&bull;</span>
                      <a
                        href={tender.sourcePortalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="text-sky-600 hover:text-sky-800 flex items-center gap-1 hover:underline text-[11px]"
                      >
                        {tender.portalReferenceName}
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition">
                      {tender.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">{tender.buyer}</p>
                  </div>

                  {/* Key Metadata Pills */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-slate-400">Est. Value:</span>
                      <span className="font-semibold text-slate-800">{tender.estimatedValue}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span className="text-slate-400">Region:</span>
                      <span className="font-semibold text-slate-800">{tender.region}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="text-slate-400">Closing:</span>
                      <span className="font-semibold text-slate-800">{tender.closingDate}</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 ml-1">
                        {tender.daysRemaining} days left
                      </span>
                    </div>
                  </div>

                  {/* AI Match Reasons Box */}
                  <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-3.5 text-xs">
                    <div className="font-bold text-sky-950 flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                      <span>AI Match Analysis & Rationales</span>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-slate-700">
                      {tender.matchReasons.map((reason, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px]">
                          <span className="text-sky-600 font-bold shrink-0 mt-0.5">&bull;</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-slate-100">
                    <div className="text-[11px] text-slate-500">
                      Method: <span className="font-medium text-slate-700">{tender.procurementMethod}</span>
                    </div>

                    <button
                      onClick={() => onSelectTender(tender)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                        tender.recommendation === 'Pursue'
                          ? 'bg-sky-600 hover:bg-sky-500 text-white shadow-xs'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <span>Analyze Tender & RFP Requirements</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
