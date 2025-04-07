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
      name: "peerlist",
      url: "https://peerlist.io/code_kartik",
    },
    {
      name: "say hello",
      url: "mailto:kartik.labhshetwar@gmail.com",
    },
    {
      name: "book a meet",
      url: "https://cal.com/kartik-labhshetwar/15min",
    },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {socialLinks.map((link) => (
      <a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 bg-neutral-700 dark:bg-neutral-800 text-neutral-100 
             rounded-full text-sm sm:text-md sm:px-4 sm:py-2 hover:bg-neutral-800 
             dark:hover:bg-neutral-700 transition-colors duration-200"
      >
        {link.name}
      </a>
      ))}
    </div>
  );
}
