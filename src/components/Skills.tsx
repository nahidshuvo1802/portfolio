"use client";
import { motion, useInView } from "framer-motion";
import { Smartphone, Server, Rocket, ShieldCheck } from "lucide-react";
import { useRef } from "react";

interface SkillItem {
  name: string;
  level: number; // 0–100
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  glowClass: string;
  accentColor: string;
}

function SkillBar({ name, level, accentColor, delay }: { name: string; level: number; accentColor: string; delay: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(barRef, { once: true, margin: "-50px" });

  return (
    <div ref={barRef} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs font-mono text-gray-500">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${accentColor}80, ${accentColor})`,
            boxShadow: `0 0 10px ${accentColor}40`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Flutter & Mobile",
      icon: <Smartphone className="text-brand-cyan" size={28} />,
      skills: [
        { name: "Dart", level: 90 },
        { name: "GetX / State Mgmt", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "REST APIs", level: 88 },
        { name: "Clean Architecture", level: 82 },
        { name: "Hive / Local Storage", level: 78 },
        { name: "Animations & UI", level: 85 },
      ],
      gradientFrom: "from-cyan-500/20",
      gradientTo: "to-cyan-500/5",
      borderColor: "border-brand-cyan",
      glowClass: "glass-glow-cyan",
      accentColor: "#00f0ff",
    },
    {
      title: "C# & Backend",
      icon: <Server className="text-brand-purple" size={28} />,
      skills: [
        { name: "C#", level: 85 },
        { name: "ASP.NET Core", level: 80 },
        { name: "Entity Framework", level: 78 },
        { name: "SQL Server", level: 82 },
        { name: "Web APIs", level: 85 },
        { name: "SignalR", level: 70 },
        { name: "LINQ", level: 80 },
      ],
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-purple-500/5",
      borderColor: "border-brand-purple",
      glowClass: "glass-glow-purple",
      accentColor: "#b500ff",
    },
    {
      title: "App Publishing",
      icon: <Rocket className="text-emerald-400" size={28} />,
      skills: [
        { name: "App Store Connect", level: 85 },
        { name: "Google Play Console", level: 88 },
        { name: "TestFlight", level: 80 },
        { name: "CI/CD Pipelines", level: 72 },
        { name: "Release Management", level: 82 },
        { name: "App Store Optimization", level: 75 },
      ],
      gradientFrom: "from-emerald-500/20",
      gradientTo: "to-emerald-500/5",
      borderColor: "border-emerald-400",
      glowClass: "glass-glow-emerald",
      accentColor: "#34d399",
    },
    {
      title: "AI & Security",
      icon: <ShieldCheck className="text-amber-400" size={28} />,
      skills: [
        { name: "LLM Integration", level: 78 },
        { name: "AI Avatars / TTS / STT", level: 75 },
        { name: "JWT Authentication", level: 85 },
        { name: "Data Encryption", level: 80 },
        { name: "MobSF Testing", level: 72 },
        { name: "Prompt Engineering", level: 76 },
      ],
      gradientFrom: "from-amber-500/20",
      gradientTo: "to-amber-500/5",
      borderColor: "border-amber-400",
      glowClass: "glass-glow-amber",
      accentColor: "#f59e0b",
    },
  ];

  const techIcons = [
    { name: "Flutter", color: "#027DFD" },
    { name: "Dart", color: "#00B4AB" },
    { name: "C#", color: "#682A7C" },
    { name: ".NET", color: "#512BD4" },
    { name: "Firebase", color: "#FFCA28" },
    { name: "SQL", color: "#CC2927" },
    { name: "Git", color: "#F05032" },
    { name: "REST", color: "#00f0ff" },
    { name: "JWT", color: "#d63aff" },
    { name: "Hive", color: "#FFD700" },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 relative z-10 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-fluid-2xl font-black mb-4 font-[var(--font-outfit)]">
            TECHNICAL{" "}
            <span className="gradient-text">ARSENAL</span>
          </h2>
          <p className="text-gray-400 text-fluid-base max-w-xl mx-auto">
            Specialized in full-stack mobile development with expertise spanning frontend, backend, and deployment
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`glass rounded-2xl p-5 sm:p-6 border border-opacity-30 ${category.borderColor} transition-all duration-300 hover:border-opacity-60 card-tilt group`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo} flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <SkillBar
                    key={i}
                    name={skill.name}
                    level={skill.level}
                    accentColor={category.accentColor}
                    delay={i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16"
        >
          <p className="text-center text-xs text-gray-500 uppercase tracking-[0.2em] font-mono mb-6">
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {techIcons.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="px-4 py-2 rounded-xl glass border border-white/5 hover:border-white/15 transition-all cursor-default group"
                whileHover={{ scale: 1.08, y: -3 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <span
                  className="text-sm font-semibold transition-colors"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
