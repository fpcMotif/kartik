'use client';

import { Project } from '@/types/project'
import Link from "next/link";
import Image from "next/image";
import Video from "next-video";
import { motion } from 'framer-motion';
import { useHapticFeedback } from '@/hooks/useHapticFeedback';
import donezovideo from '/videos/donezo.mp4';
import mindMentorVideo from '/videos/mind-mentor.mp4';
import satyaCheckVideo from '/videos/satya-check.mp4';

interface MasonryProjectCardProps {
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

export const MasonryProjectCard = ({ project, className = "" }: MasonryProjectCardProps) => {
  const videoSource = project.video ? getVideoSource(project.video) : null;
  const { triggerHaptic, isMobile } = useHapticFeedback();

  const handleCardClick = () => {
    if (isMobile()) {
      triggerHaptic('light');
    }
  };

  return (
    <Link href={`/projects/${project.id}`} className="block">
      <motion.div 
        className={`rounded-lg border border-neutral-300 dark:border-[#2E2E2E] bg-white dark:bg-[#111111] p-1 shadow-sm dark:shadow-none cursor-pointer ${className}`}
        whileHover={{ 
          scale: 1.01,
          transition: { duration: 0.15, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.99 }}
        onClick={handleCardClick}
      >
        <div className="flex flex-col gap-1">
          {/* Media Section */}
          <div className="relative overflow-hidden rounded-lg group">
            <div className="relative w-full overflow-hidden rounded-lg">
              {videoSource ? (
                <div className="relative h-full w-full">
                  <Video
                    src={videoSource}
                    poster={project.image}
                    className="w-full h-full rounded-sm"
                    playsInline
                    autoPlay
                    muted
                    loop
                    controls={false}
                  />
                </div>
              ) : project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={472}
                  height={267}
                  className="w-full h-auto transition-transform duration-300 ease-in-out rounded-lg group-hover:scale-105"
                  style={{ color: 'transparent' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  quality={85}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-lg" />
              )}
            </div>
            
            {/* Title and Year Overlay */}
            <div className="absolute bottom-0 w-full p-2 flex items-center justify-between bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="font-normal text-white text-xs sm:text-sm m-0 line-clamp-1">
                {project.title}
              </h3>
            </div>
          </div>
          
          {/* Action Button */}
          <div className="px-0">
            <div className="w-full rounded-lg bg-neutral-100 dark:bg-[#1C1C1C] border border-neutral-300 dark:border-[#2E2E2E] px-3 sm:px-4 py-2.5 sm:py-3 text-neutral-700 dark:text-[#a8a8a8] text-sm sm:text-base hover:bg-neutral-200 dark:hover:bg-[#2E2E2E] transition-colors duration-200 text-center">
              {project.liveLink ? "View Code →" : project.githubLink ? "View Code →" : "Read Article →"}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
