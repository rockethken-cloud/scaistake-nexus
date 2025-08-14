import * as React from "react"
import { cn } from "@/lib/utils"

const GlassCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl bg-gradient-glass backdrop-blur-sm border border-border/20 shadow-glass",
      className
    )}
    {...props}
  />
))
GlassCard.displayName = "GlassCard"

export { GlassCard }