import { createContext } from "react";

export interface LayoutContext {
  layout: string;
  setCurrentLayout: (currentLayout: string) => void;
}

export const LAYOUT_DEFAULT_VALUE: LayoutContext = {
  layout: "mobile",
  setCurrentLayout: () => {}
}

export const layoutContext = createContext<LayoutContext>
(LAYOUT_DEFAULT_VALUE);