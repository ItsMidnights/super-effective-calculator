import { Platform, StyleSheet } from "react-native";

export const searchBarStyles = StyleSheet.create({
  container: {
    minWidth: "90%",
    ...Platform.select({
      ios: {},
    }),
  },
  searchBarContainer: {
    borderRadius: 25,
  },
  inputContainer: {
    backgroundColor: "#E1E8EE",
    borderRadius: 25,
  },
  input: {
    fontFamily: "Roboto_300Light",
    color: "black",
  },
  rightContainer: {
    padding: 10,
  },
});

// export const layoutSpecific = StyleSheet.create({
//   mobile: StyleSheet.create({
//     ...searchFormStyles,
//   }),
//   tablet: StyleSheet.create({
//     ...searchFormStyles
//   }),
//   web: StyleSheet.create({
//     ...searchFormStyles,
//   }),
// });
