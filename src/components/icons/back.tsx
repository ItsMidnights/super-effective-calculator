import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface BackIconProps {
  color: string;
  onPress?: () => void;
  size: number;
};

export const Back: React.FC<BackIconProps> = ({
  color,
  onPress,
  size
}): JSX.Element => {
  return (
    <Ionicons 
      name="arrow-back"
      color={color}
      onPress={onPress}
      size={size} 
    /> 
  );
}