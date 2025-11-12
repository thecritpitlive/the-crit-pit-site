"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return (
    <Button variant="ghost" aria-label="Toggle theme" onClick={() => setDark(d => !d)}>
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
}
