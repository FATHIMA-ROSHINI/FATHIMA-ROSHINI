'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal as TerminalIcon, 
  Cpu, 
  Globe, 
  Code2, 
  GitBranch, 
  ArrowUpRight, 
  ChevronRight,
  Database,
  Cloud,
  Zap,
  LinkIcon,
  Mail
} from 'lucide-react';
import NeuralBackground from '@/components/NeuralBackground';
import { Card } from '@/components/Card';
import { projects } from '@/data/projects';

const PERSONAL_INFO = {
  name: 'Fathima Roshini Siyad',
  title: 'AI Engineering Student',
  bio: 'Building intelligent systems that solve real-world problems. Passionate about Machine Learning, Robotics, Healthcare AI, and creating impactful technology.',
  email: 'rxzrosh@gmail.com',
  github: 'https://github.com/FATHIMA-ROSHINI',
  linkedin: 'https://linkedin.com/in/fatima-roshini-siyad-8477292b3'
};

// Command Line Mock Data
const SYSTEM_LOGS = [
  "> INITIALIZING SINGULARITY OS V1.0.4...",
  "> AUTHENTICATING ROOT USER...",
  "> LOADING NEURAL NETWORK ENGINE...",
  "> CONNECTING TO DISTRIBUTED REPOSITORIES...",
  "> SYSTEM ONLINE. READY FOR INQUIRY.",
];

export default function SingularityPortfolio() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < SYSTEM_LOGS.length) {
        setLogs(prev => [...prev, SYSTEM_LOGS[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen text-slate-200 selection:bg-cyan-500/30 font-sans">
      <NeuralBackground />
      
      {/* OS Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-950/40 backdrop-blur-md rounded-full border border-white/5 pointer-events-auto">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-white">Fathima.ai</span>
        </div>
        <div className="flex gap-4 pointer-events-auto">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase font-bold tracking-widest text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1">
            <GitBranch size={12} /> GitHub
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase font-bold tracking-widest text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1">
            <LinkIcon size={12} /> LinkedIn
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[10px] uppercase font-bold tracking-widest text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1">
            <Mail size={12} /> Contact
          </a>
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Hero & Bio */}
          <div className="md:col-span-8">
            <Card className="h-full flex flex-col justify-between p-12">
              <div className="space-y-6">
<motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono font-bold uppercase"
                >
                  <Cpu size={12} />
                  {PERSONAL_INFO.title}
                </motion.div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white">
                  {PERSONAL_INFO.name.split(' ').map((part, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{part}</span>}
                      {i === 0 && part}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h1>
                <p className="max-w-xl text-slate-400 text-lg leading-relaxed font-light">
                  {PERSONAL_INFO.bio}
                </p>
              </div>
              <div className="mt-12 flex gap-4">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl hover:bg-cyan-400 hover:scale-[1.02] transition-all duration-300">
                    CONTACT ME
                  </a>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all">
                    GITHUB
                  </a>
              </div>
            </Card>
          </div>

          {/* Terminal Card */}
          <div className="md:col-span-4">
            <Card className="h-full bg-slate-950/60 font-mono text-sm border-cyan-500/20">
               <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                  <TerminalIcon size={16} className="text-cyan-500" />
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">System Console</span>
               </div>
               <div className="space-y-2">
                  <AnimatePresence>
                    {logs.map((log, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-cyan-500/80"
                      >
                        {log}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <div className="flex items-center gap-2 text-white mt-4">
                    <span className="animate-pulse">_</span>
                    <input 
                      type="text" 
                      className="bg-transparent border-none outline-none w-full text-cyan-400 text-xs" 
                      placeholder="Enter command..."
                    />
                  </div>
               </div>
            </Card>
          </div>

          {/* Project Bento */}
          {projects.map((project, idx) => (
            <div key={project.id} className={idx === 0 ? "md:col-span-6" : "md:col-span-3"}>
              <Card delay={idx * 0.1} className="h-full group/card flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-cyan-400 border border-white/5 group-hover/card:border-cyan-400/30 transition-colors">
                    {idx === 0 ? <Globe size={20} /> : <Code2 size={20} />}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                    <Zap size={10} className="text-yellow-500 fill-yellow-500" />
                    {project.status}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover/card:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2 font-light mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest font-bold bg-white/5 px-2 py-1 rounded-md border border-white/5 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
<div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                       <GitBranch size={12} />
                       <a href={project.repo} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                         View Repo
                       </a>
                    </div>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight size={16} className="text-slate-600 group-hover/card:text-cyan-400 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-all" />
                    </a>
                 </div>
              </Card>
            </div>
          ))}

          {/* Tech Stack Horizontal */}
          <div className="md:col-span-12">
            <Card className="flex flex-wrap items-center justify-between gap-8 py-8 px-12 overflow-hidden">
               <div className="flex items-center gap-4 text-slate-500 group-hover:text-cyan-400 transition-colors">
                 <Database size={24} />
                 <span className="font-mono text-xs font-bold uppercase tracking-[0.3em]">Python & ML</span>
               </div>
               <div className="w-px h-8 bg-white/5 md:block hidden" />
               <div className="flex items-center gap-4 text-slate-500 group-hover:text-cyan-400 transition-colors">
                 <Cloud size={24} />
                 <span className="font-mono text-xs font-bold uppercase tracking-[0.3em]">TensorFlow & PyTorch</span>
               </div>
               <div className="w-px h-8 bg-white/5 md:block hidden" />
               <div className="flex items-center gap-4 text-slate-500 group-hover:text-cyan-400 transition-colors">
                 <Cpu size={24} />
                 <span className="font-mono text-xs font-bold uppercase tracking-[0.3em]">React & FastAPI</span>
               </div>
               <div className="w-px h-8 bg-white/5 md:block hidden" />
               <div className="flex items-center gap-4 text-slate-500 hover:text-cyan-400 transition-colors hover:cursor-pointer">
                 <ChevronRight size={24} />
                 <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="font-mono text-xs font-bold uppercase tracking-[0.3em]">
                   View All Skills
                 </a>
               </div>
            </Card>
          </div>

        </div>
      </div>
      
      {/* OS Status Bar Footer */}
      <footer className="fixed bottom-0 left-0 w-full p-6 flex justify-between items-center text-[9px] font-mono text-slate-600 uppercase tracking-widest z-50 pointer-events-none">
         <div>© 2026 {PERSONAL_INFO.name} • All Rights Reserved</div>
         <div className="flex gap-6 pointer-events-auto">
           <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
             <GitBranch size={10} /> GitHub
           </a>
           <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
             <LinkIcon size={10} /> LinkedIn
           </a>
           <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 text-cyan-500">
             <Mail size={10} /> {PERSONAL_INFO.email}
           </a>
         </div>
      </footer>
    </main>
  );
}
