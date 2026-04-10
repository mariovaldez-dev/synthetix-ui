import type * as React from "react";

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
    theme?: Record<"light" | "dark", string>;
  };
};

export interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig;
  children: React.ComponentProps<"div">["children"];
}

export interface ChartTooltipContentProps {
  active?: boolean;
  payload?: any[];
  className?: string;
  indicator?: "line" | "dot" | "dashed";
  hideLabel?: boolean;
  hideIndicator?: boolean;
  label?: any;
  labelFormatter?: (label: any, payload: any[]) => React.ReactNode;
  labelClassName?: string;
  formatter?: (value: any, name: any, item: any, index: number, payload: any) => React.ReactNode;
  color?: string;
  nameKey?: string;
  labelKey?: string;
}

export interface ChartLegendContentProps {
  className?: string;
  payload?: any[];
  verticalAlign?: "top" | "bottom";
  hideIcon?: boolean;
  nameKey?: string;
}
