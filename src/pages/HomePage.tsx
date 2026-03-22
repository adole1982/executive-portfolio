import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Database, Brain, Sparkles, GraduationCap } from 'lucide-react';

const ROLES = ["THE ANALYST", "THE STRATEGIST", "AI LEADER"];

export const HomePage: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

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
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-stretch">
        {/* Selective Color Portrait */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden bg-slate-950">
          {/* Faded Grayscale Background Layer */}
          <img 
            src="/myphoto.JPG" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000";
            }}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-20 scale-110 blur-[1px]"
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

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 md:to-white" />
        </div>

        {/* Hero Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-white">
          <div className="flex flex-nowrap md:flex-wrap gap-1.5 md:gap-4 mb-12 overflow-x-auto md:overflow-visible no-scrollbar">
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

          <h1 className="text-6xl lg:text-8xl font-display font-bold text-slate-900 mb-8 leading-[0.9] tracking-tighter">
            ALEXANDRE PAUL DOLE
          </h1>
          
          <div className="h-px w-24 bg-slate-200 mb-8" />

          <h2 className="text-3xl lg:text-5xl font-display font-medium text-slate-600 mb-12 tracking-tight">
            DATA ANALYTICS <span className="opacity-20 mx-4">/</span> <br /> AI STRATEGY
          </h2>
          
          <div className="flex items-center gap-4 mb-16">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs lg:text-sm font-bold uppercase tracking-[0.3em] text-slate-800 leading-relaxed">
              AI PLANNING & ENABLEMENT <span className="opacity-20 mx-4">|</span> <br /> ARCHITECTING ENTERPRISE DATA STRATEGY
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <Link to="/timeline" className="btn-apple group flex items-center justify-center gap-4 px-12 py-5 text-lg">
              <span>Explore Technical Evolution</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="btn-outline flex items-center justify-center px-12 py-5 text-lg">
              Connect & Strategize
            </Link>
          </div>
        </div>
      </section>

      {/* AI Co-pilot Section */}
      <section className="py-32 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600 mb-4">The Engine Room</h3>
              <h2 className="text-5xl font-display font-bold text-slate-900">ACTIVE TECH STACK</h2>
            </div>
            <p className="text-slate-700 max-w-md text-lg leading-relaxed">
              Leveraging state-of-the-art AI models and data infrastructure to build 
              autonomous systems that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: 'GitHub Copilot', icon: <Cpu />, desc: 'Accelerated Development' },
              { name: 'Gemini', icon: <Sparkles />, desc: 'Multimodal Intelligence' },
              { name: 'ChatGPT', icon: <Brain />, desc: 'Advanced Reasoning' },
              { name: 'Claude', icon: <Database />, desc: 'Long-context Analysis' }
            ].map((tool) => (
              <div key={tool.name} className="p-6 md:p-8 bg-white rounded-3xl border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center mb-4 md:mb-6 text-slate-900 group-hover:bg-blue-800 group-hover:text-white transition-colors">
                  {tool.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#1E40AF] mb-1 md:mb-2 transition-colors">{tool.name}</h4>
                <p className="text-slate-600 text-xs md:text-sm">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600 mb-4">Academic Foundation</h3>
            <h2 className="text-5xl font-display font-bold text-slate-900">EDUCATION</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* JHU AI */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-6 sm:p-8 bg-white rounded-3xl border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <img 
                  src="/logos/JHU_engineering.png" 
                  alt="JHU Engineering" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#1E40AF] mb-1 transition-colors">Johns Hopkins University</h4>
                <p className="text-base sm:text-lg font-medium text-slate-700 mb-3 sm:mb-4 leading-snug">Candidate for Master of Science in Artificial Intelligence (Engineering)</p>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  AI Strategy, Governance, and Ethics. Currently developing expertise in the orchestration of AI-enabled systems, MLOps infrastructure, and the strategic deployment of enterprise-scale generative AI.
                </p>
              </div>
            </div>

            {/* UPenn */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-6 sm:p-8 bg-white rounded-3xl border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <img 
                  src="/logos/upenn.png" 
                  alt="UPenn" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#1E40AF] mb-1 transition-colors">University of Pennsylvania</h4>
                <p className="text-base sm:text-lg font-medium text-slate-700 mb-3 sm:mb-4 leading-snug">Master of Science in Organizational Dynamics</p>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  Concentration in Project Management. Focused on leading high-stakes technical transformations, organizational change, and aligning engineering workflows with human-centric delivery.
                </p>
              </div>
            </div>

            {/* SJU */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-6 sm:p-8 bg-white rounded-3xl border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <img 
                  src="/logos/sju_big.png" 
                  alt="SJU" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#1E40AF] mb-1 transition-colors">St. Joseph’s University</h4>
                <p className="text-base sm:text-lg font-medium text-slate-700 mb-3 sm:mb-4 leading-snug">Master of Science in Business Intelligence & Analytics</p>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  Specialized in Predictive Modeling and Decision Science. Focused on aligning analytical ecosystems with executive-level portfolio prioritization and ROI.
                </p>
              </div>
            </div>

            {/* JHU Psych */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-6 sm:p-8 bg-white rounded-3xl border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <img 
                  src="/logos/jhu.png" 
                  alt="JHU" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#1E40AF] mb-1 transition-colors">Johns Hopkins University</h4>
                <p className="text-base sm:text-lg font-medium text-slate-700 mb-3 sm:mb-4 leading-snug">B.A. in Psychology | Minor in Entrepreneurship</p>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  Foundational behavioral science and venture development. Focused on user-centric data strategy and the psychological frameworks of business scaling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pt-12 pb-2 px-8 border-t border-slate-100">
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
// Production Build Sync: March 2026