"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "components/ui/card"
import { Facebook, Twitter, LinkedinIcon as LinkedIn } from "lucide-react"

const teamMembers = [
  {
    name: "Rudra Prasanna Mishra",
    role: "Lead Researcher",
    bio: "Expert in AI-driven medical imaging analysis with a focus on early cancer detection.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RPM.jpg-iv0tnbhcD31AYXZgkZxbQsU6AJzyXO.jpeg", // Updated RPM image
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "D Vamsi Krishna",
    role: "UI/UX Designer",
    bio: "Crafts intuitive and visually engaging user experiences, blending creativity with data-driven design.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PP-4k2dzy5nHIv628ky34P8WFhLCLKEkt.png",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jnanasri Kalakota",
    role: "Machine Learning Engineer",
    bio: "Develops cutting-edge deep learning models for medical image processing and analysis.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JK-PbNzkCIEIafHGUQa4E3fFvlmOrnDcL.jpeg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Gayathri Reddy Epur",
    role: "Data Scientist",
    bio: "Specializes in machine learning algorithms and big data analysis for healthcare applications.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRE-SyLAbDFwRRqzrTl462oaptmkcfYaIS.jpeg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the brilliant minds behind PanGen's revolutionary pancreatic cancer detection technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-sm text-primary mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex space-x-4">
                      <motion.a
                        href={member.social.facebook}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Facebook className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.social.twitter}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-blue-400 hover:text-blue-500"
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.social.linkedin}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-blue-700 hover:text-blue-800"
                      >
                        <LinkedIn className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
