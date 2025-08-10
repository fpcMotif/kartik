'use client'

import { BlogCard } from '@/components/BlogCard'
import OnekoCat from '@/components/OnekoCat'
import Navigation from '@/components/Navigation'
import { BlogPost } from '@/types/blog'

interface BlogsListClientProps {
  blogs: BlogPost[]
}

export default function BlogsListClient({ blogs }: BlogsListClientProps) {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      <OnekoCat />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Page Content */}
      <div className="w-full relative">
        <div className="px-16 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-medium mb-4 text-center">blogs</h1>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg text-center">
                Technical writings and thoughts on web development, AI, and more.
              </p>
            </div>
            
            {blogs.length > 0 ? (
              <div className="grid grid-cols-1 gap-8">
                {blogs.map(blog => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-neutral-600 dark:text-neutral-400">
                  Blog posts coming soon...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}