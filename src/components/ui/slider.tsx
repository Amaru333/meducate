"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>>(({ className, ...props }, ref) => (
  <div className="group/slider">
    <SliderPrimitive.Root ref={ref} className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
      <div className="h-1.5 flex w-full items-center opacity-80 hover:opacity-100">
        <SliderPrimitive.Track className="relative h-1 group-hover/slider:h-1.5 w-full grow overflow-hidden rounded-full bg-secondary transition-all cursor-pointer">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
      </div>
      <SliderPrimitive.Thumb className="cursor-pointer block h-3 w-3 hover:h-4 hover:w-4 active:h-3 active:w-3 rounded-full border-2 border-primary bg-background ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  </div>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
