import { useMemo, useState } from "react";
import { Filter } from "lucide-react";
import { ProjectCard } from "../../components/common/ProjectCard";
import { SectionHeading } from "../../components/common/SectionHeading";
import { projectCategories, projects } from "../../data/projects";
import { cn } from "../../utils/classes";

type ProjectCategory = (typeof projectCategories)[number];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="min-h-screen px-6 pb-24 pt-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="My Projects"
          description="A curated selection of projects that showcase my skills in building real-world applications from concept to deployment."
          align="center"
          className="mb-16"
        />

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <Filter size={16} className="text-gray-500" aria-hidden="true" />
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]",
                activeCategory === category
                  ? "border-violet-600 bg-violet-600 text-white"
                  : "border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white",
              )}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="py-20 text-center text-gray-600">No projects found in this category.</p>
        )}
      </div>
    </div>
  );
}
