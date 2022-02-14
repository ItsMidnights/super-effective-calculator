import React from "react";
import { TermUI, TermUIProps } from "./terms.ui";

export type TermProps = {} & TermUIProps;

export const Term: React.FC<TermProps> = ({
  excess,
  leftIcon,
  onPress,
  term,
  types,
}): JSX.Element => {
  return (
    <>
      <TermUI
        excess={excess}
        leftIcon={leftIcon}
        onPress={onPress}
        term={term}
        types={types}
      />
    </>
  );
};