"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "components/ui/button"
import { ThemeToggle } from "components/theme-toggle"
import { Activity, Menu, X, Brain, FileText, Home, Info, Users } from "lucide-react"

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/analysis", label: "CT Analysis", icon: Brain },
  { href: "/research", label: "Research", icon: FileText },
  { href: "/team", label: "Our Team", icon: Users },
  { href: "/about", label: "About", icon: Info },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors">
              <Activity className="h-6 w-6" />
              <span className="font-bold text-lg hidden sm:inline-block">PanGen</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/analysis">
                <Button className="hidden md:inline-flex">Start Analysis</Button>
              </Link>
              <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-background border-l z-40 md:hidden"
      >
        <div className="flex flex-col p-6 space-y-6">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center space-x-2 text-lg font-medium transition-colors hover:text-primary ${
                pathname === href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          ))}
          <Link href="/analysis" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full">Start Analysis</Button>
          </Link>
        </div>
      </motion.div>
    </>
  )
}
