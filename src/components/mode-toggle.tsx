"use client";

import * as React from "react";
import { Moon, Sun, Printer } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed right-4 top-4 z-50 flex gap-2 print:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-white/50 backdrop-blur-sm dark:bg-zinc-950/50"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-white/50 backdrop-blur-sm dark:bg-zinc-950/50"
        onClick={() => window.print()}
      >
        <Printer className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Print</span>
      </Button>
    </div>
  );
}