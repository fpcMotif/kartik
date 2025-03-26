'use client'

import { BlogContent } from '@/components/BlogContent'
import Link from 'next/link'
import OnekoCat from '@/components/OnekoCat'
import { ModeToggle } from '@/components/theme-toggle'
import { BlogPost } from '@/types/blog'

interface BlogPostClientProps {
  blog: BlogPost
}

export default function BlogPostClient({ blog }: BlogPostClientProps) {
  return (
    <div className="min-h-screen w-full py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <OnekoCat />
      <div className="flex justify-end p-4 absolute top-0 right-0">
        <ModeToggle />
      </div>
      <div className="w-full max-w-3xl mx-auto">
        <Link 
          href="/blogs" 
          className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 inline-flex items-center hover:underline transition-colors"
        >
          <span className="mr-2">←</span>
          <span>Back to blogs</span>
        </Link>
        
        <div className="w-full">
          <BlogContent blog={blog} />
        </div>
      </div>
    </div>
  )
} 