"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "components/ui/card"

export function AdverseEffectsCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 57600) {
          return prevCount + 1
        }
        clearInterval(interval)
        return prevCount
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">Pancreatic Cancer Impact</h2>
              <p className="text-4xl font-bold text-primary text-center mb-4">{count.toLocaleString()}</p>
              <p className="text-center text-muted-foreground">
                Estimated annual deaths worldwide due to pancreatic cancer
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
