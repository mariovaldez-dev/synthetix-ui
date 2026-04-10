import * as React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import type { AspectRatioProps } from "./aspect-ratio.types";

export const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(({ ...props }, ref) => (
  <AspectRatioPrimitive.Root ref={ref} {...props} />
));
AspectRatio.displayName = AspectRatioPrimitive.Root.displayName;
