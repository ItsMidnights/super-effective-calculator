import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export interface ThemeIconProps {}

export const ThemeIcon: React.FC<ThemeIconProps> = ({}): JSX.Element => {
  const [theme, setTheme] = React.useState(false);

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={() => {
          setTheme(!theme);
        }}
      >
        {theme ? (
          <FontAwesome name="sun-o" size={24} color="grey" />
        ) : (
          <FontAwesome name="moon-o" size={24} color="grey" />
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
