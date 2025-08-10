'use client'
import { TbFileCv } from "react-icons/tb";
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

interface ProfileHeaderProps {
  name?: string
  age?: string
  title?: string
  profileImage?: string
  socialLinks?: {
    twitter?: string
    resume?: string
    github?: string
    linkedin?: string
  }
}

export default function ProfileHeader({
  name = "Kartik Labhshetwar",
  age = "21",
  title = "engineer • developer • builder",
  profileImage = "/kartik_bw.png",
  socialLinks = {
    twitter: "https://x.com/code_kartik",
    github: "https://github.com/KartikLabhshetwar",
    linkedin: "https://www.linkedin.com/in/kartik-labhshetwar/",
    resume: "https://drive.google.com/file/d/1hIM6tNkN2UzIgRt3S5zk6UJoLCiYuQ1s/view?usp=sharing",
  }
}: ProfileHeaderProps) {
  return (
    <div className="flex-col -mt-10">
      <div 
        className="w-28 h-28 mb-4 sm:ml-8 ml-4 relative z-10 rounded-full overflow-hidden bg-cover bg-center"
        role="img"
        aria-label={name}
        style={{ backgroundImage: `url("${profileImage}")` }}
      />
      <div className="text-left sm:flex sm:justify-between sm:items-center w-full sm:px-8 px-4 flex-col sm:flex-row">
        <div>
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-3xl sm:text-4xl tracking-[0.01em] font-medium mb-0">
            {name}
          </h1>
          <p className="opacity-40 text-[14px]">
            {age} • {title}
          </p>
        </div>
        <div className="flex justify-start space-x-4 mt-3 sm:mt-0">
        {socialLinks.github && (
            <a className="hover:opacity-80" href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={18} />
            </a>
          )}
          {socialLinks.twitter && (
            <a className="hover:opacity-80" href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={18} />
            </a>
          )}
          {socialLinks.resume && (
            <a className="hover:opacity-80" href={socialLinks.resume} target="_blank" rel="noopener noreferrer">
              <TbFileCv size={18} />
            </a>
          )}
         
          {socialLinks.linkedin && (
            <a className="hover:opacity-80" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
