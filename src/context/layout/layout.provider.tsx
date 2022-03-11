import React from "react";
import { Dimensions } from "react-native";
import { determineLayout } from "../../functions/util/layout.function";
import { SafeAreaWrapper } from "../../views/util/SafeAreaWrapper";

export default function ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  // Only Re-Render the children if a layout breakpoint has been hit
  React.useEffect(() => {
    const _unsubscribe = Dimensions.addEventListener("change", ({ window }) => {
      const { width } = window;
      const currentLayout = determineLayout(width);
      console.log(currentLayout);
    });

    return _unsubscribe;
  }, []);

  return <SafeAreaWrapper>{children}</SafeAreaWrapper>;
}
