import { CompanyProfile } from '../types/procurement';

export const INITIAL_COMPANY_PROFILE: CompanyProfile = {
  name: 'Atlantic Coastal Civil & Marine Ltd.',
  legalEntity: 'ACCM Engineering & Marine Contracting Inc.',
  headquarters: '14 Wright Avenue, Burnside Business Park, Dartmouth, NS B3B 1G9',
  yearEstablished: 2011,
  nsRegistryNumber: 'NS-8849201 (Registry of Joint Stocks — Good Standing)',
  teamSize: 28,
  coreCapabilities: [
    'Marine Geotechnical & Bathymetric Sonar Surveys',
    'Tidal Seawall, Bulkhead & Wave Attenuator Rehabilitation',
    'Underwater Non-Destructive Structural Concrete & Steel Testing',
    'Wharf Berthing Dolphin Restoration & Fender Installation',
    'Coastal Storm Surge Erosion Mitigation & Climate Resilience',
    'Cathodic Protection & Subsea Pile Jacketing'
  ],
  naicsCodes: [
    { code: '237990', label: 'Other Heavy and Civil Engineering Construction (Marine Infrastructure)' },
    { code: '541330', label: 'Engineering Services (Coastal & Civil Structural Consulting)' },
    { code: '541370', label: 'Surveying and Mapping (Hydrographic & Bathymetric Sonar)' }
  ],
  unspscCodes: [
    { code: '72141512', label: 'Marine and Coastal Engineering and Construction' },
    { code: '81101500', label: 'Civil and Structural Engineering Consulting Services' },
    { code: '72152707', label: 'Concrete Restoration and Underwater Grouting Services' }
  ],
  certifications: [
    {
      name: 'COR™ Safety Certification',
      issuer: 'Nova Scotia Construction Safety Association (NSCSA)',
      status: 'Certified',
      expiryOrRenewal: 'Valid through Nov 2027 (Annual Audit Compliant)'
    },
    {
      name: 'ISO 9001:2015 Quality Management',
      issuer: 'BSI Group Canada',
      status: 'Active',
      expiryOrRenewal: 'Valid through Aug 2027'
    },
    {
      name: 'Certificate of Authorization (COA)',
      issuer: 'Engineers Nova Scotia (APENS #2019-0412)',
      status: 'Good Standing',
      expiryOrRenewal: 'Annual Active Practicing License'
    },
    {
      name: 'Designated Organization Screening (DOS)',
      issuer: 'Public Services and Procurement Canada (PSPC / CISD)',
      status: 'Active',
      expiryOrRenewal: 'Reliability Status for key personnel'
    },
    {
      name: 'Nova Scotia Business Registry (RJS)',
      issuer: 'Service Nova Scotia',
      status: 'Good Standing',
      expiryOrRenewal: 'Active Corporation #3329188'
    }
  ],
  serviceRegions: [
    { id: 'hrm', name: 'Halifax Regional Municipality (HRM)', active: true, primaryBase: true },
    { id: 'south-shore', name: 'South Shore (Lunenburg, Shelburne, Queens)', active: true },
    { id: 'annapolis-valley', name: 'Annapolis Valley (Kings, Annapolis, Digby)', active: true },
    { id: 'cape-breton', name: 'Cape Breton (CBRM, Richmond, Inverness)', active: true },
    { id: 'northern-ns', name: 'Northern NS (Pictou, Colchester, Antigonish)', active: true }
  ],
  pastContracts: [
    {
      id: 'past-1',
      client: 'Halifax Regional Municipality (HRM) — Transit & Infrastructure',
      projectName: 'Dartmouth Ferry Terminal Berthing Dolphin Structural Assessment & Concrete Remediation',
      contractValue: '$420,000 CAD',
      completionDate: 'October 2024',
      scopeSummary: 'Underwater ultrasonic thickness gauge inspection of marine steel pilings, crack injection repair, and installation of sacrificial zinc anode cathodic arrays.',
      relevanceRating: 'Direct'
    },
    {
      id: 'past-2',
      client: 'Build Nova Scotia (Waterfront Development)',
      projectName: 'Lunenburg Historic Foundry Wharf Wave Attenuator & Seawall Upgrade',
      contractValue: '$890,000 CAD',
      completionDate: 'June 2024',
      scopeSummary: 'Engineered armour stone placement, tidal rip-rap stabilization, timber cribbing reinforcement, and multi-beam bathymetric monitoring in high-surge tidal zones.',
      relevanceRating: 'Direct'
    },
    {
      id: 'past-3',
      client: 'Nova Scotia Department of Public Works (DPW)',
      projectName: 'Sheet Harbour Small Craft Mooring Facility Geotechnical & Marine Survey',
      contractValue: '$185,000 CAD',
      completionDate: 'November 2023',
      scopeSummary: 'Sub-bottom acoustic profiling, diver-assisted coring, and marine hazard reporting to support provincial small craft harbour expansion.',
      relevanceRating: 'High'
    },
    {
      id: 'past-4',
      client: 'Fisheries and Oceans Canada (DFO / Small Craft Harbours)',
      projectName: 'Eastern Passage Fisherman’s Cove Breakwater Structural Integrity Audit',
      contractValue: '$260,000 CAD',
      completionDate: 'March 2023',
      scopeSummary: 'Comprehensive 3D laser scan and diver inspection of concrete capping and submarine toe-wall erosion post-Hurricane Fiona.',
      relevanceRating: 'High'
    }
  ],
  insuranceCoverage: {
    commercialGeneralLiability: '$10,000,000 CAD (Per Occurrence)',
    errorsAndOmissions: '$5,000,000 CAD (Professional Liability)',
    environmentalImpairment: '$5,000,000 CAD (Marine Pollution & Spill)'
  }
};
