'use client'

import Image from 'next/image'

interface ProfileHeaderProps {
  name?: string
  age?: string
  title?: string
  profileImage?: string
  socialLinks?: {
    twitter?: string
    cosmos?: string
    github?: string
    linkedin?: string
    threads?: string
  }
}

export default function ProfileHeader({
  name = "Kartik Labhshetwar",
  age = "22",
  title = "engineer • developer • designer",
  profileImage = "/kartik_bw.png",
  socialLinks = {
    twitter: "https://x.com/code_kartik",
    github: "https://github.com/KartikLabhshetwar",
    linkedin: "https://www.linkedin.com/in/kartik-labhshetwar/",
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
          <h1 className="font-serif text-3xl sm:text-4xl tracking-[0.01em] font-medium mb-0">
            {name}
          </h1>
          <p className="opacity-40 text-[14px]">
            {age} • {title}
          </p>
        </div>
        <div className="flex justify-start space-x-4 mt-3 sm:mt-0">
          {socialLinks.twitter && (
            <a className="hover:opacity-80" href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <Image alt="Twitter" width={18} height={18} src="/x.svg" style={{ color: 'transparent' }} />
            </a>
          )}
          {socialLinks.cosmos && (
            <a className="hover:opacity-80" href={socialLinks.cosmos} target="_blank" rel="noopener noreferrer">
              <Image alt="Cosmos" width={18} height={18} src="/cosmos.svg" style={{ color: 'transparent' }} />
            </a>
          )}
          {socialLinks.github && (
            <a className="hover:opacity-80" href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Image alt="Git" width={18} height={18} src="/github.svg" style={{ color: 'transparent' }} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a className="hover:opacity-80" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Image alt="Linkedin" width={18} height={18} src="/linkedin.svg" style={{ color: 'transparent' }} />
            </a>
          )}
          {socialLinks.threads && (
            <a className="hover:opacity-80" href={socialLinks.threads} target="_blank" rel="noopener noreferrer">
              <Image alt="Threads" width={18} height={18} src="/threads.svg" style={{ color: 'transparent' }} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
