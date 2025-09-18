'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react'

interface Contribution {
  title: string
  description: string
  repository: string
  link: string
  date: string
}

const contributions: Contribution[] = [
  {
    title: "feat(mem0): add complete mcp server with mem0 API integration",
    description: "Added mem0 MCP integration to the Klavis AI ecosystem, contributing to tools that other developers actually use.",
    repository: "Klavis-AI",
    link: "https://github.com/Klavis-AI/klavis/pull/251",
    date: "2025",
  },
  {
    title: "feat: add express.js support to CLI",
    description: "Added express.js support to the billingsdk CLI, contributing to tools that other developers actually use.",
    repository: "dodopayments/billingsdk",
    link: "https://github.com/dodopayments/billingsdk/pull/103",
    date: "2025",
  },
  {
    title: "feat: interactive component playground",
    description: "Added an interactive component playground to the Dodopayments billingsdk.",
    repository: "dodopayments/billingsdk",
    link: "https://github.com/dodopayments/billingsdk/pull/96",
    date: "2025",
  },
  {
    title: "fix: removed deprecated github (luclid icon) to react icon",
    description: "replaced deprecated github (luclid icon) to react icon",
    repository: "dodopayments/billingsdk",
    link: "https://github.com/dodopayments/billingsdk/pull/90",
    date: "2025",
  },
  
  {
    title: "perf: optimize images and fix linting warnings",
    description: "Optimized images and fixed linting warnings in the Dodopayments billingsdk.",
    repository: "dodopayments/billingsdk",
    link: "https://github.com/dodopayments/billingsdk/pull/83",
    date: "2025",
  },
  {
    title: "fix: fixed the year on the sidebar",
    description: "Fixed the year on the sidebar of the Tambo AI website.",
    repository: "tambo-ai/tambo",
    link: "https://github.com/tambo-ai/tambo/pull/973",
    date: "2025",
  }
]



export default function OpenSourceContributionsCard() {
  const [showAll, setShowAll] = useState(false)
  const displayedContributions = showAll ? contributions : contributions.slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-lg bg-white dark:bg-[hsl(0,3%,6.5%)] p-4 sm:p-6"
    >

      <div className="space-y-4">
        {displayedContributions.map((contribution, index) => (
          <motion.div
            key={contribution.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-md text-neutral-800 dark:text-neutral-200 group-hover:text-[#006FEE] transition-colors duration-200">
                    {contribution.title}
                  </h4>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">{contribution.date}</span>
                </div>
                
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {contribution.description}
                </p>
              </div>
              
              <Link
                href={contribution.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 p-2 rounded-lg bg-neutral-200 border-2 border-neutral-500 dark:bg-neutral-800 dark:border-neutral-500 hover:opacity-70 transition-all duration-200"
              >
                <ArrowUpRight className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              </Link>
            </div>
            
            {index < displayedContributions.length - 1 && (
              <div className="mt-4 border-b border-neutral-300 dark:border-[#2E2E2E]" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Show More/Less Toggle */}
      {contributions.length > 3 && (
        <div className="mt-4 pt-4 border-t border-neutral-300 dark:border-[#2E2E2E]">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200 group"
          >
            <span>{showAll ? 'Show less' : `Show all ${contributions.length} contributions`}</span>
            {showAll ? (
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
            ) : (
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
            )}
          </button>
        </div>
      )}
    </motion.div>
  )
}
