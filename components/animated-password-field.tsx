"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"

export function AnimatedPasswordField() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative">
      <Input type={showPassword ? "text" : "password"} placeholder="Enter password" className="pr-10" />
      <motion.button
        className="absolute right-2 top-1/2 -translate-y-1/2"
        onClick={() => setShowPassword(!showPassword)}
        whileTap={{ scale: 0.9 }}
      >
        {showPassword ? (
          <EyeOff className="w-5 h-5 text-muted-foreground" />
        ) : (
          <Eye className="w-5 h-5 text-muted-foreground" />
        )}
      </motion.button>
    </div>
  )
}

