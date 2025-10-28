import BlogsListClient from "@/components/BlogsListClient";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  return <BlogsListClient blogs={blogs} />;
}
