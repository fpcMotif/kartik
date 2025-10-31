"use client";

import Image from "next/image";
import Link from "next/link";

type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
  description: string;
  href?: string;
  logoUrl?: string;
};

export default function ExperienceContent() {
  const experiences: ExperienceItem[] = [
    {
      company: "Turbo ML",
      position: "Software Engineering Intern (AI)",
      duration: "April 2025 – July 2025",
      description:
        "Developed and deployed cutting-edge solutions, including multi-select preferences, browser-based video recording, and API integrations like WhatsApp/email reminders. Optimized workflows with autosave features and real-time scraping, leveraging Next.js, Supabase, and Cloudflare workers.",
      href: "https://turboml.com/",
      logoUrl: "/turboml.jpg",
    },
  ];

  return (
    <div className="space-y-6 pb-6">
      {experiences.map((exp) => (
        <div
          key={exp.company}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4"
        >
          {/* Left side - Logo, Company & Position */}
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            {/* Company Logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden flex-shrink-0">
              {exp.logoUrl ? (
                <Image
                  src={exp.logoUrl}
                  alt={exp.company}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm sm:text-lg font-medium text-emphasis">
                  {exp.company.charAt(0)}
                </span>
              )}
            </div>

            {/* Company Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-emphasis text-base sm:text-lg">
                {exp.href ? (
                  <Link
                    href={exp.href}
                    target="_blank"
                    className="hover:text-link transition-colors"
                  >
                    {exp.company}
                  </Link>
                ) : (
                  exp.company
                )}
              </h3>
              <p className="text-xs sm:text-sm dark:text-white/80 text-black/70">
                {exp.position}
              </p>
            </div>
          </div>

          {/* Right side - Duration */}
          <div className="pl-13 sm:pl-0 sm:text-right flex-shrink-0">
            <p className="text-xs sm:text-sm dark:text-white/80 text-black/70">
              {exp.duration}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
