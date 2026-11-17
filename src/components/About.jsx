import React from 'react';
import { 
  FolderGit2, 
  GraduationCap, 
  Calendar, 
  Trophy, 
  BookOpen, 
  CheckCircle2, 
  MapPin, 
  Sparkles,
  Award
} from 'lucide-react';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

export const About = () => {
  const iconMap = {
    FolderGit2: FolderGit2,
    GraduationCap: GraduationCap,
    Calendar: Calendar,
    Trophy: Trophy
  };

  const keyStrengths = [
    "Full-Stack Web Development (Python, Flask, Jinja2, React)",
    "Real-Time Computer Vision & Edge AI (OpenCV, MediaPipe)",
    "Algorithmic Data Structures & Graph Routing (Dijkstra, Min-Heap)",
    "Database Engineering & Integrity (MongoDB, SQLite, MySQL JDBC)",
    "Application Security, Werkzeug Hashing & Secrets Isolation",
    "Time-bound Collaborative Prototyping in Hackathons"
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono-code mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {personalInfo.aboutHeading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-4" />
        </div>

        {/* 4 Highlight Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {aboutHighlights.map((card, idx) => {
            const Icon = iconMap[card.icon] || FolderGit2;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-mono-code text-white group-hover:text-cyan-300 transition-colors">
                  {card.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {card.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {card.subtext}
                </div>
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-16 h-16 text-cyan-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Narrative & Education Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="glass-panel p-8 rounded-2xl relative border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Practical Engineering Mindset</span>
              </h3>
              
              <div className="flex flex-col gap-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.aboutDescription.map((para, index) => (
                  <p key={index} className="text-slate-300 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Core Technical Capabilities Checklist */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-4">
                  Core Engineering Competencies
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {keyStrengths.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden glass-card-glow">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono-code flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  ACADEMIC FOUNDATION
                </span>
                <span className="text-xs font-mono-code text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 font-semibold">
                  CGPA: {personalInfo.cgpa}
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-purple-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white leading-tight">
                    {personalInfo.college}
                  </h4>
                  <p className="text-cyan-300 font-medium text-sm mt-1">
                    {personalInfo.degree}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 font-mono-code flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {personalInfo.duration}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Pursuing rigorous foundational and applied coursework in computer science, software design, and algorithm optimization.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
                  Relevant Coursework & Focus
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Programming (Java)",
                    "Database Management Systems",
                    "Computer Vision Systems",
                    "Computer Networks",
                    "Operating Systems"
                  ].map((subject, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] text-slate-300 font-mono-code hover:border-cyan-400/40 transition-colors"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Nandyal, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
