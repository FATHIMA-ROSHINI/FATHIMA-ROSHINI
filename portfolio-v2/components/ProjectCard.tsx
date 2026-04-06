'use client';

import { Project } from '@/types';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Code2, Cpu, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-slate-900/50 rounded-[2rem] overflow-hidden transition-all duration-500 border border-slate-800/50 hover:border-accent-blue/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] flex flex-col h-full backdrop-blur-sm"
    >
      {/* Image Container */}
      <div 
        className="relative h-64 w-full overflow-hidden"
        style={{ transform: "translateZ(50px)" }}
      >
        {project.image ? (
          <>
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </>
        ) : (
          <div className="project-gradient w-full h-full flex items-center justify-center p-10">
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,transparent_70%)]" />
             <Code2 size={64} className="text-white/20" />
          </div>
        )}
        
        {/* Floating Badges */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          {project.techStack.slice(0, 2).map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold rounded-full border border-white/10 uppercase tracking-widest">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div 
        className="p-8 space-y-6 flex-grow flex flex-col"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="space-y-4 flex-grow">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-black text-white tracking-tight leading-tight group-hover:text-accent-cyan transition-colors">
              {project.title}
            </h3>
            <div className="p-2 bg-slate-800/50 rounded-lg text-slate-400 group-hover:text-accent-blue transition-colors">
              <Globe size={18} />
            </div>
          </div>

          <p className="text-slate-400 leading-relaxed text-sm font-light line-clamp-3 group-hover:text-slate-300 transition-colors">
            {project.description.problem}
          </p>
        </div>

        <div className="space-y-6 mt-auto">
          {/* Tech Stack Icons/Text */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider"
              >
                #{tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-white text-slate-950 font-black rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Github size={18} />
                <span className="text-xs uppercase tracking-widest">Source</span>
              </Link>
            )}
            {project.links.demo && project.links.demo !== '#' && (
              <Link
                href={project.links.demo}
                target="_blank"
                className="inline-flex items-center justify-center w-12 h-12 bg-slate-800/50 hover:bg-accent-cyan/20 text-slate-300 hover:text-accent-cyan border border-slate-700 hover:border-accent-cyan/50 rounded-xl transition-all"
              >
                <ExternalLink size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

