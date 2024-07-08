"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const SliderWithoutThumb = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>>(({ className, ...props }, ref) => (
  <div>
    <SliderPrimitive.Root ref={ref} className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
      <div className="h-1.5 flex w-full items-center opacity-80 hover:opacity-100">
        <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-secondary transition-all cursor-pointer">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
      </div>
      <SliderPrimitive.Thumb className="cursor-pointer block h-0 w-0 rounded-full bg-primary" />
    </SliderPrimitive.Root>
  </div>
));
SliderWithoutThumb.displayName = SliderPrimitive.Root.displayName;

export { SliderWithoutThumb };
