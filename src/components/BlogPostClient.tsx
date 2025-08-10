'use client'

import { BlogContent } from '@/components/BlogContent'
import Link from 'next/link'
import OnekoCat from '@/components/OnekoCat'
import Navigation from '@/components/Navigation'
import { BlogPost } from '@/types/blog'

interface BlogPostClientProps {
  blog: BlogPost
}

export default function BlogPostClient({ blog }: BlogPostClientProps) {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      <OnekoCat />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Blog Content */}
      <div className="w-full relative">
        <div className="px-16 py-12">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/blogs" 
              className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 inline-flex items-center hover:underline transition-colors"
            >
              <span className="mr-2">←</span>
              <span>Back to blogs</span>
            </Link>
            <BlogContent blog={blog} />
          </div>
        </div>
      </div>
    </div>
  )
}