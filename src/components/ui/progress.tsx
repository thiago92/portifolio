import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value: number;
  label?: string; // Prop para a legenda
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, label, ...props }, ref) => (
  <div className="w-full">
    {label && <div className="mb-2 text-sm text-yellow-600">{label}</div>} {/* Legenda acima */}
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-primary/20",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="relative h-full bg-primary transition-all"
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
      <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-yellow-500">
          {value}%
      </span> {/* Legenda dentro da barra */}
    </ProgressPrimitive.Root>
  </div>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
