import React, { useState } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import './App.css';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#05070c] text-slate-100 overflow-x-hidden radial-mesh-bg selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background Interactive Particle Canvas */}
      <ParticleBackground />

      {/* Main Sticky Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Page Content */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* In-Browser Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

export default App;
