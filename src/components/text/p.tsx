import { Text } from "react-native";
import { colors, fonts } from "../../style";

export const P = ({ children }: { children: string | string[] }) => {
  return (
    <>
      <Text
        style={[
          fonts.secondary,
          colors.white,
          { fontSize: 18 }
        ]} 
      >{children}</Text>
    </>
  );
}