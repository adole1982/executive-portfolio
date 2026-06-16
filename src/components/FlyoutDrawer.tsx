import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { TimelineEvent } from '../constants';

interface FlyoutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  event: TimelineEvent | null;
}

export const FlyoutDrawer: React.FC<FlyoutDrawerProps> = ({ isOpen, onClose, event }) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && event && (
        <>
          {/* Clickable Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 z-[100] backdrop-blur-[2px]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:max-w-md bg-white shadow-2xl z-[110] overflow-y-auto border-l border-slate-100"
          >
            <div className="p-8 relative">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-100 transition-colors z-50 cursor-pointer pointer-events-auto"
                aria-label="Close details"
              >
                <X size={24} className="text-slate-900" />
              </button>

              {event.logoUrl && (
                <div className="mb-4 pt-2">
                  <img 
                    src={event.logoUrl} 
                    alt={`${event.organization} logo`}
                    className={`${
                      event.id === 'upenn-ms-od' ? 'h-28' : 
                      event.type === 'education' ? 'h-20' : 'h-12'
                    } w-auto object-contain`}
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 leading-tight">
                {event.title}
              </h2>
              <p className="text-sm text-slate-600 mb-6 flex items-center gap-1">
                <span className="opacity-80">{event.location}</span>
                <span className="mx-2 opacity-20">|</span>
                <span className="opacity-80">{event.period}</span>
              </p>

              <div className="space-y-8">
                {event.responsibilities.length > 0 && (
                  <section>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-4">
                      {event.type === 'work' ? 'Core Responsibilities' : 'Areas of Focus'}
                    </h3>
                    <ul className="space-y-3">
                      {event.responsibilities.map((item, i) => (
                        <li key={i} className="flex gap-3 text-slate-800">
                          <ChevronRight size={16} className="mt-1 text-slate-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {event.tech.length > 0 && (
                  <section>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-4">
                      {event.id === 'upenn-ms-od' ? 'Core Competency' : 
                       event.id === 'jhu-ba' ? 'Strategic Value' : 
                       event.id === 'lincoln-pdp' ? 'Strategic Domain Expertise' : 'Tech Stack'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {event.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-50 text-slate-700 rounded-full text-sm border border-slate-100">
                          {t}
                        </span>
                      ))}
                    </div>
                  </section>
                )}

                {event.achievements.length > 0 && (
                  <section>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-4">Key Achievements</h3>
                    <ul className="space-y-3">
                      {event.achievements.map((item, i) => (
                        <li key={i} className="flex gap-3 text-slate-800">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};
