interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    // {
    //   company: "TurboML",
    //   position: "Software Engineering Intern",
    //   duration: "April 2025 – Current",
    //   description: `Working as a Software Engineer at TurboML on Puch AI, 
    //   a multilingual WhatsApp-based AI assistant built with FastAPI, Python, and WhatsApp API. 
    //   I’m developing features like Swiggy integration, preset commands, and task reminders to enhance 
    //   user experience and accessibility across 11 Indian languages.`,
    // },
     {
      company: "Lamarr",
      position: "Full stack developer Intern",
      duration: "Nov 2024 – Dec 2024",
      description: `Developed and deployed cutting-edge solutions, including multi-select preferences, 
        browser-based video recording, and API integrations like WhatsApp/email reminders. 
        Optimized workflows with autosave features and real-time scraping, 
        leveraging Next.js, Supabase, and Cloudflare workers.`,
    },
  ];

  return (
    <div className="space-y-4">
      {experiences.map((exp) => (
          <div key={exp.company} className="space-y-2">
            <div className="flex justify-between items-start">
              <div className="max-w-[70%]">
                <h3 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200">
                  {exp.company}
                </h3>
                <p className="text-sm md:text-lg text-neutral-800 dark:text-neutral-400">
                  {exp.position}
                </p>
              </div>
              <p className="text-sm md:text-base text-neutral-800 dark:text-neutral-400 whitespace-nowrap">
                {exp.duration}
              </p>
            </div>
          </div>
      ))}
    </div>
  );
}
