import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../../data/projects";
import { ProjectCard } from "../common/ProjectCard";
import { SectionHeading } from "../common/SectionHeading";

export function FeaturedProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Portfolio" title="Featured Projects" />
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-violet-300"
          >
            View all projects <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
