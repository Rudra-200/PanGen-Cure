"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "CT Scan Analysis",
    title: "Advanced Imaging",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Surgical Procedure",
    title: "Surgical Guidance",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Research Lab",
    title: "Biomarker Research",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Team Discussion",
    title: "Expert Consultation",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Patient Care",
    title: "Patient Care",
  },
]

export function ImageGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="relative group overflow-hidden rounded-lg"
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={600}
            height={400}
            className="object-cover aspect-video"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-xl font-semibold">{image.title}</h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

