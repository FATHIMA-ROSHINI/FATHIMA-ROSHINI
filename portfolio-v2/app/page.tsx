import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import RecentWork from "@/components/RecentWork";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Projects />
      <About />
      <RecentWork />
      <Contact />
    </main>
  );
}
