import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/BlogPostClient";
import { blogs, getBlogById } from "@/data/blogs";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return blogs.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = getBlogById(id);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${blog.title} | Kartik Labhshetwar`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      tags: blog.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const blog = getBlogById(id);

  if (!blog) {
    notFound();
  }

  return <BlogPostClient blog={blog} />;
}
