import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'mind-mentor',
    title: "Mind Mentor AI",
    description: "Mind Mentor AI revolutionizes educational assistance through advanced AI technology. This innovative platform harnesses the power of Groq AI and large language models to provide personalized learning experiences, intelligent study plan generation, and dynamic resource curation. Built with modern web technologies, it offers an intuitive interface for seamless interaction with AI-powered educational tools, making learning more efficient and engaging.",
    liveLink: "https://mind-mentor-pearl.vercel.app/",
    githubLink: "https://github.com/KartikLabhshetwar/mind-mentor",
    video:'/videos/mind-mentor.mp4',
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
    description: "SatyaCheck is an innovative fact-checking platform that combines cutting-edge AI technology with browser integration to combat misinformation. Leveraging Google's Gemini Pro AI, it analyzes news articles and social media content in real-time, providing users with credibility assessments and source verification. The Chrome extension seamlessly integrates with users' browsing experience, offering instant fact-checking capabilities while maintaining a clean and intuitive interface.",
    liveLink: "https://satya-check.vercel.app/",
    githubLink: "https://github.com/21prnv/SatyaCheck",
    video: "/videos/satya-check.mp4",
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
    description: "Donezo transforms the way professionals track and reflect on their work through AI-powered weekly review emails. Drawing inspiration from the communication styles of tech visionaries like Elon Musk and Steve Jobs, it generates personalized, insightful summaries of your achievements and progress. The application combines modern front-end design with robust backend scheduling to deliver timely, engaging content that helps users maintain perspective on their professional journey.",
    liveLink: "https://donezo-theta.vercel.app/",
    githubLink: "https://github.com/UmangAgarwal257/Donezo",
    video: "/videos/donezo.mp4",
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
    description: "LearnX is a comprehensive course marketplace platform that seamlessly connects educators with learners. Built on the MERN stack with TypeScript, it features secure user authentication, streamlined course management, and integrated payment processing through Razorpay. The platform emphasizes user experience with intuitive navigation, responsive design, and robust content delivery, making online education accessible and engaging.",
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
    description: "TaskMaster redefines task management with its dynamic Kanban board implementation and detailed list views. This full-stack application combines the flexibility of Next.js with the reliability of MongoDB to deliver a seamless task organization experience. Features include real-time updates, drag-and-drop functionality, and customizable workflows, all wrapped in an elegant, responsive interface that prioritizes productivity and user experience.",
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
