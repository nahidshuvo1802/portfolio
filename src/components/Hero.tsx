"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Junior Flutter Developer | AI Integration Specialist | Security Enthusiast";
  
  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 inline-block px-4 py-1.5 rounded-full border border-brand-cyan/30 glass">
            <span className="text-sm text-brand-cyan font-mono uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              Available for new projects
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
            MD <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">NAHID KHAN</span>
          </h1>
          
          <div className="h-10 md:h-12 mt-6">
            <p className="text-lg md:text-2xl font-light text-gray-300 font-mono">
              {typedText}
              <span className="inline-block w-3 h-6 ml-1 bg-brand-cyan animate-blink align-middle"></span>
            </p>
          </div>
          
          <p className="mt-8 max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Crafting futuristic mobile applications, integrating intelligent AI agents, and ensuring top-tier security for modern systems. B.Sc in CSE at IST (3rd Year) & 3-Star Coder on CodeChef.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a href="#projects" className="px-8 py-4 bg-transparent border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10 font-bold uppercase tracking-widest transition-all glass-glow-cyan rounded-md">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 bg-brand-purple hover:bg-brand-purple/80 text-white font-bold uppercase tracking-widest transition-all glow-purple glass-glow-purple rounded-md">
              Contact Me
            </a>
            <a href="/CV Nahid Khan.pdf" download target="_blank" className="px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(52,211,153,0.2)] rounded-md flex items-center gap-2">
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#experience" className="flex flex-col items-center text-gray-500 hover:text-brand-cyan transition-colors">
          <span className="text-xs uppercase tracking-widest mb-2 font-mono">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
}
