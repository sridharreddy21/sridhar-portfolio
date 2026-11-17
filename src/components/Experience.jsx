import React from 'react';
import { 
  Sparkles, 
  Briefcase, 
  Calendar, 
  GitBranch, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  Check
} from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export const Experience = () => {
  const milestoneHighlights = [
    {
      title: "Real-Time Computer Vision & Multithreading",
      desc: "Engineered vision pipelines utilizing OpenCV and MediaPipe Face Mesh with background daemon threads for non-blocking acoustic warnings."
    },
    {
      title: "Full-Stack Web Engineering & Application Security",
      desc: "Built complete Flask MVC architectures with Werkzeug cryptographic password hashing and environment-based secret management (.env)."
    },
    {
      title: "Database Architecture (Relational & NoSQL)",
      desc: "Architected structured data schemas using MongoDB for document flexibility, SQLite for embedded lightweight persistence, and MySQL via JDBC transactions."
    },
    {
      title: "Custom Data Structures & Algorithmic Routing",
      desc: "Implemented custom binary Min-Heap priority queues from scratch with zero third-party dependencies for dynamic Dijkstra shortest-path calculations."
    },
    {
      title: "Git Collaboration & Rapid Hackathon Prototyping",
      desc: "Maintained systematic Git versioning across all codebases, delivering competitive functional prototypes under strict event deadlines."
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono-code mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // TRACK RECORD & TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            What I've Been Building.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-4" />
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            A chronological timeline of hands-on software development, architectural problem solving, and end-to-end project engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12">
          {experienceTimeline.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#05070c] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.5)]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Main Timeline Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 glass-card-glow hover:border-cyan-500/30 transition-all duration-300">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <div>
                    <span className="text-xs font-mono-code text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20 font-semibold inline-block mb-2">
                      {exp.organization}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{exp.tagline}</p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono-code text-slate-300 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Narrative Points from user prompt */}
                <div className="space-y-3 mb-8">
                  {exp.description.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Architectural Milestones Grid */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                    Core Technical Pillars Demonstrated
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {milestoneHighlights.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/20 transition-colors"
                      >
                        <div className="text-xs font-bold text-white mb-1 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{m.title}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges Footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono-code text-slate-400 mr-2">Technologies:</span>
                  {exp.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-cyan-300 font-mono-code"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
