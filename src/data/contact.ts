import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { profile } from "./profile";

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: "text-violet-300",
    background: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    color: "text-emerald-300",
    background: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: "https://www.google.com/maps/search/?api=1&query=Township%2C%20Lahore",
    color: "text-fuchsia-300",
    background: "bg-fuchsia-500/10 border-fuchsia-500/20",
  },
];

export const socialLinks = [
  { icon: Github, label: "GitHub", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: Twitter, label: "Twitter", href: profile.twitter },
];

export const footerSocialLinks = [
  ...socialLinks,
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
];

export const faqs = [
  {
    question: "What is your typical response time?",
    answer: "I usually respond within 24 hours on weekdays.",
  },
  {
    question: "Are you open to opportunities?",
    answer: "Yes, I am currently open to internships, freelance projects, and full-time opportunities.",
  },
  {
    question: "What are your areas of expertise?",
    answer: "MERN stack development, React Native, and AI-based systems with NLP.",
  },
];
