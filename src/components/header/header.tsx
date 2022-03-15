import { EvilIcons, Feather } from "@expo/vector-icons";
import React from "react";
import { Animated, TextInput, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { ThemeIcon } from "../icons/theme";
import { SearchBarUI } from "../search-bar";

export const Header = () => {
  const [searchBarShown, setSearchBarShown] = React.useState(false);

  const animation = React.useRef(new Animated.Value(0)).current;

  const toggleAnimation = () => {
    setSearchBarShown(!searchBarShown);
    Animated.timing(animation, {
      toValue: searchBarShown ? 0 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const toggleJustifyContent = () => {
    Animated.timing(animation, {
      toValue: searchBarShown ? 1 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  // TODO: #24 Add animation for Theme Icon
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        backgroundColor: "white",
        flexDirection: "row",
      }}
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
