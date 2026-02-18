import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import RecentWork from "@/components/RecentWork";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Projects />
      <RecentWork />
      <Contact />
    </main>
  );
}
