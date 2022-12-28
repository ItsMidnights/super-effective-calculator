import React from "react";
import { TermUI, TermUIProps } from "./terms.ui";

export type TermProps = {} & TermUIProps;

export const Term: React.FC<TermProps> = ({
  excess,
  leftIcon,
  onPress,
  term,
  types,
  index,
  lastTerm,
}): JSX.Element => {
  console.log("key", index);
  console.log("last term the second", lastTerm);
  return (
    <TermUI
      index={index}
      excess={excess}
      leftIcon={leftIcon}
      onPress={onPress}
      term={term}
      types={types}
      lastTerm={lastTerm}
    />
  );
};
