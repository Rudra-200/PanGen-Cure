"use client"

import { useState, useEffect } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(mousePosition.x, mousePosition.y)
      const isClickable = hoveredElement?.matches('button, a, [role="button"], input[type="submit"]')
      setIsPointer(!!isClickable)
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", updateCursorType)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", updateCursorType)
    }
  }, [mousePosition.x, mousePosition.y, cursorX, cursorY])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary mix-blend-difference pointer-events-none z-50"
        style={{ x: cursorX, y: cursorY }}
      />
      {isPointer && (
        <motion.div
          className="fixed top-0 left-0 w-4 h-4 bg-primary mix-blend-difference rounded-full pointer-events-none z-50"
          style={{ x: cursorX + 16, y: cursorY + 16 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        />
      )}
    </>
  )
}

