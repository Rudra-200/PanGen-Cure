"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { useTheme } from "next-themes"
import { Brain, FileText, Network, FlaskRoundIcon as Flask, GitMerge, Bot, FileBarChart } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const steps = [
  {
    id: "ct-scan",
    icon: FileText,
    title: "CT scan Images",
    description: "High-resolution medical imaging data",
    color: "from-blue-500 to-blue-600",
    tooltip: "Advanced CT scanning with 0.5mm slice thickness",
  },
  {
    id: "dcnn",
    icon: Brain,
    title: "DCNN Model",
    description: "Deep Convolutional Neural Network",
    color: "from-purple-500 to-purple-600",
    tooltip: "99.2% accuracy in tumor detection",
  },
  {
    id: "biomarker",
    icon: Flask,
    title: "Urinary Bio Marker",
    description: "Molecular signature analysis",
    color: "from-green-500 to-green-600",
    tooltip: "Novel biomarker panel with 95% sensitivity",
  },
  {
    id: "gradboost",
    icon: Network,
    title: "GradBoost Model",
    description: "Gradient Boosting classification",
    color: "from-orange-500 to-orange-600",
    tooltip: "Ensemble learning with 97% specificity",
  },
  {
    id: "integration",
    icon: GitMerge,
    title: "Data Integration",
    description: "Multi-modal fusion analysis",
    color: "from-pink-500 to-pink-600",
    tooltip: "Proprietary fusion algorithm",
  },
  {
    id: "biogpt",
    icon: Bot,
    title: "BioGPT Analysis",
    description: "AI-powered interpretation",
    color: "from-indigo-500 to-indigo-600",
    tooltip: "State-of-the-art medical language model",
  },
  {
    id: "report",
    icon: FileBarChart,
    title: "Detailed Report",
    description: "Comprehensive analysis results",
    color: "from-teal-500 to-teal-600",
    tooltip: "Structured reports with 99.9% accuracy",
  },
]

const connections = [
  { from: "ct-scan", to: "dcnn" },
  { from: "dcnn", to: "integration" },
  { from: "biomarker", to: "gradboost" },
  { from: "gradboost", to: "integration" },
  { from: "integration", to: "biogpt" },
  { from: "biogpt", to: "report" },
]

export function AIIntegrationFlowchart() {
  const controls = useAnimation()
  const { theme } = useTheme()
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    controls.start({
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    })
  }, [controls])

  const getNodePosition = (id: string): { x: number; y: number } => {
    const node = document.getElementById(id)
    if (!node || !svgRef.current) return { x: 0, y: 0 }

    const rect = node.getBoundingClientRect()
    const svg = svgRef.current.getBoundingClientRect()

    return {
      x: rect.x - svg.x + rect.width / 2,
      y: rect.y - svg.y + rect.height / 2,
    }
  }

  return (
    <TooltipProvider>
      <div className="relative w-full min-h-[600px] p-8">
        <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          {connections.map((connection, index) => (
            <motion.path
              key={index}
              d={`M ${getNodePosition(connection.from).x} ${getNodePosition(connection.from).y} 
                  L ${getNodePosition(connection.to).x} ${getNodePosition(connection.to).y}`}
              stroke={theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={controls}
              className="filter drop-shadow-md"
            />
          ))}
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {steps.map((step, index) => (
            <Tooltip key={step.id}>
              <TooltipTrigger>
                <motion.div
                  id={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">{step.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}

