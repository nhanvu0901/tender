import React, { useState, useEffect } from 'react';
import { CompanyProfile } from '../types/procurement';
import {
  Building2,
  Award,
  MapPin,
  Users,
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  History,
  Tag,
  Edit3,
  Save,
  Plus,
  Info
} from 'lucide-react';

interface Step1ProfileProps {
  profile: CompanyProfile;
  onUpdateProfile: (updated: CompanyProfile) => void;
  onNext: () => void;
}

export const Step1Profile: React.FC<Step1ProfileProps> = ({
  profile,
  onUpdateProfile,
  onNext
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<CompanyProfile>(profile);
  const [newCapability, setNewCapability] = useState('');

  useEffect(() => {
    setEditedProfile(profile);
    setIsEditing(false);
  }, [profile]);

  const handleToggleRegion = (regionId: string) => {
    const updatedRegions = editedProfile.serviceRegions.map(reg =>
      reg.id === regionId ? { ...reg, active: !reg.active } : reg
    );
    const updated = { ...editedProfile, serviceRegions: updatedRegions };
    setEditedProfile(updated);
    onUpdateProfile(updated);
  };

  const handleAddCapability = () => {
    if (!newCapability.trim()) return;
    const updated = {
      ...editedProfile,
      coreCapabilities: [...editedProfile.coreCapabilities, newCapability.trim()]
    };
    setEditedProfile(updated);
    onUpdateProfile(updated);
    setNewCapability('');
  };

  const handleSave = () => {
    onUpdateProfile(editedProfile);
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Banner / Introduction */}
      <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              Pre-Qualified Nova Scotia SME Procurement Profile
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {profile.name}
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Dartmouth-based marine & civil engineering contractor. BidNova uses this profile to continuously scan 
              <strong> Nova Scotia Tenders</strong>, <strong>Halifax bids&tenders</strong>, and <strong>CanadaBuys</strong>, automatically scoring opportunities against your verified capabilities, regional reach, and past public past performance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-white transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4 text-emerald-400" />
                  <span>Save Changes</span>
                </>
              ) : (
                <>
                  <Edit3 className="w-4 h-4 text-sky-400" />
                  <span>Edit Profile</span>
                </>
              )}
            </button>

            <button
              onClick={onNext}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 transition flex items-center justify-center gap-2 shadow-sm shadow-sky-500/30 cursor-pointer"
            >
              <span>Explore Matched Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Stats Strip */}
        <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-400 block text-[11px]">Nova Scotia Registry</span>
            <span className="font-semibold text-slate-200">RJS Good Standing (#NS-8849201)</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Primary Headquarters</span>
            <span className="font-semibold text-slate-200">Burnside, Dartmouth, NS</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Safety Audit Status</span>
            <span className="font-semibold text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> NSCSA COR™ Certified
            </span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Full-Time Staff</span>
            <span className="font-semibold text-slate-200">{editedProfile.teamSize} Engineers & Techs</span>
          </div>
        </div>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Organization & Certifications */}
        <div className="space-y-6 lg:col-span-1">
          {/* Company Details Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-4">
              <Building2 className="w-4 h-4 text-sky-600" />
              <span>Business Overview</span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-500 block text-[11px] mb-0.5">Legal Operating Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.legalEntity}
                    onChange={e => setEditedProfile({ ...editedProfile, legalEntity: e.target.value })}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs"
                  />
                ) : (
                  <p className="font-medium text-slate-800">{editedProfile.legalEntity}</p>
                )}
              </div>

              <div>
                <label className="text-slate-500 block text-[11px] mb-0.5">Headquarters & Operating Base</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.headquarters}
                    onChange={e => setEditedProfile({ ...editedProfile, headquarters: e.target.value })}
                    className="w-full px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs"
                  />
                ) : (
                  <p className="font-medium text-slate-800">{editedProfile.headquarters}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-500 block text-[11px] mb-0.5">Year Established</label>
                  <p className="font-semibold text-slate-800">{editedProfile.yearEstablished}</p>
                </div>
                <div>
                  <label className="text-slate-500 block text-[11px] mb-0.5">Team Size</label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={editedProfile.teamSize}
                      onChange={e => setEditedProfile({ ...editedProfile, teamSize: parseInt(e.target.value) || 0 })}
                      className="w-full px-2 py-1 border border-slate-300 rounded text-xs"
                    />
                  ) : (
                    <p className="font-semibold text-slate-800">{editedProfile.teamSize} Employees</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Verified Certifications</span>
              </div>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200 font-medium">
                All Current
              </span>
            </div>

            <div className="space-y-3">
              {editedProfile.certifications.map((cert, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-slate-100 bg-slate-50/70 text-xs">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-slate-900">{cert.name}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px]">{cert.issuer}</p>
                  <p className="text-[10px] text-slate-400 mt-1">{cert.expiryOrRenewal}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance & Liability */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs text-xs">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Public Tender Bonding & Insurance</span>
            </div>
            <div className="space-y-2 text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Commercial General Liability:</span>
                <span className="font-semibold text-slate-800">{editedProfile.insuranceCoverage.commercialGeneralLiability}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Professional E&O:</span>
                <span className="font-semibold text-slate-800">{editedProfile.insuranceCoverage.errorsAndOmissions}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Marine Environmental Spill:</span>
                <span className="font-semibold text-slate-800">{editedProfile.insuranceCoverage.environmentalImpairment}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle & Right Column: Capabilities, Regions, Past Performance */}
        <div className="space-y-6 lg:col-span-2">
          {/* Service Regions in Nova Scotia */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>Nova Scotia Service Regions</span>
              </div>
              <span className="text-xs text-slate-400">Click to toggle regional bidding radius</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {editedProfile.serviceRegions.map(reg => (
                <button
                  key={reg.id}
                  onClick={() => handleToggleRegion(reg.id)}
                  className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer flex flex-col justify-between ${
                    reg.active
                      ? 'border-sky-300 bg-sky-50/70 text-sky-950 font-medium'
                      : 'border-slate-200 bg-slate-50 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{reg.name}</span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        reg.active ? 'bg-sky-500' : 'bg-slate-300'
                      }`}
                    />
                  </div>
                  {reg.primaryBase && (
                    <span className="mt-2 text-[10px] font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded w-max">
                      Primary Base (Dartmouth)
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Capabilities & Codes */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Briefcase className="w-4 h-4 text-indigo-600" />
                <span>Core Technical Capabilities</span>
              </div>
              <span className="text-xs text-slate-400">Used for AI tender matching</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {editedProfile.coreCapabilities.map((cap, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-medium flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  {cap}
                </span>
              ))}
            </div>

            {isEditing && (
              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder="Add capability (e.g. Scour Monitoring)..."
                  value={newCapability}
                  onChange={e => setNewCapability(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAddCapability()}
                  className="flex-1 px-3 py-1.5 text-xs border border-slate-300 rounded-lg"
                />
                <button
                  onClick={handleAddCapability}
                  className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700 transition flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Add
                </button>
              </div>
            )}

            {/* NAICS & UNSPSC Procurement Codes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-slate-100">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  NAICS Classifications
                </span>
                <div className="space-y-1">
                  {editedProfile.naicsCodes.map((c, idx) => (
                    <div key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                      <span className="font-mono font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded text-[11px]">
                        {c.code}
                      </span>
                      <span className="truncate">{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  UNSPSC Commodity Codes
                </span>
                <div className="space-y-1">
                  {editedProfile.unspscCodes.map((c, idx) => (
                    <div key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                      <span className="font-mono font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded text-[11px]">
                        {c.code}
                      </span>
                      <span className="truncate">{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Past Public Contracts in Nova Scotia */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <History className="w-4 h-4 text-emerald-600" />
                <span>Past Public Sector Contracts in Nova Scotia (Evidence Library)</span>
              </div>
              <span className="text-xs text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                4 Verified References
              </span>
            </div>

            <div className="space-y-3">
              {editedProfile.pastContracts.map(contract => (
                <div
                  key={contract.id}
                  className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-white transition text-xs space-y-1.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-slate-900 text-sm">{contract.projectName}</span>
                    <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-xs self-start sm:self-auto">
                      {contract.contractValue}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-500 text-[11px]">
                    <span className="font-semibold text-slate-700">{contract.client}</span>
                    <span>&bull;</span>
                    <span>Completed {contract.completionDate}</span>
                    <span>&bull;</span>
                    <span className="px-1.5 py-0.2 rounded bg-sky-100 text-sky-800 font-medium">
                      {contract.relevanceRating} Fit
                    </span>
                  </div>

                  <p className="text-slate-600 text-xs pt-1">{contract.scopeSummary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Next Step Callout */}
          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-bold text-sky-950 text-sm">Ready to scan Nova Scotia tenders?</h3>
              <p className="text-xs text-sky-800">
                We will match this profile against active tenders from HRM, Department of Public Works, Build Nova Scotia, and CanadaBuys.
              </p>
            </div>
            <button
              onClick={onNext}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md shadow-sky-600/20 transition flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>View Matched Opportunities (10)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
