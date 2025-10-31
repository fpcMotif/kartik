"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fallbackContributions } from "@/lib/github";

type Contribution = {
  title: string;
  description: string;
  repository: string;
  link: string;
  date: string;
  type?: "feature" | "fix" | "perf" | "docs" | "refactor" | "test" | "chore";
  state?: "open" | "closed" | "merged";
};

export default function OpenSourceContributionsCard() {
  const [showAll, setShowAll] = useState(false);
  const [contributions, setContributions] = useState<Contribution[]>(
    fallbackContributions,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContributions = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "/api/github-contributions?username=KartikLabhshetwar&limit=50",
        );
        const data = await response.json();

        if (data.success && data.contributions.length > 0) {
          setContributions(data.contributions);
        }
      } catch (error) {
        console.error("Failed to load GitHub contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    loadContributions();
  }, []);

  const displayedContributions = showAll
    ? contributions
    : contributions.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-lg bg-white dark:bg-[hsl(0,3%,10%)] p-4 sm:p-6 border border-neutral-200 dark:border-neutral-800"
    >
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
                    <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-12"></div>
                  </div>
                  <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-full mb-2"></div>
                  <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-2/3"></div>
                </div>
                <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
              </div>
              {i < 3 && (
                <div className="mt-4 border-b border-neutral-300 dark:border-neutral-700/50" />
              )}
            </div>
          ))}
        </div>
      ) : (
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
                    <h4 className="text-md text-emphasis group-hover:text-link transition-colors duration-200">
                      {contribution.title}
                    </h4>
                    <span className="text-xs text-secondary">
                      {contribution.date}
                    </span>
                  </div>

                  <p className="text-xs text-body-muted leading-relaxed">
                    {contribution.description}
                  </p>
                </div>

                <Link
                  href={contribution.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-2 rounded-lg bg-neutral-200 border-2 border-neutral-400 dark:bg-neutral-700/50 dark:border-neutral-600 hover:opacity-70 transition-all duration-200"
                >
                  <ArrowUpRight className="w-4 h-4 text-secondary" />
                </Link>
              </div>

              {index < displayedContributions.length - 1 && (
                <div className="mt-4 border-b border-neutral-300 dark:border-neutral-700/50" />
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Show More/Less Toggle */}
      {!loading && contributions.length > 3 && (
        <div className="mt-4 pt-4 border-t border-neutral-300 dark:border-neutral-700/50">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-sm text-body-muted hover:text-emphasis transition-colors duration-200 group"
          >
            <span>
              {showAll
                ? "Show less"
                : `Show all ${contributions.length} contributions`}
            </span>
            {showAll ? (
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
            ) : (
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
            )}
          </button>
        </div>
      )}
    </motion.div>
  );
}
