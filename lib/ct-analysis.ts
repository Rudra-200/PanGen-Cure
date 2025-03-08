import * as tf from '@tensorflow/tfjs';

// Load the model once when the module is imported.
let model: tf.LayersModel | null = null;
async function loadModel() {
  if (!model) {
    // Ensure the path matches the folder where you converted M1.h5
    model = await tf.loadLayersModel('/models/M1/model.json');
  }
}

// Helper function to read an image file and return an HTMLImageElement.
function readImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = reader.result as string;
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

export async function analyzeCTScan(file: File): Promise<{
  result: "positive" | "negative";
  confidence: number;
}> {
  // Ensure the model is loaded.
  await loadModel();

  // Read and preprocess the image.
  const img = await readImage(file);
  // Convert image to a tensor, resize and normalize.
  const tensor = tf.browser.fromPixels(img)
    .resizeNearestNeighbor([224, 224])
    .toFloat()
    .div(tf.scalar(255))
    .expandDims(); // Adds a batch dimension

  // Run inference with the loaded model.
  const prediction = model!.predict(tensor) as tf.Tensor;
  const predictionData = await prediction.data();
  const confidence = predictionData[0]; // Assuming the model outputs a probability score.

  return {
    result: confidence > 0.5 ? "positive" : "negative",
    confidence: confidence
  };
}

