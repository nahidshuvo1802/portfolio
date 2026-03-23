"use client";
import { motion } from "framer-motion";
import { Briefcase, Award, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Junior Flutter Developer",
      company: "Sparktech Agency",
      period: "March 2025 – Feb 2026",
      description: "Developed and maintained cross-platform mobile applications. Started as a Trainee and was promoted to Junior Flutter Developer due to exceptional performance.",
      achievements: [
        "Awarded Top App Developer based on KPI",
        "Successfully delivered scalable and responsive mobile UIs",
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">WORK</span> EXPERIENCE
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-brand-cyan/20 ml-3 md:ml-0 pl-8 md:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[41px] md:-left-[49px] p-2 bg-[#060912] border-2 border-brand-cyan rounded-full z-10 glass-glow-cyan">
                <Briefcase size={20} className="text-brand-cyan" />
              </div>
              
              <div className="glass p-6 md:p-8 rounded-xl border border-white/10 hover:border-brand-cyan/50 transition-colors group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">{exp.title}</h3>
                    <h4 className="text-xl text-gray-400">{exp.company}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-brand-purple font-mono text-sm bg-brand-purple/10 px-3 py-1.5 rounded-full border border-brand-purple/30">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Award className="text-brand-cyan mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-300 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
