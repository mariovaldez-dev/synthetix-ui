// @ts-nocheck
import * as React from "react";
import type { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export interface ResizablePanelGroupProps
  extends React.ComponentProps<typeof PanelGroup> {}

export interface ResizablePanelProps
  extends React.ComponentProps<typeof Panel> {}

export interface ResizableHandleProps
  extends React.ComponentProps<typeof PanelResizeHandle> {
  withHandle?: boolean;
}
