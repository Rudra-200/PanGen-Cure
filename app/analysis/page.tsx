"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "components/ui/button"
import { Card, CardContent } from "components/ui/card"
import { Upload, FileType, AlertTriangle, CheckCircle } from "lucide-react"
import { Flashcard } from "components/flashcard"
import { useToast } from "components/ui/use-toast"
import { Loader2 } from "lucide-react"

export default function CTScanAnalysis() {
  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState<"positive" | "negative" | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      const allowedTypes = ["image/png", "image/jpeg", "application/dicom"]

      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PNG, JPG, or DICOM file.",
          variant: "destructive",
        })
        return
      }

      if (file.size > 10 * 1024 * 1024) {
        // 10MB limit
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 10MB.",
          variant: "destructive",
        })
        return
      }

      setFile(file)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!file) return

    setIsAnalyzing(true)

    // Simulating API call for demonstration
    // In a real-world scenario, you would send the file to your backend
    // where the M1.h5 model would process it
    setTimeout(() => {
      setResult(Math.random() > 0.5 ? "positive" : "negative")
      setIsAnalyzing(false)
    }, 3000)
  }

  const medicalInfo = [
    {
      title: "Symptoms",
      items: [
        "Abdominal pain that radiates to your back",
        "Loss of appetite or unintended weight loss",
        "Yellowing of your skin and the whites of your eyes (jaundice)",
        "Light-colored stools",
        "Dark-colored urine",
        "Itchy skin",
        "New diagnosis of diabetes or existing diabetes that's becoming more difficult to control",
        "Blood clots",
        "Fatigue",
      ],
    },
    {
      title: "Risk Factors",
      items: [
        "Smoking",
        "Obesity",
        "Diabetes",
        "Chronic inflammation of the pancreas (pancreatitis)",
        "Family history of genetic syndromes that can increase cancer risk",
        "Family history of pancreatic cancer",
        "Older age, as most people are diagnosed after age 65",
        "Excessive alcohol consumption",
        "Exposure to certain chemicals",
      ],
    },
    {
      title: "Diagnostic Methods",
      items: ["CT scans", "MRI", "PET scans", "Ultrasound", "Blood tests for tumor markers", "Biopsy"],
    },
    {
      title: "Treatment Options",
      items: [
        "Surgery (e.g., Whipple procedure)",
        "Radiation therapy",
        "Chemotherapy",
        "Targeted therapy",
        "Immunotherapy",
        "Palliative care",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">CT Scan Analysis</h1>

        <Card className="mb-8">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted/70 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">CT Scan Image (PNG, JPG or DICOM)</p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept=".png,.jpg,.jpeg,.dcm"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                  />
                </label>
              </div>
              {file && (
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <FileType className="w-4 h-4" />
                  <span>{file.name}</span>
                </div>
              )}
              <Button type="submit" className="w-full" disabled={!file || isAnalyzing}>
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze CT Scan"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className={result === "positive" ? "bg-destructive/10" : "bg-primary/10"}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    {result === "positive" ? (
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    ) : (
                      <CheckCircle className="w-6 h-6 text-primary" />
                    )}
                    <h2 className="text-2xl font-semibold">
                      {result === "positive" ? "Positive Result" : "Negative Result"}
                    </h2>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    {result === "positive"
                      ? "The analysis indicates potential signs of pancreatic cancer. Please consult with a healthcare professional for further evaluation."
                      : "The analysis does not show significant signs of pancreatic cancer. However, regular check-ups are still recommended."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Medical Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {medicalInfo.map((info, index) => (
              <Flashcard key={index} title={info.title} items={info.items} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
