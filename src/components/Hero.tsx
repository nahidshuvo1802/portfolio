"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Smartphone, Server, Rocket } from "lucide-react";
import { SplitText } from "./SplitText";

const floatingBadges = [
  { label: "C#", color: "#682A7C", delay: 0 },
  { label: ".NET", color: "#512BD4", delay: 1.5 },
  { label: "Flutter", color: "#027DFD", delay: 0.8 },
  { label: "Dart", color: "#00B4AB", delay: 2.2 },
  { label: "Firebase", color: "#FFCA28", delay: 1.2 },
  { label: "SQL", color: "#CC2927", delay: 2.8 },
];

const stats = [
  { icon: <Smartphone size={18} />, label: "Published Apps", value: "11+" },
  { icon: <Server size={18} />, label: "Backend APIs", value: "3+" },
  { icon: <Rocket size={18} />, label: "Store Listings", value: "11+" },
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Flutter Developer | C# Backend Engineer | App Publishing Specialist";

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
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-brand-cyan/5 blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-brand-purple/5 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Floating Tech Badges - hidden on very small screens */}
      <div className="absolute inset-0 z-0 hidden md:block pointer-events-none">
        {floatingBadges.map((badge, i) => (
          <motion.div
            key={badge.label}
            className="absolute"
            style={{
              top: `${20 + (i * 12) % 60}%`,
              left: `${5 + (i * 17) % 85}%`,
            }}
            animate={{
              y: [0, -15, 5, -10, 0],
              x: [0, 5, -5, 8, 0],
              rotate: [0, 3, -3, 2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + i * 0.5,
              delay: badge.delay,
              ease: "easeInOut",
            }}
          >
            <div
              className="px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider border opacity-20 hover:opacity-60 transition-opacity"
              style={{
                borderColor: badge.color + "40",
                color: badge.color,
                background: badge.color + "10",
              }}
            >
              {badge.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Status Badge */}
          <div className="mb-6 inline-block px-4 py-1.5 rounded-full border border-brand-cyan/30 glass">
            <span className="text-xs sm:text-sm text-brand-cyan font-mono uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              Available for new projects
            </span>
          </div>

          {/* Name */}
          <h1 className="text-fluid-3xl font-black tracking-tight mb-2 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center font-[var(--font-outfit)]">
            <span>MD</span>
            <SplitText
              text="NAHID KHAN"
              className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple"
            />
          </h1>

          {/* Typing Subtitle */}
          <div className="h-8 sm:h-10 md:h-12 mt-4 sm:mt-6 overflow-hidden">
            <p className="text-fluid-sm sm:text-fluid-lg font-light text-gray-300 font-mono leading-relaxed">
              {typedText}
              <span className="inline-block w-2.5 h-5 sm:w-3 sm:h-6 ml-1 bg-brand-cyan animate-blink align-middle"></span>
            </p>
          </div>

          {/* Bio */}
          <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-gray-400 text-fluid-base font-light leading-relaxed px-2">
            Building high-performance Flutter mobile apps backed by robust C# ASP.NET Core APIs — with{" "}
            <span className="text-brand-emerald font-medium">published apps on App Store & Google Play</span>.
            B.Sc in CSE at IST (3rd Year) & 3-Star Coder on CodeChef.
          </p>

          {/* Stats Ribbon */}
          <motion.div
            className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl glass border border-white/5 hover:border-brand-cyan/20 transition-all group"
              >
                <div className="text-brand-cyan group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="text-lg sm:text-xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-mono">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10 font-bold uppercase tracking-widest transition-all glass-glow-cyan rounded-xl text-sm sm:text-base text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold uppercase tracking-widest transition-all rounded-xl hover:opacity-90 text-sm sm:text-base text-center shadow-[0_0_30px_rgba(181,0,255,0.2)]"
            >
              Contact Me
            </a>
            <a
              href="/CV Nahid Khan.pdf"
              download
              target="_blank"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(52,211,153,0.15)] rounded-xl text-sm sm:text-base text-center"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#experience" className="flex flex-col items-center text-gray-500 hover:text-brand-cyan transition-colors">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest mb-2 font-mono">Scroll</span>
          <ArrowDown size={18} />
        </a>
      </motion.div>
    </section>
  );
}
