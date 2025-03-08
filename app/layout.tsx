"use client"

import type React from "react"

import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "components/theme-provider"
import { Navigation } from "components/navigation"
import { Footer } from "components/footer"
import { LoadingAnimation } from "components/loading-animation"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { CustomCursor } from "components/custom-cursor"
import { LoadingProvider } from "components/loading-provider"
import { ErrorBoundary } from "components/error-boundary"
import { ChatHelper } from "components/chat-helper"
import { Toaster } from "components/ui/toaster"

import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ErrorBoundary>
            <LoadingProvider>
              <LoadingAnimation />
              <Navigation />
              <AnimatePresence mode="wait">
                <motion.main
                  key={pathname}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {children}
                </motion.main>
              </AnimatePresence>
              <Footer />
              <ChatHelper />
              <CustomCursor />
              <Toaster />
            </LoadingProvider>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
