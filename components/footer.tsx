"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "#", color: "#1877f2" },
  { icon: Twitter, href: "#", color: "#1da1f2" },
  { icon: Instagram, href: "#", color: "#e4405f" },
  { icon: Youtube, href: "#", color: "#ff0000" },
]

export function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Advanced Pancreatic Cancer Detection.
            </p>
            <p className="text-sm text-primary font-semibold mt-1">All rights reserved by Team PHOENIX</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <link.icon className="w-6 h-6" style={{ color: link.color }} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

