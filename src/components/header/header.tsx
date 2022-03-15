import { EvilIcons, Feather } from "@expo/vector-icons";
import React from "react";
import { Animated, TextInput, View } from "react-native";
import { SearchBar } from "react-native-elements";
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
        {/* <Animated.View
          style={[
            {
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "orange",
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [200, -100],
                  }),
                },
              ],
            },
          ]}
        >
          <EvilIcons
            name="search"
            size={32}
            color="grey"
            onPress={toggleAnimation}
          />
        </Animated.View>
        <Animated.View
          style={{
            // backgroundColor: "blue",
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 50],
                }),
              },
            ],
          }}
        >
          <TextInput
            placeholder="Search for a pokemon"
            style={{
              flex: 1,
            }}
          />
        </Animated.View> */}
        <SearchBarUI
        // onPress={toggleAnimation}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feather name="sun" size={24} color="grey" />
      </View>
    </View>
  );
};
