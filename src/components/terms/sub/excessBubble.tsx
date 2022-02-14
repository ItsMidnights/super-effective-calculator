import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../../style/colors";
import { termStyles } from "../terms.style";

export interface ExcessProps {
  excess?: number;
};

export const Excess: React.FC<ExcessProps> = ({
  excess,
}): JSX.Element => {
  return (
    <View
      style={[
        termStyles.bubble
      ]} 
    >
      <Text style={[
        colors.white,
        termStyles.bubbleText
      ]}>{excess + "+"}</Text>  
    </View>
  );
};