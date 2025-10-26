'use client'

import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

interface GitHubContributionsProps {
  username: string;
  compact?: boolean;
  className?: string;
}

const GitHubContributions: React.FC<GitHubContributionsProps> = ({ 
  username,
  compact = false,
  className = ""
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  if (!mounted) {
    return (
      <div className={`w-full ${compact ? 'h-[120px]' : 'h-[160px]'} rounded-xl bg-muted animate-pulse ${className}`} />
    );
  }

  // Responsive sizing - larger on desktop, smaller on mobile
  const fontSize = isMobile ? 8 : (compact ? 13 : 15);
  const blockSize = isMobile ? 8 : (compact ? 11 : 13);
  const blockMargin = isMobile ? 2 : (compact ? 2 : 4);

  return (
    <div className={`relative overflow-x-auto rounded-xl ${className}`}>
      <motion.div
        className="w-full overflow-visible rounded-xl bg-transparent backdrop-blur-none border-0 hover:shadow-sm transition-shadow duration-300 min-w-max"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div 
          className={`${compact ? 'p-2' : 'p-3'} hover:scale-[1.005] transition-transform duration-300`}
          style={{ fontSize: `${fontSize}px` }}
        >
          <GitHubCalendar
            username={username}
            colorScheme={resolvedTheme as "light" | "dark"}
            fontSize={fontSize}
            blockSize={blockSize}
            blockMargin={blockMargin}
            showWeekdayLabels={!compact && !isMobile}
            theme={theme}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default GitHubContributions;
