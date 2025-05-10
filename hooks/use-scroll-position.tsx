"use client"

import { useState, useEffect } from "react"

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
    }

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Call handler right away to update initial position
    handleScroll()

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollPosition
}
