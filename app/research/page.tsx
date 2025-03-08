"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "components/ui/card"
import { Button } from "components/ui/button"
import { ChatHelper } from "components/chat-helper"
import { ErrorBoundary } from "components/error-boundary"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs"
import { Brain, FlaskRoundIcon as Flask, GitMerge, Bot, ArrowRight, ExternalLink } from "lucide-react"

const researchAreas = [
  {
    title: "Deep Learning for Image Analysis",
    icon: Brain,
    content: `Our DCNN (Deep Convolutional Neural Network) model represents the cutting edge in medical image analysis. 
    By processing CT scan images through multiple convolutional layers, we can detect subtle patterns and anomalies 
    that might be invisible to the human eye. The model has been trained on a vast dataset of pancreatic CT scans, 
    achieving remarkable accuracy in early-stage cancer detection.`,
  },
  {
    title: "Biomarker Analysis",
    icon: Flask,
    content: `The PyCaret pipeline confirmd GradBoost model as the best performing analyzer which analyzes urinary biomarkers using advanced gradient boosting techniques. 
    This machine learning approach helps identify specific molecular signatures associated with pancreatic cancer, 
    providing a non-invasive diagnostic tool that complements imaging results.`,
  },
  {
    title: "Multi-Modal Integration",
    icon: GitMerge,
    content: `Our innovative data fusion approach combines results from both DCNN and PyCaret pipeline of GradBoost models. 
    This integration provides a more comprehensive view of the patient's condition, significantly reducing 
    false positives and improving overall diagnostic accuracy.`,
  },
  {
    title: "AI-Powered Reporting",
    icon: Bot,
    content: `The IBM Granite 3.2 system processes the integrated data and generates detailed, human-readable reports. 
    These reports include risk assessments, recommended follow-up actions, and explanations of the findings 
    in both technical and layman's terms.`,
  },
]

const publications = [
  {
    title: "Pancreatic Cancer Detection on CT Scans with Deep Learning: A Nationwide Population-based Study",
    authors:
      "Chen, P.T., Wu, T., Wang, P., Chang, D., Liu, K.L., Wu, M.S., Roth, H.R., Lee, P.C., Liao, W.C. and Wang, W.",
    journal: "Radiology, 2023",
    citation:
      "Chen, P.T., Wu, T., Wang, P., Chang, D., Liu, K.L., Wu, M.S., Roth, H.R., Lee, P.C., Liao, W.C. and Wang, W., 2023. Pancreatic cancer detection on CT scans with deep learning: a nationwide population-based study. Radiology, 306(1), pp.172-182.",
    link: "https://pubs.rsna.org/doi/full/10.1148/radiol.220152",
  },
  {
    title: "Large-scale pancreatic cancer detection via non-contrast CT and deep learning",
    authors: "Cao, K., Xia, Y., Yao, J., Han, X., Lambert, L., Zhang, T., et al.",
    journal: "Nature Medicine, 2023",
    citation:
      "Cao, K., Xia, Y., Yao, J., Han, X., Lambert, L., Zhang, T., Tang, W., Jin, G., Jiang, H., Fang, X. and Nogues, I., 2023. Large-scale pancreatic cancer detection via non-contrast CT and deep learning. Nature medicine, 29(12), pp.3033-3043.",
    link: "https://www.nature.com/articles/s41591-023-02640-w",
  },
  {
    title: "A deep learning algorithm to predict risk of pancreatic cancer from disease trajectories",
    authors: "Placido, D., Yuan, B., Hjaltelin, J.X., Zheng, C., Haue, A.D., et al.",
    journal: "Nature Medicine, 2023",
    citation:
      "Placido, D., Yuan, B., Hjaltelin, J.X., Zheng, C., Haue, A.D., Chmura, P.J., Yuan, C., Kim, J., Umeton, R., Antell, G. and Chowdhury, A., 2023. A deep learning algorithm to predict risk of pancreatic cancer from disease trajectories. Nature medicine, 29(5), pp.1113-1122.",
    link: "https://www.nature.com/articles/s41591-023-02332-5",
  },
]

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold text-center mb-8">Our Research & Technology</h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Leveraging cutting-edge AI and machine learning technologies to revolutionize pancreatic cancer detection
              and analysis
            </p>
          </motion.div>

          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
              <TabsTrigger value="demo">Live Demo</TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="overview" className="space-y-8">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-semibold mb-4">Integration Overview</h2>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-23%20at%2022.02.38_dacb8a84.jpg-fbTVnhOsffQ8YE5DGt6SLk30gZGHbo.jpeg"
                          alt="PanGen Integration Pipeline"
                          className="w-full h-auto"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {researchAreas.map((area, index) => (
                      <motion.div
                        key={area.title} // Updated to use a unique key
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="h-full">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4 mb-4">
                              <area.icon className="w-8 h-8 text-primary" />
                              <h3 className="text-xl font-semibold">{area.title}</h3>
                            </div>
                            <p className="text-muted-foreground">{area.content}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                ...
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>

        {/* AI Chat Helper */}
        <ChatHelper />
      </div>
    </ErrorBoundary>
  )
}
