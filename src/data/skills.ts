import { Layers, Shield, Star, Zap } from "lucide-react";

export const skillProgress = [
  { name: "React / React Native", level: 90 },
  { name: "Node.js / Express.js", level: 85 },
  { name: "MongoDB / Firebase", level: 80 },
  { name: "JavaScript / C++", level: 88 },
];

export const techStack = [
  { category: "Frontend", items: ["React.js", "React Native", "JavaScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "C++", "REST APIs"] },
  { category: "Database", items: ["MongoDB", "MySQL", "Firebase"] },
  { category: "DevOps & Tools", items: ["Git", "Postman", "Agile/Scrum"] },
];

export const softSkills = [
  "Leadership",
  "Teamwork",
  "Communication",
  "Time Management",
  "Critical Thinking",
  "Problem Solving",
  "Agile / Scrum",
  "Event Management",
];

export const services = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "End-to-end web applications with modern frameworks and robust backends.",
    color: "text-violet-300",
    background: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up apps with focused loading, rendering, and delivery improvements.",
    color: "text-amber-300",
    background: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Shield,
    title: "Secure Architecture",
    description: "Building systems with practical best practices for auth, data, and APIs.",
    color: "text-emerald-300",
    background: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Star,
    title: "UI/UX Design",
    description: "Clean interfaces that feel intuitive, polished, and easy to use.",
    color: "text-fuchsia-300",
    background: "bg-fuchsia-500/10 border-fuchsia-500/20",
  },
];
