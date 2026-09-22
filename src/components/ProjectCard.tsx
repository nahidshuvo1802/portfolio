"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// SVG Store Icons as inline components
function AppleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayStoreIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.144 1.24a1 1 0 010 1.732l-2.144 1.24-2.53-2.53 2.53-2.682zM5.864 2.658L16.8 8.991l-2.302 2.302L5.864 2.658z" />
    </svg>
  );
}

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  category: "flutter" | "csharp" | "published";
  status: "Published" | "In Development" | "Open Source";
  platforms: string[];
  github?: string;
  appStore?: string;
  playStore?: string;
  liveUrl?: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
}

export default function ProjectCard({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) {
  const statusClass =
    project.status === "Published"
      ? "status-published"
      : project.status === "In Development"
      ? "status-development"
      : "status-opensource";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl border border-white/8 hover:border-white/15 transition-all duration-500 flex flex-col h-full bg-[#060912]/40 group overflow-hidden"
    >
      {/* Gradient Top Bar */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${project.gradientFrom}, ${project.gradientTo})`,
        }}
      />

      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        {/* Top Row: Status + Platform Icons */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <span className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${statusClass}`}>
            {project.status}
          </span>
          <div className="flex gap-1.5">
            {project.platforms.map((platform) => (
              <span
                key={platform}
                className="platform-icon bg-white/5 border border-white/10 text-gray-400"
                title={platform}
              >
                {platform === "iOS" ? "iOS" : platform === "Android" ? "And" : "Web"}
              </span>
            ))}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] sm:text-xs font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 hover:border-white/15 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-4 mt-auto">
          {/* Store Badges + Links */}
          <div className="flex flex-wrap gap-2 items-center">
            {project.appStore && (
              <a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge store-badge-apple"
              >
                <AppleIcon size={14} />
                <div className="leading-none">
                  <div className="text-[8px] text-gray-400 leading-none">Download on</div>
                  <div className="text-[11px] font-bold leading-tight">App Store</div>
                </div>
              </a>
            )}
            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge store-badge-google"
              >
                <PlayStoreIcon size={14} />
                <div className="leading-none">
                  <div className="text-[8px] text-gray-400 leading-none">Get it on</div>
                  <div className="text-[11px] font-bold leading-tight">Google Play</div>
                </div>
              </a>
            )}

            {/* Spacer */}
            <div className="flex-grow" />

            {/* GitHub + Live Link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all"
                title="View Source"
              >
                <Github size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all"
                title="Live Demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
