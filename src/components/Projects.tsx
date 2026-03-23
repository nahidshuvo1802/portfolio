"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, MessageSquare, Bot, Sparkles } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "NicheLine Messaging",
      description: "A real-time, secure messaging application with seamless communication streams.",
      icon: <MessageSquare size={24} className="text-brand-cyan" />,
      tags: ["Socket.io", "JWT", "Flutter", "Real-time"],
      glow: "hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]",
      border: "hover:border-brand-cyan/50"
    },
    {
      title: "AMI Talk",
      description: "An interactive AI companion capable of perceiving emotional states and generating responsive avatars.",
      icon: <Bot size={24} className="text-brand-purple" />,
      tags: ["AI Avatar", "Emotional States", "TTS", "STT"],
      glow: "hover:shadow-[0_0_30px_rgba(181,0,255,0.2)]",
      border: "hover:border-brand-purple/50"
    },
    {
      title: "Tarot AI",
      description: "A mystical, futuristic AI-driven tarot reading application with beautiful cosmic UI.",
      icon: <Sparkles size={24} className="text-emerald-400" />,
      tags: ["LLM Integration", "Flutter", "Animations"],
      glow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]",
      border: "hover:border-emerald-400/50"
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-right mb-16 flex flex-col items-end"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">PROJECTS</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass p-8 rounded-2xl border border-white/10 transition-all duration-500 flex flex-col h-full bg-[#060912]/50 ${project.border} ${project.glow}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 glass rounded-xl inline-block">
                  {project.icon}
                </div>
                <div className="flex gap-3 text-gray-400">
                  <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                  <a href="#" className="hover:text-brand-cyan transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
