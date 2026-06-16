import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldAlert, Database } from 'lucide-react';
import { Navbar } from '../components/Navbar';


const SOLUTIONS = [
  {
    title: 'AGENTIC SYSTEM DESIGN & AUTOMATION',
    icon: <Cpu className="w-6 h-6 text-[#1E40AF]" />,
    description: 'Orchestrating autonomous multi-agent frameworks and event-driven workflows to automate complex business processes and bridge enterprise operations with generative AI models.',
    capabilities: [
      'Production-grade workflow orchestration using n8n',
      'Autonomous multi-agent collaboration frameworks with CrewAI',
      'Structured chain-of-thought and retrieval patterns with LangChain',
      'Integrations with legacy SQL/ERP backends and modern API endpoints'
    ]
  },
  {
    title: 'AI GOVERNANCE, OBSERVABILITY & COMPLIANCE',
    icon: <ShieldAlert className="w-6 h-6 text-[#1E40AF]" />,
    description: 'Establishing governing guardrails, model evaluations, and audit logs to ensure generative AI deployments remain compliant, secure, and aligned with organizational standards.',
    capabilities: [
      'Model validation and observability tracing using Arize Phoenix',
      'AI steering protocols and alignment guardrails to mitigate hallucinations',
      'Role-based access controls and privacy/governance standards auditing',
      'Executive frameworks to justify AI safety, ROI, and security postures'
    ]
  },
  {
    title: 'ENTERPRISE DATA LIFECYCLE & ANALYTICS',
    icon: <Database className="w-6 h-6 text-[#1E40AF]" />,
    description: 'Designing high-throughput data warehousing strategies, pipeline ETLs, and analytics environments to empower executive decision engines with absolute data integrity.',
    capabilities: [
      'Big Data cloud architecture utilizing Google BigQuery & SQL Server',
      'Custom data processing scripts and machine learning models in Python',
      'Unified global metrics databases for C-suite and board reporting',
      'Migration frameworks from legacy relational DBs to scalable cloud warehouses'
    ]
  }
];

export const SolutionsPage: React.FC = () => {
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
                Enterprise <br />
                <span className="italic font-normal text-slate-600">Solutions.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
                Bridging technical complexity with corporate strategy. Delivering secure, scalable, and governed data pipelines and autonomous AI solutions to drive measurable enterprise ROI.
              </p>
            </header>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pb-24 relative z-10">

        {/* Solutions Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {SOLUTIONS.map((sol) => (
            <div 
              key={sol.title}
              className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-xl shadow-slate-100/30 hover:border-blue-200 hover:shadow-2xl hover:shadow-slate-100/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-center mb-6">
                  {sol.icon}
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">Capabilities</h3>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-4 leading-snug">{sol.title}</h2>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">{sol.description}</p>
              </div>
              
              <ul className="border-t border-slate-100 pt-6 space-y-3">
                {sol.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-base md:text-lg text-slate-700 font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Case Studies / Callout Section */}
        <section className="p-8 md:p-12 bg-slate-50 border border-slate-200 rounded-3xl relative">
          <div className="w-full">
            <span className="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase block mb-4">
              Strategic Case Blueprint
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              AI Enablement & Governance at Scale
            </h2>
            <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-normal mb-8">
              True enablement isn't just about deploying a model; it's about engineering the operational frameworks that ensure correctness, governance, and business alignment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200 pt-8">
              <div>
                <h4 className="font-bold text-slate-900 text-xl mb-2">Comcast Advertising Steering Group</h4>
                <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-normal">
                  Defining the enterprise norms and development rules of the road. Architecting data frameworks and cross-organizational forums to maximize model context integration and governance.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xl mb-2">Impact & Inclusion Data Infrastructure</h4>
                <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-normal">
                  Consolidated and structured disparate global datasets across three operating divisions to establish a board-ready metrics platform tracking multi-million dollar corporate initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </motion.div>
  );
};
