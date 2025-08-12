'use client'

import OnekoCat from "@/components/OnekoCat"
import MinimalNavigation from "@/components/MinimalNavigation"
import NewHeroSection from "@/components/NewHeroSection"
import { PageTransition } from '@/components/ui/PageTransitions'

export default function Home() {
  return (
      <PageTransition>
        <div>
          <MinimalNavigation />
          <OnekoCat />
          <div className="pt-16 sm:pt-16">
            <NewHeroSection />
          </div>
        </div>
      </PageTransition>
  );
}
