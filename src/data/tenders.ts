import { TenderOpportunity } from '../types/procurement';

export const DUMMY_TENDERS: TenderOpportunity[] = [
  {
    id: 'tender-1',
    tenderNumber: 'HRM-2026-RFP-0842',
    title: 'North West Arm Seawall Inspection & Resilience',
    buyer: 'Halifax Regional Municipality (HRM) — Public Works & Waterfront Infrastructure',
    buyerCategory: 'Municipal (HRM)',
    source: 'Halifax bids&tenders',
    sourcePortalUrl: 'https://halifax.bidsandtenders.ca/Module/Tenders/en',
    portalReferenceName: 'HRM bids&tenders™ Portal (Ref #2026-0842-SEAWALL)',
    closingDate: 'November 14, 2026 — 2:00 PM AST',
    daysRemaining: 35,
    estimatedValue: '$650,000 – $800,000 CAD',
    region: 'Halifax Regional Municipality (HRM)',
    relevanceScore: 96,
    recommendation: 'Pursue',
    matchReasons: [
      'Core fit: seawall repairs, sonar & coring.',
      'Active NSCSA COR™ safety certification.',
      'Past performance on HRM Dartmouth Ferry wharf.',
      'Burnside HQ satisfies 60-min emergency response.'
    ],
    summary: 'HRM requires seawall condition assessment, multibeam sonar, and climate resilience upgrades along 1.8 km of shoreline.',
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
      strategicValue: 'High-margin municipal contract advancing coastal adaptation role.',
      strengths: [
        'Incumbent knowledge: delivered HRM marine wharf in 2024.',
        'Zero sub dependency for dive inspection and multibeam sonar.',
        'High compliance readiness: all mandatory criteria met.',
        'Local HRM social value bonus points via local workforce.'
      ],
      risksAndMitigation: [
        'Risk: tidal surge delays. Mitigation: dual-shift tidal plan.',
        'Risk: park trail disruption. Mitigation: barge-based sonar.',
        'Risk: marine mammal noise. Mitigation: subsea acoustic log.'
      ]
    },
    requirements: [
      {
        id: 'req-1',
        code: 'M1',
        type: 'Mandatory',
        title: 'Safety Certification (COR™)',
        description: 'Valid Certificate of Recognition (COR™) from NSCSA at bid closing.'
      },
      {
        id: 'req-2',
        code: 'M2',
        type: 'Mandatory',
        title: 'Engineering Licensure & COA',
        description: 'Lead must be APENS P.Eng.; firm must hold Certificate of Authorization.'
      },
      {
        id: 'req-3',
        code: 'M3',
        type: 'Mandatory',
        title: 'Diving & Marine Survey Standard',
        description: 'Commercial diving must adhere to CSA Z275.2 and NS OHS Diving Regulations.'
      },
      {
        id: 'req-4',
        code: 'M4',
        type: 'Mandatory',
        title: 'Minimum Insurance Limits',
        description: 'Evidence of $10M CGL, $5M E&O, and $5M marine pollution coverage.'
      },
      {
        id: 'req-5',
        code: 'M5',
        type: 'Mandatory',
        title: 'Marine Mammal Observer Protocol',
        description: 'Qualified Marine Mammal Observer for active acoustic operations.'
      },
      {
        id: 'req-6',
        code: 'R1',
        type: 'Rated',
        title: 'Coastal Engineering Experience',
        description: 'Experience on three similar marine retaining structures in Atlantic Canada.',
        weightOrPoints: '30 Points (Minimum threshold: 24/30)'
      },
      {
        id: 'req-7',
        code: 'R2',
        type: 'Rated',
        title: 'Methodology & Climate Resilience',
        description: 'Approach for NDT concrete evaluation, 3D sonar fusion, and sea-level models.',
        weightOrPoints: '25 Points'
      },
      {
        id: 'req-8',
        code: 'R3',
        type: 'Rated',
        title: 'Key Personnel & Field Readiness',
        description: 'Qualifications of Coastal Geotechnical Engineer and Diving Supervisor.',
        weightOrPoints: '15 Points'
      },
      {
        id: 'req-9',
        code: 'R4',
        type: 'Rated',
        title: 'HRM Social Value Plan',
        description: 'Commitment to local Nova Scotia employment and supplier diversity.',
        weightOrPoints: '10 Points'
      }
    ],
    complianceMatrix: [
      {
        id: 'cm-1',
        requirementCode: 'M1',
        requirementTitle: 'Safety Certification (COR™)',
        requirementType: 'Mandatory',
        companyEvidence: 'ACCM holds NSCSA COR™ Certification valid to Nov 2027.',
        status: 'Met',
        actionNeeded: 'Attach Letter of Good Standing to Envelope A.'
      },
      {
        id: 'cm-2',
        requirementCode: 'M2',
        requirementTitle: 'Engineering Licensure & COA',
        requirementType: 'Mandatory',
        companyEvidence: 'Engineers NS COA #2019-0412; David Tremblay, P.Eng. lead.',
        status: 'Met',
        actionNeeded: 'Include APENS seal and COA copy.'
      },
      {
        id: 'cm-3',
        requirementCode: 'M3',
        requirementTitle: 'Diving & Marine Survey Standard',
        requirementType: 'Mandatory',
        companyEvidence: 'In-house DCBC certified dive team meeting CSA Z275.2.',
        status: 'Met',
        actionNeeded: 'Append Dive Safety Plan to technical annex.'
      },
      {
        id: 'cm-4',
        requirementCode: 'M4',
        requirementTitle: 'Minimum Insurance Limits',
        requirementType: 'Mandatory',
        companyEvidence: 'Broker confirms $10M CGL, $5M E&O, and $5M marine coverage.',
        status: 'Met',
        actionNeeded: 'Request certificate naming HRM upon award.'
      },
      {
        id: 'cm-5',
        requirementCode: 'M5',
        requirementTitle: 'Marine Mammal Observer Protocol',
        requirementType: 'Mandatory',
        companyEvidence: 'No in-house DFO certified Marine Mammal Observer on staff.',
        status: 'Gap',
        actionNeeded: 'Subcontract certified local MMO specialist.'
      },
      {
        id: 'cm-6',
        requirementCode: 'R1',
        requirementTitle: 'Coastal Engineering Experience',
        requirementType: 'Rated',
        companyEvidence: 'Dartmouth Ferry ($420k), Lunenburg ($890k), Sheet Harbour.',
        status: 'Met',
        actionNeeded: 'Provide HRM and Build NS client contacts.'
      },
      {
        id: 'cm-7',
        requirementCode: 'R2',
        requirementTitle: 'Methodology & Climate Resilience',
        requirementType: 'Rated',
        companyEvidence: 'Dual sonar combined with Halifax extreme water models.',
        status: 'Met',
        actionNeeded: 'Include 3D bathymetric mesh rendering.'
      },
      {
        id: 'cm-8',
        requirementCode: 'R3',
        requirementTitle: 'Key Personnel & Field Readiness',
        requirementType: 'Rated',
        companyEvidence: 'Four proposed key personnel reside within HRM.',
        status: 'Met',
        actionNeeded: 'Format resumes into HRM standard format.'
      },
      {
        id: 'cm-9',
        requirementCode: 'R4',
        requirementTitle: 'HRM Social Value Plan',
        requirementType: 'Rated',
        companyEvidence: '100% NS workforce; NSCC marine geomatics co-op sponsor.',
        status: 'Partial',
        actionNeeded: 'Formalize 1-page Social Value Commitment.'
      }
    ],
    proposalDraft: {
      executiveSummary: `Atlantic Coastal Civil & Marine Ltd. (ACCM) submits this proposal to the Halifax Regional Municipality for the North West Arm Seawall Inspection & Resilience project (RFP-0842).

Based in Burnside with 28 marine specialists, ACCM combines local tidal familiarity, in-house dive assets, and proven municipal delivery, including the 2024 Dartmouth Ferry Terminal wharf remediation.

Our team holds active NSCSA COR™ safety certification and an APENS Certificate of Authorization. We propose an agile work plan delivering 3D bathymetry, concrete diagnostics, and practical 50-year resilience designs for HRM.`,
      understandingOfScope: `The North West Arm is a vital municipal corridor subject to tidal scouring, freeze-thaw degradation, and storm surges. HRM requires an authoritative structural baseline along the 1.8 km seawall.

Key priorities include operating within a narrow navigation channel, coordinating with tidal cycles, and keeping public trails open. ACCM balances marine geotechnical assessment with municipal capital planning aligned with HalifACT 2050 goals.`,
      technicalMethodology: `Phase 1: High-resolution hydrographic survey using Norbit multibeam sonar fused with RTK LiDAR to generate unified 3D point clouds of wall and toe conditions.

Phase 2: Diver structural diagnostics under CSA Z275.2 protocols, including ultrasonic steel thickness tests, Schmidt hammer impacts, and diamond-core chloride sampling.

Phase 3: Hydrodynamic surge analysis modeling 50-year sea-level rise and wave overtopping to establish wall crest requirements.

Phase 4: Engineered rehabilitation matrix prioritizing immediate stabilization, cathodic protection, and long-term crest upgrades with Class B cost estimates.`,
      relevantExperience: `HRM Dartmouth Ferry Terminal (2024, $420k): Underwater structural inspection, crack injection, and cathodic protection completed ahead of schedule with zero safety incidents.

Build Nova Scotia Lunenburg Wharf (2024, $890k): Engineered armour stone placement and tidal scour mitigation under harsh North Atlantic exposure.

NS DPW Sheet Harbour Mooring (2023, $185k): Sub-bottom acoustic profiling and diver geotechnical coring for harbour development.`,
      teamResumes: `David Tremblay, P.Eng. (APENS #10842) serves as Project Principal with 18 years in Atlantic coastal retaining walls and breakwaters.

Sarah MacDonald, CLS/C-NS leads hydrographic surveys with 12 years in multibeam sonar mapping and spatial risk modeling.

Marc Bourque acts as Dive Supervisor with over 2,500 logged inspection dives, while Dr. Elena Fraser, P.Eng. leads coastal storm surge modeling.`,
      localEconomicImpact: `ACCM guarantees a 100% local Nova Scotia workforce based in Burnside, operating as a certified Living Wage employer.

We will sponsor one paid NSCC Marine Geomatics co-op student and use low-emission hybrid survey vessels with zero in-water discharge.`
    }
  },
  {
    id: 'tender-2',
    tenderNumber: 'NSDPW-2026-T-0419',
    title: 'Port Hawkesbury Pier Timber Piling & Cathodic Assessment',
    buyer: 'Nova Scotia Department of Public Works (DPW) — Highway & Marine Division',
    buyerCategory: 'Provincial (Nova Scotia)',
    source: 'Nova Scotia Procurement Portal',
    sourcePortalUrl: 'https://procurement-portal.novascotia.ca/tenders',
    portalReferenceName: 'NS Tenders Portal (Notice #DPW-2026-T-0419)',
    closingDate: 'November 20, 2026 — 2:00 PM AST',
    daysRemaining: 41,
    estimatedValue: '$340,000 – $410,000 CAD',
    region: 'Cape Breton (CBRM, Richmond, Inverness)',
    relevanceScore: 88,
    recommendation: 'Pursue',
    matchReasons: [
      'Timber piling inspection and anode installation.',
      'Active Cape Breton service region in profile.',
      'Past DPW contract provides strong credibility.'
    ],
    summary: 'DPW requires underwater timber piling assessment and cathodic protection at the Port Hawkesbury marine terminal.',
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
      strategicValue: 'Expands provincial DPW standing into Strait of Canso marine corridor.',
      strengths: [
        'Turnkey dive inspection spread with ultrasonic pile gauge.',
        'Established logistics route between Dartmouth and the site.',
        'COR safety certification meets mandatory provincial audit.'
      ],
      risksAndMitigation: [
        'Risk: tidal currents. Mitigation: dive during slack water.'
      ]
    },
    requirements: [
      { id: 't2-req-1', code: 'M1', type: 'Mandatory', title: 'NSCSA COR™ Safety Certification', description: 'Active COR™ certification recognized by WorkSafe / NSCSA.' },
      { id: 't2-req-2', code: 'M2', type: 'Mandatory', title: 'Engineers Nova Scotia P.Eng. Stamp', description: 'Inspection report must be stamped by a registered Nova Scotia P.Eng.' },
      { id: 't2-req-3', code: 'R1', type: 'Rated', title: 'Timber Piling Inspection Experience', description: 'Proven record evaluating creosote and marine timber pilings.', weightOrPoints: '40 Points' },
      { id: 't2-req-4', code: 'R2', type: 'Rated', title: 'Cathodic Protection Design Capability', description: 'Experience designing sacrificial anode systems for Atlantic structures.', weightOrPoints: '35 Points' }
    ],
    complianceMatrix: [
      { id: 't2-cm-1', requirementCode: 'M1', requirementTitle: 'COR™ Safety Certification', requirementType: 'Mandatory', companyEvidence: 'ACCM holds active NSCSA COR™ Certification to Nov 2027.', status: 'Met', actionNeeded: 'Attach certificate to bid package.' },
      { id: 't2-cm-2', requirementCode: 'M2', requirementTitle: 'Engineers Nova Scotia P.Eng. Stamp', requirementType: 'Mandatory', companyEvidence: 'Lead Civil/Marine Engineer holds active APENS license.', status: 'Met', actionNeeded: 'Confirm seal authorization on submission.' },
      { id: 't2-cm-3', requirementCode: 'R1', requirementTitle: 'Timber Piling Experience', requirementType: 'Rated', companyEvidence: 'Lunenburg project evaluated 120 marine timber piles.', status: 'Met', actionNeeded: 'Detail Lunenburg sampling in proposal.' },
      { id: 't2-cm-4', requirementCode: 'R2', requirementTitle: 'Cathodic Protection Design', requirementType: 'Rated', companyEvidence: 'Designed zinc sacrificial anodes on Dartmouth terminal.', status: 'Met', actionNeeded: 'Include Dartmouth anode layout drawings.' }
    ],
    proposalDraft: {
      executiveSummary: 'Atlantic Coastal Civil & Marine Ltd. (ACCM) submits this tender for the Port Hawkesbury deepwater pier assessment. With verified DPW past performance and dedicated dive crews, we offer rapid mobilization to the Strait of Canso.',
      understandingOfScope: 'The deepwater marine facility faces intense tidal forces and saline exposure that accelerate timber decay and galvanic corrosion. ACCM delivers precise non-destructive testing and stamped load capacity evaluations.',
      technicalMethodology: 'Phase 1: Diver acoustic coring and timber density assessment. Phase 2: Steel thickness ultrasonic measurement. Phase 3: Sacrificial zinc anode installation and stamped engineering report.',
      relevantExperience: 'Demonstrated through our 2024 Lunenburg Wharf timber cribbing audit and Dartmouth Ferry Terminal cathodic protection installations for municipal and provincial clients.',
      teamResumes: 'Lead Engineer David Tremblay, P.Eng. and DCBC Dive Supervisor Marc Bourque bring over thirty collective years of marine piling and subsea remediation experience.',
      localEconomicImpact: 'ACCM will base field crews in Port Hawkesbury, sourcing marine hardware and vessel support from local Cape Breton suppliers.'
    }
  },
  {
    id: 'tender-3',
    tenderNumber: 'CB-2026-NS-7712',
    title: 'DFO Shearwater Jetty 9 Acoustic Survey & Cable Route',
    buyer: 'Fisheries and Oceans Canada (DFO / Canadian Coast Guard) via CanadaBuys',
    buyerCategory: 'Federal (NS-located)',
    source: 'CanadaBuys',
    sourcePortalUrl: 'https://canadabuys.canada.ca/en',
    portalReferenceName: 'CanadaBuys Federal Notice (Solicitation #F5211-26-7712)',
    closingDate: 'November 27, 2026 — 2:00 PM EST',
    daysRemaining: 48,
    estimatedValue: '$210,000 – $280,000 CAD',
    region: 'Halifax Regional Municipality (HRM)',
    relevanceScore: 82,
    recommendation: 'Consider',
    matchReasons: [
      'Direct fit with sonar and sub-bottom profiler.',
      'Headquarters 15 minutes from Shearwater jetty.',
      'PSPC DOS clearance satisfies security rules.'
    ],
    summary: 'DFO requires multibeam sonar, side-scan, and sub-bottom profiling at Shearwater Jetty 9 for subsea cable replacement.',
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
      strategicValue: 'Strengthens federal supply arrangement standing with DFO and PSPC.',
      strengths: [
        'In-house high-frequency chirp sub-bottom profiler equipment.',
        'DOS reliability cleared staff ready for naval jetty access.',
        'Zero vessel travel overhead from Dartmouth base.'
      ],
      risksAndMitigation: [
        'Risk: federal paperwork. Mitigation: PBN is fully active.'
      ]
    },
    requirements: [
      { id: 't3-req-1', code: 'M1', type: 'Mandatory', title: 'Federal Security Clearance (DOS)', description: 'Company must hold valid PSPC DOS clearance with Reliability Status personnel.' },
      { id: 't3-req-2', code: 'M2', type: 'Mandatory', title: 'CHS Hydrographic Standards', description: 'Surveys must meet Canadian Hydrographic Service Order 1a standards.' },
      { id: 't3-req-3', code: 'R1', type: 'Rated', title: 'Sub-bottom Profiling Experience', description: 'Proven geophysics experience mapping shallow bedrock and boulder fields.', weightOrPoints: '30 Points' }
    ],
    complianceMatrix: [
      { id: 't3-cm-1', requirementCode: 'M1', requirementTitle: 'Federal Security Clearance (DOS)', requirementType: 'Mandatory', companyEvidence: 'ACCM holds active PSPC DOS reliability clearance.', status: 'Met', actionNeeded: 'Submit CISD clearance letter with bid.' },
      { id: 't3-cm-2', requirementCode: 'M2', requirementTitle: 'CHS Hydrographic Standards', requirementType: 'Mandatory', companyEvidence: 'Sarah MacDonald is certified with calibrated multibeam gear.', status: 'Met', actionNeeded: 'Include equipment calibration sheets.' },
      { id: 't3-cm-3', requirementCode: 'R1', requirementTitle: 'Sub-bottom Profiling Experience', requirementType: 'Rated', companyEvidence: 'Sheet Harbour contract included 15 km of sub-bottom surveys.', status: 'Met', actionNeeded: 'Provide sample seismic cross-sections.' }
    ],
    proposalDraft: {
      executiveSummary: 'Atlantic Coastal Civil & Marine Ltd. (ACCM) submits this proposal for the DFO Shearwater Jetty 9 survey. Located minutes from the jetty with active PSPC DOS clearance, we deliver turn-key CHS Order 1a bathymetric and sub-bottom data.',
      understandingOfScope: 'Route engineering for submarine power and telemetry cables requires high-density detection of submerged seabed hazards, bedrock outcrops, and harbor debris along the Shearwater jetty approaches.',
      technicalMethodology: 'Simultaneous acquisition of multibeam bathymetry, side-scan sonar, and sub-bottom chirp profiler data from our dedicated survey launch, referenced to Canadian geodetic datums.',
      relevantExperience: 'Validated through the DFO Eastern Passage breakwater audit (2023) and Sheet Harbour mooring survey (2023) for federal and provincial authorities.',
      teamResumes: 'Hydrographic Lead Sarah MacDonald, CLS/C-NS directs survey operations, with technical review by David Tremblay, P.Eng.',
      localEconomicImpact: 'Execution is 100% Atlantic Canadian, using local Dartmouth vessel operations and regional marine geomatics staff.'
    }
  },
  {
    id: 'tender-4',
    tenderNumber: 'NSH-2026-RFP-0193',
    title: 'QEII Centre Foundation Stabilization & Stormwater',
    buyer: 'Nova Scotia Health Authority (NSHA) — Capital Infrastructure Branch',
    buyerCategory: 'MASH / Health',
    source: 'SAP Ariba / NS Health',
    sourcePortalUrl: 'https://procurement-portal.novascotia.ca/tenders',
    portalReferenceName: 'NS Health Tender (Ariba Event #WS-449102-NSH)',
    closingDate: 'December 4, 2026 — 2:00 PM AST',
    daysRemaining: 55,
    estimatedValue: '$1,100,000 – $1,350,000 CAD',
    region: 'Halifax Regional Municipality (HRM)',
    relevanceScore: 74,
    recommendation: 'Consider',
    matchReasons: [
      'Civil geotechnical overlap on hospital perimeter.',
      'High contract value ($1.2M) within HRM boundary.',
      'Requires specialized underpinning controls.'
    ],
    summary: 'NS Health requires geotechnical tie-backs, micro-piling, and stormwater upgrades at Halifax Infirmary.',
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
      strategicValue: 'Pre-qualifies ACCM for Nova Scotia Health campus capital works.',
      strengths: [
        'Retaining wall and geotechnical stabilization experience.',
        'COR safety certification meets strict hospital standards.'
      ],
      risksAndMitigation: [
        'Risk: micro-piling drill gear. Mitigation: partner locally.'
      ]
    },
    requirements: [
      { id: 't4-req-1', code: 'M1', type: 'Mandatory', title: 'COR™ Safety & Infection Control', description: 'Active COR™ and compliance with CSA Z317.13 hospital infection control rules.' },
      { id: 't4-req-2', code: 'M2', type: 'Mandatory', title: 'Geotechnical P.Eng. Stamp', description: 'Design deliverables must be stamped by an APENS registered engineer.' },
      { id: 't4-req-3', code: 'R1', type: 'Rated', title: 'Deep Excavation Stabilization', description: 'Documented record in high-density urban retaining wall stabilization.', weightOrPoints: '35 Points' }
    ],
    complianceMatrix: [
      { id: 't4-cm-1', requirementCode: 'M1', requirementTitle: 'COR™ Safety & Infection Control', requirementType: 'Mandatory', companyEvidence: 'COR™ certified; safety lead holds CSA Z317.13 certificate.', status: 'Met', actionNeeded: 'Submit proof of healthcare infection course.' },
      { id: 't4-cm-2', requirementCode: 'M2', requirementTitle: 'Geotechnical P.Eng. Stamp', requirementType: 'Mandatory', companyEvidence: 'Senior Geotechnical Engineer holds active APENS license.', status: 'Met', actionNeeded: 'Provide engineer CV and seal credentials.' },
      { id: 't4-cm-3', requirementCode: 'R1', requirementTitle: 'Deep Excavation Stabilization', requirementType: 'Rated', companyEvidence: 'Seawall retaining wall experience; partial gap in hospitals.', status: 'Partial', actionNeeded: 'Partner with local vibration monitoring firm.' }
    ],
    proposalDraft: {
      executiveSummary: 'Atlantic Coastal Civil & Marine Ltd. proposes an engineered foundation stabilization program for the QEII Health Sciences Centre, leveraging our geotechnical retention expertise and proven safety standards.',
      understandingOfScope: 'Ensuring zero vibration impact on clinical equipment while installing essential slope retaining reinforcements on the Halifax Infirmary campus perimeter.',
      technicalMethodology: 'Low-vibration micro-piling, pre-stressed rock tie-backs, and real-time seismograph telemetry monitoring to safeguard hospital operations.',
      relevantExperience: 'Retaining wall stabilization and anchor execution on Lunenburg historic waterfront and Sheet Harbour coastal facilities.',
      teamResumes: 'David Tremblay, P.Eng. leads geotechnical design, supported by Elena Fraser for structural risk and slope modeling.',
      localEconomicImpact: 'Direct local Halifax labour deployment with 100% provincial material sourcing from Nova Scotia suppliers.'
    }
  },
  {
    id: 'tender-5',
    tenderNumber: 'BNS-2026-RFP-0551',
    title: 'Peggy’s Cove Boardwalk & Rock Face Geotechnical Study',
    buyer: 'Build Nova Scotia — Waterfront & Tourism Infrastructure',
    buyerCategory: 'Provincial (Nova Scotia)',
    source: 'Nova Scotia Procurement Portal',
    sourcePortalUrl: 'https://procurement-portal.novascotia.ca/tenders',
    portalReferenceName: 'NS Tenders Portal (Build NS #BNS-2026-0551)',
    closingDate: 'November 18, 2026 — 2:00 PM AST',
    daysRemaining: 39,
    estimatedValue: '$195,000 – $240,000 CAD',
    region: 'South Shore (Lunenburg, Shelburne, Queens)',
    relevanceScore: 79,
    recommendation: 'Consider',
    matchReasons: [
      'Coastal geotechnical inspection at iconic venue.',
      'Build NS is an existing verified client.',
      'Rapid field mobilization from HRM base.'
    ],
    summary: 'Build NS requires geotechnical monitoring of rock face stability and viewing deck integrity at Peggy’s Cove.',
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
      strategicValue: 'Reinforces premier standing with Build Nova Scotia for coastal works.',
      strengths: [
        'Positive relationship with Build NS project managers.',
        'Specialized rock coring and drone photogrammetry equipment.'
      ],
      risksAndMitigation: [
        'Risk: wave spray. Mitigation: dawn drone LiDAR surveys.'
      ]
    },
    requirements: [
      { id: 't5-req-1', code: 'M1', type: 'Mandatory', title: 'NSCSA COR™ Safety', description: 'Active COR™ safety certification required.' },
      { id: 't5-req-2', code: 'M2', type: 'Mandatory', title: 'APENS P.Eng. Registration', description: 'Professional Engineer licensure in Nova Scotia.' },
      { id: 't5-req-3', code: 'R1', type: 'Rated', title: 'Granite Cliff Geotechnical Record', description: 'Experience assessing high-energy marine wave impact zones.', weightOrPoints: '35 Points' }
    ],
    complianceMatrix: [
      { id: 't5-cm-1', requirementCode: 'M1', requirementTitle: 'NSCSA COR™ Safety', requirementType: 'Mandatory', companyEvidence: 'Active NSCSA COR™ Certification valid to Nov 2027.', status: 'Met', actionNeeded: 'Include certificate in submission.' },
      { id: 't5-cm-2', requirementCode: 'M2', requirementTitle: 'APENS P.Eng. Registration', requirementType: 'Mandatory', companyEvidence: 'David Tremblay, P.Eng. holds active APENS license.', status: 'Met', actionNeeded: 'Confirm licensure status in proposal.' },
      { id: 't5-cm-3', requirementCode: 'R1', requirementTitle: 'Granite Cliff Geotechnical Record', requirementType: 'Rated', companyEvidence: 'Supported by Lunenburg and Eastern Passage breakwater work.', status: 'Met', actionNeeded: 'Highlight wave energy impact modeling.' }
    ],
    proposalDraft: {
      executiveSummary: 'ACCM partners with Build Nova Scotia to protect Peggy’s Cove viewing infrastructure through high-precision rock-mass geotechnical monitoring and non-invasive structural forensics.',
      understandingOfScope: 'Balancing non-invasive geotechnical sensors with the visitor preservation requirements of Nova Scotia’s flagship coastal landmark.',
      technicalMethodology: 'Drone-mounted LiDAR point clouds combined with automated crack tiltmeter telemetry to monitor rock displacement and wave scour.',
      relevantExperience: 'Build Nova Scotia Lunenburg Foundry Wharf project ($890k, completed 2024) demonstrated our high coastal performance.',
      teamResumes: 'David Tremblay, P.Eng. leads geotechnical analysis with Sarah MacDonald directing drone LiDAR acquisition.',
      localEconomicImpact: '100% Nova Scotia engineering talent with low-impact field methods preserving public coastal access.'
    }
  },
  {
    id: 'tender-6',
    tenderNumber: 'HRM-2026-T-1104',
    title: 'Sackville River Retaining Wall & Stream Armoring',
    buyer: 'Halifax Regional Municipality (HRM) — Parks & Natural Infrastructure',
    buyerCategory: 'Municipal (HRM)',
    source: 'Halifax bids&tenders',
    sourcePortalUrl: 'https://halifax.bidsandtenders.ca/Module/Tenders/en',
    portalReferenceName: 'HRM bids&tenders™ Portal (Ref #2026-1104-SACKVILLE)',
    closingDate: 'November 12, 2026 — 2:00 PM AST',
    daysRemaining: 33,
    estimatedValue: '$520,000 – $610,000 CAD',
    region: 'Halifax Regional Municipality (HRM)',
    relevanceScore: 85,
    recommendation: 'Pursue',
    matchReasons: [
      'Civil retaining wall and rip-rap capabilities.',
      'HRM client where ACCM has top performance.',
      'Site located 20 minutes from Burnside yard.'
    ],
    summary: 'HRM requires replacement of a 120m collapsed gabion wall with rock-armored retaining along Sackville River.',
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
      strategicValue: 'Fast-turnaround civil works tender with rapid municipal cash flow.',
      strengths: [
        'Owned heavy civil rip-rap placement equipment ready to go.',
        'Local Bedford and Sackville aggregate supplier partnerships.'
      ],
      risksAndMitigation: [
        'Risk: fish habitat. Mitigation: strict NSECC silt curtains.'
      ]
    },
    requirements: [
      { id: 't6-req-1', code: 'M1', type: 'Mandatory', title: 'NSCSA COR™ Safety', description: 'Mandatory safety certification in good standing.' },
      { id: 't6-req-2', code: 'M2', type: 'Mandatory', title: 'Watercourse Alteration Certificate', description: 'Certified Watercourse Alteration installer on site during work.' },
      { id: 't6-req-3', code: 'R1', type: 'Rated', title: 'Rip-Rap & Gabion Replacement', description: 'Minimum three stream bank retaining projects completed.', weightOrPoints: 'Pass/Fail' }
    ],
    complianceMatrix: [
      { id: 't6-cm-1', requirementCode: 'M1', requirementTitle: 'NSCSA COR™ Safety', requirementType: 'Mandatory', companyEvidence: 'Active NSCSA COR™ Safety Certification valid to Nov 2027.', status: 'Met', actionNeeded: 'Provide safety certificate copy.' },
      { id: 't6-cm-2', requirementCode: 'M2', requirementTitle: 'Watercourse Alteration Certificate', requirementType: 'Mandatory', companyEvidence: 'Superintendent holds valid NS Watercourse Installer ticket.', status: 'Met', actionNeeded: 'Include installer certificate copy.' },
      { id: 't6-cm-3', requirementCode: 'R1', requirementTitle: 'Rip-Rap & Gabion Replacement', requirementType: 'Rated', companyEvidence: 'Lunenburg wave attenuator and Sheet Harbour shoreline work.', status: 'Met', actionNeeded: 'Document project history in bid form.' }
    ],
    proposalDraft: {
      executiveSummary: 'ACCM tenders to deliver the Sackville River Retaining Wall Replacement for HRM with maximum environmental compliance and rapid field execution from our Burnside base.',
      understandingOfScope: 'Reconstructing flood protection infrastructure while maintaining zero downstream turbidity along a sensitive salmon-bearing river corridor.',
      technicalMethodology: 'Installation of double turbidity curtains, phased stream dewatering, and placement of engineered granite armor stone on geotextile underlay.',
      relevantExperience: 'HRM Dartmouth Ferry Terminal and Build NS coastal revetments demonstrate our proven earthmoving and retaining experience.',
      teamResumes: 'Site Superintendent Thomas Kelly oversees earthworks with David Tremblay, P.Eng. providing engineering sign-off.',
      localEconomicImpact: 'All stone aggregates sourced from local HRM quarries, supporting the provincial construction industry.'
    }
  },
  {
    id: 'tender-7',
    tenderNumber: 'CS-2026-RFP-0310',
    title: 'CCRCE Cobequid Centre Storm Surge Dyke Restoration',
    buyer: 'Chignecto-Central Regional Centre for Education (CCRCE) / Province of NS',
    buyerCategory: 'Education / CCRCE',
    source: 'Nova Scotia Procurement Portal',
    sourcePortalUrl: 'https://procurement-portal.novascotia.ca/tenders',
    portalReferenceName: 'NS Tenders Portal (CCRCE-2026-0310)',
    closingDate: 'December 1, 2026 — 2:00 PM AST',
    daysRemaining: 52,
    estimatedValue: '$145,000 – $190,000 CAD',
    region: 'Northern NS (Pictou, Colchester, Antigonish)',
    relevanceScore: 68,
    recommendation: 'Consider',
    matchReasons: [
      'Flood berm and drainage civil work fits scope.',
      'Suitable as a fill-in winter schedule project.',
      'Requires travel to Truro in Colchester County.'
    ],
    summary: 'CCRCE requires earth dyke restoration and flap-gate check valve installation to prevent Salmon River tidal flooding.',
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
      strategicValue: 'Builds credentials with regional school centres in Northern NS.',
      strengths: [
        'Low technical complexity for our civil engineering team.',
        'Fast execution timeline minimizes site overhead.'
      ],
      risksAndMitigation: [
        'Risk: local earthmovers. Mitigation: offer tidal models.'
      ]
    },
    requirements: [
      { id: 't7-req-1', code: 'M1', type: 'Mandatory', title: 'NSCSA COR™ Safety', description: 'Certified under NS construction safety standard in good standing.' },
      { id: 't7-req-2', code: 'R1', type: 'Rated', title: 'Dyke & Tidal Gate Hydraulics', description: 'Prior experience with Bay of Fundy tidal conditions.', weightOrPoints: '30 Points' }
    ],
    complianceMatrix: [
      { id: 't7-cm-1', requirementCode: 'M1', requirementTitle: 'NSCSA COR™ Safety', requirementType: 'Mandatory', companyEvidence: 'Active NSCSA COR™ Certification valid to Nov 2027.', status: 'Met', actionNeeded: 'Attach safety certificate copy.' },
      { id: 't7-cm-2', requirementCode: 'R1', requirementTitle: 'Dyke & Tidal Gate Hydraulics', requirementType: 'Rated', companyEvidence: 'Extensive tidal experience; moderate Bay of Fundy history.', status: 'Partial', actionNeeded: 'Highlight Minas Basin model calibrations.' }
    ],
    proposalDraft: {
      executiveSummary: 'ACCM proposes a resilient dyke rehabilitation plan for CCRCE to eliminate tidal inundation risks on Cobequid Educational Centre athletic grounds in Truro.',
      understandingOfScope: 'Protecting public educational infrastructure through cost-effective earthwork and modern non-return tide check valves against Salmon River surges.',
      technicalMethodology: 'Compacted clay core reinforcement and installation of heavy-duty cast HDPE tide check valves designed for semi-diurnal tidal cycles.',
      relevantExperience: 'Provincial Department of Public Works civil retaining installations and tidal revetment construction across Nova Scotia.',
      teamResumes: 'David Tremblay, P.Eng. provides engineering design and oversight with Field Supervisor Thomas Kelly managing site earthworks.',
      localEconomicImpact: 'Local equipment hire and fill procurement sourced directly in Colchester County, supporting Truro businesses.'
    }
  },
  {
    id: 'tender-8',
    tenderNumber: 'TC-2026-CAN-4421',
    title: 'Digby Ferry Terminal Marine Fender System Design',
    buyer: 'Transport Canada / Public Services and Procurement Canada',
    buyerCategory: 'Federal (NS-located)',
    source: 'CanadaBuys',
    sourcePortalUrl: 'https://canadabuys.canada.ca/en',
    portalReferenceName: 'CanadaBuys Tender (Notice #TC-DIGBY-2026-4421)',
    closingDate: 'December 10, 2026 — 2:00 PM EST',
    daysRemaining: 61,
    estimatedValue: '$480,000 – $580,000 CAD',
    region: 'Annapolis Valley (Kings, Annapolis, Digby)',
    relevanceScore: 72,
    recommendation: 'Consider',
    matchReasons: [
      'Technical match for fender and berthing analysis.',
      'Federal project requiring active DOS clearance.',
      'Annapolis Valley site requires travel logistics.'
    ],
    summary: 'Transport Canada requires engineering design and berthing calculations for Digby Ferry Terminal fender replacement.',
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
      strategicValue: 'Positions firm for Atlantic Canada ferry terminal infrastructure.',
      strengths: [
        'Dartmouth Ferry Terminal fender design experience.',
        'Active federal DOS security clearance in good standing.'
      ],
      risksAndMitigation: [
        'Risk: 28-foot tides. Mitigation: inspect during neap tides.'
      ]
    },
    requirements: [
      { id: 't8-req-1', code: 'M1', type: 'Mandatory', title: 'Federal DOS Security Clearance', description: 'Company and key staff must hold valid federal security screening.' },
      { id: 't8-req-2', code: 'M2', type: 'Mandatory', title: 'PIANC Marine Fender Guidelines', description: 'Senior marine designer certified in PIANC 2020 berthing analysis.' },
      { id: 't8-req-3', code: 'R1', type: 'Rated', title: 'Ferry Terminal Engineering Experience', description: 'Past projects involving commercial Ro-Pax ferry berths.', weightOrPoints: '35 Points' }
    ],
    complianceMatrix: [
      { id: 't8-cm-1', requirementCode: 'M1', requirementTitle: 'Federal DOS Security Clearance', requirementType: 'Mandatory', companyEvidence: 'Active PSPC DOS reliability clearance in place.', status: 'Met', actionNeeded: 'Submit clearance documentation with bid.' },
      { id: 't8-cm-2', requirementCode: 'M2', requirementTitle: 'PIANC Marine Fender Guidelines', requirementType: 'Mandatory', companyEvidence: 'David Tremblay completed PIANC marine fender design course.', status: 'Met', actionNeeded: 'Attach PIANC certification record.' },
      { id: 't8-cm-3', requirementCode: 'R1', requirementTitle: 'Ferry Terminal Engineering Experience', requirementType: 'Rated', companyEvidence: 'Supported by 2024 Dartmouth Ferry Terminal berthing project.', status: 'Met', actionNeeded: 'Feature Dartmouth metrics prominently.' }
    ],
    proposalDraft: {
      executiveSummary: 'ACCM presents an engineered fender replacement strategy for Digby Ferry Terminal, drawing on our direct ferry berthing design experience and active federal DOS security clearance.',
      understandingOfScope: 'Accommodating heavy commercial Ro-Pax ferry tonnage under extreme Bay of Fundy tidal excursions and severe wave exposure.',
      technicalMethodology: 'Dynamic berthing velocity analysis, cone rubber fender specifications, and ultra-high molecular weight facing pads.',
      relevantExperience: 'HRM Dartmouth Ferry Terminal Berthing Dolphin project ($420,000, 2024) proves our technical capability on commercial transit docks.',
      teamResumes: 'David Tremblay, P.Eng. leads marine design with Marc Bourque supervising dive inspections.',
      localEconomicImpact: 'Nova Scotia engineering firm supporting a critical interprovincial marine transportation link.'
    }
  },
  {
    id: 'tender-9',
    tenderNumber: 'NSDPW-2026-T-0988',
    title: 'Highway 104 Asphalt Paving & Culvert Trenching',
    buyer: 'Nova Scotia Department of Public Works — Highway Construction',
    buyerCategory: 'Provincial (Nova Scotia)',
    source: 'Nova Scotia Procurement Portal',
    sourcePortalUrl: 'https://procurement-portal.novascotia.ca/tenders',
    portalReferenceName: 'NS Tenders Portal (DPW-2026-T-0988)',
    closingDate: 'November 10, 2026 — 2:00 PM AST',
    daysRemaining: 31,
    estimatedValue: '$3,400,000 – $4,200,000 CAD',
    region: 'Northern NS (Pictou, Colchester, Antigonish)',
    relevanceScore: 38,
    recommendation: 'Skip',
    matchReasons: [
      'Road asphalt paving outside marine civil focus.',
      'Requires heavy paving spread ACCM does not own.',
      'High bonding requirement disproportionate to SME.'
    ],
    summary: 'DPW invites bids for 14.5 km of highway milling, asphalt paving, and culvert replacement on Highway 104.',
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
      strategicValue: 'Low strategic fit; distracts resources from core coastal tenders.',
      strengths: [
        'Valid NSCSA COR™ safety certification in good standing.'
      ],
      risksAndMitigation: [
        'Severe Gap: lacks asphalt plant. Recommendation: skip bid.'
      ]
    },
    requirements: [
      { id: 't9-req-1', code: 'M1', type: 'Mandatory', title: 'NSCSA COR™ Safety', description: 'Active safety certification in good standing.' },
      { id: 't9-req-2', code: 'M2', type: 'Mandatory', title: 'Asphalt Plant Certification', description: 'Must own or lease certified hot-mix asphalt batching plant within 60km of site.' }
    ],
    complianceMatrix: [
      { id: 't9-cm-1', requirementCode: 'M1', requirementTitle: 'NSCSA COR™ Safety', requirementType: 'Mandatory', companyEvidence: 'Active NSCSA COR™ Safety Certification valid to Nov 2027.', status: 'Met', actionNeeded: 'Certificate in company file.' },
      { id: 't9-cm-2', requirementCode: 'M2', requirementTitle: 'Asphalt Plant Certification', requirementType: 'Mandatory', companyEvidence: 'ACCM does not operate asphalt plants.', status: 'Gap', actionNeeded: 'Disqualifying mandatory condition; skip bid.' }
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
    title: 'Halifax Transit Bus Depot High-Voltage Switchgear',
    buyer: 'Halifax Regional Municipality (HRM) — Fleet & Transit Electrification',
    buyerCategory: 'Municipal (HRM)',
    source: 'Halifax bids&tenders',
    sourcePortalUrl: 'https://halifax.bidsandtenders.ca/Module/Tenders/en',
    portalReferenceName: 'HRM bids&tenders™ Portal (Ref #2026-0022-FLEET)',
    closingDate: 'November 16, 2026 — 2:00 PM AST',
    daysRemaining: 37,
    estimatedValue: '$2,100,000 – $2,700,000 CAD',
    region: 'Halifax Regional Municipality (HRM)',
    relevanceScore: 24,
    recommendation: 'Skip',
    matchReasons: [
      'Zero fit: electrical and 25kV power scope.',
      'Lacks Master Electrician credential in profile.',
      'AI Recommendation: direct pass, focus on marine.'
    ],
    summary: 'HRM requires electrical general contractor for 25kV substation and bus fast-charging at Burnside Transit Centre.',
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
      strengths: [
        'Physical proximity in Burnside Industrial Park.'
      ],
      risksAndMitigation: [
        'Fatal Gap: high-voltage license missing. Skip bid.'
      ]
    },
    requirements: [
      { id: 't10-req-1', code: 'M1', type: 'Mandatory', title: 'Master Electrician License', description: 'Prime contractor must employ a Master Electrician registered in NS.' },
      { id: 't10-req-2', code: 'M2', type: 'Mandatory', title: 'High-Voltage Substation Record', description: 'Prior utility-grade 25kV substation installations.' }
    ],
    complianceMatrix: [
      { id: 't10-cm-1', requirementCode: 'M1', requirementTitle: 'Master Electrician License', requirementType: 'Mandatory', companyEvidence: 'ACCM is a marine firm, not an electrical contractor.', status: 'Gap', actionNeeded: 'Disqualifying mandatory condition.' },
      { id: 't10-cm-2', requirementCode: 'M2', requirementTitle: 'High-Voltage Substation Record', requirementType: 'Mandatory', companyEvidence: 'No high-voltage substation project history on file.', status: 'Gap', actionNeeded: 'Disqualifying condition; skip opportunity.' }
    ],
    proposalDraft: {
      executiveSummary: 'AI Recommendation: Direct Pass. Bidding is strongly discouraged due to mandatory electrical licensure requirements.',
      understandingOfScope: 'Out of scope for civil and marine engineering services.',
      technicalMethodology: 'N/A',
      relevantExperience: 'N/A',
      teamResumes: 'N/A',
      localEconomicImpact: 'N/A'
    }
  }
];

export const TENDERS = DUMMY_TENDERS;
export const FEATURED_TENDER_ID = 'tender-1';
