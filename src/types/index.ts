export interface ChatMessage {
  role: "user" | "assistant"
  content: string
  timestamp?: number
}

export interface AIResponse {
  text: string
  confidence: number
  sources?: string[]
}

export interface AnalysisResult {
  result: "positive" | "negative"
  confidence: number
  details?: string
  recommendations?: string[]
}

export interface AssetMetadata {
  title: string
  description: string
  tags: string[]
  source?: string
  license?: string
}

