import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  CheckCircle, 
  GraduationCap, 
  Users2, 
  CodeXml, 
  Calendar, 
  ExternalLink,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { achievements } from '../data/portfolioData';

export const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-purple-400" />;
      case 'CodeXml':
        return <CodeXml className="w-5 h-5 text-cyan-400" />;
      case 'Users2':
        return <Users2 className="w-5 h-5 text-blue-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-emerald-400" />;
      default:
        return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono-code mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 // HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Hackathons & Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full mt-4" />
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Verified competitive hackathon participations, certifications, and academic excellence in Computer Science.
          </p>
        </div>

        {/* Certificate / Badge Style Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 glass-card-glow hover:border-cyan-400/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle background certificate watermark */}
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                {getIcon(item.icon)}
              </div>

              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono-code text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20 font-semibold">
                    {item.statusBadge}
                  </span>
                </div>

                {/* Title & Track */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-mono-code text-slate-400 mb-4 flex items-center gap-2">
                  <span className="text-cyan-400/80">{item.track}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>

                {/* Narrative Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              {/* Highlight Footer */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-start gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-mono-code text-[11px] text-slate-300 leading-normal">
                    {item.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Spotlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30 bg-gradient-to-r from-cyan-950/20 via-indigo-950/20 to-purple-950/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xs font-mono-code text-cyan-300 uppercase tracking-wider">
                Amrita Vishwa Vidyapeetham • B.Tech CSE
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Maintained 8.29 Cumulative Grade Point Average
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Balancing heavy algorithm coursework with continuous hands-on project creation and hackathons.
              </p>
            </div>
          </div>
          <div className="shrink-0 text-right">
            <span className="text-3xl font-mono-code font-bold text-cyan-300 block">
              8.29 CGPA
            </span>
            <span className="text-[11px] font-mono-code text-slate-400 block mt-0.5">
              Verified Academic Record
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
