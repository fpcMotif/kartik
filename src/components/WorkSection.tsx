'use client'

import Link from "next/link"
import { MasonryGrid } from '@/components/MasonryGrid'
import { Project } from '@/types/project'

interface WorkSectionProps {
  projects: Project[]
}

export default function WorkSection({ projects }: WorkSectionProps) {
  return (
    <section className="w-full relative">
      <div className="w-full relative">
        <div className="px-4 sm:px-8 md:px-16 py-8 sm:py-10 md:py-12 relative z-20 bg-white dark:bg-black">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 sm:mb-8 text-center tracking-tight">
              Work
            </h2>
          </div>
        </div>
        
        {/* Masonry Grid - Full Width */}
        <MasonryGrid projects={projects} />
        
        <div className="px-4 sm:px-8 md:px-16 py-8 sm:py-10 md:py-12 relative z-20 bg-white dark:bg-black">
          <div className="text-center">
            <Link 
              href="/projects"
              className="inline-flex items-center text-base sm:text-lg md:text-xl hover:underline transition-colors font-medium"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
