import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Database, 
  Wrench, 
  Sparkles, 
  Check, 
  Terminal, 
  Cpu, 
  Globe, 
  Eye, 
  BarChart3, 
  GitBranch, 
  FolderGit2, 
  Monitor,
  Flame,
  FileCode2
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const getSkillIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'python':
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'java':
        return <Cpu className="w-4 h-4 text-orange-400" />;
      case 'javascript':
        return <FileCode2 className="w-4 h-4 text-yellow-400" />;
      case 'html':
      case 'html5':
        return <Globe className="w-4 h-4 text-rose-400" />;
      case 'css':
      case 'css3':
        return <Globe className="w-4 h-4 text-blue-400" />;
      case 'react.js':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'flask':
        return <Flame className="w-4 h-4 text-slate-200" />;
      case 'jinja2':
        return <Code2 className="w-4 h-4 text-indigo-400" />;
      case 'opencv':
        return <Eye className="w-4 h-4 text-red-400" />;
      case 'mediapipe':
        return <Sparkles className="w-4 h-4 text-teal-400" />;
      case 'numpy':
        return <Cpu className="w-4 h-4 text-blue-300" />;
      case 'chart.js':
        return <BarChart3 className="w-4 h-4 text-pink-400" />;
      case 'pymongo':
        return <Database className="w-4 h-4 text-emerald-300" />;
      case 'mongodb':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'sqlite':
        return <Database className="w-4 h-4 text-sky-400" />;
      case 'git':
        return <GitBranch className="w-4 h-4 text-orange-500" />;
      case 'github':
        return <FolderGit2 className="w-4 h-4 text-purple-400" />;
      case 'vs code':
        return <Monitor className="w-4 h-4 text-blue-500" />;
      default:
        return <Code2 className="w-4 h-4 text-cyan-400" />;
    }
  };

  const categoryIconMap = {
    Code2: Code2,
    Layers: Layers,
    Database: Database,
    Wrench: Wrench
  };

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.title.toLowerCase().includes(activeCategory));

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono-code mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 // CAPABILITIES & TOOLING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Technical Arsenal
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Practical, verified technologies applied across production codebases, academic solutions, and hackathon prototypes.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Domains' },
              { id: 'languages', label: 'Languages' },
              { id: 'frameworks', label: 'Frameworks & Libs' },
              { id: 'databases', label: 'Databases' },
              { id: 'tools', label: 'Dev Tools' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category, idx) => {
            const CatIcon = categoryIconMap[category.icon] || Code2;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 relative overflow-hidden glass-card-glow group hover:border-cyan-500/30 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-purple-500/10 border border-white/10 text-cyan-400 flex items-center justify-center">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400">{category.description}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono-code text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    {category.skills.length} Techs
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.05] transition-all duration-200 flex items-center justify-between group/skill"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-black/40 border border-white/5 flex items-center justify-center group-hover/skill:border-cyan-400/40 transition-colors">
                          {getSkillIcon(skill.name)}
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-white block group-hover/skill:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] text-slate-400 block font-mono-code">
                            {skill.tag}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono-code text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Principles Footer Note */}
        <div className="mt-8 p-4 rounded-xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>
              All skills backed by practical project implementations, Git versioning, and continuous academic coursework.
            </span>
          </div>
          <span className="font-mono-code text-cyan-300 shrink-0">Zero Fabricated Percentages</span>
        </div>
      </div>
    </section>
  );
};
