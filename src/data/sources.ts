import { VerifiedSource } from '../types/procurement';

export const VERIFIED_NS_SOURCES: VerifiedSource[] = [
  {
    name: 'Nova Scotia Procurement Portal / Public Tenders',
    shortName: 'NS Tenders Portal',
    url: 'https://procurement-portal.novascotia.ca/tenders',
    managedBy: 'Procurement Services, Province of Nova Scotia',
    description: 'Central portal hosting provincial government department tenders, Crown corporations, and broader public sector solicitations in accordance with the Nova Scotia Public Procurement Act.',
    relevanceToSMEs: 'Primary hub for provincial tenders >$10k, including Department of Public Works, Build Nova Scotia, and Department of Natural Resources.',
    legalContext: 'Operates pursuant to the Nova Scotia Public Procurement Act (SNS 2011, c. 12) promoting open, fair, and transparent competition.'
  },
  {
    name: 'Tender Opportunities Notification Service (TONS)',
    shortName: 'TONS Email Alerts',
    url: 'https://www.novascotia.ca/programs-and-services/tender-opportunities-notification-service-tons',
    managedBy: 'Service Nova Scotia & Internal Services',
    description: 'Free daily notification service delivering automated email notices at 6:00 AM AST for tenders matching selected commodity codes and categories.',
    relevanceToSMEs: 'Essential early-warning system for NS suppliers to track relevant opportunities without manual daily portal checks.',
    legalContext: 'Free public service for registered suppliers with a My NS Account.'
  },
  {
    name: 'Halifax Regional Municipality bids&tenders™',
    shortName: 'HRM bids&tenders',
    url: 'https://halifax.bidsandtenders.ca/Module/Tenders/en',
    managedBy: 'Halifax Regional Municipality (HRM) Procurement',
    description: 'The official digital e-bidding platform for the Halifax Regional Municipality since May 1, 2023, encompassing municipal civil works, transit, and parks.',
    relevanceToSMEs: 'Covers municipal contracts above $10,000 across HRM, incorporating the HRM Social Value Procurement Policy.',
    legalContext: 'HRM Administrative Order 2020-004-ADM (Procurement Policy) and Atlantic Trade Agreement guidelines.'
  },
  {
    name: 'CanadaBuys (Federal Opportunities in Nova Scotia)',
    shortName: 'CanadaBuys',
    url: 'https://canadabuys.canada.ca/en',
    managedBy: 'Public Services and Procurement Canada (PSPC)',
    description: 'Federal electronic tendering service hosting Defence Construction Canada (DCC), DFO Small Craft Harbours, and Transport Canada procurements located within Nova Scotia.',
    relevanceToSMEs: 'Direct access to federal contracts in Atlantic Canada including Halifax Naval Base (CFB Halifax), Shearwater, and federal wharves.',
    legalContext: 'Governed by the Canadian Free Trade Agreement (CFTA) and Comprehensive Economic and Trade Agreement (CETA).'
  },
  {
    name: 'Nova Scotia Health Procurement & MASH Sector',
    shortName: 'NS Health & MASH',
    url: 'https://www.nshealth.ca/',
    managedBy: 'Nova Scotia Health Authority & IWK Health Centre',
    description: 'Procures healthcare clinical engineering, facility capital projects, and specialized infrastructure. E-bidding is coordinated through SAP Ariba & provincial portals.',
    relevanceToSMEs: 'Major source of specialized HVAC, facilities management, civil stabilization, and biomedical consulting contracts across Nova Scotia hospitals.',
    legalContext: 'MASH (Municipalities, Academic institutions, School boards, Health authorities) procurement standards.'
  },
  {
    name: 'Build Nova Scotia Procurement',
    shortName: 'Build Nova Scotia',
    url: 'https://buildns.ca/',
    managedBy: 'Build Nova Scotia (Provincial Crown Corporation)',
    description: 'Oversees high-impact provincial strategic infrastructure, including waterfront redevelopments, healthcare redevelopment infrastructure, and rural broadband.',
    relevanceToSMEs: 'Strategic partner for marine contractors, architectural planners, and civil engineering firms along Nova Scotia shorelines.',
    legalContext: 'Provincial Crown Corporation operating under NS Public Procurement thresholds.'
  }
];
