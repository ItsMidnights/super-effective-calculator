import { Platform, StyleSheet } from "react-native";

export const pokemonStyle = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        paddingTop: 40
      }
    }),
  }
});