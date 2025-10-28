import ProjectsListClient from "@/components/ProjectsListClient";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Kartik Labhshetwar",
  description: "Showcase of my projects and work",
};

export default function ProjectsPage() {
  return <ProjectsListClient projects={projects} />;
}
