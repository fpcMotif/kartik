'use client'

import { useState, useEffect } from 'react'
import { BlogCard } from '@/components/BlogCard'
import OnekoCat from '@/components/OnekoCat'
import MinimalNavigation from '@/components/MinimalNavigation'
import { BlogPost } from '@/types/blog'
import { PageLoader } from '@/components/PageLoader'
import { PageTransition, FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/PageTransitions'

interface BlogsListClientProps {
  blogs: BlogPost[]
}

export default function BlogsListClient({ blogs }: BlogsListClientProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <PageLoader isLoading={isLoading} text="Loading Blogs">
      <PageTransition>
        <div className="min-h-screen w-full bg-white dark:bg-black">
          <MinimalNavigation />
          <OnekoCat />
          
          {/* Page Content */}
          <div className="w-full relative pt-16 sm:pt-16">
            <div className="px-4 sm:px-8 md:px-16 py-8 sm:py-10 md:py-12">
              <div className="max-w-3xl mx-auto">
                <div className="mb-8 sm:mb-10">
                  <FadeInUp delay={0.2}>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-instrument-serif)] font-medium mb-3 sm:mb-4 text-center">blogs</h1>
                  </FadeInUp>
                  <FadeInUp delay={0.4}>
                    <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg text-center px-4 sm:px-0">
                      Technical writings and thoughts on web development, AI, and more.
                    </p>
                  </FadeInUp>
                </div>
                
                {blogs.length > 0 ? (
                  <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 gap-6 sm:gap-8">
                    {blogs.map(blog => (
                      <StaggerItem key={blog.id}>
                        <BlogCard blog={blog} />
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                ) : (
                  <FadeInUp delay={0.6}>
                    <div className="text-center py-8 sm:py-12 px-4 sm:px-0">
                      <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400">
                        Blog posts coming soon...
                      </p>
                    </div>
                  </FadeInUp>
                )}
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </PageLoader>
  )
}