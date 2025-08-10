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
          <BannerSection 
            bannerImage="/mountain.jpg"
            quote="Build • Ship • Learn • Repeat"
          />
          
          {/* Profile Header */}
          <ProfileHeader 
            name="Kartik Labhshetwar"
            age="21"
            title="engineer • developer • builder"
            profileImage="/kartik.jpg"
            socialLinks={{
              twitter: "https://x.com/code_kartik",
              github: "https://github.com/KartikLabhshetwar",
              linkedin: "https://www.linkedin.com/in/kartik-labhshetwar/",
              resume: "https://drive.google.com/file/d/1hIM6tNkN2UzIgRt3S5zk6UJoLCiYuQ1s/view?usp=sharing",
            }}
          />
          
          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role Section */}
              <ContentSection
                subtitle="Engineer | AI Engineer | Full-stack Developer"
                title='Building <a class="text-[#006FEE] hover:underline" href="/projects">products</a> and AI agents that solve real problems <span class="opacity-70 font-light">— Crafting digital experiences with clean code and exceptional UX.</span>'
                className="mt-6"
              >
                <div></div>
              </ContentSection>
              
              <SectionBorder className="mt-2" />
              
              {/* About Section */}
              <ContentSection background className="pb-4 pt-1">
                <ContentParagraph className="mt-4">
                  <span className="font-medium dark:text-white text-black">I&apos;m not your average developer.</span> I&apos;d rather be crafting elegant code with a coffee in hand than debugging someone else&apos;s spaghetti code at 3 AM. These days, you&apos;ll find me deep in AI model integrations, building intelligent features that actually make sense.
                </ContentParagraph>
                <ContentParagraph>
                  <span className="font-medium dark:text-white text-black">I build from zero.</span> Whether it&apos;s frontend, backend, full-stack applications, or AI-powered experiences, I work across the entire development lifecycle. From UI/UX to deployment to user feedback, I care less about technology debates and more about delivering results that people love using.
                </ContentParagraph>
              </ContentSection>

              <SectionBorder className="mt-0 pt-0" />

               {/* Experience Section */}
              <div className="sm:px-12 px-6">
                <h2 className="text-md mb-2 opacity-30 mt-6">Professional Experience</h2>
                <ExperienceContent />
              </div>
              
              
              
              <SectionBorder className="mt-0 pt-0" />
              
              {/* Contributions Section */}
              <div className="sm:px-12 px-6 mt-4">
                <h2 className="text-sm sm:text-md opacity-30 leading-relaxed -tracking-[0.01em] mb-2">
                  Recent Contributions till <span className="opacity-30">●</span> {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                </h2>
                <div className="space-y-4 dark:text-white/70 text-black/70 pb-6">
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Do I use AI to build?</span> Absolutely. My first open source contribution was adding a mem0 MCP integration to the Klavis AI ecosystem contributing to tools that other developers actually use.
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Built </span>
                    <Link href="/projects/mind-mentor" className="text-[#006FEE] hover:underline">Mind Mentor AI</Link>
                    <span> : An AI-powered educational assistant using Groq AI for lightning-fast responses and Next.js for seamless user experience. </span>
                    <Link href="/projects/satya-check" className="text-[#006FEE] hover:underline">@SatyaCheck</Link>
                    <span> helps combat misinformation with real-time fact-checking because truth matters in the digital age.</span>
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Shipped products across </span>
                    <Link href="/projects" className="text-[#006FEE] hover:underline">Web</Link>
                    <span> and </span>
                    <Link href="/projects" className="text-[#006FEE] hover:underline">AI applications</Link>
                    <span> that people actually use. From educational tools to fact-checking systems, I build solutions that solve real problems in the real world.</span>
                  </ContentParagraph>
                </div>
              </div>
              
              <SectionBorder className="mt-0 pt-0" />
              
              {/* Technical Contributions */}
              <div className="sm:px-12 px-6">
                <h2 className="text-md mb-2 opacity-30 mt-6">Technical Expertise</h2>
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

            <SectionBorder className="mt-0 pt-0" />

              {/* call to action*/}
              <CallToAction/>
              
              <SectionBorder className="mt-0 pt-0" />
              
              {/* Reachout Section */}
              <div className="mt-6">
                <Reachout 
                  title="Let's connect"
                  subtitle="Find me on these platforms"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
