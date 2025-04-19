"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full w-9 h-9">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-500 ${
          theme === "dark" ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-500 ${
          theme === "dark" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
