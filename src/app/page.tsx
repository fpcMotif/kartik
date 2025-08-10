'use client'

import Footer from "@/components/Footer"
import OnekoCat from "@/components/OnekoCat"
import Reach from "@/components/Reach"
import Experience from "@/components/Experience"
import Navigation from "@/components/Navigation"
import Link from "next/link"
// import Image from "next/image"
import { projects } from '@/data/projects'
import { MasonryGrid } from '@/components/MasonryGrid'
// import localFont from 'next/font/local'
import { Geist } from "next/font/google"

// const clashDisplay = localFont({ 
//   src: '../fonts/ClashDisplay-Semibold.woff2',
// })

const geistMono = Geist({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-geist-mono',
})


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      <OnekoCat />

      {/* Navigation Section */}
      <Navigation />

      {/* Hero Section - Full Width with Borders */}
      <section className="w-full border-b border-neutral-200 dark:border-neutral-700 relative bg-neutral-50/30 dark:bg-neutral-900/30">
        <div className="w-full relative">
          <div className="px-16 py-20 relative z-20">
            <div className="max-w-5xl mx-auto text-center">
              {/* Double Border Container */}
              <div className="border border-neutral-300 dark:border-neutral-800 w-full relative overflow-hidden p-2">
                {/* Main Content Container with Dashed Border */}
                <div className="border border-dashed border-neutral-300 dark:border-neutral-600 w-full relative overflow-hidden p-8 md:p-12 lg:p-16">
                <div className="space-y-8 relative z-10">
                  <div>
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight dark:text-neutral-200 ${geistMono.className}`}>
                      Kartik Labhshetwar
                    </h1>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
                        engineer <span className="mx-2">•</span> developer
                      </p>
                    </div>
                  </div>
                  
                  <div className="max-w-4xl mx-auto space-y-6">
                    <p className="text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300">
                      <span className="text-cyan-500 dark:text-cyan-400">*</span> i love building{' '}
                      <span className="text-cyan-500 dark:text-cyan-400 font-medium">products</span> that solve real problems. crafting{' '}
                      <span className="text-cyan-500 dark:text-cyan-400 font-medium">websites</span> and{' '}
                      <span className="text-cyan-500 dark:text-cyan-400 font-medium">apps</span> for the past year, with a focus on{' '}
                      <span className="text-cyan-500 dark:text-cyan-400 font-medium">user experience</span> and clean code.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                      <span className="px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg text-base md:text-lg font-medium">
                        full-stack
                      </span>
                      <span className="px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg text-base md:text-lg font-medium">
                        ai
                      </span>
                      <span className="px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg text-base md:text-lg font-medium">
                        ui/ux
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
                      <a
                        href="https://drive.google.com/file/d/1hIM6tNkN2UzIgRt3S5zk6UJoLCiYuQ1s/view?usp=sharing"
                        className="inline-flex items-center justify-center px-6 py-3 bg-neutral-100 dark:bg-neutral-800/50 text-neutral-800 dark:text-neutral-200 rounded-lg border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700/70 transition-colors font-medium text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View CV
                      </a>
                      <Link 
                        href={'https://cal.com/kartik-labhshetwar/15min'} 
                        target="_blank" 
                        className={`text-xl md:text-2xl hover:underline transition-colors ${geistMono.className}`}
                      >
                        book a meet
                      </Link>
                    </div>
                  </div>
                  </div>
                  
                  {/* Background Effects */}
                  <div className="absolute h-full w-full bg-gradient-to-t from-neutral-50/75 dark:from-neutral-900/75 via-transparent to-neutral-50/75 dark:to-neutral-900/75 top-0 left-1/2 -translate-x-1/2"></div>
                  <div className="absolute h-full w-full bg-gradient-to-r from-neutral-50/75 dark:from-neutral-900/75 via-transparent to-neutral-50/75 dark:to-neutral-900/75 top-0 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Experience Section - Full Width with Borders */}
      <section className="w-full border-b border-neutral-200 dark:border-neutral-700 relative bg-neutral-50/50 dark:bg-neutral-900/50">
        <div className="w-full relative">
          {/* Diagonal Side Borders */}
          <div
            style={{
              width: "50px",
              height: "100%",
              borderRight: "1px solid",
              backgroundImage:
                "repeating-linear-gradient(315deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
              backgroundSize: "10px 10px",
            } as React.CSSProperties}
            className='absolute left-0 top-0 text-neutral-300 dark:text-neutral-600 z-10'
          />
          <div
            style={{
              width: "50px",
              height: "100%",
              borderLeft: "1px solid",
              backgroundImage:
                "repeating-linear-gradient(315deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
              backgroundSize: "10px 10px",
            } as React.CSSProperties}
            className='absolute right-0 top-0 text-neutral-300 dark:text-neutral-600 z-10'
          />
          
          <div className="px-16 py-20 relative z-20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center tracking-tight">
                Experience
              </h2>
              <div className="flex justify-center">
                <Experience />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section - Full Width with Dark Background */}
      <section className="w-full border-b border-neutral-200 dark:border-neutral-700 relative">
        <div className="w-full relative">
          <div className="px-8 md:px-16 py-12 relative z-20 bg-white dark:bg-black">
            <div className="max-w-[1600px] mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium mb-8 text-center tracking-tight">
                Work
              </h2>
            </div>
          </div>
          
          {/* Masonry Grid - Full Width */}
          <MasonryGrid projects={projects} />
          
          <div className="px-8 md:px-16 py-12 relative z-20 bg-white dark:bg-black">
            <div className="text-center">
              <Link 
                href="/projects"
                className="inline-flex items-center text-lg md:text-xl hover:underline transition-colors font-medium"
              >
                View all projects →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section - Full Width with Borders */}
      <section className="w-full border-b border-neutral-200 dark:border-neutral-700 relative bg-neutral-50/50 dark:bg-neutral-900/50">
        <div className="w-full relative">
          <div className="px-16 py-20 relative z-20">
            <div className="max-w-5xl mx-auto text-center">
              {/* Dashed Border Container */}
              <div className="border border-dashed border-neutral-300 dark:border-neutral-600 w-full relative overflow-hidden p-8 md:p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-medium mb-12 tracking-tight relative z-10">Contact</h2>
                <div className="flex justify-center relative z-10">
                  <Reach />
                </div>
                
                {/* Background Effects */}
                <div className="absolute h-full w-full bg-gradient-to-t from-neutral-50/75 dark:from-neutral-900/75 via-transparent to-neutral-50/75 dark:to-neutral-900/75 top-0 left-1/2 -translate-x-1/2"></div>
                <div className="absolute h-full w-full bg-gradient-to-r from-neutral-50/75 dark:from-neutral-900/75 via-transparent to-neutral-50/75 dark:to-neutral-900/75 top-0 left-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      {/* Footer Section - Full Width with Borders */}
      <section className="w-full relative bg-neutral-50/30 dark:bg-neutral-900/30">
        <div className="w-full relative">
          {/* Inner Side Borders */}
          <div
            style={{
              width: "50px",
              height: "100%",
              borderRight: "1px solid",
              backgroundImage:
                "repeating-linear-gradient(315deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
              backgroundSize: "10px 10px",
            } as React.CSSProperties}
            className='absolute left-0 top-0 text-neutral-300 dark:text-neutral-600 z-10'
          />
          <div
            style={{
              width: "50px",
              height: "100%",
              borderLeft: "1px solid",
              backgroundImage:
                "repeating-linear-gradient(315deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
              backgroundSize: "10px 10px",
            } as React.CSSProperties}
            className='absolute right-0 top-0 text-neutral-300 dark:text-neutral-600 z-10'
          />
          
          <div className="px-16 py-12 relative z-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center">
                <Footer/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
