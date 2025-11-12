import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const base = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400 rounded-2xl disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
      default: "bg-ember-500 hover:bg-ember-400 text-white",
      outline: "border border-ink-700 hover:bg-ink-800",
      ghost: "hover:bg-ink-800"
    };
    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-5",
      lg: "h-12 px-6 text-lg"
    };
    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
    );
  }
);
Button.displayName = "Button";
