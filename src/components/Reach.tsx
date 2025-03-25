interface SocialLink {
  name: string;
  url: string;
}

export default function Reach() {
  const socialLinks: SocialLink[] = [
    {
      name: "twitter/x",
      url: "https://twitter.com/code_kartik",
    },
    {
      name: "github",
      url: "https://github.com/KartikLabhshetwar",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/kartikcode/",
    },
    {
      name: "say hello",
      url: "mailto:kartik.labhshetwar@gmail.com",
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-neutral-700 dark:bg-neutral-800 text-neutral-100 
                   rounded-full text-md hover:bg-neutral-800 dark:hover:bg-neutral-700 
                   transition-colors duration-200"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
