"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
  activeSection: string;
}

export default function MobileMenu({ isOpen, onClose, links, activeSection }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="mobile-menu-drawer glass-heavy"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <motion.button
                onClick={onClose}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-brand-cyan transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <nav className="px-6 py-4">
              <div className="space-y-2">
                {links.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.07, duration: 0.3 }}
                    className={`block py-4 px-5 rounded-xl text-lg font-semibold tracking-wide transition-all ${
                      activeSection === link.href.slice(1)
                        ? "text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="text-brand-cyan/40 font-mono text-sm mr-3">0{index + 1}</span>
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </nav>

            {/* Bottom CTA */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#contact"
                onClick={onClose}
                className="block w-full py-4 text-center bg-gradient-to-r from-brand-cyan to-brand-purple text-white font-bold rounded-xl tracking-wide hover:opacity-90 transition-opacity"
              >
                Let&apos;s Talk
              </a>
              <a
                href="/CV Nahid Khan.pdf"
                download
                target="_blank"
                className="block w-full py-4 mt-3 text-center border border-emerald-400/40 text-emerald-400 font-semibold rounded-xl tracking-wide hover:bg-emerald-400/10 transition-colors"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
