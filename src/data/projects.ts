import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'mind-mentor',
    title: "Mind Mentor AI",
    description: "An AI-powered educational assistant that revolutionizes learning through advanced AI technology.",
    longDescription: "Harnesses the power of Groq AI and large language models for personalized learning experiences\n\nProvides intelligent study plan generation and dynamic resource curation\n\nBuilt with modern web technologies offering an intuitive interface\n\nSeamless interaction with AI-powered educational tools makes learning more efficient and engaging",
    liveLink: "https://mind-mentor-pearl.vercel.app/",
    githubLink: "https://github.com/KartikLabhshetwar/mind-mentor",
    video: 'mind-mentor',
    image: '/images/mindmentorai.png',
    tweetUrl: "https://x.com/code_kartik/status/1887125453359788069",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Groq AI",
      "TypeScript",
      "shadcn/ui",
      "Express",
      "Node.js"
    ],
  },
  {
    id: 'satya-check',
    title: "SatyaCheck",
    description: "An innovative fact-checking platform that combines cutting-edge AI technology with browser integration to combat misinformation.",
    longDescription: "Leverages Google's Gemini Pro AI to analyze news articles and social media content in real-time\n\nProvides users with credibility assessments and source verification\n\nChrome extension seamlessly integrates with users' browsing experience\n\nOffers instant fact-checking capabilities while maintaining a clean and intuitive interface",
    liveLink: "https://satya-check.vercel.app/",
    githubLink: "https://github.com/21prnv/SatyaCheck",
    video: "satya-check",
    image: '/images/satyacheck.png',
    tweetUrl: "https://x.com/code_kartik/status/1901635520838639710",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Google Gemini Pro AI",
      "Chrome extension",
      "TypeScript",
      "shadcn/ui",
      "Supabase"
    ],
  },
  {
    id: 'donezo',
    title: "Donezo",
    description: "AI-powered weekly review email platform that transforms how professionals track and reflect on their work.",
    longDescription: "Draws inspiration from communication styles of tech visionaries like Elon Musk and Steve Jobs\n\nGenerates personalized, insightful summaries of achievements and progress\n\nCombines modern front-end design with robust backend scheduling\n\nDelivers timely, engaging content that helps users maintain perspective on their professional journey",
    liveLink: "https://donezo-theta.vercel.app/",
    githubLink: "https://github.com/UmangAgarwal257/Donezo",
    video: "donezo",
    image: '/images/donezo.png',
    tweetUrl: "https://x.com/code_kartik/status/1900964947087253538",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "TypeScript",
      "Aceternity UI",
      "Resend",
      "Node Cron"
    ],
  },
  {
    id: 'learnx',
    title: "LearnX",
    description: "A comprehensive course marketplace platform that seamlessly connects educators with learners.",
    longDescription: "Built on the MERN stack with TypeScript for robust architecture\n\nFeatures secure user authentication and streamlined course management\n\nIntegrated payment processing through Razorpay for seamless transactions\n\nEmphasizes user experience with intuitive navigation and responsive design\n\nRobust content delivery makes online education accessible and engaging",
    liveLink: "https://learnx-frontend.onrender.com/",
    githubLink: "https://github.com/KartikLabhshetwar/LearnX",
    image: '/images/learnx.png',
    tweetUrl: "https://x.com/code_kartik/status/1832882108316176563",
    tags: [
      "MERN",
      "Zod",
      "JWT",
      "TypeScript",
      "bcryptjs",
      "Tailwind CSS",
      "Razorpay API"
    ],
  },
  {
    id: 'taskmaster',
    title: "TaskMaster",
    description: "A dynamic task management platform with Kanban board implementation and detailed list views.",
    longDescription: "Combines the flexibility of Next.js with the reliability of MongoDB\n\nDelivers seamless task organization experience with real-time updates\n\nFeatures drag-and-drop functionality and customizable workflows\n\nWrapped in an elegant, responsive interface that prioritizes productivity and user experience",
    liveLink: "https://task-management-dashboard-zeta.vercel.app/",
    githubLink: "https://github.com/KartikLabhshetwar/task-management-dashboard",
    image:'/images/taskmaster.png',
    // tweetUrl: "https://x.com/code_kartik/status/1887125453359788069",
    tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}
