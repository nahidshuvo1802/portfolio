"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#home"
          className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-cyan/50 hover:border-brand-purple hover:shadow-[0_0_20px_rgba(181,0,255,0.6)] transition-all flex-shrink-0"
          whileHover={{ scale: 1.1, rotate: [0, -10, 10, -5, 5, 0] }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="object-cover"
            priority
          />
        </motion.a>
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-brand-cyan transition-colors text-sm uppercase tracking-wider font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden md:block py-2 px-5 border border-brand-cyan text-brand-cyan rounded-full hover:bg-brand-cyan/10 transition-colors text-sm font-semibold tracking-wide"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </motion.header>
  );
}
