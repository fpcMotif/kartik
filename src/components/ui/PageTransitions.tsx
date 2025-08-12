'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 10
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: -10
    }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.4
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const FadeInUp = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = '',
  once = true
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.25, 0, 1]
      }}
      viewport={{ once, amount: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const FadeInScale = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className = '',
  once = true
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut"
      }}
      viewport={{ once, amount: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const SlideInFromLeft = ({ 
  children, 
  delay = 0,
  className = '',
  once = true
}: {
  children: ReactNode
  delay?: number
  className?: string
  once?: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.25, 0, 1]
      }}
      viewport={{ once, amount: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Optimized stagger container - use sparingly and only for small lists
export const StaggerContainer = ({ 
  children,
  staggerDelay = 0.05, // Reduced from 0.1 for faster execution
  className = ''
}: {
  children: ReactNode
  staggerDelay?: number
  className?: string
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible" // Changed to whileInView for better performance
      viewport={{ once: true, amount: 0.3 }} // Only animate once when in view
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0 // Remove initial delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Optimized stagger item - simplified for better performance
export const StaggerItem = ({ 
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 }, // Reduced movement for performance
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.3, // Reduced from 0.5 for snappier feel
            ease: "easeOut" // Simplified easing
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
