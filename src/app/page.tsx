'use client'

import OnekoCat from "@/components/OnekoCat"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import ExperienceSection from "@/components/ExperienceSection"
import WorkSection from "@/components/WorkSection"
import ContactSection from "@/components/ContactSection"
import FooterSection from "@/components/FooterSection"
import SectionDivider from "@/components/SectionDivider"
import { projects } from '@/data/projects'

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      <OnekoCat />
      <Navigation />
      <HeroSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <WorkSection projects={projects} />
      <SectionDivider />
      <ContactSection />
      <SectionDivider />
      <FooterSection />
    </div>
  );
}
