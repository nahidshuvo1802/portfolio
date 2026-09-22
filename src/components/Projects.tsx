"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterTabs from "./FilterTabs";
import ProjectCard, { type ProjectData } from "./ProjectCard";

const projects: ProjectData[] = [
  {
    title: "Speedring App",
    description:
      "A high-performance social platform with real-time feeds, user management, and a robust C# ASP.NET Core backend powering the Flutter mobile experience.",
    tags: ["Flutter", "C#", "ASP.NET Core", "SQL Server", "Real-time"],
    category: "published",
    status: "Published",
    platforms: ["Android"],
    github: "https://github.com/nahidshuvo1802/speedring-app",
    playStore: "https://play.google.com/store/apps/details?id=com.speedring.app",
    accentColor: "#00f0ff",
    gradientFrom: "#00f0ff",
    gradientTo: "#b500ff",
  },
  {
    title: "NicheLine Messaging",
    description:
      "A real-time, secure messaging application with end-to-end encryption, seamless communication streams, and Socket.io powered live chat.",
    tags: ["Socket.io", "JWT", "Flutter", "Real-time", "Encryption"],
    category: "flutter",
    status: "Open Source",
    platforms: ["iOS", "Android"],
    github: "https://github.com/nahidshuvo1802/niche_line_messaging",
    accentColor: "#00f0ff",
    gradientFrom: "#00f0ff",
    gradientTo: "#027DFD",
  },
  {
    title: "Hide & Squeaks (Red Squeaks)",
    description:
      "A published iOS game featuring dynamic interactions, smooth 60fps animations, and engaging gameplay. Successfully published on the Apple App Store.",
    tags: ["iOS App Store", "Flutter", "Animations", "Gaming"],
    category: "published",
    status: "Published",
    platforms: ["iOS"],
    github: "https://github.com/nahidshuvo1802/Red_Squeaks_App-main.git",
    appStore: "https://apps.apple.com/gb/app/hide-squeaks/id6759205204",
    accentColor: "#34d399",
    gradientFrom: "#34d399",
    gradientTo: "#10b981",
  },
  {
    title: "Therapist App (Counta)",
    description:
      "A specialized Flutter application published on Google Play, helping therapists count and manage client sessions dynamically with intuitive UI.",
    tags: ["Google Play", "Flutter", "Session Management"],
    category: "published",
    status: "Published",
    platforms: ["Android"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.rita.counta_app",
    accentColor: "#60a5fa",
    gradientFrom: "#60a5fa",
    gradientTo: "#3b82f6",
  },
  {
    title: "Consult Me App",
    description:
      "A consultation platform connecting users with professionals seamlessly. Published on Google Play with appointment booking and real-time notifications.",
    tags: ["Google Play", "Flutter", "Networking", "Notifications"],
    category: "published",
    status: "Published",
    platforms: ["Android"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.consultme.consultmeapp",
    accentColor: "#fb923c",
    gradientFrom: "#fb923c",
    gradientTo: "#f97316",
  },
  {
    title: "AMI Talk (Cognitive Game)",
    description:
      "An interactive AI companion that perceives emotional states, generates responsive avatars with TTS/STT, and provides an immersive cognitive gameplay experience.",
    tags: ["AI Avatar", "Emotional AI", "TTS", "STT", "Flutter"],
    category: "flutter",
    status: "In Development",
    platforms: ["iOS", "Android"],
    github: "https://github.com/sparktechagency/Rishab_Cognitive_Game_App.git",
    accentColor: "#b500ff",
    gradientFrom: "#b500ff",
    gradientTo: "#8b5cf6",
  },
  {
    title: "E-Commerce Backend API",
    description:
      "A scalable RESTful API built with C# ASP.NET Core, featuring JWT authentication, Entity Framework Core with SQL Server, product management, order processing, and payment integration.",
    tags: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "JWT"],
    category: "csharp",
    status: "Open Source",
    platforms: ["Web"],
    github: "https://github.com/nahidshuvo1802/ecommerce-api",
    accentColor: "#682A7C",
    gradientFrom: "#682A7C",
    gradientTo: "#512BD4",
  },
  {
    title: "Task Management API",
    description:
      "A robust task management REST API with SignalR real-time updates, role-based access control, LINQ-powered queries, and comprehensive Swagger documentation.",
    tags: ["C#", "ASP.NET Core", "SignalR", "RBAC", "Swagger"],
    category: "csharp",
    status: "Open Source",
    platforms: ["Web"],
    github: "https://github.com/nahidshuvo1802/task-management-api",
    accentColor: "#512BD4",
    gradientFrom: "#512BD4",
    gradientTo: "#7c3aed",
  },
];

const filterTabs = ["All", "Flutter Apps", "C# Backend", "Published"];

function filterProjects(tab: string): ProjectData[] {
  switch (tab) {
    case "Flutter Apps":
      return projects.filter(
        (p) => p.category === "flutter" || (p.category === "published" && p.tags.some((t) => t.includes("Flutter")))
      );
    case "C# Backend":
      return projects.filter((p) => p.category === "csharp");
    case "Published":
      return projects.filter((p) => p.status === "Published");
    default:
      return projects;
  }
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const filtered = filterProjects(activeTab);

  return (
    <section id="projects" className="py-16 sm:py-24 relative z-10 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-fluid-2xl font-black mb-4 font-[var(--font-outfit)]">
            FEATURED{" "}
            <span className="gradient-text">PROJECTS & APPS</span>
          </h2>
          <p className="text-gray-400 text-fluid-base max-w-2xl mx-auto mb-8">
            From mobile apps published on the App Store & Google Play to scalable C# backend APIs — explore my work
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full mx-auto mb-8"></div>

          {/* Filter Tabs */}
          <FilterTabs
            tabs={filterTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Count */}
        <motion.p
          layout
          className="text-center text-gray-500 text-sm font-mono mt-8 tracking-wider"
        >
          Showing {filtered.length} of {projects.length} projects
        </motion.p>
      </div>
    </section>
  );
}
