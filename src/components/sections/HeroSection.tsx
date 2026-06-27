import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { ButtonLink } from "../common/ButtonLink";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { profile } from "../../data/profile";

const socials = [
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: profile.twitter, label: "Twitter" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={profile.heroImage}
          alt="Dark developer workspace with laptop and code editor"
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/85 to-background dark:from-[#0a0a0f]/60 dark:via-[#0a0a0f]/80 dark:to-[#0a0a0f]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for hire
          </div>

          <h1 className="mb-6 text-5xl leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="mb-4 max-w-xl text-xl leading-relaxed text-gray-400">
            An ambitious <span className="text-white">Software Engineering Student</span> &amp;{" "}
            <span className="text-white">MERN Stack Developer</span> who builds exceptional
            digital experiences and AI-driven solutions.
          </p>

          <p className="mb-10 max-w-xl leading-relaxed text-gray-500">
            I specialize in scalable applications with MongoDB, Express.js, React, and
            Node.js, with a passion for AI-based systems.
          </p>

          <div className="mb-12 flex flex-wrap gap-4">
            <ButtonLink to="/projects">
              View My Work <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Let's Talk
            </ButtonLink>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Find me on:</span>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="text-gray-500 transition-colors hover:text-violet-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
