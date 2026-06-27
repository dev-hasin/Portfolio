import { ArrowRight, Download } from "lucide-react";
import { profile } from "../../data/profile";
import { ButtonLink } from "../common/ButtonLink";
import { ExternalButton } from "../common/ExternalButton";

export function CtaSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/15 to-emerald-600/10 p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5" />
          <div className="relative z-10">
            <h2 className="mb-4 text-3xl text-white md:text-4xl">
              Ready to build something <span className="text-violet-300">amazing</span>?
            </h2>
            <p className="mx-auto mb-8 max-w-md text-gray-400">
              Let's collaborate and bring your vision to life. I'm currently available for
              freelance work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonLink to="/contact" className="px-8">
                Get In Touch <ArrowRight size={16} />
              </ButtonLink>
              <ExternalButton
                href={profile.resumePath}
                download={profile.resumeFilename}
                variant="secondary"
                className="px-8"
              >
                <Download size={16} /> Download CV
              </ExternalButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
