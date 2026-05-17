import Hero from "@/components/sections/Hero";
import { LottieSection } from "@/components/sections/LottieSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { RealizationStatsSection } from "@/components/sections/RealizationStatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectTypesSection } from "@/components/sections/ProjectTypesSection";
import TeamShowcase from "@/components/sections/Team";
import { ShuffleHero } from "@/components/sections/Galery";


export default function Home() {
  return (
    <>
      <Hero />
      {/* <Animation /> */}
      <LottieSection />
      <ServicesSection />
      <ProjectTypesSection />
      <ShuffleHero />
      <RealizationStatsSection />
      <TeamShowcase />
      <PartnersSection />
    </>
  );
}
