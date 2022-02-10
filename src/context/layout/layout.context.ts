import { createContext } from "react";

export interface LayoutContext {
  layout: string;
  setLayout: (layout: string) => void;
}

export const LAYOUT_DEFAULT_VALUE: LayoutContext = {
  layout: "mobile",
  setLayout: () => {}
}

export const layoutContext = createContext<LayoutContext>
(LAYOUT_DEFAULT_VALUE);