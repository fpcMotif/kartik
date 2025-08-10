'use client'

import HorizontalDiagonalBorders from "@/components/HorizontalDiagonalBorders"

interface SectionDividerProps {
  className?: string
  height?: string
}

export default function SectionDivider({ 
  className = 'text-neutral-200 dark:text-neutral-800',
  height = '30px'
}: SectionDividerProps) {
  return (
    <div className={`w-full relative bg-neutral-50/20 dark:bg-neutral-900/20`} style={{ height }}>
      <HorizontalDiagonalBorders position="both" className={className} height={height} />
    </div>
  )
}
