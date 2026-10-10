export interface PastContract {
  id: string;
  client: string;
  projectName: string;
  contractValue: string;
  completionDate: string;
  scopeSummary: string;
  relevanceRating: 'High' | 'Direct' | 'Moderate';
}

export interface CompanyProfile {
  name: string;
  legalEntity: string;
  headquarters: string;
  yearEstablished: number;
  nsRegistryNumber: string;
  teamSize: number;
  coreCapabilities: string[];
  naicsCodes: { code: string; label: string }[];
  unspscCodes: { code: string; label: string }[];
  certifications: {
    name: string;
    issuer: string;
    status: 'Active' | 'Certified' | 'Good Standing';
    expiryOrRenewal: string;
  }[];
  serviceRegions: {
    id: string;
    name: string;
    active: boolean;
    primaryBase?: boolean;
  }[];
  pastContracts: PastContract[];
  insuranceCoverage: {
    commercialGeneralLiability: string;
    errorsAndOmissions: string;
    environmentalImpairment: string;
  };
}

export interface RequirementItem {
  id: string;
  code: string; // e.g., "M1", "R2"
  type: 'Mandatory' | 'Rated';
  title: string;
  description: string;
  weightOrPoints?: string;
}

export interface ComplianceItem {
  id: string;
  requirementCode: string;
  requirementTitle: string;
  requirementType: 'Mandatory' | 'Rated';
  companyEvidence: string;
  status: 'Met' | 'Partial' | 'Gap';
  actionNeeded: string;
}

export interface ProposalSection {
  id: string;
  title: string;
  summary: string;
  content: string;
}

export interface ProposalDraft {
  executiveSummary: string;
  understandingOfScope: string;
  technicalMethodology: string;
  relevantExperience: string;
  teamResumes: string;
  localEconomicImpact: string;
}

export interface TenderOpportunity {
  id: string;
  tenderNumber: string;
  title: string;
  buyer: string;
  buyerCategory: 'Municipal (HRM)' | 'Provincial (Nova Scotia)' | 'MASH / Health' | 'Federal (NS-located)' | 'Education / CCRCE';
  source: 'Halifax bids&tenders' | 'Nova Scotia Procurement Portal' | 'CanadaBuys' | 'SAP Ariba / NS Health';
  sourcePortalUrl: string;
  portalReferenceName: string;
  closingDate: string;
  daysRemaining: number;
  estimatedValue: string;
  region: string;
  relevanceScore: number;
  recommendation: 'Pursue' | 'Consider' | 'Skip';
  matchReasons: string[];
  summary: string;
  procurementMethod: string;
  keyDates: {
    postedDate: string;
    questionDeadline: string;
    closingDate: string;
    anticipatedAward: string;
  };
  bidRationale: {
    verdict: 'STRONG PURSUE' | 'CONDITIONAL PURSUE' | 'HIGH RISK / SKIP';
    winProbability: number;
    strategicValue: string;
    strengths: string[];
    risksAndMitigation: string[];
  };
  requirements: RequirementItem[];
  complianceMatrix: ComplianceItem[];
  proposalDraft: ProposalDraft;
}

export interface VerifiedSource {
  name: string;
  shortName: string;
  url: string;
  managedBy: string;
  description: string;
  relevanceToSMEs: string;
  legalContext: string;
}
