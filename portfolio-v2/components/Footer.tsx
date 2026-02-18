export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Fathima Roshini Siyad. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, Tailwind, and GitHub API.</p>
      </div>
    </footer>
  );
}
