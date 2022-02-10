import React, {  useEffect, useLayoutEffect } from "react";
import { useWindowDimensions } from "react-native";
import { layoutContext } from ".";
import { determineLayout } from "../../functions/util/layout.function";
import { useLayout } from "../../hooks/layout.hooks";

export default function ({ children }: { children: React.ReactNode }): JSX.Element {

  const layout = useLayout();
  const { width } = useWindowDimensions();

  // Only Re-Render the children if a layout breakpoint has been hit
  useEffect(() => {
    layout.setLayout(determineLayout(width));
  }, [width]);

  return (
    <layoutContext.Provider value={layout}>
      { children }
    </layoutContext.Provider>
  );
}