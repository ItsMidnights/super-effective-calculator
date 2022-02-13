import React from "react";
import { TermUI, TermUIProps } from "./terms.ui";

export type TermProps = {} & TermUIProps;

export const Term: React.FC<TermProps> = ({
  leftIcon,
  rightIcon,
  name
}): JSX.Element => {
  return (
    <>
      <TermUI
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        name={name}
      />
    </>
  );
};