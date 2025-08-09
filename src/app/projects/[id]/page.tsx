import { getProjectById } from '@/data/projects'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ProjectCard } from '@/components/ProjectCard'
import OnekoCat from '@/components/OnekoCat'
import { ModeToggle } from '@/components/theme-toggle'
import Link from 'next/link'

type Props = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }
  
  return {
    title: `${project.title} | Kartik Labhshetwar`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
    }
  }
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = getProjectById(id)
  
  if (!project) {
    notFound()
  }
  
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

      {/* Project Detail Section - Full Width with Borders */}
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
              <Link 
                href="/projects" 
                className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 inline-flex items-center hover:underline transition-colors"
              >
                <span className="mr-2">←</span>
                <span>Back to projects</span>
              </Link>
              <ProjectCard project={project} isDetailed />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
