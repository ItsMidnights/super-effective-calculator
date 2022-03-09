import { createContext } from "react";
import { LayoutType } from "../../types";

export interface LayoutContext {
  layout: LayoutType;
  setLayout: (layout: string) => void;
}

export const LAYOUT_DEFAULT_VALUE: LayoutContext = {
  layout: "mobile",
  setLayout: () => {},
};

export const layoutContext = createContext<LayoutContext>(LAYOUT_DEFAULT_VALUE);
