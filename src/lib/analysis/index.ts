import * as tf from "@tensorflow/tfjs"
import type { AnalysisResult } from "@/types"

// Initialize model loading
let model: tf.LayersModel | null = null
const modelPromise = tf
  .loadLayersModel("/models/pangen-v1/model.json")
  .then((loadedModel) => {
    model = loadedModel
    return model
  })
  .catch((error) => {
    console.error("Error loading model:", error)
    return null
  })

// Helper function to preprocess image
async function preprocessImage(file: File): Promise<tf.Tensor | null> {
  try {
    const img = new Image()
    const imagePromise = new Promise<HTMLImageElement>((resolve, reject) => {
      img.onload = () => resolve(img)
      img.onerror = reject
      img.crossOrigin = "anonymous"
    })

    img.src = URL.createObjectURL(file)
    await imagePromise

    // Convert image to tensor and preprocess
    const tensor = tf.browser.fromPixels(img).resizeNearestNeighbor([224, 224]).toFloat().expandDims()

    // Normalize values to [-1, 1]
    return tensor.div(127.5).sub(1)
  } catch (error) {
    console.error("Error preprocessing image:", error)
    return null
  }
}

export async function analyzeCTScan(file: File): Promise<AnalysisResult> {
  try {
    // Ensure model is loaded
    const loadedModel = await modelPromise
    if (!loadedModel) {
      throw new Error("Model failed to load")
    }

    // Preprocess image
    const tensor = await preprocessImage(file)
    if (!tensor) {
      throw new Error("Failed to process image")
    }

    // Run inference
    const predictions = (await loadedModel.predict(tensor)) as tf.Tensor
    const [confidence] = await predictions.data()

    // Cleanup
    tensor.dispose()
    predictions.dispose()

    // Generate result
    const result: AnalysisResult = {
      result: confidence > 0.5 ? "positive" : "negative",
      confidence: confidence,
      details: `Analysis completed with ${(confidence * 100).toFixed(2)}% confidence`,
      recommendations: [
        confidence > 0.5
          ? "Immediate consultation with healthcare provider recommended"
          : "Regular screening schedule recommended",
        "Follow-up scan in 3-6 months",
        "Consider additional biomarker testing",
      ],
    }

    return result
  } catch (error) {
    console.error("Analysis error:", error)
    throw new Error("Failed to analyze CT scan")
  }
}

