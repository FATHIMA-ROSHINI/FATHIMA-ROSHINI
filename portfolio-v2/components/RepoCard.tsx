'use client';

import { GitHubRepo } from '@/types';
import { motion } from 'framer-motion';
import { Star, Calendar, ArrowUpRight, GitBranch, Terminal, Folder } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3776AB',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Vue: '#4FC08D',
  React: '#61DAFB',
  Java: '#007396',
  Go: '#00ADD8',
  Rust: '#DEA584',
  C: '#555555',
  'C++': '#F34B7D',
  'C#': '#178600',
  PHP: '#4F5D95',
  Swift: '#F05138',
  Ruby: '#701516',
  Dart: '#00B4AB',
  Kotlin: '#A97BFF',
};

export default function RepoCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  const languageColor = repo.language ? LANGUAGE_COLORS[repo.language] || '#CBD5E1' : '#CBD5E1';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-cyan/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
      
      <div className="relative h-full flex flex-col bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-white/5 group-hover:border-accent-blue/30 transition-all duration-500 shadow-xl overflow-hidden">
        
        {/* Header Section */}
        <div className="p-8 pb-4 space-y-4">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center text-accent-cyan border border-white/5 group-hover:border-accent-cyan/30 transition-colors">
              <Folder size={24} />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-white/5 text-[10px] font-mono text-slate-400">
              <Star size={12} className="text-yellow-500 fill-yellow-500/20" />
              <span>{repo.stargazers_count}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Link 
              href={repo.html_url} 
              target="_blank" 
              className="group/link inline-flex items-center gap-2"
            >
              <h3 className="text-xl font-black text-white group-hover/link:text-accent-cyan transition-colors truncate">
                {repo.name}
              </h3>
              <ArrowUpRight size={16} className="text-slate-600 group-hover/link:text-accent-cyan transition-colors" />
            </Link>
            <p className="text-slate-400 text-sm font-light leading-relaxed line-clamp-2">
              {repo.description || "Experimental repository exploring advanced architectural patterns and AI integration."}
            </p>
          </div>
        </div>

        {/* Tech Tags */}
        <div className="px-8 py-4 flex flex-wrap gap-2">
           {repo.language && (
             <span className="px-3 py-1 bg-slate-950 border border-white/5 rounded-full text-[10px] font-mono text-slate-300 uppercase tracking-widest">
               {repo.language}
             </span>
           )}
           {repo.topics.slice(0, 2).map(topic => (
             <span key={topic} className="px-3 py-1 bg-accent-blue/5 border border-accent-blue/20 rounded-full text-[10px] font-mono text-accent-blue uppercase tracking-widest">
               {topic}
             </span>
           ))}
        </div>

        {/* Footer */}
        <div className="mt-auto px-8 py-6 border-t border-white/5 bg-slate-950/30 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: languageColor }} />
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                {repo.language || 'Markdown'}
              </span>
           </div>
           <span className="text-[10px] font-mono text-slate-600">
             {format(new Date(repo.updated_at), 'MM/yy')}
           </span>
        </div>
      </div>
    </motion.div>
  );
}
