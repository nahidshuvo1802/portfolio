"use client";
import { motion } from "framer-motion";

interface FilterTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function FilterTabs({ tabs, activeTab, onTabChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-1 sm:gap-2 px-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
            activeTab === tab
              ? "text-brand-cyan"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="filter-active"
              className="absolute inset-0 rounded-xl glass border border-brand-cyan/20 bg-brand-cyan/5"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}
