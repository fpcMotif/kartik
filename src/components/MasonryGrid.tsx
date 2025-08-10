import { Project } from '@/types/project'
import { MasonryProjectCard } from './MasonryProjectCard'
import { StaggerContainer, StaggerItem } from './ui/PageTransitions'

interface MasonryGridProps {
  projects: Project[];
  className?: string;
}

export const MasonryGrid = ({ projects, className = "" }: MasonryGridProps) => {
  return (
    <div className={`min-h-screen w-full bg-neutral-100 dark:bg-[#161616] p-2 sm:p-3.5 ${className}`}>
      <StaggerContainer staggerDelay={0.1}>
        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1 */}
          <div className="flex flex-col gap-1.5">
            {projects
              .filter((_, index) => index % 3 === 0)
              .map((project) => (
                <StaggerItem key={project.id}>
                  <MasonryProjectCard project={project} />
                </StaggerItem>
              ))}
          </div>
          
          {/* Column 2 - Hidden on mobile, shows from sm breakpoint */}
          <div className="hidden sm:flex flex-col gap-1.5">
            {projects
              .filter((_, index) => index % 3 === 1)
              .map((project) => (
                <StaggerItem key={project.id}>
                  <MasonryProjectCard project={project} />
                </StaggerItem>
              ))}
          </div>
          
          {/* Column 3 - Hidden on mobile and tablet, shows from lg breakpoint */}
          <div className="hidden lg:flex flex-col gap-1.5">
            {projects
              .filter((_, index) => index % 3 === 2)
              .map((project) => (
                <StaggerItem key={project.id}>
                  <MasonryProjectCard project={project} />
                </StaggerItem>
              ))}
          </div>
        </div>
        
        {/* Mobile: Show remaining projects in single column */}
        <div className="sm:hidden flex flex-col gap-1.5 mt-1.5">
          {projects
            .filter((_, index) => index % 3 !== 0)
            .map((project) => (
              <StaggerItem key={project.id}>
                <MasonryProjectCard project={project} />
              </StaggerItem>
            ))}
        </div>
      </StaggerContainer>
    </div>
  );
};
