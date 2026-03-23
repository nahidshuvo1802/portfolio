import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent overflow-hidden">
      <ParticleBackground />
      <Navbar />
      
      <div className="relative z-10 w-full flex flex-col">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
      <footer className="relative z-10 py-8 text-center border-t border-white/5 bg-[#060912]/80 mt-12">
        <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
          © {new Date().getFullYear()} MD NAHID KHAN. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
