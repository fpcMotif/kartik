import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kartik017.vercel.app";
  const pages = ["", "/projects", "/blogs"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
  const blogUrls = blogs.map((b) => ({
    url: `${base}/blogs/${b.id}`,
    lastModified: new Date(),
  }));
  const projectUrls = projects.map((p) => ({
    url: `${base}/projects/${p.id}`,
    lastModified: new Date(),
  }));
  return [...pages, ...blogUrls, ...projectUrls];
}
