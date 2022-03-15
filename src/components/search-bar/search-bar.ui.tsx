import { Feather } from "@expo/vector-icons";
import { mixin } from "lodash";
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

export interface SearchBarUIProps {
  onPress?: () => void;
}

export const SearchBarUI: React.FC<SearchBarUIProps> = ({
  onPress,
}): JSX.Element => {
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
            color="grey"
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.textInputContainer, animatedStyle]}>
        <TextInput
          placeholder="Search for a Pokemon"
          style={[styles.textInput]}
        />
      </Animated.View>
      <Animated.View
        style={[styles.crossIconContainer, animatedStyle]}
        onLayout={(e) => {
          crossIconPositionX.value = e.nativeEvent.layout.x;
        }}
      >
        <Feather
          name="x"
          size={24}
          color="grey"
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
