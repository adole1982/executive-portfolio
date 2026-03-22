import React from 'react';
import { motion } from 'framer-motion';
import { Timeline } from '../components/Timeline';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TimelinePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white relative overflow-hidden"
    >
      {/* Philadelphia Background Graphic - Placed first to be behind other content */}
      <div className="fixed bottom-0 left-0 w-full h-[25vh] md:h-[40vh] pointer-events-none z-0 opacity-50 flex items-end justify-center">
        <img 
          src="/logos/philadelphia.png" 
          alt="" 
          className="w-full h-full object-contain object-bottom grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <nav className="p-6 md:p-8 flex justify-between items-center relative">
        <Link to="/" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Overview</span>
        </Link>
        <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
          Technical Evolution
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-8 pt-8 md:pt-12 pb-8 relative">
        <header className="max-w-3xl mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
            The Technical <br />
            <span className="italic font-normal text-slate-600">Evolution.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            An interactive journey through my professional journey. From the behavioral foundations of data at Johns Hopkins to architecting 20 years of Fortune 100 data lifecycles and AI enablement. Select a milestone to explore.
          </p>
        </header>

        <div className="relative">
          <div className="md:hidden absolute -top-8 right-0 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 animate-pulse">
            <span>Scroll to explore</span>
            <div className="w-8 h-px bg-slate-300" />
          </div>
          <Timeline />
        </div>
      </main>
    </motion.div>
  );
};
// Production Build Sync: March 2026