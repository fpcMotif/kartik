'use client'

import { useEffect, useState } from 'react'
import OnekoCat from "@/components/OnekoCat"
import MinimalNavigation from "@/components/MinimalNavigation"
import NewHeroSection from "@/components/NewHeroSection"
import { PageLoader } from '@/components/PageLoader'
import { PageTransition } from '@/components/ui/PageTransitions'

/**
 * Animation System Usage:
 * 
 * 1. Loader Components:
 *    - <Loader variant="default|minimal|dots|wave" size="sm|md|lg" text="Loading..." />
 *    - <PageLoader isLoading={true} text="Loading..." variant="default" showProgress={true} />
 *    - <FloatingLoader isVisible={true} text="Loading..." position="top|bottom|center" />
 * 
 * 2. Page Transitions:
 *    - <PageTransition>content</PageTransition>
 *    - <FadeInUp delay={0.2}>content</FadeInUp>
 *    - <FadeInScale delay={0.4}>content</FadeInScale>
 *    - <SlideInFromLeft delay={0.6}>content</SlideInFromLeft>
 *    - <StaggerContainer><StaggerItem>item</StaggerItem></StaggerContainer>
 * 
 * 3. Scroll Animations:
 *    - <ScrollProgress /> - Shows scroll progress bar
 *    - <ScrollToTop /> - Floating scroll to top button
 * 
 * 4. Hover Animations:
 *    - All cards and buttons have hover animations built-in
 *    - Theme toggle has smooth icon transitions
 *    - Navigation links have scale animations
 */

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <PageLoader isLoading={isLoading} text="Kartik">
      <PageTransition>
        <div>
          <MinimalNavigation />
          <OnekoCat />
          <div className="pt-16 sm:pt-16">
            <NewHeroSection />
          </div>
        </div>
      </PageTransition>
    </PageLoader>
  );
}
