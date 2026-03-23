"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, ShieldCheck } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Flutter",
      icon: <Code2 className="text-brand-cyan" size={32} />,
      skills: ["GetX", "Hive", "Firebase", "Dart", "Clean Architecture", "REST APIs"],
      color: "from-cyan-500/20 to-cyan-500/5",
      borderColor: "border-brand-cyan"
    },
    {
      title: "AI & Integration",
      icon: <Cpu className="text-brand-purple" size={32} />,
      skills: ["LLM Integration", "AI Avatars", "TTS / STT", "Prompt Engineering", "OpenAI API", "Socket.io"],
      color: "from-purple-500/20 to-purple-500/5",
      borderColor: "border-brand-purple"
    },
    {
      title: "Security & Testing",
      icon: <ShieldCheck className="text-emerald-400" size={32} />,
      skills: ["MobSF Testing", "JWT Authentication", "Data Encryption", "Secure Storage", "Pen Testing Basics"],
      color: "from-emerald-500/20 to-emerald-500/5",
      borderColor: "border-emerald-400"
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10 bg-gradient-to-b from-transparent via-[#0a0f1c] to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">ARSENAL</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`glass rounded-2xl p-8 border hover:border-opacity-100 border-opacity-30 ${category.borderColor} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-${category.borderColor.split('-')[1]}/20`}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 border border-white/10`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {skill}
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
