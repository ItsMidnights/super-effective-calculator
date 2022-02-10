import { useCallback, useState } from "react";
import { MOBILE } from "../constants/layout.constants";
import { LayoutContext } from "../context/layout";

export const useLayout = (): LayoutContext => {
  const [layout, setLayout] = useState(MOBILE);

  const setCurrentLayout = useCallback((currentLayout: string): void => {
    setLayout(currentLayout);
  }, []);

  return {
    layout: layout,
    setLayout: setCurrentLayout
  }
}