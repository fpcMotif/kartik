'use client'

import Link from 'next/link'
import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import ContentSection from './ContentSection'
import ContentParagraph from './ContentParagraph'
import SectionBorder from './SectionBorder'
import ExperienceContent from './ExperienceContent'
import Reachout from './Reachout'
import CallToAction from './CallToAction'
import ContributionsDisplay from './ContributionsDisplay'
import OpenSourceContributionsCard from './OpenSourceContributionsCard'
import TechStackMarquee from './TechStackMarquee'
import { Reveal } from './Reveal'

export default function NewHeroSection() {
  return (
    <div className="min-h-screen transition-colors duration-300 font-['Inter'] relative">
      <div className="relative mx-auto max-w-4xl">
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />
        
        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl">
          {/* Banner Section */}
          <Reveal delay={0.1} duration={0.8} amount={0.2}>
            <BannerSection 
              bannerImage="/mountain.jpg"
              quote="Build • Ship • Learn • Repeat"
            />
          </Reveal>
          
          {/* Profile Header */}
          <Reveal delay={0.2} duration={0.7} amount={0.3}>
            <ProfileHeader 
              name="Kartik Labhshetwar"
              age="21"
              title="engineer • developer • builder"
              profileImage="/pfp.jpg"
              socialLinks={{
                twitter: "https://x.com/code_kartik",
                github: "https://github.com/KartikLabhshetwar",
                linkedin: "https://www.linkedin.com/in/kartikcode/",
                resume: "https://drive.google.com/file/d/1hIM6tNkN2UzIgRt3S5zk6UJoLCiYuQ1s/view?usp=sharing",
              }}
            />
          </Reveal>
          
          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.4}>
                <ContentSection
                  subtitle="AI Engineer | Full-stack Developer"
                  title=''
                  className="mt-6"
                >
                  <div></div>
                </ContentSection>
              </Reveal>
              
              <Reveal delay={0.05} duration={0.4} y={20} amount={0.8}>
                <SectionBorder className="mt-2" />
              </Reveal>
              
              {/* About Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <ContentSection background className="pb-4 pt-1">
                  <ContentParagraph className="mt-4">
                    <span className="font-medium dark:text-white text-black">I&apos;m not your average developer.</span> I&apos;d rather be crafting elegant code with a coffee in hand than debugging someone else&apos;s spaghetti code at 3 AM. These days, you&apos;ll find me deep in AI model integrations, building intelligent features that actually make sense.
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">I build from zero.</span> Whether it&apos;s frontend, backend, full-stack applications, or AI-powered experiences, I work across the entire development lifecycle. From UI/UX to deployment to user feedback, I care less about technology debates and more about delivering results that people love using.
                  </ContentParagraph>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

               {/* Experience Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div className="sm:px-12 px-6">
                  <h2 className="text-md mb-2 opacity-30 mt-6">Professional Experience</h2>
                  <ExperienceContent />
                </div>
              </Reveal>

                <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                  <SectionBorder className="mt-0 pt-0" />
                </Reveal>
              
                 {/* Technical Contributions */}
              <Reveal delay={0.1} duration={0.6} amount={0.2}>
                <div className="sm:px-12 px-6">
                  <h2 className="text-md mb-2 opacity-20 mt-6">Technical Contributions</h2>
                  <div className="space-y-4 dark:text-white/70 text-black/70 pb-6">
                    <ContentParagraph>
                      <span className="font-medium dark:text-white text-black">At Turbo ML,</span> I spent 3 months building some pretty cool stuff. Think Redis Sorted Sets handling time-based tasks under 24-hour constraints, WhatsApp Business API integrations with custom commands, and secure MCP protocols using hash-based user identification. The kind of work that keeps you up at night because it&apos;s actually interesting.
                    </ContentParagraph>
                    <ContentParagraph>
                      <span className="font-medium dark:text-white text-black">Here&apos;s where it gets interesting </span> I reverse engineered Blinkit and Swiggy APIs to understand their data structures and endpoints, then created an AI agent that could intelligently route food delivery and grocery orders. Not your typical API integration tutorial this was about understanding how these platforms really work under the hood and building something smarter on top of it.
                    </ContentParagraph>
                    <ContentParagraph>
                      <span className="font-medium dark:text-white text-black">At Lamarr —</span> Resolved 10+ critical issues in a month maintaining 99.9% uptime. Built Greenhouse integrations, browser video recording, and WhatsApp/email API connections. When systems break at 3 AM, you learn optimization fast.
                    </ContentParagraph>
                    <ContentParagraph>
                      <span className="font-medium dark:text-white text-black">
                        <Link href="https://github.com/KartikLabhshetwar" target='_blank' className="text-[#006FEE] hover:underline">0→1</Link> product development
                      </span>
                      <span> specialist for startups and personal projects. Faster iterations, clearer outcomes.</span>
                    </ContentParagraph>
                  </div>
                </div>
              </Reveal>


              
              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* GitHub Contributions */}
              <Reveal delay={0.1} duration={0.6} amount={0.2}>
                <div className="sm:px-12 px-6 mt-4">
                  <h2 className="text-sm sm:text-md opacity-30 leading-relaxed -tracking-[0.01em] mb-4">
                    GitHub Contributions <span className="opacity-30">●</span> @KartikLabhshetwar
                  </h2>
                  <div className="mb-6">
                    <ContributionsDisplay
                      username="KartikLabhshetwar"
                      variant="compact"
                      className="w-full"
                    />
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Tech Stack Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div className="sm:px-12 px-6 mt-6 mb-6">
                  <TechStackMarquee className="w-full" />
                </div>
              </Reveal>
              
              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Open Source Contributions Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.2}>
                <div className="sm:px-12 px-6 mt-4">
                  <h2 className="text-sm sm:text-md opacity-30 leading-relaxed -tracking-[0.01em] mb-4">
                    Open Source Contributions <span className="opacity-30">●</span> {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </h2>
                  <OpenSourceContributionsCard />
                </div>
              </Reveal>
              
              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-4 pt-0" />
              </Reveal>

              {/* call to action*/}
              <Reveal delay={0.1} duration={0.6} amount={0.4}>
                <CallToAction/>
              </Reveal>
              
              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Reachout Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div className="mt-6">
                  <Reachout 
                    title="Let's connect"
                    subtitle="Find me on these platforms"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
