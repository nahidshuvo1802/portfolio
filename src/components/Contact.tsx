"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Facebook,
  Globe,
  Code,
  Terminal,
  MessageCircle,
<<<<<<< HEAD
  Phone,
=======
>>>>>>> c5faa7628d3ce9046251feacda849e30413a5c7e
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/md-nahid1808/",
      color: "hover:text-blue-500 hover:border-blue-500/40",
      hoverGlow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]",
      label: "LinkedIn",
    },
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/nahid1802/",
      color: "hover:text-blue-600 hover:border-blue-600/40",
      hoverGlow: "hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]",
      label: "Facebook",
    },
    {
      icon: <MessageCircle size={20} />,
      href: "#",
      color: "hover:text-indigo-500 hover:border-indigo-500/40",
      hoverGlow: "hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]",
      label: "Discord: 1064897081615056936",
    },
    {
      icon: <Globe size={20} />,
      href: "https://sites.google.com/view/nahid-khan-shuvo/home",
      color: "hover:text-teal-400 hover:border-teal-400/40",
      hoverGlow: "hover:shadow-[0_0_15px_rgba(45,212,191,0.2)]",
      label: "Google Sites",
    },
    {
      icon: <Code size={20} />,
      href: "https://leetcode.com/u/recurs_007/",
      color: "hover:text-yellow-500 hover:border-yellow-500/40",
      hoverGlow: "hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]",
      label: "LeetCode",
    },
    {
      icon: <Terminal size={20} />,
      href: "https://codeforces.com/profile/Nobody_But_Nahid",
      color: "hover:text-red-500 hover:border-red-500/40",
      hoverGlow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]",
      label: "CodeForces",
    },
    {
      icon: <Code size={20} />,
      href: "https://www.codechef.com/users/nahid_ist",
      color: "hover:text-orange-500 hover:border-orange-500/40",
      hoverGlow: "hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]",
      label: "CodeChef",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/nahidshuvo1802",
      color: "hover:text-white hover:border-white/40",
      hoverGlow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
      label: "GitHub",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const subject = encodeURIComponent(
      `Portfolio Contact: Message from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:nahidkhanshuvo7@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 relative z-10 bg-[#060912]/80 border-t border-white/5 section-glow"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-fluid-2xl font-black mb-4 font-[var(--font-outfit)]">
            INITIATE{" "}
            <span className="gradient-text">CONNECTION</span>
          </h2>
          <p className="text-gray-400 text-fluid-base max-w-xl mx-auto">
            Ready to build something extraordinary? Let&apos;s connect and create impact
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column: Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              Let&apos;s build something extraordinary together.
            </h3>
            <p className="text-gray-400 mb-8 sm:mb-10 leading-relaxed text-fluid-base">
              Check out my problem solving skills on coding platforms or connect
              with me via social handles. Let&apos;s create the next big impactful
              project!
            </p>

            {/* Contact Info */}
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center border border-white/10 group-hover:border-brand-cyan/40 transition-all group-hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] flex-shrink-0">
                  <Mail className="text-brand-cyan" size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">
<<<<<<< HEAD
                    Email
=======
                    Emails
>>>>>>> c5faa7628d3ce9046251feacda849e30413a5c7e
                  </p>
                  <a
                    href="mailto:nahidkhanshuvo7@gmail.com"
                    className="text-sm sm:text-base block text-gray-200 group-hover:text-brand-cyan transition-colors truncate"
                  >
                    nahidkhanshuvo7@gmail.com
                  </a>
<<<<<<< HEAD
=======
                  <a
                    href="mailto:nahid.sparktech@gmail.com"
                    className="text-sm sm:text-base block text-gray-200 group-hover:text-brand-cyan transition-colors truncate"
                  >
                    nahid.sparktech@gmail.com
                  </a>
>>>>>>> c5faa7628d3ce9046251feacda849e30413a5c7e
                </div>
              </div>

              <div className="flex items-center gap-4 group">
<<<<<<< HEAD
                <div className="w-11 h-11 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center border border-white/10 group-hover:border-emerald-400/40 transition-all group-hover:shadow-[0_0_15px_rgba(52,211,153,0.15)] flex-shrink-0">
                  <Phone className="text-emerald-400" size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+8801977848863"
                    className="text-sm sm:text-base block text-gray-200 group-hover:text-emerald-400 transition-colors truncate"
                  >
                    +880 1977-848863
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
=======
>>>>>>> c5faa7628d3ce9046251feacda849e30413a5c7e
                <div className="w-11 h-11 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center border border-white/10 group-hover:border-brand-purple/40 transition-all group-hover:shadow-[0_0_15px_rgba(181,0,255,0.15)] flex-shrink-0">
                  <MapPin className="text-brand-purple" size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">
                    Location
                  </p>
                  <p className="text-sm sm:text-base text-gray-200 group-hover:text-brand-purple transition-colors">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-white/10">
              <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-mono mb-5 sm:mb-6">
                Social & Coding Profiles
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className={`w-11 h-11 sm:w-12 sm:h-12 glass rounded-xl flex items-center justify-center text-gray-400 transition-all border border-white/8 ${link.color} ${link.hoverGlow}`}
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass p-6 sm:p-8 rounded-2xl border border-white/8 space-y-5 sm:space-y-6"
            >
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-mono text-brand-cyan">
                  Name
                </label>
                <div className={`relative rounded-xl transition-all duration-300 ${focusedField === "name" ? "shadow-[0_0_15px_rgba(0,240,255,0.1)]" : ""}`}>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan/60 focus:bg-white/8 transition-all font-sans text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-mono text-brand-cyan">
                  Email (Optional)
                </label>
                <div className={`relative rounded-xl transition-all duration-300 ${focusedField === "email" ? "shadow-[0_0_15px_rgba(0,240,255,0.1)]" : ""}`}>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan/60 focus:bg-white/8 transition-all font-sans text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-mono text-brand-cyan">
                  Message
                </label>
                <div className={`relative rounded-xl transition-all duration-300 ${focusedField === "message" ? "shadow-[0_0_15px_rgba(0,240,255,0.1)]" : ""}`}>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan/60 focus:bg-white/8 transition-all resize-none font-sans text-sm sm:text-base"
                    placeholder="Let's build something..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-brand-cyan to-brand-purple text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all text-sm sm:text-base"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,240,255,0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Transmit Message</span>
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
