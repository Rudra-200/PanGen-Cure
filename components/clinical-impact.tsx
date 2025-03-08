"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "components/ui/card"
import { Brain, Activity, Microscope, HeartPulse } from "lucide-react"

const clinicalImpacts = [
  {
    title: "Advanced Imaging",
    icon: Brain,
    description:
      "Our AI-powered imaging techniques provide unprecedented clarity and detail in pancreatic scans, enabling earlier and more accurate detection of abnormalities.",
  },
  {
    title: "Surgical Guidance",
    icon: Activity,
    description:
      "Real-time AI assistance during surgery improves precision and reduces complications, leading to better patient outcomes and faster recovery times.",
  },
  {
    title: "Biomarker Research",
    icon: Microscope,
    description:
      "Cutting-edge research into pancreatic cancer biomarkers allows for non-invasive early detection and personalized treatment plans.",
  },
  {
    title: "Patient Care",
    icon: HeartPulse,
    description:
      "Comprehensive patient care integrating AI diagnostics, personalized treatment plans, and ongoing monitoring for improved quality of life.",
  },
]

export function ClinicalImpact() {
  const [selectedImpact, setSelectedImpact] = useState<number | null>(null)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Clinical Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clinicalImpacts.map((impact, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImpact(selectedImpact === index ? null : index)}
            >
              <Card className="cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <impact.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{impact.title}</h3>
                  <p className="text-muted-foreground">{impact.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedImpact !== null && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedImpact(null)}
          >
            <motion.div
              className="bg-card text-card-foreground rounded-lg shadow-lg p-6 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">{clinicalImpacts[selectedImpact].title}</h3>
              <p className="text-lg mb-4">{clinicalImpacts[selectedImpact].description}</p>
              <button className="text-primary hover:underline" onClick={() => setSelectedImpact(null)}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
