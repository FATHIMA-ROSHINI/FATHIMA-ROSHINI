import { getRecentRepos } from '@/lib/github';
import RepoCard from '@/components/RepoCard';
import { GitHubRepo } from '@/types';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default async function RecentWork() {
  const repos = await getRecentRepos();

  if (!repos.length) {
    return (
      <div className="text-center text-slate-500 py-12">
        <p>No repositories found or GitHub API limit reached.</p>
        <Link href="https://github.com/FATHIMA-ROSHINI" target="_blank" className="text-blue-400 hover:underline mt-2 inline-block">
          Visit GitHub Profile directly
        </Link>
      </div>
    );
  }

  return (
    <section id="repos" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recent <span className="text-cyan-400">Activity</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My latest open-source contributions and experiments directly from GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo: GitHubRepo, index: number) => (
            <RepoCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://github.com/FATHIMA-ROSHINI"
            target="_blank"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group"
          >
            View all repositories
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
