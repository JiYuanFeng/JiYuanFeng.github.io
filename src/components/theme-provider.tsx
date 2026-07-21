"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Explicitly include children in the props type to satisfy TypeScript
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider> & {
  children: React.ReactNode
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}