import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { academicData, TimelineEvent } from '../constants';
import { FlyoutDrawer } from '../components/FlyoutDrawer';

export const CredentialsPage: React.FC = () => {
  const [selectedCredential, setSelectedCredential] = useState<TimelineEvent | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white relative overflow-hidden"
    >
      {/* Background Philadelphia skyline for consistency */}
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
                Credentials & <br />
                <span className="italic font-normal text-slate-600">Foundation.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
                A cross-disciplinary foundation combining business intelligence, leadership, and human behavior. This rigorous academic and executive credentials portfolio fuels data-driven strategy and safe, value-adding AI enablement.
              </p>
            </header>
          </div>
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pb-24 relative z-10">

        {/* Academic Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-slate-700 w-6 h-6" />
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-600">Academic Foundation</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* UPenn */}
            <div 
              onClick={() => setSelectedCredential(academicData.find(d => d.id === 'upenn-ms-od') || null)}
              className="flex flex-col gap-6 p-8 bg-white border border-slate-100 rounded-3xl transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:border-slate-200 hover:border-slate-300/80 cursor-pointer h-full group"
            >
              <div className="h-14 flex items-center">
                <img 
                  src="/logos/upenn.png" 
                  alt="University of Pennsylvania" 
                  className="h-10 w-auto object-contain object-left"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">University of Pennsylvania</h3>
                  <p className="text-lg md:text-xl font-semibold text-slate-600 mb-4">Master of Science in Organizational Dynamics</p>
                  <p className="text-slate-700 leading-relaxed text-lg md:text-xl font-normal">
                    Concentration in Project Management. Focused on leading high-stakes technical transformations, organizational change, and aligning engineering workflows with human-centric delivery.
                  </p>
                </div>
                <div className="flex justify-end mt-6">
                  <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </div>
              </div>
            </div>

            {/* SJU */}
            <div 
              onClick={() => setSelectedCredential(academicData.find(d => d.id === 'sju-ms-bi') || null)}
              className="flex flex-col gap-6 p-8 bg-white border border-slate-100 rounded-3xl transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:border-slate-200 hover:border-slate-300/80 cursor-pointer h-full group"
            >
              <div className="h-14 flex items-center">
                <img 
                  src="/logos/sju_big.png" 
                  alt="St. Joseph's University" 
                  className="h-10 w-auto object-contain object-left"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">St. Joseph’s University</h3>
                  <p className="text-lg md:text-xl font-semibold text-slate-600 mb-4">Master of Science in Business Intelligence & Analytics</p>
                  <p className="text-slate-700 leading-relaxed text-lg md:text-xl font-normal">
                    Specialized in Predictive Modeling and Decision Science. Focused on aligning analytical ecosystems with executive-level portfolio prioritization and ROI.
                  </p>
                </div>
                <div className="flex justify-end mt-6">
                  <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </div>
              </div>
            </div>

            {/* JHU */}
            <div 
              onClick={() => setSelectedCredential(academicData.find(d => d.id === 'jhu-ba') || null)}
              className="flex flex-col gap-6 p-8 bg-white border border-slate-100 rounded-3xl transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:border-slate-200 hover:border-slate-300/80 cursor-pointer h-full group"
            >
              <div className="h-14 flex items-center">
                <img 
                  src="/logos/jhu.png" 
                  alt="Johns Hopkins University" 
                  className="h-10 w-auto object-contain object-left"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Johns Hopkins University</h3>
                  <p className="text-lg md:text-xl font-semibold text-slate-600 mb-4">B.A. in Psychology | Minor in Entrepreneurship</p>
                  <p className="text-slate-700 leading-relaxed text-lg md:text-xl font-normal">
                    Foundational behavioral science and venture development. Focused on user-centric data strategy and the psychological frameworks of business scaling.
                  </p>
                </div>
                <div className="flex justify-end mt-6">
                  <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-slate-700 w-6 h-6" />
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-600">Executive Credentials</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Harvard */}
            <div className="flex flex-col gap-6 p-8 bg-white border border-slate-100 rounded-3xl transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:border-slate-200 h-full group">
              <div className="h-14 flex items-center">
                <img 
                  src="/logos/harvard_hdsi_cropped.png" 
                  alt="Harvard Data Science Institute" 
                  className="h-10 w-auto object-contain object-left"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Harvard Data Science Institute</h3>
                  <p className="text-lg md:text-xl font-semibold text-slate-600 mb-4">AI Leadership: Strategy, Governance, and Agentic Systems</p>
                  <p className="text-slate-700 leading-relaxed text-lg md:text-xl font-normal">
                    Focused on the design, validation, and governance of generative AI and multi-agent systems. Explored frameworks for scaling agentic AI and aligning model outputs with enterprise standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Columbia */}
            <div className="flex flex-col gap-6 p-8 bg-white border border-slate-100 rounded-3xl transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:border-slate-200 h-full group">
              <div className="h-14 flex items-center">
                <img 
                  src="/logos/columbia.png" 
                  alt="Columbia Business School" 
                  className="h-10 w-auto object-contain object-left"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Columbia Business School</h3>
                  <p className="text-lg md:text-xl font-semibold text-slate-600 mb-4">Driving Strategic Impact: Mastering Management Consulting</p>
                  <p className="text-slate-700 leading-relaxed text-lg md:text-xl font-normal">
                    Acquired structured problem-solving methods and strategic framework analysis. Specialized in advisory skills, translating complex architectures into executive roadmaps and maximizing ROI.
                  </p>
                </div>
              </div>
            </div>

            {/* Wharton */}
            <div className="flex flex-col gap-6 p-8 bg-white border border-slate-100 rounded-3xl transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:border-slate-200 h-full group">
              <div className="h-14 flex items-center">
                <img 
                  src="/logos/wharton_cropped.png" 
                  alt="The Wharton School" 
                  className="h-10 w-auto object-contain object-left"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">The Wharton School</h3>
                  <p className="text-lg md:text-xl font-semibold text-slate-600 mb-4">People Analytics: HR Transformation through Data</p>
                  <p className="text-slate-700 leading-relaxed text-lg md:text-xl font-normal">
                    Mastered data-driven methods to analyze talent, optimize workforce performance, and model dynamics. Applied predictive analytics to solve complex human capital challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Synergy Section */}
        <section className="relative mt-20">
          <div className="p-8 md:p-12 bg-slate-50 border border-slate-200 rounded-3xl relative">
            <div className="w-full">
              <span className="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase block mb-4">
                Integration & Synthesis
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Strategic Synergy & Advisory Focus
              </h2>
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-normal">
                How does this cross-disciplinary foundation generate actual enterprise value? It enables a unique approach to digital leadership:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Behavioral-Data Synthesis</h4>
                  <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-normal">
                    Aligning predictive insights (Business Intelligence) with how people and structures change (Organizational Dynamics). This prevents the "last-mile adoption failure" common to enterprise AI deployments.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Governed AI & Automation</h4>
                  <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-normal">
                    Structuring agentic architectures with rigorous governance principles from Harvard, ensuring safety and compliance while unlocking automated multi-agent operational efficiency.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Management Consulting Rigor</h4>
                  <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-normal">
                    Translating technical capabilities directly to boardroom objectives using structured problem-solving frameworks from Columbia, bridging the communication gap between engineers and executive decision-makers.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Data-Driven Talent & Performance</h4>
                  <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-normal">
                    Utilizing People Analytics frameworks from Wharton to engineer high-performing technical squads, model team capacity, and scale operational agility organically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FlyoutDrawer 
        isOpen={selectedCredential !== null} 
        onClose={() => setSelectedCredential(null)} 
        event={selectedCredential} 
      />
    </motion.div>
  );
};
