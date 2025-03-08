"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "components/ui/card"
import { Button } from "components/ui/button"

export default function AboutPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isJourneyVideoPlaying, setIsJourneyVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const journeyVideoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = (ref: React.RefObject<HTMLVideoElement>, setPlayState: (state: boolean) => void) => {
    if (ref.current) {
      if (ref.current.paused) {
        ref.current.play()
        setPlayState(true)
      } else {
        ref.current.pause()
        setPlayState(false)
      }
    }
  }

  // Convert Google Drive file IDs to embedded viewer URLs
  const videoUrl = "https://drive.google.com/file/d/1fPOw-CXOpLhxAHAdV1wHp9ya7hNgxfA8/preview"
  const journeyVideoUrl = "https://drive.google.com/file/d/1RgVPeCRq4aQSYgjb_4at9OHDwsAlegio/preview"

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Our Project
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                In a landscape where pancreatic cancer has long lurked in the shadows, our mission is to ignite a
                paradigm shift transforming early detection into a beacon of hope. We aim to revolutionize pancreatic
                oncology by harnessing cutting-edge multi-modal intelligence, blending art and science to rewrite the
                narrative of cancer care.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <p className="text-muted-foreground mb-4">
                At the heart of our strategy lies a seamless symphony of innovation, where the vibrancy of contrast
                enhanced CT imagery meets the subtle cues of urinary biomarkers. This orchestrated fusion creates an end
                to end diagnostic masterpiece from automated image analysis to real-time surgical navigation ensuring
                that every data point sings in perfect harmony for precision healthcare.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Pancreatic Cancer Impact</h2>
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
            <iframe src={videoUrl} className="w-full h-full" allow="autoplay" allowFullScreen></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
            <iframe src={journeyVideoUrl} className="w-full h-full" allow="autoplay" allowFullScreen></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
              <p className="text-muted-foreground mb-4">
                We're always looking for passionate individuals and organizations to join our mission. Whether you're a
                researcher, healthcare professional, or someone who wants to make a difference, there are many ways to
                contribute to our project.
              </p>
              <Button>Contact Us</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
