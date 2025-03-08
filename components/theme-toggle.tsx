"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <motion.button
      className="relative w-12 h-6 rounded-full bg-muted p-1 focus:outline-none"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-background"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        animate={{ x: theme === "dark" ? 24 : 0 }}
      />
      {theme === "dark" ? (
        <Moon className="absolute top-1 right-1 w-4 h-4 text-yellow-400" />
      ) : (
        <Sun className="absolute top-1 left-1 w-4 h-4 text-yellow-400" />
      )}
    </motion.button>
  )
}

