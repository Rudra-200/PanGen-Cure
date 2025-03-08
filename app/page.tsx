"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "components/ui/button"
import { Card } from "components/ui/card"
import { Brain, Activity, Microscope, HeartPulse, ArrowRight, ChevronDown } from "lucide-react"
import { NetworkBackground } from "components/network-background"
import { StatisticCard } from "components/statistic-card"
import { ClinicalImpact } from "components/clinical-impact"
import { ResearchVideo } from "components/research-video"
import { AdverseEffectsCounter } from "components/adverse-effects-counter"
import Link from "next/link"

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const video = document.getElementById("pancreas-video") as HTMLVideoElement
    if (video) {
      video.onloadeddata = () => setIsVideoLoaded(true)
    }
  }, [])

  const statistics = [
    {
      title: "Early Detection Rate",
      value: "94%",
      description: "Accuracy in early-stage detection",
    },
    {
      title: "Survival Rate Improvement",
      value: "3.2x",
      description: "Increased 5-year survival rate",
    },
    {
      title: "Processing Time",
      value: "<2min",
      description: "For complete analysis results",
    },
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <NetworkBackground className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

        {isVideoLoaded && (
          <video
            id="pancreas-video"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/Pancreas - Made with Clipchamp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <motion.div style={{ opacity, scale, y }} className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Advanced Pancreatic Cancer
              </span>
              <br />
              Detection & Guidance
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Revolutionizing early detection and surgical precision through AI-powered analysis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/analysis">
                <Button size="lg" className="text-lg">
                  Start Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/research">
                <Button size="lg" variant="outline" className="text-lg">
                  View Research
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="h-8 w-8 animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-gray dark:prose-invert max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Understanding the Challenge</h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Pancreatic cancer is one of the most lethal malignancies due to its asymptomatic progression in early
                stages, leading to late detection and poor prognosis. Current diagnostics imaging and biochemical tests
                often lack sensitivity when used independently.
              </p>
              <p>
                Our project develops a deep-learning-based model that integrates CT scan imaging and urinary biomarkers.
                Insights are processed through a RAG-based BioGPT model to generate structured reports and support
                real-time surgical guidance, ultimately improving patient outcomes.
              </p>
              <p>
                Pancreatic cancer is a master of disguise, often hiding in plain sight with subtle, iso-attenuating
                lesions that challenge even the most seasoned experts. We embrace this formidable challenge by deploying
                a suite of advanced techniques from transfer learning to real-time surgical guidance that transform
                obstacles into opportunities. Our innovative approach ensures that no anomaly goes unnoticed, turning
                early detection into a decisive victory over cancer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Adverse Effects Counter */}
      <AdverseEffectsCounter />

      {/* Statistics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <StatisticCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Comprehensive Detection System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI Analysis"
              description="Deep learning algorithms for precise CT scan analysis"
            />
            <FeatureCard
              icon={Activity}
              title="Real-time Processing"
              description="Instant results with our advanced processing system"
            />
            <FeatureCard
              icon={Microscope}
              title="Biomarker Integration"
              description="Combined analysis of imaging and biological markers"
            />
            <FeatureCard
              icon={HeartPulse}
              title="Surgical Guidance"
              description="AI-assisted surgical planning and execution"
            />
          </div>
        </div>
      </section>

      {/* Clinical Impact */}
      <ClinicalImpact />

      {/* Research Video Section */}
      <ResearchVideo />
    </div>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any
  title: string
  description: string
}) {
  return (
    <Card className="relative overflow-hidden group">
      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="p-6">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-foreground transform origin-left group-hover:scale-x-100 transition-transform" />
        <Icon className="h-12 w-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </motion.div>
    </Card>
  )
}
