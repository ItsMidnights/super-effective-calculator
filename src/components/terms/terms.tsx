import React from "react";
import { TermUI, TermUIProps } from "./terms.ui";

export type TermProps = {} & TermUIProps;

export const Term: React.FC<TermProps> = ({
  leftIcon,
  onPress,
  name,
  types,
}): JSX.Element => {
  return (
    <>
      <TermUI
        leftIcon={leftIcon}
        onPress={onPress}
        name={name}
        types={types}
      />
    </>
  );
};