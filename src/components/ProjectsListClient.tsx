'use client'

import { ProjectCard } from '@/components/ProjectCard'
import Link from 'next/link'
import OnekoCat from '@/components/OnekoCat'
import { ModeToggle } from '@/components/theme-toggle'
import { Project } from '@/types/project'

interface ProjectsListClientProps {
  projects: Project[]
}

export default function ProjectsListClient({ projects }: ProjectsListClientProps) {
  return (
    <div className="min-h-screen">
      <OnekoCat />
      <div className="flex flex-col items-start px-6 md:px-12 lg:ml-100 pt-4 md:pt-6 space-y-8 md:space-y-12 max-w-3xl mx-auto">
        <div className="w-full flex justify-end items-center">
          <ModeToggle />
        </div>
        <div className="w-full">
          <div className="mb-10">
            <Link 
              href="/" 
              className="text-sm md:text-base mb-4 inline-block hover:underline"
            >
              ← Back to home
            </Link>
            <h1 className="text-3xl md:text-4xl font-medium mb-4">projects</h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              A showcase of my work and side projects.
            </p>
          </div>
          
          <div className="space-y-2">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
