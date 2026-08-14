import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';

const ROLES = ["THE ARCHITECT", "THE STRATEGIST", "AI LEADER"];

// Custom icons for the bottom ecosystem shelf (matching user attachments)
const N8nIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-700 fill-slate-700" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2h2v2H4V2zm14 0h2v2h-2V2zM6 4h2v2H6V4zm10 0h2v2h-2V4zm-8 2h8v2H8V6zM4 8h16v4H4V8zm0 4h2v2H4v-2zm14 0h2v2h-2v-2zm-12 2h2v4H6v-4zm10 0h2v4h-2v-4z" />
  </svg>
);

const AntigravityIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-700 fill-none stroke-slate-700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18c3-3.5 5.5-12 9-12s6 8.5 9 12" />
  </svg>
);

const CopilotIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-700 fill-none stroke-slate-700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a6 6 0 0 0-6 6v3a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6z" />
    <rect x="7" y="11" width="10" height="4" rx="2" className="fill-slate-700 stroke-slate-700" />
    <circle cx="9" cy="13" r="0.75" className="fill-white stroke-white" />
    <circle cx="15" cy="13" r="0.75" className="fill-white stroke-white" />
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-700 fill-slate-700" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 22h20L12 2z" />
  </svg>
);

const ReplitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-700 fill-slate-700" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4h14v4H2V4zm6 6h14v4H8v-4zm-6 6h14v4H2v-4z"/>
  </svg>
);

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
      className="min-h-screen flex flex-col justify-between bg-white relative overflow-x-hidden"
    >
      <Navbar />

      {/* Main Split Content Area */}
      <div className="flex-grow flex flex-col md:flex-row items-stretch w-full pt-16 md:pt-0">
        
        {/* Left Side: Selective Color Portrait (Equal half-width) */}
        <div className="w-full md:w-1/2 min-h-[45vh] md:min-h-[500px] md:h-auto relative overflow-hidden bg-slate-950">
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
            alt="Alexandre Dole"
            className="absolute inset-0 w-full h-full object-cover object-top contrast-110 brightness-105"
            style={{
              maskImage: 'radial-gradient(circle at 50% 30%, black 25%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black 25%, transparent 70%)'
            }}
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 md:to-white" />
        </div>

        {/* Right Side: Hero Content (Equal half-width) */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-8 lg:p-14 xl:p-20 flex flex-col justify-center bg-white">
          <div className="flex flex-nowrap md:flex-wrap gap-1.5 md:gap-3 mb-8 lg:mb-12 overflow-x-auto md:overflow-visible no-scrollbar">
            {ROLES.map((role, i) => (
              <div 
                key={role}
                className={`whitespace-nowrap px-3 md:px-5 py-1.5 md:py-2 rounded-full text-[9px] md:text-[10px] xl:text-[11px] font-bold tracking-tight md:tracking-[0.15em] xl:tracking-[0.2em] transition-all duration-500 border-2 flex-shrink-0 ${
                  i === roleIndex 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-2xl shadow-slate-300 scale-105' 
                    : 'bg-white text-slate-500 border-slate-100'
                }`}
              >
                {role}
              </div>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl font-display font-bold text-slate-900 mb-6 lg:mb-8 leading-[0.95] tracking-tighter break-words">
            ALEXANDRE DOLE
          </h1>
          
          <div className="h-px w-24 bg-slate-200 mb-6 lg:mb-8" />

          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-medium text-slate-600 mb-8 lg:mb-12 tracking-tight">
            AI STRATEGY <span className="opacity-20 mx-2 lg:mx-4">/</span> <br className="hidden sm:inline" /> DATA ANALYTICS
          </h2>
          
          <div className="flex items-center gap-3 lg:gap-4 mb-10 lg:mb-14">
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <p className="text-[11px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.18em] sm:tracking-[0.25em] xl:tracking-[0.3em] text-slate-800 leading-relaxed">
              AI PLANNING &amp; ENABLEMENT <span className="opacity-20 mx-2 lg:mx-4">|</span> <br className="hidden sm:inline" /> ARCHITECTING ENTERPRISE DATA STRATEGY
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-4 sm:gap-6 xl:gap-8">
            <Link to="/timeline" className="btn-apple group flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 xl:px-12 py-4 lg:py-5 text-base sm:text-lg text-center whitespace-nowrap">
              <span>Explore Career Evolution</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
            <Link to="/contact" className="btn-outline flex items-center justify-center px-6 sm:px-8 xl:px-12 py-4 lg:py-5 text-base sm:text-lg text-center whitespace-nowrap">
              Connect &amp; Strategize
            </Link>
          </div>
        </div>

      </div>

      <footer className="w-full border-t border-slate-100 bg-white py-8 lg:py-10 px-6 md:px-12 lg:px-16 flex flex-col xl:flex-row items-start xl:items-center justify-start gap-x-12 gap-y-6 z-10">
        <div className="text-[12px] lg:text-[13px] font-bold uppercase tracking-[0.25em] text-slate-500 md:whitespace-nowrap">
          Orchestration &amp; Development Ecosystem
        </div>
        <div className="w-full xl:w-auto flex-grow flex flex-wrap items-center justify-between gap-6 sm:gap-4">
          <img src="/logos/n8n.jpg" alt="n8n" className="h-7 lg:h-8 w-auto object-contain cursor-default" />
          
          <div className="flex items-center gap-2 text-[12px] lg:text-[13px] font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-default">
            <img src="/logos/antigravity.jpg" alt="Antigravity" className="h-7 lg:h-8 w-auto object-contain" />
            Antigravity
          </div>
          
          <div className="flex items-center gap-2 text-[12px] lg:text-[13px] font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-default">
            <img src="/logos/cursor.png" alt="Cursor" className="h-7 lg:h-8 w-auto object-contain" />
            Cursor
          </div>
          
          <div className="flex items-center gap-2 text-[12px] lg:text-[13px] font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-default">
            <img src="/logos/claude_code.jpg" alt="Claude Code" className="h-7 lg:h-8 w-auto object-contain" />
            Claude Code
          </div>
          
          <div className="flex items-center gap-2 text-[12px] lg:text-[13px] font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-default">
            <img src="/logos/github.jpg" alt="GitHub" className="h-7 lg:h-8 w-auto object-contain" />
            GitHub
          </div>
          
          <div className="flex items-center gap-2 text-[12px] lg:text-[13px] font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-default">
            <img src="/logos/githubcopilot.jpg" alt="GitHub Copilot" className="h-7 lg:h-8 w-auto object-contain" />
            Github Copilot
          </div>
          
          <img src="/logos/vercel.jpg" alt="Vercel" className="h-7 lg:h-8 w-auto object-contain cursor-default" />
          <img src="/logos/replit.jpg" alt="Replit" className="h-7 lg:h-8 w-auto object-contain cursor-default" />
        </div>
      </footer>
    </motion.div>
  );
};