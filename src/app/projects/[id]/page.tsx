import { getProjectById } from '@/data/projects'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ProjectCard } from '@/components/ProjectCard'
import OnekoCat from '@/components/OnekoCat'
import Navigation from '@/components/Navigation'
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
      
      {/* Navigation */}
      <Navigation />

      {/* Project Detail Section - Full Width with Borders */}
      <section className="w-full border-b border-neutral-200 dark:border-neutral-700 relative bg-neutral-50/30 dark:bg-neutral-900/30">
        <div className="w-full relative">
          
          <div className="px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 relative z-20">
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
