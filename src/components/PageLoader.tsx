'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Loader } from './ui/Loader'
import { useEffect, useState } from 'react'

interface PageLoaderProps {
  isLoading: boolean
  text?: string
  showProgress?: boolean
  children?: React.ReactNode
}

export const PageLoader = ({ 
  isLoading, 
  text = 'Loading',
  showProgress = false,
  children 
}: PageLoaderProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading && showProgress) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 95) return prev
          return prev + Math.random() * 15
        })
      }, 200)
      return () => clearInterval(interval)
    }
  }, [isLoading, showProgress])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center min-h-[100svh]"
          style={{ 
            backgroundColor: 'var(--loader-bg)' 
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center space-y-6 w-full px-4"
          >
            <Loader text={text} />
            
            {showProgress && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                className="relative"
              >
                <div className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-black dark:bg-white rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-sm text-neutral-600 dark:text-neutral-400 text-center mt-2"
                >
                  {Math.round(progress)}%
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
