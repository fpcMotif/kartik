'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VisitorCounterProps {
  className?: string;
  showLabel?: boolean;
  labelText?: string;
}

export default function VisitorCounter({ 
  className = "", 
  showLabel = true, 
  labelText = "visitors" 
}: VisitorCounterProps) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    try {
      const today = new Date().toDateString();
      const lastVisitDate = localStorage.getItem('lastVisitDate');
      const storedCount = localStorage.getItem('visitorCount');
      const currentCount = storedCount ? parseInt(storedCount) : 0;
      
      // Only increment if this is a new session (different day or first visit)
      if (lastVisitDate !== today) {
        const newCount = currentCount + 1;
        localStorage.setItem('visitorCount', newCount.toString());
        localStorage.setItem('lastVisitDate', today);
        
        console.log('New visitor session:', newCount);
        setCount(newCount);
      } else {
        // Same day visit - don't increment
        console.log('Same session - count unchanged:', currentCount);
        setCount(currentCount);
      }
    } catch (error) {
      console.error('Error updating visitor count:', error);
      // Fallback to showing 0 if localStorage fails
      setCount(0);
    }
  }, []);

  // Don't render anything until client-side count is set
  if (count === null) return null;

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
