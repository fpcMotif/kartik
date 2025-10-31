"use client";

import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";

// Tech Stack Data
const techStack = [
  // Languages
  {
    name: "JavaScript",
    category: "language",
    icon: "/tech-icons/javascript.svg",
    color: "bg-gray-500",
  },
  {
    name: "TypeScript",
    category: "language",
    icon: "/tech-icons/typescript.svg",
    color: "bg-gray-500",
  },
  {
    name: "Java",
    category: "language",
    icon: "/tech-icons/java.svg",
    color: "bg-gray-500",
  },
  {
    name: "Python",
    category: "language",
    icon: "/tech-icons/python.svg",
    color: "bg-gray-500",
  },
  {
    name: "SQL",
    category: "language",
    icon: "/tech-icons/sql.svg",
    color: "bg-gray-500",
  },

  // Frameworks & Libraries
  {
    name: "React.js",
    category: "framework",
    icon: "/tech-icons/react.svg",
    color: "bg-gray-500",
  },
  {
    name: "Next.js",
    category: "framework",
    icon: "/tech-icons/nextjs.svg",
    color: "bg-gray-500",
  },
  {
    name: "Express.js",
    category: "framework",
    icon: "/tech-icons/express.svg",
    color: "bg-gray-500",
  },
  {
    name: "Node.js",
    category: "framework",
    icon: "/tech-icons/nodejs.svg",
    color: "bg-gray-500",
  },
  {
    name: "FastAPI",
    category: "framework",
    icon: "/tech-icons/fastapi.svg",
    color: "bg-gray-500",
  },
  {
    name: "Tailwind CSS",
    category: "framework",
    icon: "/tech-icons/tailwind.svg",
    color: "bg-gray-500",
  },

  // Databases & Tools
  {
    name: "MongoDB",
    category: "database",
    icon: "/tech-icons/mongodb.svg",
    color: "bg-gray-500",
  },
  {
    name: "PostgreSQL",
    category: "database",
    icon: "/tech-icons/postgresql.svg",
    color: "bg-gray-500",
  },
  {
    name: "Redis",
    category: "database",
    icon: "/tech-icons/redis.svg",
    color: "bg-gray-500",
  },

  // Developer Tools
  {
    name: "Git",
    category: "tool",
    icon: "/tech-icons/Git.svg",
    color: "bg-gray-500",
  },
  {
    name: "Docker",
    category: "tool",
    icon: "/tech-icons/docker.svg",
    color: "bg-gray-500",
  },
  {
    name: "Azure",
    category: "tool",
    icon: "/tech-icons/Azure.svg",
    color: "bg-gray-500",
  },
  {
    name: "AWS",
    category: "tool",
    icon: "/tech-icons/AWS.svg",
    color: "bg-gray-500",
  },
  {
    name: "Google Cloud",
    category: "tool",
    icon: "/tech-icons/gcp.svg",
    color: "bg-gray-500",
  },
  {
    name: "Jira",
    category: "tool",
    icon: "/tech-icons/Jira.svg",
    color: "bg-gray-500",
  },
  {
    name: "Nix OS",
    category: "tool",
    icon: "/tech-icons/NixOS.svg",
    color: "bg-gray-500",
  },
];

type TechIconProps = {
  tech: (typeof techStack)[0];
  className?: string;
};

function TechIcon({ tech, className = "" }: TechIconProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-3 transition-all duration-300 hover:scale-105 min-w-[90px] group/icon ${className}`}
    >
      {/* Icon Container */}
      <div className="relative w-10 h-10 mb-2 flex items-center justify-center">
        {/* Try to load actual SVG, fallback to grey placeholder */}
        <div className="w-full h-full relative">
          <Image
            src={tech.icon}
            alt={tech.name}
            width={40}
            height={40}
            className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all duration-300"
            onError={(e) => {
              // If image fails to load, replace with grey placeholder
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full ${tech.color} rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    ${tech.name.charAt(0)}
                  </div>
                `;
              }
            }}
          />
        </div>
      </div>

      {/* Tech Name */}
      <span className="text-xs text-center font-medium text-gray-700 dark:text-gray-300 leading-tight group-hover/icon:text-gray-900 dark:group-hover/icon:text-white transition-colors">
        {tech.name}
      </span>
    </div>
  );
}

type TechStackMarqueeProps = {
  className?: string;
};

export default function TechStackMarquee({
  className = "",
}: TechStackMarqueeProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Title - matching other component styles */}
      <div className="mb-4">
        <h2 className="text-lg sm:text-lg text-section-heading leading-relaxed -tracking-[0.01em] mb-2">
          Stack I use
        </h2>
        <p className="text-md text-body-muted leading-relaxed">
          Technologies I work with to build products that solve real problems
        </p>
      </div>

      {/* Single Marquee Container */}
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:80s] [--gap:1rem]">
          {techStack.map((tech, index) => (
            <TechIcon key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </Marquee>

        {/* Fade edges for better visual effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white dark:from-[hsl(0,3%,6.5%)] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white dark:from-[hsl(0,3%,6.5%)] to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
