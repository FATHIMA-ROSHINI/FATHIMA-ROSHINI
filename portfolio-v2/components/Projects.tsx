import { PROJECTS } from '@/lib/config';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-accent-blue font-mono text-sm uppercase tracking-[0.3em] block">Case Studies</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue bg-[length:200%_auto] animate-gradient">Masterpieces</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-lg font-light leading-relaxed border-l border-slate-800 pl-8">
            A selection of projects where engineering meets artistic innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
