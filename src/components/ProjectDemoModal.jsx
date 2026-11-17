import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Cpu, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Play, 
  RefreshCw, 
  Layers, 
  Workflow, 
  Check, 
  Volume2, 
  Calendar, 
  Clock, 
  Sparkles,
  Navigation
} from 'lucide-react';
import { Github } from './Icons';

export const ProjectDemoModal = ({ project, onClose }) => {
  if (!project) return null;

  // State for Drowsy-Guard interactive simulation
  const [eyesClosed, setEyesClosed] = useState(false);
  const [earValue, setEarValue] = useState(0.35);
  const [alertActive, setAlertActive] = useState(false);

  const toggleEyes = (closed) => {
    setEyesClosed(closed);
    if (closed) {
      setEarValue(0.18);
      setAlertActive(true);
    } else {
      setEarValue(0.36);
      setAlertActive(false);
    }
  };

  // State for Traffic Navigation interactive simulator
  const [trafficNodes] = useState([
    { id: 'Amrita Junction', x: 50, y: 50 },
    { id: 'Tech Park', x: 220, y: 40 },
    { id: 'Metro Station', x: 120, y: 140 },
    { id: 'Main Boulevard', x: 280, y: 130 },
    { id: 'Central Hub', x: 200, y: 220 }
  ]);
  const [selectedRoute, setSelectedRoute] = useState('Optimal Route: Junction -> Metro -> Hub (14 mins)');
  const [trafficHeavy, setTrafficHeavy] = useState(false);

  const toggleTraffic = () => {
    const next = !trafficHeavy;
    setTrafficHeavy(next);
    if (next) {
      setSelectedRoute('Rerouted via Dijkstra: Junction -> Tech Park -> Boulevard -> Hub (18 mins)');
    } else {
      setSelectedRoute('Optimal Route: Junction -> Metro -> Hub (14 mins)');
    }
  };

  // State for Study Planner simulator
  const [studyTasks, setStudyTasks] = useState([
    { id: 1, title: 'Data Structures - Tree Traversal', done: true, hours: 2 },
    { id: 2, title: 'Computer Vision - Landmark Matrix', done: false, hours: 3 },
    { id: 3, title: 'Database Normalization BCNF', done: true, hours: 1.5 }
  ]);

  const toggleTask = (id) => {
    setStudyTasks(tasks =>
      tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  // State for Movie Booking Simulator
  const [selectedSeats, setSelectedSeats] = useState(['B3', 'B4']);
  const allSeats = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4'];

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#090d16] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0c1220] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono-code text-xs font-bold flex items-center justify-center">
              {project.number}
            </span>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                {project.title}
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-normal">
                  {project.category}
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-mono-code">{project.highlight}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Architecture & Pipeline Box */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400 uppercase tracking-wider mb-2">
              <Workflow className="w-3.5 h-3.5" />
              <span>Technical Architecture & Processing Pipeline</span>
            </div>
            <div className="font-mono-code text-xs text-slate-300 bg-black/40 p-3 rounded-lg border border-white/5 break-words leading-relaxed">
              {project.architecture}
            </div>
          </div>

          {/* Interactive Simulation Panel */}
          <div className="rounded-xl border border-cyan-500/30 bg-[#070b14] p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <span className="text-xs font-mono-code text-cyan-300 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                INTERACTIVE SIMULATION PLAYGROUND
              </span>
              <span className="text-[11px] font-mono-code text-slate-400">
                Live Prototype Simulator
              </span>
            </div>

            {/* Drowsy-Guard Simulator */}
            {project.id === 'drowsy-guard' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-300">
                  Simulate driver eye-closure frames and watch the Eye Aspect Ratio (EAR) metric trigger the multithreaded audio alarm worker when threshold drops below 0.25.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-center">
                    <div className="text-xs text-slate-400 mb-2 font-mono-code">DRIVER VIDEO STREAM</div>
                    <div className="w-full h-32 rounded-lg bg-slate-900 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Abstract Face Mesh simulation */}
                      <div className="w-20 h-24 rounded-full border border-cyan-400/40 relative flex items-center justify-center">
                        {/* Eyes */}
                        <div className={`absolute top-7 left-4 w-4 rounded-full transition-all duration-300 ${eyesClosed ? 'h-0.5 bg-rose-500' : 'h-3 bg-cyan-400'}`} />
                        <div className={`absolute top-7 right-4 w-4 rounded-full transition-all duration-300 ${eyesClosed ? 'h-0.5 bg-rose-500' : 'h-3 bg-cyan-400'}`} />
                        {/* Nose */}
                        <div className="w-1 h-3 bg-white/30 rounded-full mt-2" />
                        {/* Mouth */}
                        <div className="absolute bottom-5 w-6 h-1 bg-white/30 rounded-full" />
                      </div>
                      <div className="absolute bottom-2 left-2 text-[10px] font-mono-code text-slate-400">
                        FPS: 30.2 | Landmarks: 468 pts
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 font-mono-code text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-slate-400">Eye Aspect Ratio (EAR):</span>
                      <span className={`font-bold ${earValue < 0.25 ? 'text-rose-400 animate-pulse' : 'text-emerald-400'}`}>
                        {earValue.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-slate-400">Drowsiness Alert:</span>
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${alertActive ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-bounce' : 'bg-emerald-500/20 text-emerald-300'}`}>
                        {alertActive ? 'CRITICAL AUDIO WARNING' : 'NORMAL (VIGILANT)'}
                      </span>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => toggleEyes(false)}
                        className={`flex-1 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${!eyesClosed ? 'bg-cyan-500 text-black' : 'bg-white/10 text-slate-300'}`}
                      >
                        Eyes Open (Normal)
                      </button>
                      <button
                        onClick={() => toggleEyes(true)}
                        className={`flex-1 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${eyesClosed ? 'bg-rose-600 text-white animate-pulse' : 'bg-white/10 text-slate-300'}`}
                      >
                        Eyes Closed (Fatigue)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Traffic Navigation Simulator */}
            {project.id === 'traffic-navigation' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-300">
                  Simulate dynamic road congestion and observe Dijkstra's shortest-path rerouting with custom binary MinHeap priority queue.
                </p>
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3 font-mono-code text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Transit Status:</span>
                    <button
                      onClick={toggleTraffic}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors cursor-pointer"
                    >
                      {trafficHeavy ? 'Clear Congestion' : 'Simulate Heavy Traffic on Metro St.'}
                    </button>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-cyan-300">
                    <Navigation className="w-4 h-4 inline mr-2 text-cyan-400" />
                    {selectedRoute}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Priority Queue: Custom MinHeap (zero external dependencies) | Time Complexity: O((V + E) log V)
                  </div>
                </div>
              </div>
            )}

            {/* Smart Study Planner Simulator */}
            {project.id === 'study-planner' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-300">
                  Interactive task progress tracking with dynamic productivity summary.
                </p>
                <div className="space-y-2">
                  {studyTasks.map(t => (
                    <div
                      key={t.id}
                      onClick={() => toggleTask(t.id)}
                      className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between cursor-pointer hover:border-cyan-400/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${t.done ? 'bg-cyan-500 border-cyan-400 text-black' : 'border-white/20'}`}>
                          {t.done && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className={`text-xs ${t.done ? 'line-through text-slate-500' : 'text-white'}`}>
                          {t.title}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono-code text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                        {t.hours} hrs
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-[11px] font-mono-code text-slate-400 flex items-center justify-between pt-2">
                  <span>Total logged study time: {studyTasks.filter(t => t.done).reduce((acc, c) => acc + c.hours, 0)} hours</span>
                  <span className="text-cyan-300">Target Completion: {Math.round((studyTasks.filter(t => t.done).length / studyTasks.length) * 100)}%</span>
                </div>
              </div>
            )}

            {/* Movie Booking Simulator */}
            {project.id === 'movie-booking' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-300">
                  Select seats in the interactive cinema grid to simulate instant seat allocation and Werkzeug-authenticated reservation session.
                </p>
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-center">
                  <div className="w-full h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded mb-6 opacity-60" />
                  <div className="text-[10px] font-mono-code text-slate-400 mb-4 tracking-widest uppercase">THEATER SCREEN</div>
                  <div className="grid grid-cols-4 gap-2.5 max-w-xs mx-auto mb-4">
                    {allSeats.map(seat => {
                      const isSelected = selectedSeats.includes(seat);
                      return (
                        <button
                          key={seat}
                          onClick={() => toggleSeat(seat)}
                          className={`py-2 rounded-lg text-xs font-mono-code transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(56,189,248,0.5)]'
                              : 'bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-400/40'
                          }`}
                        >
                          {seat}
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono-code border-t border-white/10 pt-3 text-slate-300">
                    <span>Seats Selected: {selectedSeats.length ? selectedSeats.join(', ') : 'None'}</span>
                    <span className="text-cyan-300 font-bold">Total: ₹{selectedSeats.length * 180}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Hotel Management Simulator */}
            {project.id === 'hotel-management' && (
              <div className="space-y-3 font-mono-code text-xs">
                <p className="text-xs text-slate-300 font-sans">
                  Live room state management demonstrating SQLite relational table status and booking workflow.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { room: '101 - Deluxe', status: 'Booked', guest: 'Rahul V.' },
                    { room: '102 - Suite', status: 'Available', guest: '—' },
                    { room: '103 - Standard', status: 'Checked In', guest: 'Priya K.' },
                    { room: '201 - Executive', status: 'Available', guest: '—' },
                    { room: '202 - Deluxe', status: 'Booked', guest: 'Amit S.' },
                    { room: '203 - Suite', status: 'Available', guest: '—' }
                  ].map((r, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-black/40 border border-white/10">
                      <div className="text-white font-bold">{r.room}</div>
                      <div className={`text-[10px] mt-1 ${r.status === 'Available' ? 'text-emerald-400' : 'text-amber-400'}`}>
                        ● {r.status}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 truncate">Guest: {r.guest}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pharmacy Management Simulator */}
            {project.id === 'pharmacy-management' && (
              <div className="space-y-3 font-mono-code text-xs">
                <p className="text-xs text-slate-300 font-sans">
                  Inventory & JDBC transaction tracking with automated low-stock warnings.
                </p>
                <div className="space-y-2">
                  {[
                    { med: 'Amoxicillin 500mg', batch: 'BX-902', stock: 45, status: 'In Stock' },
                    { med: 'Paracetamol 650mg', batch: 'PX-114', stock: 8, status: 'Low Stock Alert' },
                    { med: 'Cetirizine 10mg', batch: 'CX-405', stock: 62, status: 'In Stock' }
                  ].map((m, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-white font-bold">{m.med}</div>
                        <div className="text-[10px] text-slate-400">Batch: {m.batch}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-cyan-300 font-bold">{m.stock} units</div>
                        <div className={`text-[10px] ${m.stock < 10 ? 'text-rose-400 font-semibold' : 'text-emerald-400'}`}>
                          {m.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Problem Solved & Key Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                Problem Solved
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                Key Features
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="pt-2">
            <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-2">
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-cyan-300 font-mono-code"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0c1220] border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono-code">
            B. Rama Sridhar Reddy • Engineering Project
          </span>
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-500/30 text-xs font-medium flex items-center gap-2 transition-all cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            ) : (
              <span className="text-xs text-slate-400 font-mono-code bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                Core Academic Project
              </span>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
