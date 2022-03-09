import React from "react";
import { Text, View } from "react-native";
import { termStyles } from "../terms.style";

interface LeftGroupProps {
  leftIcon?: JSX.Element;
  term: string;
}

export const LeftGroup: React.FC<LeftGroupProps> = ({ leftIcon, term }) => (
  <View style={termStyles.nameContainer}>
    {leftIcon != undefined ? leftIcon : null}
    <Text style={termStyles.name}>{term}</Text>
  </View>
);
