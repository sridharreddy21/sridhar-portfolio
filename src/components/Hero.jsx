import React, { useState } from 'react';
import { ArrowDown, Code2, Sparkles, Terminal, FileText, Send, Eye, ShieldCheck, ChevronRight, Play } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState('vision');

  const codeSnippets = {
    vision: `// Drowsy-Guard PRO: Real-time Fatigue Detection
import cv2, mediapipe as mp, numpy as np
from playsound import playsound
import threading

def evaluate_driver_vigilance(frame):
    mesh = mp_face_mesh.process(frame)
    ear_left = calculate_ear(mesh.landmarks[LEFT_EYE])
    ear_right = calculate_ear(mesh.landmarks[RIGHT_EYE])
    
    if (ear_left + ear_right) / 2 < EAR_THRESHOLD:
        threading.Thread(target=trigger_alert_sound, daemon=True).start()
        return "FATIGUE_ALERT_TRIGGERED"
    return "DRIVER_ALERT_NORMAL"`,
    algo: `// Smart Traffic Navigation: Custom MinHeap & Dijkstra
class MinHeap:
    def __init__(self): self.heap = []
    def push(self, node, dist): ...
    def pop_min(self): ...

def compute_optimal_route(graph, source, destination):
    pq = MinHeap()
    pq.push(source, 0)
    distances = {source: 0}
    
    while not pq.is_empty():
        curr, cost = pq.pop_min()
        if curr == destination: break
        for neighbor, weight in graph.edges[curr]:
            relax_edge(curr, neighbor, weight)`,
    stack: `{
  "developer": "B. Rama Sridhar Reddy",
  "education": "Amrita Vishwa Vidyapeetham",
  "program": "B.Tech Computer Science & Engineering",
  "cgpa": "8.29",
  "specialties": [
    "Computer Vision & Real-Time AI",
    "Full-Stack Python (Flask / MongoDB / SQLite)",
    "Algorithms & Custom Data Structures",
    "Enterprise Java (Swing / JDBC / MySQL)"
  ],
  "status": "Ready for Engineering Internships"
}`
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subheading & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-6 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.12]">
              Hi, I'm <span className="text-gradient-cyan-purple">{personalInfo.shortName}.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg font-medium text-cyan-400/90 mb-5 tracking-wide flex items-center gap-2">
              <span>{personalInfo.subheading}</span>
            </p>

            {/* Supporting Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8 font-normal">
              {personalInfo.heroDescription}
            </p>

            {/* CTAs: Explore My Work, Download Resume, Let's Connect */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08] text-slate-200 font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 group cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 hover:bg-purple-500/10 text-slate-300 font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200"
              >
                <Send className="w-4 h-4 text-purple-400" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-6 sm:gap-8 w-full max-w-lg">
              <div>
                <div className="text-2xl font-bold font-mono-code text-white">6</div>
                <div className="text-xs text-slate-400 mt-0.5">Projects Built</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono-code text-cyan-400">8.29</div>
                <div className="text-xs text-slate-400 mt-0.5">Academic CGPA</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono-code text-purple-400">Multiple</div>
                <div className="text-xs text-slate-400 mt-0.5">Hackathons</div>
              </div>
            </div>
          </div>

          {/* Right Column: Developer-themed Visual / Interactive Terminal Console */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg rounded-2xl glass-panel border border-white/10 shadow-2xl shadow-cyan-950/20 overflow-hidden glass-card-glow group">
              {/* Terminal Title Bar */}
              <div className="bg-[#0b0e18] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono-code text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    sridhar@amrita-dev: ~
                  </span>
                </div>
                <div className="text-[11px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </div>
              </div>

              {/* Tab Selector */}
              <div className="bg-[#080b13] px-3 pt-2 flex items-center gap-1 border-b border-white/5 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`px-3 py-1.5 rounded-t-lg text-xs font-mono-code transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'vision'
                      ? 'bg-[#0f1422] text-cyan-300 border-t-2 border-cyan-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Eye className="w-3 h-3" />
                  01.vision.py
                </button>
                <button
                  onClick={() => setActiveTab('algo')}
                  className={`px-3 py-1.5 rounded-t-lg text-xs font-mono-code transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'algo'
                      ? 'bg-[#0f1422] text-purple-300 border-t-2 border-purple-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3 h-3" />
                  02.dijkstra.py
                </button>
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`px-3 py-1.5 rounded-t-lg text-xs font-mono-code transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'stack'
                      ? 'bg-[#0f1422] text-indigo-300 border-t-2 border-indigo-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <ShieldCheck className="w-3 h-3" />
                  profile.json
                </button>
              </div>

              {/* Code Display Area */}
              <div className="p-4 bg-[#080b13]/90 font-mono-code text-xs leading-relaxed text-slate-300 overflow-x-auto min-h-[260px] max-h-[300px]">
                <pre className="text-[12px] font-mono-code whitespace-pre-wrap">
                  {codeSnippets[activeTab]}
                </pre>
              </div>

              {/* Terminal Footer Telemetry */}
              <div className="bg-[#0b0f1b] px-4 py-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Engine: Python 3.11 / React 19
                </span>
                <span className="text-cyan-400/90 font-semibold">Latency: 12ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs font-medium text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <span>Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5 group-hover:border-cyan-400/50 transition-colors">
              <div className="w-1.5 h-2 rounded-full bg-cyan-400 animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
