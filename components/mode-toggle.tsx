"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
        <span className="sr-only">Toggle theme</span>
      </div>
    )
  }

  // Force theme to be either 'light' or 'dark' for the toggle
  const currentTheme = theme === "system" ? "light" : theme || "light"

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark")
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center relative overflow-hidden"
      aria-label="Toggle theme"
      transition={{ duration: 0.2 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: currentTheme === "dark" ? 0 : 180,
          opacity: currentTheme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon className="h-5 w-5 text-primary" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: currentTheme === "light" ? 0 : -180,
          opacity: currentTheme === "light" ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun className="h-5 w-5 text-primary" />
      </motion.div>

      <span className="sr-only">Toggle theme</span>
    </motion.button>
  )
}
