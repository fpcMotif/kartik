'use client';

import { Project } from '@/types/project'
import { MasonryProjectCard } from './MasonryProjectCard'
import { ProjectSkeleton } from './ProjectSkeleton'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { AnimatedProjectCard } from './AnimatedProjectCard'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface MasonryGridProps {
  projects: Project[];
  className?: string;
}

export const MasonryGrid = ({ projects, className = "" }: MasonryGridProps) => {
  const {
    displayedItems,
    hasMore,
    isLoading,
    lastElementRef
  } = useInfiniteScroll(projects, {
    initialItems: 6, // Increased from 3 to 6 for better initial load
    itemsPerLoad: 6, // Increased from 3 to 6 for smoother loading
    threshold: 0.1,
    rootMargin: '200px' // Increased margin for earlier loading
  });

  // Memoize column distribution to avoid recalculating on every render
  const columnData = useMemo(() => {
    const col1: Project[] = [];
    const col2: Project[] = [];
    const col3: Project[] = [];

    displayedItems.forEach((project, index) => {
      const colIndex = index % 3;
      if (colIndex === 0) col1.push(project);
      else if (colIndex === 1) col2.push(project);
      else col3.push(project);
    });

    // For mobile, combine col2 and col3 into remaining items
    const mobileRemaining = [...col2, ...col3];
    
    return { col1, col2, col3, mobileRemaining };
  }, [displayedItems]);

  const { col1, col2, col3, mobileRemaining } = columnData;

  // Only attach observer to the very last item to reduce overhead
  const shouldAttachObserver = (project: Project, isLastInArray: boolean) => {
    return isLastInArray && displayedItems[displayedItems.length - 1]?.id === project.id;
  };

  return (
    <div className={`min-h-screen w-full bg-neutral-100 dark:bg-[#161616] p-2 sm:p-3.5 ${className}`}>
      <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Column 1 */}
        <div className="flex flex-col gap-1.5">
          {col1.map((project, index) => (
            <AnimatedProjectCard
              key={project.id}
              projectId={project.id}
              index={index}
            >
              <div
                ref={shouldAttachObserver(project, index === col1.length - 1) ? lastElementRef : null}
              >
                <MasonryProjectCard project={project} />
              </div>
            </AnimatedProjectCard>
          ))}
        </div>
        
        {/* Column 2 - Hidden on mobile */}
        <div className="hidden sm:flex flex-col gap-1.5">
          {col2.map((project, index) => (
            <AnimatedProjectCard
              key={project.id}
              projectId={project.id}
              index={col1.length + index}
            >
              <div
                ref={shouldAttachObserver(project, index === col2.length - 1) ? lastElementRef : null}
              >
                <MasonryProjectCard project={project} />
              </div>
            </AnimatedProjectCard>
          ))}
        </div>
        
        {/* Column 3 - Hidden on mobile and tablet */}
        <div className="hidden lg:flex flex-col gap-1.5">
          {col3.map((project, index) => (
            <AnimatedProjectCard
              key={project.id}
              projectId={project.id}
              index={col1.length + col2.length + index}
            >
              <div
                ref={shouldAttachObserver(project, index === col3.length - 1) ? lastElementRef : null}
              >
                <MasonryProjectCard project={project} />
              </div>
            </AnimatedProjectCard>
          ))}
        </div>
      </div>
      
      {/* Mobile: Show remaining projects in single column */}
      <div className="sm:hidden flex flex-col gap-1.5 mt-1.5">
        {mobileRemaining.map((project, index) => (
          <AnimatedProjectCard
            key={project.id}
            projectId={project.id}
            index={col1.length + index}
          >
            <div
              ref={shouldAttachObserver(project, index === mobileRemaining.length - 1) ? lastElementRef : null}
            >
              <MasonryProjectCard project={project} />
            </div>
          </AnimatedProjectCard>
        ))}
      </div>

      {/* Loading Skeletons - Optimized animation */}
      {isLoading && (
        <motion.div 
          className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3 mt-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={`loading-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
            >
              <ProjectSkeleton />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Invisible load trigger as fallback */}
      {hasMore && !isLoading && displayedItems.length > 0 && (
        <div 
          ref={lastElementRef}
          className="h-px w-full opacity-0 pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* End message */}
      {!hasMore && displayedItems.length > 3 && (
        <motion.div 
          className="text-center py-8 text-neutral-500 dark:text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm">You&apos;ve seen all the projects! 🎉</p>
          <p className="text-xs mt-1 opacity-70">
            More coming soon...
          </p>
        </motion.div>
      )}
    </div>
  );
};
