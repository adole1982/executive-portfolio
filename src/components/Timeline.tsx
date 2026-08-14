import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { timelineData, TimelineEvent } from '../constants';
import { FlyoutDrawer } from './FlyoutDrawer';

export const Timeline: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 420 });

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current?.parentElement) {
        setDimensions({
          width: svgRef.current.parentElement.clientWidth,
          height: 420
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

    const margin = { top: 220, right: 150, bottom: 10, left: 150 };
    const width = Math.max(dimensions.width - margin.left - margin.right, 1000); // Ensure minimum width for scrolling
    const height = dimensions.height - margin.top - margin.bottom;

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = (index: number) => {
      if (timelineData.length <= 1) return 0;
      return (index / (timelineData.length - 1)) * width;
    };

    // Main Line (Axis)
    g.append("line")
      .attr("x1", -50)
      .attr("y1", height / 2)
      .attr("x2", width + 50)
      .attr("y2", height / 2)
      .attr("stroke", "#6B7280")
      .attr("stroke-width", 2);

    const getStaggerIndex = (id: string) => {
      switch (id) {
        case 'lincoln-pdp':
          return 1;
        case 'lincoln-mgr-hr':
          return 0;
        case 'lincoln-mgr':
          return 1;
        case 'comcast-dir-di':
          return 0;
        case 'comcast-dir-analytics':
          return 1;
        case 'comcast-vp-data':
          return 0;
        case 'comcast-vp-ai':
          return 1;
        default:
          return 0;
      }
    };

    // Nodes
    const nodes = g.selectAll(".node")
      .data(timelineData)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d, i) => {
        const x = xScale(i);

        if (d.type === 'work') {
          const staggerIndex = getStaggerIndex(d.id);
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
        setSelectedEvent(prev => prev?.id === d.id ? null : d);
      });

    // Vertical Connectors
    nodes.append("line")
      .attr("class", "connector-line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 0)
      .attr("y2", (d) => {
        if (d.type === 'work') {
          const staggerIndex = getStaggerIndex(d.id);
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
      .style("font-variant-numeric", "lining-nums")
      .style("font-feature-settings", '"lnum" 1')
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

  }, [dimensions, selectedEvent]);

  return (
    <div className="relative w-full min-h-[420px] flex flex-col overflow-x-auto">
      <div className="flex-1 flex items-center min-w-[1200px]">
        <svg 
          ref={svgRef} 
          width={Math.max(dimensions.width, 1200)} 
          height={dimensions.height}
          className="overflow-visible"
        />
      </div>

      <FlyoutDrawer 
        isOpen={selectedEvent !== null} 
        onClose={() => setSelectedEvent(null)} 
        event={selectedEvent} 
      />
    </div>
  );
};
