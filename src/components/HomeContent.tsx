"use client";

import Link from "next/link";
import BannerSection from "./BannerSection";
import CallToAction from "./CallToAction";
import ContentParagraph from "./ContentParagraph";
import ContentSection from "./ContentSection";
import OpenSourceContributionsCard from "./ContributionCard";
import ContributionsDisplay from "./ContributionsDisplay";
import DiagonalPattern from "./DiagonalPattern";
import ExperienceContent from "./ExperienceContent";
import ProfileHeader from "./ProfileHeader";
import Reachout from "./Reachout";
import { Reveal } from "./Reveal";
import SectionBorder from "./SectionBorder";
import TechStackMarquee from "./TechStackMarquee";

export default function NewHeroSection() {
  return (
    <div
      className="min-h-screen transition-colors duration-300 relative"
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      <div className="relative mx-auto max-w-4xl">
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />

        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
          {/* Banner Section */}
          <Reveal delay={0.1}>
            <BannerSection
              bannerImage="/mountain.jpg"
              quote="Build • Ship • Learn • Repeat"
            />
          </Reveal>

          {/* Profile Header */}
          <Reveal delay={0.2}>
            <ProfileHeader
              name="Kartik Labhshetwar"
              age="21"
              title="engineer • developer • builder"
              profileImage="/pfp.jpg"
              socialLinks={{
                twitter: "https://x.com/code_kartik",
                github: "https://github.com/KartikLabhshetwar",
                linkedin: "https://www.linkedin.com/in/kartikcode/",
                resume:
                  "https://drive.google.com/file/d/1iePpSqo5l0cztVSghCf2PfKH7mFTCTzs/view?usp=sharing",
              }}
            />
          </Reveal>

          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role Section */}
              <Reveal delay={0.1}>
                <ContentSection
                  subtitle="AI Engineer | Full-stack Developer"
                  title=""
                  className="mt-6"
                >
                  <div></div>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* About Section */}
              <Reveal delay={0.1}>
                <ContentSection className="pb-6 sm:pb-8 pt-4 sm:pt-6 px-2 sm:px-0">
                  <ContentParagraph className="mb-2 text-base sm:text-lg">
                    <span className="font-medium dark:text-white text-black">
                      I build from zero.
                    </span>{" "}
                    Whether it&apos;s frontend, backend, full-stack
                    applications, or AI-powered experiences, I work across the
                    entire development lifecycle. From UI/UX to deployment to
                    user feedback, I care less about technology debates and more
                    about delivering results that people love using.
                  </ContentParagraph>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* Experience Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 py-2">
                  <h2 className="text-base sm:text-xl mb-3 opacity-20 mt-4 sm:mt-6 px-4">
                    Professional Experience
                  </h2>
                  <div className="px-4">
                    <ExperienceContent />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-4" />
              </Reveal>

              {/* Technical Contributions */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 py-2">
                  <h2 className="text-base sm:text-xl mb-3 opacity-20 mt-4 sm:mt-6 px-4">
                    Technical Contributions
                  </h2>
                  <div className="px-4 space-y-3 sm:space-y-4 dark:text-white/70 text-black/70 pb-4 sm:pb-6">
                    <ContentParagraph className="text-sm sm:text-base">
                      <span className="font-medium dark:text-white text-black">
                        At Turbo ML,
                      </span>{" "}
                      I spent 3 months building some pretty cool stuff. Think
                      Redis Sorted Sets handling time-based tasks under 24-hour
                      constraints, WhatsApp Business API integrations with
                      custom commands, and secure MCP protocols using hash-based
                      user identification. The kind of work that keeps you up at
                      night because it&apos;s actually interesting.
                    </ContentParagraph>
                    <ContentParagraph className="text-sm sm:text-base">
                      <span className="font-medium dark:text-white text-black">
                        Here&apos;s where it gets interesting{" "}
                      </span>{" "}
                      I reverse engineered Blinkit and Swiggy APIs to understand
                      their data structures and endpoints, then created an AI
                      agent that could intelligently route food delivery and
                      grocery orders. Not your typical API integration tutorial
                      this was about understanding how these platforms really
                      work under the hood and building something smarter on top
                      of it.
                    </ContentParagraph>
                    <ContentParagraph className="text-sm sm:text-base">
                      <span className="font-medium dark:text-white text-black">
                        <Link
                          href="https://github.com/KartikLabhshetwar"
                          target="_blank"
                          className="text-[#006FEE] hover:underline"
                        >
                          0→1
                        </Link>{" "}
                        product development
                      </span>
                      <span>
                        {" "}
                        specialist for startups and personal projects. Faster
                        iterations, clearer outcomes.
                      </span>
                    </ContentParagraph>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* GitHub Contributions */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 px-0 mt-4">
                  <h2 className="text-base sm:text-xl opacity-20 leading-relaxed -tracking-[0.01em] mb-4 px-4">
                    GitHub Contributions <span className="opacity-20">●</span>{" "}
                    @KartikLabhshetwar
                  </h2>
                  <div className="mb-4 sm:mb-6">
                    <ContributionsDisplay
                      username="KartikLabhshetwar"
                      variant="compact"
                      className="w-full"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Tech Stack Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 mt-4 sm:mt-6 mb-4 sm:mb-6">
                  <div className="px-4">
                    <TechStackMarquee className="w-full" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Open Source Contributions Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 mt-4">
                  <h2 className="text-base sm:text-xl opacity-20 mt-4 sm:mt-8 sm:ml-5 leading-relaxed -tracking-[0.01em] mb-4 px-4">
                    Open Source Contributions{" "}
                    <span className="opacity-20">●</span>{" "}
                    {new Date().toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </h2>
                  <div className="px-4">
                    <OpenSourceContributionsCard />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-4 pt-0" />
              </Reveal>

              {/* call to action*/}
              <Reveal delay={0.1}>
                <div className="px-4 sm:px-0">
                  <CallToAction />
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Reachout Section */}
              <Reveal delay={0.1}>
                <div className="mt-4 sm:mt-6">
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
  );
}
