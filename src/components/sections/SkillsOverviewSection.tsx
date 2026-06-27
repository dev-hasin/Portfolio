import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { skillProgress } from "../../data/skills";
import { SectionHeading } from "../common/SectionHeading";

export function SkillsOverviewSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="What I Do"
              title={
                <>
                  Turning ideas into <span className="text-violet-300">reality</span> with code
                </>
              }
            />
            <p className="mb-8 mt-6 leading-relaxed text-gray-400">
              As a Software Engineering student with strong expertise in MERN stack development
              and AI-based systems, I bring solid problem-solving abilities and a passion for
              building scalable applications to every project.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm text-violet-300 transition-colors hover:text-violet-200"
            >
              More about me <ArrowRight size={14} />
            </Link>
          </div>

          <div className="space-y-5">
            {skillProgress.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm text-gray-300">{skill.name}</span>
                  <span className="text-sm text-violet-300">{skill.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
