import { Project } from '@/types/project'
import Link from "next/link";
import Image from "next/image";
import Video from "next-video";
import donezovideo from '/videos/donezo.mp4';
import mindMentorVideo from '/videos/mind-mentor.mp4';
import satyaCheckVideo from '/videos/satya-check.mp4';

interface BentoProjectCardProps {
  project: Project;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
}

// Map video IDs to imported video assets
const getVideoSource = (videoId: string) => {
  switch (videoId) {
    case 'donezo':
      return donezovideo;
    case 'mind-mentor':
      return mindMentorVideo;
    case 'satya-check':
      return satyaCheckVideo;
    default:
      return null;
  }
};

export const BentoProjectCard = ({ project, className = "", size = 'medium' }: BentoProjectCardProps) => {
  const videoSource = project.video ? getVideoSource(project.video) : null;

  // Define size classes for bento grid layout
  const sizeClasses = {
    small: 'col-span-2 row-span-2',      // 2x2
    medium: 'col-span-3 row-span-2',     // 3x2
    large: 'col-span-4 row-span-3',      // 4x3 - featured size
    wide: 'col-span-4 row-span-2',       // 4x2 - wide
    tall: 'col-span-2 row-span-3'        // 2x3 - tall
  };

  // Responsive adjustments
  const responsiveClasses = {
    small: 'col-span-4 md:col-span-2',
    medium: 'col-span-4 md:col-span-3',
    large: 'col-span-4 md:col-span-4',
    wide: 'col-span-4 md:col-span-4',
    tall: 'col-span-4 md:col-span-2'
  };

  return (
    <Link href={`/projects/${project.id}`}>
      <div className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${sizeClasses[size]} ${responsiveClasses[size]} ${className}`}>
        
        {/* Background Media */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {videoSource ? (
            <Video
              src={videoSource}
              poster={project.image}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              playsInline
              autoPlay
              muted
              loop
              controls={false}
            />
          ) : project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={95}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 dark:from-cyan-400/10 dark:via-blue-500/10 dark:to-purple-600/10" />
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="relative h-full p-4 md:p-6 flex flex-col justify-between">
          {/* Top section - Tags or category */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-auto">
              {project.tags.slice(0, size === 'large' ? 3 : 2).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs font-semibold bg-white/20 dark:bg-black/30 text-white backdrop-blur-md rounded-full border border-white/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Bottom section - Title and description */}
          <div className="mt-auto">
            <h3 className={`font-bold text-white mb-2 line-clamp-2 ${
              size === 'large' ? 'text-xl md:text-2xl lg:text-3xl' : 
              size === 'wide' ? 'text-lg md:text-xl' : 
              size === 'tall' ? 'text-lg' : 'text-base md:text-lg'
            }`}>
              {project.title}
            </h3>
            
            {/* Show description only on larger cards */}
            {(size === 'large' || size === 'wide') && (
              <p className="text-sm md:text-base text-white/90 line-clamp-2 leading-relaxed mb-3">
                {project.description}
              </p>
            )}
            
            {/* Year or additional info */}
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-white/70 font-medium bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                2024
              </span>
              {(project.liveLink || project.githubLink) && (
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Subtle border highlight on hover */}
        <div className="absolute inset-0 rounded-3xl ring-2 ring-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </Link>
  );
};
