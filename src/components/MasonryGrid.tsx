'use client';

import { Project } from '@/types/project'
import { MasonryProjectCard } from './MasonryProjectCard'
import { ProjectSkeleton } from './ProjectSkeleton'
import { StaggerContainer, StaggerItem } from './ui/PageTransitions'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { motion } from 'framer-motion'

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
    initialItems: 3, // Load first 3 projects initially
    itemsPerLoad: 3, // Load 3 more projects each time (one for each column)
    threshold: 0.1,
    rootMargin: '200px' // Increased margin for better detection
  });

  // Distribute projects across columns
  const getColumnProjects = (columnIndex: number) => {
    return displayedItems.filter((_, index) => index % 3 === columnIndex);
  };

  // Get remaining projects for mobile view
  const getMobileRemainingProjects = () => {
    return displayedItems.filter((_, index) => index % 3 !== 0);
  };

  // Find the last few items to attach observers
  const getLastItemsInColumns = () => {
    const lastItems = displayedItems.slice(-3); // Get last 3 items
    return lastItems;
  };

  return (
    <div className={`min-h-screen w-full bg-neutral-100 dark:bg-[#161616] p-2 sm:p-3.5 ${className}`}>
      <StaggerContainer staggerDelay={0.1}>
        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1 */}
          <div className="flex flex-col gap-1.5">
            {getColumnProjects(0).map((project) => {
              const lastItems = getLastItemsInColumns();
              const isObserverTarget = lastItems.includes(project);
              
              return (
                <StaggerItem key={project.id}>
                  <div
                    ref={isObserverTarget ? lastElementRef : null}
                  >
                    <MasonryProjectCard project={project} />
                  </div>
                </StaggerItem>
              );
            })}
          </div>
          
          {/* Column 2 - Hidden on mobile, shows from sm breakpoint */}
          <div className="hidden sm:flex flex-col gap-1.5">
            {getColumnProjects(1).map((project) => {
              const lastItems = getLastItemsInColumns();
              const isObserverTarget = lastItems.includes(project);
              
              return (
                <StaggerItem key={project.id}>
                  <div
                    ref={isObserverTarget ? lastElementRef : null}
                  >
                    <MasonryProjectCard project={project} />
                  </div>
                </StaggerItem>
              );
            })}
          </div>
          
          {/* Column 3 - Hidden on mobile and tablet, shows from lg breakpoint */}
          <div className="hidden lg:flex flex-col gap-1.5">
            {getColumnProjects(2).map((project) => {
              const lastItems = getLastItemsInColumns();
              const isObserverTarget = lastItems.includes(project);
              
              return (
                <StaggerItem key={project.id}>
                  <div
                    ref={isObserverTarget ? lastElementRef : null}
                  >
                    <MasonryProjectCard project={project} />
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </div>
        
        {/* Mobile: Show remaining projects in single column */}
        <div className="sm:hidden flex flex-col gap-1.5 mt-1.5">
          {getMobileRemainingProjects().map((project) => {
            const lastItems = getLastItemsInColumns();
            const isObserverTarget = lastItems.includes(project);
            
            return (
              <StaggerItem key={project.id}>
                <div
                  ref={isObserverTarget ? lastElementRef : null}
                >
                  <MasonryProjectCard project={project} />
                </div>
              </StaggerItem>
            );
          })}
        </div>

        {/* Loading Skeletons */}
        {isLoading && (
          <motion.div 
            className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3 mt-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <ProjectSkeleton key={`loading-${index}`} />
            ))}
          </motion.div>
        )}

        {/* Load More Trigger - Fallback invisible div */}
        {hasMore && !isLoading && (
          <div 
            ref={lastElementRef}
            className="h-10 w-full"
            style={{ minHeight: '1px' }}
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
      </StaggerContainer>
    </div>
  );
};
