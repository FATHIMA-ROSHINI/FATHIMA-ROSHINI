import { getRecentRepos } from '@/lib/github';
import RepoCard from '@/components/RepoCard';
import { GitHubRepo } from '@/types';
import Link from 'next/link';
import { ArrowRight, Github, Activity } from 'lucide-react';

export default async function RecentWork() {
  const repos = await getRecentRepos();

  if (!repos.length) {
    return null;
  }

  return (
    <section id="repos" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent-blue/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-accent-cyan text-[10px] font-mono uppercase tracking-[0.2em] mb-8">
            <Activity size={12} className="animate-pulse" />
            <span>Real-time GitHub Feed</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
            The Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Laboratory</span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Exploring the boundaries of technology through open-source experiments and architectural research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo: GitHubRepo, index: number) => (
            <RepoCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>

        <div className="flex justify-center mt-24">
          <Link
            href="https://github.com/FATHIMA-ROSHINI"
            target="_blank"
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-slate-950 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
          >
            <Github className="w-5 h-5" />
            <span className="font-black text-xs uppercase tracking-[0.2em]">Explore More Code</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
