"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "components/ui/card"
import { ChevronDown } from "lucide-react"

export function Flashcard({ title, items }: { title: string; items: string[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <motion.button
          className="flex items-center justify-between w-full p-4 text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-semibold">{title}</h3>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="p-4 space-y-2">
                {items.map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}
