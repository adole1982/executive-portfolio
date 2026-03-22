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
    title: "VP, AI Planning & Enablement",
    organization: "Comcast Advertising",
    location: "Philadelphia, PA",
    period: "2025 – Present",
    startYear: 2025,
    endYear: 2026, // Current year + 1 for visualization
    type: 'work' as const,
    responsibilities: [
      "Strategic Agentic Frameworks: Facilitating high-level technical forums between Enterprise Architecture and Business Units to define standard AI development protocols, including the adoption of the Model Context Protocol (MCP) for data interoperability.",
      "Governance & Standardization: Leading the inquiry and defining the enterprise norms for how AI is built and deployed, ensuring consistent architectural standards and operational excellence across the organization."
    ],
    tech: [
      "Model Context Protocol (MCP)",
      "Agentic AI Framework Design",
      "Enterprise AI Governance Standards"
    ],
    achievements: [
      "Executive AI Steering Committee: Established a centralized forum to synchronize the AI roadmap across Ad Tech and Media Sales and maximize the collective scale of the organization.",
      "Strategic Orchestrator: Defining the 'Rules of the Road' for enterprise AI, ensuring that technical innovation aligns with global operational standards."
    ],
    date: new Date(2025, 0, 1),
    logoUrl: "/logos/advertising.png"
  },
  {
    id: 'comcast-vp-data',
    title: "AVP, Strategic Operations & Analytics (Impact & Inclusion)",
    organization: "Comcast",
    location: "Philadelphia, PA",
    period: "2018 – 2025",
    startYear: 2018,
    endYear: 2025,
    type: 'work' as const,
    responsibilities: [
      "Enterprise Analytics Transformation: Spearheaded the shift from U.S.-only reporting to global enterprise-wide reporting as well as business-unit-specific reporting.",
      "Strategic PMO Leadership: Led the Project Management Office for high-stakes corporate programs, ensuring operational excellence and cross-functional execution.",
      "External Governance: Managed the Impact & Inclusion Council, facilitating strategic engagement with external advisors to guide enterprise-level accountability."
    ],
    tech: [
      "SQL Server / Tableau",
      "Workday (HRIS) / CyberGrants Integration",
      "Global Ecosystem Data Governance (Comcast, NBCU, Sky)"
    ],
    achievements: [
      "Strategic Infrastructure Architect: Designed and scaled the data framework used to track and report on Comcast’s $100M commitment to social justice and digital equity.",
      "Executive Decision Engine: Unified fragmented global data into a single, executive-ready decision engine for the Executive Leadership Team (ELT)."
    ],
    date: new Date(2018, 0, 1),
    logoUrl: "/logos/comcast.png"
  },
  {
    id: 'comcast-dir-analytics',
    title: "Sr Director, Analytics (CX Tools & Technology)",
    organization: "Comcast",
    location: "Philadelphia, PA",
    period: "2015 – 2018",
    startYear: 2015,
    endYear: 2018,
    type: 'work' as const,
    responsibilities: [
      "Analytics Center of Excellence (CoE): Established and led a 4-pillar CoE (Service, Knowledge Management, New Feature Rollout, and Advanced Analytics) to standardize CX Tool & Technology data strategy.",
      "Enterprise 'Source of Truth': Owned the centralized database and reporting architecture used by HQ and all regional divisions to measure agent tool performance.",
      "Product & Engineering Partnership: Acted as the strategic bridge to Technology teams, using data to identify and resolve latency, response time, and system outages."
    ],
    tech: [
      "Hadoop / Netezza / Kafka / MongoDB",
      "AWS Cloud (Early Stage Testing)",
      "Pentaho / SQL Server / Oracle"
    ],
    achievements: [
      "Einstein 360 Strategic Data Partner: Architected the comprehensive reporting infrastructure for the enterprise-wide rollout of Einstein 360 to 10,000+ agents.",
      "Operational Correlation: Directly linked tool performance with key improvements in AHT (Average Handle Time), FCR (First Call Resolution), and NPS."
    ],
    date: new Date(2015, 0, 1),
    logoUrl: "/logos/comcast.png"
  },
  {
    id: 'comcast-dir-di',
    title: "Director, Reporting & Analytics (DE&I)",
    organization: "Comcast",
    location: "Philadelphia, PA",
    period: "2011 – 2015",
    startYear: 2011,
    endYear: 2015,
    type: 'work' as const,
    responsibilities: [
      "Unified Data Environments: Architected the first integrated data environments for HR, Programming, and Procurement to drive enterprise-wide transparency.",
      "Standardizing Data Strategy: Established the governance frameworks and data standards required for long-term organizational transformation.",
      "Executive & Board Reporting: Developed high-trust reporting structures for the Board of Directors and External Advisory Council."
    ],
    tech: [
      "SAP / SAP Workforce Analytics",
      "Oracle (Procurement) / SQL Server Integration",
      "Tableau (Executive-Level Visualization)"
    ],
    achievements: [
      "Inaugural Benchmarking Framework: Delivered the company’s first unified benchmarking report, creating the technical foundation for the annual Comcast Impact Report.",
      "Data Integrity Oversight: Ensured rigorous standards across multiple enterprise inputs to maintain a single, 'Board-ready' source of truth."
    ],
    date: new Date(2011, 0, 1),
    logoUrl: "/logos/comcast.png"
  },
  {
    id: 'lincoln-mgr',
    title: "Manager, Planning & Analytics",
    organization: "Lincoln Financial Group",
    location: "Philadelphia, PA",
    period: "2010 – 2011",
    startYear: 2010,
    endYear: 2011,
    type: 'work' as const,
    responsibilities: [
      "Enterprise HR Data Consolidation: Replaced siloed, business-line-specific spreadsheets with a single, unified enterprise view of the workforce for the CEO and CHRO.",
      "Executive Planning & Governance: Standardized HR data governance to ensure consistency across diverse functions and business units.",
      "Strategic ROI Modeling: Developed financial impact models for 'big-ticket' budget requests, including large-scale HRIS platform transformations."
    ],
    tech: [
      "Evolved Analytics Stack (Tableau, Crystal Reports, Excel)",
      "Executive Dashboard Optimization",
      "HRIS Platform Data Modeling"
    ],
    achievements: [
      "First Unified HR Data Environment: Architected the organization’s first centralized people-data ecosystem for strategic C-suite decision-making."
    ],
    date: new Date(2010, 0, 1),
    logoUrl: "/logos/lfg.png"
  },
  {
    id: 'lincoln-pdp',
    title: "Professional Development Program (Rotational)",
    organization: "Lincoln Financial Group",
    location: "Philadelphia, PA",
    period: "2005 – 2008",
    startYear: 2005,
    endYear: 2008,
    type: 'work' as const,
    responsibilities: [
      "Cross-Functional Rotations: Completed high-impact rotations across Talent Acquisition, Executive Compensation, and HR Business Partner.",
      "Strategic Reorganization: Partnered with executive leadership to execute organizational design and restructuring initiatives.",
      "Corporate Advocacy Support: Collaborated with government relations to brief legislative staffers on the economic benefits of long-term savings products."
    ],
    tech: [
      "Process Optimization (Escheatment Workflows)",
      "Collaborative Strategy & Executive Pitching",
      "Compensation & Retirement Benchmarking"
    ],
    achievements: [],
    date: new Date(2005, 0, 1),
    logoUrl: "/logos/lfg.png"
  },
  {
    id: 'jhu-ms-ai',
    title: "M.S., Artificial Intelligence",
    organization: "The Johns Hopkins University",
    location: "Baltimore, MD",
    period: "2026 – 2029",
    startYear: 2026,
    endYear: 2029,
    type: 'education' as const,
    responsibilities: [
      "Advanced AI Systems Engineering: Design, development, and deployment of autonomous systems.",
      "Agentic Frameworks & RAG: Applying hands-on experience with LangChain and Retrieval-Augmented Generation to engineer data-driven AI agents.",
      "Strategic AI Orchestration: Bridging the gap between technical AI capabilities and enterprise-level business objectives."
    ],
    tech: [
      "Autonomous Systems Architecture",
      "Machine Learning Operations (MLOps)",
      "Natural Language Processing (NLP)"
    ],
    achievements: [
      "Builder-Leader Integration: Targeted expertise in transitioning from 'Data Analysis' to 'AI Construction' to build and scale enterprise AI tools."
    ],
    date: new Date(2026, 0, 1),
    logoUrl: "/logos/JHU_engineering.png"
  },
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
      "Hadoop / Oracle",
      "AHT Forecasting Models"
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
    achievements: [
      "Strategic Diplomat: Leveraged Ivy League and European institutional training to navigate complex political and operational landscapes."
    ],
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
