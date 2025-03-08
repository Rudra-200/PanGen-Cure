"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import { Card, CardContent } from "components/ui/card"
import { Button } from "components/ui/button"
import { AlertTriangle, RefreshCw } from "lucide-react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    alert("An unexpected error occurred. Please try refreshing the page or contact support if the issue persists.");
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Card className="m-4">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <AlertTriangle className="w-12 h-12 text-destructive" />
              <h2 className="text-xl font-semibold">Something went wrong</h2>
              <p className="text-muted-foreground">{this.state.error?.message || "An unexpected error occurred"}</p>
              <Button onClick={() => window.location.reload()} className="mt-4" variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Try again
              </Button>
            </div>
          </CardContent>
        </Card>
      )
    }

    return this.props.children
  }
}
