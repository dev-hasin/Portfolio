import { AboutHeroSection } from "../../components/sections/AboutHeroSection";
import { TechStackSection } from "../../components/sections/TechStackSection";
import { TimelineSection } from "../../components/sections/TimelineSection";

export function About() {
  return (
    <div className="min-h-screen pb-24 pt-28">
      <AboutHeroSection />
      <TechStackSection />
      <TimelineSection />
    </div>
  );
}
