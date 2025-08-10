'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from '@/components/theme-toggle'

export default function MinimalNavigation() {
  const pathname = usePathname()
  
  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-700/50">
      <div className="px-4 sm:px-8 py-3 sm:py-2.5">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link 
            href="/"
            className="text-lg sm:text-xl font-serif font-medium hover:opacity-80 transition-opacity"
          >
            Kartik
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link 
              href="/projects" 
              className={`text-sm sm:text-base hover:opacity-80 transition-opacity ${
                isActive('/projects') ? 'opacity-100' : 'opacity-60'
              }`}
            >
              projects
            </Link>
            <Link 
              href="/blogs" 
              className={`text-sm sm:text-base hover:opacity-80 transition-opacity ${
                isActive('/blogs') ? 'opacity-100' : 'opacity-60'
              }`}
            >
              blogs
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
