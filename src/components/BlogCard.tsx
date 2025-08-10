import { FC } from 'react'
import Link from 'next/link'
import { BlogPost } from '@/types/blog'

interface BlogCardProps {
  blog: BlogPost
}

export const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <article className="border-b border-neutral-500 dark:border-neutral-800 pb-6 sm:pb-8 hover:bg-neutral-100 dark:hover:bg-neutral-900/50 transition-colors p-2 sm:p-4 -mx-2 sm:-mx-4 rounded-lg">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium flex-1 min-w-0">{blog.title}</h2>
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap">{blog.date}</span>
            <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap">{blog.readTime}</span>
          </div>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">{blog.description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {blog.tags.map(tag => (
            <span key={tag} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  )
}
