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
    <div className="min-h-screen">
      <OnekoCat />
      <div className="flex flex-col items-start px-6 md:px-12 lg:ml-100 pt-4 md:pt-6 space-y-8 md:space-y-12 max-w-3xl mx-auto">
        <div className="w-full flex justify-end items-center">
          <ModeToggle />
        </div>
        <div className="w-full">
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
  )
}
