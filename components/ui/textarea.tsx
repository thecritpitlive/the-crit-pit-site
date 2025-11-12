import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn("w-full rounded-xl bg-ink-900 border border-ink-700 px-3 py-2 text-ink-100 placeholder:text-ink-400 min-h-[120px]", className)}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
