import React from "react";
import { TypesUI, TypesUIProps } from "./types.ui";

export type TypesProps = {} & TypesUIProps;

export const Types: React.FC<TypesProps> = ({
  key,
  type 
}): JSX.Element => {
  return (
    <>
      <TypesUI
        key={key}
        type={type}
      />
    </>
  );
};