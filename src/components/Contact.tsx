"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 bg-[#060912]/80 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            INITIATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">CONNECTION</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6">Let's build something extraordinary together.</h3>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              Whether you need to integrate intelligent AI avatars, build robust mobile apps with Flutter, or ensure your systems are bulletproof, I'm ready for the next challenge.
            </p>

            <div className="space-y-6">
              <a href="mailto:nahidkhanshuvo7@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-white/10 group-hover:border-brand-cyan transition-colors">
                  <Mail className="text-brand-cyan" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-mono">Email</p>
                  <p className="text-lg text-gray-200 group-hover:text-brand-cyan transition-colors">nahidkhanshuvo7@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-white/10 group-hover:border-brand-purple transition-colors">
                  <MapPin className="text-brand-purple" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-mono">Location</p>
                  <p className="text-lg text-gray-200 group-hover:text-brand-purple transition-colors">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 flex gap-6">
              <a href="https://github.com/nahidshuvo1802" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-cyan transition-all hover:scale-110">
                <Github size={22} />
              </a>
              <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-purple transition-all hover:scale-110">
                <Linkedin size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form className="glass p-8 rounded-2xl border border-white/10 space-y-6">
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest font-mono text-brand-cyan">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:bg-white/10 transition-all font-sans" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest font-mono text-brand-cyan">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:bg-white/10 transition-all font-sans" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest font-mono text-brand-cyan">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:bg-white/10 transition-all resize-none font-sans" placeholder="Let's build something..."></textarea>
              </div>
              
              <button type="button" className="w-full py-4 bg-gradient-to-r from-brand-cyan to-brand-purple text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <span>Transmit Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
