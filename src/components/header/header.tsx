import { EvilIcons, Feather } from "@expo/vector-icons";
import React from "react";
import { Animated, TextInput, View, StyleSheet, Platform } from "react-native";
import { SearchBar } from "react-native-elements";
import { useRecoilValue } from "recoil";
import { theme } from "../../data/store";
import { ThemeIcon } from "../icons/theme";
import { SearchBarUI } from "../search-bar";

export const Header = () => {
  const currentTheme = useRecoilValue(theme);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: currentTheme === "light" ? "#fff" : "#000",
        },
      ]}
    >
      <View style={{ flex: 1 }} />
      <View
        style={{
          flex: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SearchBarUI />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThemeIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    // ...Platform.select({
    //   android: {
    //     paddingTop: 40,
    //   },
    // }),
  },
});
