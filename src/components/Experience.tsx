"use client";
import { motion } from "framer-motion";
import { Briefcase, Award, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Junior Flutter Developer",
      company: "Sparktech Agency",
      period: "Sept 2025 – Present",
      description:
        "Developing and maintaining cross-platform mobile applications with Flutter and Dart. Building robust backend services with C# ASP.NET Core. Started as a Trainee and was promoted to Junior Developer due to exceptional performance.",
      achievements: [
        "Awarded Top App Developer based on KPI",
        "Successfully delivered scalable and responsive mobile UIs",
        "Published multiple apps on App Store & Google Play",
      ],
      skills: ["Flutter", "Dart", "C#", "ASP.NET Core", "Firebase", "REST APIs"],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 relative z-10 section-glow">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-fluid-2xl font-black mb-4 font-[var(--font-outfit)]">
            <span className="gradient-text">WORK</span> EXPERIENCE
          </h2>
          <p className="text-gray-400 text-fluid-base max-w-xl">
            My professional journey in mobile development and backend engineering
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mt-4"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-3 sm:ml-0 pl-8 sm:pl-10">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-brand-cyan via-brand-purple to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute -left-[41px] sm:-left-[49px] p-2 bg-[#060912] border-2 border-brand-cyan rounded-full z-10"
                  whileInView={{
                    boxShadow: [
                      "0 0 0px rgba(0,240,255,0)",
                      "0 0 20px rgba(0,240,255,0.4)",
                      "0 0 10px rgba(0,240,255,0.2)",
                    ],
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <Briefcase size={18} className="text-brand-cyan" />
                </motion.div>

                {/* Card */}
                <div className="glass p-5 sm:p-8 rounded-2xl border border-white/8 hover:border-brand-cyan/30 transition-all duration-500 group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg sm:text-xl text-gray-400">{exp.company}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-brand-purple font-mono text-xs sm:text-sm bg-brand-purple/10 px-3 py-1.5 rounded-full border border-brand-purple/30 shrink-0">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Award className="text-brand-cyan mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-300 font-medium text-sm sm:text-base">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-brand-cyan/80 bg-brand-cyan/5 px-3 py-1.5 rounded-lg border border-brand-cyan/10 hover:border-brand-cyan/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
