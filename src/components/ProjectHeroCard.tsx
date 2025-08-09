import { Project } from '@/types/project'
import Link from "next/link";
import Image from "next/image";
import Video from "next-video";
import donezovideo from '/videos/donezo.mp4';
import mindMentorVideo from '/videos/mind-mentor.mp4';
import satyaCheckVideo from '/videos/satya-check.mp4';

interface ProjectHeroCardProps {
  project: Project;
  className?: string;
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

export const ProjectHeroCard = ({ project, className = "" }: ProjectHeroCardProps) => {
  const videoSource = project.video ? getVideoSource(project.video) : null;

  return (
    <div className={`overflow-hidden rounded-sm bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-lg w-full ${className}`}>
      {/* Background Media */}
      <div className="relative w-full aspect-video">
        {videoSource ? (
          <Video
            src={videoSource}
            poster={project.image}
            className="w-full h-full object-cover rounded-t-xl"
            playsInline
            autoPlay
            muted
            loop
          />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-t-xl"
            sizes="100vw"
            quality={95}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 rounded-t-xl" />
        )}
      </div>

      {/* Footer Card - Now below the video */}
      <div className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 p-4 md:p-5">
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-white truncate">
              {project.title}
            </h3>
            {project.tags && project.tags.length > 0 && (
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1 line-clamp-1">
                {project.tags.slice(0, 3).join(' • ')}
                {project.tags.length > 3 && ' • ...'}
              </p>
            )}
          </div>
          <Link
            href={`/projects/${project.id}`}
            className="ml-4 px-4 py-2 text-sm font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-300 border-2 border-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:border-neutral-700 dark:text-white rounded-lg transition-colors flex-shrink-0"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};
