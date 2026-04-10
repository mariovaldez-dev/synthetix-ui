import type * as React from "react";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import type { ButtonProps } from "../button/button.types";

export type CarouselApiType = UseEmblaCarouselType[1];

export interface CarouselContextProps {
  carouselRef: ReturnType<typeof import("embla-carousel-react").default>[0];
  api: CarouselApiType;
  opts?: CarouselProps["opts"];
  orientation?: "horizontal" | "vertical";
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: Parameters<typeof import("embla-carousel-react").default>[0];
  plugins?: Parameters<typeof import("embla-carousel-react").default>[1];
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApiType) => void;
}

export type CarouselContentProps = React.HTMLAttributes<HTMLDivElement>;
export type CarouselItemProps = React.HTMLAttributes<HTMLDivElement>;
export interface CarouselButtonProps extends React.ComponentProps<"button"> {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}
