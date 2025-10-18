'use client'


import { BlogCard } from '@/components/BlogCard'
import OnekoCat from '@/components/OnekoCat'
import MinimalNavigation from '@/components/MinimalNavigation'
import { BlogPost } from '@/types/blog'
import { FadeInUp } from '@/components/ui/PageTransitions'

interface BlogsListClientProps {
  blogs: BlogPost[]
}

export default function BlogsListClient({ blogs }: BlogsListClientProps) {

  return (
      <div className="min-h-screen w-full bg-white dark:bg-black">
        <MinimalNavigation />
        <OnekoCat />
          
          {/* Page Content */}
          <div className="w-full relative pt-16 sm:pt-16">
            <div className="px-4 sm:px-8 md:px-16 py-8 sm:py-10 md:py-12">
              <div className="max-w-3xl mx-auto">
                <div className="mb-8 sm:mb-10">
                  <FadeInUp delay={0.2}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-instrument-serif)] font-medium mb-6 sm:mb-8 text-center leading-tight">blogs</h1>
                  </FadeInUp>
                  <FadeInUp delay={0.4}>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg sm:text-xl md:text-2xl text-center max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                      Technical writings and thoughts on web development, AI, and more.
                    </p>
                  </FadeInUp>
                </div>
                
                {blogs.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6 sm:gap-8">
                    {blogs.map((blog, index) => (
                      <FadeInUp key={blog.id} delay={index * 0.05} duration={0.4}>
                        <BlogCard blog={blog} />
                      </FadeInUp>
                    ))}
                  </div>
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
  )
}