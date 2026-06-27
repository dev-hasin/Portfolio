import { CtaSection } from "../../components/sections/CtaSection";
import { FeaturedProjectsSection } from "../../components/sections/FeaturedProjectsSection";
import { HeroSection } from "../../components/sections/HeroSection";
import { ServicesSection } from "../../components/sections/ServicesSection";
import { SkillsOverviewSection } from "../../components/sections/SkillsOverviewSection";
import { StatsSection } from "../../components/sections/StatsSection";

export function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SkillsOverviewSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <CtaSection />
    </>
  );
}
