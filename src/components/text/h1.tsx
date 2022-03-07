import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { colors, fonts } from "../../style";


export const H1 = ({ style, children }: { children: string; style?: StyleProp<TextStyle> }): JSX.Element => {
  return (
    <>
      <Text
        style={[
          fonts.primary,
          fonts.bold,
          colors.white,
          style
        ]} 
      >{children}</Text>
    </>
  );
}