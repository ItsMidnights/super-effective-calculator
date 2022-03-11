import React from "react";
import { LayoutType } from "../types";
import { Dimensions, ScaledSize } from "react-native";
import { useRecoilState } from "recoil";
import { layoutState } from "../data/store";
import { determineLayout } from "../functions";

// A void hook for Window Breakpoint Listener.
export const useLayoutListener = (): void => {
  const [layout, setLayout] = useRecoilState(layoutState);

  const handleUpdate = React.useCallback(
    ({ window, screen }: { window: ScaledSize; screen: ScaledSize }) => {
      const currentLayout = handleDetermineLayout(window.width);
      if (currentLayout != layout) {
        setCurrentLayout(currentLayout);
      }
    },
    [layout]
  );

  const handleDetermineLayout = React.useCallback(
    (width: number) => determineLayout(width),
    []
  );

  const setCurrentLayout = React.useCallback(
    (currentLayout: LayoutType): void => {
      setLayout(currentLayout);
    },
    [layout]
  );

  return React.useEffect(() => {
    const _unsubscribe = Dimensions.addEventListener("change", handleUpdate);
    return _unsubscribe;
  }, [layout]);
};
