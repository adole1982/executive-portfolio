import React from 'react';
import { motion } from 'framer-motion';
import { Timeline } from '../components/Timeline';
import { Navbar } from '../components/Navbar';

export const TimelinePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col justify-between bg-white relative overflow-x-hidden"
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

      <Navbar />

      {/* Grid Header Background */}
      <div className="pt-[72px]">
        <div
          className="relative py-12 md:py-16 lg:py-10 overflow-hidden"
          style={{
            backgroundImage:
              'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white pointer-events-none"/>
          
          <div className="max-w-[1600px] mx-auto px-6 md:px-8 relative z-10">
            <header className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-4 md:mb-6 leading-tight tracking-tight">
                The Career <br />
                <span className="italic font-normal text-slate-600">Evolution.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
                An interactive journey tracing 20 years of data leadership, corporate transformation, and enterprise AI enablement. Select a milestone to explore.
              </p>
            </header>
          </div>
        </div>
      </div>

      <main className="max-w-[1600px] w-full mx-auto px-6 md:px-8 pb-12 lg:pb-8 lg:flex-grow lg:flex lg:flex-col lg:justify-end relative z-10">
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