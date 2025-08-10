'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VisitorCounterProps {
  className?: string;
  showLabel?: boolean;
  labelText?: string;
}

interface VisitorResponse {
  totalVisitors: number;
  isNewVisitor?: boolean;
  success: boolean;
  error?: string;
}

export default function VisitorCounter({ 
  className = "", 
  showLabel = true, 
  labelText = "visitors" 
}: VisitorCounterProps) {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const trackVisitor = async () => {
      try {
        setIsLoading(true);
        
        // Check if we've already tracked this session
        const sessionTracked = sessionStorage.getItem('visitorTracked');
        
        if (!sessionTracked) {
          // Track new visitor
          const response = await fetch('/api/visitors', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          
          if (!response.ok) {
            throw new Error('Failed to track visitor');
          }
          
          const data: VisitorResponse = await response.json();
          
          if (isMounted) {
            if (data.success) {
              setCount(data.totalVisitors);
              sessionStorage.setItem('visitorTracked', 'true');
              
              if (data.isNewVisitor) {
                console.log('New visitor tracked. Total visitors:', data.totalVisitors);
              }
            } else {
              throw new Error(data.error || 'Failed to track visitor');
            }
          }
        } else {
          // Get current count without incrementing
          const response = await fetch('/api/visitors', {
            method: 'GET',
          });
          
          if (!response.ok) {
            throw new Error('Failed to fetch visitor count');
          }
          
          const data: VisitorResponse = await response.json();
          
          if (isMounted) {
            if (data.success) {
              setCount(data.totalVisitors);
            } else {
              throw new Error(data.error || 'Failed to fetch visitor count');
            }
          }
        }
      } catch (err) {
        console.error('Error with visitor tracking:', err);
        
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Unknown error');
          // Fallback: try to show a cached count or default to 0
          const cachedCount = localStorage.getItem('lastVisitorCount');
          setCount(cachedCount ? parseInt(cachedCount) : 0);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    trackVisitor();

    return () => {
      isMounted = false;
    };
  }, []);

  // Cache the count in localStorage when it updates
  useEffect(() => {
    if (count !== null) {
      localStorage.setItem('lastVisitorCount', count.toString());
    }
  }, [count]);

  // Don't render anything until we have data
  if (isLoading || count === null) {
    return (
      <motion.div 
        className={`inline-flex items-center gap-2 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
      >
        <div className="text-sm dark:text-white/70 text-black/70">
          <div className="animate-pulse">Loading...</div>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div 
        className={`inline-flex items-center gap-2 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-sm dark:text-red-400 text-red-600">
          <span className="font-medium">{count?.toLocaleString() || '0'}</span>
          {showLabel && <span className="ml-1 opacity-70">{labelText}</span>}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <div className="text-sm dark:text-white/70 text-black/70">
        <AnimatePresence mode="wait">
          <motion.span
            key={count}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.5, y: -20 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.25, 0, 1],
              scale: { duration: 0.6 }
            }}
            className="font-medium dark:text-white text-black inline-block"
            suppressHydrationWarning
          >
            {count.toLocaleString()}
          </motion.span>
        </AnimatePresence>
        {showLabel && (
          <motion.span 
            className="ml-1 opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {labelText}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}
