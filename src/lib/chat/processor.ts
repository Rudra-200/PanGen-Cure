import { chatResponses, fallbackResponses } from "./responses"

export function processUserMessage(message: string): string {
  const lowercaseMessage = message.toLowerCase()

  // Check each category for keyword matches
  for (const [_, category] of Object.entries(chatResponses)) {
    if (category.keywords.some((keyword) => lowercaseMessage.includes(keyword))) {
      const response = category.responses[Math.floor(Math.random() * category.responses.length)]

      // 30% chance to add a follow-up question if available
      if (category.followUp && Math.random() < 0.3) {
        const followUp = category.followUp[Math.floor(Math.random() * category.followUp.length)]
        return `${response}\n\n${followUp}`
      }

      return response
    }
  }

  // Return random fallback response if no keywords match
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
}

export function createStreamingResponse(message: string): ReadableStream {
  const response = processUserMessage(message)

  return new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder()
      const words = response.split(" ")

      for (const word of words) {
        // Add natural pauses for punctuation
        const delay = word.match(/[.,!?]$/) ? 400 : 50
        const chunk = encoder.encode(word + " ")
        controller.enqueue(chunk)
        await new Promise((resolve) => setTimeout(resolve, delay))
      }

      controller.close()
    },
  })
}

