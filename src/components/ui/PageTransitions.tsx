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
      y: 20,
      scale: 0.98
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 1.02
    }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.6
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
  className = ''
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.25, 0, 1]
      }}
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
  className = ''
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const SlideInFromLeft = ({ 
  children, 
  delay = 0,
  className = ''
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.25, 0, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerContainer = ({ 
  children,
  staggerDelay = 0.1,
  className = ''
}: {
  children: ReactNode
  staggerDelay?: number
  className?: string
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

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
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.25, 0, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
