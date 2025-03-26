'use client'

import { BlogCard } from '@/components/BlogCard'
import Link from 'next/link'
import OnekoCat from '@/components/OnekoCat'
import { ModeToggle } from '@/components/theme-toggle'
import { BlogPost } from '@/types/blog'

interface BlogsListClientProps {
  blogs: BlogPost[]
}

export default function BlogsListClient({ blogs }: BlogsListClientProps) {
  return (
    <div className="min-h-screen py-12 px-6 md:px-12">
      <OnekoCat />
      <div className="flex justify-end p-4 absolute top-0 right-0">
        <ModeToggle />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <Link 
            href="/" 
            className="text-sm md:text-base mb-4 inline-block hover:underline"
          >
            ← Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Blog</h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
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
  )
} 