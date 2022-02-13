import React from "react";
import { Text, View } from "react-native";
import { termStyles } from "./terms.style";


export interface TermUIProps {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  name: string;
};

export const TermUI: React.FC<TermUIProps> = ({
  leftIcon,
  rightIcon,
  name,
}): JSX.Element => {
  return (
    <View
      style={termStyles.container} 
    >
      {
        leftIcon != undefined
        ? leftIcon
        : null
      }  
      <Text style={termStyles.name}>{name}</Text>
      {
        rightIcon != undefined
        ? rightIcon
        : null
      }  
    </View>
  );
};