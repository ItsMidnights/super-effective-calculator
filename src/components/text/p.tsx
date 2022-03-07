import { StyleProp, Text, TextStyle } from "react-native";
import { colors, fonts } from "../../style";

interface ParagraphProps {
  children: string | string[];
  style?: StyleProp<TextStyle>;
}

export const P = ({ children, style }: ParagraphProps) => {
  return (
    <>
      <Text
        style={[
          fonts.secondary,
          colors.white,
          style
        ]} 
      >{children}</Text>
    </>
  );
}