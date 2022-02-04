import { Text } from "react-native";
import { colors } from "../../style/colors";

interface TitleProps {
  children: string;
}

export const Title = ({ children, }: TitleProps) => (
  <Text style={[
    { fontSize: 30 }, 
    colors.primaryText,
  ]}>
    {children}
  </Text>
);