'use client';

import { Project } from '@/types';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="p-8 relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-cyan-400 font-medium text-sm tracking-wider uppercase mb-4">
              {project.tagline}
            </p>
          </div>
          <div className="flex gap-3">
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 text-slate-400 hover:text-white transition-all"
                title="View Source"
              >
                <Github size={20} />
              </Link>
            )}
            {project.links.demo && project.links.demo !== '#' && (
              <Link
                href={project.links.demo}
                target="_blank"
                className="p-2 bg-slate-800 rounded-full hover:bg-cyan-500 text-slate-400 hover:text-white transition-all"
                title="Live Demo"
              >
                <ExternalLink size={20} />
              </Link>
            )}
          </div>
        </div>

        <div className="space-y-4 mb-8 text-slate-300 leading-relaxed">
          <div className="bg-slate-800/50 p-4 rounded-lg border-l-2 border-blue-500">
            <span className="text-blue-400 font-semibold block mb-1">Problem:</span>
            {project.description.problem}
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg border-l-2 border-cyan-500">
            <span className="text-cyan-400 font-semibold block mb-1">Solution:</span>
            {project.description.solution}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-800 text-slate-400 rounded-full text-xs font-medium border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
