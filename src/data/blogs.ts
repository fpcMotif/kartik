import { BlogPost } from '@/types/blog'

export const blogs: BlogPost[] = [
  // {
  //   id: '1',
  //   title: 'Getting Started with Next.js 15',
  //   description: 'Learn how to build modern web applications with Next.js 13',
  //   content: `
  //     # Getting Started with Next.js 15
      
  //     Next.js is a powerful framework for building React applications...
  //   `,
  //   date: '2025-03-26',
  //   author: 'Your Name',
  //   tags: ['Next.js', 'React', 'Web Development'],
  //   readTime: '5 min read'
  // },

  // {
  //   id: '2',
  //   title: 'Getting Started with Next.js 15',
  //   description: 'Learn how to build modern web applications with Next.js 15',
  //   content: `
  //     # Getting Started with Next.js 15
      
  //     Next.js is a powerful framework for building React applications...
  //   `,
  //   date: '2025-03-26',
  //   author: 'Your Name',
  //   tags: ['Next.js', 'React', 'Web Development'],
  //   readTime: '5 min read'
  // },
  // Add more blog posts here
]

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}
