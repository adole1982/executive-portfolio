import { Type } from "@google/genai";

export interface TimelineEvent {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  startYear: number;
  endYear: number;
  type: 'education' | 'work';
  responsibilities: string[];
  tech: string[];
  achievements: string[];
  date: Date;
  logoUrl?: string;
}

export const timelineData: TimelineEvent[] = [
  {
    id: 'comcast-vp-ai',
    title: "VP, AI Planning & Enablement (Comcast Advertising)",
    organization: "Comcast",
    location: "Philadelphia, PA",
    period: "Jan 2026 – Aug 2026",
    startYear: 2026,
    endYear: 2026,
    type: 'work' as const,
    responsibilities: [
      "Enterprise AI Strategy & Governance: Architected an AI governance framework unifying legal, privacy, and technical intake to eliminate redundant software spend, optimize capital allocation, and establish rigorous go/no-go criteria for AI pilots.",
      "Pitch-to-Pay Transformation: Led cross-functional alignment with executive leaders to define AI roadmaps across the commercial lifecycle—from demand generation and pitch automation to backend system integration—expanding pitch velocity and automating backend execution.",
      "Workforce Enablement & Scaled Infrastructure: Built enablement infrastructure, including a centralized AI portal, to rapidly onboard employees across productivity platforms and specialized developer tools.",
      "Hands-On Agent & Workflow Prototyping: Directly designed AI agent and workflow prototypes to test feasibility, clear organizational friction, and establish actionable go/no-go guidance."
    ],
    tech: [
      "Copilot Studio",
      "ChatGPT Enterprise",
      "M365 Copilot",
      "Glean",
      "GitHub Copilot",
      "Replit",
      "Model Context Protocol (MCP)"
    ],
    achievements: [
      "Scaled AI Adoption: Rapidly enabled employees with a tiered AI tool ecosystem and centralized enablement portal.",
      "Pilots & Prototypes: Led hands-on pilots and prototypes with go/no-go frameworks focused on high-yield initiatives."
    ],
    date: new Date(2026, 0, 1),
    logoUrl: "/logos/comcast.png"
  },
  {
    id: 'comcast-vp-data',
    title: "VP1, Strategic Ops & Data Analytics (Impact & Inclusion)",
    organization: "Comcast",
    location: "Philadelphia, PA",
    period: "2018 – 2025",
    startYear: 2018,
    endYear: 2025,
    type: 'work' as const,
    responsibilities: [
      "Regulatory & Governance Infrastructure: Architected data infrastructure validating compliance with FCC commitments, Congressional inquiries, and Board reporting, protecting brand trust and supporting multi-billion-dollar transaction regulatory approvals.",
      "Enterprise Analytics Standardization: Established unified data standards and audit-ready dashboards delivering actionable operational intelligence, enabling Government Affairs to engage officials and drive municipal expansion.",
      "High-Visibility Strategic PMO: Directed PMO operations for an external Advisory Council of national leaders, synthesizing stakeholder input and overseeing multi-year program execution across enterprise units.",
      "Pioneered AI-Driven Insight Delivery: Developed Generative AI and NLP proof-of-concepts (knowledge assistants, conversational query interfaces, text analytics) to demonstrate how advanced tools accelerate insight extraction from complex governance data."
    ],
    tech: [
      "Generative AI / NLP POCs",
      "Tableau",
      "SQL Server",
      "Workday HRIS",
      "CyberGrants",
      "Enterprise Data Governance",
      "Huggingface",
      "Streamlit"
    ],
    achievements: [
      "Strategic Infrastructure Architect: Designed and scaled the data framework used to track and report on Comcast’s $100M commitment to social justice and digital equity.",
      "Executive Decision Engine: Unified fragmented global data across Comcast, NBCUniversal, and Sky into an audit-ready executive decision suite."
    ],
    date: new Date(2018, 0, 1),
    logoUrl: "/logos/comcast.png"
  },
  {
    id: 'comcast-dir-analytics',
    title: "Senior Director, Analytics (Customer Experience)",
    organization: "Comcast",
    location: "Philadelphia, PA",
    period: "2015 – 2018",
    startYear: 2015,
    endYear: 2018,
    type: 'work' as const,
    responsibilities: [
      "3-Tier Analytics Framework: Architected multi-layered reporting across Performance (system stability, latency, error rates), Usage (tool adoption, feature utilization, targeted training), and Effectiveness (workflow step reduction, FCR, NPS).",
      "Next-Gen Desktop Rollout: Leveraged objective performance analytics to build cross-divisional alignment, validate system reliability, and transition field operations off legacy infrastructure with zero service disruption.",
      "Analytics Center of Excellence: Managed 50+ production dashboards aligning Product and Engineering roadmaps directly with frontline operational performance."
    ],
    tech: [
      "Hadoop",
      "Netezza",
      "Kafka",
      "MongoDB",
      "Pentaho",
      "SQL Server",
      "Oracle",
      "AWS",
      "Tableau",
      "SAS"
    ],
    achievements: [
      "Multi-Million Dollar Efficiency: Identified and eliminated redundant agent workflows, generating multi-million-dollar annual operational savings.",
      "Technology Migration: Seamlessly transitioned frontline agents to next-gen desktop platforms while ensuring stability in Average Handle Time (AHT), First Call Resolution, and NPS, while reducing escalations."
    ],
    date: new Date(2015, 0, 1),
    logoUrl: "/logos/comcast.png"
  },
  {
    id: 'comcast-dir-di',
    title: "Senior Director, Analytics (Impact & Inclusion)",
    organization: "Comcast",
    location: "Philadelphia, PA",
    period: "2011 – 2015",
    startYear: 2011,
    endYear: 2015,
    type: 'work' as const,
    responsibilities: [
      "Post-Merger Enterprise Data Integration: Aggregated disparate data systems across combined corporate entities (Workforce, Supplier Diversity, Content Hours, Community Investment) into an audit-ready reporting framework.",
      "Regulatory Governance (FCC / DOJ): Governed analytics fulfilling federal merger commitments and established quarterly reporting rhythms for the Board of Directors and External Advisory Council.",
      "Strategic Capital Allocation: Analyzed cross-functional performance data to pinpoint operational gaps, advising executive leadership on strategic budget allocations and pipeline investments."
    ],
    tech: [
      "SAP Workforce Analytics",
      "Oracle",
      "SQL Server",
      "Tableau"
    ],
    achievements: [
      "Inaugural Industry Benchmarks: Built the analytics foundation for Comcast's annual corporate reporting, securing top-tier industry benchmark rankings.",
      "Rapid Advancement: Promoted twice across 4 years (Sr. Manager → Director → Sr. Director) to scale the enterprise analytics practice."
    ],
    date: new Date(2011, 0, 1),
    logoUrl: "/logos/comcast.png"
  },
  {
    id: 'lincoln-mgr',
    title: "Manager, Planning & Analytics (HR)",
    organization: "Lincoln Financial Group",
    location: "Philadelphia, PA",
    period: "2010 – 2011",
    startYear: 2010,
    endYear: 2011,
    type: 'work' as const,
    responsibilities: [
      "Executive Reporting Suite: Architected the enterprise's first centralized reporting suite for the CEO and CHRO, unifying fragmented HR data across business units.",
      "Governance & Health Metrics: Standardized enterprise HR data governance to reliably evaluate organizational health and justify executive budget allocations.",
      "Strategic ROI Modeling: Managed HR Budget and developed financial feasibility and impact models for large-scale HRIS platform transformations."
    ],
    tech: [
      "Tableau",
      "Crystal Reports",
      "Excel",
      "HRIS Data Modeling"
    ],
    achievements: [
      "Foundational People-Data Ecosystem: Unified fragmented HR data and established governance to evaluate organizational health and justify budget allocation."
    ],
    date: new Date(2010, 0, 1),
    logoUrl: "/logos/lfg.png"
  },
  {
    id: 'lincoln-mgr-hr',
    title: "Manager, Business Partner (HR)",
    organization: "Lincoln Financial Group",
    location: "Philadelphia, PA",
    period: "2008 – 2010",
    startYear: 2008,
    endYear: 2010,
    type: 'work' as const,
    responsibilities: [
      "Enterprise Consulting: Provided strategic HR consulting to executive leadership across Finance, Legal, Marketing, and HR during corporate restructuring."
    ],
    tech: [
      "Organizational Design",
      "Change Management",
      "Matrixed Operations"
    ],
    achievements: [],
    date: new Date(2008, 0, 1),
    logoUrl: "/logos/lfg.png"
  },
  {
    id: 'lincoln-pdp',
    title: "Associate, Professional Development Program (Rotational)",
    organization: "Lincoln Financial Group",
    location: "Philadelphia, PA",
    period: "2005 – 2008",
    startYear: 2005,
    endYear: 2008,
    type: 'work' as const,
    responsibilities: [
      "Leadership Rotation: Completed a selective 3-year leadership development program spanning Compensation & Retirement Benefits, HR Business Partnering, and Talent Acquisition.",
      "Organizational Design: Partnered with executive leaders to drive organizational design and process optimization projects.",
      "Budget Management: Led Budget Management efforts for Human Resources, preparing financial briefings and reports for CHRO and executive team."
    ],
    tech: [
      "Compensation & Benefits Analysis",
      "Process Optimization",
      "Workforce Modeling",
      "Budget Management"
    ],
    achievements: [
      "Rotational Graduate: Successfully delivered business impact across 3 separate functional rotations, accelerating promotion into management."
    ],
    date: new Date(2005, 0, 1),
    logoUrl: "/logos/lfg.png"
  }
].sort((a, b) => a.date.getTime() - b.date.getTime());

export const academicData: TimelineEvent[] = [
  {
    id: 'sju-ms-bi',
    title: "M.S., Business Intelligence & Analytics",
    organization: "St. Joseph’s University",
    location: "Philadelphia, PA",
    period: "2013 – 2017",
    startYear: 2013,
    endYear: 2017,
    type: 'education' as const,
    responsibilities: [
      "Predictive Modeling & Decision Science: Mastered advanced classification and forecasting techniques.",
      "Data Infrastructure & ETL: Engineered end-to-end data pipelines for large-scale, multi-source databases.",
      "Big Data Strategy: Developed understanding of distributed computing (Hadoop) and NoSQL architectures."
    ],
    tech: [
      "SAS / JMP / Tableau",
      "Hadoop / Oracle"
    ],
    achievements: [
      "Operational Decision Science: Successfully aligned analytical ecosystems with executive-level portfolio prioritization and strategic 'Source of Truth' creation."
    ],
    date: new Date(2013, 0, 1),
    logoUrl: "/logos/sju_big.png"
  },
  {
    id: 'upenn-ms-od',
    title: "M.S., Organizational Dynamics",
    organization: "University of Pennsylvania",
    location: "Philadelphia, PA",
    period: "2007 – 2013",
    startYear: 2007,
    endYear: 2013,
    type: 'education' as const,
    responsibilities: [
      "Global PMO & Strategic Execution: Mastered advanced project management frameworks with a focus on enterprise coaching.",
      "Political Navigation & Diplomacy: Specialized coursework at HEC Paris and ENA focusing on global governance and stakeholder alignment.",
      "Human-Centric Change Management: Frameworks for leading cultural shifts during periods of high-growth."
    ],
    tech: [
      "Strategic Stakeholder Alignment",
      "Executive Coaching Frameworks",
      "Global Organizational Governance"
    ],
    achievements: [],
    date: new Date(2007, 0, 1),
    logoUrl: "/logos/upenn.png"
  },
  {
    id: 'jhu-ba',
    title: "B.A., Psychology | Minor, Entrepreneurship",
    organization: "The Johns Hopkins University",
    location: "Baltimore, MD",
    period: "2001 – 2005",
    startYear: 2001,
    endYear: 2005,
    type: 'education' as const,
    responsibilities: [
      "Behavioral Science & Human Logic: Study of human behavior and decision-making as a foundation for leadership.",
      "Venture Development: Exploring the intersection of emerging technology and business strategy.",
      "Strategic Product Vision: Conceptual model and financial feasibility study for next-generation streaming video architectures."
    ],
    tech: [
      "The Psychology of Results & Motivation",
      "User-Centric Strategic Thinking",
      "Financial Complexity Modeling"
    ],
    achievements: [
      "Strategic Foundation: Established a career-long framework for bridging the gap between technical possibilities and human-centric business results."
    ],
    date: new Date(2001, 0, 1),
    logoUrl: "/logos/jhu.png"
  }
].sort((a, b) => a.date.getTime() - b.date.getTime());
