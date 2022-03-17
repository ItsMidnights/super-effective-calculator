import { Feather } from "@expo/vector-icons";
import React, { createRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  Easing,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
  measure,
  runOnUI,
} from "react-native-reanimated";
import { mix, useTiming } from "react-native-redash";
import { useRecoilValue } from "recoil";
import { theme } from "../../data/store";

export interface SearchBarUIProps {
  onPress?: () => void;
}

export const SearchBarUI: React.FC<SearchBarUIProps> = ({
  onPress,
}): JSX.Element => {
  const currentTheme = useRecoilValue(theme);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value
      ? withTiming(1, { duration: 800 })
      : withTiming(0, { duration: 800 })
  );
  const crossIconPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(progress.value, [0, 0.8, 1], [0, 0, 1]),
    };
  }, []);

  const searchIconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            progress.value,
            [1, 0],
            [0, crossIconPositionX.value]
          ),
        },
      ],
    };
  }, []);

  // TODO #21 compartmentalize nested components
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.searchIconContainer, searchIconAnimatedStyle]}
      >
        <TouchableOpacity
          onPress={() => {
            open.value = !open.value;
          }}
        >
          <Feather
            name="search"
            size={24}
            color={currentTheme === "light" ? "grey" : "#fff"}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.textInputContainer, animatedStyle]}>
        <TextInput
          placeholder="Search for a Pokemon"
          placeholderTextColor={currentTheme === "light" ? "grey" : "#fff"}
          style={[
            styles.textInput,
            {
              color: currentTheme === "light" ? "grey" : "#fff",
            },
          ]}
        />
      </Animated.View>
      <Animated.View
        style={[styles.crossIconContainer, animatedStyle]}
        onLayout={(e) => {
          runOnUI(() => {
            "worklet";
            crossIconPositionX.value = e.nativeEvent.layout.x;
          })();
        }}
      >
        <Feather
          name="x"
          size={24}
          color={currentTheme === "light" ? "grey" : "#fff"}
          style={styles.crossIconContainer}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    maxWidth: 400,
  },
  searchIcon: {},
  searchIconContainer: {
    zIndex: 3,
  },
  textInput: {
    fontSize: 18,
  },
  textInputContainer: {},
  crossIcon: {},
  crossIconContainer: {},
});
