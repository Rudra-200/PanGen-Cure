"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

export function TeamMember({ name, role }: { name: string; role: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card>
        <CardContent className="p-6 text-center">
          <User className="w-20 h-20 mx-auto mb-4 text-primary" />
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

