'use client'

import Link from 'next/link'
import OnekoCat from '@/components/OnekoCat'
import { ModeToggle } from '@/components/theme-toggle'
import { MasonryGrid } from '@/components/MasonryGrid'
import { Project } from '@/types/project'

interface ProjectsListClientProps {
  projects: Project[]
}

export default function ProjectsListClient({ projects }: ProjectsListClientProps) {
  return (
    <div className="min-h-screen w-full bg-[#161616]">
      <OnekoCat />
      
      {/* Navigation Header */}
      <div className="relative z-10 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link 
            href="/" 
            className="text-[#EDEDED] text-sm md:text-base hover:text-white transition-colors"
          >
            ← Back to home
          </Link>
          <ModeToggle />
        </div>
        
        <div className="max-w-7xl mx-auto mt-8 mb-4">
          <h1 className="text-3xl md:text-4xl font-medium mb-4 text-[#EDEDED]">projects</h1>
          <p className="text-[#a8a8a8] text-lg">
            A showcase of my work and side projects.
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="relative">
        <MasonryGrid projects={projects} />
      </div>
    </div>
  )
}
