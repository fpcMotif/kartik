'use client'

import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Mind Mentor AI",
    description:
      "Mind Mentor is an innovative AI-powered study assistant designed to revolutionize the way students learn and prepare for exams.",
    liveLink: "https://mind-mentor-pearl.vercel.app/",
    githubLink: "https://github.com/KartikLabhshetwar/mind-mentor"
  },

  {
    title: "SatyaCheck",
    description:
      "SatyaCheck is a comprehensive fact-checking solution that helps users verify the authenticity of news articles and social media posts.",
    liveLink: "https://satya-check.vercel.app/",
    githubLink: "https://github.com/21prnv/SatyaCheck"
  },

  {
    title: "Donezo",
    description:
      "A modern web application that sends personalized weekly review emails in the style of tech visionaries like Elon Musk and Steve Jobs.",
    liveLink: "https://donezo-theta.vercel.app/",
    githubLink: "https://github.com/UmangAgarwal257/Donezo"
  },

  {
    title: "LearnX",
    description:
      "LearnX is a course selling platform with integrated payment functionality.",
    liveLink: "https://learnx-frontend.onrender.com/",
    githubLink: "https://github.com/KartikLabhshetwar/LearnX"
  },
  {
    title: "TaskMaster",
    description:
      "TaskMaster is a powerful, full-stack task management application. It features a dynamic Kanban board and a detailed task list view, offering users a comprehensive solution for organizing and tracking their tasks efficiently.",
    liveLink: "https://task-management-dashboard-zeta.vercel.app/",
    githubLink: "https://github.com/KartikLabhshetwar/task-management-dashboard"
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto mt-6 sm:mt-8 px-4 sm:px-0">
      <div className="space-y-6 sm:space-y-8">
        {displayedProjects.map((project, index) => (
          <div key={index} className="border-b border-neutral-500 pb-4 sm:pb-6">
            <div className="flex items-center justify-between mb-2 gap-2">
              <Link href={project.liveLink} target="_blank" className="text-base sm:text-lg md:text-xl hover:underline flex-1 min-w-0">
                <span className="block truncate">{project.title}</span>
              </Link>
              <Link href={project.githubLink} target="_blank" className="hover:opacity-70 flex-shrink-0">
                <FaGithub className="size-4 sm:size-5 md:size-6" />
              </Link>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-3">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      {projects.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 sm:mt-8 text-sm md:text-base hover:underline"
        >
          {showAll ? "Show Less" : "View More"}
        </button>
      )}
    </div>
  );
};

export default Projects;
