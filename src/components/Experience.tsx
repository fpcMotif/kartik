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
    <div className="space-y-2">
      {experiences.map((exp) => (
        <div key={exp.company} className="flex items-center gap-4 mb-4">
          {exp.logoUrl && (
            <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
              <AvatarImage
                src={exp.logoUrl}
                alt={exp.company}
                className="object-contain"
              />
              <AvatarFallback>{exp.company[0]}</AvatarFallback>
            </Avatar>
          )}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div className="max-w-[70%]">
                {exp.href ? (
                  <a
                    href={exp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200 hover:underline"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <h3 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200">
                    {exp.company}
                  </h3>
                )}
                <p className="text-sm md:text-lg text-neutral-800 dark:text-neutral-400">
                  {exp.position}
                </p>
              </div>
              <p className="text-sm md:text-base text-neutral-800 dark:text-neutral-400 whitespace-nowrap">
                {exp.duration}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
