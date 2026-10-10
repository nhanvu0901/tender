# Nemo — Nova Scotia Public Tenders (Demo Prototype)

**Nemo** is a clickable, high-fidelity demo prototype inspired by "Awardly", specifically tailored for Nova Scotia small-and-medium enterprises (SMEs) bidding on public sector contracts.

It showcases a complete, 5-stage end-to-end user journey for a local Nova Scotia business navigating provincial, municipal, federal, and MASH-sector procurement opportunities.

> **DEMO DISCLAIMER:**  
> This application is a demonstration prototype with simulated AI logic and fictional sample data. All businesses, tender numbers, dollar amounts, personnel, and AI evaluations are fictional. Not affiliated with or endorsed by the Government of Nova Scotia or Halifax Regional Municipality. Live procurement portal links are provided for reference only.

---

## 🧭 The 5-Step User Journey

The prototype features a linear interactive stepper that allows clicking end-to-end through:

1. **Company Procurement Profile (`Step 1`)**
   - Pre-filled profile for a Halifax-area SME: **Atlantic Coastal Civil & Marine Ltd. (ACCM)**, based in Burnside, Dartmouth, NS.
   - Core technical capabilities (marine geotechnical, tidal seawall rehabilitation, sonar bathymetry).
   - Standard classification codes: **NAICS** (237990, 541330, 541370) and **UNSPSC** (72141512, 81101500, 72152707).
   - Nova Scotia business certifications: **NSCSA COR™ Safety Certified**, **ISO 9001:2015**, **Nova Scotia Registry of Joint Stocks (Good Standing)**, **Engineers Nova Scotia Certificate of Authorization (COA)**, and **PSPC DOS Reliability Security Screening**.
   - Interactive Nova Scotia service regions (HRM, South Shore, Annapolis Valley, Cape Breton, Northern NS).
   - 4 verified past public contracts in Nova Scotia (HRM Transit, Build Nova Scotia, NS Department of Public Works, DFO Small Craft Harbours).

2. **Matched Opportunities Feed (`Step 2`)**
   - 10 realistic public-sector tender opportunities in Nova Scotia.
   - Multi-parameter filtering by **NS Region**, **Procurement Source**, **Pursue Recommendation**, and live keyword search.
   - Displays buyer department, closing date countdown, estimated contract value, AI relevance score (0–100), and bulleted match reasons.
   - Clear recommendations: **Pursue** (high fit), **Consider** (conditional fit), **Skip** (out of scope).

3. **Tender Detail & RFP Analysis (`Step 3`)**
   - Detailed breakdown for the selected tender (fully worked for flagship tender `HRM-2026-RFP-0842: North West Arm Coastal Seawall Inspection & Climate Resilience Upgrades`).
   - Critical milestone schedule (Notice posted, inquiry cut-off, closing, anticipated award).
   - AI-extracted clauses separated into **Mandatory Criteria (Pass/Fail)** vs **Rated Technical Criteria (Scored with points)**.
   - Automated **Bid / No-Bid Decision Panel** showing win probability, strategic value, company strengths, and risk mitigation strategies.
   - Simulated "Re-Run AI Extraction" action with animated feedback.

4. **Compliance & Readiness Matrix (`Step 4`)**
   - Requirement-by-requirement audit mapping tender criteria directly to ACCM company profile evidence.
   - Status indicators: **Met** (Green), **Partial** (Amber - requires attachment), **Gap** (Red).
   - Action items (e.g. attaching NSCSA COR certificate copy, P.Eng seal confirmation).
   - Interactive status filtering and overall Compliance Readiness meter (92%).

5. **AI Proposal Draft (`Step 5`)**
   - Turnkey draft generation tailored to the tender and Nova Scotia procurement standards.
   - 6 structured sections:
     1. Executive Summary & Value Proposition
     2. Understanding of Requirements & Scope
     3. Technical Methodology & Work Plan
     4. Relevant Past Experience & References
     5. Proposed Team & Key Personnel
     6. Nova Scotia Social Value & Local Economic Impact
   - Features: Section tabs or full proposal view, in-line draft editing, word counter.
   - **One-click AI Refinement chips** (e.g., emphasizing COR safety score, 45-minute local mobilization, HalifACT 2050 climate alignment).
   - **Copy to Clipboard** and **Export to Text / Markdown** download buttons.
   - Official portal submission guidance linking to verified e-bidding portals.

---

## 🏛️ Real Nova Scotia Procurement Sources (Verified References)

The prototype reflects the regulatory environment governed by the **Nova Scotia Public Procurement Act** (SNS 2011, c. 12) and references the following live official portals:

| Source Name | Organization | Verified URL | Description |
|---|---|---|---|
| **Nova Scotia Procurement Portal** | Procurement Services, Province of Nova Scotia | [https://procurement-portal.novascotia.ca/tenders](https://procurement-portal.novascotia.ca/tenders) | Central hub for provincial government departments, Crown corporations, and broader public sector solicitations >$10k. |
| **TONS (Tender Opportunities Notification Service)** | Procurement Branch, Department of Service Nova Scotia | [https://procurement-portal.novascotia.ca/tons](https://procurement-portal.novascotia.ca/tons) | Free daily notification service delivering automated tender alerts matching selected commodity codes at 6:00 AM AST. |
| **Halifax Regional Municipality bids&tenders™** | HRM Procurement Department | [https://halifax.bidsandtenders.ca/Module/Tenders/en](https://halifax.bidsandtenders.ca/Module/Tenders/en) | Primary municipal e-bidding portal for Halifax public works, parks, and transit procurements since May 1, 2023 under Administrative Order 2022-012-ADM. |
| **CanadaBuys** | Public Services and Procurement Canada (PSPC) | [https://canadabuys.canada.ca/en](https://canadabuys.canada.ca/en) | Federal tender portal hosting Canadian Coast Guard, DFO, and Transport Canada opportunities situated in Nova Scotia. |
| **Nova Scotia Health Procurement** | Nova Scotia Health Authority (MASH Sector) | [https://www.nshealth.ca/about-nova-scotia-health/doing-business-nsh](https://www.nshealth.ca/about-nova-scotia-health/doing-business-nsh) | Healthcare capital infrastructure and clinical engineering solicitations, coordinated through SAP Ariba and provincial tenders. |
| **Build Nova Scotia** | Provincial Crown Corporation | [https://buildns.ca/partner-with-us/procurement/](https://buildns.ca/partner-with-us/procurement/) | High-impact coastal waterfront and strategic infrastructure developments across Nova Scotia. |

---

## 📦 Tech Stack

- **Framework:** React 18 + TypeScript + Vite 6
- **Styling:** Tailwind CSS v4 (with `@tailwindcss/vite`)
- **Icons:** Lucide React
- **Architecture:** 100% static client-side application (zero external backend, zero auth, simulated AI delay)

---

## 🚀 How to Run Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start the local dev server
```bash
npm run dev
```
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) in your browser.

### 3. Open in AO Browser panel
```bash
ao preview http://127.0.0.1:5173/
```

### 4. Build for production
```bash
npm run build
```
Creates an optimized static bundle in `dist/`.

---

## 📝 License
Demo prototype prepared for local evaluation. All rights reserved.
