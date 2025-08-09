import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  href?: string;
  logoUrl?: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Turbo ML",
      position: "Software Engineering Intern (AI) ",
      duration: "April 2025 – July 2025",
      description: `Developed and deployed cutting-edge solutions, including multi-select preferences, 
        browser-based video recording, and API integrations like WhatsApp/email reminders. 
        Optimized workflows with autosave features and real-time scraping, 
        leveraging Next.js, Supabase, and Cloudflare workers.`,
      href: "https://turboml.com/",
      logoUrl: "/turboml.jpg",
    },
    // {
    //   company: "Puch AI",
    //   position: "Software Engineering Intern (AI)",
    //   duration: "June 2025 – July 2025",
    //   description: `Developed and deployed cutting-edge solutions, including multi-select preferences, 
    //     browser-based video recording, and API integrations like WhatsApp/email reminders. 
    //     Optimized workflows with autosave features and real-time scraping, 
    //     leveraging Next.js, Supabase, and Cloudflare workers.`,
    //   href: "https://puch.ai",
    //   logoUrl: "/puchai.jpg",
    // },
    {
      company: "Lamarr",
      position: "Full stack developer Intern",
      duration: "Nov 2024 – Dec 2024",
      description: `Developed and deployed cutting-edge solutions, including multi-select preferences, 
        browser-based video recording, and API integrations like WhatsApp/email reminders. 
        Optimized workflows with autosave features and real-time scraping, 
        leveraging Next.js, Supabase, and Cloudflare workers.`,
      href: "https://www.lamarr.tech/",
      logoUrl: "/lamarr.png",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={exp.company} className="group">
            <div className="flex items-start gap-6">
              {/* Company Logo */}
              <div className="flex-shrink-0">
                {exp.logoUrl && (
                  <Avatar className="border size-14 bg-muted-background dark:bg-foreground">
                    <AvatarImage
                      src={exp.logoUrl}
                      alt={exp.company}
                      className="object-contain"
                    />
                    <AvatarFallback>{exp.company[0]}</AvatarFallback>
                  </Avatar>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1 min-w-0 pr-4">
                    {exp.href ? (
                      <a
                        href={exp.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white hover:underline transition-colors"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white">
                        {exp.company}
                      </h3>
                    )}
                    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mt-1">
                      {exp.position}
                    </p>
                  </div>
                  
                  {/* Duration */}
                  <div className="flex-shrink-0 text-right">
                    <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-500 font-medium">
                      {exp.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Divider (except for last item) */}
            {index < experiences.length - 1 && (
              <div className="mt-6 border-b border-neutral-200 dark:border-neutral-700"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
