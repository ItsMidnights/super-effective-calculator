import React from "react";
import {
  Platform,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  StyleProp,
  ViewStyle,
} from "react-native";

interface SafeContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const SafeContainer: React.FC<SafeContainerProps> = ({
  children,
  style,
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
});
