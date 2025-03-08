"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "components/ui/button"
import { Card, CardContent } from "components/ui/card"
import { MessageCircle, X, Send, Minimize2, Maximize2 } from "lucide-react"
import { useChat } from "ai/react"

export function ChatHelper() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  })

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [scrollToBottom])

  return (
    <>
      <motion.button
        className={`fixed bottom-4 right-4 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-lg ${
          isOpen ? "hidden" : "flex"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.3 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : "600px",
            }}
            exit={{ opacity: 0, y: 100, scale: 0.3 }}
            className="fixed bottom-4 right-4 z-50 w-96 shadow-2xl"
          >
            <Card className="h-full border-2 border-primary/20">
              <div className="flex items-center justify-between p-4 border-b bg-primary/5">
                <h3 className="font-semibold text-primary">AI Assistant</h3>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => setIsMinimized(!isMinimized)}>
                    {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <AnimatePresence>
                {!isMinimized && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="flex flex-col h-[calc(600px-8rem)]"
                  >
                    <CardContent className="flex-1 p-4 overflow-y-auto">
                      <div className="space-y-4">
                        {messages.map((message, i) => (
                          <div key={i} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                            <div
                              className={`max-w-[80%] rounded-lg p-3 ${
                                message.role === "user"
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-foreground"
                              }`}
                            >
                              {message.content}
                            </div>
                          </div>
                        ))}
                        <div ref={messagesEndRef} />
                      </div>
                    </CardContent>

                    <div className="p-4 border-t mt-auto">
                      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={input}
                          onChange={handleInputChange}
                          placeholder="Ask me anything..."
                          className="flex-1 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <Button type="submit" size="icon" className="shrink-0">
                          <Send className="h-4 w-4" />
                        </Button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
