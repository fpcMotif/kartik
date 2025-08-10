'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from '@/components/theme-toggle'

export default function Navigation() {
  const pathname = usePathname()
  
  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }
  
  return (
    <section className="w-full relative z-10 border-b border-neutral-200 dark:border-neutral-700 bg-neutral-50/20 dark:bg-neutral-900/20">
      <div className="px-16 py-8">
        <div className="max-w-5xl mx-auto flex justify-center items-center">
          <div className="flex items-center gap-8">
            <Link 
              href="/"
              className={`text-lg font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors ${
                isActive('/') ? 'text-neutral-900 dark:text-neutral-100' : ''
              }`}
            >
              Kartik
            </Link>
            <Link 
              href="/projects" 
              className={`text-md md:text-lg hover:underline transition-colors ${
                isActive('/projects') ? 'underline text-neutral-900 dark:text-neutral-100' : ''
              }`}
            >
              projects
            </Link>
            <Link 
              href="/blogs" 
              className={`text-md md:text-lg hover:underline transition-colors ${
                isActive('/blogs') ? 'underline text-neutral-900 dark:text-neutral-100' : ''
              }`}
            >
              blogs
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </section>
  )
}
