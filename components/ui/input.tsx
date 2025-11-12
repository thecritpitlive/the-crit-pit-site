import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn("w-full rounded-xl bg-ink-900 border border-ink-700 px-3 py-2 text-ink-100 placeholder:text-ink-400", className)}
      {...props}
    />
  )
);
Input.displayName = "Input";
