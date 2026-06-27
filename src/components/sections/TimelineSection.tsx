import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "../../data/timeline";
import { softSkills } from "../../data/skills";
import { Tag } from "../common/Tag";

export function TimelineSection() {
  return (
    <section className="mb-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionTitle icon={Briefcase} title="Work Experience" />
            <div className="relative space-y-8 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-white/5">
              {experience.map((job) => (
                <article key={`${job.role}-${job.company}`} className="relative pl-10">
                  <TimelineDot />
                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-violet-500/20">
                    <div className="mb-1 flex flex-wrap justify-between gap-2">
                      <h3 className="text-sm text-white">{job.role}</h3>
                      <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs text-violet-300">
                        {job.period}
                      </span>
                    </div>
                    <p className="mb-3 text-xs text-gray-500">{job.company}</p>
                    <p className="mb-4 text-sm leading-relaxed text-gray-400">{job.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle icon={GraduationCap} title="Education" accent="emerald" />
            <div className="mb-14 space-y-5">
              {education.map((item) => (
                <article
                  key={`${item.degree}-${item.school}`}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-emerald-500/20"
                >
                  <div className="mb-1 flex flex-wrap justify-between gap-2">
                    <h3 className="text-sm text-white">{item.degree}</h3>
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-300">
                      {item.period}
                    </span>
                  </div>
                  <p className="mb-2 text-xs text-gray-500">{item.school}</p>
                  <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                </article>
              ))}
            </div>

            <div>
              <h3 className="mb-5 text-sm text-white">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Tag key={skill} className="px-3 py-1.5 text-sm text-gray-300 hover:border-violet-500/30 hover:text-violet-300">
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type SectionTitleProps = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  accent?: "violet" | "emerald";
};

function SectionTitle({ icon: Icon, title, accent = "violet" }: SectionTitleProps) {
  const color = accent === "emerald" ? "text-emerald-300 border-emerald-500/20 bg-emerald-500/10" : "text-violet-300 border-violet-500/20 bg-violet-500/10";

  return (
    <div className="mb-10 flex items-center gap-3">
      <div className={`flex h-9 w-9 items-center justify-center rounded-lg border ${color}`}>
        <Icon size={16} />
      </div>
      <h2 className="text-2xl text-white">{title}</h2>
    </div>
  );
}

function TimelineDot() {
  return (
    <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/30 bg-background">
      <span className="h-2 w-2 rounded-full bg-violet-500" />
    </div>
  );
}
