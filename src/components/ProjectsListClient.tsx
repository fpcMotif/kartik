'use client'

import OnekoCat from '@/components/OnekoCat'
import Navigation from '@/components/Navigation'
import { MasonryGrid } from '@/components/MasonryGrid'
import { Project } from '@/types/project'

interface ProjectsListClientProps {
  projects: Project[]
}

export default function ProjectsListClient({ projects }: ProjectsListClientProps) {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      <OnekoCat />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Page Header */}
      <div className="w-full relative bg-neutral-50/30 dark:bg-neutral-900/30 border-b border-neutral-200 dark:border-neutral-700">
        <div className="px-16 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-medium mb-4 text-center">projects</h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg text-center">
              A showcase of my work and side projects.
            </p>
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
