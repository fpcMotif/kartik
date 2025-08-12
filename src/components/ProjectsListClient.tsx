'use client'

import OnekoCat from '@/components/OnekoCat'
import MinimalNavigation from '@/components/MinimalNavigation'
import { MasonryGrid } from '@/components/MasonryGrid'
import { Project } from '@/types/project'
import { motion } from 'framer-motion'

interface ProjectsListClientProps {
  projects: Project[]
}

export default function ProjectsListClient({ projects }: ProjectsListClientProps) {

  return (
      <div className="min-h-screen w-full bg-white dark:bg-black">
        <MinimalNavigation />
        <OnekoCat />
          
          {/* Page Header */}
          <div className="w-full relative bg-neutral-50/30 dark:bg-neutral-900/30 border-b border-neutral-200 dark:border-neutral-700 pt-16 sm:pt-16">
            <div className="px-4 sm:px-8 md:px-16 py-8 sm:py-10 md:py-12">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-instrument-serif)] font-medium mb-3 sm:mb-4 text-center">proof of work</h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                >
                  <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg text-center">
                    A showcase of my work and side projects.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="relative">
            <MasonryGrid projects={projects} />
          </div>
        </div>
  )
}
