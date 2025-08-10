'use client'

import Experience from "@/components/Experience"
import DiagonalBorders from "@/components/DiagonalBorders"

export default function ExperienceSection() {
  return (
    <section className="w-full relative bg-neutral-50/50 dark:bg-neutral-900/50">
      <div className="w-full relative">
        <DiagonalBorders />
        
        <div className="px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 relative z-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 sm:mb-10 md:mb-12 text-center tracking-tight">
              Experience
            </h2>
            <div className="flex justify-center">
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
