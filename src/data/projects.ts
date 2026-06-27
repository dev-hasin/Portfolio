export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: "Full-Stack" | "Mobile" | "Frontend";
  image: string;
  featured: boolean;
  sourceUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "CharmChime - AI Journaling Platform (FYP)",
    description:
      "Developing an AI-driven journaling system with mood detection, story generation, and avatar interaction. Implementing NLP-based sentiment analysis using BERT for emotion detection and personalized responses.",
    tags: ["React", "Firebase", "NLP", "BERT", "Speech-to-Text"],
    category: "Full-Stack",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsaW5nJTIwYXBwJTIwZW1vdGlvbmFsfGVufDF8fHx8MTc3NjE4ODE1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
  },
  {
    id: 2,
    title: "FitBuddy - Fitness & Wellness App",
    description:
      "Built a cross-platform mobile application using React Native with activity tracking and progress visualization. Implemented local storage and analytics dashboards to improve user engagement.",
    tags: ["React Native", "Local Storage", "Analytics"],
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1767449181027-dbca7575f91b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMHByb2plY3R8ZW58MXx8fHwxNzc2MTUzODcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
  },
  {
    id: 3,
    title: "MERN Stack Applications",
    description:
      "Developing and maintaining full-stack applications at 10Pearls using MongoDB, Express.js, React, and Node.js. Building RESTful APIs and integrating frontend with backend systems.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    category: "Full-Stack",
    image:
      "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBjb2RlJTIwbGFwdG9wfGVufDF8fHx8MTc3NjE4ODE1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio website showcasing projects, skills, and experience with smooth animations and a polished dark theme.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3NjE4ODE1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
  },
];

export const projectCategories = ["All", "Full-Stack", "Mobile", "Frontend"] as const;
