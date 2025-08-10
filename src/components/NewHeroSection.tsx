'use client'

import Link from 'next/link'
import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import ContentSection from './ContentSection'
import ContentParagraph from './ContentParagraph'
import SectionBorder from './SectionBorder'
import CallToAction from './CallToAction'
import ExperienceContent from './ExperienceContent'

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
            bannerImage="/kartik.jpg"
            quote="Code is poetry written in logic"
          />
          
          {/* Profile Header */}
          <ProfileHeader 
            name="Kartik Labhshetwar"
            age="22"
            title="engineer • developer • builder"
            profileImage="/kartik_bw.png"
            socialLinks={{
              twitter: "https://x.com/code_kartik",
              github: "https://github.com/KartikLabhshetwar",
              linkedin: "https://www.linkedin.com/in/kartik-labhshetwar/"
            }}
          />
          
          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role Section */}
              <ContentSection
                subtitle="Engineer | Full-stack Developer"
                title='Building innovative <a class="text-[#006FEE] hover:underline" href="/projects">solutions</a> with modern tech <span class="opacity-70 font-light">— Creating digital experiences that solve real problems.</span>'
                className="mt-6"
              >
                <div></div>
              </ContentSection>
              
              <SectionBorder className="mt-2" />
              
              {/* About Section */}
              <ContentSection background className="pb-4 pt-1">
                <ContentParagraph className="mt-4">
                  <span className="font-medium dark:text-white text-black">I&apos;m not your average developer.</span> I&apos;d rather be crafting elegant code with a coffee in hand than debugging someone else&apos;s spaghetti code at 3 AM.
                </ContentParagraph>
                <ContentParagraph>
                  <span className="font-medium dark:text-white text-black">I build from zero.</span> Whether it&apos;s frontend, backend, or full-stack applications, I work across the entire development lifecycle. From UI/UX to deployment to user feedback, I care less about technology debates and more about delivering results.
                </ContentParagraph>
              </ContentSection>
              
              <SectionBorder className="mt-0 pt-0" />
              
              {/* Contributions Section */}
              <div className="sm:px-12 px-6 mt-4">
                <h2 className="text-sm sm:text-md opacity-30 leading-relaxed -tracking-[0.01em] mb-2">
                  Recent Projects till <span className="opacity-30">●</span> 10th August 2025
                </h2>
                <div className="space-y-4 dark:text-white/70 text-black/70 pb-6">
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Do I use the latest tech?</span> Absolutely.
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Currently building </span>
                    <Link href="/projects" className="text-[#006FEE] hover:underline">Mind Mentor AI</Link>
                    <span> An AI-powered educational assistant that revolutionizes learning through advanced AI technology. Using Groq AI for lightning-fast responses and Next.js for seamless user experience.</span>
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Shipped products across </span>
                    <Link href="/projects" className="text-[#006FEE] hover:underline">Web</Link>
                    <span>, </span>
                    <Link href="/projects" className="text-[#006FEE] hover:underline">Mobile platforms</Link>
                    <span> & </span>
                    <Link href="/projects" className="text-[#006FEE] hover:underline">AI applications</Link>
                    <span> that people actually use. </span>
                    <Link href="/projects" className="text-[#006FEE] hover:underline">@SatyaCheck</Link>
                    <span> helps combat misinformation with </span>
                    <span className="font-medium">real-time fact-checking</span>
                    <span> because truth matters in the digital age.</span>
                  </ContentParagraph>
                </div>
              </div>
              
              <SectionBorder className="mt-0 pt-0" />
              
              {/* Technical Contributions */}
              <div className="sm:px-12 px-6">
                <h2 className="text-md mb-2 opacity-30 mt-6">Technical Expertise</h2>
                <div className="space-y-4 dark:text-white/70 text-black/70 pb-6">
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Built </span>
                    <Link href="/projects" className="text-[#006FEE] hover:underline">@LearnX</Link>
                    <span> from scratch — A comprehensive course marketplace that connects educators with learners. Engineered every component with scalability in mind.</span>
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Engineered AI-powered </span>
                    <Link href="/projects" className="text-[#006FEE] hover:underline">task management</Link>
                    <span> — delivering seamless productivity experiences through intelligent automation and intuitive interfaces.</span>
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Developed </span>
                    <Link href="/projects" className="text-[#006FEE] hover:underline">@Donezo</Link>
                    <span> — AI-powered weekly review platform that transforms how professionals track their progress. Because reflection drives growth.</span>
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Full-stack expertise</span>
                    <span> across modern web technologies handling </span>
                    <span className="font-medium">production-grade</span>
                    <span> applications. Learned optimization by building, not just reading documentation.</span>
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">
                      <Link href="/projects" className="text-[#006FEE] hover:underline">0→1</Link> product development
                    </span>
                    <span> specialist for startups and personal projects. Faster iterations, clearer outcomes.</span>
                  </ContentParagraph>
                </div>
              </div>
              
              <SectionBorder className="mt-0 pt-0" />
              
              {/* Experience Section */}
              <div className="sm:px-12 px-6">
                <h2 className="text-md mb-2 opacity-30 mt-6">Professional Experience</h2>
                <ExperienceContent />
              </div>
              
              <SectionBorder className="mt-0 pt-0" />
              
              {/* Call to Action */}
              <CallToAction />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
