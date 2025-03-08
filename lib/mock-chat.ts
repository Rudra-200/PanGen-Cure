type Message = {
  role: "user" | "assistant"
  content: string
}

// Predefined responses based on keywords
const responses = new Map([
  [
    ["ct", "scan", "image"],
    "Our DCNN model analyzes CT scans with unprecedented 0.5mm precision, detecting tumors as small as 2mm in diameter. The model achieves 99.2% accuracy through our proprietary deep learning architecture.",
  ],
  [
    ["biomarker", "marker", "urinary"],
    "PanGen's novel biomarker panel identifies 37 unique molecular signatures with 95% sensitivity and 97% specificity. Our GradBoost model analyzes these markers in real-time using advanced machine learning algorithms.",
  ],
  [
    ["accuracy", "performance", "results"],
    "Our integrated AI system demonstrates remarkable performance metrics:\n- 99.2% tumor detection accuracy\n- 95% sensitivity in biomarker analysis\n- 97% specificity in classification\n- <2 minute processing time",
  ],
  [
    ["how", "work", "process"],
    "PanGen uses a dual-pipeline approach combining CT scan analysis through our DCNN model and biomarker detection via GradBoost. These outputs are fused using our proprietary integration algorithm and processed by BioGPT for comprehensive reporting.",
  ],
  [
    ["research", "paper", "publication"],
    "Our research has been published in leading journals including Nature Medicine AI (2024) and Medical Imaging AI (2024). The studies demonstrate significant improvements in early detection rates and diagnostic accuracy.",
  ],
])

// Fallback responses for when no keywords match
const fallbackResponses = [
  "I'm here to help you understand PanGen's advanced pancreatic cancer detection system. What specific aspect would you like to learn more about?",
  "PanGen combines cutting-edge AI with medical expertise. Could you please specify which area interests you - CT analysis, biomarker detection, or our integrated reporting system?",
  "Our technology represents the future of cancer diagnostics. What particular feature would you like me to explain?",
]

export async function generateResponse(messages: Message[]): Promise<string> {
  const lastMessage = messages[messages.length - 1]
  if (lastMessage.role !== "user") return fallbackResponses[0]

  const userInput = lastMessage.content.toLowerCase()

  // Check for keyword matches
  for (const [keywords, response] of responses) {
    if (keywords.some((keyword) => userInput.includes(keyword))) {
      return response
    }
  }

  // Return random fallback response
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
}

export async function streamResponse(message: string): Promise<ReadableStream> {
  const response = await generateResponse([{ role: "user", content: message }])

  return new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder()
      const words = response.split(" ")

      for (const word of words) {
        const chunk = encoder.encode(word + " ")
        controller.enqueue(chunk)
        await new Promise((resolve) => setTimeout(resolve, 50)) // Simulate typing
      }

      controller.close()
    },
  })
}

