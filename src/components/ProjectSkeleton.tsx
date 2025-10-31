"use client";

import React from "react";

type ProjectSkeletonProps = {
  className?: string;
};

export const ProjectSkeleton = ({ className = "" }: ProjectSkeletonProps) => {
  return (
    <div
      className={`rounded-lg border skeleton-border bg-[var(--card)] p-1 shadow-xs animate-pulse ${className}`}
    >
      <div className="flex flex-col gap-1">
        {/* Image/Video Skeleton */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="w-full h-48 skeleton-gradient rounded-lg">
            {/* Shimmer effect */}
            <div className="absolute inset-0 skeleton-shimmer" />
          </div>

          {/* Title overlay skeleton */}
          <div className="absolute bottom-0 w-full p-2 skeleton-overlay">
            <div className="h-4 skeleton-text rounded w-3/4" />
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="px-0">
          <div className="w-full rounded-lg border skeleton-bg skeleton-border px-3 sm:px-4 py-2.5 sm:py-3">
            <div className="h-4 skeleton-text rounded w-24 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

type MasonrySkeletonProps = {
  count?: number;
  className?: string;
};

export const MasonrySkeleton = ({
  count = 3,
  className = "",
}: MasonrySkeletonProps) => {
  const items = React.useMemo(
    () => Array.from({ length: count }, () => crypto.randomUUID()),
    [count],
  );
  return (
    <div
      className={`min-h-screen w-full bg-[var(--background)] p-2 sm:p-3.5 ${className}`}
    >
      <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((key) => (
          <ProjectSkeleton key={key} />
        ))}
      </div>
    </div>
  );
};
