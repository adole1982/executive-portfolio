import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Database, Brain, Sparkles, GraduationCap, ChevronDown } from 'lucide-react';

const ROLES = ["THE ORCHESTRATOR", "THE STRATEGIST", "AI LEADER"];

// Custom Tech Stack Logos
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

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2H9a5 5 0 0 0-5 5v3a5 5 0 0 0 5 5h3v-2a3 3 0 0 1 3-3h3a3 3 0 0 0 3-3V7a5 5 0 0 0-5-5h-3z" className="stroke-sky-600 fill-sky-100" />
    <path d="M12 22h3a5 5 0 0 0 5-5v-3a5 5 0 0 0-5-5h-3v2a3 3 0 0 1-3 3H6a3 3 0 0 0-3 3v3a5 5 0 0 0 5 5h4z" className="stroke-yellow-500 fill-yellow-100" />
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l10 17H2L12 3z" className="stroke-slate-950 fill-slate-950" />
  </svg>
);

const TECH_TABS = [
  {
    title: "ORCHESTRATION & AGENTIC WORKFLOWS",
    categoryIcon: <Brain className="w-5 h-5" />,
    summary: "Designing and implementing autonomous multi-agent systems and event-driven workflows that streamline operations, minimize manual intervention, and seamlessly bridge the gap between LLMs and enterprise operations.",
    tools: [
      { name: "n8n", desc: "Node-based production workflow automation", icon: <N8nIcon /> },
      { name: "CrewAI", desc: "Autonomous multi-agent system orchestration", icon: <CrewAiIcon /> },
      { name: "LangChain", desc: "Structured application chains & LLM wrappers", icon: <LangChainIcon /> },
      { name: "Arize Phoenix", desc: "LLM observability, evaluation, and tracing", icon: <ArizePhoenixIcon /> },
    ]
  },
  {
    title: "AGENTIC DEVELOPMENT ENVIRONMENTS",
    categoryIcon: <Cpu className="w-5 h-5" />,
    summary: "Leveraging next-generation AI coding agents and IDE environments to accelerate the software development lifecycle, optimize code quality, and pioneer agentic development workflows.",
    tools: [
      { name: "Google Antigravity 2.0", desc: "Next-gen agentic software coding SDK", icon: <AntigravityIcon /> },
      { name: "Claude Code", desc: "CLI-based agentic developer assistant", icon: <ClaudeCodeIcon /> },
      { name: "Cursor", desc: "AI-first code editor for rapid prototyping", icon: <CursorIcon /> },
      { name: "GitHub Copilot", desc: "AI-powered development, debugging, and chat assistance", icon: <CopilotIcon /> },
    ]
  },
  {
    title: "DATA INFRASTRUCTURE & DEPLOYMENT",
    categoryIcon: <Database className="w-5 h-5" />,
    summary: "Architecting enterprise-scale data warehouses, writing optimized data processing pipelines, and managing rapid CI/CD deployment pipelines to deliver secure, production-grade applications.",
    tools: [
      { name: "SQL Server", desc: "Relational database design and management", icon: <SqlServerIcon /> },
      { name: "Google BigQuery", desc: "Enterprise data warehousing and big data analytics", icon: <BigQueryIcon /> },
      { name: "Python", desc: "Advanced data processing and machine learning scripting", icon: <PythonIcon /> },
      { name: "Vercel & GitHub CI/CD", desc: "Automated cloud hosting and continuous deployment", icon: <VercelIcon /> },
    ]
  }
];

export const HomePageScroll: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50"
    >
      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-slate-50 pt-20 pb-4 lg:pt-28 lg:pb-6">
        <div className="max-w-7xl mx-auto w-full px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Selective Color Portrait Card */}
            <div className="lg:col-span-5 h-[400px] lg:h-[580px] relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 bg-slate-950">
              {/* Faded Grayscale Background Layer */}
              <img 
                src="/myphoto.JPG" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000";
                }}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-20 blur-[1px]"
                referrerPolicy="no-referrer"
              />
              
              {/* Color Subject Layer with Radial Mask */}
              <img 
                src="/myphoto.JPG" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000";
                }}
                alt="Alexandre Paul Dole"
                className="absolute inset-0 w-full h-full object-cover object-top contrast-110 brightness-105"
                style={{
                  maskImage: 'radial-gradient(circle at 50% 30%, black 25%, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black 25%, transparent 70%)'
                }}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Hero Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex flex-nowrap md:flex-wrap gap-1.5 md:gap-4 mb-8 overflow-x-auto md:overflow-visible no-scrollbar">
                {ROLES.map((role, i) => (
                  <div 
                    key={role}
                    className={`whitespace-nowrap px-3 md:px-6 py-2 rounded-full text-[9px] md:text-[11px] font-bold tracking-tight md:tracking-[0.2em] transition-all duration-500 border-2 flex-shrink-0 ${
                      i === roleIndex 
                        ? 'bg-slate-900 text-white border-slate-900 shadow-2xl shadow-slate-300 scale-105' 
                        : 'bg-white text-slate-500 border-slate-100'
                    }`}
                  >
                    {role}
                  </div>
                ))}
              </div>

              <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 mb-6 leading-[0.9] tracking-tighter">
                ALEXANDRE PAUL DOLE
              </h1>
              
              <div className="h-px w-24 bg-slate-200 mb-6" />

              <h2 className="text-2xl lg:text-4xl font-display font-medium text-slate-600 mb-8 tracking-tight">
                DATA ANALYTICS <span className="opacity-20 mx-4">/</span> <br /> AI STRATEGY
              </h2>
              
              <div className="flex items-center gap-4 mb-10">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-xs lg:text-sm font-bold uppercase tracking-[0.3em] text-slate-800 leading-relaxed">
                  AI PLANNING & ENABLEMENT <span className="opacity-20 mx-4">|</span> <br /> ARCHITECTING ENTERPRISE DATA STRATEGY
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/timeline" className="btn-apple group flex items-center justify-center gap-4 px-8 py-4 text-base">
                  <span>Explore Leadership Journey</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="btn-outline flex items-center justify-center px-8 py-4 text-base">
                  Connect & Strategize
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Active Tech Stack Section - Concept 2 (Interactive Tech Hub) */}
      <section className="pt-6 pb-6 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 md:p-12 shadow-xl shadow-slate-100/50">
            <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600 mb-4">The Engine Room</h3>
                <h2 className="text-5xl font-display font-bold text-slate-900">ACTIVE TECH STACK</h2>
              </div>
              <p className="text-slate-700 max-w-xl text-lg leading-relaxed font-normal">
                Leveraging state-of-the-art AI models, frameworks, and data environments to build autonomous systems that drive ROI.
              </p>
            </div>

            {/* Mobile Dropdown Selector (visible on mobile only) */}
            <div className="relative mb-8 block md:hidden z-20">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between gap-3 px-6 py-4 rounded-xl border border-slate-200 bg-white font-bold text-slate-800 shadow-sm hover:border-[#1E40AF] transition-colors cursor-pointer text-left text-sm uppercase"
              >
                <div className="flex items-center gap-3">
                  {TECH_TABS[activeTab].categoryIcon}
                  <span>{TECH_TABS[activeTab].title}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden py-1">
                  {TECH_TABS.map((tab, i) => (
                    <button
                      key={tab.title}
                      onClick={() => {
                        setActiveTab(i);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-6 py-4 text-xs font-bold text-left uppercase transition-colors cursor-pointer ${
                        i === activeTab
                          ? 'bg-blue-50/50 text-[#1E40AF]'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {tab.categoryIcon}
                      <span>{tab.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Interactive Tabs (visible on laptop/desktop only) */}
            <div className="hidden md:flex border-b border-slate-200 mb-12 overflow-x-auto no-scrollbar">
              {TECH_TABS.map((tab, i) => (
                <button
                  key={tab.title}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-3 px-8 py-5 text-sm font-bold tracking-wider uppercase border-b-2 transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    i === activeTab
                      ? 'border-[#1E40AF] text-[#1E40AF] bg-blue-50/30'
                      : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {tab.categoryIcon}
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Left Column: Strategic Summary */}
              <div className="lg:col-span-5 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100 pb-8 lg:pb-0 lg:pr-12">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 leading-tight">
                  {TECH_TABS[activeTab].title}
                </h3>
                <p className="text-slate-700 text-lg leading-relaxed font-normal">
                  {TECH_TABS[activeTab].summary}
                </p>
              </div>

              {/* Right Column: Grid of tools */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {TECH_TABS[activeTab].tools.map((tool) => (
                    <div 
                      key={tool.name} 
                      className="p-6 bg-white hover:bg-blue-50/20 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex items-start gap-4 group/tile"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm flex-shrink-0 group-hover/tile:scale-110 transition-transform duration-300">
                        {tool.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base mb-1 group-hover/tile:text-[#1E40AF] transition-colors duration-300">
                          {tool.name}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                          {tool.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="pt-8 pb-6 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 md:p-12 shadow-xl shadow-slate-100/50">
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600 mb-4">Academic Foundation</h3>
              <h2 className="text-5xl font-display font-bold text-slate-900">EDUCATION</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* UPenn */}
              <div className="flex flex-col gap-6 p-8 bg-white hover:bg-blue-50/20 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 h-full group">
                <div className="h-14 flex items-center mb-2">
                  <img 
                    src="/logos/upenn.png" 
                    alt="UPenn" 
                    className="h-11 w-auto object-contain object-left group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1E40AF] mb-2 transition-colors">University of Pennsylvania</h4>
                  <p className="text-base font-semibold text-slate-700 mb-4 leading-snug">Master of Science in Organizational Dynamics</p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Concentration in Project Management. Focused on leading high-stakes technical transformations, organizational change, and aligning engineering workflows with human-centric delivery.
                  </p>
                </div>
              </div>

              {/* SJU */}
              <div className="flex flex-col gap-6 p-8 bg-white hover:bg-blue-50/20 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 h-full group">
                <div className="h-14 flex items-center mb-2">
                  <img 
                    src="/logos/sju_big.png" 
                    alt="SJU" 
                    className="h-11 w-auto object-contain object-left group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1E40AF] mb-2 transition-colors">St. Joseph’s University</h4>
                  <p className="text-base font-semibold text-slate-700 mb-4 leading-snug">Master of Science in Business Intelligence & Analytics</p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Specialized in Predictive Modeling and Decision Science. Focused on aligning analytical ecosystems with executive-level portfolio prioritization and ROI.
                  </p>
                </div>
              </div>

              {/* JHU Psych */}
              <div className="flex flex-col gap-6 p-8 bg-white hover:bg-blue-50/20 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 h-full group">
                <div className="h-14 flex items-center mb-2">
                  <img 
                    src="/logos/jhu.png" 
                    alt="JHU" 
                    className="h-11 w-auto object-contain object-left group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1E40AF] mb-2 transition-colors">Johns Hopkins University</h4>
                  <p className="text-base font-semibold text-slate-700 mb-4 leading-snug">B.A. in Psychology | Minor in Entrepreneurship</p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Foundational behavioral science and venture development. Focused on user-centric data strategy and the psychological frameworks of business scaling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Education Section */}
      <section className="pt-6 pb-16 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 md:p-12 shadow-xl shadow-slate-100/50">
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600 mb-4">Professional Credentials</h3>
              <h2 className="text-5xl font-display font-bold text-slate-900 leading-tight">
                EXECUTIVE EDUCATION
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Harvard */}
              <div className="flex flex-col gap-6 p-8 bg-white hover:bg-blue-50/20 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 h-full group">
                <div className="h-14 flex items-center mb-2">
                  <img 
                    src="/logos/harvard_hdsi.png" 
                    alt="Harvard Data Science Institute" 
                    className="h-11 w-auto object-contain object-left group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1E40AF] mb-2 transition-colors">Harvard Data Science Institute</h4>
                  <p className="text-base font-semibold text-slate-700 mb-4 leading-snug">AI Leadership: Strategy, Governance, and Agentic Systems</p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Focused on the design, validation, and governance of generative AI and multi-agent systems. Explored frameworks for scaling agentic AI and aligning model outputs with enterprise standards.
                  </p>
                </div>
              </div>

              {/* Columbia */}
              <div className="flex flex-col gap-6 p-8 bg-white hover:bg-blue-50/20 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 h-full group">
                <div className="h-14 flex items-center mb-2">
                  <img 
                    src="/logos/columbia.png" 
                    alt="Columbia Business School" 
                    className="h-11 w-auto object-contain object-left group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1E40AF] mb-2 transition-colors">Columbia Business School</h4>
                  <p className="text-base font-semibold text-slate-700 mb-4 leading-snug">Driving Strategic Impact: Mastering Management Consulting</p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Acquired structured problem-solving methods and strategic framework analysis. Specialized in advisory skills, translating complex architectures into executive roadmaps and maximizing ROI.
                  </p>
                </div>
              </div>

              {/* Wharton */}
              <div className="flex flex-col gap-6 p-8 bg-white hover:bg-blue-50/20 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 h-full group">
                <div className="h-14 flex items-center mb-2">
                  <img 
                    src="/logos/wharton.jpg" 
                    alt="The Wharton School" 
                    className="h-11 w-auto object-contain object-left group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1E40AF] mb-2 transition-colors">The Wharton School</h4>
                  <p className="text-base font-semibold text-slate-700 mb-4 leading-snug">People Analytics: HR Transformation through Data</p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Mastered data-driven methods to analyze talent, optimize workforce performance, and model dynamics. Applied predictive analytics to solve complex human capital challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pt-6 pb-2 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 text-sm font-medium tracking-widest uppercase">
            © 2026 Alexandre Paul Dole
          </p>
          <Link to="/contact" className="text-slate-900 font-bold flex items-center gap-2 group">
            <span>Connect & Strategize</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};
