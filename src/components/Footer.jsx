import React from 'react';
import { Mail, ArrowUp, Code2, Heart } from 'lucide-react';
import { Github } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#04060a] relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-base font-bold text-white tracking-tight">
              {personalInfo.name}
            </span>
            <p className="text-xs text-slate-400 mt-1 font-mono-code">
              Designed & Built with curiosity and code.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
            <a href="#achievements" className="hover:text-cyan-300 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* Socials & Back-to-Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Year & Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono-code text-slate-400">
          <span>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            Amrita Vishwa Vidyapeetham • CSE
          </span>
        </div>
      </div>
    </footer>
  );
};
