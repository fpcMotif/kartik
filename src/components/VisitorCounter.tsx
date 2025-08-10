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
        
        // Always try to track visitor first, let the server decide if it's new or returning
        console.log('Attempting to track visitor...');
        const response = await fetch('/api/visitors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: VisitorResponse = await response.json();
        console.log('Visitor tracking response:', data);
        
        if (isMounted) {
          if (data.success) {
            setCount(data.totalVisitors);
            
            if (data.isNewVisitor) {
              console.log('New visitor counted! Total visitors:', data.totalVisitors);
            } else {
              console.log('Returning visitor. Total visitors:', data.totalVisitors);
            }
          } else {
            throw new Error(data.error || 'Failed to track visitor');
          }
        }
      } catch (err) {
        console.error('Error with visitor tracking:', err);
        
        if (isMounted) {
          // Try to get current count as fallback
          try {
            const response = await fetch('/api/visitors', { method: 'GET' });
            if (response.ok) {
              const data: VisitorResponse = await response.json();
              if (data.success) {
                setCount(data.totalVisitors);
                console.log('Fallback: Got visitor count from GET request:', data.totalVisitors);
              } else {
                throw new Error('GET request failed');
              }
            } else {
              throw new Error('GET request failed');
            }
          } catch (fallbackErr) {
            console.error('Fallback failed:', fallbackErr);
            setError(err instanceof Error ? err.message : 'Unknown error');
            // Final fallback to cached count
            const cachedCount = localStorage.getItem('lastVisitorCount');
            setCount(cachedCount ? parseInt(cachedCount) : 0);
          }
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
