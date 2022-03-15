import { Feather } from "@expo/vector-icons";
import { StyleProp, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";

type CancelProps = {
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

export const Cancel = ({
  color = "black",
  size = 24,
  style,
  ...rest
}: CancelProps) => {
  return (
    <Animated.View style={style}>
      <Feather name="x" size={size} color={color} {...rest} />
    </Animated.View>
  );
};
