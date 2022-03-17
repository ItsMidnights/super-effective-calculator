import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useRecoilState } from "recoil";
import { theme } from "../../data/store";
import Animated, {
  concat,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export interface ThemeIconProps {}

// TODO: #24 Add animation for Theme Icon
export const ThemeIcon: React.FC<ThemeIconProps> = ({}): JSX.Element => {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={() => {
          setCurrentTheme(currentTheme === "light" ? "dark" : "light");
        }}
      >
        {currentTheme === "light" ? (
          <FontAwesome
            name="sun-o"
            size={24}
            color={currentTheme === "light" ? "grey" : "#fff"}
          />
        ) : (
          <FontAwesome
            name="moon-o"
            size={24}
            color={currentTheme === "light" ? "grey" : "#fff"}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
