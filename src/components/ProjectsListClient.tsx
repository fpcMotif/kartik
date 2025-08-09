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
    <div className="min-h-screen w-full bg-white dark:bg-black">
      <OnekoCat />
      
      {/* Global Side Borders */}
      <div
        style={{
          width: "50px",
          height: "100%",
          borderRight: "1px solid",
          backgroundImage:
            "repeating-linear-gradient(315deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
          backgroundSize: "10px 10px",
        } as React.CSSProperties}
        className='fixed left-0 top-0 z-0 text-neutral-200 dark:text-neutral-800'
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
        className='fixed right-0 top-0 z-0 text-neutral-200 dark:text-neutral-800'
      />

      {/* Navigation Section */}
      <section className="w-full relative z-10">
        <div className="flex justify-end items-center gap-4 px-16 pt-6">
          <ModeToggle />
        </div>
      </section>

      {/* Projects Section - Full Width with Borders */}
      <section className="w-full border-b border-neutral-200 dark:border-neutral-700 relative bg-neutral-50/30 dark:bg-neutral-900/30">
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
          
          <div className="px-16 py-20 relative z-20">
            <div className="max-w-5xl mx-auto">
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
      </section>
    </div>
  )
}
