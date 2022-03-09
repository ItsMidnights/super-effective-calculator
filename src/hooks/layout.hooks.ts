import { useCallback, useState } from "react";
import { LayoutType } from "../types";
import { MOBILE } from "../constants/layout.constants";
import { LayoutContext } from "../context/layout";
import { useWindowDimensions } from "react-native";

export const useLayout = (): LayoutContext => {
  const [layout, setLayout] = useState<LayoutType>(MOBILE);

  const setCurrentLayout = useCallback((currentLayout: LayoutType): void => {
    setLayout(currentLayout);
  }, []);

  return {
    layout: layout,
    setLayout: setCurrentLayout,
  };
};
