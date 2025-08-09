import { Project } from '@/types/project'
import { BentoProjectCard } from './BentoProjectCard'

interface BentoGridProps {
  projects: Project[];
  className?: string;
}

export const BentoGrid = ({ projects, className = "" }: BentoGridProps) => {
  // Define a pattern for bento layout - mix of different sizes
  const getBentoSizeForIndex = (index: number): 'small' | 'medium' | 'large' | 'wide' | 'tall' => {
    // Create an interesting pattern like the reference image
    const patterns = [
      'large',    // 0 - big feature card
      'tall',     // 1 - tall card
      'small',    // 2 - small card
      'small',    // 3 - small card
      'wide',     // 4 - wide card
      'small',    // 5 - small card
      'medium',   // 6 - medium card
      'small',    // 7 - small card
      'tall',     // 8 - tall card
      'medium',   // 9 - medium card
      'small',    // 10 - small card
      'large',    // 11 - another large card
    ];
    return patterns[index % patterns.length] as 'small' | 'medium' | 'large' | 'wide' | 'tall';
  };

  return (
    <div className={`w-full max-w-[1400px] mx-auto ${className}`}>
      {/* Dashed Border Container */}
      <div className="border border-dashed border-neutral-300 dark:border-neutral-600 w-full relative overflow-hidden p-8 md:p-12 lg:p-16">
        {/* Bento Grid Container */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4 auto-rows-[120px] relative z-10">
          {projects.map((project, index) => (
            <BentoProjectCard
              key={project.id}
              project={project}
              size={getBentoSizeForIndex(index)}
            />
          ))}
        </div>
        
        {/* Background Effects */}
        <div className="absolute h-full w-full bg-gradient-to-t from-neutral-50/75 dark:from-neutral-900/75 via-transparent to-neutral-50/75 dark:to-neutral-900/75 top-0 left-1/2 -translate-x-1/2"></div>
        <div className="absolute h-full w-full bg-gradient-to-r from-neutral-50/75 dark:from-neutral-900/75 via-transparent to-neutral-50/75 dark:to-neutral-900/75 top-0 left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
};
