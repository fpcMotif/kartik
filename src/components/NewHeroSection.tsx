"use client";

import Link from "next/link";
import BannerSection from "./BannerSection";
import CallToAction from "./CallToAction";
import ContentParagraph from "./ContentParagraph";
import ContentSection from "./ContentSection";
import ContributionsDisplay from "./ContributionsDisplay";
import DiagonalPattern from "./DiagonalPattern";
import ExperienceContent from "./ExperienceContent";
import OpenSourceContributionsCard from "./OpenSourceContributionsCard";
import ProfileHeader from "./ProfileHeader";
import Reachout from "./Reachout";
import { Reveal } from "./Reveal";
import SectionBorder from "./SectionBorder";
import TechStackMarquee from "./TechStackMarquee";

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
                resume:
                  "https://drive.google.com/file/d/1iePpSqo5l0cztVSghCf2PfKH7mFTCTzs/view?usp=sharing",
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
                  title=""
                  className="mt-6"
                >
                  <div></div>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={20} amount={0.8}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* About Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <ContentSection className="pb-8 pt-6">
                  <ContentParagraph className="mt-6 mb-6">
                    <span className="font-medium text-emphasis">
                      I&apos;m not your average developer.
                    </span>{" "}
                    I&apos;d rather be crafting elegant code with a coffee in
                    hand than debugging someone else&apos;s spaghetti code at 3
                    AM. These days, you&apos;ll find me deep in AI model
                    integrations, building intelligent features that actually
                    make sense.
                  </ContentParagraph>
                  <ContentParagraph className="mb-2">
                    <span className="font-medium text-emphasis">
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

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* Experience Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div className="sm:px-12 px-6 py-4">
                  <h2 className="text-lg sm:text-xl mb-4 text-section-heading mt-8">
                    Professional Experience
                  </h2>
                  <ExperienceContent />
                </div>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* Technical Contributions */}
              <Reveal delay={0.1} duration={0.6} amount={0.2}>
                <div className="sm:px-12 px-6 py-4">
                  <h2 className="text-lg sm:text-xl mb-4 text-section-heading mt-8">
                    Technical Contributions
                  </h2>
                  <div className="space-y-6 pb-8">
                    <ContentParagraph>
                      <span className="font-medium text-emphasis">
                        At Turbo ML,
                      </span>{" "}
                      I spent 3 months building some pretty cool stuff. Think
                      Redis Sorted Sets handling time-based tasks under 24-hour
                      constraints, WhatsApp Business API integrations with
                      custom commands, and secure MCP protocols using hash-based
                      user identification. The kind of work that keeps you up at
                      night because it&apos;s actually interesting.
                    </ContentParagraph>
                    <ContentParagraph>
                      <span className="font-medium text-emphasis">
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
                    <ContentParagraph>
                      <span className="font-medium text-emphasis">
                        <Link
                          href="https://github.com/KartikLabhshetwar"
                          target="_blank"
                          className="text-link hover:underline"
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

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* GitHub Contributions */}
              <Reveal delay={0.1} duration={0.6} amount={0.2}>
                <div className="sm:px-12 px-6 mt-4">
                  <h2 className="text-lg sm:text-xl text-section-heading leading-relaxed -tracking-[0.01em] mb-4">
                    GitHub Contributions{" "}
                    <span className="text-section-heading">●</span>{" "}
                    @KartikLabhshetwar
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
                  <h2 className="text-lg sm:text-xl text-section-heading mt-8 ml-5 leading-relaxed -tracking-[0.01em] mb-4">
                    Open Source Contributions{" "}
                    <span className="text-section-heading">●</span>{" "}
                    {new Date().toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </h2>
                  <OpenSourceContributionsCard />
                </div>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-4 pt-0" />
              </Reveal>

              {/* call to action*/}
              <Reveal delay={0.1} duration={0.6} amount={0.4}>
                <CallToAction />
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
  );
}
