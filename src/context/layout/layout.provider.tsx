import React from "react";
import { Dimensions } from "react-native";
import { withDecay } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { MOBILE_MAX_WIDTH } from "../../constants";
import { selectLayout, update } from "../../data/store/layout.slice";
import { determineLayout } from "../../functions/util/layout.function";
import { SafeAreaWrapper } from "../../views/util/SafeAreaWrapper";

export default function ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const layout = useSelector(selectLayout);
  const dispatch = useDispatch();

  // Only Re-Render the children if a layout breakpoint has been hit
  React.useEffect(() => {
    const _unsubscribe = Dimensions.addEventListener("change", ({ window }) => {
      const { width } = window;
      const currentLayout = determineLayout(width);
      if (currentLayout != layout) {
        dispatch(update(currentLayout));
      }
    });
    console.log("Current Layout:\n", layout);

    return _unsubscribe;
  }, [layout]);

  return <SafeAreaWrapper>{children}</SafeAreaWrapper>;
}
