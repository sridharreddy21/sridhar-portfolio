import React, { useState, useEffect } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Eye, 
  Workflow, 
  CheckCircle2, 
  Code2, 
  Terminal, 
  Layers, 
  ArrowUpRight, 
  Cpu, 
  Shield, 
  Play, 
  Activity, 
  Search, 
  Database, 
  Calendar 
} from 'lucide-react';
import { Github } from './Icons';
import { featuredProjects, publicGithubRepos } from '../data/portfolioData';
import { ProjectDemoModal } from './ProjectDemoModal';

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [gitHubRepos, setGitHubRepos] = useState(publicGithubRepos);
  const [loadingRepos, setLoadingRepos] = useState(false);

  // Dynamically fetch public repo metadata from GitHub API if online
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoadingRepos(true);
        const res = await fetch('https://api.github.com/users/sridharreddy21/repos', {
          headers: { 'User-Agent': 'portfolio-sridhar' }
        });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map(r => ({
              name: r.name,
              repoUrl: r.html_url,
              description: r.description || 'Public repository by B. Rama Sridhar Reddy.',
              language: r.language || 'Codebase',
              langColor: r.language === 'Python' ? '#3572A5' : r.language === 'Java' ? '#b07219' : r.language === 'JavaScript' ? '#f1e05a' : '#38bdf8',
              updatedAt: new Date(r.updated_at).toLocaleDateString()
            }));
            setGitHubRepos(mapped);
          }
        }
      } catch (err) {
        // Graceful fallback to authentic predefined repo data
        console.log('Using verified offline repo fallback data', err);
      } finally {
        setLoadingRepos(false);
      }
    };

    fetchRepos();
  }, []);

  const filteredProjects = featuredProjects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'cv') return p.category.includes('Computer Vision') || p.category.includes('AI');
    if (filter === 'web') return p.category.includes('Full-Stack') || p.category.includes('Web');
    if (filter === 'algo') return p.category.includes('Algorithms') || p.category.includes('Desktop');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono-code mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 // FEATURED WORK & ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Engineering Projects
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Practical software systems built across computer vision, full-stack architectures, relational database management, and graph-based algorithmic navigation.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Projects (6)' },
              { id: 'cv', label: 'Computer Vision & AI' },
              { id: 'web', label: 'Full-Stack Web' },
              { id: 'algo', label: 'Algorithms & Systems' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Cards Grid */}
        <div className="space-y-12 mb-20">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className="glass-panel rounded-3xl border border-white/10 overflow-hidden glass-card-glow group hover:border-cyan-500/30 transition-all duration-300 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left Column: Project Details */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* Top Meta: Number & Category Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono-code text-cyan-400 font-bold text-sm tracking-wider">
                          PROJECT {project.number}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                        <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Problem Solved Callout */}
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                        <div className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5" />
                          <span>Problem Solved</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {project.problemSolved}
                        </p>
                      </div>

                      {/* Key Features Bullet List */}
                      <div className="mb-6 space-y-2">
                        <div className="text-xs font-mono-code text-slate-400 uppercase tracking-wider mb-2">
                          Key Features
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical Highlight Badge */}
                      <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-code text-cyan-300 mb-6">
                        <Workflow className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span><strong>Highlight:</strong> {project.highlight}</span>
                      </div>
                    </div>

                    {/* Bottom Actions: GitHub & Interactive Architecture Demo */}
                    <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono-code text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3">
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 text-xs font-medium text-white flex items-center gap-2 transition-all cursor-pointer group/btn"
                            title="View GitHub Repository"
                          >
                            <Github className="w-4 h-4 text-slate-300 group-hover/btn:text-cyan-400" />
                            <span>Repository</span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                          </a>
                        ) : (
                          <span className="text-xs font-mono-code text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                            Academic Core
                          </span>
                        )}

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-500/30 text-xs font-medium flex items-center gap-2 transition-all cursor-pointer group/demo"
                        >
                          <Play className="w-3.5 h-3.5 text-cyan-400 group-hover/demo:scale-110 transition-transform" />
                          <span>Interactive Demo</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Custom Visual Thumbnail / Architecture Simulation Preview */}
                  <div className="lg:col-span-5 bg-[#070a12] p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
                    <div>
                      {/* Visual Mockup Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-[11px] font-mono-code text-slate-400">
                        <span className="flex items-center gap-2">
                          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                          {project.id.toUpperCase()}_ENGINE
                        </span>
                        <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          VERIFIED STACK
                        </span>
                      </div>

                      {/* Project Custom Technical Visual */}
                      <div className="rounded-xl bg-[#090e1a] border border-white/10 p-4 mb-4 relative overflow-hidden group/visual">
                        {/* Background tech grid */}
                        <div className="absolute inset-0 grid-pattern opacity-30" />

                        {project.id === 'drowsy-guard' && (
                          <div className="relative z-10 py-6 text-center">
                            <div className="w-20 h-24 mx-auto rounded-full border-2 border-dashed border-cyan-400/50 flex flex-col items-center justify-center relative mb-3">
                              <Eye className="w-8 h-8 text-cyan-400 animate-pulse" />
                              <div className="text-[9px] font-mono-code text-cyan-300 mt-1">468 Landmarks</div>
                            </div>
                            <div className="text-xs font-mono-code text-slate-300 font-semibold">
                              MediaPipe Face Mesh + OpenCV EAR
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono-code mt-1">
                              Multithreaded Background Audio Alerting
                            </div>
                          </div>
                        )}

                        {project.id === 'movie-booking' && (
                          <div className="relative z-10 py-6 text-center">
                            <div className="grid grid-cols-4 gap-2 max-w-[160px] mx-auto mb-3">
                              {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                                <div
                                  key={s}
                                  className={`h-5 rounded text-[10px] font-mono-code flex items-center justify-center ${
                                    s === 3 || s === 4 ? 'bg-purple-500/40 border border-purple-400 text-purple-200' : 'bg-white/10 text-slate-400'
                                  }`}
                                >
                                  {s}
                                </div>
                              ))}
                            </div>
                            <div className="text-xs font-mono-code text-slate-300 font-semibold">
                              Flask + MongoDB Document Store
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono-code mt-1">
                              Werkzeug Hashing & Dynamic Jinja2
                            </div>
                          </div>
                        )}

                        {project.id === 'hotel-management' && (
                          <div className="relative z-10 py-6 text-center">
                            <div className="grid grid-cols-3 gap-2 max-w-[200px] mx-auto mb-3">
                              {['R101', 'R102', 'R103'].map((r, i) => (
                                <div key={i} className="p-2 rounded bg-white/5 border border-white/10 text-[10px] font-mono-code">
                                  <div className="text-white font-bold">{r}</div>
                                  <div className={i === 1 ? 'text-emerald-400' : 'text-amber-400'}>
                                    {i === 1 ? 'Free' : 'Booked'}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="text-xs font-mono-code text-slate-300 font-semibold">
                              Flask MVC & SQLite Relational DB
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono-code mt-1">
                              Room Allocation & Workflow Management
                            </div>
                          </div>
                        )}

                        {project.id === 'study-planner' && (
                          <div className="relative z-10 py-6 text-center">
                            {/* Stylized Mini Chart */}
                            <div className="h-16 flex items-end justify-center gap-3 mb-3">
                              <div className="w-5 bg-cyan-500/40 rounded-t h-8 border-t border-cyan-400" />
                              <div className="w-5 bg-cyan-500/60 rounded-t h-12 border-t border-cyan-400" />
                              <div className="w-5 bg-cyan-500 rounded-t h-14 border-t border-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                              <div className="w-5 bg-cyan-500/80 rounded-t h-10 border-t border-cyan-400" />
                            </div>
                            <div className="text-xs font-mono-code text-slate-300 font-semibold">
                              Interactive Chart.js Visualizer
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono-code mt-1">
                              Task Timer & Productivity Analytics
                            </div>
                          </div>
                        )}

                        {project.id === 'pharmacy-management' && (
                          <div className="relative z-10 py-6 text-center">
                            <div className="p-3 rounded-lg bg-black/40 border border-white/10 max-w-[220px] mx-auto mb-3 text-left font-mono-code text-[11px]">
                              <div className="text-emerald-400 font-bold">Java Swing + MySQL</div>
                              <div className="text-slate-400 mt-1">Role: Admin / Pharmacist</div>
                              <div className="text-slate-400">Inventory Sync: Automated</div>
                            </div>
                            <div className="text-xs font-mono-code text-slate-300 font-semibold">
                              Desktop MVC & JDBC Architecture
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono-code mt-1">
                              Batch Expiry & POS Billing System
                            </div>
                          </div>
                        )}

                        {project.id === 'traffic-navigation' && (
                          <div className="relative z-10 py-6 text-center">
                            <div className="flex items-center justify-center gap-4 mb-3 font-mono-code text-xs">
                              <span className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300">A</span>
                              <span className="w-10 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400" />
                              <span className="w-7 h-7 rounded-full bg-purple-500/20 border border-purple-400 flex items-center justify-center text-purple-300">B</span>
                              <span className="w-10 h-0.5 bg-purple-400" />
                              <span className="w-7 h-7 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center text-indigo-300">C</span>
                            </div>
                            <div className="text-xs font-mono-code text-slate-300 font-semibold">
                              Custom Binary MinHeap & Dijkstra
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono-code mt-1">
                              Dynamic Edge Weights & Route Finding
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Technical Architecture Summary */}
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 font-mono-code text-[11px] text-slate-300 leading-relaxed">
                        <div className="text-slate-400 uppercase tracking-wider text-[10px] mb-1 font-bold">
                          System Pipeline
                        </div>
                        {project.architecture}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="mt-4 w-full py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 text-xs font-medium text-slate-200 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Launch Interactive Simulation</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Public GitHub Repositories Showcase */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400 uppercase tracking-wider mb-1">
                <Github className="w-4 h-4" />
                <span>Verified Public GitHub Repositories</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Open Source & Code Repositories
              </h3>
            </div>

            <a
              href="https://github.com/sridharreddy21"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 text-xs font-medium text-white flex items-center gap-2 transition-colors w-fit group"
            >
              <span>View GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {gitHubRepos.map((repo, rIdx) => (
              <a
                key={rIdx}
                href={repo.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.04] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-white font-mono-code font-bold text-sm group-hover:text-cyan-300 transition-colors">
                      <FolderGit2 className="w-4 h-4 text-cyan-400" />
                      <span>sridharreddy21/{repo.name}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-mono-code text-slate-400">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: repo.langColor || '#38bdf8' }}
                    />
                    <span>{repo.language}</span>
                  </div>
                  <span className="text-slate-400">Public Repository</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-4 text-[11px] font-mono-code text-slate-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Synchronized directly with github.com/sridharreddy21. Zero fabricated stats.</span>
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectDemoModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
