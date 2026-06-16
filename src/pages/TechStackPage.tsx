import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database } from 'lucide-react';
import { Navbar } from '../components/Navbar';


// ── SVG Icons ──────────────────────────────────────────────────────────────

const N8nIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2.5" className="stroke-orange-500 fill-orange-100" />
    <circle cx="6" cy="15" r="2.5" className="stroke-orange-600 fill-orange-200" />
    <circle cx="18" cy="15" r="2.5" className="stroke-red-500 fill-red-100" />
    <line x1="12" y1="7.5" x2="6" y2="12.5" className="stroke-slate-300" />
    <line x1="12" y1="7.5" x2="18" y2="12.5" className="stroke-slate-300" />
  </svg>
);

const CrewAiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" className="stroke-blue-600" />
    <circle cx="9" cy="7" r="4" className="stroke-blue-600 fill-blue-100" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" className="stroke-cyan-500" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" className="stroke-cyan-500" />
  </svg>
);

const LangChainIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" className="stroke-emerald-600" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" className="stroke-emerald-500" />
  </svg>
);

const ArizePhoenixIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" className="stroke-orange-500 fill-orange-50" />
  </svg>
);

const AntigravityIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="12" rx="3" ry="9" className="stroke-blue-600" />
    <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(45 12 12)" className="stroke-emerald-500" />
    <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(-45 12 12)" className="stroke-purple-500" />
    <circle cx="12" cy="12" r="1.5" className="fill-slate-900 stroke-slate-900" />
  </svg>
);

const ClaudeCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" className="stroke-amber-700" />
    <line x1="12" y1="19" x2="20" y2="19" className="stroke-amber-700" />
  </svg>
);

const CursorIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" className="stroke-sky-500 fill-sky-500/10" />
  </svg>
);

const CopilotIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48c0-.24-.01-.88-.01-1.72c-2.78.6-3.37-1.34-3.37-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.9-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.9 1.52 2.34 1.08 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.94c0-1.1.39-1.99 1.03-2.69c-.1-.25-.45-1.28.1-2.65c0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02c.55 1.37.2 2.4.1 2.65c.64.7 1.03 1.59 1.03 2.69c0 3.84-2.34 4.68-4.57 4.93c.36.31.68.92.68 1.85c0 1.34-.01 2.42-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" className="stroke-violet-600 fill-violet-50" />
  </svg>
);

const SqlServerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" className="stroke-red-600" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" className="stroke-red-600" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" className="stroke-red-500" />
  </svg>
);

const BigQueryIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 17L12 22L22 17" className="stroke-cyan-600" />
    <path d="M2 12L12 17L22 12" className="stroke-cyan-600" />
    <path d="M12 2L2 7L12 12L22 7L12 2Z" className="stroke-cyan-700 fill-cyan-50" />
  </svg>
);

const DatabricksIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3L3 20h18L12 3z" className="stroke-orange-600" />
    <path d="M12 3L7.5 13h9L12 3z" className="stroke-red-600 fill-red-50" />
    <path d="M7.5 13L3 20h4.5l2.25-5H7.5z" className="stroke-orange-500 fill-orange-100" />
    <path d="M16.5 13L21 20h-4.5l-2.25-5H16.5z" className="stroke-orange-500 fill-orange-100" />
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l10 17H2L12 3z" className="stroke-slate-950 fill-slate-950" />
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────

const TECH_CATEGORIES = [
  {
    id: 'orchestration',
    title: 'ORCHESTRATION & AGENTIC WORKFLOWS',
    categoryIcon: <Brain className="w-5 h-5" />,
    summary: 'Designing and implementing autonomous multi-agent systems and event-driven workflows that streamline operations, minimize manual intervention, and seamlessly bridge the gap between LLMs and enterprise operations.',
    tools: [
      { name: 'n8n', desc: 'Node-based production workflow automation', icon: <N8nIcon /> },
      { name: 'CrewAI', desc: 'Autonomous multi-agent system orchestration', icon: <CrewAiIcon /> },
      { name: 'LangChain', desc: 'Structured application chains & LLM wrappers', icon: <LangChainIcon /> },
      { name: 'Arize Phoenix', desc: 'LLM observability, evaluation, and tracing', icon: <ArizePhoenixIcon /> },
    ]
  },
  {
    id: 'dev',
    title: 'AGENTIC DEVELOPMENT ENVIRONMENTS',
    categoryIcon: <Cpu className="w-5 h-5" />,
    summary: 'Leveraging next-generation AI coding agents and IDE environments to accelerate the software development lifecycle, optimize code quality, and pioneer agentic development workflows.',
    tools: [
      { name: 'Google Antigravity 2.0', desc: 'Next-gen agentic software coding SDK', icon: <AntigravityIcon /> },
      { name: 'Claude Code', desc: 'CLI-based agentic developer assistant', icon: <ClaudeCodeIcon /> },
      { name: 'Cursor', desc: 'AI-first code editor for rapid prototyping', icon: <CursorIcon /> },
      { name: 'GitHub Copilot', desc: 'AI-powered development, debugging, and chat assistance', icon: <CopilotIcon /> },
    ]
  },
  {
    id: 'data',
    title: 'DATA INFRASTRUCTURE & DEPLOYMENT',
    categoryIcon: <Database className="w-5 h-5" />,
    summary: 'Architecting enterprise-scale data warehouses, writing optimized data processing pipelines, and managing rapid CI/CD deployment pipelines to deliver secure, production-grade applications.',
    tools: [
      { name: 'SQL Server', desc: 'Relational database design and management', icon: <SqlServerIcon /> },
      { name: 'Google BigQuery', desc: 'Enterprise data warehousing and big data analytics', icon: <BigQueryIcon /> },
      { name: 'Databricks', desc: 'Scalable data pipelines and machine learning', icon: <DatabricksIcon /> },
      { name: 'Vercel & GitHub CI/CD', desc: 'Automated cloud hosting and continuous deployment', icon: <VercelIcon /> },
    ]
  },
];

// ── Component ──────────────────────────────────────────────────────────────

export const TechStackPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white relative overflow-hidden"
    >
      {/* Philadelphia Background */}
      <div className="fixed bottom-0 left-0 w-full h-[25vh] md:h-[40vh] pointer-events-none z-0 opacity-40 flex items-end justify-center">
        <img
          src="/logos/philadelphia.png"
          alt=""
          className="w-full h-full object-contain object-bottom grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <Navbar />

      {/* Grid Header Background */}
      <div className="pt-[72px]">
        <div
          className="relative py-20 overflow-hidden"
          style={{
            backgroundImage:
              'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white pointer-events-none"/>
          
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <header className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-4 md:mb-6 leading-tight tracking-tight">
                The Engine <br />
                <span className="italic font-normal text-slate-600">Room.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
                Leveraging state-of-the-art AI models, frameworks, and data environments to build autonomous systems that drive ROI.
              </p>
            </header>
          </div>
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pb-24 relative z-10">

        {/* Tool Categories (tab switcher stays — same as original scrolling page) */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 md:p-12 shadow-xl shadow-slate-100/50">

            {/* Tabs */}
            <div className="flex border-b border-slate-200 mb-12 overflow-x-auto no-scrollbar">
              {TECH_CATEGORIES.map((cat, i) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-3 px-6 md:px-8 py-5 text-xs md:text-sm font-bold tracking-wider uppercase border-b-2 transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    i === activeTab
                      ? 'border-[#1E40AF] text-[#1E40AF] bg-blue-50/30'
                      : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {cat.categoryIcon}
                  <span>{cat.title}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              {/* Left: Summary */}
              <div className="lg:col-span-5 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100 pb-8 lg:pb-0 lg:pr-12">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-6 leading-tight">
                  {TECH_CATEGORIES[activeTab].title}
                </h3>
                <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-normal">
                  {TECH_CATEGORIES[activeTab].summary}
                </p>
              </div>

              {/* Right: Tool Cards */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {TECH_CATEGORIES[activeTab].tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="p-6 bg-white hover:bg-blue-50/20 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex items-start gap-4 group/tile"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm flex-shrink-0 group-hover/tile:scale-110 transition-transform duration-300">
                        {tool.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xl mb-1 group-hover/tile:text-[#1E40AF] transition-colors duration-300">
                          {tool.name}
                        </h4>
                        <p className="text-base text-slate-600 leading-relaxed font-normal">
                          {tool.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mt-4">
          <div className="p-8 md:p-12 bg-slate-50 border border-slate-200 rounded-3xl relative">
            <div className="w-full">
              <span className="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase block mb-4">
                Engineering Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Architectural Principles
              </h2>
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-normal mb-10">
                The tools are only part of the equation. These governing principles define how and why they are deployed at scale.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-2">Governance & Compliance First</h4>
                  <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-normal">
                    Every agentic system is designed with auditability, role-based access, and alignment guardrails from day one — not as an afterthought.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-2">Human-in-the-Loop AI Design</h4>
                  <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-normal">
                    Autonomous agents handle high-volume, repeatable operations while humans retain final authority on critical decision points and model outputs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </motion.div>
  );
};
