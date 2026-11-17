import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, MapPin, GraduationCap } from 'lucide-react';
import { Github } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#090d16] border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header bar */}
        <div className="px-6 py-4 bg-[#0d1322] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Curriculum Vitae</h3>
              <p className="text-xs text-slate-400 font-mono-code">{personalInfo.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-500/25 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-200 text-xs sm:text-sm font-sans bg-[#070a12]">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-cyan-300 font-medium text-xs sm:text-sm mt-1">
              {personalInfo.degree} • {personalInfo.college}
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400 font-mono-code">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.email}
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-300 hover:text-cyan-300"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                github.com/sridharreddy21
              </a>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono-code uppercase tracking-wider text-cyan-400 font-bold mb-2">
              EDUCATION
            </h2>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex justify-between items-start font-semibold text-white">
                <div>
                  <div className="text-sm font-bold">{personalInfo.college}</div>
                  <div className="text-xs text-slate-300">{personalInfo.degree}</div>
                </div>
                <div className="text-right text-xs font-mono-code">
                  <div className="text-cyan-300 font-bold">CGPA: {personalInfo.cgpa}</div>
                  <div className="text-slate-400">{personalInfo.duration}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono-code uppercase tracking-wider text-cyan-400 font-bold mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs">
              <div>
                <span className="text-slate-400 font-mono-code">Languages: </span>
                <span className="text-white">Python, Java, JavaScript, HTML, CSS</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono-code">Frameworks & Templating: </span>
                <span className="text-white">Flask, React.js, Jinja2</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono-code">Libraries & Tools: </span>
                <span className="text-white">OpenCV, MediaPipe, NumPy, Chart.js, PyMongo, Git, GitHub, VS Code</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono-code">Databases: </span>
                <span className="text-white">MongoDB, SQLite, MySQL</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono-code uppercase tracking-wider text-cyan-400 font-bold mb-2">
              PROJECTS
            </h2>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex justify-between font-bold text-white text-xs">
                  <span>Drowsy-Guard PRO | Computer Vision & Real-Time AI</span>
                  <span className="font-mono-code text-[11px] text-cyan-400">Python, OpenCV, MediaPipe, NumPy</span>
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Real-time driver fatigue monitoring system utilizing 468-point facial mesh landmark detection, eye-aspect ratio thresholding, and multithreading for uninterrupted audio warning triggers.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex justify-between font-bold text-white text-xs">
                  <span>Movie Booking System | Full-Stack Web Development</span>
                  <span className="font-mono-code text-[11px] text-cyan-400">Python, Flask, MongoDB, Jinja2</span>
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Full-stack dynamic theatrical reservation portal with seat allocation, Werkzeug password hashing security, and environment-based secret configuration.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex justify-between font-bold text-white text-xs">
                  <span>Smart Traffic Navigation System | Graph Systems & Algorithms</span>
                  <span className="font-mono-code text-[11px] text-cyan-400">Python, Dijkstra, Min-Heap</span>
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Traffic navigation application built using custom binary MinHeap priority queues from scratch with zero dependencies, solving dynamic Dijkstra shortest path routes under variable congestion.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex justify-between font-bold text-white text-xs">
                  <span>Hotel Management System & Smart Study Planner</span>
                  <span className="font-mono-code text-[11px] text-cyan-400">Flask, SQLite, Chart.js, JS</span>
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Engineered room workflow management using Flask/SQLite, and client-side study planner with interactive time analytics via Chart.js.
                </p>
              </div>
            </div>
          </div>

          {/* Hackathons & Experience */}
          <div>
            <h2 className="text-xs font-mono-code uppercase tracking-wider text-cyan-400 font-bold mb-2">
              EXPERIENCE & HACKATHONS
            </h2>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs">
              <div>
                <span className="font-bold text-white">Independent Software Developer (2025 – Present): </span>
                <span className="text-slate-300">
                  Built six end-to-end applications across computer vision, Flask full-stack systems, Java desktop systems, and algorithmic navigation.
                </span>
              </div>
              <div>
                <span className="font-bold text-white">SRM Hackathon: </span>
                <span className="text-slate-300">Competed in Web Development Track; built a functioning prototype within event deadline; received certificate.</span>
              </div>
              <div>
                <span className="font-bold text-white">Amrita Vishwa Vidyapeetham, Chennai Hackathon: </span>
                <span className="text-slate-300">Participated as a competitor and received official institute certificate.</span>
              </div>
              <div>
                <span className="font-bold text-white">Scaler React Course: </span>
                <span className="text-slate-300">Completed certification in modern React.js component architecture and state management.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#0d1322] border-t border-white/10 flex justify-between items-center text-xs text-slate-400 font-mono-code">
          <span>B. Rama Sridhar Reddy • Resume</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
