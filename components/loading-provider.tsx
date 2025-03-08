"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const LoadingContext = createContext({
  isLoading: true,
  setIsLoading: (loading: boolean) => {},
})

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for demo
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <div className="relative w-32 h-32">
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="absolute inset-0 border-2 border-primary"
              />
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.2,
                }}
                className="absolute inset-0 border-2 border-primary/50"
              />
            </div>
          </motion.div>
        ) : (
          children
        )}
      </AnimatePresence>
    </LoadingContext.Provider>
  )
}

export const useLoading = () => useContext(LoadingContext)

