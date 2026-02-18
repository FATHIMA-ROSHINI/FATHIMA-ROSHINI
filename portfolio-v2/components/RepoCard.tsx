'use client';

import { GitHubRepo } from '@/types';
import { motion } from 'framer-motion';
import { Star, GitFork, Calendar, Code } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

export default function RepoCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full"
    >
      <Link href={repo.html_url} target="_blank" className="flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
            {repo.name}
          </h3>
          <span className="flex items-center text-slate-500 text-xs">
            <Star size={14} className="mr-1 text-yellow-500" />
            {repo.stargazers_count}
          </span>
        </div>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-2 h-10">
          {repo.description || "No description available."}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.topics.slice(0, 3).map((topic) => (
            <span key={topic} className="px-2 py-0.5 bg-slate-800 text-blue-400 text-xs rounded-md border border-slate-700">
              {topic}
            </span>
          ))}
        </div>
      </Link>

      <div className="flex justify-between items-center pt-4 border-t border-slate-800 text-xs text-slate-500 mt-auto">
        <div className="flex items-center">
          <Code size={14} className="mr-1.5" />
          <span className={repo.language ? "text-cyan-400" : "text-slate-500"}>
            {repo.language || "Mixed"}
          </span>
        </div>
        <div className="flex items-center">
          <Calendar size={14} className="mr-1.5" />
          {format(new Date(repo.updated_at), 'MMM dd, yyyy')}
        </div>
      </div>
    </motion.div>
  );
}
