'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseInfiniteScrollOptions {
  initialItems: number;
  itemsPerLoad: number;
  threshold?: number;
  rootMargin?: string;
}

export const useInfiniteScroll = <T>(
  items: T[],
  options: UseInfiniteScrollOptions
) => {
  const {
    initialItems,
    itemsPerLoad,
    threshold = 0.1,
    rootMargin = '200px'
  } = options;

  const [displayedItems, setDisplayedItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const observedElements = useRef<Set<HTMLDivElement>>(new Set());

  // Initialize displayed items
  useEffect(() => {
    const initial = items.slice(0, initialItems);
    setDisplayedItems(initial);
    setHasMore(items.length > initialItems);
  }, [items, initialItems]);

  // Load more items
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    
    // Simulate network delay for better UX
    setTimeout(() => {
      setDisplayedItems(current => {
        const currentLength = current.length;
        const nextItems = items.slice(currentLength, currentLength + itemsPerLoad);
        const newItems = [...current, ...nextItems];
        
        setHasMore(newItems.length < items.length);
        setIsLoading(false);
        
        return newItems;
      });
    }, 300);
  }, [items, itemsPerLoad, isLoading, hasMore]);

  // Set up intersection observer
  const lastElementRef = useCallback((node: HTMLDivElement | null) => {
    if (isLoading) return;
    
    // Initialize observer if not exists
    if (!observer.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          // Check if any observed element is intersecting
          const isIntersecting = entries.some(entry => entry.isIntersecting);
          if (isIntersecting && hasMore && !isLoading) {
            loadMore();
          }
        },
        {
          threshold,
          rootMargin
        }
      );
    }
    
    if (node) {
      // Add new node to observed elements
      observer.current.observe(node);
      observedElements.current.add(node);
    }
    
    // Clean up old elements that are no longer in the DOM
    observedElements.current.forEach(element => {
      if (!document.contains(element)) {
        observer.current?.unobserve(element);
        observedElements.current.delete(element);
      }
    });
  }, [isLoading, hasMore, loadMore, threshold, rootMargin]);

  // Cleanup
  useEffect(() => {
    const currentObserver = observer.current;
    const currentObservedElements = observedElements.current;
    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
      currentObservedElements.clear();
    };
  }, []);

  return {
    displayedItems,
    hasMore,
    isLoading,
    lastElementRef,
    loadMore
  };
};
