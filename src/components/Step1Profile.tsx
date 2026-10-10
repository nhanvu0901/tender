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
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 text-sky-400 border border-slate-700 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              Dartmouth, NS &bull; Demo
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {profile.name}
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              Review and edit your business profile.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
            <button
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              className="px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4 text-emerald-400" />
                  <span>Save</span>
                </>
              ) : (
                <>
                  <Edit3 className="w-4 h-4 text-sky-400" />
                  <span>Edit</span>
                </>
              )}
            </button>

            <button
              onClick={onNext}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>View tenders</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Stats Strip */}
        <div className="mt-5 pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-slate-400 block text-xs mb-0.5">Registry</span>
            <span className="font-medium text-slate-200">Good standing</span>
          </div>
          <div>
            <span className="text-slate-400 block text-xs mb-0.5">Base</span>
            <span className="font-medium text-slate-200">Burnside, Dartmouth</span>
          </div>
          <div>
            <span className="text-slate-400 block text-xs mb-0.5">Safety</span>
            <span className="font-medium text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> COR&trade; certified
            </span>
          </div>
          <div>
            <span className="text-slate-400 block text-xs mb-0.5">Team</span>
            <span className="font-medium text-slate-200">{editedProfile.teamSize} staff</span>
          </div>
        </div>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Organization & Certifications */}
        <div className="space-y-6 lg:col-span-1">
          {/* Company Details Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-base mb-4">
              <Building2 className="w-4 h-4 text-sky-600" />
              <span>Business details</span>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <label className="text-slate-500 block text-xs mb-1">Legal name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.legalEntity}
                    onChange={e => setEditedProfile({ ...editedProfile, legalEntity: e.target.value })}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-sm"
                  />
                ) : (
                  <p className="font-medium text-slate-900">{editedProfile.legalEntity}</p>
                )}
              </div>

              <div>
                <label className="text-slate-500 block text-xs mb-1">Base</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.headquarters}
                    onChange={e => setEditedProfile({ ...editedProfile, headquarters: e.target.value })}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-sm"
                  />
                ) : (
                  <p className="font-medium text-slate-900">{editedProfile.headquarters}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="text-slate-500 block text-xs mb-1">Established</label>
                  <p className="font-semibold text-slate-900">{editedProfile.yearEstablished}</p>
                </div>
                <div>
                  <label className="text-slate-500 block text-xs mb-1">Team</label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={editedProfile.teamSize}
                      onChange={e => setEditedProfile({ ...editedProfile, teamSize: parseInt(e.target.value) || 0 })}
                      className="w-full px-2.5 py-1 border border-slate-300 rounded-lg text-sm"
                    />
                  ) : (
                    <p className="font-semibold text-slate-900">{editedProfile.teamSize} staff</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-base">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Certifications</span>
              </div>
              <span className="text-xs bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200 font-medium">
                Current
              </span>
            </div>

            <div className="space-y-3">
              {editedProfile.certifications.map((cert, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-semibold text-slate-900">{cert.name}</span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs">{cert.issuer}</p>
                  <p className="text-xs text-slate-400 mt-1">{cert.expiryOrRenewal}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance & Liability */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs text-sm">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-base mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Insurance</span>
            </div>
            <div className="space-y-2 text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>General liability:</span>
                <span className="font-medium text-slate-900">{editedProfile.insuranceCoverage.commercialGeneralLiability}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Professional E&amp;O:</span>
                <span className="font-medium text-slate-900">{editedProfile.insuranceCoverage.errorsAndOmissions}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Marine spill:</span>
                <span className="font-medium text-slate-900">{editedProfile.insuranceCoverage.environmentalImpairment}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle & Right Column: Capabilities, Regions, Past Performance */}
        <div className="space-y-6 lg:col-span-2">
          {/* Service Regions in Nova Scotia */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-base">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>Service regions</span>
              </div>
              <span className="text-xs text-slate-500">Click to toggle.</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {editedProfile.serviceRegions.map(reg => (
                <button
                  key={reg.id}
                  onClick={() => handleToggleRegion(reg.id)}
                  className={`p-3 rounded-xl border text-left text-sm transition cursor-pointer flex flex-col justify-between ${
                    reg.active
                      ? 'border-sky-300 bg-sky-50/70 text-sky-950 font-medium'
                      : 'border-slate-200 bg-slate-50 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{reg.name}</span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        reg.active ? 'bg-sky-500' : 'bg-slate-300'
                      }`}
                    />
                  </div>
                  {reg.primaryBase && (
                    <span className="mt-2 text-xs font-medium text-sky-800 bg-sky-100 px-2 py-0.5 rounded w-max">
                      Base (Dartmouth)
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Capabilities & Codes */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-base">
                <Briefcase className="w-4 h-4 text-indigo-600" />
                <span>Core capabilities</span>
              </div>
              <span className="text-xs text-slate-500">Used for matching.</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {editedProfile.coreCapabilities.map((cap, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-sm font-medium flex items-center gap-2"
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
                  placeholder="Add capability..."
                  value={newCapability}
                  onChange={e => setNewCapability(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAddCapability()}
                  className="flex-1 px-3 py-1.5 text-sm border border-slate-300 rounded-lg"
                />
                <button
                  onClick={handleAddCapability}
                  className="px-3.5 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Add
                </button>
              </div>
            )}

            {/* NAICS & UNSPSC Procurement Codes with tooltips */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-xs font-semibold text-slate-600">
                    NAICS codes
                  </span>
                  <span
                    className="inline-flex items-center cursor-help text-slate-400 hover:text-slate-600"
                    title="Standard industry classification (Statistics Canada)"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="space-y-1.5">
                  {editedProfile.naicsCodes.map((c, idx) => (
                    <div key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="font-mono text-xs font-semibold text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded">
                        {c.code}
                      </span>
                      <span className="truncate">{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-xs font-semibold text-slate-600">
                    UNSPSC codes
                  </span>
                  <span
                    className="inline-flex items-center cursor-help text-slate-400 hover:text-slate-600"
                    title="UN public procurement commodity code"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="space-y-1.5">
                  {editedProfile.unspscCodes.map((c, idx) => (
                    <div key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="font-mono text-xs font-semibold text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded">
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
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-base">
                <History className="w-4 h-4 text-emerald-600" />
                <span>Past contracts</span>
              </div>
              <span className="text-xs text-emerald-800 font-medium bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                4 references
              </span>
            </div>

            <div className="space-y-3">
              {editedProfile.pastContracts.map(contract => (
                <div
                  key={contract.id}
                  className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/60 transition space-y-1.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-semibold text-slate-900 text-sm">{contract.projectName}</span>
                    <span className="font-mono font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-xs self-start sm:self-auto">
                      {contract.contractValue}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <span className="font-medium text-slate-700">{contract.client}</span>
                    <span>&bull;</span>
                    <span>{contract.completionDate}</span>
                    <span>&bull;</span>
                    <span className="px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 font-medium">
                      {contract.relevanceRating}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm pt-1 leading-relaxed line-clamp-2">{contract.scopeSummary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Next Step Callout */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-semibold text-slate-900 text-sm">Next step</h3>
              <p className="text-sm text-slate-600">
                Scan 10 active public tenders.
              </p>
            </div>
            <button
              onClick={onNext}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>View tenders</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
