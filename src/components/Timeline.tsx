import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { motion, AnimatePresence } from 'framer-motion';
import { timelineData, TimelineEvent } from '../constants';
import { ChevronRight, Briefcase, GraduationCap, X } from 'lucide-react';

export const Timeline: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current?.parentElement) {
        setDimensions({
          width: svgRef.current.parentElement.clientWidth,
          height: 600
        });
      }
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 80, right: 150, bottom: 80, left: 150 };
    const width = Math.max(dimensions.width - margin.left - margin.right, 1000); // Ensure minimum width for scrolling
    const height = dimensions.height - margin.top - margin.bottom;

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = d3.scaleTime()
      .domain([
        d3.min(timelineData, d => d.date) as Date,
        d3.max(timelineData, d => d.date) as Date
      ])
      .range([0, width]);

    // Main Line (Axis)
    g.append("line")
      .attr("x1", -50)
      .attr("y1", height / 2)
      .attr("x2", width + 50)
      .attr("y2", height / 2)
      .attr("stroke", "#6B7280")
      .attr("stroke-width", 2);

    // Nodes
    const nodes = g.selectAll(".node")
      .data(timelineData)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d, i) => {
        let x = xScale(d.date);
        
        // Move the most recent (2026) points halfway closer to the previous milestone (2018)
        // to prevent cutoff and reduce the large visual gap.
        if (d.date.getFullYear() === 2026) {
          const prevX = xScale(new Date(2018, 0, 1));
          x = prevX + (x - prevX) * 0.5;
        }

        // Move the first professional experience (2005) halfway closer to the start (2001)
        // to reduce the large white space at the beginning.
        if (d.id === 'lincoln-pdp') {
          const startX = xScale(new Date(2001, 0, 1));
          x = startX + (x - startX) * 0.5;
        }

        // Move Lincoln Manager (2008) slightly closer to the 2007 Education milestone
        if (d.id === 'lincoln-mgr') {
          const prevX = xScale(new Date(2007, 0, 1));
          x = prevX + (x - prevX) * 0.2; // Move it significantly closer to the left
        }

        if (d.type === 'work') {
          // 3-level stagger for work to ensure no overlap
          let staggerIndex = i % 3;
          // Align Comcast Advertising with Comcast Director Analytics
          if (d.id === 'comcast-vp-ai') staggerIndex = 0; 
          
          const workStagger = staggerIndex * 80;
          const y = height / 2 - 60 - workStagger;
          return `translate(${x}, ${y})`;
        } else {
          // Single level for education as requested
          const y = height / 2 + 120;
          return `translate(${x}, ${y})`;
        }
      })
      .style("cursor", "pointer")
      .on("mouseenter", function(event, d) {
        d3.select(this).select("circle")
          .transition()
          .duration(200)
          .attr("r", 10)
          .attr("fill", "#1E40AF")
          .style("filter", "drop-shadow(0 0 3px rgba(30, 64, 175, 0.6))");
        
        d3.select(this).select(".connector-line")
          .transition()
          .duration(200)
          .attr("stroke", "#1E40AF")
          .attr("opacity", 1)
          .attr("stroke-width", 2);

        d3.select(this).selectAll("text")
          .transition()
          .duration(200)
          .attr("opacity", 1);
      })
      .on("mouseleave", function(event, d) {
        if (selectedEvent?.id !== d.id) {
          d3.select(this).select("circle")
            .transition()
            .duration(200)
            .attr("r", 6)
            .attr("fill", "white")
            .style("filter", "none");
        }
        
        d3.select(this).select(".connector-line")
          .transition()
          .duration(200)
          .attr("stroke", "#6B7280")
          .attr("opacity", 0.8)
          .attr("stroke-width", 1);

        d3.select(this).selectAll("text")
          .transition()
          .duration(200)
          .attr("opacity", (d, i, nodes) => {
            const text = d3.select(nodes[i]);
            if (text.classed("org-text")) return 1;
            if (text.classed("title-text")) return 0.9;
            return 0.9;
          });
      })
      .on("click", (event, d) => {
        setSelectedEvent(d);
      });

    // Vertical Connectors
    nodes.append("line")
      .attr("class", "connector-line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 0)
      .attr("y2", (d, i) => {
        if (d.type === 'work') {
          let staggerIndex = i % 3;
          if (d.id === 'comcast-vp-ai') staggerIndex = 0;
          
          const workStagger = staggerIndex * 80;
          return 60 + workStagger;
        } else {
          return -120;
        }
      })
      .attr("stroke", "#6B7280")
      .attr("stroke-width", 1)
      .attr("opacity", 0.8)
      .attr("stroke-dasharray", "4,4");

    nodes.append("circle")
      .attr("r", 6)
      .attr("fill", d => selectedEvent?.id === d.id ? "#1E40AF" : "white")
      .attr("stroke", "#1E40AF")
      .attr("stroke-width", 2);

    // Organization Text
    nodes.append("text")
      .attr("class", "org-text uppercase tracking-widest")
      .text(d => d.organization)
      .attr("text-anchor", "middle")
      .attr("y", d => d.type === 'work' ? -52 : 55)
      .attr("font-size", "11px")
      .attr("font-weight", "700")
      .attr("fill", "#1E40AF")
      .attr("opacity", 1);

    // Title Text
    nodes.append("text")
      .attr("class", "title-text italic font-serif")
      .attr("text-anchor", "middle")
      .attr("font-size", "12.5px")
      .attr("font-weight", "400")
      .attr("fill", "#4B5563")
      .attr("opacity", 0.9)
      .each(function(d) {
        const el = d3.select(this);
        const parts = d.title.split(' (');
        if (parts.length > 1 && d.type === 'work') {
          el.attr("y", -38);
          el.append("tspan").attr("x", 0).text(parts[0]);
          el.append("tspan").attr("x", 0).attr("dy", "1.2em").text('(' + parts[1]);
        } else {
          el.attr("y", d.type === 'work' ? -30 : 40).text(d.title);
        }
      });

    // Period Text
    nodes.append("text")
      .attr("class", "period-text")
      .text(d => d.period)
      .attr("text-anchor", "middle")
      .attr("y", d => d.type === 'work' ? -10 : 25)
      .attr("font-size", "10px")
      .attr("font-weight", "600")
      .attr("fill", "#374151")
      .attr("opacity", 0.9);

    // Category Labels - Fixed positions
    svg.append("text")
      .attr("x", 20)
      .attr("y", 30)
      .attr("font-size", "14px")
      .attr("font-weight", "700")
      .attr("fill", "#374151")
      .attr("class", "uppercase tracking-[0.1em]")
      .text("Professional Experience");

    svg.append("text")
      .attr("x", 20)
      .attr("y", dimensions.height - 20)
      .attr("font-size", "14px")
      .attr("font-weight", "700")
      .attr("fill", "#374151")
      .attr("class", "uppercase tracking-[0.1em]")
      .text("Academic Foundation");

  }, [dimensions, selectedEvent]);

  return (
    <div className="relative w-full min-h-[620px] flex flex-col overflow-x-auto">
      <div className="flex-1 flex items-center min-w-[1200px]">
        <svg 
          ref={svgRef} 
          width={Math.max(dimensions.width, 1200)} 
          height={dimensions.height}
          className="overflow-visible"
        />
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:max-w-md bg-white shadow-2xl z-50 overflow-y-auto border-l border-slate-100"
          >
            <div className="p-8 relative">
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X size={24} className="text-slate-900" />
              </button>

              {selectedEvent.logoUrl && (
                <div className="mb-4 pt-2">
                  <img 
                    src={selectedEvent.logoUrl} 
                    alt={`${selectedEvent.organization} logo`}
                    className={`${
                      selectedEvent.id === 'upenn-ms-od' ? 'h-28' : 
                      selectedEvent.type === 'education' ? 'h-20' : 'h-12'
                    } w-auto object-contain`}
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 leading-tight">
                {selectedEvent.title}
              </h2>
              <p className="text-sm text-slate-600 mb-6 flex items-center gap-1">
                <span className="opacity-80">{selectedEvent.location}</span>
                <span className="mx-2 opacity-20">|</span>
                <span className="opacity-80">{selectedEvent.period}</span>
              </p>

              <div className="space-y-8">
                <section>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-4">
                    {selectedEvent.type === 'work' ? 'Core Responsibilities' : 'Areas of Focus'}
                  </h3>
                  <ul className="space-y-3">
                    {selectedEvent.responsibilities.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-800">
                        <ChevronRight size={16} className="mt-1 text-slate-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {selectedEvent.tech.length > 0 && (
                  <section>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-4">
                      {selectedEvent.id === 'upenn-ms-od' ? 'Core Competency' : 
                       selectedEvent.id === 'jhu-ba' ? 'Strategic Value' : 'Tech Stack'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-50 text-slate-700 rounded-full text-sm border border-slate-100">
                          {t}
                        </span>
                      ))}
                    </div>
                  </section>
                )}

                {selectedEvent.achievements.length > 0 && (
                  <section>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-4">Key Achievements</h3>
                    <ul className="space-y-3">
                      {selectedEvent.achievements.map((item, i) => (
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
        )}
      </AnimatePresence>
    </div>
  );
};
