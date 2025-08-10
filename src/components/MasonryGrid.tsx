import { Project } from '@/types/project'
import { MasonryProjectCard } from './MasonryProjectCard'

interface MasonryGridProps {
  projects: Project[];
  className?: string;
}

export const MasonryGrid = ({ projects, className = "" }: MasonryGridProps) => {
  return (
    <div className={`min-h-screen w-full bg-[#161616] p-3.5 ${className}`}>
      <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-3">
        {/* Column 1 */}
        <div className="flex flex-col gap-1.5">
          {projects
            .filter((_, index) => index % 3 === 0)
            .map((project) => (
              <MasonryProjectCard key={project.id} project={project} />
            ))}
        </div>
        
        {/* Column 2 */}
        <div className="flex flex-col gap-1.5">
          {projects
            .filter((_, index) => index % 3 === 1)
            .map((project) => (
              <MasonryProjectCard key={project.id} project={project} />
            ))}
        </div>
        
        {/* Column 3 */}
        <div className="flex flex-col gap-1.5">
          {projects
            .filter((_, index) => index % 3 === 2)
            .map((project) => (
              <MasonryProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
};
