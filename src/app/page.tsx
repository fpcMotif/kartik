"use client";

import NewHeroSection from "@/components/NewHeroSection";
import OnekoCat from "@/components/OnekoCat";
import ResizablePortfolioNavigation from "@/components/ResizablePortfolioNavigation";

export default function Home() {
  return (
    <div>
      <ResizablePortfolioNavigation />
      <OnekoCat />
      <div className="pt-16 sm:pt-16">
        <NewHeroSection />
      </div>
    </div>
  );
}
