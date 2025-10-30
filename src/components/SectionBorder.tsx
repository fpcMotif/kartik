"use client";

type SectionBorderProps = {
  className?: string;
};

export default function SectionBorder({ className = "" }: SectionBorderProps) {
  return (
    <div
      className={`border-b border-dashed dark:border-white/[0.06] border-black/[0.06] ${className}`}
    />
  );
}
