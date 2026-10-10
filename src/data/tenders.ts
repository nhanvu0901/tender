import { TenderOpportunity } from '../types/procurement';

export const DUMMY_TENDERS: TenderOpportunity[] = [
  {
    id: 'tender-1',
    tenderNumber: 'HRM-2026-RFP-0842',
    title: 'North West Arm Coastal Seawall Inspection & Climate Resilience Upgrades',
    buyer: 'Halifax Regional Municipality (HRM) — Public Works & Waterfront Infrastructure',
    buyerCategory: 'Municipal (HRM)',
    source: 'Halifax bids&tenders',
    sourcePortalUrl: 'https://halifax.bidsandtenders.ca/Module/Tenders/en',
    portalReferenceName: 'HRM bids&tenders™ Portal (Ref #2026-0842-SEAWALL)',
    closingDate: 'November 14, 2026 — 2:00 PM AST',
    daysRemaining: 24,
    estimatedValue: '$650,000 – $800,000 CAD',
    region: 'Halifax Regional Municipality (HRM)',
    relevanceScore: 96,
    recommendation: 'Pursue',
    matchReasons: [
      '100% core capability match: Tidal seawall rehabilitation, bathymetric sonar & concrete coring.',
      'Active NSCSA COR™ Safety Certification directly satisfies Mandatory Requirement M1.',
      'Recent direct past performance on HRM Dartmouth Ferry Wharf (completed Oct 2024 with exemplary rating).',
      'HQ in Burnside, Dartmouth easily satisfies the mandatory 60-minute emergency site mobilization clause.'
    ],
    summary: 'The Halifax Regional Municipality requires consulting engineering and marine contracting services to conduct comprehensive non-destructive structural condition assessments, multi-beam sonar bathymetry, and engineered climate-resilience upgrades along 1.8 km of municipal shoreline seawall bordering the North West Arm.',
    procurementMethod: 'Request for Proposals (Two-Envelope: Technical 70% / Cost 30%)',
    keyDates: {
      postedDate: 'October 1, 2026',
      questionDeadline: 'October 30, 2026 — 4:00 PM AST',
      closingDate: 'November 14, 2026 — 2:00 PM AST',
      anticipatedAward: 'December 8, 2026'
    },
    bidRationale: {
      verdict: 'STRONG PURSUE',
      winProbability: 88,
      strategicValue: 'High margin municipal civil contract ($650k-$800k) that establishes ACCM as HRM’s leading climate-adaptation coastal engineering partner.',
      strengths: [
        'Incumbent knowledge: Executed similar structural work on HRM marine facilities in 2024.',
        'Zero subcontractor dependency for dive inspections and multi-beam survey.',
        'High compliance readiness: 100% of mandatory requirements pre-met in company profile.',
        'Local HRM Social Value bonus points achievable through local labour and apprenticeship commitments.'
      ],
      risksAndMitigation: [
        'Risk: Weather/tidal surge delays during late autumn Halifax Harbour storms. Mitigation: Propose dual-shift tidal window scheduling utilizing our mobile Dartmouth marine barge.',
        'Risk: Strict public trail disruption limitations along Point Pleasant Park / Arm. Mitigation: Include low-impact barge-side acoustic surveying and quiet hydro-demolition in technical plan.'
      ]
    },
    requirements: [
      {
        id: 'req-1',
        code: 'M1',
        type: 'Mandatory',
        title: 'Safety Certification (COR™)',
        description: 'Bidder must possess a valid Certificate of Recognition (COR™) from the Nova Scotia Construction Safety Association (NSCSA) or provincial equivalent at the time of bid closing.'
      },
      {
        id: 'req-2',
        code: 'M2',
        type: 'Mandatory',
        title: 'Engineering Licensure & Certificate of Authorization',
        description: 'Project Lead must be a Professional Engineer (P.Eng.) licensed in good standing with Engineers Nova Scotia (APENS), and firm must hold a valid corporate Certificate of Authorization (COA).'
      },
      {
        id: 'req-3',
        code: 'M3',
        type: 'Mandatory',
        title: 'Commercial Diving & Marine Survey Standard Compliance',
        description: 'All underwater diving assessments must strictly adhere to CSA Z275.2 (Occupational Safety Code for Diving Operations) and Nova Scotia Occupational Health and Safety Diving Regulations.'
      },
      {
        id: 'req-4',
        code: 'M4',
        type: 'Mandatory',
        title: 'Minimum Insurance & Indemnification Limits',
        description: 'Evidence of $10,000,000 CAD Commercial General Liability, $5,000,000 CAD Professional Errors & Omissions, and $5,000,000 CAD Marine Environmental Pollution coverage.'
      },
      {
        id: 'req-5',
        code: 'R1',
        type: 'Rated',
        title: 'Relevant Coastal Engineering Past Performance',
        description: 'Demonstrated experience on at least three (3) similar marine/coastal retaining structure assessments in Atlantic Canada tidal environments within the last five years.',
        weightOrPoints: '30 Points (Minimum threshold: 24/30)'
      },
      {
        id: 'req-6',
        code: 'R2',
        type: 'Rated',
        title: 'Technical Methodology & Climate Resiliency Framework',
        description: 'Comprehensiveness of proposed non-destructive concrete evaluation, 3D LiDAR/Sonar fusion, and modeled 50-year sea-level rise projections for Halifax Harbour.',
        weightOrPoints: '25 Points'
      },
      {
        id: 'req-7',
        code: 'R3',
        type: 'Rated',
        title: 'Proposed Key Personnel & Field Readiness',
        description: 'Qualifications and local availability of Coastal Geotechnical Engineer, CSA-certified Diving Supervisor, and Hydrographic Survey Lead.',
        weightOrPoints: '15 Points'
      },
      {
        id: 'req-8',
        code: 'R4',
        type: 'Rated',
        title: 'HRM Social Value & Community Benefits Plan',
        description: 'Demonstrated commitments to local Nova Scotia employment, living wages, environmental carbon minimization, and supplier diversity.',
        weightOrPoints: '10 Points'
      }
    ],
    complianceMatrix: [
      {
        id: 'cm-1',
        requirementCode: 'M1',
        requirementTitle: 'Safety Certification (COR™)',
        requirementType: 'Mandatory',
        companyEvidence: 'ACCM holds NSCSA COR™ Certification (Audit score 94%, valid through Nov 2027). Safety manual updated to NS OHS 2026 revisions.',
        status: 'Met',
        actionNeeded: 'Attach Letter of Good Standing and NSCSA COR certificate copy to Envelope A.'
      },
      {
        id: 'cm-2',
        requirementCode: 'M2',
        requirementTitle: 'Engineers Nova Scotia COA & P.Eng. Lead',
        requirementType: 'Mandatory',
        companyEvidence: 'Engineers Nova Scotia Certificate of Authorization #2019-0412. Senior Coastal Principal David Tremblay, P.Eng. (APENS #10842) assigned as Lead.',
        status: 'Met',
        actionNeeded: 'Include APENS seal on Proposal Submission and attach Certificate of Authorization.'
      },
      {
        id: 'cm-3',
        requirementCode: 'M3',
        requirementTitle: 'CSA Z275.2 Diving Safety Compliance',
        requirementType: 'Mandatory',
        companyEvidence: 'In-house certified DCBC commercial dive team with dedicated 4-person dive spread meeting CSA Z275.2 & NS OHS diving guidelines.',
        status: 'Met',
        actionNeeded: 'Append ACCM Dive Safety Plan and DCBC Diver Log verification to technical annex.'
      },
      {
        id: 'cm-4',
        requirementCode: 'M4',
        requirementTitle: '$10M CGL & $5M Professional Insurance',
        requirementType: 'Mandatory',
        companyEvidence: 'Broker certificate from Intact Insurance confirms $10M CGL, $5M E&O, and $5M Marine Pollution coverage in full force.',
        status: 'Met',
        actionNeeded: 'Request formal Certificate of Insurance naming Halifax Regional Municipality as additional insured upon notice of intent.'
      },
      {
        id: 'cm-5',
        requirementCode: 'R1',
        requirementTitle: 'Past Performance in Atlantic Tidal Environments (30 pts)',
        requirementType: 'Rated',
        companyEvidence: 'Directly supported by Past Contracts: Dartmouth Ferry Terminal ($420k, HRM), Lunenburg Historic Wharf ($890k, Build NS), and Sheet Harbour Survey ($185k, DPW).',
        status: 'Met',
        actionNeeded: 'Cross-reference HRM client contacts (Transit & Public Works) for rapid reference confirmation.'
      },
      {
        id: 'cm-6',
        requirementCode: 'R2',
        requirementTitle: 'Methodology & Climate Resiliency Modeling (25 pts)',
        requirementType: 'Rated',
        companyEvidence: 'Proprietary Dual-Acoustic Sonar inspection method combined with Halifax Harbour 2050 extreme water level datum analysis from Dalhousie/NRCan models.',
        status: 'Met',
        actionNeeded: 'Include sample high-resolution 3D bathymetric mesh rendering from Lunenburg project to showcase data clarity.'
      },
      {
        id: 'cm-7',
        requirementCode: 'R3',
        requirementTitle: 'Key Personnel & Field Mobilization (15 pts)',
        requirementType: 'Rated',
        companyEvidence: 'All 4 proposed key personnel reside within HRM (Dartmouth, Bedford, Halifax South). Rapid response vessel berthed at Shearwater Marina.',
        status: 'Met',
        actionNeeded: 'Format resumes into 2-page HRM standard format highlighting Nova Scotia coastal infrastructure experience.'
      },
      {
        id: 'cm-8',
        requirementCode: 'R4',
        requirementTitle: 'HRM Social Value & Community Benefits Plan (10 pts)',
        requirementType: 'Rated',
        companyEvidence: '100% Nova Scotia workforce; living wage certified employer; active mentor in NSCC Dartmouth Marine Geomatics co-op program.',
        status: 'Partial',
        actionNeeded: 'Formalize 1-page Social Value Commitment declaring 1 paid NSCC geomatics co-op student placement during the field phase.'
      }
    ],
    proposalDraft: {
      executiveSummary: `Atlantic Coastal Civil & Marine Ltd. (ACCM) is pleased to submit this proposal to the Halifax Regional Municipality for the North West Arm Coastal Seawall Inspection & Climate Resilience Upgrades (RFP-0842). 

As a Dartmouth-headquartered coastal engineering SME with 28 marine specialists, ACCM brings an exceptional combination of local tidal familiarity, turnkey in-house marine diving inspection assets, and proven success on recent municipal waterfront assets—including our 2024 Dartmouth Ferry Terminal Berthing Dolphin remediation. 

Our team holds active NSCSA COR™ safety certification, an Engineers Nova Scotia Certificate of Authorization, and maintains a dedicated marine survey vessel in Halifax Harbour. We propose an agile 5-phase work plan that delivers sub-centimeter 3D bathymetric mapping, non-destructive concrete integrity forensics, and practical 50-year climate-resilient reinforcement designs tailored to Halifax Harbour's unique hydrodynamic surges.`,
      understandingOfScope: `The North West Arm is one of HRM’s most culturally cherished yet vulnerable maritime corridors, subjected to intensified tidal scouring, accelerating freeze-thaw degradation, and frequent severe weather surges (such as Post-Tropical Cyclone Fiona). 

HRM requires not merely an inventory of visible defects, but an authoritative, risk-indexed structural baseline across the 1.8 km municipal seawall alignment. Key technical hurdles include operating within a narrow navigation channel, coordinating inspections around extreme semi-diurnal tides, and safeguarding public trail continuity. 

ACCM’s understanding encompasses both the subsurface marine geotechnical reality and the municipal necessity for defensible capital asset prioritization aligned with HalifACT 2050 climate goals.`,
      technicalMethodology: `Our technical execution is structured into four integrated phases:

1. High-Resolution Hydrographic & Terrestrial Survey: Deployment of our Norbit iWBMS high-density multibeam echosounder fused with RTK mobile LiDAR to create a unified 3D point cloud of the submarine toe-wall and subaerial retaining structures.
2. In-Situ Non-Destructive Structural Diagnostics: DCBC-certified commercial dive team conducting ultrasonic steel thickness measurements, rebound hammer testing, underwater video logs, and selective diamond-coring for chloride penetration lab assays.
3. Hydrodynamic & Sea-Level Rise Vulnerability Analysis: Hydrodynamic wave overtopping simulations calibrated against NRCan/Dalhousie 2050/2100 high-tide projections, accounting for storm surge allowances.
4. Engineered Rehabilitation & Capital Prioritization Matrix: Prioritized intervention packages (Short-Term stabilization, Medium-Term cathodic protection/grouting, Long-Term crest elevation raising) with tender-ready cost estimates (Class B/A).`,
      relevantExperience: `ACCM offers direct, unassailable past performance on Nova Scotia public sector marine assets:

• HRM Dartmouth Ferry Terminal Berthing Remediations (2024, $420,000): Comprehensive underwater inspection and structural grouting completed 3 weeks ahead of schedule with zero safety incidents. Reference: HRM Transit Infrastructure Planning.
• Build Nova Scotia — Lunenburg Historic Foundry Wharf Wave Attenuator (2024, $890,000): Engineered armour stone placement and tidal scour mitigation under harsh North Atlantic exposure. Reference: Build Nova Scotia Project Management Office.
• NS Department of Public Works — Sheet Harbour Mooring Facility (2023, $185,000): Sub-bottom acoustic surveying and diver geotechnical coring for provincial harbour expansion.`,
      teamResumes: `• Project Principal & Lead Coastal Engineer: David Tremblay, M.A.Sc., P.Eng. (Engineers Nova Scotia #10842). 18 years specializing in Atlantic Canada coastal retaining walls, breakwaters, and harbor infrastructure.
• Marine Survey & Hydrographics Lead: Sarah MacDonald, B.Sc., CLS / C-NS. 12 years in multibeam sonar bathymetry and GIS spatial risk modeling.
• Dive Operations Supervisor: Marc Bourque, DCBC Supervisor & NSCSA Safety Officer. Over 2,500 logged inspection dives across Halifax Harbour and Minas Basin.
• Coastal Climate Adaptation Specialist: Dr. Elena Fraser, P.Eng. Expert in HalifACT coastal storm surge simulations and resilient materials.`,
      localEconomicImpact: `In accordance with the HRM Social Value Procurement Framework, ACCM confirms:
• 100% Local Nova Scotia Workforce: All field personnel and project management will be executed from our Burnside, Dartmouth facility.
• Community Apprenticeship: Sponsoring one (1) paid NSCC Dartmouth Marine Geomatics student co-op position for the survey duration.
• Environmental Stewardship: Low-emission hybrid electric survey vessel mobilization, zero in-water contaminant discharge, and adherence to DFO marine mammal observation protocols.`
    }
  },
  {
    id: 'tender-2',
    tenderNumber: 'NSDPW-2026-T-0419',
    title: 'Port Hawkesbury Deepwater Pier Timber Piling Assessment & Cathodic Protection',
    buyer: 'Nova Scotia Department of Public Works (DPW) — Highway & Marine Division',
    buyerCategory: 'Provincial (Nova Scotia)',
    source: 'Nova Scotia Procurement Portal',
    sourcePortalUrl: 'https://procurement-portal.novascotia.ca/tenders',
    portalReferenceName: 'NS Tenders Portal (Notice #DPW-2026-T-0419)',
    closingDate: 'November 20, 2026 — 2:00 PM AST',
    daysRemaining: 30,
    estimatedValue: '$340,000 – $410,000 CAD',
    region: 'Cape Breton (CBRM, Richmond, Inverness)',
    relevanceScore: 88,
    recommendation: 'Pursue',
    matchReasons: [
      'Strong capability match: Timber piling condition inspection, ultrasonic testing, and sacrificial anode installation.',
      'Active Cape Breton service region defined in ACCM company profile.',
      'Previous provincial DPW contract (Sheet Harbour) provides high past-performance credibility.'
    ],
    summary: 'The Department of Public Works requires specialized underwater inspection, structural timber piling residual capacity assessment, and cathodic protection system replacement at the provincial deepwater marine facility in the Strait of Canso.',
    procurementMethod: 'Invitation to Tender (Public Low-Bid Compliant / Technical Pass-Fail)',
    keyDates: {
      postedDate: 'October 3, 2026',
      questionDeadline: 'November 5, 2026 — 4:00 PM AST',
      closingDate: 'November 20, 2026 — 2:00 PM AST',
      anticipatedAward: 'December 12, 2026'
    },
    bidRationale: {
      verdict: 'STRONG PURSUE',
      winProbability: 82,
      strategicValue: 'Expands ACCM provincial DPW standing offers into the Strait of Canso industrial marine corridor.',
      strengths: [
        'Turnkey diver inspection spread with ultrasonic pile thickness gauge.',
        'Established logistics route between Dartmouth and Port Hawkesbury.',
        'Existing COR safety certification guarantees pass on mandatory safety audit.'
      ],
      risksAndMitigation: [
        'Risk: Rapid tidal currents in Strait of Canso. Mitigation: Restrict diving operations to calculated slack-water intervals using our real-time acoustic Doppler current profiler (ADCP).'
      ]
    },
    requirements: [
      { id: 't2-req-1', code: 'M1', type: 'Mandatory', title: 'NSCSA COR™ Safety Certification', description: 'Active COR™ certification recognized by WorkSafe / NSCSA.' },
      { id: 't2-req-2', code: 'M2', type: 'Mandatory', title: 'Engineers Nova Scotia P.Eng. Stamp', description: 'Inspection report must be stamped by a registered Nova Scotia Professional Engineer.' },
      { id: 't2-req-3', code: 'R1', type: 'Rated', title: 'Marine Timber Piling Inspection Experience', description: 'Proven track record evaluating creosote and salt-water timber marine pilings.', weightOrPoints: '40 Points' },
      { id: 't2-req-4', code: 'R2', type: 'Rated', title: 'Cathodic Protection Design Capability', description: 'Experience designing sacrificial anode systems for Atlantic marine structures.', weightOrPoints: '35 Points' }
    ],
    complianceMatrix: [
      { id: 't2-cm-1', requirementCode: 'M1', requirementTitle: 'COR™ Safety Certification', requirementType: 'Mandatory', companyEvidence: 'ACCM holds active NSCSA COR™ Certification through Nov 2027.', status: 'Met', actionNeeded: 'Attach certificate to bid package.' },
      { id: 't2-cm-2', requirementCode: 'M2', requirementTitle: 'Engineers Nova Scotia P.Eng. Stamp', requirementType: 'Mandatory', companyEvidence: 'Lead Civil/Marine Engineer holds active APENS license #10842.', status: 'Met', actionNeeded: 'Confirm seal authorization on submission.' },
      { id: 't2-cm-3', requirementCode: 'R1', requirementTitle: 'Timber Piling Experience', requirementType: 'Rated', companyEvidence: 'Build NS Lunenburg Wharf project included inspection of 120 historic marine timber piles.', status: 'Met', actionNeeded: 'Detail Lunenburg timber pile core sampling in proposal section.' },
      { id: 't2-cm-4', requirementCode: 'R2', requirementTitle: 'Cathodic Protection Design', requirementType: 'Rated', companyEvidence: 'Completed zinc sacrificial anode array design on HRM Dartmouth ferry terminal.', status: 'Met', actionNeeded: 'Include Dartmouth anode layout schematics as proof of methodology.' }
    ],
    proposalDraft: {
      executiveSummary: 'Atlantic Coastal Civil & Marine Ltd. (ACCM) submits this tender for the Port Hawkesbury Deepwater Pier Assessment & Cathodic Protection. With our proven track record with the Department of Public Works and comprehensive underwater inspection team, we offer prompt mobilization to the Strait of Canso and rigorous engineering deliverables.',
      understandingOfScope: 'The Strait of Canso deepwater environment presents intense hydrodynamic forces and saline exposure that accelerate timber decay and galvanic corrosion on steel fixtures. ACCM will execute high-accuracy non-destructive testing and provide stamped load capacity evaluations.',
      technicalMethodology: 'Phase 1: Diver acoustic coring and timber density assessment. Phase 2: Steel cross-section ultrasonic measurement. Phase 3: Replacement of sacrificial zinc anodes and stamped engineering condition report.',
      relevantExperience: 'Demonstrated through our 2024 Lunenburg Wharf timber cribbing audit and Dartmouth Ferry Terminal cathodic protection installations.',
      teamResumes: 'Lead Engineer: David Tremblay, P.Eng. Dive Supervisor: Marc Bourque (DCBC certified).',
      localEconomicImpact: 'ACCM will base field personnel in Port Hawkesbury for the duration of the work, procuring marine hardware and support vessels from local Cape Breton suppliers.'
    }
  },
  {
    id: 'tender-3',
    tenderNumber: 'CB-2026-NS-7712',
    title: 'DFO Shearwater Jetty 9 Underwater Acoustic Survey & Subsea Cable Route Baseline',
    buyer: 'Fisheries and Oceans Canada (DFO / Canadian Coast Guard) via CanadaBuys',
    buyerCategory: 'Federal (NS-located)',
    source: 'CanadaBuys',
    sourcePortalUrl: 'https://canadabuys.canada.ca/en',
    portalReferenceName: 'CanadaBuys Federal Notice (Solicitation #F5211-26-7712)',
    closingDate: 'November 27, 2026 — 2:00 PM EST',
    daysRemaining: 37,
    estimatedValue: '$210,000 – $280,000 CAD',
    region: 'Halifax Regional Municipality (HRM)',
    relevanceScore: 82,
    recommendation: 'Consider',
    matchReasons: [
      'High technical alignment with ACCM hydrographic multibeam and sub-bottom acoustic profiling equipment.',
      'Headquarters within 15 minutes of CFB Shearwater waterfront jetty.',
      'PSPC Designated Organization Screening (DOS) clearance satisfies federal security provisions.'
    ],
    summary: 'Fisheries and Oceans Canada requires detailed side-scan sonar, multibeam bathymetry, and sub-bottom profiling along Halifax Harbour approaches to Jetty 9 at Shearwater to support submarine cable replacement.',
    procurementMethod: 'Competitive Federal RFP via CanadaBuys / Ariba',
    keyDates: {
      postedDate: 'October 5, 2026',
      questionDeadline: 'November 12, 2026',
      closingDate: 'November 27, 2026',
      anticipatedAward: 'December 20, 2026'
    },
    bidRationale: {
      verdict: 'CONDITIONAL PURSUE',
      winProbability: 75,
      strategicValue: 'Strengthens federal supply arrangement standing with DFO and PSPC in Atlantic Canada.',
      strengths: [
        'In-house high-frequency chirp sub-bottom profiler.',
        'DOS reliability cleared personnel ready for military jetty access.',
        'Zero travel overhead.'
      ],
      risksAndMitigation: [
        'Risk: Federal contracting terms require extensive CanadaBuys supplier registry paperwork. Mitigation: ACCM is already fully registered with Procurement Business Number (PBN).'
      ]
    },
    requirements: [
      { id: 't3-req-1', code: 'M1', type: 'Mandatory', title: 'Federal Security Clearance (DOS)', description: 'Company must hold valid PSPC DOS clearance with personnel at Reliability Status.' },
      { id: 't3-req-2', code: 'M2', type: 'Mandatory', title: 'CHS-Compliant Hydrographic Standards', description: 'Surveys must meet Canadian Hydrographic Service (CHS) Order 1a standard.' },
      { id: 't3-req-3', code: 'R1', type: 'Rated', title: 'Sub-bottom Profiling Experience', description: 'Proven marine geophysics experience mapping shallow bedrock and boulder fields.', weightOrPoints: '30 Points' }
    ],
    complianceMatrix: [
      { id: 't3-cm-1', requirementCode: 'M1', requirementTitle: 'Federal DOS Security Clearance', requirementType: 'Mandatory', companyEvidence: 'ACCM holds active PSPC DOS clearance (Reliability status).', status: 'Met', actionNeeded: 'Submit CISD clearance letter with bid.' },
      { id: 't3-cm-2', requirementCode: 'M2', requirementTitle: 'CHS Order 1a Hydrographic Standard', requirementType: 'Mandatory', companyEvidence: 'Hydrographic lead Sarah MacDonald is certified and equipped with calibrated multibeam system.', status: 'Met', actionNeeded: 'Include equipment calibration certificates in technical response.' },
      { id: 't3-cm-3', requirementCode: 'R1', requirementTitle: 'Sub-bottom Profiling Experience', requirementType: 'Rated', companyEvidence: 'Sheet Harbour contract included 15 km of chirp sub-bottom acoustic profiles.', status: 'Met', actionNeeded: 'Showcase sample seismic cross-sections from past DFO work.' }
    ],
    proposalDraft: {
      executiveSummary: 'Atlantic Coastal Civil & Marine Ltd. (ACCM) submits this proposal for the DFO Shearwater Jetty 9 Acoustic Survey. As a local Dartmouth SME located minutes from the site with federal DOS reliability security clearance, we deliver turn-key CHS Order 1a survey data.',
      understandingOfScope: 'Precise route engineering for submarine power and telemetry cables requires high-density detection of submerged seabed hazards, bedrock outcrops, and historic harbor debris.',
      technicalMethodology: 'Simultaneous acquisition of multibeam bathymetry, side-scan sonar, and sub-bottom acoustic chirp profiler data from our dedicated survey launch.',
      relevantExperience: 'Validated through DFO Eastern Passage breakwater audit (2023) and Sheet Harbour mooring survey (2023).',
      teamResumes: 'Sarah MacDonald (Hydrographic Lead), David Tremblay (P.Eng. Reviewer).',
      localEconomicImpact: '100% Atlantic Canadian execution with local Dartmouth vessel operations.'
    }
  },
  {
    id: 'tender-4',
    tenderNumber: 'NSH-2026-RFP-0193',
    title: 'QEII Health Sciences Centre Foundation Stabilization & Stormwater Runoff Mitigation',
    buyer: 'Nova Scotia Health Authority (NSHA) — Capital Infrastructure Branch',
    buyerCategory: 'MASH / Health',
    source: 'SAP Ariba / NS Health',
    sourcePortalUrl: 'https://procurement-portal.novascotia.ca/tenders',
    portalReferenceName: 'NS Health Tender (Ariba Event #WS-449102-NSH)',
    closingDate: 'December 4, 2026 — 2:00 PM AST',
    daysRemaining: 44,
    estimatedValue: '$1,100,000 – $1,350,000 CAD',
    region: 'Halifax Regional Municipality (HRM)',
    relevanceScore: 74,
    recommendation: 'Consider',
    matchReasons: [
      'Civil geotechnical and retaining wall capabilities overlap with hospital perimeter foundation requirements.',
      'High contract value ($1.2M) within HRM boundary.',
      'Partial gap: Hospital campus site requires specialized sub-grade underpinning and vibration controls.'
    ],
    summary: 'Nova Scotia Health requires specialized geotechnical engineering and civil contracting to design and install retaining wall tie-backs, deep slope micro-piling, and stormwater detention upgrades adjacent to the Halifax Infirmary complex.',
    procurementMethod: 'Two-stage RFP via SAP Ariba / Nova Scotia Tenders',
    keyDates: {
      postedDate: 'October 8, 2026',
      questionDeadline: 'November 18, 2026',
      closingDate: 'December 4, 2026',
      anticipatedAward: 'January 15, 2027'
    },
    bidRationale: {
      verdict: 'CONDITIONAL PURSUE',
      winProbability: 65,
      strategicValue: 'Pre-qualifies ACCM for larger Nova Scotia Health multi-year campus redevelopment projects.',
      strengths: [
        'Geotechnical retaining wall stabilization experience.',
        'COR safety certification satisfies strict healthcare infection control site standards.'
      ],
      risksAndMitigation: [
        'Risk: Specialized micro-piling drilling equipment may require partnering with local drilling subcontractor. Mitigation: Form joint-venture or subcontract agreement with Dartmouth-based foundation specialists.'
      ]
    },
    requirements: [
      { id: 't4-req-1', code: 'M1', type: 'Mandatory', title: 'NSCSA COR™ Safety & Infection Control', description: 'Active COR™ and adherence to CSA Z317.13 Infection Control during construction.' },
      { id: 't4-req-2', code: 'M2', type: 'Mandatory', title: 'Engineers NS Geotechnical Certification', description: 'Design deliverables stamped by an APENS registered Geotechnical Engineer.' },
      { id: 't4-req-3', code: 'R1', type: 'Rated', title: 'Deep Excavation Stabilization Track Record', description: 'Documented experience in high-density urban retaining wall stabilization.', weightOrPoints: '35 Points' }
    ],
    complianceMatrix: [
      { id: 't4-cm-1', requirementCode: 'M1', requirementTitle: 'COR™ & Infection Control', requirementType: 'Mandatory', companyEvidence: 'COR™ certified; safety manager holds CSA Z317.13 healthcare construction certificate.', status: 'Met', actionNeeded: 'Submit proof of healthcare infection training.' },
      { id: 't4-cm-2', requirementCode: 'M2', requirementTitle: 'Geotechnical P.Eng.', requirementType: 'Mandatory', companyEvidence: 'Senior Geotechnical Engineer holds active APENS license.', status: 'Met', actionNeeded: 'Provide engineer CV and seal confirmation.' },
      { id: 't4-cm-3', requirementCode: 'R1', requirementTitle: 'Urban Deep Excavation', requirementType: 'Rated', companyEvidence: 'Extensive tidal seawall retaining wall experience; partial gap in high-density hospital vibration mitigation.', status: 'Partial', actionNeeded: 'Partner with local acoustic vibration monitoring specialist to close gap.' }
    ],
    proposalDraft: {
      executiveSummary: 'Atlantic Coastal Civil & Marine Ltd. proposes an engineered foundation stabilization program for the QEII Health Sciences Centre, leveraging our geotechnical retention expertise and safety leadership.',
      understandingOfScope: 'Ensuring zero acoustic/vibration impact on sensitive clinical surgical equipment while executing essential slope retaining reinforcements.',
      technicalMethodology: 'Low-vibration micro-piling, pre-stressed rock anchors, and real-time seismograph telemetry monitoring.',
      relevantExperience: 'Tidal retaining wall tie-back execution on Lunenburg historic waterfront.',
      teamResumes: 'David Tremblay (Geotechnical Lead), Elena Fraser (Structural Risk Modeler).',
      localEconomicImpact: 'Direct local Halifax labour with 100% provincial material sourcing.'
    }
  },
  {
    id: 'tender-5',
    tenderNumber: 'BNS-2026-RFP-0551',
    title: 'Peggy’s Cove Coastal Infrastructure Boardwalk & Rock Face Geotechnical Monitoring',
    buyer: 'Build Nova Scotia — Waterfront & Tourism Infrastructure',
    buyerCategory: 'Provincial (Nova Scotia)',
    source: 'Nova Scotia Procurement Portal',
    sourcePortalUrl: 'https://procurement-portal.novascotia.ca/tenders',
    portalReferenceName: 'NS Tenders Portal (Build NS #BNS-2026-0551)',
    closingDate: 'November 18, 2026 — 2:00 PM AST',
    daysRemaining: 28,
    estimatedValue: '$195,000 – $240,000 CAD',
    region: 'South Shore (Lunenburg, Shelburne, Queens)',
    relevanceScore: 79,
    recommendation: 'Consider',
    matchReasons: [
      'High coastal geotechnical inspection relevance in an iconic Nova Scotia public venue.',
      'Build Nova Scotia is an existing verified reference client from Lunenburg Foundry Wharf project.',
      'Rapid field mobilization from HRM to Peggy’s Cove.'
    ],
    summary: 'Build Nova Scotia requires structural and geotechnical engineering services to monitor rock face stability, wave action erosion, and wooden viewing deck substructure integrity at the Peggy’s Cove coastal preservation site.',
    procurementMethod: 'RFP through NS Procurement Portal',
    keyDates: {
      postedDate: 'October 4, 2026',
      questionDeadline: 'November 3, 2026',
      closingDate: 'November 18, 2026',
      anticipatedAward: 'December 5, 2026'
    },
    bidRationale: {
      verdict: 'CONDITIONAL PURSUE',
      winProbability: 79,
      strategicValue: 'Reinforces premier standing with Build Nova Scotia as the default coastal monitoring engineer.',
      strengths: ['Existing positive relationship with Build NS PMs', 'Specialized rock coring and drone photogrammetry equipment.'],
      risksAndMitigation: ['Risk: Harsh wave spray and high public foot traffic. Mitigation: Execute all drone LiDAR surveys and sensor installation at dawn under certified spotters.']
    },
    requirements: [
      { id: 't5-req-1', code: 'M1', type: 'Mandatory', title: 'NSCSA COR™ Safety', description: 'Active COR™ certification required.' },
      { id: 't5-req-2', code: 'M2', type: 'Mandatory', title: 'APENS Professional Engineer Registration', description: 'P.Eng. licensure in Nova Scotia.' },
      { id: 't5-req-3', code: 'R1', type: 'Rated', title: 'Coastal Granite Cliff Geotechnical Experience', description: 'Experience assessing high-energy marine wave impact zones.', weightOrPoints: '35 Points' }
    ],
    complianceMatrix: [
      { id: 't5-cm-1', requirementCode: 'M1', requirementTitle: 'COR™ Safety', requirementType: 'Mandatory', companyEvidence: 'Active NSCSA COR™ Certification.', status: 'Met', actionNeeded: 'Include certificate in submission.' },
      { id: 't5-cm-2', requirementCode: 'M2', requirementTitle: 'APENS P.Eng.', requirementType: 'Mandatory', companyEvidence: 'David Tremblay, P.Eng. (APENS #10842).', status: 'Met', actionNeeded: 'Confirm licensure status.' },
      { id: 't5-cm-3', requirementCode: 'R1', requirementTitle: 'Coastal Granite Stability', requirementType: 'Rated', companyEvidence: 'Directly supported by Lunenburg seawall and Eastern Passage breakwater assessments.', status: 'Met', actionNeeded: 'Highlight wave energy impact modeling.' }
    ],
    proposalDraft: {
      executiveSummary: 'ACCM is proud to partner again with Build Nova Scotia to protect the structural integrity of the Peggy’s Cove viewing infrastructure through high-precision rock-mass monitoring.',
      understandingOfScope: 'Balancing non-invasive geotechnical instrumentation with the rigorous aesthetic and visitor preservation requirements of Nova Scotia’s flagship tourism landmark.',
      technicalMethodology: 'Drone-mounted LiDAR point cloud analysis combined with automated crack tiltmeter telemetry.',
      relevantExperience: 'Build Nova Scotia Lunenburg Wharf project ($890k, completed 2024).',
      teamResumes: 'David Tremblay (P.Eng. Lead), Sarah MacDonald (LiDAR Lead).',
      localEconomicImpact: '100% Nova Scotia engineering talent and zero carbon footprint offset program.'
    }
  },
  {
    id: 'tender-6',
    tenderNumber: 'HRM-2026-T-1104',
    title: 'Sackville River Floodplain Retaining Wall Replacement & Stream Bank Armoring',
    buyer: 'Halifax Regional Municipality (HRM) — Parks & Natural Infrastructure',
    buyerCategory: 'Municipal (HRM)',
    source: 'Halifax bids&tenders',
    sourcePortalUrl: 'https://halifax.bidsandtenders.ca/Module/Tenders/en',
    portalReferenceName: 'HRM bids&tenders™ Portal (Ref #2026-1104-SACKVILLE)',
    closingDate: 'November 12, 2026 — 2:00 PM AST',
    daysRemaining: 22,
    estimatedValue: '$520,000 – $610,000 CAD',
    region: 'Halifax Regional Municipality (HRM)',
    relevanceScore: 85,
    recommendation: 'Pursue',
    matchReasons: [
      'Direct civil retaining wall and heavy rip-rap placement capabilities match.',
      'HRM client where ACCM has stellar performance score.',
      'Project site located within 20 minutes of Burnside yard.'
    ],
    summary: 'Halifax Regional Municipality requires heavy civil construction services to demolish an existing collapsed 120-meter gabion retaining wall and install an engineered rock-armored retaining system along the Sackville River floodplain.',
    procurementMethod: 'Invitation to Tender (Lowest Compliant Bidder)',
    keyDates: {
      postedDate: 'October 2, 2026',
      questionDeadline: 'October 29, 2026',
      closingDate: 'November 12, 2026',
      anticipatedAward: 'November 28, 2026'
    },
    bidRationale: {
      verdict: 'STRONG PURSUE',
      winProbability: 84,
      strategicValue: 'Fast-turnaround civil works tender with rapid cash flow in municipal parks.',
      strengths: ['Owned heavy civil rip-rap placement equipment', 'Local Bedford/Sackville aggregate supplier relationships.'],
      risksAndMitigation: ['Risk: Fish habitat environmental regulations. Mitigation: Adhere to strict NS Environment & Climate Change silt curtain protocols.']
    },
    requirements: [
      { id: 't6-req-1', code: 'M1', type: 'Mandatory', title: 'NSCSA COR™ Safety', description: 'Mandatory safety certification.' },
      { id: 't6-req-2', code: 'M2', type: 'Mandatory', title: 'NSECC Watercourse Alteration Certification', description: 'Certified Watercourse Alteration installer on site.' },
      { id: 't6-req-3', code: 'R1', type: 'Rated', title: 'Rip-Rap & Gabion Replacement Experience', description: 'Minimum three stream bank retaining projects completed.', weightOrPoints: 'Pass/Fail' }
    ],
    complianceMatrix: [
      { id: 't6-cm-1', requirementCode: 'M1', requirementTitle: 'COR™ Safety', requirementType: 'Mandatory', companyEvidence: 'Active NSCSA COR™ Certification.', status: 'Met', actionNeeded: 'Provide safety certificate.' },
      { id: 't6-cm-2', requirementCode: 'M2', requirementTitle: 'Watercourse Alteration Certification', requirementType: 'Mandatory', companyEvidence: 'Site Superintendent holds valid Nova Scotia Watercourse Alteration Installer certificate.', status: 'Met', actionNeeded: 'Include certificate copy.' },
      { id: 't6-cm-3', requirementCode: 'R1', requirementTitle: 'Retaining Wall Experience', requirementType: 'Rated', companyEvidence: 'Lunenburg wave attenuator and Sheet Harbour shoreline installations.', status: 'Met', actionNeeded: 'Document project history in qualification form.' }
    ],
    proposalDraft: {
      executiveSummary: 'ACCM tenders to deliver the Sackville River Retaining Wall Replacement for HRM with maximum environmental compliance and rapid field execution.',
      understandingOfScope: 'Reconstructing critical flood protection infrastructure with zero downstream turbidity.',
      technicalMethodology: 'Installation of double-layered turbidity curtains, phased dewatering, and placement of heavy engineered armor stone.',
      relevantExperience: 'HRM Ferry Terminal and Build NS coastal revetment projects.',
      teamResumes: 'Site Superintendent: Thomas Kelly (Certified Watercourse Installer), David Tremblay (P.Eng.).',
      localEconomicImpact: 'All quarry stone sourced from local HRM quarries, supporting Nova Scotia mining sector.'
    }
  },
  {
    id: 'tender-7',
    tenderNumber: 'CS-2026-RFP-0310',
    title: 'CCRCE — Cobequid Educational Centre Storm Surge Retaining Dyke Restoration',
    buyer: 'Chignecto-Central Regional Centre for Education (CCRCE) / Province of NS',
    buyerCategory: 'Education / CCRCE',
    source: 'Nova Scotia Procurement Portal',
    sourcePortalUrl: 'https://procurement-portal.novascotia.ca/tenders',
    portalReferenceName: 'NS Tenders Portal (CCRCE-2026-0310)',
    closingDate: 'December 1, 2026 — 2:00 PM AST',
    daysRemaining: 41,
    estimatedValue: '$145,000 – $190,000 CAD',
    region: 'Northern NS (Pictou, Colchester, Antigonish)',
    relevanceScore: 68,
    recommendation: 'Consider',
    matchReasons: [
      'Flood berm and drainage civil work falls within civil capabilities.',
      'Smaller contract size suitable as fill-in winter schedule project.',
      'Requires travel to Truro (Colchester County).'
    ],
    summary: 'CCRCE requires civil engineering and site grading services to restore an earthen retaining dyke and install flap-gate check valves to safeguard school athletic grounds from Salmon River tidal backflow.',
    procurementMethod: 'Request for Proposals',
    keyDates: {
      postedDate: 'October 7, 2026',
      questionDeadline: 'November 15, 2026',
      closingDate: 'December 1, 2026',
      anticipatedAward: 'December 18, 2026'
    },
    bidRationale: {
      verdict: 'CONDITIONAL PURSUE',
      winProbability: 62,
      strategicValue: 'Establishes track record with Regional Centres for Education in Northern Nova Scotia.',
      strengths: ['Low technical complexity', 'Fast execution timeline.'],
      risksAndMitigation: ['Risk: Competing against local Truro civil earthmovers. Mitigation: Highlight superior engineering diagnostics and flap-gate tidal hydraulic modeling.']
    },
    requirements: [
      { id: 't7-req-1', code: 'M1', type: 'Mandatory', title: 'NSCSA COR™ Safety', description: 'Certified under NS construction safety standard.' },
      { id: 't7-req-2', code: 'R1', type: 'Rated', title: 'Dyke & Tidal Gate Hydraulics Experience', description: 'Prior experience with Bay of Fundy tidal conditions.', weightOrPoints: '30 Points' }
    ],
    complianceMatrix: [
      { id: 't7-cm-1', requirementCode: 'M1', requirementTitle: 'COR™ Safety', requirementType: 'Mandatory', companyEvidence: 'Active NSCSA COR™ Certification.', status: 'Met', actionNeeded: 'Attach certificate.' },
      { id: 't7-cm-2', requirementCode: 'R1', requirementTitle: 'Tidal Gate Hydraulics', requirementType: 'Rated', companyEvidence: 'Extensive tidal experience in Halifax and Lunenburg; moderate Bay of Fundy exposure.', status: 'Partial', actionNeeded: 'Highlight Minas Basin hydrodynamic model calibrations.' }
    ],
    proposalDraft: {
      executiveSummary: 'ACCM proposes a resilient dyke rehabilitation plan for CCRCE to eliminate tidal inundation risks on school grounds.',
      understandingOfScope: 'Protecting educational infrastructure through cost-effective earthwork and modern non-return tide gates.',
      technicalMethodology: 'Compacted clay core reinforcement and installation of heavy-duty cast HDPE tide check valves.',
      relevantExperience: 'Provincial Department of Public Works civil retaining installations.',
      teamResumes: 'David Tremblay (P.Eng. Lead), Field Supervisor: Thomas Kelly.',
      localEconomicImpact: 'Local equipment hire and fill procurement in Colchester County.'
    }
  },
  {
    id: 'tender-8',
    tenderNumber: 'TC-2026-CAN-4421',
    title: 'Transport Canada — Digby Ferry Terminal Marine Fender System Replacement Design',
    buyer: 'Transport Canada / Public Services and Procurement Canada',
    buyerCategory: 'Federal (NS-located)',
    source: 'CanadaBuys',
    sourcePortalUrl: 'https://canadabuys.canada.ca/en',
    portalReferenceName: 'CanadaBuys Tender (Notice #TC-DIGBY-2026-4421)',
    closingDate: 'December 10, 2026 — 2:00 PM EST',
    daysRemaining: 50,
    estimatedValue: '$480,000 – $580,000 CAD',
    region: 'Annapolis Valley (Kings, Annapolis, Digby)',
    relevanceScore: 72,
    recommendation: 'Consider',
    matchReasons: [
      'High technical match for marine fendering and berthing impact analysis.',
      'Federal project requiring DOS security clearance which ACCM possesses.',
      'Site located in Annapolis Valley / Digby, requiring remote travel logistics.'
    ],
    summary: 'Transport Canada requires consulting engineering design, finite element berthing energy calculations, and tender package preparation for the comprehensive replacement of the high-energy rubber fender system at Digby Ferry Terminal.',
    procurementMethod: 'Two-envelope RFP via CanadaBuys',
    keyDates: {
      postedDate: 'October 9, 2026',
      questionDeadline: 'November 22, 2026',
      closingDate: 'December 10, 2026',
      anticipatedAward: 'January 20, 2027'
    },
    bidRationale: {
      verdict: 'CONDITIONAL PURSUE',
      winProbability: 68,
      strategicValue: 'Positions firm for high-profile ferry terminal infrastructure projects across Atlantic Canada.',
      strengths: ['Dartmouth Ferry Terminal fender experience', 'Federal DOS clearance.'],
      risksAndMitigation: ['Risk: Extreme 28-foot tides in Annapolis Basin. Mitigation: Schedule inspections during designated neap-tide windows.']
    },
    requirements: [
      { id: 't8-req-1', code: 'M1', type: 'Mandatory', title: 'Federal DOS Security Clearance', description: 'Company and staff security screening.' },
      { id: 't8-req-2', code: 'M2', type: 'Mandatory', title: 'PIANC Marine Fender Guidelines Compliance', description: 'Senior marine designer certified in PIANC 2020 berthing analysis.' },
      { id: 't8-req-3', code: 'R1', type: 'Rated', title: 'Ferry Terminal Engineering Experience', description: 'Past projects involving commercial Ro-Pax ferry berths.', weightOrPoints: '35 Points' }
    ],
    complianceMatrix: [
      { id: 't8-cm-1', requirementCode: 'M1', requirementTitle: 'DOS Security Clearance', requirementType: 'Mandatory', companyEvidence: 'Active PSPC DOS clearance.', status: 'Met', actionNeeded: 'Submit clearance documentation.' },
      { id: 't8-cm-2', requirementCode: 'M2', requirementTitle: 'PIANC Compliance', requirementType: 'Mandatory', companyEvidence: 'David Tremblay, P.Eng. has completed PIANC marine fender design courses.', status: 'Met', actionNeeded: 'Attach PIANC certification.' },
      { id: 't8-cm-3', requirementCode: 'R1', requirementTitle: 'Ferry Terminal Experience', requirementType: 'Rated', companyEvidence: 'Directly supported by 2024 Dartmouth Ferry Terminal Berthing Dolphin remediation.', status: 'Met', actionNeeded: 'Feature Dartmouth project metrics prominently.' }
    ],
    proposalDraft: {
      executiveSummary: 'ACCM presents an engineered fender replacement strategy for the Digby Ferry Terminal, drawing on our direct ferry berthing design experience.',
      understandingOfScope: 'Accommodating high vessel tonnage under extreme Bay of Fundy tidal excursions.',
      technicalMethodology: 'Dynamic berthing velocity analysis, cone rubber fender specification, and high-molecular weight UHMW-PE facing pads.',
      relevantExperience: 'HRM Dartmouth Ferry Terminal Berthing Dolphin project ($420,000, completed 2024).',
      teamResumes: 'David Tremblay (Lead Marine Engineer), Marc Bourque (Marine Diver).',
      localEconomicImpact: 'Nova Scotia engineering firm supporting critical provincial transportation link.'
    }
  },
  {
    id: 'tender-9',
    tenderNumber: 'NSDPW-2026-T-0988',
    title: 'Highway 104 Asphalt Paving & Culvert Deep Trenching — Pictou County',
    buyer: 'Nova Scotia Department of Public Works — Highway Construction',
    buyerCategory: 'Provincial (Nova Scotia)',
    source: 'Nova Scotia Procurement Portal',
    sourcePortalUrl: 'https://procurement-portal.novascotia.ca/tenders',
    portalReferenceName: 'NS Tenders Portal (DPW-2026-T-0988)',
    closingDate: 'November 10, 2026 — 2:00 PM AST',
    daysRemaining: 20,
    estimatedValue: '$3,400,000 – $4,200,000 CAD',
    region: 'Northern NS (Pictou, Colchester, Antigonish)',
    relevanceScore: 38,
    recommendation: 'Skip',
    matchReasons: [
      'Low capability match: Pure road asphalt paving and highway grading is outside core marine/coastal focus.',
      'Exceeds standard equipment fleet requirements (requires asphalt paving train and multi-ton rollers).',
      'High bonding requirement ($1.5M bid bond) disproportionate to SME return.'
    ],
    summary: 'The Department of Public Works invites bids for 14.5 kilometers of highway milling, asphalt resurfacing, and twin corrugated steel culvert replacements along Highway 104 in Pictou County.',
    procurementMethod: 'Public Low-Bid Tender',
    keyDates: {
      postedDate: 'September 28, 2026',
      questionDeadline: 'October 25, 2026',
      closingDate: 'November 10, 2026',
      anticipatedAward: 'November 22, 2026'
    },
    bidRationale: {
      verdict: 'HIGH RISK / SKIP',
      winProbability: 15,
      strategicValue: 'Low strategic fit. Bidding would distract engineering resources from high-probability coastal opportunities.',
      strengths: ['Valid NSCSA COR™ safety certification.'],
      risksAndMitigation: ['Severe Gap: Lack owned asphalt batch plants and heavy paving spreads. Major local roadbuilders (Dexter, Northern) dominate. Recommended: Do not bid.']
    },
    requirements: [
      { id: 't9-req-1', code: 'M1', type: 'Mandatory', title: 'NSCSA COR™ Safety', description: 'Active safety certification.' },
      { id: 't9-req-2', code: 'M2', type: 'Mandatory', title: 'Asphalt Plant Certification', description: 'Must own or lease certified hot-mix asphalt batching facility within 60km of site.' }
    ],
    complianceMatrix: [
      { id: 't9-cm-1', requirementCode: 'M1', requirementTitle: 'COR™ Safety', requirementType: 'Mandatory', companyEvidence: 'Active NSCSA COR™ Certification.', status: 'Met', actionNeeded: 'Certificate in file.' },
      { id: 't9-cm-2', requirementCode: 'M2', requirementTitle: 'Asphalt Plant Certification', requirementType: 'Mandatory', companyEvidence: 'ACCM does not operate asphalt plants.', status: 'Gap', actionNeeded: 'Disqualifying mandatory condition unless subcontracting whole job.' }
    ],
    proposalDraft: {
      executiveSummary: 'AI Recommendation: Do Not Submit. Submitting this proposal would incur significant pursuit costs with minimal win probability due to lack of paving equipment.',
      understandingOfScope: 'Highway paving is outside the strategic domain of Atlantic Coastal Civil & Marine Ltd.',
      technicalMethodology: 'Not recommended for development.',
      relevantExperience: 'N/A',
      teamResumes: 'N/A',
      localEconomicImpact: 'N/A'
    }
  },
  {
    id: 'tender-10',
    tenderNumber: 'HRM-2026-RFP-0022',
    title: 'Halifax Transit Electric Bus Depot High-Voltage Switchgear & Charging Fit-Up',
    buyer: 'Halifax Regional Municipality (HRM) — Fleet & Transit Electrification',
    buyerCategory: 'Municipal (HRM)',
    source: 'Halifax bids&tenders',
    sourcePortalUrl: 'https://halifax.bidsandtenders.ca/Module/Tenders/en',
    portalReferenceName: 'HRM bids&tenders™ Portal (Ref #2026-0022-FLEET)',
    closingDate: 'November 16, 2026 — 2:00 PM AST',
    daysRemaining: 26,
    estimatedValue: '$2,100,000 – $2,700,000 CAD',
    region: 'Halifax Regional Municipality (HRM)',
    relevanceScore: 24,
    recommendation: 'Skip',
    matchReasons: [
      'Zero core capability match: Specialized electrical engineering and 25kV power distribution.',
      'Mandatory Master Electrician and CSA high-voltage certification missing from ACCM profile.',
      'AI Recommendation: Direct Pass. Focus on Marine & Seawall opportunities.'
    ],
    summary: 'Halifax Regional Municipality requires a specialized electrical general contractor to install high-power DC fast-charging pantograph dispensers, step-down substations, and energy management controls at Burnside Transit Centre.',
    procurementMethod: 'Two-Envelope RFP via bids&tenders',
    keyDates: {
      postedDate: 'October 1, 2026',
      questionDeadline: 'November 2, 2026',
      closingDate: 'November 16, 2026',
      anticipatedAward: 'December 10, 2026'
    },
    bidRationale: {
      verdict: 'HIGH RISK / SKIP',
      winProbability: 8,
      strategicValue: 'Completely divergent from ACCM marine civil profile.',
      strengths: ['Physical proximity (adjacent lot in Burnside Industrial Park).'],
      risksAndMitigation: ['Critical Gap: High-voltage electrical licensing. Bidding without a prime electrical partner would result in immediate technical disqualification.']
    },
    requirements: [
      { id: 't10-req-1', code: 'M1', type: 'Mandatory', title: 'Nova Scotia Master Electrician License', description: 'Prime contractor must employ Master Electrician registered in NS.' },
      { id: 't10-req-2', code: 'M2', type: 'Mandatory', title: 'High-Voltage Substation Experience', description: 'Prior utility-grade 25kV installations.' }
    ],
    complianceMatrix: [
      { id: 't10-cm-1', requirementCode: 'M1', requirementTitle: 'Master Electrician License', requirementType: 'Mandatory', companyEvidence: 'ACCM is a civil/marine engineering firm, not an electrical contractor.', status: 'Gap', actionNeeded: 'Disqualifying mandatory condition.' },
      { id: 't10-cm-2', requirementCode: 'M2', requirementTitle: 'High-Voltage Experience', requirementType: 'Mandatory', companyEvidence: 'No high-voltage substation project history.', status: 'Gap', actionNeeded: 'Disqualifying condition.' }
    ],
    proposalDraft: {
      executiveSummary: 'AI Recommendation: Direct Pass. Bidding is strongly discouraged due to mandatory electrical licensure requirements.',
      understandingOfScope: 'Out of scope for civil/marine engineering services.',
      technicalMethodology: 'N/A',
      relevantExperience: 'N/A',
      teamResumes: 'N/A',
      localEconomicImpact: 'N/A'
    }
  }
];

export const TENDERS = DUMMY_TENDERS;
export const FEATURED_TENDER_ID = 'tender-1';
