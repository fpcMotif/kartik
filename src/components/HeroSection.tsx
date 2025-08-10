'use client'

import Link from "next/link"
import { Geist } from "next/font/google"

const geistMono = Geist({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export default function HeroSection() {
  return (
    <section className="w-full relative bg-neutral-50/30 dark:bg-neutral-900/30">
      <div className="w-full relative">
        <div className="px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 relative z-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Double Border Container */}
            <div className="border border-neutral-300 dark:border-neutral-800 w-full relative overflow-hidden p-1.5 sm:p-2">
              {/* Main Content Container with Dashed Border */}
              <div className="border border-dashed border-neutral-300 dark:border-neutral-600 w-full relative overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
                <div className="space-y-6 sm:space-y-8 relative z-10">
                  <div>
                    <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight dark:text-neutral-200 ${geistMono.className}`}>
                      Kartik Labhshetwar
                    </h1>
                    <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
                      <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
                        engineer <span className="mx-1 sm:mx-2">•</span> developer
                      </p>
                    </div>
                  </div>
                  
                  <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 px-2 sm:px-0">
                      <span className="text-cyan-500 dark:text-cyan-400">*</span> i love building{' '}
                      <span className="text-cyan-500 dark:text-cyan-400 font-medium">products</span> that solve real problems. crafting{' '}
                      <span className="text-cyan-500 dark:text-cyan-400 font-medium">websites</span> and{' '}
                      <span className="text-cyan-500 dark:text-cyan-400 font-medium">apps</span> for the past year, with a focus on{' '}
                      <span className="text-cyan-500 dark:text-cyan-400 font-medium">user experience</span> and clean code.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-2 sm:px-0">
                      <span className="px-4 sm:px-6 py-2 sm:py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg text-sm sm:text-base md:text-lg font-medium">
                        full-stack
                      </span>
                      <span className="px-4 sm:px-6 py-2 sm:py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg text-sm sm:text-base md:text-lg font-medium">
                        ai
                      </span>
                      <span className="px-4 sm:px-6 py-2 sm:py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg text-sm sm:text-base md:text-lg font-medium">
                        ui/ux
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 px-4 sm:px-0">
                      <a
                        href="https://drive.google.com/file/d/1hIM6tNkN2UzIgRt3S5zk6UJoLCiYuQ1s/view?usp=sharing"
                        className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-neutral-100 dark:bg-neutral-800/50 text-neutral-800 dark:text-neutral-200 rounded-lg border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700/70 transition-colors font-medium text-sm sm:text-base w-full sm:w-auto"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View CV
                      </a>
                      <Link 
                        href={'https://cal.com/kartik-labhshetwar/15min'} 
                        target="_blank" 
                        className={`text-lg sm:text-xl md:text-2xl hover:underline transition-colors ${geistMono.className}`}
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
    </section>
  )
}
