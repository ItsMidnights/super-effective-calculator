import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleProp, TextStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface BackIconProps {
  color: string;
  onPress?: () => void;
  size: number;
  style?: StyleProp<TextStyle>;
}

export const Back: React.FC<BackIconProps> = ({
  color,
  onPress,
  style,
  size,
}): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="arrow-back" color={color} size={size} style={[style]} />
    </TouchableOpacity>
  );
};
