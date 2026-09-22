"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via Intersection Observer
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "glass-heavy py-2" : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            className="relative w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-brand-cyan/50 hover:border-brand-purple hover:shadow-[0_0_20px_rgba(181,0,255,0.6)] transition-all flex-shrink-0"
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, -5, 5, 0] }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/logo.png"
              alt="MD Nahid Khan Logo"
              fill
              className="object-cover"
              priority
            />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-1 xl:gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-brand-cyan"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-brand-cyan/8 border border-brand-cyan/15"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden lg:block py-2 px-5 border border-brand-cyan/60 text-brand-cyan rounded-full hover:bg-brand-cyan/10 transition-all text-sm font-semibold tracking-wide hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            >
              Let&apos;s Talk
            </a>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-300 hover:text-brand-cyan transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={22} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={links}
        activeSection={activeSection}
      />
    </>
  );
}
