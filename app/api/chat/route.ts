import { StreamingTextResponse } from "ai"
import { streamResponse } from "@/lib/mock-chat"

export const runtime = "edge"

export async function POST(req: Request) {
  const { messages } = await req.json()
  const lastMessage = messages[messages.length - 1]

  const stream = await streamResponse(lastMessage.content)
  return new StreamingTextResponse(stream)
}

