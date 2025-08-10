'use client'

import DiagonalBorders from "@/components/DiagonalBorders"

interface SectionDividerProps {
  className?: string
}

export default function SectionDivider({ className = 'text-neutral-200 dark:text-neutral-700' }: SectionDividerProps) {
  return (
    <div className="w-full relative h-[50px] bg-neutral-50/20 dark:bg-neutral-900/20">
      <DiagonalBorders position="horizontal" className={className} />
    </div>
  )
}
